"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Brand Logo Data (Placeholders)
const logos = [
  "TRUSTED BY",
  "Aura",
  "Quantum",
  "Nexus",
  "Starlight",
  "Fintech",
  "Healthify",
];

const blurSlip = {
  hidden: { filter: "blur(15px)", opacity: 0, y: 30 },
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

export default function TestimonialSection() {
  return (
    <section className="bg-white py-2 md:py-4 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* 1. KINETIC LOGO MARQUEE (World-Class Social Proof) */}
        <div className="mb-14 relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap gap-8 md:gap-20 items-center"
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...logos, ...logos].map((logo, i) => (
                <span
                  key={i}
                  className={`text-[18px] md:text-[24px] font-black tracking-tighter transition-colors duration-500
                    ${logo === "TRUSTED BY" ? "text-[#057fa5]" : "text-[#0B1120]/10 hover:text-[#0B1120] cursor-default"}
                  `}
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
          {/* Fades on edges for professional look */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        </div>

        {/* 2. CINEMATIC TESTIMONIAL (Editorial Style) */}
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={blurSlip}
            custom={0}
            className="mb-8 flex justify-center md:justify-start"
          >
            <div className="w-10 h-12 rounded-2xl bg-[#057fa5]/5 flex items-center justify-center">
              <Quote className="text-[#057fa5]" size={24} fill="currentColor" />
            </div>
          </motion.div>

          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={blurSlip}
            custom={1}
            className="text-[20px] md:text-[32px] font-bold text-[#0B1120] leading-[1.1] tracking-tight mb-12"
          >
            "The team didn't just design a website; they engineered an
            <span className="font-serif italic font-light text-[#057fa5]">
              {" "}
              ecosystem{" "}
            </span>
            that converted our vision into a
            <span className="font-serif italic font-light text-[#057fa5]">
              {" "}
              market-leading{" "}
            </span>
            digital reality."
          </motion.h3>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="w-12 h-16 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150"
                alt="CEO"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={blurSlip}
              custom={2}
              className="text-center md:text-left"
            >
              <p className="text-lg font-bold text-[#0B1120]">
                Alexander Thorne
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#64748B]">
                CEO @ Quantum Dynamics
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
