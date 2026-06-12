/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, Play, Palette, TrendingUp, Laptop, Cpu, Settings, Megaphone } from "lucide-react";
import { processSteps } from "../data";

export default function Services() {
  const fullServices = [
    {
      id: "01",
      icon: <Play className="w-6 h-6 text-accent-green" />,
      title: "Cinematic Video Editing",
      desc: "Short-form edits, launch videos, founder storytelling, ad creatives, reels, trailers, and social campaigns.",
      details: ["Retention-optimized pacing", "Custom sound engineering & SFX selection", "Dramatic color correction", "Engaging typographical animations"],
    },
    {
      id: "02",
      icon: <Palette className="w-6 h-6 text-accent-green" />,
      title: "Brand Identity",
      desc: "Logo systems, visual identity, startup branding, typography, color systems, and premium design direction.",
      details: ["Comprehensive trademarkable typography kits", "Responsive vector logomarks", "Componentized brand assets", "Full staging guideline documentation"],
    },
    {
      id: "03",
      icon: <TrendingUp className="w-6 h-6 text-accent-green" />,
      title: "Performance Marketing",
      desc: "Creative campaigns designed for reach, engagement, and scalable digital growth.",
      details: ["Paid search and social funnel architecture", "Engagement-driven visual sequencing", "Continuous A/B creative testing", "Transparent attribution tracking"],
    },
    {
      id: "04",
      icon: <Laptop className="w-6 h-6 text-accent-green" />,
      title: "Website Development",
      desc: "High-performance websites built for extreme fidelity, quick load-speeds, and client capture.",
      details: ["Fluid animated interfaces", "Custom components and layouts", "Search engine optimization configurations", "Conversion rate-focused architecture"],
    },
    {
      id: "05",
      icon: <Cpu className="w-6 h-6 text-accent-green" />,
      title: "Custom Technology Solutions",
      desc: "Custom tech engineering, WebGL, automation tools, and personalized software environments.",
      details: ["Interactive 3D viewport canvas designs", "Flexible API setups and custom flows", "Internal management tooling & scrapers", "Blazing-fast cloud deployments"],
    },
    {
      id: "06",
      icon: <Megaphone className="w-6 h-6 text-accent-green" />,
      title: "Content Strategy",
      desc: "Content systems built for consistency across Instagram, TikTok, YouTube, and web platforms.",
      details: ["Interactive vertical video calendars", "Target hook and pacing diagnostic systems", "Category analysis and positioning kits", "Sustained audience retention optimization"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-bg-dark text-white pt-24 min-h-screen relative overflow-hidden"
    >
      {/* Visual neon backdrops */}
      <div className="absolute top-[15%] right-[5%] w-[450px] h-[450px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-[2%] w-[400px] h-[400px] rounded-full bg-accent-green/5 blur-[100px] pointer-events-none" />

      {/* ────────────────────────────────────────────────────────
          1. SERVICES HERO
         ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-24 relative z-10 text-left border-b border-white/10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-accent-green" />
            <span className="text-xs font-mono tracking-[0.3em] text-accent-green font-bold uppercase glow-green">
              OUR SERVICES
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-black uppercase tracking-tight leading-none mb-6">
            CREATIVE SYSTEMS <br />
            BUILT TO <span className="text-transparent text-stroke-white glow-purple">SCALE.</span>
          </h1>
          <p className="text-secondary-gray text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
            We help startups launch stronger, grow faster, and communicate with crystal clarity through premium tech, branding, and cinematic creative execution.
          </p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. DETAILED SERVICES NUMBERED ACCORDION / CARDS
         ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-24 relative z-10 border-b border-white/10">
        <div className="grid grid-cols-1 gap-6">
          {fullServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-[#050505]/60 border border-white/10 p-8 sm:p-12 hover:border-accent-green/35 transition-all duration-300 group flex flex-col lg:flex-row gap-8 justify-between rounded-none relative"
            >
              {/* Corner markings for technical editorial vibe */}
              <div className="absolute top-3 left-3 w-1.5 h-1.5 border-t border-l border-white/20 group-hover:border-accent-green/45 transition-colors" />
              <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-b border-r border-white/20 group-hover:border-accent-green/45 transition-colors" />

              {/* Number and Icon Header */}
              <div className="flex items-start gap-6 lg:w-1/3">
                <span className="text-3xl sm:text-4xl font-mono text-white/10 select-none font-extrabold group-hover:text-accent-green transition-colors">
                  {service.id}
                </span>
                <div className="mt-1.5 p-3 border border-white/10 group-hover:border-accent-green transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-wide group-hover:text-accent-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-secondary-gray/50 uppercase tracking-widest mt-1.5 select-none">
                    [SYSTEM COMPONENT]
                  </p>
                </div>
              </div>

              {/* Description body */}
              <div className="lg:w-1/3 flex items-center">
                <p className="text-secondary-gray text-sm leading-relaxed font-sans group-hover:text-white transition-colors duration-300">
                  {service.desc}
                </p>
              </div>

              {/* Sub-system details checklist */}
              <div className="lg:w-1/4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-center">
                <ul className="space-y-2.5">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-secondary-gray">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-green/40" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. OUR PROCESS (HOW WE WORK)
         ──────────────────────────────────────────────────────── */}
      <section className="bg-black/40 border-b border-white/10 py-24 sm:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-3 mb-3 justify-center">
              <span className="h-[1px] w-6 bg-neon-purple" />
              <span className="text-xs font-mono tracking-[0.3em] text-neon-purple uppercase font-bold glow-purple">
                OUR PROCESS
              </span>
              <span className="h-[1px] w-6 bg-neon-purple" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight">
              HOW WE <span className="text-transparent text-stroke-white select-none">WORK.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative group bg-[#0b0b0b] border border-white/10 p-8 transition-all hover:border-accent-green/35">
                {/* Number bullet badge */}
                <span className="absolute -top-4 -left-4 w-9 h-9 bg-bg-dark border border-white/10 text-xs font-mono font-bold flex items-center justify-center text-accent-green group-hover:bg-accent-green group-hover:text-black">
                  {step.number}
                </span>

                <h4 className="text-sm font-mono font-bold text-white uppercase mb-3 tracking-wider select-none">
                  {step.title}
                </h4>
                <p className="text-xs text-secondary-gray leading-relaxed font-sans">
                  {step.description}
                </p>

                {/* Inline link arrows representing the connection path */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-20 text-white/5 group-hover:text-accent-green transition-all">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. SERVICES CLOSING CTA
         ──────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-radial-at-t from-[#1e1b4b]/10 via-black to-black text-center relative z-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="h-[1px] w-8 bg-accent-green" />
            <span className="text-xs font-mono tracking-[0.3em] text-accent-green uppercase font-bold glow-green">
              STAGING FOR GROWTH
            </span>
            <span className="h-[1px] w-8 bg-accent-green" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-tight mb-4 leading-tight text-white">
            LET'S CONFIGURE YOUR <br />
            <span className="text-transparent text-stroke-white select-none">SYSTEM.</span>
          </h2>
          <p className="text-secondary-gray text-base max-w-lg mb-10 leading-relaxed font-sans">
            Scale your content consistency, refine your digital aesthetic staging, and launch with cinematic vertical impact.
          </p>

          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-10 py-5 text-xs font-semibold tracking-widest uppercase bg-accent-green text-black overflow-hidden rounded-none transition-transform duration-300"
          >
            <span className="relative z-10 flex items-center gap-2 font-bold group-hover:text-white transition-colors duration-300">
              START A PROJECT
              <ArrowUpRight className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 z-0 bg-black origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
