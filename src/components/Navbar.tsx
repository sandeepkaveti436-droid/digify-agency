"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ChevronDown,
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
  MoveDownRight,
  // Removed Instagram and Linkedin from here to fix the build error
} from "lucide-react";

// --- CUSTOM BRAND ICONS (SVG) ---
const InstagramIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// --- 1. ANIMATION VARIANTS ---
const menuVariants = {
  initial: {
    clipPath: "circle(0% at 92% 5%)",
    opacity: 0,
  },
  animate: {
    clipPath: "circle(150% at 92% 5%)",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  },
  exit: {
    clipPath: "circle(0% at 92% 5%)",
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  },
};

const linkVariants: Variants = {
  initial: { y: 80, opacity: 0, filter: "blur(10px)" },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
  exit: (i: number) => ({
    y: 40,
    opacity: 0,
    filter: "blur(5px)",
    transition: {
      delay: i * 0.05,
      duration: 0.3,
    },
  }),
};

// --- 2. DATA STRUCTURES ---
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
      desc: "Social Media & Layouts",
      icon: <Palette />,
    },
    { title: "Rebranding", desc: "Grow and convert more", icon: <Rocket /> },
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
      title: "UX Audit",
      desc: "Insights that drive results",
      icon: <ShieldCheck />,
    },
  ],
  development: [
    { title: "Web Development", desc: "Modern engineering", icon: <Code2 /> },
    {
      title: "MVP Development",
      desc: "MVPs that attract funding",
      icon: <Smartphone />,
    },
    {
      title: "Landing page",
      desc: "High-converting strategy",
      icon: <Globe />,
    },
    {
      title: "Corporate Websites",
      desc: "Built for scale and trust",
      icon: <Monitor />,
    },
    { title: "WOW Websites", desc: "Professional and unique", icon: <Zap /> },
  ],
};

const industriesData = [
  {
    title: "Web 3, Blockchain",
    desc: "Crypto, DeFi, NFT",
    icon: <Binary />,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Fintech",
    desc: "Banking, Payments",
    icon: <Landmark />,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    title: "SaaS",
    desc: "CRM, AI, ERP",
    icon: <Cloud />,
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    title: "Healthcare",
    desc: "Mental health, Med",
    icon: <Activity />,
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    title: "AI & ML",
    desc: "Analytics, Chatbots",
    icon: <Cpu />,
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
];

function MenuCard({
  title,
  desc,
  icon,
  iconColor = "text-[#057fa5]",
  size = "large",
  bg = "bg-gray-50",
}: any) {
  return (
    <Link href="/contact" className="flex items-start gap-5 group/item py-2">
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

// --- 4. MAIN COMPONENT ---
export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<
    "services" | "industries" | null
  >(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    if (isMobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileOpen]);

  const mobileLinks = [
    { name: "Works", href: "/works" },
    { name: "Services", href: "/#services" },
    { name: "Pricing", href: "/#pricing" },
    { name: "About", href: "/#about" },
    { name: "Blog", href: "/#blog" },
  ];

  return (
    <nav
      onMouseLeave={() => setActiveMenu(null)}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b font-manrope 
      bg-[#057fa5] border-white/10 py-4
      lg:border-gray-100 lg:py-5 ${isScrolled ? "lg:bg-white/90 lg:backdrop-blur-md lg:shadow-sm" : "lg:bg-white lg:border-transparent"}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="z-[110]">
          <div className="lg:hidden">
            <Image
              src="/logo/mobile-2.png"
              alt="Mobile Logo"
              width={32}
              height={32}
              priority
              className="w-auto h-8"
            />
          </div>
          <div className="hidden lg:block">
            <Image
              src="/logo/DA-1.png"
              alt="Logo"
              width={150}
              height={50}
              priority
              className="w-auto h-8 md:h-10"
            />
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-10">
          <Link
            href="/works"
            className="font-bold text-[15px] text-[#011425] hover:text-[#057fa5] transition-colors"
          >
            Works
          </Link>
          <Link
            href="/#pricing"
            className="font-bold text-[15px] text-[#011425] hover:text-[#057fa5] transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/#about"
            className="font-bold text-[15px] text-[#011425] hover:text-[#057fa5] transition-colors"
          >
            About
          </Link>
          <Link
            href="/#blog"
            className="font-bold text-[15px] text-[#011425] hover:text-[#057fa5] transition-colors"
          >
            Blog
          </Link>
          <button
            onMouseEnter={() => setActiveMenu("services")}
            className={`flex items-center gap-1.5 font-bold text-[16px] transition-colors ${activeMenu === "services" ? "text-[#057fa5]" : "text-[#011425]"}`}
          >
            Services{" "}
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${activeMenu === "services" ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* RIGHT SIDE UI */}
        <div className="flex items-center gap-4 z-[110]">
          <Link
            href="/contact"
            className="group hidden lg:flex items-center gap-2"
          >
            <div className="bg-[#057fa5] w-11 h-11 flex items-center justify-center rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] transition-all group-hover:rotate-45">
              <MoveDownRight size={20} className="text-white" />
            </div>
            <div className="bg-[#057fa5] h-11 px-8 flex items-center justify-center rounded-full transition-all group-hover:bg-[#011425]">
              <span className="text-white font-bold text-[14px] whitespace-nowrap tracking-tight uppercase">
                Book Appointment
              </span>
            </div>
          </Link>

          <button
            className="lg:hidden w-12 h-12 flex items-center justify-center bg-white/5 text-white rounded-[18px] border border-white/20 backdrop-blur-sm shadow-xl"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-[#057fa5] z-[100] flex flex-col justify-center px-10"
          >
            <div className="relative z-10 flex flex-col gap-2 mt-[-5vh]">
              <p className="text-[#fff] opacity-40 font-bold text-[10px] uppercase tracking-[0.4em] mb-6">
                Navigation
              </p>
              {mobileLinks.map((link, i) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div
                    custom={i}
                    variants={linkVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="text-[38px] font-black text-white hover:opacity-70 transition-all leading-tight inline-block tracking-tight mb-2"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* BOTTOM SOCIALS & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 left-10 right-10 flex flex-col gap-10 border-t border-white/10 pt-10"
            >
              <div className="space-y-4">
                <p className="text-white/30 text-[10px] uppercase font-bold tracking-[0.3em]">
                  Connect
                </p>
                <div className="flex gap-8 items-center">
                  <Link
                    href="#"
                    className="text-white hover:text-white/70 transition-colors flex items-center gap-2 text-sm font-bold"
                  >
                    <InstagramIcon size={18} /> INSTAGRAM
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-white/70 transition-colors flex items-center gap-2 text-sm font-bold"
                  >
                    <LinkedinIcon size={18} /> LINKEDIN
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="group flex items-center gap-2 w-full"
              >
                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] transition-all">
                  <MoveDownRight size={24} className="text-[#057fa5]" />
                </div>
                <div className="flex-1 bg-white h-14 flex items-center justify-center rounded-full shadow-2xl">
                  <span className="text-[#057fa5] font-black text-sm tracking-widest uppercase">
                    BOOK A CALL
                  </span>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
