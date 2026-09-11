"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RotateCcw,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  X,
  Sparkles,
  CheckCircle2,
  Compass,
  Layers,
} from "lucide-react";
import { sectors } from "@/data/sectors";
import { PolesCube } from "./PolesCube";

const CATEGORIES = ["Tous", "Immobilier", "BTP", "Mobilité", "Services"];

export function PolesCubeSection() {
  const [activePoleIndex, setActivePoleIndex] = useState<number | null>(null);
  const [filterGroup, setFilterGroup] = useState<string>("Tous");
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

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
    <section className="poles-3d-section">
      {/* Background ambient lights */}
      <div className="poles-3d-ambient-light-1" />
      <div className="poles-3d-ambient-light-2" />
      <div className="poles-3d-grid-overlay" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="poles-3d-header">
          <div className="poles-3d-header-left">
            <div className="poles-3d-badge">
              <Sparkles size={14} className="text-gold" />
              <span>NEXIS 3D IMMERSION · 14 PÔLES INTERCONNECTÉS</span>
            </div>
            <h2 className="poles-3d-title">
              Un écosystème géométrique. <br />
              <span className="poles-3d-title-gold">
                14 expertises en synergie perpétuelle.
              </span>
            </h2>
          </div>

          <p className="poles-3d-subtitle">
            Manipulez la structure 3D ou cliquez sur un pôle pour déclencher une{" "}
            <strong>immersion complète</strong> dans l’univers opérationnel de
            chaque filiale du groupe.
          </p>
        </div>

        {/* Controls & Filter Bar */}
        <div className="poles-3d-controls-bar">
          {/* Category Tabs */}
          <div className="poles-3d-filter-group">
            <span className="poles-3d-filter-label">Filtres :</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterGroup(cat)}
                className={`poles-3d-filter-btn ${
                  filterGroup === cat ? "active" : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Canvas Actions */}
          <div className="poles-3d-actions-group">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              title={autoRotate ? "Mettre en pause la rotation" : "Activer la rotation"}
              className="poles-3d-action-btn"
            >
              {autoRotate ? <Pause size={14} /> : <Play size={14} />}
              <span>{autoRotate ? "Pause 3D" : "Auto Rotation"}</span>
            </button>

            {activePoleIndex !== null && (
              <button
                onClick={() => setActivePoleIndex(null)}
                className="poles-3d-action-btn gold"
              >
                <RotateCcw size={14} />
                <span>Vue globale</span>
              </button>
            )}
          </div>
        </div>

        {/* 3D Canvas Card */}
        <div className="poles-3d-canvas-card">
          {/* Top Canvas Badges */}
          <div className="poles-3d-canvas-tag top-left">
            <Compass size={14} className="animate-spin-slow text-gold" />
            <span>Glissez pour faire pivoter le cube 3D</span>
          </div>

          <div className="poles-3d-canvas-tag top-right">
            <Layers size={14} />
            <span>14 Pôles Déployés</span>
          </div>

          {/* Three.js Canvas */}
          <PolesCube
            sectors={sectors}
            activePoleIndex={activePoleIndex}
            onSelectPole={(idx) => setActivePoleIndex(idx)}
            filterGroup={filterGroup}
            autoRotate={autoRotate}
          />

          {/* Quick Pole Navigation Bar */}
          <div className="poles-3d-quick-nav">
            <button
              onClick={handlePrevPole}
              className="poles-3d-nav-arrow"
              title="Pôle précédent"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="poles-3d-quick-pills-wrap scrollbar-none">
              {sectors.map((sec, idx) => {
                const isSelected = activePoleIndex === idx;
                return (
                  <button
                    key={sec.slug}
                    onClick={() => setActivePoleIndex(idx)}
                    className={`poles-3d-quick-pill ${
                      isSelected ? "active" : ""
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}. {sec.shortName}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleNextPole}
              className="poles-3d-nav-arrow"
              title="Pôle suivant"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Immersion Modal / Drawer Overlay */}
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

              {/* Close Button */}
              <button
                onClick={() => setActivePoleIndex(null)}
                className="poles-3d-drawer-close"
                title="Fermer l'immersion"
              >
                <X size={18} />
              </button>

              {/* Title & Navigation */}
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
                <p className="poles-3d-drawer-quote">
                  "{activeSector.intro}"
                </p>
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
