
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  CalendarDays
} from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Education({ education = [] }) {
  return (
    <section
      id="education"
      className="mx-auto max-w-6xl px-5 py-16 md:px-8"
    >
      <SectionTitle
        eyebrow="Academic Background"
        title="Education"
        subtitle="Building a strong foundation in computer science, artificial intelligence, and machine learning."
      />

      <div className="space-y-5">
        {education.map((item, idx) => (
          <motion.article
            key={`${item.institution}-${item.degree}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: idx * 0.08
            }}
            className="rounded-2xl border border-border bg-card p-6 shadow-glass md:p-8"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <GraduationCap
                  size={24}
                  aria-hidden="true"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-xl font-semibold md:text-2xl">
                      {item.degree}
                    </h3>

                    <p className="mt-2 font-medium text-primary">
                      {item.field}
                    </p>
                  </div>

                  <span className="inline-flex w-fit shrink-0 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                    {item.period}
                  </span>
                </div>

                <p className="mt-4 text-base font-semibold">
                  {item.institution}
                </p>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                  {item.location && (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={15} aria-hidden="true" />
                      {item.location}
                    </span>
                  )}

                  {item.status && (
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={15} aria-hidden="true" />
                      {item.status}
                    </span>
                  )}
                </div>

                {item.grade && (
                  <div className="mt-5 inline-flex rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-sm font-semibold">
                    {item.grade}
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
