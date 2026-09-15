"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

// --- 1. UPDATED DATA WITH THEME-SPECIFIC IMAGES ---
const projects = [
  {
    id: "01",
    title: "Orvixas",
    serif: "Agency",
    category: "Digital Agency",
    year: "2024",
    slug: "orvixas",
    liveUrl: "https://orvixas.vercel.app/",
    // A modern, high-end agency/marketing visual
    image: "../../website/orvix.png",
  },
  {
    id: "02",
    title: "SkyNova",
    serif: "Digitals",
    category: "Digital Studio",
    year: "2024",
    slug: "skynova",
    liveUrl: "https://skynovadigitals.vercel.app/",
    // A futuristic, tech-focused digital studio visual
    image: "../../website/snd.png",
  },
  {
    id: "03",
    title: "Staff",
    serif: "Management",
    category: "HR Admin Dashboard",
    year: "2024",
    slug: "hr-admin",
    liveUrl: "https://hradmin-staffmanagement.vercel.app/",
    // A clean, analytical dashboard/management visual
    image: "../../website/hr.png",
  },
  {
    id: "04",
    title: "Aura Flow",
    serif: "Yoga",
    category: "Wellness Platform",
    year: "2024",
    slug: "aura-yoga",
    liveUrl: "https://auraflow-yoga.vercel.app/",
    // A serene, minimalist wellness/yoga visual
    image: "../../website/yoga.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
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

export default function PremiumPortfolio() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24 font-manrope">
      {/* 1. Header Section */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#057fa5] font-bold tracking-[0.4em] uppercase text-[12px] block mb-2"
        >
          Featured Cases
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[32px] md:text-[42px] font-extrabold text-[#011425] leading-[1.2] tracking-tight max-w-4xl mx-auto uppercase"
        >
          Transforming vision into <br /> high-performance{" "}
          <span className="font-serif italic font-light text-[#057fa5] lowercase">
            products
          </span>
        </motion.h2>
      </div>

      {/* 2. Responsive Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col group"
          >
            {/* Card Image Area */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-gray-50 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Simplified Hover Overlay */}
              <div className="absolute inset-0 bg-[#011425]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {/* Internal Case Study Link */}
                <Link
                  href={`/works/${project.slug}`}
                  className="bg-white text-[#011425] p-4 rounded-full hover:bg-[#057fa5] hover:text-white transition-all transform hover:scale-110 shadow-xl"
                  title="View Case Study"
                >
                  <FileText size={22} />
                </Link>

                {/* External Live Site Link */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D4FF00] text-[#011425] p-4 rounded-full hover:bg-white transition-all transform hover:scale-110 shadow-xl"
                  title="Visit Live Website"
                >
                  <ExternalLink size={22} />
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className="mt-6 space-y-1">
              <span className="text-[10px] font-bold text-[#057fa5] tracking-widest uppercase">
                {project.category}
              </span>
              <Link href={`/works/${project.slug}`}>
                <h3 className="text-[22px] font-bold text-[#011425] hover:text-[#057fa5] transition-colors leading-tight">
                  {project.title}{" "}
                  <span className="font-serif italic font-light">
                    {project.serif}
                  </span>
                </h3>
              </Link>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">
                  {project.year}
                </span>
                <Link
                  href={`/works/${project.slug}`}
                  className="text-[10px] font-black text-[#011425] uppercase tracking-widest border-b border-gray-200 hover:border-[#057fa5] transition-all"
                >
                  See Case Study
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. View All Button Section */}
      <div className="flex flex-col items-center">
        <Link
          href="/allworks"
          className="group flex flex-col items-center gap-4"
        >
          <div className="w-14 h-14 rounded-[22px] bg-[#057fa5] flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-45">
            <ArrowUpRight size={28} className="text-white" />
          </div>
          <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[#011425] text-center">
            View All <br /> Collections
          </p>
        </Link>
      </div>
    </section>
  );
}
