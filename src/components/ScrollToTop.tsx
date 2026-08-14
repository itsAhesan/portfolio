"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

/** Floating button that appears after scrolling down and returns to the top. */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
          }
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full border border-line bg-surface/80 text-muted shadow-[var(--card-shadow)] backdrop-blur transition-colors hover:border-accent/50 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          <ArrowUp className="size-4" aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
