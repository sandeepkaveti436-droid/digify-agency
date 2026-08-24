import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";

// Primary Brand Font
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

// Premium Serif Font for Hero Section (Italics)
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body className="font-manrope bg-deep-navy min-h-screen antialiased text-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
