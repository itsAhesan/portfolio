"use client";

import { Fragment, useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Globe, X } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/utils";
import type { Project } from "@/data/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const open = project !== null;

  useEffect(() => {
    if (!open) return;

    const previouslyFocused =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    closeRef.current?.focus();
    lockBodyScroll();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // Claim the key so the mobile-menu handler ignores this press.
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusables = Array.from(
        panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;

      const activeEl = document.activeElement;
      if (e.shiftKey) {
        if (activeEl === first || !panel.contains(activeEl)) {
          e.preventDefault();
          last.focus();
        }
      } else if (activeEl === last || !panel.contains(activeEl)) {
        e.preventDefault();
        first.focus();
      }
    };

    // Capture phase so the dialog handles Escape before the mobile menu does,
    // regardless of which listener was registered first.
    document.addEventListener("keydown", handleKeyDown, true);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
      unlockBodyScroll();
      if (previouslyFocused?.isConnected) previouslyFocused.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {project !== null ? (
        <div className="fixed inset-0 z-[80] grid place-items-center p-4 sm:p-6">
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="card relative max-h-[85vh] w-full max-w-2xl overflow-y-auto p-6 sm:p-8"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close details"
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-line bg-surface text-muted hover:border-line-strong hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              <X className="size-4" aria-hidden />
            </button>

            <div className="flex flex-wrap gap-2 pr-10">
              <span className="chip">{project.tagline}</span>
            </div>
            <h3 id="project-modal-title" className="mt-3 text-2xl font-semibold">
              {project.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {project.description}
            </p>

            <div className="mt-6">
              <h4 className="text-sm font-semibold">Architecture</h4>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {project.architecture.map((layer, i) => (
                  <Fragment key={layer}>
                    <span className="chip-accent font-mono">{layer}</span>
                    {i < project.architecture.length - 1 ? (
                      <ArrowRight className="size-3.5 text-subtle" aria-hidden />
                    ) : null}
                  </Fragment>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold">Key Features</h4>
              <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {project.keyFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold">Technologies</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.detailTechnologies.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-md"
              >
                <GithubIcon className="size-4" />
                GitHub
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
              {project.liveDemo ? (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline btn-md"
                >
                  <Globe className="size-4" aria-hidden />
                  Live Demo
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </a>
              ) : null}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
