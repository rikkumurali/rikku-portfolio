import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { profile } from "@/data/content";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="mx-auto max-w-6xl px-6">
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
