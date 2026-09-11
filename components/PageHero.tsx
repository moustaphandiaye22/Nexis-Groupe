"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DEFAULT_PAGE_HERO_BG =
  "https://images.pexels.com/photos/33206338/pexels-photo-33206338.jpeg";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
}) {
  const root = useRef<HTMLElement>(null);
  const bgImg = image || DEFAULT_PAGE_HERO_BG;

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".page-hero-image", { scale: 1.12, duration: 1.8 })
        .from(".page-hero-badge", { y: -15, opacity: 0, duration: 0.7 }, 0.2)
        .from(
          ".page-hero-content h1",
          { y: 30, opacity: 0, duration: 1 },
          0.35,
        );

      if (description) {
        tl.from(
          ".page-hero-content p",
          { y: 20, opacity: 0, duration: 0.8 },
          0.5,
        );
      }

      gsap.to(".page-hero-image", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="page-hero page-hero--image">
      <div
        className="page-hero-media"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Image
          src={bgImg}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="page-hero-image"
        />
      </div>
      <div className="page-hero-overlay-dark" />
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="container page-hero-content">
        <div className="page-hero-badge">
          <span className="badge-dot" />
          <span>{eyebrow}</span>
        </div>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
