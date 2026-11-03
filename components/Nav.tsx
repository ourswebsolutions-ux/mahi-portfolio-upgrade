"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent } from "react";
import { nav, site } from "@/content/site";
import { useBreakpoint } from "@/lib/useBreakpoint";
import { scrollToHash } from "@/lib/scroll";

const spring = { type: "spring", stiffness: 380, damping: 36, mass: 0.9 } as const;

function onAnchor(e: MouseEvent<HTMLAnchorElement>, href: string, after?: () => void) {
  const hash = href.startsWith("/#") ? href.slice(1) : null;
  if (hash && window.location.pathname === "/" && scrollToHash(hash)) {
    e.preventDefault();
    history.replaceState(null, "", hash);
  }
  after?.();
}

const Dots = () => (
  <span className="dots" aria-hidden>
    <span />
    <span />
    <span />
  </span>
);

export default function Nav() {
  const bp = useBreakpoint();
  const { scrollY } = useScroll();
  const [scrolledOpen, setScrolledOpen] = useState(true);
  const [hover, setHover] = useState(false);
  const [menu, setMenu] = useState(false);
  const linksRef = useRef<HTMLDivElement>(null);
  const [linksW, setLinksW] = useState(310);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (y < 10) setScrolledOpen(true);
    else if (y > prev + 2) setScrolledOpen(false);
    else if (y < prev - 2) setScrolledOpen(true);
    if (Math.abs(y - prev) > 2) setMenu(false);
  });

  useLayoutEffect(() => {
    if (linksRef.current) setLinksW(linksRef.current.scrollWidth);
  }, [bp]);

  useEffect(() => {
    if (!menu) return;
    const close = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menu]);

  const isPhone = bp === "phone";
  const open = !isPhone && (scrolledOpen || hover || menu);

  return (
    <header className="nav-wrap">
      <motion.nav
        className="nav"
        aria-label="Main"
        onMouseEnter={() => !isPhone && !scrolledOpen && setHover(true)}
        onMouseLeave={() => {
          setHover(false);
          setMenu(false);
        }}
      >
        <Link href="/" className="nav-brand" onClick={(e) => onAnchor(e, "/#top")}>
          <span className="avatar-32">
            <Image src={site.avatar} alt="" width={32} height={32} priority />
          </span>
          <span className="t-label">{site.brand}</span>
        </Link>

        <motion.div
          className="nav-right"
          initial={false}
          animate={{ width: open ? linksW : 24, marginLeft: open ? 64 : 33 }}
          transition={spring}
        >
          <div className="nav-links" ref={linksRef} aria-hidden={!open && !isPhone ? true : undefined}>
            {nav.map((item, i) => (
              <motion.span
                key={item.href}
                initial={false}
                animate={open ? { opacity: 1, filter: "blur(0px)", y: 0 } : { opacity: 0, filter: "blur(4px)", y: 4 }}
                transition={{ duration: 0.3, delay: open ? 0.05 + i * 0.05 : 0 }}
              >
                <Link
                  href={item.href}
                  className="nav-link t-label"
                  tabIndex={open ? 0 : -1}
                  onClick={(e) => onAnchor(e, item.href)}
                >
                  {item.label}
                </Link>
              </motion.span>
            ))}
            <motion.span
              initial={false}
              animate={open ? { opacity: 1, filter: "blur(0px)", y: 0 } : { opacity: 0, filter: "blur(4px)", y: 4 }}
              transition={{ duration: 0.3, delay: open ? 0.25 : 0 }}
            >
              <a className="pill-btn" href={`mailto:${site.email}`} tabIndex={open ? 0 : -1}>
                Contact
              </a>
            </motion.span>
          </div>
          <motion.button
            type="button"
            className="nav-dots"
            aria-label={isPhone ? "Open menu" : "Expand navigation"}
            aria-expanded={isPhone ? menu : open}
            initial={false}
            animate={{ opacity: open ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            style={{ pointerEvents: open ? "none" : "auto" }}
            onClick={() => setMenu((m) => !m)}
          >
            <Dots />
          </motion.button>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {isPhone && menu && (
          <motion.div
            className="nav-menu"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={spring}
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-menu-link"
                onClick={(e) => onAnchor(e, item.href, () => setMenu(false))}
              >
                {item.label}
              </Link>
            ))}
            <a className="pill-btn" href={`mailto:${site.email}`}>
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
