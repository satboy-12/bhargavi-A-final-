import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "OVERVIEW", href: "#overview" },
    { name: "SUMMARY", href: "#summary" },
    { name: "PROJECTS", href: "#projects" },
    { name: "SKILLS", href: "#skills" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "EDUCATION", href: "#education" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#210B2C]/95 backdrop-blur-md border-b border-[#BC96E6]/20 py-3 shadow-lg shadow-[#210B2C]/80"
            : "bg-[#210B2C]/85 backdrop-blur-sm border-b border-[#BC96E6]/15 py-3.5"
        }`}
      >
        <div className="w-full px-[4vw] sm:px-[5vw]">
          <div className="flex items-center justify-between h-11">
            {/* LEFT: [BA] BHARGAVI A / FULL STACK DEVELOPER */}
            <a
              href="#overview"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Bhargavi A — Portfolio Home"
            >
              <div className="w-7 h-7 bg-[#D9A0C8] text-[#210B2C] flex items-center justify-center font-bold text-xs tracking-wider transition-transform duration-200 group-hover:scale-105">
                BA
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-lg sm:text-xl tracking-wider text-[#FFFFFF] group-hover:text-[#D9A0C8] transition-colors">
                  {PORTFOLIO_DATA.personal.name}
                </span>
                <span className="text-[#BC96E6]/60 text-xs hidden sm:inline">/</span>
                <span className="hidden sm:inline font-mono-tech text-[10px] tracking-widest text-[#FFFFFF] uppercase">
                  {PORTFOLIO_DATA.personal.title}
                </span>
              </div>
            </a>

            {/* CENTER: OVERVIEW, SUMMARY, PROJECTS, SKILLS, EXPERIENCE, EDUCATION, CONTACT */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`font-mono-tech text-xs tracking-wider uppercase py-1.5 transition-colors duration-200 relative ${
                      isActive
                        ? "text-[#D9A0C8] font-semibold"
                        : "text-[#FFFFFF] hover:text-[#D9A0C8]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F2C6A0]"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* RIGHT: CONTACT ↗ */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono-tech uppercase font-semibold text-[#210B2C] bg-[#D9A0C8] hover:bg-[#D9A0C8]/90 transition-all duration-150 tracking-wider shadow-sm"
              >
                <span>CONTACT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#FFFFFF] hover:text-[#D9A0C8] border border-[#BC96E6]/30 bg-[#210B2C] focus:outline-none transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#210B2C] border-b border-[#BC96E6]/30 px-6 py-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="pb-2 border-b border-[#BC96E6]/25 flex items-center justify-between">
                <span className="font-mono-tech text-xs text-[#BC96E6]">INDEX</span>
                <span className="font-mono-tech text-[10px] text-[#F2C6A0]">BHARGAVI A</span>
              </div>

              <nav className="flex flex-col gap-1">
                {navLinks.map((link, idx) => {
                  const sectionId = link.href.substring(1);
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-2.5 px-3 border-b border-[#BC96E6]/15 font-mono-tech text-sm tracking-wider uppercase transition-colors ${
                        isActive
                          ? "text-[#D9A0C8] font-semibold bg-[#BC96E6]/10"
                          : "text-[#FFFFFF] hover:text-[#D9A0C8] hover:bg-[#BC96E6]/5"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-[#F2C6A0] text-xs font-semibold">0{idx + 1}</span>
                        {link.name}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#BC96E6]/60" />
                    </a>
                  );
                })}
              </nav>

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#D9A0C8] text-[#210B2C] font-mono-tech text-xs uppercase font-bold tracking-wider"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
