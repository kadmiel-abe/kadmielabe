"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { SPRINGS } from "@/lib/motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, SPRINGS.smoothScroll);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300 z-[100] origin-left shadow-[0_0_12px_rgba(16,185,129,0.7)] pointer-events-none"
      style={{ scaleX }}
    />
  );
}
