"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ExternalLink, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SplitText } from "@/src/animations/SplitText";
import { allProjects } from "@/src/data/projects";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, filter: "blur(15px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

export default function AllWorksPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 font-manrope">
      <div className="max-w-[1440px] mx-auto">
        {/* Title Section */}
        <div className="mb-24">
          <h1 className="text-6xl md:text-[60px] font-black tracking-tighter text-[#011425] leading-[0.85] uppercase">
            <SplitText text="ALL" delay={0.1} />
            <div className="flex items-baseline gap-4">
              <span className="font-serif italic font-light text-[#057fa5] normal-case">
                <SplitText text="Works" delay={0.3} />
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 0.6, duration: 1 }}
                className="h-2 bg-[#D4FF00] hidden md:block"
              />
            </div>
          </h1>
        </div>

        {/* 4-COLUMN GRID - Desktop: 4 columns, Tablet: 2 columns, Mobile: 1 column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
          {allProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              custom={idx % 8} // Staggered animation based on index
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group"
            >
              {/* Image Container with Interaction Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-gray-50 border border-gray-100 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-[#057fa5]/10">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Interaction Overlay with Links */}
                <div className="absolute inset-0 bg-[#011425]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  {/* Case Study Link (Internal) */}
                  <Link
                    href={`/works/${project.slug}`}
                    aria-label={`View case study for ${project.title}`}
                    className="bg-white text-[#011425] p-3.5 rounded-full hover:bg-[#057fa5] hover:text-white transition-all transform hover:scale-110 shadow-xl"
                  >
                    <FileText size={20} />
                  </Link>

                  {/* Live URL Link (External) */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live website for ${project.title}`}
                    onClick={(e) => e.stopPropagation()} // Prevent bubbling up to any potential parent link
                    className="bg-[#D4FF00] text-[#011425] p-3.5 rounded-full hover:bg-white transition-all transform hover:scale-110 shadow-xl"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Text Details */}
              <div className="mt-8 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-[#057fa5] tracking-[0.3em] uppercase">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest italic">
                    {project.year}
                  </span>
                </div>

                {/* Animated Project Title with SplitText */}
                <Link href={`/works/${project.slug}`} className="block">
                  <h3 className="text-[22px] font-extrabold text-[#011425] hover:text-[#057fa5] transition-colors leading-none tracking-tight">
                    <SplitText text={project.title} delay={0.2} />{" "}
                    <span className="font-serif italic font-light">
                      <SplitText text={project.serif} delay={0.4} />
                    </span>
                  </h3>
                </Link>
                {/* Underline Hover Animation */}
                <div className="w-0 group-hover:w-full h-[1px] bg-[#D4FF00] transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
