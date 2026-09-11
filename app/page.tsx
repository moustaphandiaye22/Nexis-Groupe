import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  HardHat,
  Car,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { sectors } from "@/data/sectors";

const pillars = [
  {
    num: "01",
    title: "Immobilier & Patrimoine",
    text: "Acquisition, aménagement, promotion et valorisation des actifs à long terme.",
  },
  {
    num: "02",
    title: "Construction & Infrastructures",
    text: "Pilotage de projets, génie civil, qualité d’exécution et maîtrise des chantiers.",
  },
  {
    num: "03",
    title: "Commerce & Mobilité",
    text: "Importation automobile, sourcing international, distribution et flotte.",
  },
  {
    num: "04",
    title: "Services & Transformation",
    text: "Transformation digitale, solutions d'énergie, conseil et optimisation.",
  },
];

const sectorGroups = [
  {
    label: "Pôle Immobilier",
    count: "04 Filiales",
    icon: Building2,
    desc: "Acquisition, foncier, gestion d'actifs & promotion.",
    items: [
      "NEXIS IMMO",
      "Patrimoine & Foncier",
      "Gestion Locative",
      "Promotion Immobilière",
    ],
  },
  {
    label: "Pôle BTP",
    count: "04 Filiales",
    icon: HardHat,
    desc: "Bâtiment, génie civil, rénovation & grands chantiers.",
    items: [
      "JAMBAAR BTP",
      "Génie Civil & Voirie",
      "Rénovation & Structure",
      "Maîtrise d'Ouvrage",
    ],
  },
  {
    label: "Pôle Mobilité",
    count: "04 Filiales",
    icon: Car,
    desc: "Importation, distribution automobile & logistique.",
    items: [
      "NEXIS AUTO",
      "Import / Export Sourcing",
      "Distribution & Fleet",
      "Logistique Internationale",
    ],
  },
  {
    label: "Pôle Services",
    count: "04 Filiales",
    icon: Cpu,
    desc: "Transformation numérique, énergie & conseil.",
    items: [
      "NEXIS TECH",
      "Énergie & Transition",
      "Conseil & Stratégie",
      "Solutions Digitales",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="corporate-overview">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="kicker">NEXIS GROUPE</span>
              <h2>Un portail d’entreprise pensé pour la création de valeur.</h2>
            </div>
            <p>
              Un écosystème intégré qui unit stratégie, expertise locale et
              exécution opérationnelle pour accompagner les projets qui
              structurent le paysage économique.
            </p>
          </div>

          <div className="portal-grid">
            <div className="portal-feature">
              <div>
                <span className="portal-label">Notre Modèle Stratégique</span>
                <h3>
                  Plusieurs pôles d'expertise. Une seule exigence de
                  performance.
                </h3>
                <p>
                  Nous combinons nos filiales et nos savoir-faire métier pour
                  intervenir avec précision sur l’ensemble de la chaîne de
                  valeur, de la conception initiale à la livraison finale.
                </p>
              </div>
              <Link href="/groupe" className="button button--dark">
                <span>Découvrir le groupe</span> <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="portal-panels">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="portal-panel">
                  <span>{pillar.num}</span>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="portal-sector-index">
        <div className="container">
          <div className="section-heading section-heading--compact">
            <div>
              <span className="kicker">Nos Expertises Intégrées</span>
              <h2>Un portefeuille d’expertises structurées.</h2>
            </div>
            <Link href="/activites" className="text-link">
              <span>Voir toutes les activités</span> <ArrowRight size={16} />
            </Link>
          </div>

          <div className="sector-group-grid">
            {sectorGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.label} className="sector-group-card">
                  <div className="sector-card-head">
                    <div className="sector-card-icon-badge">
                      <Icon size={20} />
                    </div>
                    <span className="sector-card-count">{group.count}</span>
                  </div>

                  <h3>{group.label}</h3>
                  <p className="sector-card-desc">{group.desc}</p>

                  <ul className="sector-card-list">
                    {group.items.map((item) => (
                      <li key={item}>
                        <ShieldCheck size={14} className="li-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/activites" className="sector-card-link">
                    <span>Explorer le pôle</span> <ArrowUpRight size={14} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Stats />

      <section className="projects-section">
        <div className="container section-heading">
          <div>
            <span className="kicker">Sélection</span>
            <h2>Des projets qui créent du mouvement.</h2>
          </div>
          <div>
            <p>
              Une vitrine institutionnelle pensée pour présenter les
              réalisations les plus représentatives du groupe, avec un niveau de
              qualité comparable à celui d’un grand portail d’entreprise.
            </p>
            <Link href="/realisations" className="text-link">
              Voir les réalisations <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <div className="container">
          <ProjectsGrid limit={4} />
        </div>
      </section>

      <section className="manifesto-section">
        <div className="container">
          <span className="manifesto-index">01 — 14</span>
          <p>
            De l’immobilier à la technologie, du BTP à la logistique, NEXIS
            construit des passerelles entre les secteurs pour{" "}
            <strong>transformer les opportunités en résultats durables.</strong>
          </p>
        </div>
      </section>

      <section className="why-section">
        <div className="container why-grid">
          <div>
            <span className="kicker">Pourquoi NEXIS</span>
            <h2>La force d’un écosystème intégré.</h2>
          </div>
          <div className="why-list">
            {[
              [
                "01",
                "Vision multisectorielle",
                "Des expertises complémentaires réunies autour d’une même exigence.",
              ],
              [
                "02",
                "Capacité d’exécution",
                "Une approche orientée terrain, délais et résultats concrets.",
              ],
              [
                "03",
                "Réseau & proximité",
                "Des relations durables avec clients, partenaires et fournisseurs.",
              ],
              [
                "04",
                "Innovation utile",
                "Le digital et les méthodes modernes au service de l’efficacité.",
              ],
            ].map(([n, t, d]) => (
              <article key={n} className="why-item">
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
