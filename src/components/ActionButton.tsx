"use client";

import React from "react";
import { ArrowDownRight, ArrowUp } from "lucide-react";

interface ActionButtonProps {
  label: string;
  onClick?: () => void;
  className?: string; // To allow passing custom margins or positioning
}

export default function ActionButton({
  label,
  onClick,
  className = "",
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-2 cursor-pointer transition-all duration-500 ${className}`}
    >
      {/* 1. The Morphing Icon Container */}
      <div
        className={`relative w-12 h-12 flex items-center justify-center transition-all duration-500 ease-in-out text-white
          bg-[#057fa5] group-hover:bg-[#242424]
          /* Normal: Sharp Top-Left */
          rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] rounded-tl-none
          /* Hover: Sharp Bottom-Left */
          group-hover:rounded-tl-[28px] group-hover:rounded-tr-[28px] group-hover:rounded-br-[28px] group-hover:rounded-bl-none`}
      >
        <ArrowDownRight
          className="absolute transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:rotate-45"
          size={24}
          strokeWidth={2.5}
        />
        <ArrowUp
          className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100"
          size={24}
          strokeWidth={2.5}
        />
      </div>

      {/* 2. The Text Pill */}
      <div
        className={`h-12 px-10 flex items-center justify-center rounded-full transition-all duration-500 ease-in-out text-white font-bold text-lg whitespace-nowrap
          bg-[#057fa5] group-hover:bg-[#242424]`}
      >
        {label}
      </div>
    </button>
  );
}
