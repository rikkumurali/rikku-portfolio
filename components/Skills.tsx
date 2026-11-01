import Section from "./Section";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <div key={g.group} className="rounded-2xl border border-line bg-card p-5 transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="font-semibold">{g.group}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="rounded-md bg-tint px-2.5 py-1 text-sm">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
