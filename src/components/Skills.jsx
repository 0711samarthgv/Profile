import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Skills({ skills }) {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <SectionTitle
        eyebrow="Skills"
        title="Technical Depth Across AI and Full Stack"
        subtitle="A practical toolkit to ship intelligent, end-to-end products."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="mb-4 text-lg font-semibold">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
