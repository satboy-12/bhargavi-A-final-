import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Github, Eye } from "lucide-react";
import { PORTFOLIO_DATA, ProjectItem } from "../data/portfolio";
import { ProjectCaseStudy } from "./ProjectCaseStudy";

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectItem | null>(null);

  const filterCategories = [
    { label: "ALL", filter: "ALL" },
    { label: "WEB APPS", filter: "Web" },
    { label: "MOBILE ERP", filter: "Android" },
    { label: "AUTOMATION", filter: "Automation" },
  ];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (selectedFilter === "ALL") return true;
    if (selectedFilter === "Web") return project.category.includes("Web") || project.category.includes("Frontend");
    if (selectedFilter === "Android") return project.category.includes("Android");
    if (selectedFilter === "Automation") return project.category.includes("Automation");
    return true;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 border-b border-[#BC96E6]/25 bg-[#210B2C]">
      <div className="w-full px-[4vw] sm:px-[5vw]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#BC96E6]/25"
        >
          <div>
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#D9A0C8] uppercase font-bold mb-2">
              <span>02</span>
              <span className="text-[#F2C6A0]">/</span>
              <span>PROJECTS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#FFFFFF] uppercase tracking-tight">
              FEATURED WORK
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono-tech text-xs text-[#FFFFFF]/70 uppercase mr-2 hidden sm:inline">
              FILTER:
            </span>
            {filterCategories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setSelectedFilter(cat.filter)}
                className={`px-3.5 py-1.5 font-mono-tech text-xs uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                  selectedFilter === cat.filter
                    ? "bg-[#D9A0C8] text-[#210B2C] font-bold shadow-md shadow-[#D9A0C8]/20"
                    : "bg-[#210B2C] text-[#FFFFFF] hover:text-[#D9A0C8] border border-[#BC96E6]/30 hover:border-[#D9A0C8]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Technical Sub-bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="py-3 border-b border-[#BC96E6]/25 flex items-center justify-between font-mono-tech text-[11px] text-[#FFFFFF]/70"
        >
          <span>INDEXED PROJECTS ({filteredProjects.length})</span>
          <span className="hidden sm:inline">CORE DISCIPLINES: REACT • TYPESCRIPT • ANDROID ERP • APPS SCRIPT</span>
        </motion.div>

        {/* Project Editorial Grid */}
        <div className="divide-y divide-[#BC96E6]/25 border-b border-[#BC96E6]/25">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:bg-[#BC96E6]/5 transition-colors px-2 sm:px-4"
            >
              {/* Left Column: Index Number & Meta */}
              <div className="lg:col-span-3 flex flex-row lg:flex-col justify-between items-start">
                <div>
                  <span className="font-mono-tech text-5xl sm:text-6xl lg:text-7xl text-[#BC96E6]/25 group-hover:text-[#D9A0C8] font-bold transition-colors">
                    {project.number}
                  </span>
                  <div className="mt-3 font-mono-tech text-xs text-[#FFFFFF]/80 uppercase">
                    {project.year && (
                      <>
                        <span>{project.year}</span>
                        <span className="mx-2 text-[#BC96E6]/40">/</span>
                      </>
                    )}
                    <span className="text-[#FFFFFF] font-medium">{project.role}</span>
                  </div>
                </div>

                <div className="mt-4 hidden lg:block">
                  <span className="inline-block px-2.5 py-1 text-[10px] font-mono-tech uppercase bg-[#210B2C] border border-[#BC96E6]/30 text-[#FFFFFF]">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Middle Column: Core Project Narrative & Features */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="font-mono-tech text-xs text-[#D9A0C8] uppercase tracking-wider block mb-1 font-semibold">
                    {project.tagline}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] uppercase tracking-tight transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#FFFFFF]/85 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Key Capabilities Bullet Points */}
                <div className="space-y-2 pt-2">
                  {project.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#FFFFFF]/90">
                      <span className="text-[#F2C6A0] font-bold font-mono-tech mt-0.5">•</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 font-mono-tech text-[11px] uppercase bg-[#210B2C] border border-[#BC96E6]/30 text-[#FFFFFF] tracking-wider"
                    >
                      +{tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Actions */}
              <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end h-full gap-4 pt-2">
                <button
                  onClick={() => setActiveCaseStudy(project)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D9A0C8] hover:bg-[#D9A0C8]/90 text-[#210B2C] font-mono-tech text-xs uppercase tracking-wider font-bold transition-colors duration-150 group/btn shadow-md shadow-[#D9A0C8]/20 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>VIEW CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#210B2C] border border-[#BC96E6] hover:bg-[#BC96E6]/15 hover:border-[#D9A0C8] text-[#FFFFFF] font-mono-tech text-xs uppercase tracking-wider font-medium transition-colors duration-150"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>REPOSITORY</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Case Study Modal Component */}
      <ProjectCaseStudy
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </section>
  );
};
