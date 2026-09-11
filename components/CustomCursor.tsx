"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const d = dot.current;
    const r = ring.current;
    if (!d || !r) return;

    const moveDotX = gsap.quickTo(d, "x", { duration: 0.12, ease: "power3" });
    const moveDotY = gsap.quickTo(d, "y", { duration: 0.12, ease: "power3" });
    const moveRingX = gsap.quickTo(r, "x", { duration: 0.45, ease: "power3" });
    const moveRingY = gsap.quickTo(r, "y", { duration: 0.45, ease: "power3" });

    const onMove = (e: MouseEvent) => {
      moveDotX(e.clientX);
      moveDotY(e.clientY);
      moveRingX(e.clientX);
      moveRingY(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "a,button,.sector-row,.project-card,.service-row",
      );
      if (target) r.classList.add("is-active");
    };
    const onOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "a,button,.sector-row,.project-card,.service-row",
      );
      if (target) r.classList.remove("is-active");
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" />
      <div ref={dot} className="cursor-dot" />
    </>
  );
}
