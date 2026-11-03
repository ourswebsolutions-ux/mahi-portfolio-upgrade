import type Lenis from "lenis";

// Shared handle so modals can pause smooth scrolling.
let instance: Lenis | null = null;

export const setLenis = (l: Lenis | null) => {
  instance = l;
};

export const lockScroll = (locked: boolean) => {
  if (instance) {
    if (locked) instance.stop();
    else instance.start();
  }
  document.documentElement.style.overflow = locked ? "hidden" : "";
};

export const scrollToHash = (hash: string) => {
  const el = document.querySelector(hash);
  if (!el) return false;
  if (instance) instance.scrollTo(el as HTMLElement, { offset: 0 });
  else el.scrollIntoView({ behavior: "smooth" });
  return true;
};
