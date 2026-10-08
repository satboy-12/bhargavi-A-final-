import React from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, CheckCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 lg:py-28 border-b border-[#BC96E6]/25 bg-[#210B2C]">
      <div className="w-full px-[4vw] sm:px-[5vw]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#BC96E6]/25"
        >
          <div>
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#D9A0C8] uppercase font-bold mb-2">
              <span>04</span>
              <span className="text-[#F2C6A0]">/</span>
              <span>PROFESSIONAL EXPERIENCE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#FFFFFF] uppercase tracking-tight">
              EXPERIENCE
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#FFFFFF]/70 max-w-sm uppercase leading-relaxed">
            [FULL STACK DEVELOPMENT // ANDROID ERP // PROCESS AUTOMATION]
          </p>
        </motion.div>

        {/* Experience Entries */}
        <div className="py-6 divide-y divide-[#BC96E6]/25">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Period & Organization */}
              <div className="lg:col-span-4 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D9A0C8]/15 border border-[#D9A0C8]/40 font-mono-tech text-xs text-[#D9A0C8] font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#FFFFFF] uppercase tracking-tight">
                  {exp.role}
                </h3>

                <div className="text-sm font-mono-tech text-[#FFFFFF]/80 uppercase">
                  <p className="text-[#D9A0C8] font-bold text-base">{exp.organization}</p>
                  <p className="flex items-center gap-1.5 mt-1 text-xs text-[#FFFFFF]/75">
                    <MapPin className="w-3.5 h-3.5 text-[#F2C6A0]" />
                    <span>{exp.location}</span>
                  </p>
                </div>
              </div>

              {/* Right Column: Key Achievements and Responsibilities */}
              <div className="lg:col-span-8 bg-[#210B2C] border border-[#BC96E6]/25 p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="font-mono-tech text-xs text-[#D9A0C8] uppercase tracking-wider mb-4 flex items-center gap-2 font-bold">
                    <span className="w-2 h-2 bg-[#D9A0C8]" />
                    RESPONSIBILITIES &amp; DELIVERABLES
                  </h4>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm text-[#FFFFFF]/90 leading-relaxed font-normal">
                        <CheckCircle className="w-4 h-4 text-[#F2C6A0] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Employed */}
                <div className="pt-6 border-t border-[#BC96E6]/20">
                  <span className="font-mono-tech text-xs text-[#FFFFFF]/70 uppercase block mb-3 font-semibold">
                    TECHNOLOGIES UTILIZED:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 font-mono-tech text-[11px] uppercase bg-[#210B2C] border border-[#BC96E6]/30 text-[#FFFFFF] tracking-wider"
                      >
                        +{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
