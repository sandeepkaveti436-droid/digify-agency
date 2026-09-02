"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { MoveDownRight, Layout, Code2, Users, Target } from "lucide-react";
import { SplitText } from "@/src/animations/SplitText";
import { BlurIn } from "@/src/animations/BlurIn";

// --- Custom Animation for Cards ---
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

export default function AboutSection() {
  return (
    <section className="bg-[#F8FAFC] py-12 md:py-32 px-4 md:px-12 font-manrope overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- 1. HEADER AREA --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-12 md:mb-20">
          <div className="text-left">
            <BlurIn delay={0.1}>
              <span className="text-[#057fa5] font-bold uppercase tracking-widest text-[10px] md:text-[11px] mb-4 md:mb-6 block">
                THE STUDIO
              </span>
            </BlurIn>
            <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#011425] leading-[1.2] md:leading-[1.1] tracking-tight">
              <SplitText text="Engineering products" delay={0.2} />
              <span className="font-serif italic font-light text-[#057fa5]">
                {" "}
                that scale businesses.
              </span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:pb-2"
          >
            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-xl font-medium">
              Digify is a high-performance digital agency. We bridge the gap
              between elite{" "}
              <span className="text-[#011425] font-bold">visual identity</span>{" "}
              and complex{" "}
              <span className="text-[#011425] font-bold">
                technical engineering
              </span>
              .
            </p>
          </motion.div>
        </div>

        {/* --- 2. VALUE GRID (Adjusted Spacing for Mobile) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
          <FeatureCard
            icon={<Layout size={22} />}
            title="UI/UX Design"
            desc="Conversion-first interfaces built on behavioral psychology."
            index={0}
          />
          <FeatureCard
            icon={<Code2 size={22} />}
            title="Development"
            desc="Scalable, secure code architectures using modern tech stacks."
            index={1}
          />
          <FeatureCard
            icon={<Target size={22} />}
            title="Product Strategy"
            desc="Data-driven roadmaps to navigate digital landscapes."
            index={2}
          />
          <FeatureCard
            icon={<Users size={22} />}
            title="Consulting"
            desc="Acting as a dedicated technical extension of your team."
            index={3}
          />
        </div>

        {/* --- 3. THE EXPERIENCE PANEL (Fixed Mobile Alignment) --- */}
        <div className="relative group rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-[1/1] sm:aspect-[16/9] md:aspect-[21/8] shadow-2xl border border-gray-100">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
            alt="Collaboration"
            fill
            className="object-cover transition-transform duration-1000 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#011425]/60 to-transparent md:bg-gradient-to-r" />

          {/* Internal floating stat card - Adjusted for Mobile Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-4 left-4 right-4 md:bottom-10 md:right-10 md:left-auto bg-white/95 backdrop-blur-xl p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl border border-white/40 max-w-full md:max-w-[300px]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#057fa5] shadow-[0_0_10px_#057fa5]" />
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Global Reach
              </span>
            </div>
            <h4 className="text-3xl md:text-4xl font-black text-[#011425] mb-2 tracking-tighter">
              $1.4B+
            </h4>
            <p className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase leading-normal tracking-tight">
              Total funding raised by our clients through design.
            </p>
          </motion.div>
        </div>

        {/* --- 4. CALL TO ACTION --- */}
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-gray-200 pt-12 md:pt-16">
          <div className="text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-extrabold text-[#011425]">
              Ready to build your legacy?
            </h4>
            <p className="text-sm md:text-base text-gray-500 font-medium mt-1">
              Discuss how we can engineer your growth.
            </p>
          </div>

          {/* Leaf & Pill Button - Scaled for Mobile */}
          <Link href="/contact" className="group flex items-center gap-2">
            <div className="bg-[#057fa5] w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] transition-all duration-500 group-hover:rotate-45 shadow-lg shadow-[#057fa5]/20">
              <MoveDownRight size={22} className="text-white md:hidden" />
              <MoveDownRight size={28} className="text-white hidden md:block" />
            </div>
            <div className="bg-[#057fa5] h-10 md:h-16 px-6 md:px-6 flex items-center justify-center rounded-full transition-all duration-500 group-hover:bg-[#011425] shadow-lg shadow-[#057fa5]/10">
              <span className="text-white font-bold text-[16px] md:text-[16px] tracking-widest uppercase">
                Start Project
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
  index,
}: {
  icon: any;
  title: string;
  desc: string;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="text-[#057fa5] mb-6 inline-block p-3 bg-[#057fa5]/5 rounded-xl group-hover:bg-[#057fa5] group-hover:text-white transition-colors duration-500">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-[#011425] mb-3">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium">
        {desc}
      </p>
    </motion.div>
  );
}
