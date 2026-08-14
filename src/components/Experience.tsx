"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { CalendarDays, ChevronRight, MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.55"],
  });
  const railScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  return (
    <section id="experience" className="section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow="03 · Experience"
          title="Professional Experience"
          description="From full-stack internships to building a client e-commerce platform in production."
        />

        <div ref={timelineRef} className="relative max-w-3xl">
          {/* Static rail */}
          <div
            className="absolute bottom-2 left-[15px] top-2 w-px bg-line"
            aria-hidden="true"
          />
          {/* Scroll-linked progress rail */}
          <motion.div
            className="absolute bottom-2 left-[15px] top-2 w-px origin-top bg-gradient-to-b from-sky-400 to-blue-600"
            style={{ scaleY: reduceMotion ? 1 : railScale }}
            aria-hidden="true"
          />

          {experience.map((entry, i) => (
            <Reveal
              key={entry.id}
              delay={i * 0.08}
              className="relative pb-10 pl-12 last:pb-0"
            >
              {/* Timeline node */}
              <span
                className="absolute left-0 top-1.5 flex size-8 items-center justify-center"
                aria-hidden="true"
              >
                <span className="relative flex size-8 items-center justify-center rounded-full border border-line bg-surface">
                  {entry.current ? (
                    <>
                      <span className="absolute size-2.5 rounded-full bg-emerald-400/60 motion-safe:animate-ping" />
                      <span className="relative size-2.5 rounded-full bg-emerald-400" />
                    </>
                  ) : (
                    <span className="size-2.5 rounded-full bg-accent/70" />
                  )}
                </span>
              </span>

              <article
                className={cn(
                  "card p-5 transition-colors hover:border-line-strong sm:p-6",
                  entry.current &&
                    "border-accent/40 shadow-[0_0_40px_-16px_var(--glow)]",
                )}
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold">{entry.role}</h3>
                  {entry.current ? (
                    <span className="chip-accent">Current</span>
                  ) : null}
                </div>
                <p className="text-sm font-medium text-accent">
                  {entry.company}
                  {entry.companyNote ? ` · ${entry.companyNote}` : ""}
                </p>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-subtle">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-3.5" aria-hidden />
                    <span className="font-mono">{entry.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5" aria-hidden />
                    {entry.location}
                  </span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {entry.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <ChevronRight
                        className="mt-0.5 size-4 shrink-0 text-accent/70"
                        aria-hidden
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.stack.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
