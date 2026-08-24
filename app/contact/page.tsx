"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  User,
  Mail,
  MessageSquare,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Leaf,
  Zap,
} from "lucide-react";

// --- 1. ANIMATION VARIANTS (FIXED FOR TYPESCRIPT) ---

const blurSlipVariants: Variants = {
  hidden: {
    filter: "blur(12px)",
    opacity: 0,
    y: 30,
  },
  visible: (i: number) => ({
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      // Added "as const" to fix the Easing type error
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

export default function AgencyContactPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <main className="min-h-screen w-full bg-[#057fa5] lg:h-screen lg:overflow-hidden flex items-center justify-center p-4 md:p-8 font-manrope">
      <div className="w-full max-w-[1440px] h-full lg:h-[90vh] bg-[#057fa5] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row relative shadow-2xl border-4 border-[#fff]">
        {/* LEFT SIDE: IMAGE PANEL */}
        <section className="relative w-full lg:w-[45%] h-[300px] lg:h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000"
            alt="Agency Experience"
            className="w-full h-full object-cover grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

          {/* Floating Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-[#057fa5] backdrop-blur-xl p-4 md:p-6 rounded-2xl md:rounded-[2rem] border border-white/10 flex items-center gap-4"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#D4FF00] flex items-center justify-center text-black">
              <Leaf size={20} />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Digify Strategy</p>
              <p className="text-white/50 text-[10px] uppercase tracking-widest">
                Growth Focused.
              </p>
            </div>
          </motion.div>
        </section>

        {/* 3. PINCH DIVIDER (Desktop Only) */}
        <div className="hidden lg:block absolute left-[45%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
          <div className="relative flex items-center justify-center">
            <svg
              width="120"
              height="240"
              viewBox="0 0 120 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M120 0C60 0 0 60 0 120C0 180 60 240 120 240V0Z"
                fill="#057fa5"
              />
            </svg>
            <div className="absolute left-4 flex flex-col gap-2">
              <div className="w-6 h-2 bg-white rounded-full" />
              <div className="w-2 h-2 bg-white/20 rounded-full" />
              <div className="w-2 h-2 bg-white/20 rounded-full" />
            </div>
          </div>
        </div>

        {/* 4. RIGHT SIDE: FORM PANEL */}
        <section className="flex-1 h-full bg-[#fff] relative overflow-y-auto custom-scrollbar">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#057fa5]/5 blur-[100px] rounded-full" />

          <div className="relative z-10 w-full p-8 md:p-16 flex flex-col items-center">
            <div className="w-full max-w-[480px]">
              {/* Header with Blur Slip */}
              <div className="mb-12">
                <motion.span
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={blurSlipVariants}
                  className="text-[#057fa5] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block"
                >
                  Project Discovery
                </motion.span>
                <motion.h1
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={blurSlipVariants}
                  className="text-[32px] md:text-[42px] font-black text-[#011425] leading-tight tracking-tighter"
                >
                  Let's Build <br /> Something{" "}
                  <span className="font-serif italic font-light text-[#057fa5]">
                    Iconic.
                  </span>
                </motion.h1>
              </div>

              {/* Form Area */}
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    className="bg-white/60 backdrop-blur-xl p-10 rounded-[2rem] border border-gray-100 text-center shadow-xl"
                  >
                    <CheckCircle2
                      size={60}
                      className="text-[#057fa5] mx-auto mb-4"
                    />
                    <h2 className="text-2xl font-black text-[#011425]">
                      Message Sent
                    </h2>
                    <p className="text-gray-500 mt-2">
                      We'll be in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-6 text-sm font-bold text-[#057fa5] underline"
                    >
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setIsSuccess(true);
                    }}
                    className="space-y-6"
                  >
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={blurSlipVariants}
                        className="space-y-2"
                      >
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#011425]/60 ml-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <User
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            size={16}
                          />
                          <input
                            required
                            type="text"
                            placeholder="John Doe"
                            className="agency-input"
                          />
                        </div>
                      </motion.div>
                      <motion.div
                        custom={3}
                        initial="hidden"
                        animate="visible"
                        variants={blurSlipVariants}
                        className="space-y-2"
                      >
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#011425]/60 ml-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            size={16}
                          />
                          <input
                            required
                            type="email"
                            placeholder="john@agency.com"
                            className="agency-input"
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Row 2 */}
                    <motion.div
                      custom={4}
                      initial="hidden"
                      animate="visible"
                      variants={blurSlipVariants}
                      className="space-y-2"
                    >
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#011425]/60 ml-2">
                        Interest
                      </label>
                      <div className="relative">
                        <Zap
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          size={16}
                        />
                        <select className="agency-input appearance-none">
                          <option>Design & Branding</option>
                          <option>Web Development</option>
                          <option>Full Product Build</option>
                        </select>
                        <ChevronDown
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                          size={16}
                        />
                      </div>
                    </motion.div>

                    {/* Row 3 */}
                    <motion.div
                      custom={5}
                      initial="hidden"
                      animate="visible"
                      variants={blurSlipVariants}
                      className="space-y-2"
                    >
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#011425]/60 ml-2">
                        Your Brief
                      </label>
                      <div className="relative">
                        <MessageSquare
                          className="absolute left-4 top-5 text-gray-400"
                          size={16}
                        />
                        <textarea
                          rows={4}
                          placeholder="How can we help you grow?"
                          className="agency-input h-32 pt-4 resize-none"
                        />
                      </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      custom={6}
                      initial="hidden"
                      animate="visible"
                      variants={blurSlipVariants}
                    >
                      <button
                        type="submit"
                        className="w-full group h-16 bg-[#057fa5] hover:bg-black text-white rounded-2xl flex items-center justify-between px-8 transition-all duration-300"
                      >
                        <span className="text-white font-black text-lg">
                          Send Inquiry
                        </span>
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#fff] transition-all duration-500">
                          <ArrowRight
                            size={20}
                            className="text-white group-hover:text-[#057fa5] transition-colors"
                          />
                        </div>
                      </button>
                    </motion.div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .agency-input {
          width: 100%;
          height: 3.5rem;
          padding-left: 3rem;
          padding-right: 1rem;
          background-color: rgba(243, 244, 246, 0.8);
          border: 1px solid rgba(1, 20, 37, 0.05);
          border-radius: 1rem;
          color: #011425;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
        }
        .agency-input:focus {
          outline: none;
          border-color: #057fa5;
          background-color: white;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #057fa5;
          border-radius: 10px;
        }
      `}</style>
    </main>
  );
}
