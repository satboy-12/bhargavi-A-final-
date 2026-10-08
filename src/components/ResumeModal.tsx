import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Printer,
  FileText,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Check,
  Copy,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { personal, skills, experience, projects, education, certifications } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
${personal.name}
${personal.title}
${personal.location} | ${personal.phone} | ${personal.email}
LinkedIn: ${personal.linkedin} | GitHub: ${personal.github}

PROFESSIONAL SUMMARY
${personal.summary}

TECHNICAL SKILLS
${skills.map((s) => `${s.category}: ${s.skills.join(", ")}`).join("\n")}

PROFESSIONAL EXPERIENCE
${experience
  .map(
    (exp) => `
${exp.role} | ${exp.period}
${exp.organization}, ${exp.location}
${exp.responsibilities.map((r) => `• ${r}`).join("\n")}
`
  )
  .join("\n")}

PROJECTS
${projects
  .map(
    (p) => `
${p.title}
Technologies: ${p.technologies.join(", ")}
${p.features.map((f) => `• ${f}`).join("\n")}
`
  )
  .join("\n")}

EDUCATION
${education
  .map(
    (e) => `
${e.degree} (${e.specialization}) | ${e.period}
${e.institution}, ${e.location}
`
  )
  .join("\n")}

CERTIFICATIONS & WORKSHOPS
• NxtWave CCBP 4.0 Academy: ${certifications.nxtwave.join("; ")}
• Workshops: ${certifications.workshops.join("; ")}
• Webinar: ${certifications.webinars.join("; ")}
• Industrial Exposure: ${certifications.industrialExposure.join("; ")}

