import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Tag, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Actualités & Media | NEXIS GROUPE",
  description:
    "Découvrez les dernières actualités, annonces et perspectives stratégiques de NEXIS GROUPE.",
};

const articles = [
  {
    id: 1,
    category: "Institutionnel",
    date: "10 Septembre 2026",
    title:
      "NEXIS GROUPE consolide son écosystème autour de 14 expertises stratégiques",
    summary:
      "Afin de répondre aux exigences de projets industriels et d'infrastructures d'envergure, le groupe annonce la structuration de ses 4 grands pôles opérationnels.",
    image:
      "https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg",
    featured: true,
  },
  {
    id: 2,
    category: "Immobilier & Foncier",
    date: "02 Septembre 2026",
    title:
      "Lancement du programme Résidence Horizon : l'excellence architecturale à Dakar",
    summary:
      "NEXIS IMMO initie un programme résidentiel haut de gamme alliant sobriété environnementale, matériaux durables et services connectés.",
    image:
      "https://images.pexels.com/photos/33206338/pexels-photo-33206338.jpeg",
    featured: false,
  },
  {
    id: 3,
    category: "Innovation & Digital",
    date: "24 Août 2026",
    title:
      "NEXIS TECH déploie une plateforme de pilotage multisectoriel en temps réel",
    summary:
      "Une suite d'outils analytiques intégrée permettant d'optimiser le suivi des chantiers BTP et la gestion des flux de transport et de logistique.",
    image:
      "https://images.pexels.com/photos/36706460/pexels-photo-36706460.jpeg",
    featured: false,
  },
  {
    id: 4,
    category: "Mobilité & Flotte",
    date: "15 Août 2026",
    title:
      "Renforcement du parc logistique NEXIS AUTO pour le transport d'équipements lourds",
    summary:
      "Acquisition et mise en service de véhicules de transport spécialisés pour soutenir les grands chantiers de construction à l'échelle régionale.",
    image:
      "https://images.pexels.com/photos/29566880/pexels-photo-29566880.jpeg",
    featured: false,
  },
];

export default function NewsPage() {
  const featuredArticle = articles.find((a) => a.featured) || articles[0];
  const listArticles = articles.filter((a) => a.id !== featuredArticle.id);

  return (
    <>
      <PageHero
        eyebrow="Actualités & Media"
        title="Ce qui fait avancer l’écosystème NEXIS."
        description="Actualités, communiqués officiels, jalons de projets et prises de parole stratégiques du groupe."
        image="https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg"
      />

      <section
        className="news-page-section"
        style={{ padding: "6rem 0", background: "var(--paper)" }}
      >
        <div className="container">
          {/* Featured Article */}
          <div className="news-featured-card" style={{ marginBottom: "4rem" }}>
            <div className="news-featured-grid">
              <div
                className="news-featured-media"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "380px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className="news-featured-content"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span className="news-category-badge">
                    {featuredArticle.category}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "var(--muted)",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Calendar size={14} /> {featuredArticle.date}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1.8rem",
                    color: "var(--graphite)",
                    lineHeight: "1.25",
                    marginBottom: "1rem",
                  }}
                >
                  {featuredArticle.title}
                </h2>
                <p
                  style={{
                    color: "#52627a",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    marginBottom: "1.5rem",
                  }}
                >
                  {featuredArticle.summary}
                </p>
                <Link
                  href="#"
                  className="button button--dark"
                  style={{ alignSelf: "flex-start" }}
                >
                  <span>Lire le communiqué</span> <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Grid of Other Articles */}
          <div className="section-heading" style={{ marginBottom: "2rem" }}>
            <div>
              <span className="kicker">Dernières publications</span>
              <h2>Toutes nos actualités.</h2>
            </div>
          </div>

          <div className="news-grid-cards">
            {listArticles.map((item) => (
              <article key={item.id} className="news-card-item">
                <div
                  className="news-card-media"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "240px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="news-card-tag">{item.category}</span>
                </div>
                <div className="news-card-body">
                  <div className="news-card-meta">
                    <Calendar size={13} />
                    <span>{item.date}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <Link href="#" className="news-read-more">
                    <span>En savoir plus</span> <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
