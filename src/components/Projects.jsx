
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";
import SectionTitle from "./SectionTitle";

export default function Projects({ projects = [] }) {
  const [active, setActive] = useState("All");

  const filters = [
    "All",
    ...new Set(projects.map((project) => project.category))
  ];

  const visibleProjects = useMemo(() => {
    if (active === "All") return projects;

    return projects.filter(
      (project) => project.category === active
    );
  }, [active, projects]);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-5 py-16 md:px-8"
    >
      <SectionTitle
        eyebrow="Projects"
        title="Flagship Work"
        subtitle="Real systems across machine learning, data, and full stack product engineering."
      />

      <div className="mb-7 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              active === filter
                ? "bg-primary text-white"
                : "border border-border bg-card text-muted hover:text-text"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-glass"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <span className="shrink-0 rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary">
                  {project.category}
                </span>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              {/* Project images */}
              {(project.dashboardImage ||
                project.architectureImage) && (
                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.dashboardImage && (
                    <div className="min-w-0">
                      <p className="mb-2 text-sm font-semibold">
                        Dashboard Preview
                      </p>

                      <a
                        href={project.dashboardImage}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open dashboard image in a new tab"
                      >
                        <img
                          src={project.dashboardImage}
                          alt={`${project.title} dashboard`}
                          loading="lazy"
                          className="h-48 w-full rounded-xl border border-border object-cover transition hover:opacity-90"
                          onError={(event) => {
                            console.error(
                              "Dashboard image failed to load:",
                              event.currentTarget.src
                            );
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      </a>
                    </div>
                  )}

                  {project.architectureImage && (
                    <div className="min-w-0">
                      <p className="mb-2 text-sm font-semibold">
                        System Architecture
                      </p>

                      <a
                        href={project.architectureImage}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open architecture image in a new tab"
                      >
                        <img
                          src={project.architectureImage}
                          alt={`${project.title} architecture`}
                          loading="lazy"
                          className="h-48 w-full rounded-xl border border-border bg-bg object-contain transition hover:opacity-90"
                          onError={(event) => {
                            console.error(
                              "Architecture image failed to load:",
                              event.currentTarget.src
                            );
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      </a>
                    </div>
                  )}
                </div>
              )}

              <p className="mb-3 text-sm font-semibold">
                Key Features
              </p>

              <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-muted">
                {(project.features || []).map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <p className="mb-2 text-sm font-semibold">
                Tech Stack
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {(project.stack || []).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-bg px-2.5 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.impact && (
                <p className="mb-4 text-sm text-primary">
                  {project.impact}
                </p>
              )}

              <div className="flex flex-wrap gap-4 text-sm font-semibold">
                {project.github &&
                  project.github !== "https://github.com/" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1"
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                  )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
