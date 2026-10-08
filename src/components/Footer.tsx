import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#210B2C] border-t border-[#BC96E6]/25 text-[#FFFFFF] py-12 lg:py-16">
      <div className="w-full px-[4vw] sm:px-[5vw]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#BC96E6]/20">
          {/* Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-[#D9A0C8] flex items-center justify-center font-bold text-[#210B2C] text-xs tracking-wider">
                BA
              </div>
              <span className="font-display text-2xl text-[#FFFFFF] tracking-wide">
                {personal.name}
              </span>
            </div>
            <p className="font-mono-tech text-xs text-[#FFFFFF]/80 uppercase max-w-sm leading-relaxed">
              {personal.title} — {personal.location}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-[#BC96E6]/30 hover:border-[#D9A0C8] bg-[#210B2C] text-[#FFFFFF] hover:text-[#D9A0C8] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-[#BC96E6]/30 hover:border-[#D9A0C8] bg-[#210B2C] text-[#FFFFFF] hover:text-[#D9A0C8] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 border border-[#BC96E6]/30 hover:border-[#D9A0C8] bg-[#210B2C] text-[#FFFFFF] hover:text-[#D9A0C8] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Index */}
          <div className="md:col-span-4 space-y-2 font-mono-tech text-xs">
            <span className="text-[#D9A0C8] font-bold uppercase block mb-3">
              NAVIGATION
            </span>
            <div className="grid grid-cols-2 gap-2.5 uppercase">
              <a href="#overview" className="text-[#FFFFFF]/80 hover:text-[#D9A0C8] transition-colors">
                [00] Overview
              </a>
              <a href="#summary" className="text-[#FFFFFF]/80 hover:text-[#D9A0C8] transition-colors">
                [01] Summary
              </a>
              <a href="#projects" className="text-[#FFFFFF]/80 hover:text-[#D9A0C8] transition-colors">
                [02] Projects
              </a>
              <a href="#skills" className="text-[#FFFFFF]/80 hover:text-[#D9A0C8] transition-colors">
                [03] Skills
              </a>
              <a href="#experience" className="text-[#FFFFFF]/80 hover:text-[#D9A0C8] transition-colors">
                [04] Experience
              </a>
              <a href="#education" className="text-[#FFFFFF]/80 hover:text-[#D9A0C8] transition-colors">
                [05] Education
              </a>
            </div>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-3 flex md:flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-[#D9A0C8] hover:text-[#210B2C] hover:border-[#D9A0C8] border border-[#BC96E6]/40 text-[#FFFFFF] font-mono-tech text-xs uppercase tracking-wider font-semibold transition-colors duration-150 cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>TOP OF PAGE</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#F2C6A0]" />
            </button>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-[11px] text-[#FFFFFF]/70">
          <div>
            © {new Date().getFullYear()} BHARGAVI A. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 text-[10px]">
            <span>ENGINEERED WITH REACT &amp; TYPESCRIPT</span>
            <span className="text-[#F2C6A0]">/</span>
            <span>ARAKKONAM, TAMIL NADU</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
