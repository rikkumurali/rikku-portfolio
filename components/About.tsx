import Section from "./Section";
import { about, education, certifications, languages } from "@/data/content";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-4 text-lg leading-relaxed text-muted lg:col-span-3">
          {about.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div className="space-y-6 rounded-2xl border border-line bg-card p-6 lg:col-span-2">
          {education.map((e) => (
            <div key={e.title}>
              <h3 className="font-semibold">{e.title}</h3>
              <p className="text-sm text-muted">{e.place}, {e.period}</p>
            </div>
          ))}
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.title}><span className="font-medium">{c.title}</span><span className="block text-sm text-muted">{c.issuer}</span></li>
            ))}
          </ul>
          <p className="text-sm text-muted">Languages: {languages.join(", ")}</p>
        </div>
      </div>
    </Section>
  );
}
