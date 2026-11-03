"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  type MotionValue,
} from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type RefObject } from "react";
import { projects, type Project } from "@/content/site";
import { getBreakpoint } from "@/lib/useBreakpoint";
import { RevealHeading } from "./Reveal";
import CursorPill from "./CursorPill";
import VideoModal, { type ModalVideo } from "./VideoModal";
import { ArrowUpRight } from "./icons";

/*
 * Hero → gallery transition.
 *
 * Measured on the reference: the four cards are laid out in their final 2×2
 * grid slots. Each carries a scroll-linked transform
 *   perspective(1200px) translate(x, y) scale(s) rotate(r)
 * that interpolates linearly from a "hero pose" at scrollY = 0 to identity at
 * scrollY = hero height. Hero poses are stored as the card centre's target
 * position inside the hero, so the translation is derived from live layout.
 *
 *   desktop (≥1200): scale .7, target = container centre + dx, hero top + y
 *   tablet  (≥810):  scale .6, dx scaled with the container (designed at 810)
 *   phone:           reference shows no hero cards; each card instead settles
 *                    from a tilted, scaled pose as it scrolls into view.
 */
const POSES = {
  desktop: {
    scale: 0.7,
    cards: [
      { rot: 10, dx: 276, y: 301.5 },
      { rot: 15, dx: 334, y: 301.5 },
      { rot: -5, dx: 226, y: 343.5 },
      { rot: 5, dx: 284, y: 393.5 },
    ],
  },
  tablet: {
    scale: 0.6,
    cards: [
      { rot: 10, dx: 213.5, y: 254 },
      { rot: 15, dx: 276.5, y: 254 },
      { rot: -5, dx: 193.5, y: 317 },
      { rot: 5, dx: 236.5, y: 357 },
    ],
  },
};

// Stacking order in the hero: card 1 on top, then 4, 3, 2.
const Z = [3, 0, 1, 2];

type Geo = {
  mode: "hero" | "phone" | "static";
  heroH: number;
  vh: number;
  cards: { tx: number; ty: number; rot: number; s: number; top: number; originY: number }[];
};

