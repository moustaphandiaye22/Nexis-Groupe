"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Template({ children }: { children: ReactNode }) {
  const curtain = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (
      !curtain.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    gsap.fromTo(
      curtain.current,
      { scaleY: 1, transformOrigin: "top" },
      { scaleY: 0, duration: 0.9, ease: "expo.inOut", delay: 0.05 },
    );
  }, []);
  return (
    <>
      <div ref={curtain} className="route-curtain" aria-hidden="true" />
      <div className="page-shell">{children}</div>
    </>
  );
}
