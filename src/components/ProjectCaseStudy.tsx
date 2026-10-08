import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Github, CheckCircle } from "lucide-react";
import { ProjectItem } from "../data/portfolio";

interface ProjectCaseStudyProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#210B2C]/90 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#210B2C] border border-[#BC96E6]/40 shadow-2xl z-10 p-6 sm:p-8 md:p-10 text-[#FFFFFF]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-[#BC96E6]/25 mb-8">
            <div className="flex items-center gap-3 font-mono-tech text-xs">
              <span className="text-[#D9A0C8] font-bold">[{project.number}]</span>
              <span className="text-[#FFFFFF]/70">CASE STUDY SPECIFICATION</span>
              <span className="text-[#BC96E6]/40">/</span>
              <span className="text-[#FFFFFF] uppercase font-semibold">{project.category}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 border border-[#BC96E6]/30 bg-[#210B2C] hover:bg-[#D9A0C8] text-[#FFFFFF] hover:text-[#210B2C] transition-colors focus:outline-none cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Headline */}
          <div className="mb-8">
            <span className="font-mono-tech text-xs text-[#D9A0C8] uppercase tracking-wider block mb-2 font-bold">
              {project.tagline}
            </span>
            <h3
              id="case-study-title"
              className="font-display text-4xl sm:text-5xl md:text-6xl text-[#FFFFFF] uppercase tracking-tight leading-none mb-4"
            >
              {project.title}
            </h3>
            <p className="text-[#FFFFFF]/90 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
              {project.description}
            </p>
          </div>

          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6 border-y border-[#BC96E6]/25 mb-8 font-mono-tech text-xs">
            {project.year && (
              <div>
                <span className="text-[#FFFFFF]/60 block mb-1">YEAR</span>
                <span className="text-[#FFFFFF] font-semibold">{project.year}</span>
              </div>
            )}
            <div>
              <span className="text-[#FFFFFF]/60 block mb-1">ROLE</span>
              <span className="text-[#FFFFFF] font-semibold">{project.role}</span>
            </div>
            <div>
              <span className="text-[#FFFFFF]/60 block mb-1">CATEGORY</span>
              <span className="text-[#FFFFFF] font-semibold">{project.category}</span>
            </div>
          </div>

          {/* Key Features Breakdown */}
          <div className="mb-8">
            <h4 className="font-display text-xl text-[#FFFFFF] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#D9A0C8]" />
              ENGINEERED CAPABILITIES &amp; IMPLEMENTATION
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#210B2C] border border-[#BC96E6]/30 flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-[#F2C6A0] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#FFFFFF]/90 leading-relaxed font-normal">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-10">
            <h4 className="font-display text-xl text-[#FFFFFF] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#D9A0C8]" />
              TECHNOLOGY SPECIFICATIONS
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 font-mono-tech text-xs uppercase bg-[#210B2C] border border-[#BC96E6]/30 text-[#FFFFFF] hover:border-[#D9A0C8] hover:text-[#D9A0C8] transition-colors"
                >
                  +{tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t border-[#BC96E6]/25">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D9A0C8] hover:bg-[#D9A0C8]/90 text-[#210B2C] font-mono-tech text-xs uppercase tracking-wider font-bold transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB REPOSITORY</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-6 py-3 border border-[#BC96E6]/40 hover:bg-[#BC96E6]/15 hover:border-[#D9A0C8] bg-transparent text-[#FFFFFF] font-mono-tech text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
