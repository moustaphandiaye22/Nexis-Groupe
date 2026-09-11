"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  [14, "Pôles d’activité"],
  [1, "Vision commune"],
  [360, "Degrés d’accompagnement"],
  [24, "Heures d’engagement / jour"],
] as const;

export function Stats() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (
      !root.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const counters = root.current.querySelectorAll<HTMLElement>("[data-value]");
    counters.forEach((el) => {
      const target = Number(el.dataset.value || 0);
      const state = { value: 0 };
      gsap.to(state, {
        value: target,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = Math.round(state.value).toString();
        },
      });
    });
  }, []);
  return (
    <section ref={root} className="stats-section">
      <div className="container stats-grid">
        {stats.map(([value, label]) => (
          <div className="stat" key={label}>
            <div>
              <strong data-value={value}>0</strong>
              {value === 360 && <sup>°</sup>}
            </div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
