# Portfolio CV - Raphaël Benat Renucci.

Site web professionnel de CV développé avec Next.js, TypeScript et Tailwind CSS.

## Déploiement sur Vercel

### Prérequis
- Un compte GitHub
- Un compte Vercel

### Étapes de déploiement

#### 1. Initialiser Git et pousser sur GitHub

```bash
# Dans le dossier du projet
git init
git add .
git commit -m "Initial commit"

# Lier le repository local à GitHub
git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
git branch -M main
git push -u origin main
```

#### 2. Déployer sur Vercel

1. Connectez-vous à Vercel avec GitHub
2. Sélectionnez "Add New Project"
3. Importez le repository GitHub
4. Cliquez sur "Deploy"

L'URL de production sera générée automatiquement (ex: `https://votre-projet.vercel.app`). Les mises à jour poussées sur GitHub déclencheront un redéploiement automatique.

## Modification du contenu

Le contenu du CV est centralisé dans un fichier de données pour faciliter les mises à jour.

1. Éditer le fichier `data/resume.ts`
2. Modifier les informations souhaitées
3. Tester localement (`npm run dev`)
4. Pousser les changements sur GitHub

## Développement local

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev
# Accès : http://localhost:3000
```

## Build de production

```bash
npm run build
npm start
```

## Fonctionnalités

- Design professionnel et minimaliste
- Support du mode sombre
- Interface responsive (mobile/tablette/desktop)
- Navigation fluide
- Architecture optimisée pour le SEO et la performance

## Contact

Raphaël Benat Renucci - raphael.benat-renucci@inseec.net
