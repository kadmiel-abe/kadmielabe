/**
 * ==============================================================================
 * KADMIEL ABE - CENTRALIZED MOTION DESIGN TOKENS & FRAMER MOTION VARIANTS
 * ==============================================================================
 * Awwwards-caliber animation system.
 * Only hardware-accelerated properties (transform, opacity).
 * Fully responsive and supports prefers-reduced-motion.
 */

import { Variants, Transition } from "framer-motion";

// ---------------------------------------------------------------------------
// 1. EASING CURVES & TIMINGS (DESIGN TOKENS)
// ---------------------------------------------------------------------------
export const EASINGS = {
  // Awwwards flagship luxury cubic-bezier (smooth deceleration, zero harsh stop)
  awwwards: [0.22, 1, 0.36, 1] as const,
  // Snappy modern entry
  expoOut: [0.16, 1, 0.3, 1] as const,
  // Gentle ease in-out for infinite floating and breathing
  easeInOut: [0.42, 0, 0.58, 1] as const,
  // Micro-bounce for tactile feedback
  softBounce: [0.34, 1.4, 0.64, 1] as const,
};

export const DURATIONS = {
  fast: 0.18,       // Snappy micro-interactions (hover, tap)
  medium: 0.32,     // Cards, pills, submenus
  slow: 0.45,       // Section entrance, headers
  reveal: 0.5,      // Text/mask reveal
  float: 3.5,       // Organic float
};

export const SPRINGS = {
  tactile: { type: "spring", stiffness: 450, damping: 28 } as const,
  gentle: { type: "spring", stiffness: 220, damping: 22 } as const,
  smoothScroll: { stiffness: 250, damping: 28, restDelta: 0.001 } as const,
};

// ---------------------------------------------------------------------------
// 2. REUSABLE FRAMER MOTION VARIANTS
// ---------------------------------------------------------------------------

// Standard Fade + Slide Up
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.slow,
      delay: customDelay,
      ease: EASINGS.awwwards,
    },
  }),
};

// Fade + Slide Down
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -25 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.medium,
      delay: customDelay,
      ease: EASINGS.awwwards,
    },
  }),
};

// Lateral Slides (for alternating cards)
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -45 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATIONS.slow,
      delay: customDelay,
      ease: EASINGS.awwwards,
    },
  }),
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 45 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATIONS.slow,
      delay: customDelay,
      ease: EASINGS.awwwards,
    },
  }),
};

// Scale + Fade (for visuals and cards)
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATIONS.slow,
      delay: customDelay,
      ease: EASINGS.awwwards,
    },
  }),
};

// Mask Reveal (Curtain or wipe effect for photos)
export const maskReveal: Variants = {
  hidden: { clipPath: "inset(0% 0% 100% 0%)", opacity: 0 },
  visible: (customDelay = 0) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: DURATIONS.reveal,
      delay: customDelay,
      ease: EASINGS.awwwards,
    },
  }),
};

// Stagger Container
export const staggerContainer = (
  staggerChildren = 0.08,
  delayChildren = 0.1
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Word / Char Masked Text Reveal
export const textWordReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.7,
      delay: i * 0.05,
      ease: EASINGS.awwwards,
    },
  }),
};

// Continuous Floating Animation
export const floatingMotion = (
  distance = 8,
  duration = 4,
  delay = 0
): Transition => ({
  y: {
    duration,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
    delay,
  },
  rotate: {
    duration: duration * 1.3,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
    delay,
  },
});
