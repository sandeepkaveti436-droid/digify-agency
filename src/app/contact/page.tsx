"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import Image from "next/image";

// Reuse your signature animation
const blurSlip = {
  hidden: { filter: "blur(15px)", opacity: 0, y: 30 },
  visible: (i: number) => ({
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 1,
      ease: [0.19, 1, 0.22, 1],
    },
  }),
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form Submission Logic (Integrated with Web3Forms - Free)
  async function handleSubmit(event: any) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "45c819c4-a124-421d-b9bf-82c282302f58"); // Get one at web3forms.com

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      setIsSuccess(true);
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* LEFT SIDE: IMMERSIVE VISUAL */}
      <section className="relative w-full lg:w-1/2 h-[40vh] lg:h-screen bg-[#011425] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1557426272-fc759fbb7a8d?q=80&w=2000"
          alt="Contact us"
          fill
          className="object-cover opacity-60 grayscale-[0.4]"
        />
        {/* Brand Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#011425] via-transparent to-transparent lg:bg-gradient-to-r" />

        <div className="absolute inset-0 p-8 md:p-20 flex flex-col justify-end lg:justify-center z-10">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={blurSlip}
            className="text-[#057fa5] font-bold tracking-[0.4em] uppercase text-xs mb-6"
          >
            Get in touch
          </motion.span>
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={blurSlip}
            className="text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter"
          >
            Let’s craft your <br />
            digital{" "}
            <span className="font-serif italic font-light text-[#057fa5]">
              Future.
            </span>
          </motion.h1>

          <div className="mt-12 space-y-6 hidden lg:block">
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={blurSlip}
              className="flex items-center gap-4 text-white/70"
            >
              <Mail size={20} className="text-[#057fa5]" />
              <span className="font-medium">hello@digify.agency</span>
            </motion.div>
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={blurSlip}
              className="flex items-center gap-4 text-white/70"
            >
              <Phone size={20} className="text-[#057fa5]" />
              <span className="font-medium">+1 (234) 567-890</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE: PROFESSIONAL FORM */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-20 bg-white">
        <div className="w-full max-w-xl">
          {isSuccess ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center space-y-6"
            >
              <div className="flex justify-center">
                <CheckCircle2 size={80} className="text-[#057fa5]" />
              </div>
              <h2 className="text-3xl font-bold text-[#011425]">
                Message Received!
              </h2>
              <p className="text-gray-500">
                Our strategy team will reach out to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-[#057fa5] font-bold border-b-2 border-[#057fa5]"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <div className="space-y-10">
              <div className="space-y-4">
                <motion.h2
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={blurSlip}
                  className="text-3xl font-extrabold text-[#011425]"
                >
                  Tell us about your project
                </motion.h2>
                <motion.p
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={blurSlip}
                  className="text-gray-400"
                >
                  Fill out the form below and we'll get back to you shortly.
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={blurSlip}
                    className="space-y-2"
                  >
                    <label className="text-xs font-black uppercase tracking-widest text-[#011425]">
                      Full Name
                    </label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:outline-none focus:border-[#057fa5] transition-all"
                    />
                  </motion.div>
                  <motion.div
                    custom={4}
                    initial="hidden"
                    animate="visible"
                    variants={blurSlip}
                    className="space-y-2"
                  >
                    <label className="text-xs font-black uppercase tracking-widest text-[#011425]">
                      Email Address
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:outline-none focus:border-[#057fa5] transition-all"
                    />
                  </motion.div>
                </div>

                <motion.div
                  custom={5}
                  initial="hidden"
                  animate="visible"
                  variants={blurSlip}
                  className="space-y-2"
                >
                  <label className="text-xs font-black uppercase tracking-widest text-[#011425]">
                    How can we help?
                  </label>
                  <select
                    name="service"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:outline-none focus:border-[#057fa5] transition-all appearance-none"
                  >
                    <option>UI/UX Design</option>
                    <option>Web Development</option>
                    <option>Brand Identity</option>
                    <option>Full Product Build</option>
                  </select>
                </motion.div>

                <motion.div
                  custom={6}
                  initial="hidden"
                  animate="visible"
                  variants={blurSlip}
                  className="space-y-2"
                >
                  <label className="text-xs font-black uppercase tracking-widest text-[#011425]">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Briefly describe your goals..."
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:outline-none focus:border-[#057fa5] transition-all resize-none"
                  />
                </motion.div>

                <motion.div
                  custom={7}
                  initial="hidden"
                  animate="visible"
                  variants={blurSlip}
                  className="pt-4"
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full lg:w-fit group flex items-center justify-center bg-[#011425] hover:bg-[#057fa5] text-white rounded-full py-2 pl-8 pr-2 transition-all disabled:opacity-50"
                  >
                    <span className="font-bold text-lg mr-6">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-white group-hover:rotate-[-45deg] transition-all">
                      <Send size={20} className="group-hover:text-[#011425]" />
                    </div>
                  </button>
                </motion.div>
              </form>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
