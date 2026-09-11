import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez NEXIS GROUPE et sélectionnez le pôle correspondant à votre projet.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre prochain projet."
        description="Décrivez votre besoin et orientez votre demande vers le pôle concerné. Notre équipe vous répondra dans les plus brefs délais."
      />

      <section className="contact-section">
        <div className="container contact-layout">
          <div className="contact-info">
            <span className="kicker">NEXIS GROUPE</span>
            <h2>
              Un point d’entrée.
              <br />
              Plusieurs expertises.
            </h2>

            <div className="contact-overview">
              <div className="contact-detail">
                <span>Adresse</span>
                <strong>Diamalaye, Dakar, Sénégal</strong>
              </div>
              <div className="contact-detail">
                <span>Email</span>
                <strong>nexisgroupesn@gmail.com</strong>
              </div>
              <div className="contact-detail">
                <span>Téléphone</span>
                <strong>À compléter</strong>
              </div>
              <div className="contact-detail">
                <span>Horaires</span>
                <strong>Lun — Sam · 08:00 — 18:00</strong>
              </div>
            </div>

            <div className="contact-note">
              <strong>Réponse rapide</strong>
              <p>
                Notre équipe étudie chaque demande en fonction du bon pôle
                d’expertise pour vous proposer une réponse claire et structurée.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
