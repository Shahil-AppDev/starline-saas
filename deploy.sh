#!/bin/bash

###############################################################################
# STARLINE CREATOR HUB - SCRIPT DE DÉPLOIEMENT AUTOMATISÉ
# Description: Déploie le backend Laravel et le frontend Next.js sur VPS
# Usage: ./deploy.sh [production|staging]
###############################################################################

set -e

# Configuration
ENV=${1:-production}
VPS_HOST="root@77.42.34.90"
PROJECT_NAME="starline-creator"
BACKEND_PORT=8003
FRONTEND_PORT=3003
REDIS_PORT=6381
DOMAIN="starline-agency.xyz"

# Couleurs pour logs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

###############################################################################
# 1. VALIDATION PRÉ-DÉPLOIEMENT
###############################################################################
log_info "Validation de l'environnement local..."

if [ ! -f "backend/composer.json" ]; then
    log_error "Répertoire backend introuvable"
    exit 1
fi

if [ ! -f "frontend/package.json" ]; then
    log_error "Répertoire frontend introuvable"
    exit 1
fi

log_success "Structure du projet validée"

###############################################################################
# 2. BUILD LOCAL
###############################################################################
log_info "Build du frontend en local..."
cd frontend
npm install
npm run build
cd ..
log_success "Frontend buildé"

###############################################################################
# 3. PRÉPARATION VPS
###############################################################################
log_info "Préparation du VPS..."

ssh $VPS_HOST << 'ENDSSH'
set -e

# Créer répertoires
mkdir -p /var/www/starline-creator-backend
mkdir -p /var/www/starline-creator-frontend

# Vérifier PostgreSQL
if ! systemctl is-active --quiet postgresql; then
    echo "PostgreSQL n'est pas actif"
    exit 1
fi

# Vérifier Redis
if ! command -v redis-server &> /dev/null; then
    echo "Redis n'est pas installé"
    exit 1
fi

echo "VPS prêt"
ENDSSH

log_success "VPS préparé"

###############################################################################
# 4. DÉPLOIEMENT BACKEND
###############################################################################
log_info "Déploiement du backend Laravel..."

# Upload backend
rsync -avz --delete \
    --exclude 'node_modules' \
    --exclude 'vendor' \
    --exclude '.git' \
    --exclude 'storage/logs/*' \
    --exclude '.env' \
    backend/ $VPS_HOST:/var/www/starline-creator-backend/

# Configuration backend
ssh $VPS_HOST << 'ENDSSH'
set -e
cd /var/www/starline-creator-backend

# Composer install
composer install --no-dev --optimize-autoloader

# Permissions
chown -R www-data:www-data storage bootstrap/cache
chmod -R 775 storage bootstrap/cache

# Vérifier .env
if [ ! -f .env ]; then
    echo "Fichier .env manquant sur le serveur"
    exit 1
fi

# Générer APP_KEY si nécessaire
if ! grep -q "APP_KEY=base64:" .env; then
    php artisan key:generate --force
fi

# Migrations
php artisan migrate --force

# Cache
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "Backend configuré"
ENDSSH

log_success "Backend déployé"

###############################################################################
# 5. CONFIGURATION BASE DE DONNÉES
###############################################################################
log_info "Configuration de la base de données..."

ssh $VPS_HOST << 'ENDSSH'
set -e

# Créer DB et user si nécessaire
sudo -u postgres psql << 'EOSQL'
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'starline_creator') THEN
        CREATE DATABASE starline_creator;
    END IF;
    
    IF NOT EXISTS (SELECT FROM pg_user WHERE usename = 'starline_creator_user') THEN
        CREATE USER starline_creator_user WITH PASSWORD 'StarlineCreator2026SecureDB';
    END IF;
    
    GRANT ALL PRIVILEGES ON DATABASE starline_creator TO starline_creator_user;
    ALTER DATABASE starline_creator OWNER TO starline_creator_user;
END
$$;
EOSQL

echo "Base de données configurée"
ENDSSH

log_success "Base de données prête"

###############################################################################
# 6. CONFIGURATION REDIS
###############################################################################
log_info "Configuration de Redis..."

ssh $VPS_HOST << 'ENDSSH'
set -e

# Créer config Redis si nécessaire
if [ ! -f /etc/redis/redis-creator.conf ]; then
    cat > /etc/redis/redis-creator.conf << 'EOF'
port 6381
bind 127.0.0.1
requirepass StarlineCreator2026SecureRedis
maxmemory 256mb
maxmemory-policy allkeys-lru
appendonly yes
appendfilename "appendonly-creator.aof"
EOF
fi

# Démarrer Redis
if ! pgrep -f "redis-server.*6381" > /dev/null; then
    redis-server /etc/redis/redis-creator.conf --daemonize yes
