"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASINGS, DURATIONS } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  duration = DURATIONS.slow,
  direction = "up",
  distance = 30,
  className = "",
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: EASINGS.awwwards,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface TextRevealProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClassName?: string;
}

export function TextReveal({
  text,
  className = "",
  highlightWords = [],
  highlightClassName = "text-emerald-500",
}: TextRevealProps) {
  const words = text.split(" ");
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, index) => {
        const isHighlight = highlightWords.some((hw) =>
          word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <span
            key={index}
            className="inline-block overflow-hidden align-top mr-[0.25em] last:mr-0"
          >
            <motion.span
              initial={{ y: "105%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.04,
                ease: EASINGS.awwwards,
              }}
              className={`inline-block ${isHighlight ? highlightClassName : ""}`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
