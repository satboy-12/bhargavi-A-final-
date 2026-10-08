import React from "react";
import { motion, type Variants } from "motion/react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

const clientPortrait = "/images/bhargavi_portrait.png";

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal } = PORTFOLIO_DATA;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const skillTags = [
    "+ REACT",
    "+ TYPESCRIPT",
    "+ NODE.JS",
    "+ ANDROID ERP",
    "+ GOOGLE APPS SCRIPT",
    "+ TAILWIND CSS",
  ];

  return (
    <section
      id="overview"
      className="relative min-h-screen pt-[72px] flex flex-col justify-between bg-[#210B2C] text-[#FFFFFF] overflow-hidden"
    >
      <div id="hero" className="sr-only" aria-hidden="true" />

      {/* Atmospheric Ambient Depth (Deep Plum & Soft Muted Tints) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Soft upper-left plum atmospheric glow */}
        <div
          className="absolute -top-32 -left-32 w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(188, 150, 230, 0.08) 0%, rgba(33, 11, 44, 0) 70%)",
          }}
        />
        {/* Soft right-side muted rose ambient light spot */}
        <div
          className="absolute top-1/4 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(217, 160, 200, 0.1) 0%, rgba(33, 11, 44, 0) 65%)",
          }}
        />
      </div>

      {/* Main Full-Width Cinematic Hero Grid (Left ≈ 48%, Right ≈ 52%) */}
      <div className="relative z-10 w-full px-[4vw] sm:px-[5vw] flex-1 flex flex-col justify-center py-4 lg:py-2">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between w-full min-h-[calc(100vh-140px)] gap-8 lg:gap-4 xl:gap-8"
        >
          {/* ==================================================
              LEFT SIDE: TYPOGRAPHY & INFORMATION (≈ 48%)
              ================================================== */}
          <div className="w-full lg:w-[48%] xl:w-[48%] flex flex-col items-start justify-center text-left py-2 sm:py-4 z-20">
            {/* 1. Subtitle Kicker: FULL STACK DEVELOPER (#FFFFFF with #D9A0C8 glowing dot) */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5 mb-2.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#D9A0C8] shadow-[0_0_8px_#D9A0C8] shrink-0" />
              <span className="font-mono-tech text-xs sm:text-[13px] tracking-[0.28em] text-[#FFFFFF] uppercase font-medium">
                FULL STACK DEVELOPER
              </span>
            </motion.div>

            {/* 2. Main Name Headline: BHARGAVI A (ONE SINGLE LINE, NO PERIOD, #FFFFFF) */}
            <motion.div variants={itemVariants} className="w-full">
              <h1
                style={{
                  fontSize: "clamp(32px, 5.4vw, 92px)",
                  lineHeight: "0.95",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  whiteSpace: "nowrap",
                }}
                className="font-display text-[#FFFFFF] uppercase select-none whitespace-nowrap block"
              >
                BHARGAVI A
              </h1>
            </motion.div>

            {/* 3. Short Horizontal Decorative Line Underneath Name (#D9A0C8) */}
            <motion.div
              variants={itemVariants}
              className="w-20 sm:w-28 h-[2px] bg-[#D9A0C8] mt-3 mb-4 shadow-[0_0_8px_rgba(217,160,200,0.35)]"
            />

            {/* 4. Education Line (#FFFFFF) */}
            <motion.div variants={itemVariants} className="mb-2.5 w-full">
              <div className="flex items-center flex-wrap gap-x-2 gap-y-1 font-mono-tech text-xs sm:text-sm text-[#FFFFFF]">
                <span className="font-medium uppercase tracking-wider text-[#FFFFFF]">
                  {personal.degree}
                </span>
                <span className="text-[#D9A0C8] font-bold">/</span>
                <span className="text-[#FFFFFF]/90 font-normal uppercase tracking-wide">
                  {personal.specialization}
                </span>
              </div>
            </motion.div>

            {/* 5. Location (ARAKKONAM, TAMIL NADU with #F2C6A0 pin icon & #FFFFFF text) */}
            <motion.div variants={itemVariants} className="mb-4 sm:mb-5 flex items-center gap-2 font-mono-tech text-xs sm:text-sm">
              <MapPin className="w-3.5 h-3.5 text-[#F2C6A0] shrink-0" />
              <span className="font-medium uppercase tracking-wider text-[#FFFFFF]">
                {personal.location.toUpperCase()}
              </span>
            </motion.div>

            {/* 6. Professional Summary (#FFFFFF, readable width, comfortable line-height) */}
            <motion.div variants={itemVariants} className="mb-5 max-w-[560px]">
              <p className="text-[#FFFFFF] text-[15px] sm:text-[16px] leading-[1.65] font-normal">
                {personal.summary}
              </p>
            </motion.div>

            {/* 7. Technology Tags (Transparent bg, thin Wisteria border, white text, hover muted rose) */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 max-w-[580px] mb-6">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono-tech uppercase bg-transparent border border-[#BC96E6]/40 text-[#FFFFFF] hover:bg-[#D9A0C8] hover:text-[#210B2C] hover:border-[#D9A0C8] transition-all duration-200 tracking-wider cursor-default"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* 8. Action Buttons & Social Icons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary: EXPLORE WORK → (#D9A0C8 bg, #210B2C text) */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#D9A0C8] hover:bg-[#D9A0C8]/90 text-[#210B2C] font-mono-tech text-xs uppercase tracking-wider font-bold transition-all duration-150 shadow-md shadow-[#D9A0C8]/20"
              >
                <span>EXPLORE WORK</span>
                <span className="text-sm">→</span>
              </a>

              {/* Secondary: GET IN TOUCH ↗ (Transparent bg, #BC96E6 border, #FFFFFF text) */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-[#BC96E6] hover:bg-[#BC96E6]/15 hover:border-[#D9A0C8] text-[#FFFFFF] font-mono-tech text-xs uppercase tracking-wider font-semibold transition-all duration-150"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F2C6A0]" />
              </a>

              {/* Tertiary: RESUME (Border with champagne accent) */}
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-transparent border border-[#F2C6A0]/60 hover:bg-[#F2C6A0]/10 hover:border-[#F2C6A0] text-[#FFFFFF] font-mono-tech text-xs uppercase tracking-wider font-semibold transition-all duration-150 cursor-pointer"
                  title="View official resume"
                >
                  <FileText className="w-3.5 h-3.5 text-[#F2C6A0]" />
                  <span>RESUME</span>
                </button>
              )}

              {/* Social Channels (White icons, subtle Wisteria borders) */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#BC96E6]/35 hover:border-[#D9A0C8] hover:text-[#D9A0C8] bg-transparent text-[#FFFFFF] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#BC96E6]/35 hover:border-[#D9A0C8] hover:text-[#D9A0C8] bg-transparent text-[#FFFFFF] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="p-3 border border-[#BC96E6]/35 hover:border-[#D9A0C8] hover:text-[#D9A0C8] bg-transparent text-[#FFFFFF] transition-colors"
                  aria-label="Email Bhargavi"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ==================================================
              RIGHT SIDE: EDITORIAL FRAMED PORTRAIT CARD
              Matches reference screenshot composition
              ================================================== */}
          <div className="w-full lg:w-[48%] xl:w-[46%] relative flex items-center justify-center lg:justify-end min-h-[460px] sm:min-h-[520px] lg:min-h-[600px] xl:min-h-[660px] overflow-visible">
            {/* BACKDROP VISUAL ATMOSPHERE: Subtle purple glow & technical rings strictly BEHIND the card */}
            <div className="absolute inset-0 flex items-center justify-center lg:justify-end pointer-events-none z-0" aria-hidden="true">
              {/* Soft ambient purple glow */}
              <div
                className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(188, 150, 230, 0.16) 0%, rgba(217, 160, 200, 0.05) 50%, rgba(33, 11, 44, 0) 70%)",
                  filter: "blur(40px)",
                }}
              />

              {/* Faint technical orbital rings & geometric lines */}
              <svg
                className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] lg:w-[540px] lg:h-[540px] overflow-visible"
                viewBox="0 0 600 600"
                fill="none"
              >
                <circle
                  cx="300"
                  cy="300"
                  r="275"
                  stroke="#BC96E6"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  opacity="0.22"
                />
                <circle
                  cx="300"
                  cy="300"
                  r="215"
                  stroke="#F2C6A0"
                  strokeWidth="1"
                  opacity="0.16"
                />
                <path
                  d="M 90,410 A 250,250 0 0,1 510,190"
                  stroke="#D9A0C8"
                  strokeWidth="1.2"
                  strokeDasharray="6 10"
                  opacity="0.28"
                />
                <circle cx="170" cy="150" r="2" fill="#F2C6A0" opacity="0.5" />
                <circle cx="470" cy="380" r="2.5" fill="#BC96E6" opacity="0.4" />
              </svg>
            </div>

            {/* EDITORIAL FRAMED PORTRAIT CARD (relative z-10) */}
            <motion.div
              variants={itemVariants}
              className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] xl:max-w-[420px]"
            >
              {/* Layered physical card frame:
                  - Dark plum background
                  - Thin muted gold border
                  - Thin inner purple border
                  - Subtle layered frame
                  - Clean editorial metadata
                  - Slight cinematic depth
                  - No excessive glow */}
              <div className="relative rounded-2xl p-2.5 sm:p-3 bg-[#1A0823] border border-[#F2C6A0]/35 shadow-[0_20px_50px_rgba(10,3,15,0.7)]">
                {/* Thin inner purple border layer */}
                <div className="relative rounded-xl p-2 sm:p-2.5 bg-[#1F0A2A] border border-[#BC96E6]/30">
                  {/* TOP OF CARD: BHARGAVI A (left) | FULL STACK DEVELOPER (right) */}
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#BC96E6]/25 font-mono-tech tracking-wider text-[11px] sm:text-xs">
                    <span className="text-[#FFFFFF] font-medium tracking-widest uppercase">
                      BHARGAVI A
                    </span>
                    <span className="text-[#BC96E6] font-medium tracking-wider uppercase">
                      FULL STACK DEVELOPER
                    </span>
                  </div>

                  {/* PHOTO AREA */}
                  <div className="relative w-full aspect-[719/1137] rounded-lg overflow-hidden bg-[#210B2C] border border-[#BC96E6]/20 flex items-center justify-center">
                    {/* Location badge near top-left (outside face area) */}
                    <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#210B2C]/90 border border-[#BC96E6]/35 backdrop-blur-sm shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F2C6A0] animate-pulse" />
                      <span className="font-mono-tech text-[10px] tracking-wider uppercase text-[#FFFFFF] font-medium">
                        ARAKKONAM, TN
                      </span>
                    </div>

                    {/* Clean Bhargavi Portrait */}
                    <img
                      src="/images/bhargavi_portrait.png"
                      alt="Bhargavi A"
                      className="bhargavi-portrait"
                    />
                  </div>

                  {/* BOTTOM OF CARD:
                      Left: B.E. COMPUTER SCIENCE AND ENGINEERING
                      Right: ARTIFICIAL INTELLIGENCE & MACHINE LEARNING */}
                  <div className="flex items-center justify-between pt-2.5 mt-2.5 border-t border-[#BC96E6]/25 font-mono-tech text-[9.5px] sm:text-[10.5px] tracking-wider">
                    <span className="text-[#FFFFFF]/85 uppercase font-medium truncate pr-2">
                      B.E. COMPUTER SCIENCE AND ENGINEERING
                    </span>
                    <span className="text-[#F2C6A0] uppercase font-semibold shrink-0 tracking-wider">
                      ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ==================================================
          PROJECT TICKER: Compact bottom bar with approved palette
          ================================================== */}
      <div className="relative z-20 w-full border-t border-[#BC96E6]/20 bg-[#210B2C]/95 backdrop-blur-sm py-3.5 px-[4vw] sm:px-[5vw]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono-tech text-xs">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-[#F2C6A0] font-bold tracking-wider">PROJECTS:</span>
            <span className="text-[#FFFFFF] font-medium tracking-wide">KIDSPIRE</span>
            <span className="text-[#BC96E6]/40">/</span>
            <span className="text-[#FFFFFF] font-medium tracking-wide">LUMEN</span>
            <span className="text-[#BC96E6]/40">/</span>
            <span className="text-[#FFFFFF] font-medium tracking-wide">BS ROCKS CREATIONS ERP</span>
            <span className="text-[#BC96E6]/40">/</span>
            <span className="text-[#FFFFFF] font-medium tracking-wide">ORBITRA</span>
            <span className="text-[#BC96E6]/40">/</span>
            <span className="text-[#FFFFFF] font-medium tracking-wide">GOOGLE SHEETS AUTOMATION</span>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-[#FFFFFF] hover:text-[#D9A0C8] transition-colors shrink-0 font-medium"
          >
            <span>VIEW WORK</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#F2C6A0]" />
          </a>
        </div>
      </div>
    </section>
  );
};
