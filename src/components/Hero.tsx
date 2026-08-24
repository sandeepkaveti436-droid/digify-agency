"use client";

import React, { useState } from "react";
import { Play, X } from "lucide-react";
import Image from "next/image";
import ActionButton from "@/src/components/ActionButton";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-24 pb-16 overflow-hidden">
      {/* 1. IMMERSIVE BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img-2.png"
          alt="Professional working"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Overlay to make text pop - matching the reference style */}
        <div className="absolute inset-0 bg-black/20 backdrop-brightness-75" />
        {/* Subtle Brand Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#011425]/40 to-[#011425]" />
      </div>

      {/* 2. TOP LABEL */}
      <div className="w-full text-center mb-8 animate-in fade-in slide-in-from-top-4 duration-1000 z-10">
        <span className="text-white text-[12px] uppercase font-bold tracking-[0.3em] opacity-80">
          Digital Product Design And Development Company
        </span>
      </div>

      {/* 3. MAIN HEADLINE (Changed text to white for contrast) */}
      <div className="max-w-6xl mx-auto text-center z-10">
        <h1 className="text-[32px] md:text-[64px] font-extrabold leading-[1.15] tracking-tight text-white">
          Your design & dev partner that <br className="hidden md:block" />
          unites{" "}
          <span className="font-serif italic glass-pill mx-1 text-white bg-[#057fa5]">
            brand
          </span>
          <span className="text-white/60 mx-1">,</span>
          <span className="font-serif italic glass-pill mx-2 text-white bg-[#057fa5] border-white/20">
            website
          </span>
          <span className="text-white/60 mx-1">,</span>
          <span className="font-serif italic glass-pill mx-1 text-white bg-[#057fa5] border-white/20">
            ui/ux design
          </span>
          <div className="flex items-center justify-center flex-wrap gap-6 mt-8">
            {/* Video Preview Card */}
            <div
              onClick={() => setIsVideoOpen(true)}
              className="relative w-32 h-18 md:w-44 md:h-24 rounded-2xl overflow-hidden cursor-pointer group shadow-2xl border-4 border-white/20"
            >
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400"
                alt="Digital Product Preview"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md rounded-full px-5 py-2 flex items-center gap-2 text-[11px] font-bold text-black shadow-lg transition-transform group-hover:scale-110">
                  <Play size={12} fill="currentColor" /> Play
                </div>
              </div>
            </div>

            <span className="font-bold">
              into a holistic{" "}
              <span className="font-serif italic font-medium text-white/90">
                product
              </span>
            </span>
          </div>
        </h1>
      </div>

      {/* 4. CENTERED ACTION BUTTON */}
      <div className="mt-16 flex justify-center w-full z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
        <ActionButton
          label="Book a Call"
          onClick={() => (window.location.href = "/contact")}
        />
      </div>

      {/* 5. VIDEO POPUP MODAL */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in duration-300">
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
          >
            <X size={40} strokeWidth={1.5} />
          </button>

          <div className="w-full max-w-5xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
            {/* Use your actual video path here */}
            <video className="w-full h-full" controls autoPlay>
              <source src="/video/video-1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
