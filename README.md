# Portfolio CV - Raphaël Benat Renucci

Site web professionnel de CV créé avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Déploiement sur Vercel (Gratuit)

### Prérequis
- Un compte GitHub (gratuit)
- Un compte Vercel (gratuit) - [vercel.com](https://vercel.com)

### Étapes de déploiement

#### 1. Initialiser Git et pousser sur GitHub

```bash
# Dans le dossier portfolio
cd portfolio

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - CV website"

# Créer un nouveau repository sur GitHub (via l'interface web)
# Puis lier votre repository local :
git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
git branch -M main
git push -u origin main
```

#### 2. Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com) et connectez-vous avec GitHub
2. Cliquez sur "Add New Project"
3. Importez votre repository GitHub
4. Vercel détectera automatiquement Next.js
5. Cliquez sur "Deploy"
6. Attendez quelques minutes - votre site sera en ligne !

### 🎉 C'est tout !

Vercel vous donnera une URL du type : `https://votre-projet.vercel.app`

Chaque fois que vous pousserez des modifications sur GitHub, Vercel redéploiera automatiquement votre site.

## 📝 Modifier le contenu

Pour mettre à jour vos informations :

1. Ouvrez le fichier `data/resume.ts`
2. Modifiez les données (expérience, compétences, etc.)
3. Sauvegardez
4. Testez localement avec `npm run dev`
5. Poussez sur GitHub - Vercel mettra à jour automatiquement

## 🛠️ Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

## 📦 Build de production

```bash
npm run build
npm start
```

## 🎨 Fonctionnalités

- ✅ Design professionnel et sobre
- ✅ Mode sombre automatique
- ✅ Responsive (mobile/tablette/desktop)
- ✅ Navigation fluide
- ✅ Page CV complète
- ✅ Page lettre de motivation
- ✅ Optimisé pour le SEO
- ✅ Performance optimale

## 📧 Contact

Pour toute question : raphael.benat-renucci@inseec.net
