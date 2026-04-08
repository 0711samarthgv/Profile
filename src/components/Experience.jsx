import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Experience({ experience }) {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <SectionTitle
        eyebrow="Experience & Leadership"
        title="Leadership Beyond Code"
        subtitle="Building teams, ownership, and execution discipline."
      />
      <div className="space-y-4">
        {experience.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted">{item.period}</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
