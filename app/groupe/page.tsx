import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Stats } from "@/components/Stats";

export const metadata: Metadata = {
  title: "Le Groupe",
  description:
    "Découvrez la vision, la mission et les valeurs de NEXIS GROUPE.",
};

const pillars = [
  [
    "01",
    "Exécution",
    "Transformer les intentions en actions concrètes, mesurables et suivies.",
  ],
  [
    "02",
    "Confiance",
    "Construire des relations durables par la transparence et la fiabilité.",
  ],
  [
    "03",
    "Excellence",
    "Élever les standards de qualité à chaque étape de nos interventions.",
  ],
  [
    "04",
    "Innovation",
    "Adopter les outils et modèles qui améliorent réellement la performance.",
  ],
];

export default function GroupePage() {
  return (
    <>
      <PageHero
        eyebrow="Le Groupe"
        title="Créer un écosystème qui transforme les opportunités en impact."
        description="NEXIS GROUPE fédère des métiers complémentaires autour d’une vision commune : exécuter avec sérieux, grandir avec méthode et créer de la valeur durable."
        image="https://images.pexels.com/photos/33206338/pexels-photo-33206338.jpeg"
      />

      <section className="content-section">
        <div className="container split-copy">
          <Reveal>
            <span className="kicker">Notre vision</span>
            <h2>Construire aujourd’hui les solutions de demain.</h2>
          </Reveal>
          <Reveal>
            <p className="lead">
              Développer un groupe africain moderne, agile et crédible, capable
              d’intervenir sur plusieurs secteurs essentiels de l’économie.
            </p>
            <p>
              La complémentarité de nos pôles permet de penser les projets dans
              leur ensemble : immobilier, construction, mobilité, commerce,
              digital, logistique, agriculture, énergie et services.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="group-journey">
        <div className="container group-story">
          <div className="group-story-main">
            <span className="kicker">Notre approche</span>
            <h3>Un modèle pensé pour la création de valeur durable.</h3>
            <p>
              Nous partons du besoin réel du marché pour organiser des réponses
              crédibles, structurer des compétences et mobiliser les bons
              partenaires. Notre vocation est de construire des projets solides,
              lisibles et reproductibles.
            </p>
          </div>
          <div className="group-story-aside">
            <div>
              <strong>14</strong>
              <span>Pôles d’expertise</span>
            </div>
            <div>
              <strong>360°</strong>
              <span>Vision de projet</span>
            </div>
            <div>
              <strong>+20</strong>
              <span>Domaines d’intervention</span>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <section className="values-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="kicker">Nos principes</span>
              <h2 style={{ whiteSpace: "nowrap", fontSize: "clamp(24px, 3.2vw, 42px)" }}>
                Une croissance guidée par quatre exigences.
              </h2>
            </div>
          </div>
          <div className="value-grid">
            {pillars.map(([n, t, d]) => (
              <Reveal className="value-card" key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="group-ecosystem">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="kicker">Écosystème</span>
              <h2>
                Une organisation conçue pour agir sur l’ensemble du cycle de
                valeur.
              </h2>
            </div>
            <p>
              Le groupe combine spécialisation sectorielle et vision globale
              pour accompagner les entreprises, les institutions et les
              investisseurs dans des projets à forte portée stratégique.
            </p>
          </div>

          <div className="ecosystem-grid">
            <article>
              <span>01</span>
              <h3>Industrie & BTP</h3>
              <p>
                Conception, structuration et exécution de projets d’envergure
                avec rigueur opérationnelle.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Mobilité & Logistique</h3>
              <p>
                Des réseaux et services conçus pour fluidifier les flux,
                renforcer la performance et sécuriser la croissance.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Immobilier & Urbanisme</h3>
              <p>
                Des projets intégrés, pensés comme des leviers de développement
                économique et social.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Digital & Services</h3>
              <p>
                Des solutions de transformation qui accélèrent l’efficacité, la
                visibilité et la capacité d’innovation.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
