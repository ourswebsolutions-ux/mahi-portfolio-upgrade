"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useState, type ReactNode, type PointerEvent } from "react";

/**
 * Wraps a card and shows a small frosted label that trails the pointer
 * ("View Project" / "Play Video"), like the reference's custom cursor.
 */
export default function CursorPill({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  const [active, setActive] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 });

  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
    if (!active) {
      sx.jump(e.clientX - r.left);
      sy.jump(e.clientY - r.top);
      setActive(true);
    }
  };

  return (
    <div
      className={`cursor-host ${className ?? ""}`}
      onPointerMove={move}
      onPointerLeave={() => setActive(false)}
    >
      {children}
      <AnimatePresence>
        {active && (
          <motion.span
            className="cursor-pill"
            aria-hidden
            style={{ x: sx, y: sy }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
