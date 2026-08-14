import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  /** Small mono label above the title, e.g. "02 · Skills". */
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 flex max-w-2xl flex-col gap-3 sm:mb-16",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </Reveal>
  );
}
