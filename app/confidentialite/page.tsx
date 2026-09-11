import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | NEXIS GROUPE",
  description:
    "Protection des données personnelles et politique de confidentialité de NEXIS GROUPE.",
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        eyebrow="Protection des Données"
        title="Politique de Confidentialité"
        description="Notre engagement pour la transparence, la sécurité et la confidentialité de vos données."
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
              1. Collecte des Données Personnelles
            </h2>
            <p>
              NEXIS GROUPE collecte des données personnelles via ses formulaires
              de contact, demandes de renseignements et candidatures. Ces
              données incluent notamment votre nom, prénom, adresse e-mail,
              numéro de téléphone et entreprise.
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
              2. Utilisation des Données
            </h2>
            <p>
              Les données recueillies sont destinées exclusivement à l’usage
              interne de NEXIS GROUPE afin de :
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>Traiter vos demandes de rendez-vous et de partenariat.</li>
              <li>
                Vous adresser des informations relatives à nos filiales et
                activités.
              </li>
              <li>Améliorer l’expérience utilisateur sur notre plateforme.</li>
            </ul>
          </div>

          <div className="legal-block" style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                color: "var(--primary-dark)",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              3. Sécurité & Conservation
            </h2>
            <p>
              NEXIS GROUPE met en œuvre des mesures de sécurité techniques et
              organisationnelles appropriées pour protéger vos données
              personnelles contre tout accès non autorisé, altération,
              divulgation ou destruction.
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
              4. Vos Droits
            </h2>
            <p>
              Conformément à la réglementation en vigueur sur la protection des
              données (CDP / RGPD), vous disposez d'un droit d'accès, de
              rectification et de suppression de vos données. Pour exercer ce
              droit, vous pouvez nous contacter à l'adresse :{" "}
              <strong>nexisgroupesn@gmail.com</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
