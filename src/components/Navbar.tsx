"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Presentation,
  Fingerprint,
  PenTool,
  Palette,
  Rocket,
  Layers,
  Monitor,
  Smartphone,
  LayoutDashboard,
  ShieldCheck,
  Code2,
  Globe,
  Zap,
  Binary,
  Landmark,
  Cloud,
  Activity,
  Cpu,
} from "lucide-react";

// --- 1. DATA OBJECTS (Must be defined before the component) ---

const servicesData = {
  branding: [
    {
      title: "Pitch Deck",
      desc: "Get visuals that raise capital",
      icon: <Presentation />,
    },
    {
      title: "Brand Identity",
      desc: "Build trust with design",
      icon: <Fingerprint />,
    },
    { title: "Logo Design", desc: "Become unforgettable", icon: <PenTool /> },
    {
      title: "Graphic Design",
      desc: "Illustrations, Icons, Social media",
      icon: <Palette />,
    },
    {
      title: "Rebranding",
      desc: "Rebrand to grow and convert",
      icon: <Rocket />,
    },
  ],
  design: [
    {
      title: "UI/UX Design",
      desc: "Web & mobile app design",
      icon: <Layers />,
    },
    {
      title: "Website Design",
      desc: "Custom websites & landings",
      icon: <Monitor />,
    },
    {
      title: "Mobile App Design",
      desc: "Apps your users love",
      icon: <Smartphone />,
    },
    {
      title: "Website Redesign",
      desc: "Modern look, higher impact",
      icon: <LayoutDashboard />,
    },
    {
      title: "Product UX/UI Audit",
      desc: "Insights that drive results",
      icon: <ShieldCheck />,
    },
  ],
  development: [
    {
      title: "Web Development",
      desc: "Front-End & Back-End Development",
      icon: <Code2 />,
    },
    {
      title: "MVP Development",
      desc: "MVPs that attract funding",
      icon: <Smartphone />,
    },
    { title: "Landing page", desc: "High-converting website", icon: <Globe /> },
    {
      title: "Corporate Websites",
      desc: "Built for scale and trust",
      icon: <Monitor />,
    },
    {
      title: "WOW Websites",
      desc: "Professional, scalable, fast website",
      icon: <Zap />,
    },
  ],
};

const industriesData = [
  {
    title: "Web 3, Blockchain",
    desc: "Crypto, DeFi, DEX, CEX, NFT",
    icon: <Binary />,
    color: "text-blue-500",
  },
  {
    title: "Fintech",
    desc: "Banking, Digital Payments, Exchanges",
    icon: <Landmark />,
    color: "text-purple-500",
  },
  {
    title: "SaaS",
    desc: "CRM, HR, AI, ERP, Automation tools",
    icon: <Cloud />,
    color: "text-cyan-500",
  },
  {
    title: "Healthcare & Wellness",
    desc: "Mental health, Insurance, Fitness",
    icon: <Activity />,
    color: "text-indigo-500",
  },
  {
    title: "AI & ML",
    desc: "Analysing tools, Chatbots, Crypto",
    icon: <Cpu />,
    color: "text-violet-500",
  },
];

// --- 2. HELPER SUB-COMPONENT ---

function MenuCard({
  title,
  desc,
  icon,
  iconColor = "text-[#057fa5]",
  size = "large",
}: any) {
  return (
    <Link href="#" className="flex items-start gap-5 group/item">
      <div
        className={`shrink-0 rounded-2xl bg-gray-50 flex items-center justify-center transition-all duration-300 group-hover/item:bg-white group-hover/item:shadow-xl ${size === "large" ? "w-14 h-14" : "w-10 h-10"}`}
      >
        {React.cloneElement(icon, {
          className: `${iconColor} transition-transform group-hover/item:scale-110`,
          size: size === "large" ? 28 : 20,
        })}
      </div>
      <div>
        <h4 className="text-[15px] font-bold text-[#011425] group-hover/item:text-[#057fa5] transition-colors">
          {title}
        </h4>
        <p className="text-[12px] text-gray-400 font-medium leading-tight mt-0.5">
          {desc}
        </p>
      </div>
    </Link>
  );
}