function measure(
  hero: HTMLElement,
  container: HTMLElement,
  slots: (HTMLElement | null)[],
  reduced: boolean,
): Geo {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const bp = getBreakpoint(vw);
  const sy = window.scrollY;
  const heroRect = hero.getBoundingClientRect();
  const heroTop = heroRect.top + sy;
  const heroH = heroRect.height;
  const cRect = container.getBoundingClientRect();
  const centreX = cRect.left + cRect.width / 2;

  const mode: Geo["mode"] = reduced ? "static" : bp === "phone" ? "phone" : "hero";
  const pose = bp === "desktop" ? POSES.desktop : POSES.tablet;
  const k = bp === "tablet" ? cRect.width / 810 : 1;

  const cards = slots.map((slot, i) => {
    const r = slot!.getBoundingClientRect();
    const imgH = r.width * 0.75; // 4:3 thumbnails
    const cx = r.left + r.width / 2;
    const cy = r.top + sy + imgH / 2;
    const p = pose.cards[i];
    return {
      tx: centreX + p.dx * k - cx,
      ty: heroTop + p.y - cy,
      rot: p.rot,
      s: pose.scale,
      top: r.top + sy,
      originY: imgH / 2,
    };
  });
  return { mode, heroH, vh, cards };
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

function ProjectCard({
  project,
  index,
  geo,
  version,
  scrollY,
  captionsOn,
  slotRef,
  onOpen,
}: {
  project: Project;
  index: number;
  geo: RefObject<Geo | null>;
  version: number;
  scrollY: MotionValue<number>;
  captionsOn: boolean;
  slotRef: (el: HTMLDivElement | null) => void;
  onOpen: (p: Project) => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const rotate = useMotionValue(0);
  const [origin, setOrigin] = useState("50% 50%");
  const [ready, setReady] = useState(false);

  const apply = useCallback(
    (sy: number) => {
      const g = geo.current;
      if (!g) return;
      const c = g.cards[index];
      if (g.mode === "hero") {
        const inv = 1 - clamp01(sy / g.heroH);
        x.set(c.tx * inv);
        y.set(c.ty * inv);
        scale.set(c.s + (1 - c.s) * (1 - inv));
        rotate.set(c.rot * inv);
      } else if (g.mode === "phone") {
        const inv = 1 - clamp01((g.vh - (c.top - sy)) / (g.vh * 0.45));
        x.set(0);
        y.set(64 * inv);
        scale.set(1 - 0.1 * inv);
        rotate.set(c.rot * 0.4 * inv);
      } else {
        x.set(0);
        y.set(0);
        scale.set(1);
        rotate.set(0);
      }
    },
    [geo, index, x, y, scale, rotate],
  );

  useMotionValueEvent(scrollY, "change", apply);

  useLayoutEffect(() => {
    if (!geo.current) return;
    setOrigin(`50% ${geo.current.cards[index].originY}px`);
    apply(window.scrollY);
    setReady(true);
  }, [version, apply, geo, index]);

  return (
    <div className="project-slot" ref={slotRef} style={{ zIndex: Z[index] }}>
      <motion.div
        className="project-card"
        style={{
          x,
          y,
          scale,
          rotate,
          transformPerspective: 1200,
          transformOrigin: origin,
          opacity: ready ? 1 : 0,
        }}
      >
        <CursorPill label="View Project">
          <a
            href={project.video}
            className="project-link"
            onClick={(e) => {
              e.preventDefault();
              onOpen(project);
            }}
            aria-label={`Play ${project.title} — ${project.type}`}
          >
            <div className="project-media">
              <Image
                src={project.thumb}
                alt={project.alt}
                fill
                sizes="(min-width: 1200px) 484px, (min-width: 810px) 45vw, 92vw"
                priority
              />
            </div>
            <motion.div
              className="project-caption"
              initial={false}
              animate={{ opacity: captionsOn ? 1 : 0 }}
              transition={{ duration: 0.35, ease: [0.44, 0, 0.56, 1] }}
            >
              <div>
                <p className="project-title">{project.title}</p>
                <p className="t-small t-sub">{project.type}</p>
              </div>
              <span className="view-link t-small t-sub">
                <span className="arrow-swap" aria-hidden>
                  <ArrowUpRight />
                  <ArrowUpRight />
                </span>
                View Project
              </span>
            </motion.div>
          </a>
        </CursorPill>
      </motion.div>
    </div>
  );
}

export default function Projects({ heroRef }: { heroRef: RefObject<HTMLElement | null> }) {
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const geo = useRef<Geo | null>(null);
  const [version, setVersion] = useState(0);
  const [captionsOn, setCaptionsOn] = useState(false);
  const [modal, setModal] = useState<ModalVideo>(null);

  const remeasure = useCallback(() => {
    if (!heroRef.current || !containerRef.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    geo.current = measure(heroRef.current, containerRef.current, slotRefs.current, reduced);
    setVersion((v) => v + 1);
    updateCaptions(window.scrollY);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroRef]);

  const updateCaptions = (sy: number) => {
    const g = geo.current;
    if (!g) return;
    setCaptionsOn(g.mode !== "hero" || sy > g.heroH * 0.3);
  };

  useMotionValueEvent(scrollY, "change", updateCaptions);

  useLayoutEffect(() => {
    remeasure();
  }, [remeasure]);

  useEffect(() => {
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(remeasure);
    };
    const ro = new ResizeObserver(onResize);
    if (heroRef.current) ro.observe(heroRef.current);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", onResize);
    document.fonts?.ready.then(onResize);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", onResize);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", onResize);
      mq.removeEventListener("change", onResize);
    };
  }, [heroRef, remeasure]);

  const open = useCallback(
    (p: Project) => setModal({ src: p.video, poster: p.thumb, title: `${p.title} — ${p.type}` }),
    [],
  );

  return (
    <section className="section projects" id="work">
      <div className="container" ref={containerRef}>
        <RevealHeading
          className="projects-heading h-section"
          margin="0px 0px -45% 0px"
          parts={[{ text: "Latest Projects", tone: "strong" }]}
        />
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              index={i}
              geo={geo}
              version={version}
              scrollY={scrollY}
              captionsOn={captionsOn}
              slotRef={(el) => {
                slotRefs.current[i] = el;
              }}
              onOpen={open}
            />
          ))}
        </div>
        <div className="projects-more">
          <Link href="/work" className="underline-link t-body">
            View all my projects
            <span className="arrow-swap" aria-hidden>
              <ArrowUpRight />
              <ArrowUpRight />
            </span>
          </Link>
        </div>
      </div>
      <VideoModal video={modal} onClose={() => setModal(null)} />
    </section>
  );
}
