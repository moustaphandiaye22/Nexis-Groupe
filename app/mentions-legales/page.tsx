import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Mentions légales | NEXIS GROUPE",
  description:
    "Informations légales et réglementaires concernant NEXIS GROUPE.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        eyebrow="Informations Réglémentaires"
        title="Mentions Légales"
        description="Conditions d'utilisation, éditeur et cadre juridique de la plateforme NEXIS GROUPE."
      />

      <section
        className="legal-section"
        style={{ padding: "5rem 0", background: "var(--bg-main)" }}
      >
        <div
          className="container"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            color: "var(--text-main)",
            lineHeight: "1.8",
          }}
        >
          <div className="legal-block" style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                color: "var(--primary-dark)",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              1. Éditeur du Site
            </h2>
            <p>
              Le présent site web est édité par{" "}
              <strong>NEXIS GROUPE SUARL</strong>, société au capital social de
              100 000 FCFA, immatriculée au Registre du Commerce et du Crédit
              Mobilier (RCCM) de Dakar sous le numéro{" "}
              <strong>SN.DKR.2026.B.22406</strong> et enregistrée sous le NINEA{" "}
              <strong>013160750</strong>.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              <strong>Forme juridique :</strong> SUARL
              <br />
              <strong>Siège social :</strong> Diamalaye, Dakar, Sénégal
              <br />
              <strong>Email :</strong> nexisgroupesn@gmail.com
              <br />
              <strong>Téléphone :</strong> À compléter
            </p>
          </div>

          <div className="legal-block" style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                color: "var(--primary-dark)",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              2. Direction de la Publication
            </h2>
            <p>
              <strong>Directeur de la publication :</strong> Direction de la
              Communication & des Relations Institutionnelles — NEXIS GROUPE.
            </p>
          </div>

          <div className="legal-block" style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                color: "var(--primary-dark)",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              3. Propriété Intellectuelle
            </h2>
            <p>
              L’ensemble de ce site (structure, textes, logos, éléments
              graphiques, photographies, vidéos, bases de données) relève de la
              législation sénégalaise et internationale sur le droit d’auteur et
              la propriété intellectuelle. Tous les droits de reproduction sont
              réservés.
            </p>
          </div>

          <div className="legal-block" style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                color: "var(--primary-dark)",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              4. Limites de Responsabilité
            </h2>
            <p>
              NEXIS GROUPE s’efforce d’assurer au mieux de ses possibilités
              l’exactitude et la mise à jour des informations diffusées sur ce
              site. Toutefois, NEXIS GROUPE décline toute responsabilité pour
              toute précision, inexactitude ou omission portant sur des
              informations disponibles sur le site.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
