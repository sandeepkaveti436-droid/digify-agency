"use client";

import React from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery",
    serif: "Logic",
    desc: "A deep dive into your brand DNA and market landscape to find the winning strategy.",
  },
  {
    id: "02",
    title: "User",
    serif: "Flows",
    desc: "Mapping the architectural path of your users to ensure every click has a purpose.",
  },
  {
    id: "03",
    title: "Visual",
    serif: "System",
    desc: "Crafting a premium UI language that balances high-end aesthetics with function.",
  },
  {
    id: "04",
    title: "Final",
    serif: "Build",
    desc: "Turning pixels into high-performance, scalable code ready for a global launch.",
  },
];

const blurSlip = {
  hidden: { filter: "blur(15px)", opacity: 0, y: 25 },
  visible: (i: number) => ({
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 1,
      ease: [0.19, 1, 0.22, 1],
    },
  }),
};

export default function MethodologySection() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-14 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* 1. Header Area - Fixed Sizes as requested */}
        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={blurSlip}
            custom={0}
            className="flex items-center justify-center gap-3 mb-3"
          >
            <span className="w-8 h-[1px] bg-[#057fa5]/30" />
            <span className="text-[#057fa5] font-bold tracking-[0.4em] uppercase text-[12px]">
              Our Methodology
            </span>
            <span className="w-8 h-[1px] bg-[#057fa5]/30" />
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={blurSlip}
            custom={1}
            className="text-[20px] md:text-[32px] font-black text-[#011425] leading-tight tracking-tight"
          >
            A systematic path to digital <br className="hidden md:block" />
            <span className="font-serif italic font-light text-[#057fa5]">
              Excellence
            </span>
          </motion.h2>
        </div>

        {/* 2. Structural Timeline Grid */}
        <div className="relative md:h-[600px]">
          {/* Central Horizontal Axis Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1.5px] bg-[#057fa5] z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 md:gap-0 h-full relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 !== 0; // Steps 02 and 04

              return (
                <motion.div
                  key={step.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={blurSlip}
                  custom={idx + 2}
                  className={`relative flex flex-col items-center md:items-start group ${
                    isEven ? "md:pt-[300px]" : "md:pb-[300px] md:justify-end"
                  }`}
                >
                  {/* Vertical Line Anchor (Antenna) */}
                  {/* We position this at left-6 and push text further with pl-14 */}
                  <div
                    className={`hidden md:block absolute left-6 w-[1.5px] bg-gray-200 group-hover:bg-[#057fa5] transition-colors duration-500 ${
                      isEven ? "top-1/2 h-32" : "bottom-1/2 h-32"
                    }`}
                  />

                  {/* Central Node Dot (Centered on the line) */}
                  <div className="hidden md:block absolute top-1/2 left-[17px] -translate-y-1/2 w-[18px] h-[18px] rounded-full border-[3px] border-white bg-[#057fa5] group-hover:bg-[#057fa5] transition-all duration-500 z-20 shadow-sm" />

                  {/* Text Content - Shifted right to avoid the line */}
                  <div className="flex flex-col gap-5 text-center md:text-left md:pl-14 max-w-[300px]">
                    <div className="space-y-1">
                      <span className="text-[11px] font-black text-[#057fa5] tracking-[0.2em] uppercase">
                        Step {step.id}
                      </span>
                      <h3 className="text-[20px] md:text-[28px] font-extrabold text-[#011425] leading-tight group-hover:text-[#057fa5] transition-colors">
                        {step.title} <br />
                        <span className="font-serif italic font-light text-[#057fa5]">
                          {step.serif}
                        </span>
                      </h3>
                    </div>

                    <p className="text-gray-500 text-[15px] font-medium leading-relaxed">
                      {step.desc}
                    </p>

                    <div className="pt-2 m-4 flex justify-center md:justify-start">
                      <div className="w-12 h-12 rounded-full bg-[#057fa5] flex items-center justify-center transition-all duration-500 group-hover:bg-[#057fa5] group-hover:scale-105 shadow-lg">
                        <MoveRight className="text-white" size={20} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
