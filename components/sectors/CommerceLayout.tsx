import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Package, Zap } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Sector } from "@/data/sectors";

export function CommerceLayout({
  sector,
  next,
}: {
  sector: Sector;
  next: Sector;
}) {
  return (
    <main
      className="sector-page sector-page--commerce"
      style={{ background: "#f8fafc" }}
    >
      <PageHero
        eyebrow={sector.eyebrow}
        title={sector.name}
        description={sector.intro}
        image={sector.image}
      />

      {/* Dynamic Intro */}
      <section style={{ padding: "80px 0" }}>
        <div
          className="container"
          style={{ textAlign: "center", maxWidth: "900px" }}
        >
          <Reveal>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--bronze)",
                color: "var(--ink)",
                padding: "6px 16px",
                borderRadius: "30px",
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "20px",
              }}
            >
              <Zap size={16} /> Flux & Performance
            </span>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: 800,
                color: "var(--graphite)",
                marginBottom: "20px",
              }}
            >
              {sector.intro}
            </h2>
            <p style={{ fontSize: "18px", color: "#64748b", lineHeight: 1.7 }}>
              {sector.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Product/Solution Grid */}
      <section style={{ padding: "60px 0 100px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px",
            }}
          >
            {sector.solutions.map((solution, i) => (
              <Reveal
                key={solution.title}
                style={{
                  background: "white",
                  padding: "40px",
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    padding: "20px",
                    color: "rgba(216, 180, 106, 0.2)",
                  }}
                >
                  <Package size={80} />
                </div>
                <span
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--bronze-dark)",
                    marginBottom: "15px",
                  }}
                >
                  Solution {i + 1}
                </span>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#1e293b",
                    marginBottom: "15px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {solution.title}
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    lineHeight: 1.6,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {solution.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "60px",
              alignItems: "center",
            }}
          >
            <Reveal style={{ flex: "1 1 400px" }}>
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: "20px",
                }}
              >
                {sector.featureTitle}
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#475569",
                  lineHeight: 1.8,
                  marginBottom: "30px",
                }}
              >
                {sector.featureText}
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {sector.commitments.map((c) => (
                  <li
                    key={c}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "15px",
                      fontWeight: 600,
                      color: "#1e293b",
                    }}
                  >
                    <div
                      style={{
                        background: "var(--ivory)",
                        padding: "8px",
                        borderRadius: "50%",
                        color: "var(--bronze-dark)",
                      }}
                    >
                      <Check size={16} />
                    </div>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal
              style={{
                flex: "1 1 400px",
                position: "relative",
                height: "450px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                src={sector.secondaryImage}
                alt={sector.name}
                fill
                sizes="(max-width: 760px) calc(100vw - 32px), 50vw"
                style={{ objectFit: "cover" }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Fast Process */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 800,
                color: "var(--graphite)",
              }}
            >
              Méthodologie Opérationnelle
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              overflowX: "auto",
              paddingBottom: "20px",
            }}
          >
            {sector.process.map((step) => (
              <Reveal
                key={step.step}
                style={{
                  flex: "0 0 280px",
                  background: "white",
                  padding: "30px",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background: "var(--ivory)",
                    color: "var(--bronze-dark)",
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    marginBottom: "20px",
                  }}
                >
                  Étape {step.step}
                </span>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    marginBottom: "10px",
                    color: "#0f172a",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
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

      <section className="sector-cta">
        <div className="container sector-cta-inner">
          <Reveal>
            <span className="kicker kicker--light">
              Démarrer une collaboration
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
