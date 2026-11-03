"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { about, bigQuote, platforms, pricing, services, site, trusted } from "@/content/site";
import { Reveal, RevealHeading } from "./Reveal";
import Ticker from "./Ticker";
import { Caret, Check, Doc, Glyph, ServiceIcon } from "./icons";
import { Socials } from "./Socials";

export const PlaceholderAvatar = ({ size = 38, src }: { size?: number; src?: string }) => (
  <span className="placeholder-avatar" style={{ width: size, height: size }} aria-hidden>
    {src ? (
      <Image src={src} alt="" width={size} height={size} style={{ objectFit: "cover" }} />
    ) : (
      <svg viewBox="0 0 38 38" width={size} height={size}>
        <circle cx="19" cy="15" r="6.5" fill="#b8b8b8" />
        <path d="M6 36c1.5-8 6.6-12 13-12s11.5 4 13 12z" fill="#b8b8b8" />
      </svg>
    )}
  </span>
);

/* ------------------------------------------------------------------ */

export function BigQuote() {
  return (
    <section className="section big-quote">
      <div className="container">
        <Reveal className="big-quote-inner" blur={5}>
          <p className="big-quote-text">
            {bigQuote.before} <strong>{bigQuote.strong}</strong> {bigQuote.after}
          </p>
          <div className="person person--center">
            <PlaceholderAvatar src={bigQuote.avatar} />
            <div>
              <p className="t-label">{bigQuote.name}</p>
              <p className="t-small t-sub">{bigQuote.role}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="container services-inner">
        <div className="services-left">
          <RevealHeading
            className="h-section"
            parts={[
              { text: services.headingMuted, tone: "muted" },
              { text: services.headingStrong, tone: "strong" },
            ]}
          />
          <div className="toolkit">
            <p className="t-body">{services.toolsLabel}</p>
            <div className="toolkit-row">
              {services.tools.map((t, i) => (
                <Reveal key={t.name} x={-5} y={0} delay={i * 0.1} className="tool">
                  <span className="tool-tile" tabIndex={0} aria-label={t.name}>
                    {t.short}
                  </span>
                  <span className="tool-tip" role="tooltip">
                    {t.name}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <div className="services-list" role="list">
          {services.items.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05} className="service" role="listitem">
              <span className="icon-btn" aria-hidden>
                <ServiceIcon name={s.icon} />
              </span>
              <span className="service-label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function WorkHistory() {
  const [open, setOpen] = useState(false);
  return (
    <div className="history">
      <p className="t-body">{about.historyLabel}</p>
      <motion.div
        className={`history-stack ${open ? "is-open" : ""}`}
        layout
        transition={{ type: "spring", stiffness: 300, damping: 32 }}
      >
        {about.history.map((h, i) => (
          <motion.div
            key={i}
            layout
            className="history-card"
            style={{ zIndex: 3 - i }}
            initial={false}
            animate={
              open
                ? { scale: 1, y: 0, opacity: 1 }
                : { scale: 1 - i * 0.05, y: i * 10, opacity: 1 }
            }
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
          >
            <div>
              <p className="history-company">{h.company}</p>
              <p className="t-small t-sub">{h.role}</p>
            </div>
            <p className="t-small t-sub">{h.years}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.button
        layout="position"
        type="button"
        className="chip-btn"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Hide" : "Show all"}
        <motion.span animate={{ rotate: open ? 180 : 0 }} style={{ display: "inline-flex" }}>
          <Caret />
        </motion.span>
      </motion.button>
    </div>
  );
}

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <RevealHeading
          className="h-section"
          parts={[
            { text: about.headingMuted, tone: "muted" },
            { text: about.headingStrong, tone: "strong" },
          ]}
        />
        <div className="about-grid">
          <div className="about-left">
            <Reveal className="about-person">
              <div className="portrait">
                <Image src={site.portrait} alt={`Portrait of ${site.name}`} fill sizes="(min-width: 810px) 371px, 92vw" />
                <Socials variant="glass" className="portrait-socials" />
              </div>
              <p className="about-name">{site.name}</p>
              <p className="t-label t-sub">{site.role}</p>
            </Reveal>
            <WorkHistory />
          </div>
          <div className="philosophy">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08} blur={5}>
                <p>
                  <strong>{p.strong}</strong> <span className="t-sub">{p.text}</span>
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

const ChromePlay = () => (
  <svg className="chrome-play" viewBox="0 0 200 200" aria-hidden>
    <defs>
      <linearGradient id="cp-face" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f4f4f4" />
        <stop offset=".35" stopColor="#8d8d8d" />
        <stop offset=".55" stopColor="#d9d9d9" />
        <stop offset=".8" stopColor="#4a4a4a" />
        <stop offset="1" stopColor="#bdbdbd" />
      </linearGradient>
      <linearGradient id="cp-side" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#5c5c5c" />
        <stop offset="1" stopColor="#141414" />
      </linearGradient>
    </defs>
    <path d="M66 46 L156 104 Q164 110 156 116 L66 174 Q56 180 56 168 L56 52 Q56 40 66 46Z" fill="url(#cp-side)" />
    <path d="M56 34 L148 92 Q156 98 148 104 L56 162 Q46 168 46 156 L46 40 Q46 28 56 34Z" fill="url(#cp-face)" />
    <path d="M58 44 L140 96" stroke="#fff" strokeOpacity=".7" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="pricing-head">
          <RevealHeading
            className="h-section"
            parts={[
              { text: pricing.headingMuted, tone: "muted" },
              { text: pricing.headingStrong, tone: "strong" },
            ]}
          />
          <Reveal className="pricing-aside t-lead" delay={0.2}>
            <strong>{pricing.asideStrong}</strong> <span className="t-sub">{pricing.aside}</span>
          </Reveal>
        </div>

        <div className="steps">
          {pricing.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="step">
              <p className="step-title">
                <ServiceIcon name={s.icon} size={16} />
                <strong>{s.title}</strong>
              </p>
              <p className="t-sub">{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="pricing-box">
          <div className="pricing-top">
            <div className="plan-hire">
              <motion.div
                className="black-card"
                initial={{ rotate: 6, y: 20, opacity: 0 }}
                whileInView={{ rotate: 2, y: 0, opacity: 1 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <span className="glass-chip">{pricing.card.pill}</span>
                <p className="black-card-text">
                  <span className="muted-on-dark">{pricing.card.muted}</span> {pricing.card.text}
                </p>
                <ChromePlay />
              </motion.div>
              <span className="status-pill status-pill--sm">
                <span className="pulse" aria-hidden />
                <span className="t-small">{pricing.slots}</span>
              </span>
              <h3 className="h-card">{pricing.hireTitle}</h3>
              <p className="t-body-sm">{pricing.hireText}</p>
            </div>

            <div className="plan-main">
              <h3 className="h-card">{pricing.planTitle}</h3>
              <p className="t-body-sm">{pricing.planText}</p>
              <hr className="divider" />
              <p className="price">
                <span className="price-num">{pricing.price}</span>
                <span className="t-small t-sub">{pricing.per}</span>
              </p>
              <ul className="benefits">
                {pricing.benefits.map((b) => (
                  <li key={b}>
                    <Check />
                    <span className="t-label">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="t-small t-sub checkout">{pricing.checkout}</p>
            </div>
          </div>

          <div className="plan-custom">
            <div>
              <h3 className="h-card">{pricing.customTitle}</h3>
              <p className="t-body-sm plan-custom-text">
                <span className="on-dark">{pricing.customStrong}</span>
                <br />
                {pricing.customText}
              </p>
            </div>
            <a className="pill-btn pill-btn--lg" href={`mailto:${site.email}?subject=Custom%20project%20quote`}>
              <Doc />
              {pricing.customCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Trusted() {
  return (
    <div className="logo-band logo-band--trusted">
      <div className="container logo-band-inner">
        <p className="trusted-label">
          <span className="t-sub">{trusted.muted}</span> <strong>{trusted.strong}</strong>
        </p>
        <Ticker className="trusted-ticker">
          {platforms.map((p, i) => (
            <span key={p} className="ticker-item">
              <Glyph i={i + 2} />
              {p}
            </span>
          ))}
        </Ticker>
      </div>
    </div>
  );
}
