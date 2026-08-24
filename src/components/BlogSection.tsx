"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    category: "Strategy",
    title: "How Premium UI/UX Design Accelerates SaaS Growth in 2024",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bbbda5165867?q=80&w=1000",
    featured: true,
  },
  {
    id: 2,
    category: "Development",
    title: "Building Scalable Digital Products with Next.js & Tailwind",
    date: "Oct 08, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
    featured: false,
  },
  {
    id: 3,
    category: "Design",
    title: "The Role of Brand Identity in Venture Capital Funding",
    date: "Sep 28, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=800",
    featured: false,
  },
];

const blurSlip = {
  hidden: { filter: "blur(12px)", opacity: 0, y: 20 },
  visible: (i: number) => ({
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

export default function BlogSection() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* 1. SEO-OPTIMIZED HEADER */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial="hidden"
              whileInView="visible"
              variants={blurSlip}
              custom={0}
              className="text-[#2563EB] font-black uppercase tracking-[0.3em] text-[12px] block mb-4"
            >
              Latest Intelligence
            </motion.span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={blurSlip}
              custom={1}
              className="text-[32px] md:text-[54px] font-extrabold text-[#011425] leading-[1.1] tracking-tight"
            >
              Insights on{" "}
              <span className="font-serif italic font-light text-[#2563EB]">
                Product & Design
              </span>
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="group flex items-center gap-2 text-[#011425] font-bold text-sm border-b-2 border-[#2563EB] pb-1"
          >
            View all articles{" "}
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </motion.button>
        </div>

        {/* 2. EDITORIAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Featured Post (Left) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={blurSlip}
            custom={2}
            className="lg:col-span-7 group cursor-pointer"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-gray-100 mb-8">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-[#2563EB] uppercase tracking-widest">
                {blogPosts[0].category}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-6 text-gray-400 text-xs font-bold">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} /> {blogPosts[0].date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} /> {blogPosts[0].readTime}
                </span>
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold text-[#011425] leading-tight group-hover:text-[#2563EB] transition-colors">
                {blogPosts[0].title}
              </h3>
            </div>
          </motion.div>

          {/* Secondary Posts (Right Stack) */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            {blogPosts
              .filter((p) => !p.featured)
              .map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial="hidden"
                  whileInView="visible"
                  variants={blurSlip}
                  custom={idx + 3}
                  className="group flex gap-6 items-start cursor-pointer border-b border-gray-100 pb-8 last:border-0"
                >
                  <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden rounded-3xl bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] font-black text-[#2563EB] uppercase tracking-widest">
                      {post.category}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold text-[#011425] leading-snug group-hover:text-[#2563EB] transition-colors line-clamp-3">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-tighter">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
