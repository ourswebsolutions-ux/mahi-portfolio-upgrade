"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { Fragment, type ElementType } from "react";

const ease = [0.44, 0, 0.56, 1] as const;

type Part = { text: string; tone: "muted" | "strong" };

/**
 * Heading whose words blur in one by one (opacity 0, y 10px, blur 5px → clear),
 * matching the reference's per-word appear effect.
 */
export function RevealHeading({
  parts,
  as = "h2",
  className,
  delay = 0,
  breakAfter = true,
  margin = "0px 0px -10% 0px",
}: {
  parts: Part[];
  as?: ElementType;
  className?: string;
  delay?: number;
  breakAfter?: boolean;
  margin?: string;
}) {
  const Tag = as;
  let index = 0;
  return (
    <Tag className={className}>
      {parts.map((part, pi) => (
        <Fragment key={pi}>
          <span className={part.tone === "muted" ? "tone-muted" : "tone-strong"}>
            {part.text.split(" ").map((word, wi, arr) => {
              const i = index++;
              return (
                <Fragment key={wi}>
                  <motion.span
                    className="word"
                    initial={{ opacity: 0.001, y: 10, filter: "blur(5px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin }}
                    transition={{ duration: 0.6, ease, delay: delay + i * 0.06 }}
                  >
                    {word}
                  </motion.span>
                  {wi < arr.length - 1 ? " " : null}
                </Fragment>
              );
            })}
          </span>
          {pi < parts.length - 1 ? breakAfter ? <br /> : " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}

/** Generic appear wrapper: fade + small offset when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  x = 0,
  y = 12,
  blur = 0,
  ...rest
}: HTMLMotionProps<"div"> & { delay?: number; x?: number; y?: number; blur?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y, filter: blur ? `blur(${blur}px)` : undefined }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: blur ? "blur(0px)" : undefined }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.6, ease, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
