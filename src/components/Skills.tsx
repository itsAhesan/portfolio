import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow="02 · Skills"
          title="Technical Skills"
          description="The tools I use to design, build and ship backend systems."
        />
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.05} className="h-full">
              <div className="card group h-full p-5 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-line-strong">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <category.icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold">{category.label}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={cn(
                        skill.highlight
                          ? "chip-accent"
                          : "chip hover:border-accent/50 hover:text-accent",
                      )}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
