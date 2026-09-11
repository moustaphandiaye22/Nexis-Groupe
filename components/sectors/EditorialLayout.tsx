import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Sector } from "@/data/sectors";

export function EditorialLayout({
  sector,
  next,
}: {
  sector: Sector;
  next: Sector;
}) {
  return (
    <main className="sector-page sector-page--editorial">
      <PageHero
        eyebrow={sector.eyebrow}
        title={sector.name}
        description={sector.intro}
        image={sector.image}
      />

      <section className="content-section sector-opening">
        <div className="container">
          <div className="sector-intro-grid">
            <div className="sector-intro-main">
              <Reveal>
                <span className="kicker">Notre vision</span>
                <h2>{sector.intro}</h2>
                <p
                  className="lead"
                  style={{ fontSize: "20px", fontWeight: 300, lineHeight: 1.8 }}
                >
                  {sector.description}
                </p>
              </Reveal>
            </div>
            <div className="sector-intro-side">
              <Reveal>
                <div
                  className="sector-audience-box"
                  style={{
                    background: "transparent",
                    border: "1px solid var(--bronze)",
                  }}
                >
                  <h4 style={{ color: "var(--bronze-dark)" }}>Pour qui ?</h4>
                  <ul className="audience-list">
                    {sector.audiences.map((audience) => (
                      <li key={audience}>
                        <CheckCircle2 size={16} /> <span>{audience}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/contact?pole=${sector.slug}`}
                    className="button button--dark"
                    style={{
                      marginTop: "2rem",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Contactez-nous</span> <ArrowUpRight size={18} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="sector-feature" style={{ padding: "0 0 100px", background: "transparent", color: "var(--graphite)" }}>
        <div className="container">
          <Reveal
            style={{
              position: "relative",
              height: "60vh",
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "40px",
            }}
          >
            <Image
              src={sector.secondaryImage}
              alt={sector.shortName}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </Reveal>
          <Reveal
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <span className="kicker">L'approche {sector.shortName}</span>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "36px",
                marginBottom: "20px",
              }}
            >
              {sector.featureTitle}
            </h2>
            <p style={{ fontSize: "18px", color: "var(--graphite)" }}>
              {sector.featureText}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="solutions-section"
        style={{ background: "var(--paper)", padding: "100px 0" }}
      >
        <div className="container">
          <div
            className="section-heading"
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <span className="kicker">Solutions</span>
            <h2>Ce que nous réalisons.</h2>
          </div>
          <div className="premium-grid" style={{ gap: "40px" }}>
            {sector.solutions.map((solution, index) => (
              <Reveal
                className="glass-card"
                key={solution.title}
                style={{
                  background: "var(--white)",
                  border: "none",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                }}
              >
                <div className="solution-card-header">
                  <span
                    className="solution-number"
                    style={{ fontSize: "32px", opacity: 0.3 }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontFamily: "Georgia, serif",
                    marginBottom: "15px",
                  }}
                >
                  {solution.title}
                </h3>
                <p style={{ color: "#64748b", lineHeight: 1.7 }}>
                  {solution.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="section-heading">
            <span className="kicker">Expertises</span>
            <h2>Nos domaines d’intervention</h2>
          </div>
          <div className="service-list">
            {sector.services.map((service, index) => (
              <Reveal className="service-row" key={service}>
                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "22px",
                    fontWeight: 400,
                    margin: 0
                  }}
                >
                  {service}
                </h3>
                <ArrowRight className="service-arrow" style={{ justifySelf: "end" }} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="process-section"
        style={{
          background: "#05101c",
          color: "var(--white)",
          padding: "100px 0",
        }}
      >
        <div className="container">
          <div
            className="process-heading"
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <span className="kicker kicker--light">Méthodologie</span>
            <h2 style={{ color: "var(--white)", whiteSpace: "nowrap" }}>
              Un projet, étape par étape.
            </h2>
          </div>
          <div className="process-timeline editorial-timeline">
            <div
              className="timeline-line"
              style={{ background: "rgba(255,255,255,0.1)" }}
            ></div>
            {sector.process.map((item) => (
              <Reveal className="timeline-item" key={item.step}>
                <div
                  className="timeline-node"
                  style={{
                    background: "#05101c",
                    borderColor: "var(--bronze)",
                  }}
                ></div>
                <div
                  className="timeline-content glass-card"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    className="step-number"
                    style={{ color: "var(--bronze)" }}
                  >
                    {item.step}
                  </span>
                  <h3 style={{ color: "var(--white)" }}>{item.title}</h3>
                  <p style={{ color: "#94a3b8" }}>{item.text}</p>
                </div>
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
              Nous contacter <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      
    </main>
  );
}
