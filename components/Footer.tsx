"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp, MapPin, Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { sectors } from "@/data/sectors";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer sticky-footer">
      <div className="container">
        {/* Compact CTA Bar */}
        <div className="footer-cta">
          <div className="footer-cta-text">
            <span className="footer-kicker">Parlons de votre projet</span>
            <h2>Construisons la prochaine opportunité ensemble.</h2>
          </div>
          <Link className="footer-cta-button" href="/contact">
            <span>Nous contacter</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Modern Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Info & Mission */}
          <div className="footer-brand">
            <Logo light />
            <p>
              Un groupe multisectoriel tourné vers l’exécution, la confiance et
              la création de valeur durable en Afrique et à l’international.
            </p>
            <div className="footer-socials">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <span className="dot">•</span>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
              >
                X (Twitter)
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="footer-col">
            <h3>Navigation</h3>
            <ul className="footer-links">
              <li>
                <Link href="/groupe">Le Groupe</Link>
              </li>
              <li>
                <Link href="/activites">Nos activités</Link>
              </li>
              <li>
                <Link href="/realisations">Réalisations</Link>
              </li>
              <li>
                <Link href="/actualites">Actualités</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Sectors / Expertises */}
          <div className="footer-col">
            <h3>Expertises</h3>
            <ul className="footer-links">
              {sectors.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/activites/${s.slug}`}>{s.shortName}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col footer-contact-col">
            <h3>Coordonnées</h3>
            <div className="footer-contact-item">
              <MapPin size={15} className="footer-icon" />
              <span>Diamalaye, Dakar, Sénégal</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={15} className="footer-icon" />
              <a href="mailto:nexisgroupesn@gmail.com">
                nexisgroupesn@gmail.com
              </a>
            </div>
            <div className="footer-contact-item">
              <Phone size={15} className="footer-icon" />
              <span>À compléter</span>
            </div>
          </div>
        </div>

        {/* Compact Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>
              © {new Date().getFullYear()} NEXIS GROUPE. Tous droits réservés.
            </span>
            <span className="footer-tagline">
              Exigence · Innovation · Impact
            </span>
          </div>

          <div className="footer-bottom-right">
            <Link href="/mentions-legales">Mentions légales</Link>
            <span className="sep">•</span>
            <Link href="/confidentialite">Confidentialité</Link>


          </div>
        </div>
      </div>
    </footer>
  );
}
