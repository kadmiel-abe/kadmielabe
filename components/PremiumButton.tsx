"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface PremiumButtonProps {
  number: string;
  label: string;
  sublabel?: string;
  onClick?: () => void;
  href?: string;
  isExternal?: boolean;
  isLast?: boolean;
}

const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function PremiumButton({
  number,
  label,
  sublabel,
  onClick,
  href,
  isExternal,
  isLast = false,
}: PremiumButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative w-full border-t border-white/10 ${
        isLast ? "border-b border-white/10" : ""
      } py-5 sm:py-6 px-3 sm:px-5 transition-all duration-500 ease-luxe overflow-hidden select-none cursor-pointer`}
    >
      {/* Background sweep on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/[0.035] via-white/[0.02] to-transparent pointer-events-none"
        initial={{ opacity: 0, x: "-10%" }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? "0%" : "-10%" }}
        transition={{ duration: 0.45, ease: easeCurve }}
      />

      {/* Subtle indicator accent line that glides in from left */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#EDEDED]/40 via-[#EDEDED]/80 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: easeCurve }}
      />

      <div className="relative flex items-center justify-between z-10">
        {/* Left: Index number + Label */}
        <div className="flex items-baseline space-x-3 sm:space-x-4">
          <span className="text-[11px] sm:text-xs font-mono tracking-widest text-[#A1A1AA]/50 group-hover:text-[#34D368] transition-colors duration-400">
            {number}
          </span>
          <span className="font-sans text-sm sm:text-base font-medium tracking-[0.16em] uppercase text-[#EDEDED] group-hover:text-white transition-colors duration-300">
            {label}
          </span>
        </div>

        {/* Right: Subtitle badge & interactive arrow */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {sublabel && (
            <span className="hidden sm:inline-block text-[11px] font-sans tracking-wider text-[#A1A1AA]/60 uppercase group-hover:text-[#A1A1AA] transition-colors duration-300">
              {sublabel}
            </span>
          )}
          <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-white/25 flex items-center justify-center bg-white/[0.02] group-hover:bg-white/[0.08] transition-all duration-400">
            {isExternal ? (
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A1AA] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            ) : (
              <ArrowRight className="w-3.5 h-3.5 text-[#A1A1AA] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block w-full focus:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
    >
      {content}
    </button>
  );
}
