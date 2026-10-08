import React from "react";
import { motion, type Variants } from "motion/react";
import { Layers, Smartphone, Workflow } from "lucide-react";

export const ProfessionalSummary: React.FC = () => {
  const pillars = [
    {
      num: "01",
      icon: Layers,
      title: "Full Stack Web Architecture",
      desc: "Engineering responsive web systems with React.js, Next.js, and modern styling tools. Delivering clean component hierarchies, state management, Supabase authentication, and high-performance user journeys.",
      tags: ["+REACT.JS", "+NEXT.JS", "+SUPABASE", "+TAILWIND CSS"],
    },
    {
      num: "02",
      icon: Smartphone,
      title: "Mobile ERP & Enterprise Solutions",
      desc: "Constructing production Android applications using Kotlin, MVVM architecture, and Jetpack Compose. Designed the BS Rocks Creations ERP with 8 modules, 11 Room SQLite entities, and PDF generation.",
      tags: ["+KOTLIN", "+JETPACK COMPOSE", "+ROOM SQLITE", "+MVVM"],
    },
    {
      num: "03",
      icon: Workflow,
      title: "Workflow Automation & Cloud Pipelines",
      desc: "Automating repetitive business processes through Make.com, Google Sheets, webhooks, and automated triggers. Connecting external forms to structured data pipelines with zero manual latency.",
      tags: ["+MAKE.COM", "+AUTOMATION", "+GOOGLE SHEETS", "+REST APIS"],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section id="summary" className="py-20 lg:py-28 border-b border-[#BC96E6]/25 bg-[#210B2C]">
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
              <span>01</span>
              <span className="text-[#F2C6A0]">/</span>
              <span>EXECUTIVE OVERVIEW</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#FFFFFF] uppercase tracking-tight">
              PROFESSIONAL SUMMARY
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#FFFFFF]/70 max-w-sm uppercase leading-relaxed">
            [FOCUS: ARCHITECTURE // RESPONSIVE INTERFACES // DATA PIPELINES // ENTERPRISE UTILITY]
          </p>
        </motion.div>

        {/* Narrative & Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 border-b border-[#BC96E6]/25 items-center"
        >
          <div className="lg:col-span-5">
            <span className="font-mono-tech text-xs text-[#D9A0C8] block mb-2 uppercase font-semibold">
              PROFILE STATEMENT
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#FFFFFF] uppercase leading-snug">
              ENGINEERING RESILIENT DIGITAL PRODUCTS FROM SPECIFICATION TO PRODUCTION.
            </h3>
          </div>

          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#FFFFFF]/90 leading-relaxed font-normal">
            <p>
              <strong className="text-[#D9A0C8] font-semibold">Bhargavi A</strong> is a Full Stack Developer and final-year B.E. Computer Science (AI &amp; ML) student with hands-on experience in React.js, Next.js, Node.js, Supabase, and Kotlin.
            </p>
            <p>
              During her App &amp; Website Development internship at BS Rocks Creations, she built and delivered three production systems: Kidspire (youth activity booking platform), Lumen (event booking platform), and a native Android ERP and billing app with 8 modules and 11 Room entities. Experienced in authentication, database design, payment integration, and workflow automation.
            </p>
          </div>
        </motion.div>

        {/* Core Architectural Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border-x border-b border-[#BC96E6]/25 mt-10"
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className={`p-8 bg-[#210B2C] hover:bg-[#BC96E6]/5 transition-colors relative group ${
                  idx !== pillars.length - 1 ? "md:border-r border-b md:border-b-0 border-[#BC96E6]/25" : ""
                }`}
              >
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono-tech text-sm text-[#D9A0C8] font-bold">
                    [{pillar.num}]
                  </span>
                  <div className="p-2.5 border border-[#BC96E6]/30 bg-[#210B2C] text-[#F2C6A0] group-hover:border-[#D9A0C8] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <h4 className="font-display text-xl text-[#FFFFFF] uppercase tracking-wide mb-3 group-hover:text-[#D9A0C8] transition-colors">
                  {pillar.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#FFFFFF]/80 leading-relaxed mb-6 font-normal">
                  {pillar.desc}
                </p>

                {/* Outlined Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#BC96E6]/20">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 font-mono-tech text-[10px] text-[#FFFFFF] bg-transparent border border-[#BC96E6]/30 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