// --- 3. MAIN NAVBAR COMPONENT ---

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<
    "services" | "industries" | null
  >(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const blurSlip = {
    hidden: { opacity: 0, y: 15, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
    },
    exit: {
      opacity: 0,
      y: 10,
      filter: "blur(10px)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <nav
      onMouseLeave={() => setActiveMenu(null)}
      className="bg-white w-full py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-[100] border-b border-gray-100 font-manrope"
    >
      <Link href="/">
        <Image
          src="/logo/DA.png"
          alt="Logo"
          width={150}
          height={50}
          priority
          className="w-auto h-8 md:h-10"
        />
      </Link>

      {/* DESKTOP LINKS */}
      <div className="hidden lg:flex items-center gap-10">
        <Link
          href="#"
          className="font-semibold text-[15px] text-[#011425] hover:text-[#057fa5] transition-colors"
        >
          Works
        </Link>

        {/* Services Link (Screenshot 2 style) */}
        <button
          onMouseEnter={() => setActiveMenu("services")}
          className={`flex items-center gap-1.5 font-semibold text-[15px] transition-colors ${activeMenu === "services" ? "text-[#057fa5]" : "text-[#011425]"}`}
        >
          Services{" "}
          <ChevronDown
            size={14}
            className={activeMenu === "services" ? "rotate-180" : ""}
          />
        </button>

        {/* Industries Link (Screenshot 1 style) */}
        <button
          onMouseEnter={() => setActiveMenu("industries")}
          className={`flex items-center gap-1.5 font-semibold text-[15px] transition-colors ${activeMenu === "industries" ? "text-[#057fa5]" : "text-[#011425]"}`}
        >
          Industries{" "}
          <ChevronDown
            size={14}
            className={activeMenu === "industries" ? "rotate-180" : ""}
          />
        </button>

        <Link
          href="#"
          className="font-semibold text-[15px] text-[#011425] hover:text-[#057fa5] transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="font-semibold text-[15px] text-[#011425] hover:text-[#057fa5] transition-colors"
        >
          About
        </Link>
        <Link
          href="#"
          className="font-semibold text-[15px] text-[#011425] hover:text-[#057fa5] transition-colors"
        >
          Blog
        </Link>
      </div>

      {/* RIGHT SIDE CTA */}
      <div className="flex items-center gap-4">
        <Link
          href="/contact"
          className="group hidden sm:flex items-center bg-[#057fa5] rounded-full py-1.5 pl-6 pr-1.5 transition-all hover:opacity-90"
        >
          <span className="text-white font-bold text-[14px] mr-4 whitespace-nowrap">
            Contact Us
          </span>
          <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-0.5">
            <ArrowRight size={16} className="text-[#057fa5]" />
          </div>
        </Link>
        <button
          className="lg:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MEGA MENUS */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            variants={blurSlip}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto py-12 px-12">
              {/* --- 1. INDUSTRIES (2 Cols, Large Icons) --- */}
              {activeMenu === "industries" && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-2 text-xs font-black uppercase tracking-[0.3em] text-[#011425]">
                    Industries
                  </div>
                  <div className="col-span-10 grid grid-cols-2 gap-x-20 gap-y-10">
                    {industriesData.map((item, i) => (
                      <MenuCard key={i} {...item} iconColor={item.color} />
                    ))}
                  </div>
                </div>
              )}

              {/* --- 2. SERVICES (3 Cols, Vertical Pill) --- */}
              {activeMenu === "services" && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-1">
                    <span className="bg-[#4ed0d8] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      Services
                    </span>
                  </div>
                  <div className="col-span-11 grid grid-cols-3 gap-12">
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
                        Branding
                      </h3>
                      <div className="space-y-6">
                        {servicesData.branding.map((s, i) => (
                          <MenuCard key={i} {...s} size="small" />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
                        Design
                      </h3>
                      <div className="space-y-6">
                        {servicesData.design.map((s, i) => (
                          <MenuCard key={i} {...s} size="small" />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
                        Development
                      </h3>
                      <div className="space-y-6">
                        {servicesData.development.map((s, i) => (
                          <MenuCard key={i} {...s} size="small" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
