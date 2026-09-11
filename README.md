# Nexis Groupe — Frontend Premium

Site vitrine corporatif de NEXIS GROUPE, développé avec Next.js 16, React 19, TypeScript et une direction artistique premium orientée brand corporate.

Le projet a été conçu pour présenter un groupe d’entreprises à forte identité, avec un positionnement premium, une navigation fluide, des pages métiers détaillées, ainsi qu’une expérience visuelle inspirée des sites d’agence et de studio.

## Aperçu du projet

- Stack moderne : Next.js, React, TypeScript
- Design system premium : noir profond, ivoire, bronze mat, pétrole
- Animations : GSAP et interactions motion dédiées
- SEO prêt : metadata, sitemap, robots, routes statiques
- Architecture App Router de Next.js
- Déploiement rapide et compatible avec Vercel / Netlify / hébergement Node.js

## Objectifs

- Présenter le groupe NEXIS et ses activités de manière claire et premium
- Mettre en avant les pôles d’expertise et la stratégie d’intégration du groupe
- Valoriser les réalisations, les chiffres clés et les offres métiers
- Faciliter les demandes de contact et l’orientation vers les secteurs
- Avoir un site performant, responsive et facilement extensible

## Fonctionnalités principales

- Landing page corporate immersive
- Présentation du groupe et de la vision globale
- Pages d’activités structurées par pôle
- Pages dynamiques d’activité via route slugée
- Section réalisations / références
- Section actualités
- Formulaire de contact
- Sitemap et robots configurés
- Palette visuelle sans dégradés CSS
- Responsive design et animations premium

## Stack technique

### Frontend
- Next.js 16.3.4
- React 19
- TypeScript 5
- GSAP
- Lucide React
- Three.js (utilisé dans certains éléments visuels 3D)

### Outils de qualité
- ESLint
- Prettier

## Structure du projet

```bash
nexis-groupe-frontend/
├── app/
│   ├── activites/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── actualites/
│   │   └── page.tsx
│   ├── confidentialite/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── groupe/
│   │   └── page.tsx
│   ├── mentions-legales/
│   │   └── page.tsx
│   ├── realisations/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   └── template.tsx
├── components/
│   ├── 3d/
│   ├── sectors/
│   ├── ContactForm.tsx
│   ├── CustomCursor.tsx
│   ├── ExpertiseRail.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Logo.tsx
│   ├── PageHero.tsx
│   ├── PremiumMotion.tsx
│   ├── ProjectsGrid.tsx
│   ├── Reveal.tsx
│   ├── SectorsShowcase.tsx
│   ├── Stats.tsx
│   └── ThemeToggle.tsx
├── data/
│   ├── projects.ts
│   └── sectors.ts
├── public/
│   └── images et assets publics
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── tsconfig.json
├── README.md
└── package-lock.json
```

## Prérequis

Avant de lancer le projet, assure-toi d’avoir installé :

- Node.js 18+ recommandé
- npm ou pnpm
- Git

Vérification rapide :

```bash
node -v
npm -v
```

## Installation

```bash
npm install
```

## Lancement en local

### Mode développement

```bash
npm run dev
```

Puis ouvrir :

```text
http://localhost:3000
```

### Build de production

```bash
npm run build
```

### Démarrage production

```bash
npm run start
```

## Scripts disponibles

```bash
npm run dev      # démarre le serveur Next.js en mode développement
npm run build    # construit le projet pour la production
npm run start    # lance le build en mode production
npm run lint     # vérifie le code avec ESLint
npm run format   # formate les fichiers selon Prettier
```

## Variables d’environnement

Le projet utilise un fichier `.env.example` avec des variables de configuration de base.

Exemple :

```bash
NEXT_PUBLIC_SITE_URL=https://nexisgroupe.com
NEXT_PUBLIC_CONTACT_PHONE=+221000000000
NEXT_PUBLIC_CONTACT_EMAIL=contact@nexisgroupe.com
```

