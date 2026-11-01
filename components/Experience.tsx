import Section from "./Section";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative ml-2 space-y-8 border-l border-line">
        {experience.map((e) => (
          <li key={e.company} className="relative pl-8">
            <span className="absolute -left-[7px] top-7 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-bg" />
            <div className="rounded-2xl border border-line bg-card p-6 transition hover:shadow-lg">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold tracking-tight">{e.role}</h3>
                <span className="rounded-full bg-tint px-3 py-1 text-xs font-semibold text-accent">{e.period}</span>
              </div>
              <p className="mt-1 text-muted">{e.company}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 marker:text-accent">
                {e.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