AWARDS
${certifications.awards.map((a) => `• ${a}`).join("\n")}
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        {/* Backdrop dismiss */}
        <div
          className="fixed inset-0"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#1A0823] border border-[#BC96E6]/40 shadow-2xl rounded-xl overflow-hidden text-[#FFFFFF]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#BC96E6]/25 bg-[#210B2C]/90">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-[#D9A0C8]/20 text-[#D9A0C8] border border-[#D9A0C8]/30">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl text-[#FFFFFF] tracking-wide uppercase">
                  BHARGAVI A — RESUME
                </h3>
                <p className="font-mono-tech text-[11px] text-[#BC96E6]">
                  OFFICIAL CURRICULUM VITAE // VERIFIED SOURCE OF TRUTH
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-transparent border border-[#BC96E6]/40 hover:border-[#D9A0C8] hover:text-[#D9A0C8] font-mono-tech text-xs uppercase tracking-wider transition-colors cursor-pointer"
                title="Copy entire resume text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#F2C6A0]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "COPIED" : "COPY TEXT"}</span>
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#D9A0C8] hover:bg-[#D9A0C8]/90 text-[#210B2C] font-mono-tech text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>PRINT / SAVE PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded border border-[#BC96E6]/30 hover:border-[#D9A0C8] hover:text-[#D9A0C8] text-[#FFFFFF] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#180720] text-[#FFFFFF] selection:bg-[#D9A0C8] selection:text-[#210B2C] font-sans print:bg-white print:text-black">
            {/* Document Header */}
            <header className="border-b border-[#BC96E6]/30 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
              <div>
                <h1 className="font-display text-3xl sm:text-4xl text-[#FFFFFF] font-bold tracking-tight uppercase">
                  {personal.name}
                </h1>
                <p className="font-mono-tech text-sm sm:text-base text-[#D9A0C8] font-semibold uppercase tracking-wider mt-1">
                  {personal.title}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2.5 font-mono-tech text-xs text-[#FFFFFF]/80">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#F2C6A0]" />
                    {personal.location}
                  </span>
                  <span>•</span>
                  <a
                    href={`tel:${personal.phone}`}
                    className="flex items-center gap-1 hover:text-[#D9A0C8] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#F2C6A0]" />
                    {personal.phone}
                  </a>
                  <span>•</span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-1 hover:text-[#D9A0C8] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#F2C6A0]" />
                    {personal.email}
                  </a>
                </div>
              </div>

              {/* Verified Links */}
              <div className="flex flex-col sm:items-end gap-2 font-mono-tech text-xs">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#210B2C] border border-[#BC96E6]/30 text-[#D9A0C8] hover:text-[#FFFFFF] hover:border-[#D9A0C8] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>linkedin.com/in/bhargavi-anand-6ab9b7292</span>
                  <ExternalLink className="w-3 h-3 text-[#F2C6A0]" />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#210B2C] border border-[#BC96E6]/30 text-[#FFFFFF] hover:text-[#D9A0C8] hover:border-[#D9A0C8] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github.com/BhargaviAnand23</span>
                  <ExternalLink className="w-3 h-3 text-[#F2C6A0]" />
                </a>
              </div>
            </header>

            {/* 1. PROFESSIONAL SUMMARY */}
            <section className="space-y-2">
              <h2 className="font-mono-tech text-xs tracking-widest text-[#F2C6A0] uppercase font-bold border-b border-[#BC96E6]/25 pb-1">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-sm leading-relaxed text-[#FFFFFF]/90 pt-1">
                {personal.summary}
              </p>
            </section>

            {/* 2. TECHNICAL SKILLS */}
            <section className="space-y-3">
              <h2 className="font-mono-tech text-xs tracking-widest text-[#F2C6A0] uppercase font-bold border-b border-[#BC96E6]/25 pb-1">
                TECHNICAL SKILLS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {skills.map((cat) => (
                  <div
                    key={cat.category}
                    className="p-3 bg-[#210B2C]/80 border border-[#BC96E6]/20 rounded"
                  >
                    <span className="font-mono-tech text-xs font-bold text-[#D9A0C8] uppercase block mb-1">
                      {cat.category}:
                    </span>
                    <span className="text-xs text-[#FFFFFF]/85 font-mono-tech">
                      {cat.skills.join(", ")}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. PROFESSIONAL EXPERIENCE */}
            <section className="space-y-4">
              <h2 className="font-mono-tech text-xs tracking-widest text-[#F2C6A0] uppercase font-bold border-b border-[#BC96E6]/25 pb-1">
                PROFESSIONAL EXPERIENCE
              </h2>
              {experience.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-display text-lg text-[#FFFFFF] font-semibold uppercase">
                      {exp.role}
                    </h3>
                    <span className="font-mono-tech text-xs text-[#D9A0C8] font-bold">
                      {exp.period}
                    </span>
                  </div>
                  <p className="font-mono-tech text-xs text-[#F2C6A0] uppercase font-medium">
                    {exp.organization}, {exp.location}
                  </p>
                  <ul className="space-y-1.5 pt-1 pl-4 list-disc text-xs sm:text-sm text-[#FFFFFF]/90 leading-relaxed marker:text-[#D9A0C8]">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* 4. PROJECTS */}
            <section className="space-y-4">
              <h2 className="font-mono-tech text-xs tracking-widest text-[#F2C6A0] uppercase font-bold border-b border-[#BC96E6]/25 pb-1">
                PROJECTS
              </h2>
              <div className="space-y-5">
                {projects.map((proj) => (
                  <div key={proj.id} className="space-y-1.5 p-3.5 bg-[#210B2C]/60 border border-[#BC96E6]/20 rounded">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="font-display text-base text-[#FFFFFF] font-semibold uppercase">
                        {proj.title}
                      </h3>
                      <span className="font-mono-tech text-[11px] text-[#F2C6A0] uppercase">
                        {proj.category}
                      </span>
                    </div>
                    <div className="font-mono-tech text-[11px] text-[#D9A0C8] pb-1">
                      {proj.technologies.join(", ")}
                    </div>
                    <ul className="space-y-1 pl-4 list-disc text-xs text-[#FFFFFF]/85 leading-relaxed marker:text-[#D9A0C8]">
                      {proj.features.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. EDUCATION */}
            <section className="space-y-3">
              <h2 className="font-mono-tech text-xs tracking-widest text-[#F2C6A0] uppercase font-bold border-b border-[#BC96E6]/25 pb-1">
                EDUCATION
              </h2>
              <div className="space-y-3 pt-1">
                {education.map((edu, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 p-3 bg-[#210B2C]/80 border border-[#BC96E6]/20 rounded">
                    <div>
                      <h3 className="font-display text-sm sm:text-base text-[#FFFFFF] font-semibold uppercase">
                        {edu.degree}
                      </h3>
                      <p className="font-mono-tech text-xs text-[#D9A0C8]">
                        {edu.institution}, {edu.location}
                      </p>
                      <p className="font-mono-tech text-[11px] text-[#FFFFFF]/70">
                        Specialization: {edu.specialization}
                      </p>
                    </div>
                    <span className="font-mono-tech text-xs text-[#F2C6A0] font-semibold shrink-0">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. CERTIFICATIONS & WORKSHOPS */}
            <section className="space-y-3">
              <h2 className="font-mono-tech text-xs tracking-widest text-[#F2C6A0] uppercase font-bold border-b border-[#BC96E6]/25 pb-1">
                CERTIFICATIONS &amp; INDUSTRIAL EXPOSURE
              </h2>
              <div className="space-y-2 text-xs text-[#FFFFFF]/90 font-mono-tech leading-relaxed pt-1">
                <div className="p-3 bg-[#210B2C]/80 border border-[#BC96E6]/20 rounded space-y-1">
                  <span className="text-[#D9A0C8] font-bold uppercase block">
                    NxtWave CCBP 4.0 Academy:
                  </span>
                  <p className="text-[11px] text-[#FFFFFF]/80">
                    {certifications.nxtwave.join("; ")}
                  </p>
                </div>

                <div className="p-3 bg-[#210B2C]/80 border border-[#BC96E6]/20 rounded space-y-1">
                  <span className="text-[#D9A0C8] font-bold uppercase block">
                    Workshops:
                  </span>
                  <p className="text-[11px] text-[#FFFFFF]/80">
                    {certifications.workshops.join("; ")}
                  </p>
                </div>

                <div className="p-3 bg-[#210B2C]/80 border border-[#BC96E6]/20 rounded space-y-1">
                  <span className="text-[#D9A0C8] font-bold uppercase block">
                    Webinar:
                  </span>
                  <p className="text-[11px] text-[#FFFFFF]/80">
                    {certifications.webinars.join("; ")}
                  </p>
                </div>

                <div className="p-3 bg-[#210B2C]/80 border border-[#BC96E6]/20 rounded space-y-1">
                  <span className="text-[#D9A0C8] font-bold uppercase block">
                    Industrial Exposure:
                  </span>
                  <p className="text-[11px] text-[#FFFFFF]/80">
                    {certifications.industrialExposure.join("; ")}
                  </p>
                </div>
              </div>
            </section>

            {/* 7. AWARDS */}
            <section className="space-y-2 pb-2">
              <h2 className="font-mono-tech text-xs tracking-widest text-[#F2C6A0] uppercase font-bold border-b border-[#BC96E6]/25 pb-1">
                AWARDS
              </h2>
              <ul className="space-y-1 pt-1 pl-4 list-disc text-xs font-mono-tech text-[#FFFFFF]/90 marker:text-[#F2C6A0]">
                {certifications.awards.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between px-6 py-3.5 border-t border-[#BC96E6]/25 bg-[#210B2C]/95 font-mono-tech text-xs">
            <span className="text-[#FFFFFF]/70">
              Bhargavi A • Official Portfolio CV
            </span>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 text-[#D9A0C8] hover:text-[#FFFFFF] transition-colors font-semibold cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT NOW</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
