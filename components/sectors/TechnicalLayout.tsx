import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Sector } from "@/data/sectors";

export function TechnicalLayout({
  sector,
  next,
}: {
  sector: Sector;
  next: Sector;
}) {
  return (
    <main
      className="sector-page sector-page--technical"
      style={{ background: "#f1f5f9" }}
    >
      <PageHero
        eyebrow={sector.eyebrow}
        title={sector.name}
        description={sector.intro}
        image={sector.image}
      />

      {/* Industrial Intro */}
      <section
        className="content-section"
        style={{ padding: "80px 0", borderBottom: "1px solid #cbd5e1" }}
      >
        <div className="container">
          <div
            className="technical-intro-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
            }}
          >
            <Reveal>
              <h2
                style={{
                  fontSize: "38px",
                  letterSpacing: "-1px",
                  fontWeight: 700,
                  color: "#0f172a",
                }}
              >
                {sector.intro}
              </h2>
            </Reveal>
            <Reveal>
              <p
                style={{
                  fontSize: "16px",
                  color: "#475569",
                  lineHeight: 1.8,
                  paddingLeft: "40px",
                  borderLeft: "4px solid var(--bronze)",
                }}
              >
                {sector.description}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Data/Stats block style for Solutions */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container">
          <Reveal>
            <h3
              style={{
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "var(--bronze-dark)",
                marginBottom: "40px",
              }}
            >
              Solutions techniques
            </h3>
          </Reveal>
          <div
            className="technical-solutions-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
              background: "#e2e8f0",
              border: "2px solid #e2e8f0",
            }}
          >
            {sector.solutions.map((solution, index) => (
              <Reveal
                key={solution.title}
                style={{ background: "white", padding: "40px" }}
              >
                <Settings2
                  size={32}
                  style={{ color: "var(--bronze)", marginBottom: "20px" }}
                />
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#0f172a",
                    marginBottom: "15px",
                  }}
                >
                  {solution.title}
                </h4>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {solution.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach & Image Block */}
      <section
        style={{ background: "#0f172a", color: "white", padding: "120px 0" }}
      >
        <div className="container">
          <div
            className="technical-feature-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
          >
            <Reveal
              className="technical-feature-media"
              style={{ position: "relative", height: "500px" }}
            >
              <Image
                src={sector.secondaryImage}
                alt={sector.name}
                fill
                sizes="(max-width: 760px) calc(100vw - 32px), 50vw"
                style={{
                  objectFit: "cover",
                  filter: "grayscale(20%) contrast(110%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "20px",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: "var(--bronze)",
                  }}
                >
                  Opérations {sector.shortName}
                </span>
              </div>
            </Reveal>
            <Reveal>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  marginBottom: "30px",
                  lineHeight: 1.3,
                }}
              >
                {sector.featureTitle}
              </h2>
              <p
                style={{ color: "#94a3b8", fontSize: "16px", lineHeight: 1.8 }}
              >
                {sector.featureText}
              </p>

              <div
                className="technical-commitments-grid"
                style={{
                  marginTop: "40px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                {sector.commitments.map((c) => (
                  <div
                    key={c}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14px",
                      color: "#e2e8f0",
                    }}
                  >
                    <ShieldCheck size={18} style={{ color: "var(--bronze)" }} />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Structured Process */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container">
          <Reveal>
            <h3
              style={{
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "var(--bronze-dark)",
                marginBottom: "60px",
                textAlign: "center",
              }}
            >
              Processus d'exécution
            </h3>
          </Reveal>
          <div
            className="technical-process-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "30px",
            }}
          >
            {sector.process.map((step, index) => (
              <Reveal
                key={step.step}
                style={{
                  borderTop: "3px solid var(--bronze)",
                  paddingTop: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "40px",
                    fontWeight: 700,
                    color: "#e2e8f0",
                    display: "block",
                    marginBottom: "15px",
                  }}
                >
                  {step.step}
                </span>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#0f172a",
                    marginBottom: "10px",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "13px",
                    lineHeight: 1.6,
                  }}
                >
                  {step.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services List - Tech Style */}
      <section style={{ padding: "100px 0", background: "#f8fafc" }}>
        <div className="container">
          <Reveal style={{ marginBottom: "40px" }}>
            <h3 style={{ fontSize: "28px", fontWeight: 700, color: "#0f172a" }}>
              Domaines d'intervention
            </h3>
          </Reveal>
          <div
            className="technical-services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            {sector.services.map((service) => (
              <Reveal
                key={service}
                style={{
                  background: "white",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "1px solid #e2e8f0",
                }}
              >
                <span style={{ fontWeight: 600, color: "#334155" }}>
                  {service}
                </span>
                <ArrowUpRight size={18} style={{ color: "var(--bronze)" }} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sector-cta">
        <div className="container sector-cta-inner">
          <Reveal>
            <span className="kicker kicker--light">Démarrer un projet</span>
            <h2>{sector.closingLine}</h2>
          </Reveal>
          <Reveal>
            <Link
              href={`/contact?pole=${sector.slug}`}
              className="circle-link circle-link--light"
            >
              Contact <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      
    </main>
  );
}