fi

echo "Redis configuré"
ENDSSH

log_success "Redis démarré"

###############################################################################
# 7. SERVICE SYSTEMD BACKEND
###############################################################################
log_info "Configuration du service backend..."

ssh $VPS_HOST << 'ENDSSH'
set -e

cat > /etc/systemd/system/starline-creator-backend.service << 'EOF'
[Unit]
Description=Starline Creator Hub Backend
After=network.target postgresql.service

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/starline-creator-backend
ExecStart=/usr/bin/php artisan serve --host=127.0.0.1 --port=8003
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable starline-creator-backend
systemctl restart starline-creator-backend

echo "Service backend démarré"
ENDSSH

log_success "Service backend actif"

###############################################################################
# 8. DÉPLOIEMENT FRONTEND
###############################################################################
log_info "Déploiement du frontend Next.js..."

# Upload frontend
rsync -avz --delete \
    --exclude 'node_modules' \
    --exclude '.git' \
    --exclude '.next' \
    frontend/ $VPS_HOST:/var/www/starline-creator-frontend/

# Configuration frontend
ssh $VPS_HOST << 'ENDSSH'
set -e
cd /var/www/starline-creator-frontend

# NPM install
npm install --production

# Build
npm run build

# Permissions
chmod +x node_modules/.bin/next

echo "Frontend configuré"
ENDSSH

log_success "Frontend déployé"

###############################################################################
# 9. SERVICE SYSTEMD FRONTEND
###############################################################################
log_info "Configuration du service frontend..."

ssh $VPS_HOST << 'ENDSSH'
set -e

cat > /etc/systemd/system/starline-creator-frontend.service << 'EOF'
[Unit]
Description=Starline Creator Hub Frontend
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/var/www/starline-creator-frontend
Environment=NODE_ENV=production
Environment=PORT=3003
ExecStart=/var/www/starline-creator-frontend/node_modules/.bin/next start -p 3003
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable starline-creator-frontend
systemctl restart starline-creator-frontend

echo "Service frontend démarré"
ENDSSH

log_success "Service frontend actif"

###############################################################################
# 10. CONFIGURATION NGINX
###############################################################################
log_info "Configuration de NGINX..."

ssh $VPS_HOST << 'ENDSSH'
set -e

cat > /etc/nginx/sites-available/starline-creator.conf << 'EOF'
server {
    listen 80;
    server_name starline-agency.xyz;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name starline-agency.xyz;
    
    ssl_certificate /etc/letsencrypt/live/starline-agency.xyz/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/starline-agency.xyz/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    
    client_max_body_size 100M;
    
    location / {
        proxy_pass http://127.0.0.1:3003;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    location /api {
        proxy_pass http://127.0.0.1:8003;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
}
EOF

# Activer le site
ln -sf /etc/nginx/sites-available/starline-creator.conf /etc/nginx/sites-enabled/

# Tester et recharger NGINX
nginx -t && systemctl reload nginx

echo "NGINX configuré"
ENDSSH

log_success "NGINX configuré"

###############################################################################
# 11. TESTS POST-DÉPLOIEMENT
###############################################################################
log_info "Tests post-déploiement..."

ssh $VPS_HOST << 'ENDSSH'
set -e

# Test backend
if ! curl -sf http://127.0.0.1:8003/api/health > /dev/null; then
    echo "Backend API ne répond pas"
    exit 1
fi

# Test frontend
if ! curl -sf http://127.0.0.1:3003 > /dev/null; then
    echo "Frontend ne répond pas"
    exit 1
fi

# Test HTTPS
if ! curl -sf https://starline-agency.xyz > /dev/null; then
    echo "HTTPS ne répond pas"
    exit 1
fi

echo "Tous les tests passés"
ENDSSH

log_success "Tests réussis"

###############################################################################
# 12. RÉSUMÉ
###############################################################################
echo ""
echo "═══════════════════════════════════════════════════════════════"
log_success "DÉPLOIEMENT TERMINÉ"
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "URLs:"
echo "  - Frontend: https://starline-agency.xyz"
echo "  - API:      https://starline-agency.xyz/api"
echo ""
echo "Services:"
echo "  - Backend:  systemctl status starline-creator-backend"
echo "  - Frontend: systemctl status starline-creator-frontend"
echo ""
echo "Ports:"
echo "  - Backend:  8003"
echo "  - Frontend: 3003"
echo "  - Redis:    6381"
echo ""
echo "Logs:"
echo "  - Backend:  journalctl -u starline-creator-backend -f"
echo "  - Frontend: journalctl -u starline-creator-frontend -f"
echo ""
echo "═══════════════════════════════════════════════════════════════"
