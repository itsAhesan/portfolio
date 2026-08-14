"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Seconds to wait before animating (use for stagger between siblings). */
  delay?: number;
  /** Initial vertical offset in px. */
  y?: number;
  className?: string;
}

/** Fade-up wrapper that animates once when scrolled into view. */
export default function Reveal({ children, delay = 0, y = 24, className }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.65, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
