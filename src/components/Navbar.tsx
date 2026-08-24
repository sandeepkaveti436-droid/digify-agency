"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // 1. Import the Image component
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Works", href: "#" },
  { name: "Services", href: "#", hasDropdown: true },
  { name: "Industries", href: "#", hasDropdown: true },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
  { name: "Blog", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-white w-full py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 border-b border-gray-100">
      {/* 2. Logo Section - Professional Implementation */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo/DA.png" // Path to your image
          alt="Digify Logo"
          width={180} // Natural width (for aspect ratio)
          height={60} // Natural height
          priority // Ensures the logo loads immediately (LCP)
          className="w-auto h-8 md:h-10 lg:h-12 object-contain"
          /* 
             HOW TO ADJUST SIZE:
             h-8  = 32px (Mobile)
             md:h-10 = 40px (Tablet)
             lg:h-12 = 48px (Desktop)
             Adjust these values to get the exact size you need.
          */
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-8 xl:gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-brand-dark hover:text-brand-teal text-[15px] font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap"
          >
            {link.name}
            {link.hasDropdown && (
              <ChevronDown
                size={14}
                className="text-brand-slate mt-0.5"
                strokeWidth={2.5}
              />
            )}
          </Link>
        ))}
      </div>

      {/* Desktop CTA & Mobile Toggle */}
      <div className="flex items-center gap-4">
        <Link
          href="/contact"
          className="group hidden sm:flex items-center bg-brand-teal rounded-full py-1.5 pl-6 pr-1.5 transition-all hover:opacity-90"
        >
          <span className="text-white font-bold text-[14px] mr-4 whitespace-nowrap">
            Contact Us
          </span>
          <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-0.5">
            <ArrowRight size={16} className="text-brand-teal" strokeWidth={3} />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-brand-dark p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Responsive Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[73px] bottom-0 bg-white z-40 flex flex-col p-6 gap-6 lg:hidden animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold text-brand-dark border-b border-gray-50 pb-4 flex justify-between items-center"
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown size={20} className="text-brand-slate" />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-brand-teal text-white text-center py-4 rounded-full font-bold mt-auto mb-10"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
