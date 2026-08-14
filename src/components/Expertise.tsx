"use client";

import { Fragment, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import {
  capabilities,
  expertisePipeline,
  type PipelineStage,
} from "@/data/architecture";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const stageButtonBase =
  "flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";

function StageButton({
  stage,
  isActive,
  onActivate,
  className,
}: {
  stage: PipelineStage;
  isActive: boolean;
  onActivate: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      aria-pressed={isActive}
      className={cn(
        stageButtonBase,
        isActive
          ? "border-accent/60 bg-accent/10 text-accent"
          : "border-line bg-surface text-muted hover:border-line-strong hover:text-foreground",
        className,
      )}
    >
      <stage.icon className="size-4" aria-hidden />
      {stage.label}
    </button>
  );
}

export default function Expertise() {
  const [active, setActive] = useState(expertisePipeline[1].id);
  const reduceMotion = useReducedMotion();

  const activeStage =
    expertisePipeline.find((stage) => stage.id === active) ??
    expertisePipeline[1];

  return (
    <section id="expertise" className="section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow="05 · Expertise"
          title="Engineering Expertise"
          description="The backend stack I work in every day — hover, focus or tap any stage to see how I use it."
        />

        {/* Pipeline — desktop/tablet row */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-y-3">
          {expertisePipeline.map((stage, i) => (
            <Fragment key={stage.id}>
              {i > 0 ? (
                <ArrowRight
                  className="mx-2 size-4 shrink-0 text-subtle"
                  aria-hidden
                />
              ) : null}
              <StageButton
                stage={stage}
                isActive={active === stage.id}
                onActivate={() => setActive(stage.id)}
              />
            </Fragment>
          ))}
        </div>

        {/* Pipeline — mobile stack */}
        <div className="md:hidden flex flex-col items-stretch">
          {expertisePipeline.map((stage, i) => (
            <Fragment key={stage.id}>
              {i > 0 ? (
                <ArrowDown
                  className="mx-auto my-1.5 size-4 text-subtle"
                  aria-hidden
                />
              ) : null}
              <StageButton
                stage={stage}
                isActive={active === stage.id}
                onActivate={() => setActive(stage.id)}
              />
            </Fragment>
          ))}
        </div>

        {/* Detail panel */}
        <div
          className="card relative mx-auto mt-8 min-h-28 max-w-2xl p-5 sm:p-6"
          aria-live="polite"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex items-start gap-4"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <activeStage.icon className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-base font-semibold">{activeStage.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {activeStage.detail}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Capabilities */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {capabilities.map((capability, i) => (
            <Reveal key={capability.id} delay={i * 0.04} className="h-full">
              <div className="card group h-full p-4 transition-colors hover:border-accent/40">
                <capability.icon className="size-5 text-accent" aria-hidden />
                <h3 className="mt-2.5 text-sm font-semibold">
                  {capability.label}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-subtle">
                  {capability.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
