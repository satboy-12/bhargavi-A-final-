import React, { useState, useEffect } from "react";
import { CinematicIntro } from "./components/CinematicIntro";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProfessionalSummary } from "./components/ProfessionalSummary";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [introFinished, setIntroFinished] = useState<boolean>(false);

  useEffect(() => {
    const sections = ["overview", "summary", "projects", "skills", "experience", "education", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#210B2C] text-[#FFFFFF] selection:bg-[#D9A0C8] selection:text-[#210B2C] flex flex-col font-sans">
      {/* Cinematic Opening Overlay */}
      {!introFinished && (
        <CinematicIntro onComplete={() => setIntroFinished(true)} />
      )}

      {/* Top Fixed Editorial Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <ProfessionalSummary />
        <Projects />
        <Skills />
        <Experience />

        {/* Education Section */}
        <section id="education" className="py-20 lg:py-28 border-b border-[#BC96E6]/30 bg-[#210B2C]">
          <div className="w-full px-[4vw] sm:px-[5vw]">
            <Education />
          </div>
        </section>

        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
