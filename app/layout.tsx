import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

// 1. Initialize Fonts
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
});

// 2. SEO Metadata (Standard Export)
export const metadata: Metadata = {
  title: "Digify | Digital Product Design & SaaS Development",
  description: "Accelerating digital growth through precision design.",
};

// 3. THE FIX: Add "default" to this function
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="font-manrope bg-white antialiased flex flex-col min-h-screen">
        <Navbar />
        {/* Main wrapper to ensure footer stays at bottom */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
