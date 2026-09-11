"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sectors } from "@/data/sectors";

export function ExpertiseRail() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = root.current;
    const line = track.current;
    if (
      !section ||
      !line ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.to(line, {
      xPercent: -24,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.1,
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  const labels = [...sectors, ...sectors];
  return (
    <section
      ref={root}
      className="expertise-rail"
      aria-label="Les expertises NEXIS GROUPE"
    >
      <div ref={track} className="expertise-rail-track">
        {labels.map((sector, index) => (
          <span key={`${sector.slug}-${index}`}>
            <i>{String((index % sectors.length) + 1).padStart(2, "0")}</i>
            {sector.shortName}
          </span>
        ))}
      </div>
    </section>
  );
}
