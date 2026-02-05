# 🌟 Starline Creator Hub

**Plateforme complète pour créateurs TikTok Live**

Hub professionnel offrant outils, formations et support pour les créateurs de contenu TikTok Live.

---

## 📋 Stack Technique

### Backend
- **Laravel 12** - Framework PHP
- **PostgreSQL** - Base de données
- **Redis** - Cache et sessions
- **Sanctum** - Authentification API

### Frontend
- **Next.js 16** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations

---

## 🚀 Déploiement Rapide

### Prérequis VPS
- Ubuntu 22.04+
- PostgreSQL 14+
- Redis 7+
- Node.js 20+
- PHP 8.2+
- NGINX
- Certbot (SSL)

### Déploiement Automatisé

```bash
# Cloner le repo
git clone https://github.com/votre-org/starline-saas.git
cd starline-saas

# Rendre le script exécutable
chmod +x deploy.sh

# Déployer en production
./deploy.sh production
```

Le script automatise:
- ✅ Build du frontend
- ✅ Upload des fichiers
- ✅ Installation des dépendances
- ✅ Configuration PostgreSQL + Redis
- ✅ Migrations de base de données
- ✅ Services systemd
- ✅ Configuration NGINX + SSL
- ✅ Tests post-déploiement

---

## 🛠️ Développement Local

### Backend Laravel

```bash
cd backend

# Installation
composer install
cp .env.example .env
php artisan key:generate

# Configuration DB
# Éditer .env avec vos credentials PostgreSQL

# Migrations + Seeds
php artisan migrate --seed

# Démarrer le serveur
php artisan serve --port=8003
```

### Frontend Next.js

```bash
cd frontend

# Installation
npm install

# Configuration
cp .env.local.example .env.local

# Développement
npm run dev

# Build production
npm run build
npm start
```

---

## 📁 Structure du Projet

```
starline-creator/
├── backend/                 # Laravel API
│   ├── app/
│   │   ├── Http/Controllers/
│   │   │   └── Api/
│   │   │       ├── AuthController.php
│   │   │       ├── PublicController.php
│   │   │       └── AppController.php
│   │   └── Models/
│   │       ├── CreatorProfile.php
│   │       ├── JoinLead.php
│   │       ├── ToolsCatalog.php
│   │       ├── TrainingsCatalog.php
│   │       └── ...
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   └── routes/
│       └── api.php
│
├── frontend/                # Next.js App
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx         # Home
│   │   │   ├── join/page.tsx    # Candidature
│   │   │   └── globals.css      # Design system
│   │   └── components/
│   └── public/
│
├── nginx/                   # Config NGINX
│   └── starline-creator.conf
│
├── deploy.sh               # Script de déploiement
└── README.md
```

---

## 🔌 API Endpoints

### Public (Non authentifié)

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/public/join-lead` | Soumettre candidature |
| GET | `/api/public/tools` | Liste outils publics |
| GET | `/api/public/trainings` | Liste formations |
| GET | `/api/public/creators` | Showcase créateurs |

### Auth

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Inscription |
| POST | `/api/auth/login` | Connexion |
| POST | `/api/auth/logout` | Déconnexion |
| GET | `/api/auth/me` | Profil utilisateur |

### App (Authentifié)

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/app/dashboard` | Dashboard créateur |
| GET | `/api/app/tools` | Outils créateur |
| GET | `/api/app/trainings` | Formations créateur |
| PATCH | `/api/app/trainings/{id}/progress` | Mettre à jour progression |
| GET | `/api/app/support` | Tickets support |
| POST | `/api/app/support` | Créer ticket |

---

## 🎨 Design System

### Palette de couleurs

```css
--background: #0a0e1a;           /* Bleu nuit profond */
--surface: #0f172a;              /* Surface cards */
--surface-secondary: #111827;    /* Surface alternative */
--foreground: #e2e8f0;           /* Texte principal */
--foreground-muted: #94a3b8;     /* Texte secondaire */
--accent-cyan: #0ea5e9;          /* Accent principal */
--accent-violet: #a855f7;        /* Accent secondaire */
--accent-pink: #ec4899;          /* Accent tertiaire */
```

### Classes utilitaires

```css
.gradient-text        /* Dégradé cyan → violet */
.glow-cyan           /* Ombre lumineuse cyan */
.glow-violet         /* Ombre lumineuse violet */
```

---

## 🔐 Configuration Environnement

### Backend `.env`

```env
APP_NAME="Starline Creator Hub"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://starline-agency.xyz
APP_PORT=8003

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=starline_creator
DB_USERNAME=starline_creator_user
DB_PASSWORD=VotreMotDePasseSecurise

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=VotreMotDePasseRedis
REDIS_PORT=6381

SESSION_DRIVER=redis
CACHE_DRIVER=redis
QUEUE_CONNECTION=redis
```

### Frontend `.env.local`

```env
NEXT_PUBLIC_API_URL=https://starline-agency.xyz/api
NEXT_PUBLIC_APP_URL=https://starline-agency.xyz
PORT=3003
```

---

## 🧪 Tests

### Backend

```bash
cd backend
php artisan test
```

### Frontend

```bash
cd frontend
npm run lint
npm run build  # Vérifie les erreurs TypeScript
```

---

## 📊 Monitoring

### Logs Backend
```bash
journalctl -u starline-creator-backend -f
```

### Logs Frontend
```bash
journalctl -u starline-creator-frontend -f
```

### Status Services
```bash
systemctl status starline-creator-backend
systemctl status starline-creator-frontend
```

---

## 🔄 Mise à Jour

```bash
# Pull dernières modifications
git pull origin main

# Redéployer
./deploy.sh production
```

---

## 🐛 Dépannage

### Backend ne démarre pas
```bash
# Vérifier les logs
journalctl -u starline-creator-backend -n 50

# Vérifier la config
cd /var/www/starline-creator-backend
php artisan config:clear
php artisan cache:clear
```

### Frontend ne démarre pas
```bash
# Vérifier les logs
journalctl -u starline-creator-frontend -n 50

# Rebuild
cd /var/www/starline-creator-frontend
npm run build
systemctl restart starline-creator-frontend
```

### Erreur 502 Bad Gateway
```bash
# Vérifier que les services tournent
systemctl status starline-creator-backend
systemctl status starline-creator-frontend

# Vérifier les ports
netstat -tlnp | grep -E ':(8003|3003)'
```

---

## 📝 License

MIT

---

## 👥 Support

Pour toute question ou problème:
- 📧 Email: support@starline-agency.xyz
- 🐛 Issues: GitHub Issues

---

**Développé avec ❤️ par Starline Agency**
