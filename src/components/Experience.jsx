
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Experience({ experience = [] }) {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-5 py-16 md:px-8"
    >
      <SectionTitle
        eyebrow="Professional Journey"
        title="Experience"
        subtitle="Applying data engineering, business automation, and analytics to real-world workflows."
      />

      <div className="space-y-6">
        {experience.map((item, idx) => (
          <motion.article
            key={`${item.company}-${item.title}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
              <div>
                {item.type && (
                  <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                    {item.type}
                  </span>
                )}

                <h3 className="mt-4 text-xl font-semibold md:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-base font-medium text-primary">
                  {item.company}
                </p>

                {item.location && (
                  <p className="mt-1 text-sm text-muted">
                    {item.location}
                  </p>
                )}
              </div>

              <p className="shrink-0 text-sm text-muted md:text-right">
                {item.period}
              </p>
            </div>

            <p className="mt-6 text-sm leading-7 text-muted md:text-base">
              {item.summary}
            </p>

            {item.responsibilities?.length > 0 && (
              <div className="mt-7">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                  Key Contributions
                </h4>

                <ul className="space-y-3">
                  {item.responsibilities.map((responsibility, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm leading-6 text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.skills?.length > 0 && (
              <div className="mt-7">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">
                  Technologies & Skills
                </h4>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-bg px-3 py-1.5 text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
