"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/**
 * Subtle radial glow that trails the mouse cursor. Renders nothing until the
 * first fine-pointer move, and stays off entirely for touch/coarse pointers
 * or when the user prefers reduced motion.
 */
export default function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const seenPointer = useRef(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { damping: 30, stiffness: 200 });
  const sy = useSpring(y, { damping: 30, stiffness: 200 });

  useEffect(() => {
    if (reduceMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    function onPointerMove(e: PointerEvent) {
      if (e.pointerType === "touch") return;
      if (!seenPointer.current) {
        seenPointer.current = true;
        x.jump(e.clientX);
        y.jump(e.clientY);
        setActive(true);
      } else {
        x.set(e.clientX);
        y.set(e.clientY);
      }
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [reduceMotion, x, y]);

  if (reduceMotion || !active) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[1] size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      style={{
        left: sx,
        top: sy,
        opacity: 0.5,
        background: "radial-gradient(circle, var(--glow) 0%, transparent 65%)",
      }}
    />
  );
}
