"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Layout,
  Cpu,
} from "lucide-react";

const serviceData = [
  {
    category: "Branding",
    icon: <Sparkles className="text-[#057fa5]" size={20} />,
    items: [
      "Pitch Deck",
      "Brand Identity",
      "Logo Design",
      "Graphic Design",
      "Rebranding",
    ],
  },
  {
    category: "Design",
    icon: <Layout className="text-[#057fa5]" size={20} />,
    items: [
      "UI/UX Design",
      "Web Design",
      "Mobile App Design",
      "Website Redesign",
      "UX/UI Audit",
    ],
  },
  {
    category: "Development",
    icon: <Cpu className="text-[#057fa5]" size={20} />,
    items: [
      "Web Development",
      "MVP Development",
      "WebFlow Development",
      "Landing Page",
      "Mobile Development",
    ],
  },
];

const blurSlipVariants = {
  hidden: { filter: "blur(12px)", opacity: 0, y: 30 },
  visible: (i: number) => ({
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.9,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-14 md:py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* 1. Centered Header Section for all devices */}
      <div className="max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center text-center space-y-4">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#057fa5] font-bold tracking-[0.3em] uppercase text-[12px] block"
        >
          Capabilities
        </motion.span>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={blurSlipVariants}
          className="text-[32px] md:text-[54px] font-extrabold text-[#011425] leading-[1.1] tracking-tight"
        >
          Tailored{" "}
          <span className="font-serif italic font-light text-[#057fa5]">
            Digital Solutions
          </span>
        </motion.h2>
      </div>

      {/* 2. Services Container */}
      <div className="max-w-7xl mx-auto">
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar gap-6 md:gap-0"
        >
          {serviceData.map((section, idx) => (
            <div
              key={section.category}
              className="min-w-full md:min-w-0 snap-center md:snap-align-none px-0 md:px-12 first:pl-0 last:pr-0 border-gray-100 md:border-r last:border-r-0"
            >
              <div className="bg-[#F8FAFC] md:bg-transparent rounded-[2.5rem] md:rounded-none p-8 md:p-0 h-full">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-10 rounded-xl bg-[#057fa5]/5 flex items-center justify-center border border-[#057fa5]/10">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#057fa5]">
                    {section.category}
                  </h3>
                </div>

                <div className="space-y-1">
                  {section.items.map((item, itemIdx) => (
                    <motion.div
                      key={item}
                      custom={itemIdx + idx * 3}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={blurSlipVariants}
                      className="group/item flex items-center justify-between py-4 border-b border-gray-200 md:border-gray-100 cursor-pointer"
                    >
                      <span className="text-gray-500 group-hover/item:text-[#011425] group-hover/item:pl-2 transition-all duration-300 font-medium text-lg">
                        {item}
                      </span>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover/item:opacity-100 bg-[#057fa5] transition-all duration-300">
                        <ArrowUpRight size={14} className="text-white" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Mobile Navigation Arrows (Now placed AFTER the cards) */}
        <div className="flex md:hidden justify-center items-center gap-4 mt-6">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-[18px] border border-gray-200 flex items-center justify-center active:scale-90 transition-all bg-white shadow-sm"
          >
            <ArrowLeft size={24} className="text-[#057fa5]" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-[18px] bg-[#057fa5] flex items-center justify-center active:scale-90 transition-all shadow-lg"
          >
            <ArrowRight size={24} className="text-white" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
