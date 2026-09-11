export type Sector = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  intro: string;
  description: string;
  image: string;
  services: string[];
  audiences: string[];
  solutions: { title: string; text: string }[];
  process: { step: string; title: string; text: string }[];
  commitments: string[];
  featureTitle: string;
  featureText: string;
  secondaryImage: string;
  closingLine: string;
  visualMode: "editorial" | "technical" | "commerce" | "service";
};

export const sectors: Sector[] = [
  {
    slug: "immobilier",
    name: "NEXIS IMMO",
    shortName: "Immobilier",
    eyebrow: "Patrimoine & foncier",
    visualMode: "editorial",
    intro: "Des actifs solides, pensés pour durer.",
    description:
      "NEXIS IMMO accompagne particuliers, investisseurs et entreprises dans l’acquisition, la cession, la gestion et la valorisation de biens immobiliers et fonciers.",
    image:
      "https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg",
    secondaryImage:
      "https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg",
    services: [
      "Acquisition & vente",
      "Gestion locative & patrimoniale",
      "Accompagnement foncier",
      "Valorisation & commercialisation",
      "Recherche de biens",
      "Conseil aux investisseurs",
    ],
    audiences: [
      "Particuliers",
      "Investisseurs",
      "Promoteurs",
      "Entreprises",
      "Propriétaires",
    ],
    solutions: [
      {
        title: "Acquérir avec méthode",
        text: "Qualification du besoin, recherche ciblée, lecture du potentiel du bien et accompagnement jusqu’à la transaction.",
      },
      {
        title: "Valoriser un patrimoine",
        text: "Positionnement, préparation à la commercialisation, mise en valeur et stratégie de gestion adaptée à l’objectif du propriétaire.",
      },
      {
        title: "Sécuriser le foncier",
        text: "Accompagnement dans les démarches, constitution des éléments du dossier et coordination avec les professionnels compétents.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Cadrage",
        text: "Compréhension du projet, du budget, de la localisation et de l’horizon d’investissement.",
      },
      {
        step: "02",
        title: "Sélection",
        text: "Identification et présélection des opportunités correspondant aux critères définis.",
      },
      {
        step: "03",
        title: "Vérification",
        text: "Collecte des informations utiles et coordination des vérifications documentaires et techniques requises.",
      },
      {
        step: "04",
        title: "Accompagnement",
        text: "Suivi de la transaction puis, si nécessaire, gestion et valorisation du bien.",
      },
    ],
    commitments: [
      "Confidentialité",
      "Sélection rigoureuse",
      "Accompagnement personnalisé",
      "Vision long terme",
    ],
    featureTitle: "L’immobilier comme actif, pas comme simple transaction.",
    featureText:
      "Notre approche associe lecture du marché, qualité du bien, potentiel d’usage et stratégie patrimoniale afin d’aider chaque client à prendre une décision plus structurée.",
    closingLine:
      "Un projet immobilier mérite une vision claire dès le premier échange.",
  },
  {
    slug: "btp",
    name: "JAMBAAR BTP",
    shortName: "BTP",
    eyebrow: "Construction & infrastructures",
    visualMode: "technical",
    intro: "Construire avec méthode, livrer avec exigence.",
    description:
      "JAMBAAR BTP intervient sur des projets de construction, rénovation et réhabilitation avec un pilotage centré sur la qualité d’exécution, la coordination et la maîtrise du chantier.",
    image: "https://images.pexels.com/photos/5505131/pexels-photo-5505131.jpeg",
    secondaryImage:
      "https://images.pexels.com/photos/5505131/pexels-photo-5505131.jpeg",
    services: [
      "Construction neuve",
      "Rénovation",
      "Réhabilitation",
      "Suivi de chantier",
      "Coordination des corps d’état",
      "Travaux d’aménagement",
    ],
    audiences: [
      "Particuliers",
      "Promoteurs",
      "Entreprises",
      "Commerces",
      "Institutions",
    ],
    solutions: [
      {
        title: "Construire",
        text: "Organisation et exécution de travaux pour bâtiments résidentiels, professionnels et projets d’aménagement.",
      },
      {
        title: "Rénover",
        text: "Modernisation des espaces, reprise technique, amélioration fonctionnelle et revalorisation de bâtiments existants.",
      },
      {
        title: "Piloter",
        text: "Planification, coordination des intervenants, suivi des étapes et reporting pour garder une lecture claire du chantier.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Étude du besoin",
        text: "Lecture du programme, contraintes du site, niveau de finition attendu et enveloppe projet.",
      },
      {
        step: "02",
        title: "Planification",
        text: "Découpage des travaux, ressources, séquencement, jalons et organisation des approvisionnements.",
      },
      {
        step: "03",
        title: "Exécution",
        text: "Pilotage des équipes et contrôles réguliers pendant les différentes phases du chantier.",
      },
      {
        step: "04",
        title: "Réception",
        text: "Vérification des travaux réalisés, levée des réserves et accompagnement à la livraison.",
      },
    ],
    commitments: [
      "Qualité d’exécution",
      "Sécurité chantier",
      "Suivi documenté",
      "Coordination rigoureuse",
    ],
    featureTitle: "Chaque chantier est un système à piloter.",
    featureText:
      "Le résultat final dépend autant de la qualité d’exécution que de l’anticipation, de la coordination et de la circulation de l’information entre les intervenants.",
    closingLine: "De l’idée au chantier livré, gardez un seul fil conducteur.",
  },
  {
    slug: "automobile",
    name: "NEXIS AUTO",
    shortName: "Automobile",
    eyebrow: "Mobilité & automobile",
    visualMode: "commerce",
    intro: "Une mobilité choisie, sécurisée et maîtrisée.",
    description:
      "NEXIS AUTO accompagne l’achat, la vente, le sourcing et l’importation de véhicules avec une approche centrée sur la transparence, la sélection et l’accompagnement client.",
    image:
      "https://images.pexels.com/photos/29566880/pexels-photo-29566880.jpeg",
    secondaryImage:
      "https://images.pexels.com/photos/29566880/pexels-photo-29566880.jpeg",
    services: [
      "Achat & vente",
      "Importation",
      "Sourcing personnalisé",
      "Recherche multi-marques",
      "Accompagnement administratif",
      "Conseil avant acquisition",
    ],
    audiences: [
      "Particuliers",
      "Entrepreneurs",
      "Entreprises",
      "Flottes professionnelles",
    ],
    solutions: [
      {
        title: "Trouver le bon véhicule",
        text: "Recherche fondée sur l’usage, le budget, le niveau d’équipement et les préférences du client.",
      },
      {
        title: "Sourcer à l’international",
        text: "Identification d’opportunités et organisation des étapes nécessaires à l’importation selon le projet.",
      },
      {
        title: "Accompagner la décision",
        text: "Présentation claire des options, des caractéristiques et des points de vigilance avant engagement.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brief mobilité",
        text: "Usage, modèle recherché, budget, motorisation et critères prioritaires.",
      },
      {
        step: "02",
        title: "Sourcing",
        text: "Recherche et comparaison de véhicules correspondant au cahier des charges.",
      },
      {
        step: "03",
        title: "Validation",
        text: "Présentation des options et des informations disponibles pour faciliter la décision.",
      },
      {
        step: "04",
        title: "Livraison",
        text: "Coordination des étapes jusqu’à la remise du véhicule et accompagnement associé.",
      },
    ],
    commitments: [
      "Sélection exigeante",
      "Information claire",
      "Accompagnement de bout en bout",
      "Service personnalisé",
    ],
    featureTitle:
      "Le bon véhicule est celui qui correspond réellement à votre usage.",
    featureText:
      "Nous privilégions une sélection cohérente et documentée plutôt qu’une approche purement transactionnelle.",
    closingLine:
      "Parlez-nous du véhicule que vous recherchez, nous structurons le reste.",
  },
  {
    slug: "import-export",
    name: "NEXIS IMPORT EXPORT",
    shortName: "Import Export",
    eyebrow: "Commerce international",
    visualMode: "commerce",
    intro: "Connecter les marchés, sécuriser les flux.",
    description:
      "NEXIS IMPORT EXPORT structure des opérations d’approvisionnement, d’importation, d’exportation et de négoce avec une logique de fiabilité commerciale et de coordination des flux.",
    image:
      "https://images.pexels.com/photos/20045152/pexels-photo-20045152.jpeg",
    secondaryImage:
      "https://images.pexels.com/photos/20045152/pexels-photo-20045152.jpeg",
    services: [
      "Importation",
      "Exportation",
      "Approvisionnement",
      "Négoce international",
      "Sourcing fournisseurs",
      "Coordination logistique",
    ],
    audiences: [
      "Entreprises",
      "Distributeurs",
      "Industriels",
      "Commerçants",
      "Institutions",
    ],
    solutions: [
      {
        title: "Sourcer",
        text: "Recherche de fournisseurs, qualification initiale et consolidation des besoins d’achat.",
      },
      {
        title: "Approvisionner",
        text: "Organisation des commandes et coordination avec les acteurs impliqués dans le flux de marchandises.",
      },
      {
        title: "Développer des débouchés",
        text: "Mise en relation commerciale et structuration d’opportunités entre offreurs et acheteurs.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Besoin",
        text: "Définition du produit, volumes, spécifications, destination et contraintes commerciales.",
      },
      {
        step: "02",
        title: "Sourcing",
        text: "Identification des options et comparaison des conditions disponibles.",
      },
      {
        step: "03",
        title: "Coordination",
        text: "Organisation documentaire, commerciale et logistique avec les partenaires concernés.",
      },
      {
        step: "04",
        title: "Suivi",
        text: "Traçabilité des étapes principales jusqu’à la réception ou la mise à disposition.",
      },
    ],
    commitments: [
      "Traçabilité",
      "Réactivité",
      "Réseau de partenaires",
      "Maîtrise opérationnelle",
    ],
    featureTitle:
      "Un flux international réussi commence bien avant le transport.",
    featureText:
      "Spécifications, sourcing, documents, coordination et délais doivent fonctionner comme une seule chaîne opérationnelle.",
    closingLine:
      "Transformons votre besoin d’approvisionnement en opération structurée.",
  },
  {
    slug: "electronique",
    name: "NEXIS ÉLECTRONIQUE",
    shortName: "Électronique",
    eyebrow: "Équipements & solutions",
    visualMode: "commerce",
    intro: "L’équipement fiable au service des usages modernes.",
    description:
      "NEXIS ÉLECTRONIQUE fournit des équipements électroniques aux particuliers et aux professionnels, avec des services de sourcing, installation et maintenance selon les besoins.",
    image:
      "https://images.pexels.com/photos/26150615/pexels-photo-26150615.jpeg",
    secondaryImage:
      "https://images.pexels.com/photos/26150615/pexels-photo-26150615.jpeg",
    services: [
      "Vente d’équipements",
      "Fourniture B2B",
      "Sourcing technique",
      "Installation",
      "Maintenance",
      "Conseil équipement",
    ],
    audiences: ["Particuliers", "PME", "Commerces", "Bureaux", "Institutions"],
    solutions: [
      {
        title: "Équiper",
        text: "Sélection de matériels adaptés aux usages, contraintes techniques et budgets définis.",
      },
      {
        title: "Installer",
        text: "Mise en place et configuration des équipements lorsque le projet le nécessite.",
      },
      {
        title: "Maintenir",
        text: "Diagnostic, entretien et accompagnement pour prolonger la disponibilité des équipements.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Qualification",
        text: "Identification de l’usage, des performances attendues et des contraintes d’installation.",
      },
      {
        step: "02",
        title: "Sélection",
        text: "Choix de références cohérentes avec le besoin et le niveau de service recherché.",
      },
      {
        step: "03",
        title: "Déploiement",
        text: "Fourniture, installation ou configuration selon le périmètre convenu.",
      },
      {
        step: "04",
        title: "Support",
        text: "Maintenance et assistance selon les services associés à la solution.",
      },
    ],
    commitments: [
      "Produits adaptés",
      "Conseil utile",
      "Installation maîtrisée",
      "Support réactif",
    ],
    featureTitle:
      "Un bon équipement est celui qui reste pertinent après l’achat.",
    featureText:
      "Nous cherchons l’équilibre entre performance, simplicité d’usage, maintenabilité et coût global.",
    closingLine:
      "Décrivez votre besoin, nous vous aidons à composer la bonne solution.",
  },
  {
    slug: "agro-business",
    name: "NEXIS AGRO BUSINESS",
    shortName: "Agro Business",
    eyebrow: "Agriculture & transformation",
    visualMode: "editorial",
    intro: "Créer de la valeur de la terre au marché.",
    description:
      "NEXIS AGRO BUSINESS développe des activités agricoles et commerciales en reliant production, transformation, conditionnement, approvisionnement et accès au marché.",
    image: "https://images.pexels.com/photos/2332736/pexels-photo-2332736.jpeg",
    secondaryImage:
      "https://images.pexels.com/photos/2332736/pexels-photo-2332736.jpeg",
    services: [
      "Production agricole",
      "Commercialisation",
      "Transformation",
      "Approvisionnement",
      "Développement de filières",
      "Partenariats producteurs",
    ],
    audiences: [
      "Producteurs",
      "Acheteurs",
      "Distributeurs",
      "Transformateurs",
      "Investisseurs",
    ],
    solutions: [
      {
        title: "Produire",
        text: "Développement de projets agricoles adaptés au contexte de production et aux débouchés ciblés.",
      },
      {
        title: "Transformer",
        text: "Création de valeur par le tri, le conditionnement ou la transformation lorsque pertinent.",
      },
      {
        title: "Commercialiser",
        text: "Connexion entre production, besoins des acheteurs et circuits de distribution.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Filière",
        text: "Analyse du produit, de la saisonnalité, des volumes et des débouchés visés.",
      },
      {
        step: "02",
        title: "Organisation",
        text: "Planification de la production ou de l’approvisionnement et des moyens nécessaires.",
      },
      {
        step: "03",
        title: "Valorisation",
        text: "Conditionnement, transformation ou préparation commerciale selon la chaîne de valeur.",
      },
      {
        step: "04",
        title: "Marché",
        text: "Mise en relation, distribution et suivi des opérations commerciales.",
      },
    ],
    commitments: [
      "Ancrage terrain",
      "Qualité produit",
      "Valorisation locale",
      "Vision de filière",
    ],
    featureTitle: "La valeur agricole se construit sur toute la chaîne.",
    featureText:
      "Produire ne suffit pas : qualité, conservation, transformation, accès au marché et régularité déterminent la performance de la filière.",
    closingLine:
      "Construisons des chaînes agricoles plus cohérentes et plus valorisantes.",
  },
  {
    slug: "evenementiel",
    name: "NEXIS ÉVÉNEMENTIEL",
    shortName: "Événementiel",
    eyebrow: "Expériences & coordination",
    visualMode: "editorial",
    intro: "Des événements conçus pour marquer les esprits.",
    description:
      "NEXIS ÉVÉNEMENTIEL conçoit, coordonne et produit des expériences pour entreprises, institutions et particuliers, de l’idée initiale jusqu’au jour J.",
    image: "https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg",
    secondaryImage:
      "https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg",
    services: [
      "Conception événementielle",
      "Organisation",
      "Coordination prestataires",
      "Production",
      "Logistique événementielle",
      "Expérience invités",
    ],
    audiences: [
      "Entreprises",
      "Institutions",
      "Marques",
      "Particuliers",
      "Associations",
    ],
    solutions: [
      {
        title: "Concevoir l’expérience",
        text: "Définition du concept, du format, du parcours invités et de l’identité globale de l’événement.",
      },
      {
        title: "Coordonner",
        text: "Gestion des prestataires, du planning, des besoins techniques et des séquences opérationnelles.",
      },
      {
        title: "Produire",
        text: "Supervision du montage, déroulement, gestion du jour J et démontage selon le périmètre retenu.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Concept",
        text: "Objectif, public, format, ambiance et contraintes principales.",
      },
      {
        step: "02",
        title: "Production",
        text: "Budget, prestataires, planning, logistique et préparation détaillée.",
      },
      {
        step: "03",
        title: "Coordination",
        text: "Alignement des intervenants et vérification des éléments avant ouverture.",
      },
      {
        step: "04",
        title: "Jour J",
        text: "Pilotage opérationnel et gestion des ajustements nécessaires en temps réel.",
      },
    ],
    commitments: [
      "Créativité utile",
      "Coordination précise",
      "Expérience fluide",
      "Attention au détail",
    ],
    featureTitle: "L’invisible fait souvent la qualité d’un événement.",
    featureText:
      "Timing, circulation, signalétique, coordination technique et anticipation créent une expérience qui paraît simple pour l’invité.",
    closingLine:
      "Faisons de votre prochain événement une expérience cohérente de bout en bout.",
  },
  {
    slug: "commerce-general",
    name: "NEXIS COMMERCE GÉNÉRAL",
    shortName: "Commerce",
    eyebrow: "Achat & distribution",
    visualMode: "commerce",
    intro: "Des produits accessibles, des circuits maîtrisés.",
    description:
      "NEXIS COMMERCE GÉNÉRAL répond à des besoins d’achat, de vente et de distribution sur différentes catégories de produits avec une organisation agile et orientée disponibilité.",
    image:
      "https://images.pexels.com/photos/22624593/pexels-photo-22624593.jpeg",
    secondaryImage:
      "https://images.pexels.com/photos/22624593/pexels-photo-22624593.jpeg",
    services: [
      "Achat",
      "Vente",
      "Distribution",
      "Sourcing produits",
      "Approvisionnement ponctuel",
      "Fourniture professionnelle",
    ],
    audiences: [
      "Particuliers",
      "Entreprises",
      "Commerces",
      "Revendeurs",
      "Institutions",
    ],
    solutions: [
      {
        title: "Trouver",
        text: "Recherche de produits et de sources d’approvisionnement selon les caractéristiques demandées.",
      },
      {
        title: "Fournir",
        text: "Réponse aux besoins ponctuels ou récurrents des professionnels et organisations.",
      },
      {
        title: "Distribuer",
        text: "Organisation de la mise à disposition et du circuit de distribution selon le contexte commercial.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Demande",
        text: "Référence, quantité, budget, délai et niveau de qualité attendu.",
      },
      {
        step: "02",
        title: "Sourcing",
        text: "Recherche des options et consolidation des conditions disponibles.",
      },
      {
        step: "03",
        title: "Commande",
        text: "Validation de l’offre et organisation de l’approvisionnement.",
      },
      {
        step: "04",
        title: "Distribution",
        text: "Mise à disposition, livraison ou coordination selon le besoin.",
      },
    ],
    commitments: [
      "Disponibilité",
      "Souplesse",
      "Réactivité commerciale",
      "Clarté des offres",
    ],
    featureTitle:
      "Le commerce efficace commence par une compréhension précise du besoin.",
    featureText:
      "Nous privilégions une réponse pragmatique : bon produit, bonne quantité, bon circuit et délai réaliste.",
    closingLine:
      "Un besoin d’achat spécifique ? Donnez-nous les critères essentiels.",
  },
  {
    slug: "negoce-distribution",
    name: "NEXIS NÉGOCE & DISTRIBUTION",
    shortName: "Négoce",
    eyebrow: "Sourcing & représentation",
    visualMode: "commerce",
    intro: "Approvisionner mieux. Distribuer plus efficacement.",
    description:
      "NEXIS NÉGOCE & DISTRIBUTION structure des activités de sourcing, représentation, approvisionnement et distribution destinées aux circuits professionnels.",
    image:
      "https://images.pexels.com/photos/17229385/pexels-photo-17229385.jpeg",
    secondaryImage:
      "https://images.pexels.com/photos/17229385/pexels-photo-17229385.jpeg",
    services: [
      "Approvisionnement",
      "Distribution",
      "Représentation commerciale",
      "Sourcing",
      "Développement réseau",
      "Commercialisation B2B",
    ],
    audiences: [
      "Fabricants",
      "Marques",
      "Grossistes",
      "Détaillants",
      "Entreprises",
    ],
    solutions: [
      {
        title: "Approvisionner un réseau",
        text: "Planification des besoins, organisation des flux et coordination des disponibilités.",
      },
      {
        title: "Représenter une offre",
        text: "Développement commercial et accompagnement de marques ou fournisseurs sur des marchés ciblés.",
      },
      {
        title: "Distribuer",
        text: "Structuration de circuits de mise à disposition en fonction du territoire et du type de clientèle.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Marché",
        text: "Lecture de la cible, du produit, de la concurrence et du canal de vente pertinent.",
      },
      {
        step: "02",
        title: "Modèle",
        text: "Définition du schéma d’approvisionnement et de distribution adapté.",
      },
      {
        step: "03",
        title: "Déploiement",
        text: "Activation des fournisseurs, partenaires commerciaux et circuits de vente.",
      },
      {
        step: "04",
        title: "Pilotage",
        text: "Suivi des flux, retours terrain et ajustements opérationnels.",
      },
    ],
    commitments: [
      "Rigueur commerciale",
      "Réseau structuré",
      "Suivi des flux",
      "Vision marché",
    ],
    featureTitle: "Distribuer, c’est construire un accès régulier au marché.",
    featureText:
      "Le produit, le stock, le canal, le territoire et la force commerciale doivent être pensés ensemble.",
    closingLine:
      "Développons ensemble un circuit de distribution adapté à votre marché.",
  },
  {
    slug: "transport-logistique",
    name: "NEXIS TRANSPORT & LOGISTIQUE",
    shortName: "Transport & Logistique",
    eyebrow: "Flux & acheminement",
    visualMode: "technical",
    intro: "Faire circuler les biens avec précision.",
    description:
      "NEXIS TRANSPORT & LOGISTIQUE accompagne les besoins de transport, livraison et acheminement avec une organisation centrée sur la fiabilité des flux et la visibilité opérationnelle.",
    image:
      "https://images.pexels.com/photos/20862827/pexels-photo-20862827.jpeg",
    secondaryImage:
      "https://images.pexels.com/photos/20862827/pexels-photo-20862827.jpeg",
    services: [
      "Transport de marchandises",
      "Livraison",
      "Acheminement",
      "Coordination logistique",
      "Planification des flux",
      "Solutions dédiées",
    ],
    audiences: [
      "Entreprises",
      "Commerçants",
      "Distributeurs",
      "Importateurs",
      "Chantiers",
    ],
    solutions: [
      {
        title: "Planifier",
        text: "Organisation du besoin de transport selon les volumes, lieux, délais et contraintes de manutention.",
      },
      {
        title: "Acheminer",
        text: "Coordination des ressources et suivi des étapes principales jusqu’à destination.",
      },
      {
        title: "Distribuer",
        text: "Organisation de tournées et livraisons selon les caractéristiques du réseau concerné.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Flux",
        text: "Identification des points de départ, destinations, volumes et fréquence.",
      },
      {
        step: "02",
        title: "Plan",
        text: "Choix du schéma d’acheminement et organisation des moyens nécessaires.",
      },
      {
        step: "03",
        title: "Exécution",
        text: "Prise en charge opérationnelle et coordination des mouvements.",
      },
      {
        step: "04",
        title: "Suivi",
        text: "Information sur l’avancement et clôture de l’opération à la livraison.",
      },
    ],
    commitments: [
      "Ponctualité",
      "Traçabilité opérationnelle",
      "Coordination",
      "Fiabilité",
    ],
    featureTitle:
      "La logistique transforme une promesse commerciale en livraison réelle.",
    featureText:
      "Nous raisonnons en flux : contraintes, séquences, ressources et information doivent rester alignées jusqu’au dernier kilomètre.",
    closingLine:
      "Confiez-nous votre flux, nous construisons le schéma d’acheminement.",
  },
  {
    slug: "energy",
    name: "NEXIS ENERGY",
    shortName: "Energy",
    eyebrow: "Énergie & distribution",
    visualMode: "technical",
    intro: "Des solutions énergétiques responsables et structurées.",
    description:
      "NEXIS ENERGY développe des opportunités dans l’énergie, l’approvisionnement et la distribution de produits énergétiques dans le strict respect des autorisations, licences et cadres réglementaires applicables.",
    image: "https://images.pexels.com/photos/5846964/pexels-photo-5846964.jpeg",
    secondaryImage:
      "https://images.pexels.com/photos/5846964/pexels-photo-5846964.jpeg",
    services: [
      "Approvisionnement énergétique",
      "Distribution autorisée",
      "Partenariats sectoriels",
      "Solutions d’énergie",
      "Développement commercial",
      "Coordination de projets",
    ],
    audiences: [
      "Entreprises",
      "Sites professionnels",
      "Distributeurs",
      "Partenaires industriels",
      "Investisseurs",
    ],
    solutions: [
      {
        title: "Structurer un approvisionnement",
        text: "Analyse du besoin, volumes, continuité recherchée et partenaires autorisés à mobiliser.",
      },
      {
        title: "Développer des partenariats",
        text: "Identification d’opportunités commerciales et industrielles compatibles avec le cadre réglementaire.",
      },
      {
        title: "Accompagner un projet énergétique",
        text: "Coordination des parties prenantes et structuration des étapes commerciales et opérationnelles.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Cadre",
        text: "Vérification du périmètre du projet, de sa nature et des exigences réglementaires applicables.",
      },
      {
        step: "02",
        title: "Partenaires",
        text: "Mobilisation des acteurs et opérateurs compétents selon le besoin.",
      },
      {
        step: "03",
        title: "Structuration",
        text: "Définition du modèle opérationnel, commercial et logistique conforme au projet.",
      },
      {
        step: "04",
        title: "Exécution",
        text: "Mise en œuvre dans les limites des autorisations et responsabilités validées.",
      },
    ],
    commitments: [
      "Conformité",
      "Traçabilité",
      "Sécurité",
      "Partenariats qualifiés",
    ],
    featureTitle: "Dans l’énergie, la performance commence par la conformité.",
    featureText:
      "Toute activité réglementée doit être pensée avec ses exigences d’autorisation, de sécurité, de traçabilité et de responsabilité avant son déploiement commercial.",
    closingLine:
      "Construisons les opportunités énergétiques sur un cadre solide et conforme.",
  },
  {
    slug: "tech-digital",
    name: "NEXIS TECH & DIGITAL",
    shortName: "Tech & Digital",
    eyebrow: "Logiciels & innovation",
    visualMode: "technical",
    intro: "Transformer les idées en produits numériques utiles.",
    description:
      "NEXIS TECH & DIGITAL conçoit des produits web et mobiles, plateformes métier, automatisations et solutions numériques pour aider les organisations à moderniser leurs opérations et leurs services.",
    image:
      "https://images.pexels.com/photos/36706460/pexels-photo-36706460.jpeg",
    secondaryImage:
      "https://images.pexels.com/photos/36706460/pexels-photo-36706460.jpeg",
    services: [
      "Applications web",
      "Applications mobiles",
      "Plateformes métier",
      "Automatisation",
      "Intégrations API",
      "Conseil & transformation digitale",
    ],
    audiences: [
      "Startups",
      "PME",
      "Institutions",
      "Groupes privés",
      "Équipes métiers",
    ],
    solutions: [
      {
        title: "Créer un produit numérique",
        text: "Conception fonctionnelle, interface, architecture et développement d’applications adaptées aux usages réels.",
      },
      {
        title: "Digitaliser un processus",
        text: "Transformation de tâches manuelles en workflows plus traçables, rapides et mesurables.",
      },
      {
        title: "Connecter les systèmes",
        text: "Intégrations API et automatisations pour réduire les ressaisies et fluidifier la circulation des données.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        text: "Objectifs métier, utilisateurs, processus existants, contraintes et critères de succès.",
      },
      {
        step: "02",
        title: "Conception",
        text: "Parcours, architecture fonctionnelle, maquettes et choix techniques.",
      },
      {
        step: "03",
        title: "Build",
        text: "Développement incrémental, validation continue et intégration des services nécessaires.",
      },
      {
        step: "04",
        title: "Évolution",
        text: "Déploiement, mesure, maintenance et amélioration progressive du produit.",
      },
    ],
    commitments: [
      "Architecture durable",
      "Sécurité",
      "Expérience utilisateur",
      "Performance",
    ],
    featureTitle:
      "La technologie n’a de valeur que lorsqu’elle simplifie réellement le travail.",
    featureText:
      "Nous concevons les produits numériques autour des usages, des contraintes métier et de la capacité d’évolution plutôt qu’autour de la technologie seule.",
    closingLine:
      "Un produit digital à lancer ou un processus à moderniser ? Parlons objectif avant technologie.",
  },
  {
    slug: "conciergerie",
    name: "NEXIS CONCIERGERIE",
    shortName: "Conciergerie",
    eyebrow: "Assistance & services",
    visualMode: "service",
    intro: "Simplifier le quotidien avec discrétion et efficacité.",
    description:
      "NEXIS CONCIERGERIE prend en charge des demandes du quotidien pour particuliers, propriétaires et entreprises avec une approche personnalisée, coordonnée et orientée qualité de service.",
    image: "https://images.pexels.com/photos/5157828/pexels-photo-5157828.jpeg",
    secondaryImage:
      "https://images.pexels.com/photos/5157828/pexels-photo-5157828.jpeg",
    services: [
      "Assistance personnalisée",
      "Gestion de demandes",
      "Services propriétaires",
      "Services entreprises",
      "Coordination prestataires",
      "Accueil & accompagnement",
    ],
    audiences: [
      "Particuliers",
      "Propriétaires",
      "Entrepreneurs",
      "Entreprises",
      "Résidences",
    ],
    solutions: [
      {
        title: "Déléguer",
        text: "Prise en charge de demandes sélectionnées pour libérer du temps et éviter la multiplication des interlocuteurs.",
      },
      {
        title: "Coordonner",
        text: "Recherche, réservation et suivi de prestataires selon le besoin défini.",
      },
      {
        title: "Assister",
        text: "Accompagnement ponctuel ou récurrent pour les situations nécessitant disponibilité et suivi.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Demande",
        text: "Compréhension précise du service attendu, du délai et des préférences.",
      },
      {
        step: "02",
        title: "Organisation",
        text: "Sélection de la solution et coordination des intervenants nécessaires.",
      },
      {
        step: "03",
        title: "Exécution",
        text: "Suivi de la demande jusqu’à sa réalisation.",
      },
      {
        step: "04",
        title: "Confirmation",
        text: "Retour au client et gestion des éventuels ajustements.",
      },
    ],
    commitments: [
      "Discrétion",
      "Disponibilité",
      "Suivi personnalisé",
      "Qualité de service",
    ],
    featureTitle:
      "Le vrai luxe est souvent de ne pas avoir à gérer chaque détail soi-même.",
    featureText:
      "Notre rôle est de simplifier la demande, coordonner les bons intervenants et maintenir une information claire jusqu’à sa résolution.",
    closingLine: "Dites-nous ce que vous souhaitez simplifier.",
  },
  {
    slug: "services-assist",
    name: "NEXIS SERVICES / ASSIST",
    shortName: "Services & Maintenance",
    eyebrow: "Maintenance & interventions",
    visualMode: "service",
    intro: "Une réponse fiable aux besoins du quotidien.",
    description:
      "NEXIS SERVICES / ASSIST coordonne des interventions de maintenance et petits travaux pour particuliers et professionnels : plomberie, électricité, climatisation, nettoyage, peinture, menuiserie et entretien courant.",
    image:
      "https://images.pexels.com/photos/32588555/pexels-photo-32588555.jpeg",
    secondaryImage:
      "https://images.pexels.com/photos/32588555/pexels-photo-32588555.jpeg",
    services: [
      "Plomberie",
      "Électricité",
      "Climatisation",
      "Nettoyage",
      "Peinture & menuiserie",
      "Maintenance & petits travaux",
    ],
    audiences: [
      "Particuliers",
      "Bureaux",
      "Commerces",
      "Propriétaires",
      "Gestionnaires de sites",
    ],
    solutions: [
      {
        title: "Intervenir",
        text: "Organisation d’une intervention adaptée au type de problème et au niveau d’urgence.",
      },
      {
        title: "Entretenir",
        text: "Prise en charge d’opérations d’entretien courant pour limiter les pannes et dégradations.",
      },
      {
        title: "Remettre en état",
        text: "Petits travaux et corrections nécessaires pour rétablir la fonctionnalité ou l’usage d’un espace.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Diagnostic initial",
        text: "Qualification de la demande, symptômes, localisation et niveau de priorité.",
      },
      {
        step: "02",
        title: "Plan d’intervention",
        text: "Définition du type d’intervenant, matériel potentiel et fenêtre de passage.",
      },
      {
        step: "03",
        title: "Intervention",
        text: "Réalisation de la prestation convenue et signalement des besoins complémentaires éventuels.",
      },
      {
        step: "04",
        title: "Clôture",
        text: "Confirmation de l’intervention et recommandations de suivi lorsque nécessaire.",
      },
    ],
    commitments: [
      "Réactivité",
      "Intervenants adaptés",
      "Suivi clair",
      "Respect des lieux",
    ],
    featureTitle:
      "Un problème technique doit devenir une intervention claire, pas une succession d’appels.",
    featureText:
      "Nous structurons la demande, orientons vers la compétence adaptée et assurons le suivi de l’intervention jusqu’à sa clôture.",
    closingLine:
      "Une intervention à organiser ? Décrivez le problème et son niveau d’urgence.",
  },
];

export function getSector(slug: string) {
  return sectors.find((sector) => sector.slug === slug);
}
