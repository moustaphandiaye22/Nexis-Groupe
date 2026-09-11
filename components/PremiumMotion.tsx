"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function PremiumMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".parallax-media").forEach((wrap) => {
        const img = wrap.querySelector("img");
        if (!img) return;
        gsap.fromTo(
          img,
          { scale: 1.08, yPercent: -3 },
          {
            scale: 1.02,
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.9,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".motion-line").forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 1.25,
            ease: "expo.out",
            scrollTrigger: { trigger: line, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils
        .toArray<HTMLElement>(".button, .circle-link, .header-contact")
        .forEach((el) => {
          const onMove = (e: MouseEvent) => {
            const b = el.getBoundingClientRect();
            const x = e.clientX - b.left - b.width / 2;
            const y = e.clientY - b.top - b.height / 2;
            gsap.to(el, {
              x: x * 0.18,
              y: y * 0.18,
              duration: 0.35,
              ease: "power3.out",
            });
          };
          const onLeave = () =>
            gsap.to(el, {
              x: 0,
              y: 0,
              duration: 0.65,
              ease: "elastic.out(1,.45)",
            });
          el.addEventListener("mousemove", onMove);
          el.addEventListener("mouseleave", onLeave);
        });
    });

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 150);
    return () => {
      window.clearTimeout(refresh);
      ctx.revert();
    };
  }, []);

  return null;
}
