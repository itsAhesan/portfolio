import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="container-site">
        <SectionHeading eyebrow="07 · Education" title="Education" />

        <div className="grid max-w-3xl gap-5 sm:grid-cols-2">
          {education.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 0.08} className="h-full">
              <div className="card flex h-full flex-col gap-2 p-6">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap className="size-5" aria-hidden />
                </span>
                <h3 className="mt-2 text-base font-semibold">{entry.degree}</h3>
                <p className="text-sm text-muted">{entry.institution}</p>
                <div className="mt-auto flex items-center gap-3 pt-3 text-xs">
                  <span className="font-mono text-subtle">{entry.period}</span>
                  <span className="chip-accent">{entry.score}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <h3 className="text-sm font-semibold text-foreground">Languages</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.languages.map((language) => (
              <span key={language.name} className="chip">
                {language.name} — {language.level}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
