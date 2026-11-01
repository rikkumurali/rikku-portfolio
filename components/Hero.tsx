import { profile, highlights } from "@/data/content";
import { Github, Linkedin, Mail } from "./Icons";

const bars = [92, 78, 64, 51, 38];
const chips = [
  { t: "React.js", c: "-left-3 top-16" },
  { t: "Redux Toolkit", c: "-right-2 top-1/2" },
  { t: "Tailwind CSS", c: "left-8 -bottom-4" },
];
const social = "grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-muted transition hover:-translate-y-0.5 hover:text-accent";

export default function Hero() {
  return (
    <div id="top" className="glow">
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-14 md:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="rise inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-sm text-muted">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Available immediately
            </span>
            <h1 className="rise2 mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              <span className="block text-2xl font-medium text-muted sm:text-3xl">Hi, I'm</span>
              <span className="grad-text">{profile.name}</span>
            </h1>
            <p className="rise2 mt-4 text-xl font-semibold">{profile.title}</p>
            <p className="rise3 mt-4 max-w-xl text-lg leading-relaxed text-muted">{profile.positioning}</p>
            <div className="rise3 mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="rounded-full bg-accent px-6 py-3 font-medium text-onaccent shadow-lg transition hover:-translate-y-0.5">View projects</a>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3 font-medium transition hover:-translate-y-0.5 hover:text-accent"><Mail /> Email me</a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={social}><Github /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={social}><Linkedin /></a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
            <div className="float rounded-2xl border border-line bg-card p-5 shadow-2xl">
              <div className="mb-5 flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-line" /><span className="h-3 w-3 rounded-full bg-line" /><span className="h-3 w-3 rounded-full bg-line" />
                <span className="ml-3 h-3 w-28 rounded bg-tint" />
              </div>
              <div className="space-y-4">
                {bars.map((w, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="h-8 w-8 shrink-0 rounded-full bg-tint" />
                    <div className="h-3 flex-1 rounded-full bg-tint">
                      <div className="bar h-3 rounded-full bg-gradient-to-r from-accent to-accent2" style={{ width: `${w}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {chips.map((c) => (
              <span key={c.t} className={`absolute ${c.c} rounded-full border border-line bg-card px-3 py-1.5 text-sm font-medium shadow-lg`}>{c.t}</span>
            ))}
          </div>
        </div>
        <dl className="mt-16 grid gap-4 sm:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.value} className="rounded-2xl border border-line bg-card p-5">
              <dt className="text-3xl font-extrabold tracking-tight grad-text">{h.value}</dt>
              <dd className="mt-1 text-sm text-muted">{h.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
