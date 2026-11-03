"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { categories, hero, site } from "@/content/site";
import { RevealHeading } from "./Reveal";
import Ticker from "./Ticker";
import { Glyph, Star } from "./icons";

const ease = [0.44, 0, 0.56, 1] as const;

export const Proof = () => (
  <div className="proof">
    <div className="proof-avatars">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className="proof-avatar">
          <Image src={`/media/frame-${n}.jpg`} alt="" width={32} height={32} />
        </span>
      ))}
    </div>
    <div className="proof-text">
      <span className="proof-stars" aria-hidden>
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} />
        ))}
      </span>
      <span className="t-label t-sub">{hero.proof}</span>
    </div>
  </div>
);

const Hero = forwardRef<HTMLElement>(function Hero(_, ref) {
  return (
    <section className="hero" ref={ref}>
      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.div
            className="status-pill"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="pulse" aria-hidden />
            <span className="t-small">{hero.availability}</span>
          </motion.div>
          <RevealHeading
            as="h1"
            className="h-hero"
            delay={0.15}
            parts={[
              { text: hero.headingMuted, tone: "muted" },
              { text: hero.headingStrong, tone: "strong" },
            ]}
          />
          <motion.p
            className="hero-lead t-lead"
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease, delay: 0.45 }}
          >
            <strong>{hero.leadStrong}</strong> <span className="t-sub">{hero.lead}</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0.001 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.6 }}
          >
            <a className="cta" href={site.bookingUrl} target="_blank" rel="noreferrer">
              <span className="cta-faces" aria-hidden>
                <span className="cta-face">
                  <Image src={site.avatar} alt="" width={28} height={28} />
                </span>
                <span className="cta-plus" />
                <span className="cta-you">You</span>
              </span>
              <span>{hero.cta}</span>
            </a>
          </motion.div>
        </div>
      </div>
      <div className="logo-band">
        <div className="container logo-band-inner">
          <Proof />
          <Ticker className="hero-ticker">
            {categories.map((c, i) => (
              <span key={c} className="ticker-item">
                <Glyph i={i} />
                {c}
              </span>
            ))}
          </Ticker>
        </div>
      </div>
    </section>
  );
});

export default Hero;
