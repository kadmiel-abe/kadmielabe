"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { EASINGS } from "@/lib/motion";

export default function Preloader() {
  const shouldReduceMotion = useReducedMotion();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setLoading(false);
      return;
    }

    // Fast, crisp modern counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 120);
          return 100;
        }
        const diff = Math.floor(Math.random() * 22) + 15;
        return Math.min(prev + diff, 100);
      });
    }, 25);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.4,
              ease: EASINGS.awwwards,
            },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070708] text-white select-none pointer-events-auto"
        >
          {/* Subtle background ambient pulse */}
          <div
            className="absolute w-[450px] h-[450px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Logo Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: EASINGS.awwwards }}
              className="w-16 h-16 rounded-full bg-black border border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.35)] flex items-center justify-center mb-6"
            >
              <span className="font-mono text-xl font-black text-emerald-400 tracking-tighter">
                &lt;/&gt;
              </span>
            </motion.div>

            {/* Name with character reveal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASINGS.awwwards }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="font-heading text-2xl sm:text-3xl font-black tracking-tight text-white">
                Kadmiel Abe
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </motion.div>

            {/* Linear Progress Bar */}
            <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative mb-3">
              <motion.div
                className="h-full w-full origin-left bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                style={{ scaleX: progress / 100 }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Percentage Counter */}
            <div className="font-mono text-xs text-gray-400 tracking-widest">
              <span>CHARGEMENT </span>
              <span className="text-emerald-400 font-bold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
