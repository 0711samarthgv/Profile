
import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero({ personal = {} }) {
  const roles = [
    "AI/ML Engineer",
    "Full Stack Developer",
    "Problem Solver",
    "Software Builder"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 1800);

    return () => clearInterval(timer);
  }, [roles.length]);

  const githubUrl =
    personal?.links?.github ||
    "https://github.com/0711samarthgv/";

  const linkedinUrl =
    personal?.links?.linkedin ||
    "https://www.linkedin.com/in/samarth-gv-shetty/";

  const resumeUrl =
    personal?.links?.resume ||
    "/Samarth_GV_Resume_AIML.pdf";

  return (
    <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl border border-border bg-card/70 p-8 shadow-glass backdrop-blur md:p-12"
      >
           <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            TURNING IDEAS INTO INTELLIGENT SOLUTIONS
          </p>

        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
          {personal?.name || "Samarth G V"}
        </h1>

        <p className="mt-4 text-lg font-medium text-muted md:text-2xl">
          {personal?.role ||
            "AI/ML Engineer | Data Engineer | Software Developer"}
        </p>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
          {personal?.tagline ||
            "Building AI-powered applications, reliable data pipelines, and automation solutions to solve real-world problems."}
        </p>

        <p className="mt-6 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          {roles[index]}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <motion.a
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={16} />
            GitHub
          </motion.a>

          <motion.a
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:border-primary"
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Linkedin size={16} />
            LinkedIn
          </motion.a>

          <motion.a
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:border-primary"
            href={resumeUrl}
            download
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={16} />
            Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
