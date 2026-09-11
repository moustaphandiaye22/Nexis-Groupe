"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import gsap from "gsap";
import { sectors } from "@/data/sectors";

export function SectorsShowcase() {
  const [active, setActive] = useState(0);
  const current = sectors[active];
  const visual = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = visual.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const img = el.querySelector("img");
    const caption = el.querySelector(".sector-visual-caption");
    const number = el.querySelector(".sector-visual-number");
    gsap.killTweensOf([img, caption, number]);
    gsap.fromTo(
      img,
      { opacity: 0.2, scale: 1.09, clipPath: "inset(8% 8% 8% 8%)" },
      {
        opacity: 1,
        scale: 1.02,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.85,
        ease: "expo.out",
      },
    );
    gsap.fromTo(
      caption,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.12, ease: "power3.out" },
    );
    gsap.fromTo(
      number,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 0.75, duration: 0.7, delay: 0.08, ease: "power3.out" },
    );
  }, [active]);

  const onMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = visual.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const b = el.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width - 0.5;
    const y = (e.clientY - b.top) / b.height - 0.5;
    gsap.to(el.querySelector("img"), {
      x: x * 22,
      y: y * 16,
      scale: 1.055,
      duration: 0.8,
      ease: "power3.out",
    });
    gsap.to(el.querySelector(".sector-visual-caption"), {
      x: x * -12,
      y: y * -8,
      duration: 0.8,
      ease: "power3.out",
    });
  };
  const onLeave = () => {
    const el = visual.current;
    if (!el) return;
    gsap.to(el.querySelector("img"), {
      x: 0,
      y: 0,
      scale: 1.02,
      duration: 1,
      ease: "expo.out",
    });
    gsap.to(el.querySelector(".sector-visual-caption"), {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "expo.out",
    });
  };

  return (
    <section className="sectors-showcase section-dark">
      <div className="container section-heading section-heading--dark">
        <div>
          <span className="kicker kicker--light">Nos pôles</span>
          <h2>
            Une expertise.
            <br />À chaque ambition.
          </h2>
          <div className="motion-line section-line" />
        </div>
        <p>
          Un écosystème conçu pour agir sur plusieurs maillons de la création de
          valeur, avec la même exigence d’exécution.
        </p>
      </div>
      <div className="container sectors-layout">
        <div className="sectors-list">
          {sectors.map((sector, index) => (
            <Link
              href={`/activites/${sector.slug}`}
              key={sector.slug}
              className={`sector-row ${active === index ? "is-active" : ""}`}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>
                <i>{sector.name}</i>
              </strong>
              <em>{sector.shortName}</em>
              <ArrowUpRight size={19} />
            </Link>
          ))}
        </div>
        <div className="sector-visual-wrap">
          <div
            ref={visual}
            className="sector-visual"
            onMouseMove={onMove}
            onMouseLeave={onLeave}
          >
            <Image
              key={current.slug}
              src={current.image}
              alt={current.name}
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
              quality={92}
            />
            <span className="sector-visual-number">
              {String(active + 1).padStart(2, "0")}
            </span>
            <div className="sector-visual-caption">
              <span>{current.eyebrow}</span>
              <p>{current.intro}</p>
              <small>
                Découvrir le pôle <ArrowUpRight size={15} />
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
