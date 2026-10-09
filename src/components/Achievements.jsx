
import SectionTitle from "./SectionTitle";

export default function Achievements({ achievements = [] }) {
  return (
    <section
      id="achievements"
      className="mx-auto max-w-6xl px-5 py-16 md:px-8"
    >
      <SectionTitle
        eyebrow="Achievements"
        title="Competitive and Technical Recognition"
        subtitle="Recognition of problem-solving, initiative, and technical execution."
      />

      <div className="rounded-2xl border border-border bg-card p-6">
        <ul className="space-y-4">
          {achievements.map((item, index) => {
            // Support achievements stored as plain strings.
            if (typeof item === "string") {
              return (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm leading-6 text-muted md:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              );
            }

            // Support achievements stored as objects.
            if (item && typeof item === "object") {
              return (
                <li
                  key={item.title || index}
                  className="rounded-xl border border-border p-4"
                >
                  <div className="flex flex-col justify-between gap-2 sm:flex-row">
                    <h3 className="font-semibold">
                      {item.title || "Achievement"}
                    </h3>

                    {item.period && (
                      <span className="text-sm text-muted">
                        {item.period}
                      </span>
                    )}
                  </div>

                  {item.organization && (
                    <p className="mt-1 text-sm text-primary">
                      {item.organization}
                    </p>
                  )}

                  {item.description && (
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {item.description}
                    </p>
                  )}
                </li>
              );
            }

            return null;
          })}
        </ul>
      </div>
    </section>
  );
}
