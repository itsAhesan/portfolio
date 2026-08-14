"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient bar at the very top of the viewport showing scroll progress. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-sky-400 to-blue-600"
      style={{ scaleX }}
    />
  );
}
