import { profile } from "@/data/content";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur-md" style={{ backgroundColor: "color-mix(in srgb, var(--bg) 85%, transparent)" }}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3 font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent2 text-sm font-bold text-onaccent">RM</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="transition-colors hover:text-fg">{l.label}</a></li>
          ))}
        </ul>
        <a href="#contact" className="rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-85">Contact me</a>
      </nav>
    </header>
  );
}
