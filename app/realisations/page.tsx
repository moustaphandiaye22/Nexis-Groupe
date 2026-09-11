import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Réalisations & Projets | NEXIS GROUPE",
  description:
    "Découvrez la sélection des projets et réalisations majeurs de NEXIS GROUPE.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations Majeures"
        title="Des projets d'envergure conçus pour créer de la valeur."
        description="Une sélection représentative de nos interventions stratégiques dans l'immobilier, les infrastructures BTP, la logistique et les solutions technologiques."
        image="https://images.pexels.com/photos/29566880/pexels-photo-29566880.jpeg"
      />

      <section
        className="portfolio-intro"
        style={{ padding: "5rem 0", background: "var(--paper)" }}
      >
        <div className="container portfolio-summary">
          <div>
            <span className="kicker">Rigueur & Exécution</span>
            <h2>
              Créer des projets qui combinent excellence opérationnelle,
              durabilité et retour sur investissement.
            </h2>
          </div>
          <div className="portfolio-metrics">
            <div>
              <strong>+40</strong>
              <span>Projets Livrés</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Conformité & Normes</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Suivi Opérationnel</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="projects-section"
        style={{ padding: "4rem 0 7rem", background: "var(--paper)" }}
      >
        <div
          className="container section-heading"
          style={{ marginBottom: "3rem" }}
        >
          <div>
            <span className="kicker">Portfolio</span>
            <h2 style={{ whiteSpace: "nowrap" }}>Réalisations par Pôle.</h2>
          </div>
        </div>
        <div className="container">
          <ProjectsGrid />
        </div>
      </section>
    </>
  );
}
