"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { sectors } from "@/data/sectors";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaActive, setMegaActive] = useState(0);
  const preview = sectors[megaActive] || sectors[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    const onResize = () => {
      if (window.innerWidth > 1050) {
        setOpen(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Logo light={!scrolled && !open} priority />

        <nav className="desktop-nav" aria-label="Navigation principale">
          <Link href="/groupe" className="nav-item">
            <span>Le Groupe</span>
          </Link>

          <div className="nav-mega-trigger">
            <Link href="/activites" className="nav-item nav-item--has-drop">
              <span>Nos activités</span>
              <ChevronDown size={14} className="chevron-icon" />
            </Link>

            <div className="mega-menu">
              <div className="mega-menu-head">
                <span>14 Pôles d'expertise</span>
                <strong>Un écosystème multisectoriel d'excellence</strong>
              </div>
              <div className="mega-body">
                <div className="mega-grid">
                  {sectors.map((sector, index) => (
                    <Link
                      key={sector.slug}
                      href={`/activites/${sector.slug}`}
                      className="mega-grid-item"
                      onMouseEnter={() => setMegaActive(index)}
                      onFocus={() => setMegaActive(index)}
                    >
                      <span className="num">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <b className="title">{sector.name}</b>
                      <ArrowUpRight size={13} className="arrow" />
                    </Link>
                  ))}
                </div>
                <Link
                  className="mega-preview"
                  href={`/activites/${preview.slug}`}
                >
                  <Image
                    key={preview.slug}
                    src={preview.image}
                    alt={preview.name}
                    fill
                    sizes="360px"
                    quality={88}
                    className="preview-img"
                  />
                  <div className="preview-overlay" />
                  <span className="preview-badge">
                    {String(megaActive + 1).padStart(2, "0")}
                  </span>
                  <div className="preview-content">
                    <small>{preview.eyebrow}</small>
                    <strong>{preview.shortName}</strong>
                    <em>
                      Explorer la filiale <ArrowUpRight size={14} />
                    </em>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/realisations" className="nav-item">
            <span>Réalisations</span>
          </Link>
          <Link href="/actualites" className="nav-item">
            <span>Actualités</span>
          </Link>
        </nav>

        <div className="header-actions">
          <Link href="/contact" className="header-contact-btn">
            <span>Nous contacter</span>
            <ArrowUpRight size={16} />
          </Link>
          <ThemeToggle />
          <button
            className="menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <div className="container mobile-menu-inner">
          <div className="mobile-menu-links">
            <Link onClick={() => setOpen(false)} href="/groupe">
              Le Groupe
            </Link>
            <Link onClick={() => setOpen(false)} href="/activites">
              Nos activités
            </Link>
            <Link onClick={() => setOpen(false)} href="/realisations">
              Réalisations
            </Link>
            <Link onClick={() => setOpen(false)} href="/actualites">
              Actualités
            </Link>
            <Link onClick={() => setOpen(false)} href="/contact">
              Contact
            </Link>
          </div>

          <div className="mobile-sectors-block">
            <span className="mobile-sectors-title">Principales expertises</span>
            <div className="mobile-sectors">
              {sectors.slice(0, 8).map((s) => (
                <Link
                  onClick={() => setOpen(false)}
                  key={s.slug}
                  href={`/activites/${s.slug}`}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            onClick={() => setOpen(false)}
            href="/contact"
            className="mobile-cta-btn"
          >
            <span>Nous contacter</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
