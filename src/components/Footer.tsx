"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Copy, Check } from "lucide-react";
import ActionButton from "@/src/components/ActionButton";

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
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    name: "Github",
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
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A3.37 3.37 0 0 0 19 4.77a3.07 3.07 0 0 0-.08-2.3s-.82-.26-2.68 1.03a11.97 11.97 0 0 0-6.12 0C8.27 1.21 7.45 1.47 7.45 1.47a3.07 3.07 0 0 0-.08 2.3 3.37 3.37 0 0 0-.94 2.61c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path>
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
  solutions: {
    title: "Core Solutions",
    links: ["Scale Strategy", "Digital Refresh", "Team Augmentation"],
  },
  industries: {
    title: "Focused Sectors",
    links: [
      "Fintech & Pay",
      "AI & Automation",
      "E-Commerce",
      "SaaS",
      "Blockchain",
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
  const email = "hello@digify.agency";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <footer className="bg-[#ececec]/20 text-white pt-24 pb-10 px-6 md:px-12 lg:px-24 relative overflow-hidden font-manrope">
      {/* Subtle Blue Mesh Glow (Brand Identity) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ececec]/5 blur-[140px] rounded-full -mr-48 -mt-48 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* 1. BRAND TOP BAR */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20 border-b border-white/5 pb-16">
          <div className="space-y-6">
            <Link
              href="/"
              className="text-4xl font-black tracking-tighter text-[#057fa5]"
            >
              Digify<span className="text-[#057fa5]">.</span>
            </Link>
            <p className="text-gray-400 max-w-sm text-lg font-medium leading-relaxed">
              Accelerating digital growth through precision design and
              high-performance engineering.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-5">
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-[#057fa5]">
              Start your evolution
            </span>
            {/* Reusable Action Button Component */}
            <ActionButton
              label="Let's Build"
              onClick={() => router.push("/contact")}
            />
          </div>
        </div>

        {/* 2. NAVIGATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          {/* Company Contacts */}
          <div className="lg:col-span-3 space-y-16">
            <div className="space-y-4">
              <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#057fa5]">
                Headquarters
              </h4>
              <p className="text-gray-400 text-[16px] leading-relaxed font-medium">
                London, United Kingdom <br />
                24-28 St Leonards Rd
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#011425]">
                Drop us a line
              </h4>
              <div
                onClick={handleCopy}
                className="group flex items-center gap-3 cursor-pointer select-none"
              >
                <span className="text-[24px] text-[#057fa5] md:text-2xl font-bold hover:text-[#057fa5] transition-colors break-all">
                  {email}
                </span>
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#057fa5]/10 transition-all border border-white/5 group-hover:border-[#2563EB]/20">
                  {copied ? (
                    <Check size={16} className="text-[#057fa5]" />
                  ) : (
                    <Copy size={16} className="text-gray-400" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sitemaps */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-6">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="space-y-7">
                <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#057fa5] border-l-2 border-[#057fa5] pl-4">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 text-[16px] font-medium block"
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
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-gray-500">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[14px] font-medium text-[#057fa5]">
              © {new Date().getFullYear()} Digital Agency. | Sandeep Kaveti
            </p>
            <p className="text-[12px] uppercase text-[#011425] tracking-widest opacity-90">
              Crafted with precision.
            </p>
          </div>

          <div className="flex items-center gap-8">
            {SocialIcons.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-[#057fa5] hover:text-white transition-all hover:scale-110"
                aria-label={social.name}
              >
                {social.svg}
              </Link>
            ))}
          </div>

          <div className="flex gap-8 text-[12px] font-black uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-[#057fa5] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#057fa5] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
