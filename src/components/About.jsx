import SectionTitle from "./SectionTitle";

export default function About({ about }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <SectionTitle
        eyebrow="About Me"
        title="AI + Engineering Mindset"
        subtitle="I build useful products, not just prototypes."
      />
      <div className="rounded-2xl border border-border bg-card p-7 shadow-glass">
        <p className="leading-relaxed text-muted md:text-lg">{about}</p>
      </div>
    </section>
  );
}
