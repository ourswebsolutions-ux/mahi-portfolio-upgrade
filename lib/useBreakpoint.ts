"use client";

import { useEffect, useState } from "react";

export type Breakpoint = "desktop" | "tablet" | "phone";

// Mirrors the reference site's three Framer breakpoints.
export function getBreakpoint(width: number): Breakpoint {
  if (width >= 1200) return "desktop";
  if (width >= 810) return "tablet";
  return "phone";
}

export function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>("desktop");
  useEffect(() => {
    const update = () => setBp(getBreakpoint(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return bp;
}

export function useReducedMotionPref(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}
