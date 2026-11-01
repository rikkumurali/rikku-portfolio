import Section from "./Section";
import { profile } from "@/data/content";
import { Github, Linkedin, Mail } from "./Icons";

const btn = "flex items-center gap-2 rounded-full px-5 py-3 font-medium transition hover:-translate-y-0.5";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-3xl bg-fg p-8 text-bg md:p-12">
        <h3 className="max-w-xl text-2xl font-bold tracking-tight sm:text-3xl">Let's talk about your next frontend role.</h3>
        <p className="mt-3 max-w-xl opacity-80">{profile.availability} Based in {profile.location}.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className={`${btn} bg-bg text-fg`}><Mail /> {profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={`${btn} border border-current`}><Linkedin /> LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className={`${btn} border border-current`}><Github /> GitHub</a>
        </div>
      </div>
    </Section>
  );
}
