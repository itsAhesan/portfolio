"use client";

import { Fragment, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  architectureLayers,
  architectureSideNodes,
  type ArchitectureLayer,
} from "@/data/architecture";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const layerButtonBase =
  "w-full flex items-center justify-start gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";

function LayerButton({
  layer,
  isActive,
  onActivate,
  className,
}: {
  layer: ArchitectureLayer;
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
        layerButtonBase,
        isActive
          ? "border-accent/60 bg-accent/10 text-accent"
          : "border-line bg-surface text-muted hover:border-line-strong hover:text-foreground",
        className,
      )}
    >
      <layer.icon className="size-4" aria-hidden />
      {layer.label}
    </button>
  );
}

export default function Architecture() {
  const [active, setActive] = useState(architectureLayers[1].id);
  const reduceMotion = useReducedMotion();

  const activeNode =
    [...architectureLayers, ...architectureSideNodes].find(
      (node) => node.id === active,
    ) ?? architectureLayers[1];

  return (
    <section id="architecture" className="section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow="06 · Architecture"
          title="How I Structure a Backend"
          description="A typical request path through the services I build — hover or focus each layer."
        />

        <div className="lg:grid lg:grid-cols-[minmax(0,26rem)_1fr] gap-10 items-start">
          {/* Diagram */}
          <Reveal className="mx-auto flex max-w-sm flex-col items-stretch lg:mx-0">
            {architectureLayers.map((layer, i) => (
              <Fragment key={layer.id}>
                {i > 0 ? (
                  <span className="mx-auto flex h-6 items-center" aria-hidden>
                    <svg width="2" height="24">
                      <line
                        x1="1"
                        y1="0"
                        x2="1"
                        y2="24"
                        stroke="var(--line-strong)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        className="animate-dash-flow"
                      />
                    </svg>
                  </span>
                ) : null}
                <LayerButton
                  layer={layer}
                  isActive={active === layer.id}
                  onActivate={() => setActive(layer.id)}
                />
              </Fragment>
            ))}

            <div className="mt-6 border-t border-line pt-5">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-subtle">
                Alongside the stack
              </p>
              <div className="flex gap-3">
                {architectureSideNodes.map((node) => (
                  <LayerButton
                    key={node.id}
                    layer={node}
                    isActive={active === node.id}
                    onActivate={() => setActive(node.id)}
                    className="flex-1 border-dashed"
                  />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Explanation panel */}
          <div className="mt-10 lg:sticky lg:top-24 lg:mt-0">
            <div className="card min-h-36 p-6" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex items-start gap-4"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <activeNode.icon className="size-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {activeNode.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {activeNode.detail}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="mt-5 border-t border-line pt-4">
                <p className="font-mono text-xs text-subtle">
                  Client → Controller → Service → Repository → MySQL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
