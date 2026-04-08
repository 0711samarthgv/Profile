import { useEffect } from "react";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import CursorSpotlight from "./components/CursorSpotlight";
import Experience from "./components/Experience";
import GitHubStats from "./components/GitHubStats";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollProgress from "./components/ScrollProgress";
import SectionReveal from "./components/SectionReveal";
import Skills from "./components/Skills";
import { useTheme } from "./hooks/useTheme";
import portfolioData from "./data/portfolioData.json";

function App() {
  const { theme, toggleTheme } = useTheme();
  const { seo, personal, skills, projects, experience, achievements } = portfolioData;

  useEffect(() => {
    document.title = seo.title;
    const desc = document.querySelector("meta[name='description']");
    if (desc) {
      desc.setAttribute("content", seo.description);
    }
  }, [seo.description, seo.title]);

  return (
    <div className="min-h-screen app-grid-bg">
      <ScrollProgress />
      <CursorSpotlight />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <SectionReveal>
          <Hero personal={personal} />
        </SectionReveal>
        <GitHubStats username={personal.githubUsername} />
        <SectionReveal>
          <About about={personal.about} />
        </SectionReveal>
        <SectionReveal>
          <Skills skills={skills} />
        </SectionReveal>
        <SectionReveal>
          <Projects projects={projects} />
        </SectionReveal>
        <SectionReveal>
          <Experience experience={experience} />
        </SectionReveal>
        <SectionReveal>
          <Achievements achievements={achievements} />
        </SectionReveal>
        <SectionReveal>
          <Contact personal={personal} />
        </SectionReveal>
      </main>
      <footer className="mx-auto max-w-6xl px-5 py-8 text-center text-xs text-muted md:px-8">
        Designed and developed by {personal.name}
      </footer>
    </div>
  );
}

export default App;
