import SectionTitle from "./SectionTitle";

export default function Achievements({ achievements }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <SectionTitle
        eyebrow="Achievements"
        title="Competitive and Technical Recognition"
        subtitle="Signals of execution speed, problem-solving ability, and consistency."
      />
      <div className="rounded-2xl border border-border bg-card p-6">
        <ul className="list-disc space-y-3 pl-5 text-sm text-muted md:text-base">
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
