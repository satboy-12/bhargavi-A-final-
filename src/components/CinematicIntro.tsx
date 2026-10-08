import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface CinematicIntroProps {
  onComplete: () => void;
}

const clientPortrait = "/images/bhargavi_portrait.png";

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setPrefersReducedMotion(true);
        const timer = setTimeout(() => {
          setIsVisible(false);
          onComplete();
        }, 300);
        return () => clearTimeout(timer);
      }
    }

    // Lock body scroll during intro
    document.body.style.overflow = "hidden";

    // Sequence timeline:
    // 0.0s: Deep Plum screen (#210B2C)
    // 0.4s: FULL STACK DEVELOPER appears
    // 0.8s: BHARGAVI A appears
    // 1.4s: soft Wisteria light sweep
    // 1.8s: portrait begins revealing
    // 2.5s: abstract rings appear
    // 3.0s: hero composition completes
    // 3.5s: smooth transition into portfolio
    const finishTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3400);

    const cleanupTimer = setTimeout(() => {
      document.body.style.overflow = "unset";
      onComplete();
    }, 3900);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        setIsVisible(false);
        document.body.style.overflow = "unset";
        onComplete();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(finishTimer);
      clearTimeout(cleanupTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    document.body.style.overflow = "unset";
    onComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden select-none cursor-pointer bg-[#210B2C]"
          onClick={handleSkip}
          aria-label="Skip cinematic introduction"
        >
          {/* 0.0s Ambient Deep Plum Background with soft atmospheric glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(188, 150, 230, 0.25) 0%, rgba(33, 11, 44, 0) 70%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.22 }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
            className="absolute -bottom-[15%] -right-[10%] w-[65vw] h-[65vw] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(217, 160, 200, 0.25) 0%, rgba(33, 11, 44, 0) 70%)",
            }}
          />

          {/* 2.5s Abstract Rings Appear */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 0.35, scale: 1 }}
            transition={{ duration: 1.2, delay: prefersReducedMotion ? 0 : 2.5, ease: "easeOut" }}
            className="absolute w-[65vw] max-w-[700px] h-[65vw] max-h-[700px] rounded-full pointer-events-none"
            style={{
              border: "1px solid rgba(242, 198, 160, 0.3)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.25, scale: 1 }}
            transition={{ duration: 1.2, delay: prefersReducedMotion ? 0 : 2.6, ease: "easeOut" }}
            className="absolute w-[50vw] max-w-[540px] h-[50vw] max-h-[540px] rounded-full pointer-events-none"
            style={{
              border: "1px solid rgba(188, 150, 230, 0.25)",
            }}
          />

          {/* Composition Container */}
          <div className="relative z-10 w-full max-w-6xl px-6 sm:px-12 py-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14">
            {/* Left Column: Typography */}
            <div className="flex-1 flex flex-col items-start justify-center relative">
              {/* 0.4s: FULL STACK DEVELOPER appears (#FFFFFF with #D9A0C8 glowing dot) */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : 0.4, ease: "easeOut" }}
                className="flex items-center gap-2.5 mb-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-[#D9A0C8] shadow-[0_0_8px_#D9A0C8] inline-block" />
                <span className="font-mono-tech text-xs sm:text-[13px] tracking-[0.28em] text-[#FFFFFF] uppercase font-medium">
                  FULL STACK DEVELOPER
                </span>
              </motion.div>

              {/* 0.8s: BHARGAVI A appears (#FFFFFF) */}
              <div className="relative overflow-visible py-1">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: prefersReducedMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-[#FFFFFF] uppercase tracking-tight block whitespace-nowrap"
                  style={{
                    fontSize: "clamp(42px, 6.8vw, 102px)",
                    lineHeight: "0.95",
                    fontWeight: 800,
                  }}
                >
                  BHARGAVI A
                </motion.h1>

                {/* 1.4s: Soft Wisteria Light Sweep across typography */}
                {!prefersReducedMotion && (
                  <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: "200%", opacity: [0, 0.6, 0] }}
                    transition={{
                      duration: 1.0,
                      delay: 1.4,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="absolute inset-y-0 w-48 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(188, 150, 230, 0.35) 50%, rgba(217, 160, 200, 0.35) 75%, transparent 100%)",
                    }}
                  />
                )}

                {/* Name Underline in Muted Rose */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "90px" }}
                  transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 1.1, ease: "easeOut" }}
                  className="h-[2px] bg-[#D9A0C8] mt-3"
                />
              </div>
            </div>

            {/* Right Column: 1.8s Portrait Begins Revealing (Large, soft editorial edge) */}
            <div className="relative flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 1.8, ease: "easeOut" }}
                className="relative w-[240px] sm:w-[300px] lg:w-[360px]"
              >
                {/* 2.5s Halo & Abstract Light Circles behind the portrait */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 0.45, scale: 1 }}
                  transition={{ duration: 0.9, delay: prefersReducedMotion ? 0 : 2.5, ease: "easeOut" }}
                  className="absolute -inset-8 rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(188, 150, 230, 0.28) 0%, rgba(217, 160, 200, 0.12) 50%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />

                {/* Portrait with smooth fade & scale revealing */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: prefersReducedMotion ? 0 : 1.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative aspect-[3/4.4] w-full"
                >
                  <img
                    src={clientPortrait}
                    alt="Bhargavi A"
                    className="w-full h-full object-contain object-bottom"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* 3.0s Hero Composition Completes: subtle skip hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : 2.8 }}
            className="absolute bottom-6 right-8 font-mono-tech text-[11px] text-[#BC96E6] tracking-wider uppercase"
          >
            CLICK OR PRESS SPACE TO SKIP ↗
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
