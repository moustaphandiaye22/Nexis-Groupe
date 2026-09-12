"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  ArrowUpRight,
  RotateCcw,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  CheckCircle2,
  Compass,
} from "lucide-react";
import { useEffect, useState } from "react";
import { sectors } from "@/data/sectors";

const PolesCube = dynamic(
  () => import("./3d/PolesCube").then((module) => module.PolesCube),
  { ssr: false },
);

const CATEGORIES = ["Tous", "Immobilier", "BTP", "Mobilité", "Services"];

export function Hero() {
  const [activePoleIndex, setActivePoleIndex] = useState<number | null>(null);
  const [filterGroup, setFilterGroup] = useState<string>("Tous");
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [isThreeReady, setIsThreeReady] = useState(false);

  useEffect(() => {
    const showThree = () => setIsThreeReady(true);
    const idleApi = window as unknown as {
      requestIdleCallback?: typeof window.requestIdleCallback;
      cancelIdleCallback?: typeof window.cancelIdleCallback;
    };
    if (idleApi.requestIdleCallback) {
      const idleId = idleApi.requestIdleCallback(showThree, { timeout: 1200 });
      return () => idleApi.cancelIdleCallback?.(idleId);
    }
    const timeoutId = globalThis.setTimeout(showThree, 350);
    return () => globalThis.clearTimeout(timeoutId);
  }, []);

  const activeSector =
    activePoleIndex !== null ? sectors[activePoleIndex] : null;

  const handleNextPole = () => {
    if (activePoleIndex === null) {
      setActivePoleIndex(0);
    } else {
      setActivePoleIndex((activePoleIndex + 1) % sectors.length);
    }
  };

  const handlePrevPole = () => {
    if (activePoleIndex === null) {
      setActivePoleIndex(sectors.length - 1);
    } else {
      setActivePoleIndex(
        (activePoleIndex - 1 + sectors.length) % sectors.length
      );
    }
  };

  return (
    <section className="hero hero-3d-pure-stage">
      {/* Dark Ambient Atmosphere & Grid Layer (No photo background) */}
      <div className="poles-3d-ambient-light-1" />
      <div className="poles-3d-ambient-light-2" />
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="container hero-container-pure">
        {/* Full-Width 3D Cube Stage Card */}
        <div className="hero-3d-pure-card">
          {/* Filter Bar + Controls on same row */}
          <div className="hero-3d-filters">
            <span className="hero-3d-filter-label">Pôles :</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterGroup(cat)}
                className={`hero-3d-filter-tag ${
                  filterGroup === cat ? "active" : ""
                }`}
              >
                {cat}
              </button>
            ))}

            {/* Pause button inline */}
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              title={autoRotate ? "Pause 3D" : "Auto Rotation"}
              className="hero-3d-btn"
              style={{ marginLeft: "auto" }}
            >
              {autoRotate ? <Pause size={13} /> : <Play size={13} />}
              <span>{autoRotate ? "Pause" : "Rotation"}</span>
            </button>

            {activePoleIndex !== null && (
              <button
                onClick={() => setActivePoleIndex(null)}
                className="hero-3d-btn gold"
              >
                <RotateCcw size={13} />
                <span>Vue Globale</span>
              </button>
            )}
          </div>

          {/* Interactive Guidance Badge */}
          <div className="hero-3d-instruction">
            <Compass size={14} className="animate-spin-slow text-gold" />
            <span>
              Déplacez la souris pour orienter le cube 3D · Cliquez sur un pôle pour l'immersion
            </span>
          </div>

          {/* Three.js 3D Canvas Stage */}
          <div className="hero-3d-pure-canvas-wrap">
            {isThreeReady ? (
              <PolesCube
                sectors={sectors}
                activePoleIndex={activePoleIndex}
                onSelectPole={(idx) => setActivePoleIndex(idx)}
                filterGroup={filterGroup}
                autoRotate={autoRotate}
              />
            ) : (
              <div className="hero-3d-loading" role="status">
                <span className="hero-3d-loading-mark">NEXIS</span>
                <span>Chargement de l’expérience 3D…</span>
              </div>
            )}
          </div>

          {/* Bottom Quick Navigation Bar (01 to 14) */}
          <div className="hero-3d-quick-bar">
            <button onClick={handlePrevPole} className="hero-3d-nav-btn" title="Pôle précédent">
              <ChevronLeft size={16} />
            </button>

            <div className="hero-3d-pills-scroll scrollbar-none">
              {sectors.map((sec, idx) => {
                const isSelected = activePoleIndex === idx;
                return (
                  <button
                    key={sec.slug}
                    onClick={() => setActivePoleIndex(idx)}
                    className={`hero-3d-pill ${isSelected ? "active" : ""}`}
                  >
                    {String(idx + 1).padStart(2, "0")}. {sec.name}
                  </button>
                );
              })}
            </div>

            <button onClick={handleNextPole} className="hero-3d-nav-btn" title="Pôle suivant">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Immersion Modal / Drawer Overlay directly accessible from Hero */}
      {activeSector && activePoleIndex !== null && (
        <div className="poles-3d-modal-backdrop animate-fade-in">
          <div
            className="poles-3d-modal-overlay-click"
            onClick={() => setActivePoleIndex(null)}
          />

          <div className="poles-3d-drawer animate-slide-left">
            {/* Drawer Image Header */}
            <div className="poles-3d-drawer-hero">
              <Image
                src={activeSector.image}
                alt={activeSector.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className="poles-3d-drawer-hero-overlay" />

              <button
                onClick={() => setActivePoleIndex(null)}
                className="poles-3d-drawer-close"
                title="Fermer l'immersion"
              >
                <X size={18} />
              </button>

              <div className="poles-3d-drawer-header-content">
                <div>
                  <span className="poles-3d-drawer-kicker">
                    PÔLE {String(activePoleIndex + 1).padStart(2, "0")} / 14
                  </span>
                  <h3 className="poles-3d-drawer-title">{activeSector.name}</h3>
                </div>

                <div className="poles-3d-drawer-nav-btns">
                  <button onClick={handlePrevPole} title="Pôle précédent">
                    <ChevronLeft size={16} />
                  </button>
                  <button onClick={handleNextPole} title="Pôle suivant">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Drawer Content Body */}
            <div className="poles-3d-drawer-body">
              <div className="poles-3d-drawer-intro-block">
                <span className="poles-3d-drawer-eyebrow">
                  {activeSector.eyebrow}
                </span>
                <p className="poles-3d-drawer-quote">"{activeSector.intro}"</p>
                <p className="poles-3d-drawer-desc">
                  {activeSector.description}
                </p>
              </div>

              {/* Services List */}
              <div className="poles-3d-drawer-services-section">
                <h4 className="poles-3d-section-heading">
                  DOMAINES D'INTERVENTION & SERVICES :
                </h4>
                <div className="poles-3d-services-grid">
                  {activeSector.services.slice(0, 6).map((service) => (
                    <div key={service} className="poles-3d-service-chip">
                      <CheckCircle2 size={14} className="text-gold" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Highlight */}
              {activeSector.solutions && activeSector.solutions.length > 0 && (
                <div className="poles-3d-solution-card">
                  <h5 className="poles-3d-solution-title">
                    {activeSector.solutions[0].title}
                  </h5>
                  <p className="poles-3d-solution-text">
                    {activeSector.solutions[0].text}
                  </p>
                </div>
              )}
            </div>

            {/* Drawer Footer Actions */}
            <div className="poles-3d-drawer-footer">
              <span className="poles-3d-drawer-counter">
                Pôle {activePoleIndex + 1} sur 14
              </span>

              <Link
                href={`/activites/${activeSector.slug}`}
                className="poles-3d-drawer-cta"
              >
                <span>Explorer la filiale {activeSector.shortName}</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
