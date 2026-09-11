# NEXIS GROUPE — Frontend premium

Frontend corporate réalisé avec Next.js, TypeScript et GSAP. Aucun gradient CSS n'est utilisé.

## Installation

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

## Build production

```bash
npm run build
npm run start
```

## Palette

- Graphite: `#111310`
- Ivoire: `#F1EEE6`
- Papier: `#FAF8F2`
- Bronze mat: `#A7835B`
- Bleu pétrole: `#153C3C`

## Pages

- `/` — Accueil
- `/groupe` — Présentation du groupe
- `/activites` — Les 14 pôles
- `/activites/[slug]` — Page dynamique de chaque pôle
- `/realisations`
- `/actualites`
- `/contact`

## À personnaliser avant mise en production

1. Coordonnées réelles de NEXIS GROUPE.
2. Logo officiel si disponible.
3. Photos officielles / droits d'utilisation des images.
4. Réalisations et chiffres réels.
5. Connexion du formulaire à votre backend/API.
6. Domaine dans `metadataBase`, sitemap et robots.

## Images

La version de démonstration utilise des images distantes Unsplash. Remplacez-les par les médias officiels du groupe pour la production.

## Pages métiers complètes

Chaque pôle dispose désormais d'une page détaillée avec : positionnement, publics cibles, image secondaire, approche métier, solutions, expertises, méthode en 4 étapes, engagements et CTA sectoriel.

Les 14 pôles couverts sont : NEXIS IMMO, JAMBAAR BTP, NEXIS AUTO, NEXIS IMPORT EXPORT, NEXIS ÉLECTRONIQUE, NEXIS AGRO BUSINESS, NEXIS ÉVÉNEMENTIEL, NEXIS COMMERCE GÉNÉRAL, NEXIS NÉGOCE & DISTRIBUTION, NEXIS TRANSPORT & LOGISTIQUE, NEXIS ENERGY, NEXIS TECH & DIGITAL, NEXIS CONCIERGERIE et NEXIS SERVICES / ASSIST.

La direction artistique n'utilise aucun gradient CSS. Les différences visuelles reposent sur la composition, la photographie, les contrastes, la typographie et les animations.

## Expérience motion premium

La version actuelle ajoute une couche d'interaction premium inspirée des sites de studios créatifs : hero cinématique, parallax au scroll, déplacement subtil au pointeur, transitions de pages par masque, curseur desktop réactif, boutons magnétiques, mega-menu illustré, changement de visuel au survol des pôles, rail horizontal piloté par le scroll, hover cinématique sur les projets et cartes, et respect de `prefers-reduced-motion`.

Le design n'utilise aucun gradient CSS. La palette repose uniquement sur des aplats graphite, ivoire, bronze mat et pétrole profond.

## Images

Les anciens crops générés ont été retirés. Les visuels éditoriaux sont maintenant des photographies HD sélectionnées par activité et chargées depuis `images.pexels.com` via `next/image`. Pour un déploiement totalement autonome, vous pouvez ultérieurement télécharger ces sources dans `public/images/` sans modifier la structure des composants.
# Nexis-Groupe
# Nexis-Groupe
# Nexis-Groupe
