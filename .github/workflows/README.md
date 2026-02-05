# GitHub Actions Workflows

## Déploiement automatique sur VPS

Ce workflow déploie automatiquement l'application sur le VPS à chaque push sur `master` ou `main`.

### Configuration requise

Ajoute ces secrets dans GitHub (Settings → Secrets and variables → Actions) :

1. **VPS_HOST** : `77.42.34.90`
2. **VPS_USER** : `root`
3. **VPS_SSH_KEY** : Clé SSH privée pour se connecter au VPS

### Obtenir la clé SSH

Si tu n'as pas encore de clé SSH dédiée pour GitHub Actions :

```bash
# Sur ton PC local
ssh-keygen -t ed25519 -C "github-actions-starline" -f ~/.ssh/github_actions_starline

# Copier la clé publique sur le VPS
ssh-copy-id -i ~/.ssh/github_actions_starline.pub root@77.42.34.90

# Afficher la clé privée (à copier dans GitHub Secrets)
cat ~/.ssh/github_actions_starline
```

### Workflow déclenché par

- ✅ Push sur `master` ou `main`
- ✅ Déclenchement manuel (onglet Actions → Deploy to VPS → Run workflow)

### Étapes du déploiement

1. **Checkout** : Récupère le code depuis GitHub
2. **Pull** : Met à jour le code sur le VPS
3. **Backend** :
   - `composer install --no-dev --optimize-autoloader`
   - Cache Laravel (config, routes, views)
   - Migrations si nécessaire
4. **Frontend** :
   - `npm install`
   - `npm run build`
5. **Services** :
   - Restart `starline-creator-backend`
   - Restart `starline-creator-frontend`
6. **Vérification** : Check que les services sont actifs

### Logs

Consulte les logs dans l'onglet **Actions** de ton repo GitHub.

### Rollback en cas de problème

```bash
# SSH sur le VPS
ssh root@77.42.34.90

# Revenir à un commit précédent
cd /var/www/starline-creator
git log --oneline -10
git reset --hard <commit-hash>

# Rebuild
cd backend && composer install
cd ../frontend && npm install && npm run build

# Restart
systemctl restart starline-creator-backend starline-creator-frontend
```

### Déploiement manuel (sans GitHub Actions)

```bash
# Depuis ton PC
ssh root@77.42.34.90 "cd /var/www/starline-creator && git pull && cd backend && composer install && cd ../frontend && npm run build && systemctl restart starline-creator-backend starline-creator-frontend"
```
