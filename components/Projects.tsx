import Section from "./Section";
import { Check } from "./Icons";
import { projects, type Project } from "@/data/content";

function Card({ p }: { p: Project }) {
  return (
    <article className={`flex flex-col rounded-2xl border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${p.featured ? "border-accent md:col-span-2 md:p-8" : "border-line"}`}>
      {p.featured && <span className="mb-3 w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-onaccent">Featured project</span>}
      <h3 className={`font-bold tracking-tight ${p.featured ? "text-2xl" : "text-xl"}`}>{p.name}</h3>
      <p className="mt-2 text-muted">{p.summary}</p>
      <ul className="mt-4 space-y-2">
        {p.contribution.map((c) => (
          <li key={c} className="flex gap-2.5"><span className="mt-1 text-accent"><Check /></span><span>{c}</span></li>
        ))}
      </ul>
      {p.outcome && <p className="mt-4 rounded-xl bg-tint p-3 text-sm font-medium">{p.outcome}</p>}
      <ul className="mt-5 flex flex-wrap gap-2 pt-1">
        {p.stack.map((s) => (
          <li key={s} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">{s}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => <Card key={p.name} p={p} />)}
      </div>
    </Section>
  );
}
