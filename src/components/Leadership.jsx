
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Leadership({ leadership = [] }) {
  return (
    <section
      id="leadership"
      className="mx-auto max-w-6xl px-5 py-16 md:px-8"
    >
      <SectionTitle
        eyebrow="Campus & Community"
        title="Leadership & Activities"
        subtitle="Developing teamwork, communication, coordination, and community engagement beyond technical projects."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {leadership.map((item, idx) => (
          <motion.article
            key={`${item.organization}-${item.title}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 md:p-7"
          >
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div>
                <p className="text-sm text-primary">
                  {item.organization}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {item.title}
                </h3>
              </div>

              <span className="self-start rounded-full border border-border px-3 py-1 text-xs text-muted">
                {item.period}
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-muted">
              {item.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
