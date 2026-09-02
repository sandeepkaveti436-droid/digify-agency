"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Copy, Check, MoveDownRight } from "lucide-react";

// --- 1. SOCIAL ICONS DATA ---
const SocialIcons = [
  {
    name: "LinkedIn",
    href: "#",
    svg: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    svg: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.97 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/info.digifyagency?igsi=ZjhpMmozaGt6bmF3",
    svg: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
];

const footerLinks = {
  branding: {
    title: "Brand Strategy",
    links: [
      "Market Audit",
      "Visual Identity",
      "Naming",
      "Brand Guidelines",
      "Stationery",
    ],
  },
  design: {
    title: "Experience Design",
    links: [
      "UI/UX Audit",
      "Web Design",
      "App Design",
      "Design Systems",
      "Prototyping",
    ],
  },
  development: {
    title: "Technical Build",
    links: [
      "Next.js Dev",
      "MVP Launch",
      "SaaS Solutions",
      "Webflow Build",
      "Performance Ops",
    ],
  },
  company: {
    title: "Digify",
    links: ["Our Work", "Our Story", "Insights", "Join Team", "Get in touch"],
  },
};

export default function Footer() {
  const [copied, setCopy] = useState(false);
  const router = useRouter();
  const email = "info.digifyagency@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <footer className="bg-[#057fa5] border-t border-white/10 text-white pt-24 pb-10 px-6 md:px-12 lg:px-24 relative overflow-hidden font-manrope">
      <div className="max-w-7xl mx-auto">
        {/* 1. BRAND TOP BAR */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20 border-b border-white/10 pb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 md:w-12 md:h-10 overflow-hidden rounded-xl shadow-2xl p-1.5 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src="/logo/mobile-2.png" // UPDATED: Removed query string
                  alt="Digify Monogram"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <span className="text-3xl md:text-4xl font-black tracking-tighter text-white">
                Digify Agency<span className="text-white/40">.</span>
              </span>
            </Link>
            <p className="text-white/70 max-w-sm text-lg font-medium leading-relaxed">
              Accelerating digital growth through precision design and
              high-performance engineering.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-5">
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-white/50">
              Start your evolution
            </span>

            {/* WHITE LEAF & PILL BUTTON */}
            <Link href="/contact" className="group flex items-center gap-2">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-tr-[18px] rounded-br-[18px] rounded-bl-[18px] transition-all duration-300 group-hover:rotate-45 shadow-xl">
                <MoveDownRight size={20} className="text-[#057fa5]" />
              </div>
              <div className="bg-white h-12 px-8 flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-[#011425]">
                <span className="text-[#057fa5] group-hover:text-white font-black text-sm tracking-widest uppercase">
                  Let's Build
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* 2. NAVIGATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          <div className="lg:col-span-3 space-y-16">
            <div className="space-y-4">
              <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-white/50">
                Headquarters
              </h4>
              <p className="text-white/80 text-[16px] leading-relaxed font-medium">
                London, United Kingdom <br /> 24-28 St Leonards Rd
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-white/50">
                Drop us a line
              </h4>
              <div
                onClick={handleCopy}
                className="group flex items-center gap-2 cursor-pointer select-none"
              >
                <span className="text-[16px] md:text-[18px] font-bold text-white hover:text-white/80 transition-colors break-all">
                  {email}
                </span>
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white transition-all">
                  {copied ? (
                    <Check size={16} className="text-green-400" />
                  ) : (
                    <Copy
                      size={16}
                      className="text-white group-hover:text-[#057fa5]"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-6">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="space-y-7">
                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white border-l-2 border-white/30 pl-4">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-white/50 hover:text-white hover:pl-2 transition-all duration-300 text-[15px] font-medium block"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 3. LEGAL & SOCIALS */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 text-white/40">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[14px] font-medium text-white/80">
              © {new Date().getFullYear()} Digify Agency. | Sandeep Kaveti
            </p>
            <p className="text-[10px] uppercase tracking-widest opacity-50">
              Crafted with precision.
            </p>
          </div>
          <div className="flex items-center gap-8">
            {SocialIcons.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-all hover:scale-125"
              >
                {social.svg}
              </Link>
            ))}
          </div>
          <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
