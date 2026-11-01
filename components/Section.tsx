export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <div className="mt-3 h-1 w-12 rounded bg-gradient-to-r from-accent to-accent2" />
      </div>
      {children}
    </section>
  );
}
