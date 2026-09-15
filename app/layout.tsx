import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Analytics } from "@vercel/analytics/react";

// 1. Initialize Fonts
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
  display: "swap",
});

// 2. SEO Metadata
export const metadata: Metadata = {
  title: "Digify | Digital Product Design & SaaS Development Agency",
  description:
    "Accelerating digital growth through precision design and high-performance engineering.",
  verification: {
    google: "google0a488f45af830b1f",
  },
};

// 3. Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} scroll-smooth`}
      // suppressHydrationWarning prevents errors from browser extensions (like dark mode or grammarly)
      suppressHydrationWarning
    >
      <body className="font-manrope bg-white antialiased flex flex-col min-h-screen overflow-x-hidden">
        {/* Global Navbar */}
        <Navbar />

        {/* 
            The <main> tag with 'flex-grow' ensures that if a page has very 
            little content, the Footer is pushed to the bottom of the screen.
        */}
        <main className="flex-grow">{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* Vercel Analytics tracking component */}
        <Analytics />
      </body>
    </html>
  );
}
