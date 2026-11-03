"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { site } from "@/content/site";
import { Calendar, Mail } from "./icons";

/** Floating "Speak to me" bar that slides up once the hero is scrolled past. */
export default function Dock() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const hero = document.querySelector<HTMLElement>(".hero");
    setShow(y > (hero ? hero.offsetHeight * 0.4 : 280));
  });

  return (
    <motion.div
      className="dock"
      initial={false}
      animate={{ y: show ? 0 : 100, opacity: show ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 32 }}
      style={{ pointerEvents: show ? "auto" : "none" }}
      aria-hidden={!show}
    >
      <div className="dock-text">
        <p className="t-label">Speak to me</p>
        <p className="t-small t-sub">Email or book a call</p>
      </div>
      <div className="dock-actions">
        <a className="dock-btn dock-btn--dark" href={`mailto:${site.email}`} tabIndex={show ? 0 : -1}>
          <Mail style={{ ["--icon-cut" as string]: "#000" }} />
          <span className="dock-label">Contact</span>
        </a>
        <a
          className="dock-btn dock-btn--light"
          href={site.bookingUrl}
          target="_blank"
          rel="noreferrer"
          tabIndex={show ? 0 : -1}
        >
          <Calendar />
          <span className="dock-label">Book a call</span>
        </a>
      </div>
    </motion.div>
  );
}
