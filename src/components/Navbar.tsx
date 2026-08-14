"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeToggle from "@/components/ThemeToggle";
import {
  cn,
  lockBodyScroll,
  navItems,
  sectionIds,
  unlockBodyScroll,
  type SectionId,
} from "@/lib/utils";
import { profile } from "@/data/profile";

const iconButtonClasses =
  "inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface/60 text-muted transition-colors hover:border-accent/60 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";

/** Fixed site header: scroll progress bar, brand, section nav, theme toggle, resume CTA. */
export default function Navbar() {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  /* Glass treatment once the page is scrolled. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Track which section occupies the middle band of the viewport. */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  /* While the mobile menu is open: close on Escape (returning focus to the
     toggle), close if the viewport grows past the md breakpoint (where the
     menu no longer exists), and lock body scroll. */
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      // defaultPrevented means the project modal already claimed this Escape.
      if (event.key !== "Escape" || event.defaultPrevented) return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    const mdViewport = window.matchMedia("(min-width: 48rem)");
    const onViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    mdViewport.addEventListener("change", onViewportChange);
    lockBodyScroll();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      mdViewport.removeEventListener("change", onViewportChange);
      unlockBodyScroll();
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <ScrollProgress />
      <motion.header
        initial={reduceMotion ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
          (scrolled || menuOpen) && "glass",
        )}
      >
        <div className="container-site flex h-16 items-center justify-between">
          <a
            href="#home"
            aria-label={`${profile.name} — home`}
            className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            <span
              aria-hidden
              className="inline-flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 font-mono text-sm text-white"
            >
              AC
            </span>
            <span className="hidden font-medium text-foreground sm:inline">
              {profile.name}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "true" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
                  activeSection === item.id
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={profile.resumePath}
              download={profile.resumeFileName}
              className="btn-primary btn-md hidden sm:inline-flex"
            >
              <Download className="size-4" aria-hidden />
              Resume
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              className={cn(iconButtonClasses, "md:hidden")}
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <X className="size-5" aria-hidden />
              ) : (
                <Menu className="size-5" aria-hidden />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.nav
              id="mobile-nav"
              aria-label="Mobile"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-x-0 top-16 border-b border-line bg-background px-5 py-4 md:hidden"
            >
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    aria-current={activeSection === item.id ? "true" : undefined}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-base transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
                      activeSection === item.id
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="mt-3 flex">
                <a
                  href={profile.resumePath}
                  download={profile.resumeFileName}
                  onClick={closeMenu}
                  className="btn-primary btn-md w-full justify-center"
                >
                  <Download className="size-4" aria-hidden />
                  Resume
                </a>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