Crée un fichier `.env.local` à partir de cet exemple si nécessaire :

```bash
cp .env.example .env.local
```

## Pages principales

- `/` — Accueil corporate
- `/groupe` — Présentation du groupe
- `/activites` — Catalogue des activités et pôles
- `/activites/[slug]` — Détail d’une activité
- `/realisations` — Projets et références
- `/actualites` — Actualités / contenus éditoriaux
- `/contact` — Formulaire de contact
- `/confidentialite` — Politique de confidentialité
- `/mentions-legales` — Mentions légales

## Direction artistique

Le site suit une esthétique premium et minimaliste :

- Palette foncée dominante
- Blanc cassé / ivoire pour les zones de lumière
- Bronze mat comme accent métallisé
- Bleu pétrole pour les éléments de profondeur
- Aucune dégradation de couleur n’est utilisée pour garder un aspect corporate premium

## Expérience de navigation premium

Plusieurs éléments de motion ont été intégrés pour renforcer la perception premium :

- Hero cinématique
- Animations au scroll
- Effets de survol
- Curseur personnalisé desktop
- Sections révélées progressivement
- Cards dynamiques et transition visuelle
- Gestion de la réduction de mouvement (`prefers-reduced-motion`)

## Personnalisation avant mise en production

Avant de mettre le site en ligne, il est conseillé de modifier :

1. Les coordonnées réelles de l’entreprise
2. Le logo officiel
3. Les photos et visuels de production
4. Les réalisations et références réelles
5. Les données de contact et formulaires
6. Le domaine de publication dans les métadonnées SEO
7. Les contenus des pages métiers si besoin

## Images et médias

Le projet utilise actuellement des images externes (`images.pexels.com`, `images.unsplash.com`) via les règles autorisées dans `next.config.ts`.

Pour un déploiement autonome et plus robuste, il est recommandé de :

- télécharger les assets dans le dossier `public/`
- remplacer les URLs externes par des fichiers locaux
- conserver la même structure de composants si besoin de modification

## SEO et référencement

Le projet comprend :

- `app/sitemap.ts`
- `app/robots.ts`
- metadata basique de pages
- routes statiques optimisées

À compléter selon le domaine réel et le contexte de publication.

## Déploiement

### Vercel (recommandé)

1. Push le dépôt GitHub
2. Connecte le projet sur Vercel
3. Sélectionne le repo
4. Configure le framework comme Next.js
5. Déploie

### Autre hébergement Node.js

```bash
npm run build
npm run start
```

L’application nécessite un environnement Node compatible avec la version Next.js utilisée.

## Validation du projet

Le projet a été vérifié avec une build de production réussie :

```bash
npm install && npm run build
```

Résultat observé :

- installation des dépendances OK
- compilation Next.js OK
- TypeScript OK
- génération des routes statiques OK

## Points d’attention

- Le formulaire de contact n’est pas encore branché à un backend / API réel
- Certaines données restent à remplacer par des informations réelles de l’entreprise
- Les visuels peuvent être remplacés par des médias officiels pour optimisation du branding
- Les contenus éditoriaux peuvent être enrichis selon le besoin métier

## Licence

Le projet est un frontend corporate interne / client. Vérifie la politique de licence et les droits d’utilisation des visuels avant publication publique.

## Contribution

Si tu veux améliorer le projet :

```bash
git checkout -b feature/amelioration
npm install
npm run dev
```

Puis soumettre une pull request avec une description claire des changements.

## Contact / support

Pour adapter ce projet à un environnement réel de production, il est conseillé de préparer :

- un vrai logo officiel
- les vraies coordonnées de l’entreprise
- les ressources visuelles du groupe
- les données de contact et d’actualités
- les liens de réseaux sociaux et pages métier

---

Ce README sert de base documentaire pour le projet. Il peut être enrichi au fil des évolutions du site, des intégrations techniques et des besoins de production.
