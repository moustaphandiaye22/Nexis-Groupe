import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { sectors } from "@/data/sectors";

export const metadata: Metadata = {
  title: "Nos activités & Pôles | NEXIS GROUPE",
  description:
    "Explorez les 14 pôles d'expertise et filiales spécialisées de NEXIS GROUPE.",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos activités"
        title="14 expertises métiers. Un écosystème d'excellence."
        description="Chaque pôle dispose de sa spécialisation, de ses marchés et de ses outils opérationnels. Ensemble, ils forment une plateforme intégrée de création de valeur."
        image="https://images.pexels.com/photos/5505131/pexels-photo-5505131.jpeg"
      />

      <section
        className="activity-overview"
        style={{ padding: "5rem 0", background: "var(--paper)" }}
      >
        <div className="container activity-intro">
          <div>
            <span className="kicker">Périmètre Opérationnel</span>
            <h2>
              Des expertises de pointe pour accompagner le développement
              stratégique.
            </h2>
          </div>
          <div className="activity-summary">
            <div>
              <strong>14</strong>
              <span>Pôles Spécialisés</span>
            </div>
            <div>
              <strong>04</strong>
              <span>Grandes Familles</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Approche Intégrée</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="activities-index"
        style={{ padding: "0 0 6rem", background: "var(--paper)" }}
      >
        <div className="container">
          <div className="activities-grid">
            {sectors.map((s, i) => (
              <Link
                href={`/activites/${s.slug}`}
                key={s.slug}
                className="activity-card-item"
              >
                <div
                  className="activity-card-image"
                  style={{
                    position: "relative",
                    height: "260px",
                    overflow: "hidden",
                    borderRadius: "8px 8px 0 0",
                  }}
                >
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />
                  <span className="activity-card-badge">
                    Pôle {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div
                  className="activity-card-body"
                  style={{
                    padding: "1.5rem",
                    background: "var(--white)",
                    border: "1px solid var(--line)",
                    borderTop: "none",
                    borderRadius: "0 0 8px 8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--bronze-dark)",
                      }}
                    >
                      {s.shortName}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="card-arrow-icon"
                      style={{ color: "var(--graphite)" }}
                    />
                  </div>
                  <h2
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "1.4rem",
                      fontWeight: "400",
                      color: "var(--graphite)",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    {s.name}
                  </h2>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#64748b",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {s.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
