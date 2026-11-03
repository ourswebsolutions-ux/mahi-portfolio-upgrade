"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { faq, footer, journal, nav, site, testimonials, type JournalEntry } from "@/content/site";
import { Reveal, RevealHeading } from "./Reveal";
import CursorPill from "./CursorPill";
import { Proof } from "./Hero";
import { PlaceholderAvatar } from "./Sections";
import { Socials } from "./Socials";
import VideoModal, { type ModalVideo } from "./VideoModal";
import { ArrowUpRight, CalendarCheck, Quote, Star } from "./icons";

const ease = [0.44, 0, 0.56, 1] as const;

/* ------------------------------------------------------------------ */

export function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="testimonials-head">
          <RevealHeading
            className="h-section"
            parts={[
              { text: testimonials.headingMuted, tone: "muted" },
              { text: testimonials.headingStrong, tone: "strong" },
            ]}
          />
          <Proof />
        </div>
        <div className="testimonial-grid" data-lenis-prevent-horizontal>
          {testimonials.items.map((t, i) => (
            <Reveal key={i} className="testimonial-card" delay={(i % 3) * 0.08}>
              <div>
                <Quote />
                <p className="t-body-sm testimonial-quote">{t.quote}</p>
              </div>
              <div className="testimonial-foot">
                {i === 0 && (
                  <span className="proof-stars proof-stars--dark" aria-hidden>
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} />
                    ))}
                  </span>
                )}
                <div className="person">
                  <PlaceholderAvatar src={t.avatar} />
                  <div>
                    <p className="t-label">{t.name}</p>
                    {t.role && <p className="t-small t-sub">{t.role}</p>}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section faq">
      <div className="container faq-inner">
        <div className="faq-main">
          <RevealHeading
            className="h-section"
            parts={[
              { text: faq.headingStrong, tone: "strong" },
              { text: faq.headingMuted, tone: "muted" },
            ]}
          />
          <div className="faq-list">
            {faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="faq-item">
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <motion.span
                      className="faq-num"
                      initial={false}
                      animate={{ width: isOpen ? 0 : 38, opacity: isOpen ? 0 : 1, x: isOpen ? -32 : 0 }}
                      transition={{ duration: 0.3, ease }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.span>
                    <strong className="faq-text">{item.q}</strong>
                    <span className={`plus ${isOpen ? "is-open" : ""}`} aria-hidden>
                      <span />
                      <span />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-a-${i}`}
                        className="faq-a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                      >
                        <p className="t-body-sm">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
        <aside className="call-card">
          <span className="avatar-64">
            <Image src={site.avatar} alt="" width={64} height={64} />
          </span>
          <h3 className="h-card">
            <span className="tone-muted">{faq.card.muted}</span>
            <br />
            {faq.card.strong}
          </h3>
          <p className="t-body-sm call-card-text">{faq.card.text}</p>
          <a className="btn-dark" href={site.bookingUrl} target="_blank" rel="noreferrer">
            <CalendarCheck />
            {faq.card.cta}
          </a>
        </aside>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Articles() {
  const [featured, ...rest] = journal;
  const [modal, setModal] = useState<ModalVideo>(null);
  const play = (e: React.MouseEvent, j: JournalEntry) => {
    e.preventDefault();
    setModal({ src: j.video, poster: j.image, title: j.title });
  };
  return (
    <section className="section articles" id="blog">
      <div className="container">
        <div className="articles-head">
          <RevealHeading
            className="h-section"
            parts={[
              { text: "From my journal,", tone: "muted" },
              { text: "behind the edit.", tone: "strong" },
            ]}
          />
          <Link href="/work" className="underline-link t-body">
            View All
            <span className="arrow-swap" aria-hidden>
              <ArrowUpRight />
              <ArrowUpRight />
            </span>
          </Link>
        </div>
        <Reveal>
          <CursorPill label="Play Video">
            <a href={featured.video} onClick={(e) => play(e, featured)} className="article article--featured">
              <div className="article-media">
                <Image src={featured.image} alt="" fill sizes="(min-width: 810px) 496px, 92vw" />
              </div>
              <div className="article-body">
                <h2 className="h-card">{featured.title}</h2>
                <p className="article-meta t-small">
                  <span className="t-sub">{featured.label}</span> <span>By {site.name}</span>
                </p>
                <p className="t-body-sm t-sub article-excerpt">{featured.excerpt}</p>
              </div>
            </a>
          </CursorPill>
        </Reveal>
        <div className="articles-row">
          {rest.map((j, i) => (
            <Reveal key={j.video} delay={i * 0.08}>
              <CursorPill label="Play Video">
                <a href={j.video} onClick={(e) => play(e, j)} className="article">
                  <div className="article-media article-media--wide">
                    <Image src={j.image} alt="" fill sizes="(min-width: 810px) 490px, 92vw" />
                  </div>
                  <div className="article-body">
                    <h3 className="h-article">{j.title}</h3>
                    <p className="article-meta t-small">
                      <span className="t-sub">{j.label}</span> <span>By {site.name}</span>
                    </p>
                  </div>
                </a>
              </CursorPill>
            </Reveal>
          ))}
        </div>
      </div>
      <VideoModal video={modal} onClose={() => setModal(null)} />
    </section>
  );
}

/* ------------------------------------------------------------------ */

function WordCycle({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, [words.length]);
  return (
    <span className="word-cycle">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[i]}
          initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/** Scales a single line of text to exactly fill its container's width. */
function FitText({ text }: { text: string }) {
  const box = useRef<HTMLDivElement>(null);
  const span = useRef<HTMLSpanElement>(null);
  const [size, setSize] = useState(240);
  useLayoutEffect(() => {
    const fit = () => {
      if (!box.current || !span.current) return;
      span.current.style.fontSize = "100px";
      const w = span.current.getBoundingClientRect().width;
      setSize((box.current.clientWidth / w) * 100);
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (box.current) ro.observe(box.current);
    document.fonts?.ready.then(fit);
    return () => ro.disconnect();
  }, [text]);
  return (
    <div className="fit-text" ref={box} aria-hidden style={{ ["--fit-h" as string]: `${size * 0.74}px` }}>
      <span ref={span} style={{ fontSize: size }}>
        {text}
      </span>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <h2 className="footer-heading">
          <span className="footer-top">
            {footer.lead} <WordCycle words={footer.cycle} />
          </span>
          <span className="tone-muted">{footer.rest}</span>
        </h2>
        <div className="footer-cols">
          <div>
            <p className="footer-label">{footer.emailLabel}</p>
            <a className="footer-big-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div>
            <p className="footer-label">{footer.callLabel}</p>
            <a className="footer-big-link" href={site.bookingUrl} target="_blank" rel="noreferrer">
              {footer.callText}
            </a>
          </div>
          <div>
            <p className="footer-label">{footer.socialLabel}</p>
            <Socials variant="solid" />
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            <p className="footer-label footer-label--sm">{footer.menuLabel}</p>
            <div className="footer-links footer-links--grid">
              {nav.map((n) => (
                <Link key={n.href} href={n.href}>
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="footer-label footer-label--sm">{footer.legalLabel}</p>
            <div className="footer-links">
              {footer.legal.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="footer-copy">
            <p>{footer.credit}</p>
            <p>
              &copy; {site.year} {site.name}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <FitText text={site.brand} />
      </div>
    </footer>
  );
}
