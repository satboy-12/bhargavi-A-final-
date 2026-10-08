import React from "react";
import { motion } from "motion/react";
import { Code, Server, Smartphone, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const categoryIcons = [Code, Server, Smartphone];

  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-[#BC96E6]/25 bg-[#210B2C]">
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
              <span>03</span>
              <span className="text-[#F2C6A0]">/</span>
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#FFFFFF] uppercase tracking-tight">
              SKILLS &amp; TECHNOLOGIES
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#FFFFFF]/70 max-w-sm uppercase leading-relaxed">
            [FULL STACK DEVELOPMENT // MOBILE ANDROID // WORKFLOW AUTOMATION]
          </p>
        </motion.div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-x border-b border-[#BC96E6]/25 mt-10">
          {skills.map((category, catIdx) => {
            const Icon = categoryIcons[catIdx] || Terminal;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.08 }}
                className={`p-8 bg-[#210B2C] hover:bg-[#BC96E6]/5 transition-colors relative flex flex-col justify-between ${
                  catIdx !== skills.length - 1 ? "lg:border-r border-b lg:border-b-0 border-[#BC96E6]/25" : ""
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 border border-[#BC96E6]/30 bg-[#210B2C] text-[#F2C6A0]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono-tech text-xs text-[#FFFFFF]/70 uppercase font-semibold">
                        SECTOR 0{catIdx + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl text-[#FFFFFF] uppercase tracking-wide mb-6">
                    {category.category}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-2 pt-2 border-t border-[#BC96E6]/20">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={skill}
                        className="flex items-center justify-between p-2.5 bg-[#210B2C] border border-[#BC96E6]/25 hover:border-[#D9A0C8] transition-colors group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-[#D9A0C8] font-mono-tech text-[10px] font-bold">
                            0{idx + 1}
                          </span>
                          <span className="font-mono-tech text-xs text-[#FFFFFF] group-hover:text-[#D9A0C8] transition-colors font-medium">
                            {skill}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
