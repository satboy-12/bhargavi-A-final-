import React from "react";
import { motion } from "motion/react";
import { GraduationCap, MapPin, Calendar, Award, CheckCircle, BookOpen, Factory } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Education: React.FC = () => {
  const { education, certifications } = PORTFOLIO_DATA;

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#BC96E6]/25"
      >
        <div>
          <div className="flex items-center gap-2 font-mono-tech text-xs text-[#D9A0C8] uppercase font-bold mb-2">
            <span>05</span>
            <span className="text-[#F2C6A0]">/</span>
            <span>EDUCATION &amp; CREDENTIALS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#FFFFFF] uppercase tracking-tight">
            ACADEMIC &amp; CERTIFICATIONS
          </h2>
        </div>
        <p className="font-mono-tech text-xs text-[#FFFFFF]/70 uppercase font-medium">
          [SRIRAM ENGG COLLEGE // NXTWAVE CCBP 4.0 // INDUSTRIAL TRAINING]
        </p>
      </motion.div>

      {/* Grid of Academic Institutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-6 sm:p-8 bg-[#210B2C] border border-[#BC96E6]/25 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-[#D9A0C8] mb-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#F2C6A0]" />
                  <span className="font-mono-tech text-xs uppercase font-bold tracking-wider">
                    {idx === 0 ? "UNDERGRADUATE DEGREE" : "HIGHER SECONDARY"}
                  </span>
                </div>
                <div className="flex items-center gap-1 font-mono-tech text-xs text-[#F2C6A0]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-[#FFFFFF] uppercase tracking-tight mb-2">
                {edu.degree}
              </h3>

              <div className="font-mono-tech text-sm text-[#D9A0C8] uppercase mb-1 font-semibold tracking-wide">
                {edu.institution}
              </div>

              <div className="font-mono-tech text-xs text-[#FFFFFF]/80 uppercase mb-4 tracking-wide">
                <span className="text-[#F2C6A0] font-bold">SPECIALIZATION:</span> {edu.specialization}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#FFFFFF]/80 uppercase pt-4 border-t border-[#BC96E6]/20">
              <MapPin className="w-3.5 h-3.5 text-[#F2C6A0]" />
              <span className="font-semibold text-[#FFFFFF]">{edu.location}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications, Industrial Exposure & Awards Section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="pt-6 border-t border-[#BC96E6]/25"
      >
        <div className="flex items-center gap-2 font-mono-tech text-xs text-[#D9A0C8] uppercase font-bold mb-6">
          <BookOpen className="w-4 h-4 text-[#F2C6A0]" />
          <span>VERIFIED CERTIFICATIONS &amp; INDUSTRIAL EXPOSURE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* NxtWave CCBP 4.0 Academy */}
          <div className="p-6 bg-[#210B2C] border border-[#BC96E6]/25 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#BC96E6]/20">
              <span className="font-display text-lg text-[#FFFFFF] uppercase font-semibold">
                NXTWAVE CCBP 4.0
              </span>
              <span className="font-mono-tech text-[10px] text-[#F2C6A0] uppercase font-bold">
                ACADEMY
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {certifications.nxtwave.map((cert) => (
                <span
                  key={cert}
                  className="px-2 py-1 font-mono-tech text-[10.5px] uppercase bg-[#210B2C] border border-[#BC96E6]/25 text-[#FFFFFF]"
                >
                  +{cert}
                </span>
              ))}
            </div>
          </div>

          {/* Workshops & Webinars */}
          <div className="p-6 bg-[#210B2C] border border-[#BC96E6]/25 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#BC96E6]/20">
              <span className="font-display text-lg text-[#FFFFFF] uppercase font-semibold">
                WORKSHOPS &amp; WEBINARS
              </span>
              <span className="font-mono-tech text-[10px] text-[#F2C6A0] uppercase font-bold">
                INDUSTRY
              </span>
            </div>
            <ul className="space-y-2.5 text-xs font-mono-tech text-[#FFFFFF]/90">
              {certifications.workshops.map((ws, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#F2C6A0] shrink-0 mt-0.5" />
                  <span>{ws}</span>
                </li>
              ))}
              {certifications.webinars.map((web, i) => (
                <li key={i} className="flex items-start gap-2 pt-1 border-t border-[#BC96E6]/15">
                  <CheckCircle className="w-3.5 h-3.5 text-[#D9A0C8] shrink-0 mt-0.5" />
                  <span className="text-[11px] text-[#FFFFFF]/80">{web}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industrial Exposure & Awards */}
          <div className="p-6 bg-[#210B2C] border border-[#BC96E6]/25 space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-[#BC96E6]/20 mb-3">
                <span className="font-display text-lg text-[#FFFFFF] uppercase font-semibold">
                  INDUSTRIAL &amp; HONORS
                </span>
                <Factory className="w-4 h-4 text-[#F2C6A0]" />
              </div>

              <div className="space-y-3 font-mono-tech text-xs">
                <div>
                  <span className="text-[#D9A0C8] font-bold uppercase block mb-1.5 text-[11px]">
                    INDUSTRIAL EXPOSURE:
                  </span>
                  <ul className="space-y-1.5 text-[#FFFFFF]/90">
                    {certifications.industrialExposure.map((exp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#F2C6A0] font-bold">•</span>
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-[#BC96E6]/20">
                  <div className="flex items-center gap-1.5 text-[#F2C6A0] font-bold uppercase mb-1.5 text-[11px]">
                    <Award className="w-3.5 h-3.5" />
                    <span>HONORS &amp; AWARDS:</span>
                  </div>
                  <ul className="space-y-1 text-[#FFFFFF]/90">
                    {certifications.awards.map((award, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#D9A0C8] font-bold">•</span>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

