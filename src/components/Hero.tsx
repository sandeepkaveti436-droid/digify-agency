"use client";

import React, { useState } from "react";
import { Play, X, MoveDownRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SplitText } from "@/src/animations/SplitText";
import { BlurIn } from "@/src/animations/BlurIn";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 overflow-hidden font-manrope">
      {/* 1. IMMERSIVE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img-2.png"
          alt="Professional working"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlays to match the reference style */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#011425]/60 via-transparent to-[#011425]" />
      </div>

      {/* 2. TOP LABEL - Blurs In first */}
      <div className="w-full text-center mb-8 z-10">
        <BlurIn>
          <span className="text-white text-[14px] md:text-[14px] uppercase font-medium tracking-[0.18em] opacity-90">
            Digital Product Design And Development Agency
          </span>
        </BlurIn>
      </div>

      {/* 3. MAIN HEADLINE - Split by words with Blur/Slip effect */}
      <div className="max-w-6xl mx-auto text-center z-10">
        <h1 className="text-[28px] md:text-[42px] font-extrabold leading-[1.05] tracking-tighter text-white">
          <SplitText
            text="Your design & dev partner that unites"
            className="justify-center"
            delay={0.2}
          />

          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <motion.span
              initial={{ filter: "blur(10px)", opacity: 0, scale: 0.9 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="font-serif italic px-6 py-1 rounded-full bg-[#057fa5] text-white border border-white/20 text-[32px] md:text-[42px] leading-none"
            >
              brand
            </motion.span>

            <SplitText text="," className="text-white/90" delay={0.9} />

            <motion.span
              initial={{ filter: "blur(10px)", opacity: 0, scale: 0.9 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="font-serif italic px-6 py-1 rounded-full bg-[#057fa5] text-white border border-white/20 text-[32px] md:text-[42px] leading-none"
            >
              website
            </motion.span>

            <SplitText text="&" className="text-white/90 mx-2" delay={1.2} />

            <motion.span
              initial={{ filter: "blur(10px)", opacity: 0, scale: 0.9 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="font-serif italic px-6 py-1 rounded-full bg-[#057fa5] text-white border border-white/20 text-[32px] md:text-[42px] leading-none"
            >
              ui/ux design
            </motion.span>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-8 mt-10">
            {/* Video Preview Card - Slides up later */}
            <motion.div
              initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 1.8, duration: 0.8 }}
              onClick={() => setIsVideoOpen(true)}
              className="relative w-36 h-20 md:w-56 md:h-32 rounded-[2rem] overflow-hidden cursor-pointer group shadow-2xl border-4 border-white/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400"
                alt="Preview"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="bg-white rounded-full p-3 shadow-xl transition-transform group-hover:scale-125">
                  <Play
                    size={16}
                    fill="#057fa5"
                    className="text-[#057fa5] ml-1"
                  />
                </div>
              </div>
            </motion.div>

            <div className="text-left">
              <SplitText
                text="into a holistic"
                className="text-4xl md:text-7xl font-black"
                delay={2.0}
              />
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.4 }}
                className="font-serif italic font-light text-[#fff] text-4xl md:text-7xl ml-4"
              >
                product.
              </motion.span>
            </div>
          </div>
        </h1>
      </div>

      {/* 4. CENTERED ACTION BUTTON - Final reveal */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        className="mt-20 flex justify-center w-full z-10"
      >
        <Link href="/contact" className="group flex items-center gap-3">
          <div className="bg-[#057fa5] w-12 h-12 flex items-center justify-center rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] transition-all duration-500 group-hover:rounded-tl-[28px] group-hover:rounded-tr-[0px] shadow-xl">
            <MoveDownRight size={28} className="text-white" />
          </div>
          <div className="bg-[#057fa5] h-12 px-6 flex items-center justify-center rounded-full shadow-xl group-hover:bg-[#011425] transition-colors duration-500">
            <span className="text-white font-black text-xl tracking-tight uppercase">
              Book a Call
            </span>
          </div>
        </Link>
      </motion.div>

      {/* 5. VIDEO MODAL */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-10 right-10 text-white/50 hover:text-white"
            >
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-[3rem] overflow-hidden border border-white/10"
            >
              <video className="w-full h-full" controls autoPlay>
                <source src="/video/video-1.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
