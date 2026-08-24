"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Mail } from "lucide-react";
import ActionButton from "@/src/components/ActionButton";

const faqData = [
  {
    question: "Is Digify the right fit for my business?",
    answer:
      "We specialize in working with ambitious SaaS and Tech companies that value design as a strategic competitive advantage. If you're looking to scale fast with a premium product, we're a perfect match.",
  },
  {
    question: "What types of companies do you work with?",
    answer:
      "Our portfolio spans from venture-backed startups to established enterprise brands in the Fintech, AI, and E-commerce sectors.",
  },
  {
    question: "Can you work with our existing internal team?",
    answer:
      "Absolutely. We often act as an extension of internal product teams, providing high-level strategy and execution where you need it most.",
  },
  {
    question: "Do you handle both design and development?",
    answer:
      "Yes. We provide a holistic 'Design-to-Code' workflow. Our designers and engineers work in the same files to ensure zero friction during launch.",
  },
  {
    question: "How do projects usually start?",
    answer:
      "Every partnership begins with a Discovery Session where we map out your goals, technical constraints, and desired outcomes.",
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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-12 md:py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
        {/* LEFT SIDE: HEADER & WHITE CTA CARD */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={blurSlip}
              custom={0}
              className="text-[20px] md:text-[32px] font-extrabold text-[#011425] leading-[1.1] tracking-tight"
            >
              Got Questions? <br />
              <span className="font-serif italic font-light text-[#057fa5]">
                We've Got Answers
              </span>
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={blurSlip}
              custom={1}
              className="text-gray-500 text-lg font-medium leading-relaxed max-w-sm"
            >
              If you’re unsure where to start or want to see how we can help,
              reach out, and we’ll walk you through it.
            </motion.p>
          </div>

          {/* THE CLEAN WHITE CTA CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[#F8FAFC] border border-gray-100 rounded-[2.5rem] p-10 shadow-2xl shadow-gray-200/30 relative overflow-hidden group"
          >
            {/* Subtle Brand Mesh Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#057fa5]/5 blur-3xl rounded-full" />

            <div className="relative z-10 space-y-8">
              <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
                  alt="Expert Consultant"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-[#011425]">
                  Book an Intro Call
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Let’s talk through your goals, your timeline, and how Digify
                  can support your team.
                </p>
              </div>

              {/* INTEGRATED BRAND ACTION BUTTON */}
              <div className="pt-2">
                <ActionButton
                  label="Book a free call"
                  onClick={() => (window.location.href = "/contact")}
                />
              </div>

              {/* CONTACT FOOTER */}
              <div className="pt-8 border-t border-gray-200 flex items-center gap-4 group/mail">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 group-hover/mail:text-[#057fa5] group-hover/mail:shadow-md transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">
                    Prefer Email?
                  </p>
                  <a
                    href="mailto:info.digifyagency@gmail.com"
                    className="text-sm font-bold text-[#011425] hover:text-[#057fa5] transition-colors"
                  >
                    info.digifyagency@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: ACCORDION LIST */}
        <div className="lg:col-span-7 flex flex-col border-t border-gray-100">
          {faqData.map((item, idx) => (
            <div key={idx} className="border-b border-gray-100">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-8 md:py-10 flex items-center justify-between text-left group"
              >
                <span
                  className={`text-lg md:text-xl font-bold transition-colors duration-300 ${openIndex === idx ? "text-[#057fa5]" : "text-[#011425] group-hover:text-[#057fa5]"}`}
                >
                  {item.question}
                </span>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === idx ? "bg-[#011425] text-white rotate-180" : "bg-gray-50 text-[#011425] group-hover:bg-[#057fa5] group-hover:text-white"}`}
                >
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-500 text-lg leading-relaxed font-medium pb-10 md:pr-12">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
