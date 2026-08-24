"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, Globe2, Zap, Rocket } from "lucide-react";

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

const avatars = [
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    x: -40,
    y: -20,
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    x: 60,
    y: -50,
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    x: 130,
    y: 10,
  },
  {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200",
    x: 10,
    y: 70,
  },
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    x: 160,
    y: 80,
  },
];

// Duplicate avatars for a seamless loop
const loopAvatars = [...avatars, ...avatars];

export default function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-16 px-6 md:px-12 lg:px-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* TOP ROW: Headline and Team Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={blurSlip}
              custom={0}
              className="text-[32px] md:text-[32px] font-extrabold text-[#0B1120] leading-[1.1] tracking-tight"
            >
              We are a creative <br />
              collective that 
              accelerates{" "} <br />
              <span className="font-serif italic font-light text-[#057fa5]">
                growth
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5 relative">
            {/* Background Stat */}
            <div className="text-center mb-14 lg:mb-0">
              <span className="text-[100px] md:text-[140px] font-black text-[#0B1120]/5 leading-none">
                55+
              </span>
              <p className="text-[12px] font-bold text-[#64748B] uppercase tracking-widest -mt-4">
                Team members
              </p>
            </div>

            {/* MOBILE ONLY: Infinite Looping Slider */}
            <div className="lg:hidden relative w-full overflow-hidden mt-4">
              <motion.div
                className="flex gap-4 w-fit"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {loopAvatars.map((avatar, i) => (
                  <div
                    key={i}
                    className="w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden shadow-md border-2 border-gray-50"
                  >
                    <img
                      src={avatar.src}
                      className="w-full h-full object-cover"
                      alt="team"
                    />
                  </div>
                ))}
              </motion.div>
              {/* Subtle gradient fades on edges */}
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />
            </div>

            {/* DESKTOP ONLY: Scattered Cluster Layout */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              {avatars.map((avatar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="absolute w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 pointer-events-auto"
                  style={{
                    left: `calc(50% + ${avatar.x}px)`,
                    top: `calc(50% + ${avatar.y}px)`,
                  }}
                >
                  <img
                    src={avatar.src}
                    className="w-full h-full object-cover"
                    alt="team"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* MIDDLE ROW: Info Cards (Centered on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <motion.div
            custom={1}
            variants={blurSlip}
            initial="hidden"
            whileInView="visible"
            className="text-center md:text-left space-y-4"
          >
            <div className="w-10 h-10 mx-auto md:mx-0 rounded-xl bg-[#057fa5]/5 flex items-center justify-center">
              <Rocket className="text-[#057fa5]" size={20} />
            </div>
            <h3 className="text-xl font-bold text-[#0B1120]">
              Strategic Velocity
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              We bridge the gap between high-end design and engineering to ship
              products that lead markets.
            </p>
          </motion.div>

          <motion.div
            custom={2}
            variants={blurSlip}
            initial="hidden"
            whileInView="visible"
            className="text-center md:text-left space-y-4"
          >
            <div className="w-10 h-10 mx-auto md:mx-0 rounded-xl bg-[#057fa5]/5 flex items-center justify-center">
              <Globe2 className="text-[#057fa5]" size={20} />
            </div>
            <h3 className="text-xl font-bold text-[#0B1120]">Global Team</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Our team operates globally to understand your market and users on
              a deeper level.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={blurSlip}
            initial="hidden"
            whileInView="visible"
            className="bg-gray-50/80 p-6 md:mt-12 rounded-[2rem] border border-gray-100 flex flex-col items-center md:items-start gap-4"
          >
            <p className="text-[12px] font-bold text-[#057fa5] uppercase tracking-widest">
              Learn about us with AI
            </p>
            <div className="flex gap-3">
              {[BrainCircuit, Sparkles, Zap].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-[#057fa5] shadow-sm flex items-center justify-center border border-gray-100 text-[#fff] hover:bg-[#057fa5] hover:text-white transition-all cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM ROW: Logos and Stats */}
        <div className="pt-10 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 flex flex-wrap gap-8 justify-center lg:justify-start opacity-90">
            <span className="font-black text-xl text-[#057fa5]">WORDPRESS</span>
            <span className="font-bold text-xl text-[#057fa5]">INTERPREFY</span>
            <span className="font-black text-xl text-[#057fa5]">
              BLOCKWORKS
            </span>
          </div>
          <div className="lg:col-span-4 flex justify-around lg:justify-end gap-12 text-center">
            <div>
              <p className="text-[12px] font-bold text-[#64748B] uppercase mb-1">
                Our clients raised
              </p>
              <h4 className="text-2xl font-black text-[#0B1120] tracking-tight">
                $1B+
              </h4>
            </div>
            <div>
              <p className="text-[12px] font-bold text-[#64748B] uppercase mb-1">
                Partnerships
              </p>
              <h4 className="text-2xl font-black text-[#0B1120] tracking-tight">
                320+
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
