"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Quantum",
    serif: "Dynamics",
    category: "Fintech Interface",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
  },
  {
    id: "02",
    title: "Aura",
    serif: "Skincare",
    category: "Brand Identity",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1200",
  },
  {
    id: "03",
    title: "Nexus",
    serif: "Robotics",
    category: "Industrial UI/UX",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
  },
  {
    id: "04",
    title: "Starlight",
    serif: "Media",
    category: "Streaming UI",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1200",
  },
];

const blurSlip = {
  hidden: { filter: "blur(12px)", opacity: 0, y: 25 },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function PremiumPortfolio() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section className="bg-white">
      {/* 1. Centered Header */}
      <div className="pt-20 pb-8 px-6 md:px-12 lg:px-24 text-center">
        <motion.span
          initial="hidden"
          whileInView="visible"
          variants={blurSlip}
          className="text-[#057fa5] font-bold tracking-[0.4em] uppercase text-[12px] block mb-2"
        >
          Selected Works
        </motion.span>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={blurSlip}
          className="text-[20px] md:text-[32px] font-extrabold text-[#011425] leading-[1.1] tracking-tight max-w-4xl mx-auto"
        >
          Elevating digital <br />
          standards through{" "}
          <span className="font-serif italic font-light text-[#057fa5]">
            Design
          </span>
        </motion.h2>
      </div>

      {/* 2. MOBILE VIEW: Line-wise Vertical Stack */}
      <div className="flex flex-col lg:hidden px-6 pb-20 gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={blurSlip}
            className="space-y-4"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-gray-100 bg-gray-50">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                <ArrowUpRight size={18} className="text-[#011425]" />
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[12px] font-bold text-[#057fa5] tracking-widest uppercase">
                {project.category}
              </span>
              <h3 className="text-[20px] font-bold text-[#011425]">
                {project.title}{" "}
                <span className="font-serif italic font-light text-[#057fa5]">
                  {project.serif}
                </span>
              </h3>
            </div>
          </motion.div>
        ))}

        {/* MOBILE VIEW ALL BUTTON - Added here */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={blurSlip}
          className="flex flex-col items-center justify-center py-10"
        >
          <button className="group flex flex-col items-center space-y-4">
            <div className="w-12 h-12 bg-[#057fa5] rounded-full border border-gray-200 flex items-center justify-center active:bg-[#057fa5] transition-all">
              <ArrowUpRight
                size={24}
                className="text-[#fff] active:text-white"
              />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#011425]">
              See All Case Studies
            </p>
          </button>
        </motion.div>
      </div>

      {/* 3. DESKTOP VIEW: Cinematic Horizontal */}
      <div ref={targetRef} className="hidden lg:block relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex items-end gap-12 mb-40 px-12"
          >
            {projects.map((project, idx) => (
              <div key={idx} className="relative shrink-0 w-[30vw] group">
                <div className="relative aspect-[10/6] overflow-hidden rounded-[2.5rem] bg-gray-50 border border-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#011425]/10 group-hover:bg-[#057fa5]/20 transition-all duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 shadow-2xl flex items-center justify-center">
                      <ArrowUpRight
                        size={28}
                        className="text-[#011425]"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-between items-start">
                  <div>
                    <span className="text-[12px] font-bold text-[#057fa5] tracking-widest uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-[20px] font-extrabold text-[#011425] mt-2 transition-transform group-hover:translate-x-2">
                      {project.title}{" "}
                      <span className="font-serif italic font-light text-[#057fa5]">
                        {project.serif}
                      </span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-gray-300 mt-4">
                    {project.year}
                  </span>
                </div>
              </div>
            ))}

            {/* View All Terminal - Desktop */}
            <div className="shrink-0 w-[30vw] flex flex-col items-center justify-center pb-20">
              <button className="group space-y-6">
                <div className="w-24 h-24 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#011425] group-hover:border-[#011425] transition-all duration-500">
                  <ArrowUpRight
                    size={40}
                    className="text-[#011425] group-hover:text-white transition-colors"
                  />
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#011425]">
                  See All Case Studies
                </p>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
