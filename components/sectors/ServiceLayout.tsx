import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MessageSquare,
  Lightbulb,
  UserCheck,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Sector } from "@/data/sectors";

export function ServiceLayout({
  sector,
  next,
}: {
  sector: Sector;
  next: Sector;
}) {
  return (
    <main
      className="sector-page sector-page--service"
      style={{ background: "white" }}
    >
      <PageHero
        eyebrow={sector.eyebrow}
        title={sector.name}
        description={sector.intro}
        image={sector.image}
      />

      {/* Human-Centric Intro */}
      <section style={{ padding: "120px 0" }}>
        <div className="container">
          <div
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <Reveal>
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: 300,
                  color: "#1e293b",
                  marginBottom: "30px",
                  lineHeight: 1.4,
                }}
              >
                {sector.intro}
              </h2>
              <p
                style={{
                  fontSize: "20px",
                  color: "#64748b",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                {sector.description}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Minimalist Approach */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
            }}
          >
            <Reveal>
              <span
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "var(--bronze-dark)",
                }}
              >
                Notre Philosophie
              </span>
              <h3
                style={{
                  fontSize: "32px",
                  fontWeight: 400,
                  color: "#0f172a",
                  marginTop: "15px",
                  marginBottom: "25px",
                }}
              >
                {sector.featureTitle}
              </h3>
              <p
                style={{
                  color: "#475569",
                  lineHeight: 1.8,
                  fontSize: "16px",
                  marginBottom: "30px",
                }}
              >
                {sector.featureText}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {sector.commitments.map((c) => (
                  <span
                    key={c}
                    style={{
                      background: "#f1f5f9",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      fontSize: "14px",
                      color: "#334155",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <ShieldCheck size={16} style={{ color: "var(--bronze)" }} />{" "}
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal
              style={{
                position: "relative",
                height: "400px",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Image
                src={sector.secondaryImage}
                alt={sector.name}
                fill
                sizes="(max-width: 760px) calc(100vw - 32px), 50vw"
                style={{ objectFit: "cover", opacity: 0.9 }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Clean Solutions */}
      <section style={{ padding: "100px 0", background: "#f8fafc" }}>
        <div className="container">
          <Reveal style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: 300 }}>
              Notre Accompagnement
            </h2>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
            }}
          >
            {sector.solutions.map((solution, i) => {
              const icons = [MessageSquare, Lightbulb, UserCheck];
              const Icon = icons[i % icons.length];
              return (
                <Reveal
                  key={solution.title}
                  style={{
                    background: "white",
                    padding: "50px 40px",
                    borderRadius: "12px",
                    textAlign: "center",
                    border: "1px solid #e2e8f0",
                    transition: "box-shadow 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      padding: "16px",
                      background: "var(--ivory)",
                      borderRadius: "50%",
                      color: "var(--bronze)",
                      marginBottom: "25px",
                    }}
                  >
                    <Icon size={28} />
                  </div>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 400,
                      color: "#1e293b",
                      marginBottom: "15px",
                    }}
                  >
                    {solution.title}
                  </h4>
                  <p
                    style={{
                      color: "#64748b",
                      lineHeight: 1.7,
                      fontSize: "15px",
                    }}
                  >
                    {solution.text}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Line */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <Reveal style={{ marginBottom: "50px" }}>
            <h2
              style={{ fontSize: "28px", fontWeight: 300, textAlign: "center" }}
            >
              Expertises associées
            </h2>
          </Reveal>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            {sector.services.map((service) => (
              <Reveal
                key={service}
                style={{
                  border: "1px solid var(--bronze)",
                  color: "var(--bronze-dark)",
                  padding: "12px 24px",
                  borderRadius: "30px",
                  fontSize: "15px",
                  fontWeight: 500,
                }}
              >
                {service}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sector-cta">
        <div className="container sector-cta-inner">
          <Reveal>
            <span className="kicker kicker--light">
              Échanger avec un conseiller
            </span>
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
