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

// --- 1. DATA STRUCTURES ---

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
    bg: "bg-blue-50",
  },
  {
    title: "Fintech",
    desc: "Banking, Digital Payments, Exchanges",
    icon: <Landmark />,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    title: "SaaS",
    desc: "CRM, HR, AI, ERP, Automation tools",
    icon: <Cloud />,
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    title: "Healthcare & Wellness",
    desc: "Mental health, Insurance, Fitness",
    icon: <Activity />,
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    title: "AI & ML",
    desc: "Analysing tools, Chatbots, Crypto",
    icon: <Cpu />,
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
];

// --- 2. SUB-COMPONENTS ---

function MenuCard({
  title,
  desc,
  icon,
  iconColor = "text-[#057fa5]",
  size = "large",
  bg = "bg-gray-50",
}: any) {
  return (
    <Link href="#" className="flex items-start gap-5 group/item py-2">
      <div
        className={`shrink-0 rounded-2xl ${bg} flex items-center justify-center transition-all duration-300 group-hover/item:bg-white group-hover/item:shadow-xl ${size === "large" ? "w-14 h-14" : "w-10 h-10"}`}
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

// --- 3. MAIN COMPONENT ---

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<
    "services" | "industries" | null
  >(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Define easing with 'as const' to fix TypeScript error
  const blurSlip = {
    hidden: { opacity: 0, y: 15, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      filter: "blur(10px)",
      transition: {
        duration: 0.3,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <nav
      onMouseLeave={() => setActiveMenu(null)}
      className="bg-white w-full py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-[100] border-b border-gray-100 font-manrope"
    >
      {/* LOGO */}
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

        <button
          onMouseEnter={() => setActiveMenu("services")}
          className={`flex items-center gap-1.5 font-semibold text-[15px] transition-colors ${activeMenu === "services" ? "text-[#057fa5]" : "text-[#011425]"}`}
        >
          Services
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${activeMenu === "services" ? "rotate-180" : ""}`}
          />
        </button>

        <button
          onMouseEnter={() => setActiveMenu("industries")}
          className={`flex items-center gap-1.5 font-semibold text-[15px] transition-colors ${activeMenu === "industries" ? "text-[#057fa5]" : "text-[#011425]"}`}
        >
          Industries
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${activeMenu === "industries" ? "rotate-180" : ""}`}
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
          className="lg:hidden text-[#011425]"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MEGA MENUS DESKTOP */}
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
              {/* --- INDUSTRIES (2 Cols, Large Icons) --- */}
              {activeMenu === "industries" && (
                <div className="grid grid-cols-12 gap-8 items-start">
                  <div className="col-span-2 text-xs font-black uppercase tracking-[0.3em] text-[#011425] pt-4">
                    Industries
                  </div>
                  <div className="col-span-10 grid grid-cols-2 gap-x-20 gap-y-10">
                    {industriesData.map((item, i) => (
                      <MenuCard
                        key={i}
                        {...item}
                        iconColor={item.color}
                        bg={item.bg}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* --- SERVICES (3 Cols, Vertical Pill) --- */}
              {activeMenu === "services" && (
                <div className="grid grid-cols-12 gap-8 items-start">
                  <div className="col-span-1">
                    <div className="h-24 w-10 bg-[#4ed0d8] flex items-center justify-center rounded-full">
                      <span className="text-white text-[10px] font-black uppercase tracking-[0.3em] -rotate-90 whitespace-nowrap">
                        Services
                      </span>
                    </div>
                  </div>
                  <div className="col-span-11 grid grid-cols-3 gap-12">
                    <div>
                      <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
                        Branding
                      </h3>
                      <div className="space-y-4">
                        {servicesData.branding.map((s, i) => (
                          <MenuCard key={i} {...s} size="small" />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
                        Design
                      </h3>
                      <div className="space-y-4">
                        {servicesData.design.map((s, i) => (
                          <MenuCard key={i} {...s} size="small" />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
                        Development
                      </h3>
                      <div className="space-y-4">
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

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 top-[73px] bg-white z-[90] flex flex-col p-8 lg:hidden"
          >
            <div className="flex flex-col gap-6 overflow-y-auto pb-20">
              <Link href="#" className="text-2xl font-bold text-[#011425]">
                Works
              </Link>
              <div className="border-t border-gray-100 pt-6">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
                  Services
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {servicesData.branding.slice(0, 3).map((s, i) => (
                    <Link key={i} href="#" className="font-bold text-[#011425]">
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="#" className="text-2xl font-bold text-[#011425]">
                Industries
              </Link>
              <Link href="#" className="text-2xl font-bold text-[#011425]">
                Pricing
              </Link>
              <Link href="#" className="text-2xl font-bold text-[#011425]">
                About
              </Link>
              <Link href="#" className="text-2xl font-bold text-[#011425]">
                Blog
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="bg-[#057fa5] text-white text-center py-4 rounded-full font-bold mt-10"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
