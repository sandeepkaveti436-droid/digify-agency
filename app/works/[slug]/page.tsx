"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Zap,
  CheckCircle2,
  Search,
  PenTool,
  Code2,
  Rocket,
  ShieldCheck,
  Layers,
  Cpu,
  Monitor,
} from "lucide-react";
import { SplitText } from "@/src/animations/SplitText";
import { BlurIn } from "@/src/animations/BlurIn";

// --- 1. ENRICHED PROJECT DATABASE ---
const projectDetails: Record<string, any> = {
  "quantum-dynamics": {
    title: "Quantum Dynamics",
    category: "Fintech Interface",
    year: "2024",
    client: "Quantum Capital",
    liveUrl: "https://example.com",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-digital-connection-animation-of-blue-nodes-and-lines-9257-large.mp4",
    heroImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
    description:
      "A professional-grade trading ecosystem designed to unite high-velocity data with human-centric ergonomics.",
    challenge:
      "Quantum's legacy platform suffered from 'Data Fatigue'. Users were overwhelmed by complexity, resulting in a 3.5-second latency in decision-making—a lifetime in high-frequency trading.",
    solution:
      "We architected a 'Hierarchical Dashboard' that prioritizes signal over noise. Using WebGL-accelerated charts and a dark-mode optimized palette, we cut decision time by 60%.",
    techStack: ["Next.js 14", "WebGL", "TypeScript", "Tailwind CSS"],
    results: ["+120% Engagement", "-40% Bounce Rate", "$50M+ Trade Volume"],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    ],
  },
  "aura-skincare": {
    title: "Aura Skincare",
    category: "Luxury E-Commerce",
    year: "2023",
    client: "Aura Labs France",
    liveUrl: "https://example.com",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-a-woman-splashing-water-on-her-face-4252-large.mp4",
    heroImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200",
    description:
      "Merging dermatological precision with high-fashion aesthetics for an immersive beauty experience.",
    challenge:
      "The brand struggled to translate their tactile, premium physical product into a digital space. Conversions were low because the site felt like a 'generic shop'.",
    solution:
      "We built a sensory digital experience. Through micro-interactions and liquid-smooth scroll behaviors, we simulated the brand's 'smooth' product feel digitally.",
    techStack: ["Shopify Headless", "Three.js", "Sanity CMS", "Framer Motion"],
    results: ["24% AOV Increase", "60% Mobile Growth", "99/100 Perf Score"],
    gallery: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800",
      "https://images.unsplash.com/photo-1598440467723-5935f444de31?q=80&w=800",
    ],
  },
  "nexus-robotics": {
    title: "Nexus Robotics",
    category: "Industrial UI/UX",
    year: "2024",
    client: "Nexus AI Systems",
    liveUrl: "https://example.com",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-circuit-board-running-electricity-822-large.mp4",
    heroImage:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
    description:
      "A unified control system for autonomous warehouse fleets, focusing on safety and real-time synchronization.",
    challenge:
      "Fleet operators found it impossible to manage more than 5 robots simultaneously due to interface lag and poorly prioritized alert systems.",
    solution:
      "We created a 'Living Map' UI. Using real-time WebSockets and a spatial audio alert system, a single operator can now manage 50+ robots safely.",
    techStack: ["React", "Rust", "WebSockets", "D3.js"],
    results: ["10x Fleet Capacity", "0 Safety Incidents", "30% Energy Savings"],
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
      "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=800",
    ],
  },
};

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = projectDetails[slug as string];

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-white font-manrope overflow-x-hidden pb-20">
      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-end pb-20 px-6 md:px-20 bg-[#011425] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.heroImage}
            alt="Hero"
            fill
            className="object-cover opacity-30 grayscale-[0.3]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#011425] via-[#011425]/40 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">

          <h1 className="text-6xl md:text-[130px] font-black tracking-tighter text-white uppercase leading-[0.8] mb-12">
            <SplitText text={project.title} delay={0.2} />
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-white/10">
            <MetaItem label="Client" value={project.client} />
            <MetaItem label="Strategy" value="Product First" />
            <MetaItem label="Year" value={project.year} />
            <MetaItem label="Stack" value={project.techStack[0]} />
          </div>
        </div>
      </section>

      {/* --- 2. NARRATIVE: CHALLENGE & SOLUTION --- */}
      <section className="py-32 px-6 md:px-20 container mx-auto">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-7">
            <BlurIn>
              <h2 className="text-4xl md:text-7xl font-black text-[#011425] mb-12 tracking-tighter uppercase">
                The Vision
              </h2>
            </BlurIn>
            <p className="text-xl md:text-3xl text-gray-400 leading-tight font-medium mb-16 italic border-l-4 border-[#057fa5] pl-10">
              "{project.description}"
            </p>

            <div className="grid gap-16">
              <div className="group">
                <h4 className="text-xs font-black text-[#057fa5] uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-[#057fa5]" /> The Challenge
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-medium">
                  {project.challenge}
                </p>
              </div>
              <div className="group">
                <h4 className="text-xs font-black text-[#D4FF00] uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-[#D4FF00]" /> The Solution
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-medium">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Results Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#F8FAFC] p-12 rounded-[3rem] border border-gray-100 shadow-sm">
              <h4 className="text-[10px] font-black text-[#057fa5] uppercase tracking-widest mb-12">
                Performance Metrics
              </h4>
              <div className="space-y-10">
                {project.results.map((res: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-5"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#057fa5] border border-gray-100">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-xl font-black text-[#011425] tracking-tight">
                      {res}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-[#011425] p-12 rounded-[3rem] text-white">
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-8">
                Engineering Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-5 py-2 bg-white/5 rounded-full border border-white/10 text-[11px] font-bold uppercase tracking-widest text-white hover:bg-[#057fa5] transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. CINEMA VIDEO SECTION --- */}
      <section className="px-4 md:px-10 mb-32">
        <div className="relative aspect-video rounded-[4rem] overflow-hidden bg-black shadow-3xl group">
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-12 left-12 flex items-center gap-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <Monitor className="text-[#011425]" size={32} />
            </div>
            <div>
              <p className="text-white font-black uppercase text-xs tracking-[0.3em]">
                Interactive Prototype
              </p>
              <p className="text-white/50 text-sm">
                Testing user flow 04A - System Response
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. THE CORE PROCESS --- */}
      <section className="py-32 bg-[#011425] text-white px-6 md:px-20 rounded-[5rem] mx-4 shadow-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <span className="text-[#057fa5] font-black uppercase text-xs tracking-[0.5em] mb-4 block">
              Methodology
            </span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              How we built it.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-12">
            <ProcessStep
              icon={<Search />}
              num="01"
              title="Audit"
              desc="Identifying friction points in the user journey."
            />
            <ProcessStep
              icon={<PenTool />}
              num="02"
              title="Ideate"
              desc="Rapid wireframing of the glance-first logic."
            />
            <ProcessStep
              icon={<Code2 />}
              num="03"
              title="Deploy"
              desc="High-performance build with zero-latency charts."
            />
            <ProcessStep
              icon={<Rocket />}
              num="04"
              title="Scale"
              desc="A/B testing and global market roll-out."
            />
          </div>
        </div>
      </section>

      {/* --- 5. VISUAL GALLERY --- */}
      <section className="py-32 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10">
          {project.gallery.map((img: string, i: number) => (
            <motion.div
              key={i}
              whileHover={{ y: -20, rotate: i % 2 === 0 ? -1 : 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 cursor-zoom-in"
            >
              <Image
                src={img}
                alt="Work Gallery"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 6. SIGNATURE CALL TO ACTION --- */}
      <section className="py-40 flex flex-col items-center text-center px-6">
        <BlurIn>
          <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-16 text-[#011425]">
            Experience the <br />{" "}
            <span className="text-[#057fa5] font-serif italic font-light lowercase tracking-normal">
              live
            </span>{" "}
            product
          </h3>
        </BlurIn>

        <a
          href={project.liveUrl}
          target="_blank"
          className="group flex items-center gap-3"
        >
          <div className="bg-[#057fa5] w-20 h-20 flex items-center justify-center rounded-tr-[35px] rounded-br-[35px] rounded-bl-[35px] transition-all duration-500 group-hover:rounded-tl-[35px] group-hover:rounded-tr-[0px] shadow-2xl">
            <ExternalLink size={32} className="text-white" />
          </div>
          <div className="bg-[#057fa5] h-20 px-16 flex items-center justify-center rounded-full transition-all duration-500 group-hover:bg-[#011425] shadow-2xl">
            <span className="text-white font-black text-xl tracking-widest uppercase">
              <SplitText text="Visit Live Project" delay={0.5} />
            </span>
          </div>
        </a>
      </section>
    </main>
  );
}

// --- SUB-COMPONENTS ---

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-[#057fa5] text-[10px] font-black uppercase tracking-[0.3em]">
        {label}
      </p>
      <p className="text-white font-bold text-xl tracking-tight leading-none">
        {value}
      </p>
    </div>
  );
}

function ProcessStep({ icon, num, title, desc }: any) {
  return (
    <div className="p-10 rounded-[3rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-500 group">
      <div className="text-[#D4FF00] mb-8 flex justify-between items-center">
        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-[#057fa5] group-hover:text-white transition-colors">
          {React.cloneElement(icon, { size: 28 })}
        </div>
        <span className="text-white/10 font-black text-5xl group-hover:text-white/20 transition-colors">
          {num}
        </span>
      </div>
      <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">
        {title}
      </h4>
      <p className="text-white/40 text-sm leading-relaxed font-medium">
        {desc}
      </p>
    </div>
  );
}
