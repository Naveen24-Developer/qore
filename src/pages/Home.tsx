/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, Play, Cpu, Heart, Sparkles, Flame, ShieldCheck } from "lucide-react";
import { clientLogos, featuredWork, servicesList, statsList } from "../data";
import TahrSymbol from "../components/TahrSymbol";
import QLogo from "../assets/Qore-Q-Logo.png";
import SaturnLogo from "../assets/Saturn-Logo.png"

// Stagger child animation helper
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-bg-dark text-white pt-24 min-h-screen relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[2%] w-[400px] h-[400px] rounded-full bg-accent-green/5 blur-[100px] pointer-events-none" />

      {/* ────────────────────────────────────────────────────────
          1. HERO SECTION
         ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 border-b border-white/10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left lg:pr-12 lg:border-r lg:border-white/10 h-full justify-center"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-[1px] w-8 bg-accent-green" />
            <span className="text-xs sm:text-xs font-mono tracking-[0.3em] text-accent-green font-bold uppercase glow-green">
              A PREMIUM STARTUPS MOVEMENT
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight uppercase leading-[0.95] mb-6"
          >
            BUILD FROM <br />
            THE <span className="text-transparent text-stroke-white glow-purple tracking-wide">CORE</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-secondary-gray text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-sans"
          >
            Premium marketing and editing systems for startups that want to scale faster, look iconic, and lead their category.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Primary CTA Button */}
            <Link
              to="/work"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-xs font-semibold tracking-widest uppercase bg-transparent border border-accent-green overflow-hidden rounded-none transition-colors duration-300"
            >
              <span className="relative z-10 flex items-center gap-2 text-accent-green group-hover:text-black font-bold">
                EXPLORE WORK
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <div className="absolute inset-0 z-0 bg-accent-green origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>

            {/* Secondary CTA Button */}
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-xs font-semibold tracking-widest uppercase border border-white/20 bg-transparent rounded-none overflow-hidden transition-colors duration-300 hover:border-white"
            >
              <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-black font-bold">
                START A PROJECT
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 z-0 bg-white origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Image Side Concept (The Tahr Mascot with Logo Overlay) */}
        {/* Minimal counter-clockwise spin keyframes for logo */}
        <style>{`@keyframes spin-ccw { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } } .spin-ccw { animation: spin-ccw 12s linear infinite; transform-origin: center; }`}</style>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center items-center relative h-[280px] sm:h-[350px] lg:h-[450px]"
        >
          {/* Frame decorative corner ticks to enhance editorial aesthetic */}
          <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20" />
          <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20" />
          <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20" />
          <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/20" />

          {/* Background Tahr Symbol */}
          <TahrSymbol className="w-4/5 sm:w-full sm:max-w-[420px] opacity-90" glow={true} />

          {/* Logo Overlay Container */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.5 }}
              className="relative w-3/4 sm:w-2/3 lg:w-1/2 flex items-center justify-center"
            >
              {/* Logo Background Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-green/15 via-black/30 to-accent-green/5 rounded-full blur-2xl" />
              
              {/* Logo Frame Border */}
              <div className="absolute inset-0 rounded-full border border-accent-green/30 shadow-[0_0_40px_rgba(166,255,77,0.1)]" />

              {/* Logo Image */}
              <img
                src={SaturnLogo}
                alt="QORE"
                className="w-full h-auto relative z-10 drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)] spin-ccw"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ────────────────────────────────────────────────────────
          CLIENT LOGOS ROW (INFINITE SCROLLING MARQUEE)
         ──────────────────────────────────────────────────────── */}
      <section className="border-y border-white/5 py-10 bg-black/40 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-4">
          <p className="text-[10px] tracking-[0.25em] font-mono text-secondary-gray uppercase text-center sm:text-left font-bold select-none">
            TRUSTED BY AMBITIOUS FOUNDERS
          </p>
        </div>
        
        {/* Endless Marquee loop */}
        <div className="flex overflow-hidden relative w-full mt-4">
          <div className="animate-marquee flex items-center gap-12 sm:gap-60 whitespace-nowrap">
            {/* First Set */}
            {clientLogos.concat(clientLogos).concat(clientLogos).map((logo, index) => (
              <div
                key={`logo-m1-${index}`}
                className="flex items-center justify-center flex-shrink-0"
              >
                {logo.type === "image" ? (
                  // Image Logo
                  <img
                    src={logo.imageUrl}
                    alt={logo.name}
                    className="h-12 sm:h-20 w-auto max-w-[120px] sm:max-w-[140px] object-contain opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  />
                ) : (
                  // Text Logo
                  <div className="text-lg sm:text-2xl font-display font-light uppercase tracking-[0.2em] text-secondary-gray/50 hover:text-white transition-all duration-300 cursor-pointer flex items-center gap-3">
                    <span>{logo.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green/60" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. BRAND STATEMENT SECTION
         ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-white/10">
        <div className="lg:col-span-6 relative h-[250px] sm:h-[350px] rounded-none overflow-hidden bg-[#0A0A0A] border border-white/10 flex items-center justify-center p-8 group">
          {/* Subtle starry alpine gradient background */}
          <div className="absolute inset-0 bg-radial-at-t from-indigo-900/15 via-black/40 to-black z-0" />
          
          {/* Edge/corner markings to look technical & premium editorial */}
          <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/30" />
          <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/30" />
          <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/30" />
          <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/30" />

          <div className="absolute bottom-4 left-4 text-[10px] font-mono tracking-[0.2em] text-secondary-gray z-10">
            ALTITUDE OVER ATTENTION [01]
          </div>
          <div className="w-full h-full max-w-[280px] opacity-70 group-hover:opacity-100 transition-opacity duration-500">
            {/* Clean inline wireframe visual outline of mounting peak */}
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-indigo-500/20 stroke-current">
              <path d="M 20 180 L 80 80 L 110 120 L 150 40 L 190 180 Z" strokeWidth="1.5" />
              <path d="M 40 180 L 90 100 L 140 180 Z" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="150" cy="40" r="4" fill="#A6FF4D" />
            </svg>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-neon-purple" />
            <span className="text-xs font-mono tracking-[0.3em] text-neon-purple uppercase font-bold select-none glow-purple">
              MORE THAN AN AGENCY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight leading-[1.0] mb-4 text-white">
            A GROWTH & TECHNOLOGY PARTNER FOR <span className="text-transparent text-stroke-white glow-purple tracking-wide">STARTUPS.</span>
          </h2>
          <p className="text-secondary-gray text-base leading-relaxed mb-4">
            QORE helps modern startups build unforgettable digital presence through cinematic video editing, strategic brand staging, and custom technology solutions.
          </p>
          <p className="text-secondary-gray text-base leading-relaxed">
            We build creative assets that feel aspirational, perform seamlessly across devices, and convert passive clicks into compounding organizational value. We do not just design; we configure systems built to scale.
          </p>
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest text-accent-green hover:text-white transition-colors duration-300 mt-4"
          >
            Our core mission
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. WHAT WE DO GRID (SERVICES PREVIEW)
         ──────────────────────────────────────────────────────── */}
      <section className="bg-black/30 border-b border-white/10 py-24 sm:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col items-start mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-8 bg-accent-green" />
              <span className="text-xs font-mono tracking-[0.3em] text-accent-green uppercase font-bold glow-green">
                WHAT WE DO
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight">
              CREATIVE SYSTEMS THAT DRIVE <span className="text-transparent text-stroke-white glow-purple tracking-wide">GROWTH.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -6 }}
                className="bg-[#0b0b0b] border border-white/10 p-8 rounded-none transition-all duration-300 hover:border-accent-green/45 hover:shadow-[0_8px_30px_rgb(166,255,77,0.03)] group relative flex flex-col justify-between min-h-[310px]"
              >
                {/* Visual architectural indicator corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-transparent group-hover:border-accent-green/40 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-transparent group-hover:border-accent-green/40 transition-colors" />

                <div>
                  <div className="text-xs font-mono text-secondary-gray tracking-wider mb-6 flex justify-between items-center">
                    <span className="font-bold text-accent-green">{service.number}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-accent-green transition-all" />
                  </div>
                  <h3 className="text-lg font-display font-bold uppercase tracking-wide text-white mb-4 group-hover:text-accent-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-secondary-gray leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>
                </div>

                <Link
                  to="/services"
                  className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/20 group-hover:text-accent-green group-hover:translate-x-1 transition-all"
                >
                  Explore Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. FEATURED WORK SECTION
         ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32 relative z-10 border-b border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-8 bg-neon-purple" />
              <span className="text-xs font-mono tracking-[0.3em] text-neon-purple uppercase font-bold glow-purple">
                FEATURED WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight">
              IDEAS. <span className="text-transparent text-stroke-white glow-purple tracking-wide">DESIGNED.</span> BUILT. DELIVERED.
            </h2>
            <p className="text-secondary-gray text-sm mt-3 font-mono">
              Real startup visuals. Real growth-focused execution.
            </p>
          </div>

          <Link
            to="/work"
            className="group inline-flex items-center gap-2 border border-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:border-accent-green hover:text-accent-green transition-all duration-300"
          >
            VIEW ALL WORK
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Featured projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredWork.map((project, idx) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.01 }}
              className="bg-[#0b0b0b] border border-white/10 overflow-hidden group rounded-none relative"
            >
              <div className="absolute top-3 right-3 text-[9px] font-mono text-white/20 select-none z-20">PROJECT_0{idx + 1}</div>
              <div className="relative aspect-video overflow-hidden bg-zinc-900 border-b border-white/10">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/15 text-[10px] font-mono tracking-widest text-white">
                  {project.category}
                </div>
              </div>

              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-extrabold tracking-tight uppercase text-white mb-2 group-hover:text-accent-green transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-secondary-gray leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-wider text-secondary-gray bg-bg-dark border border-white/10 px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. WHY CHOOSE QORE ADVANTAGES
         ──────────────────────────────────────────────────────── */}
      <section className="bg-black/50 border-b border-white/10 py-24 sm:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[1px] w-8 bg-accent-green" />
                <span className="text-xs font-mono tracking-[0.3em] text-accent-green uppercase font-bold glow-green">
                  WHY QORE
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight mb-6">
                BUILT SPECIFICALLY FOR <span className="text-transparent text-stroke-white glow-purple tracking-wide">STARTUPS.</span>
              </h2>
              <p className="text-secondary-gray text-sm leading-relaxed mb-8">
                Early-stage ecosystems require extreme speed, aesthetic leverage, and cross-platform flexibility. Here is how we configure success.
              </p>
              
              <div className="h-[1px] bg-white/10 w-full my-6" />
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-display font-extrabold text-white mb-1">50+</div>
                  <div className="text-[11px] font-mono text-secondary-gray uppercase">Projects Staged</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-extrabold text-white mb-1">10M+</div>
                  <div className="text-[11px] font-mono text-secondary-gray uppercase">Organic Views</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0b0b0b] border border-white/10 p-6 relative group hover:border-accent-green/35 transition-colors">
                <div className="absolute top-2 right-2 text-[9px] font-mono text-white/15">[01]</div>
                <ShieldCheck className="w-6 h-6 text-accent-green mb-4" />
                <h4 className="text-sm font-mono font-bold text-white uppercase mb-2">Premium-first execution</h4>
                <p className="text-xs text-secondary-gray leading-relaxed">No generic templates or cheap cuts. Everything is meticulously designed to command market attention.</p>
              </div>
              <div className="bg-[#0b0b0b] border border-white/10 p-6 relative group hover:border-accent-green/35 transition-colors">
                <div className="absolute top-2 right-2 text-[9px] font-mono text-white/15">[02]</div>
                <Cpu className="w-6 h-6 text-accent-green mb-4" />
                <h4 className="text-sm font-mono font-bold text-white uppercase mb-2">Technology-backed systems</h4>
                <p className="text-xs text-secondary-gray leading-relaxed">High-performance custom stacks, WebGL components, and smart APIs that behave responsively.</p>
              </div>
              <div className="bg-[#0b0b0b] border border-white/10 p-6 relative group hover:border-accent-green/35 transition-colors">
                <div className="absolute top-2 right-2 text-[9px] font-mono text-white/15">[03]</div>
                <Sparkles className="w-6 h-6 text-accent-green mb-4" />
                <h4 className="text-sm font-mono font-bold text-white uppercase mb-2">Strategy-led marketing</h4>
                <p className="text-xs text-secondary-gray leading-relaxed">We sync video structures to your exact funding goals, retention curves, or sales conversion targets.</p>
              </div>
              <div className="bg-[#0b0b0b] border border-white/10 p-6 relative group hover:border-accent-green/35 transition-colors">
                <div className="absolute top-2 right-2 text-[9px] font-mono text-white/15">[04]</div>
                <Flame className="w-6 h-6 text-accent-green mb-4" />
                <h4 className="text-sm font-mono font-bold text-white uppercase mb-2">Fast turnaround</h4>
                <p className="text-xs text-secondary-gray leading-relaxed">Engineered workflows tailored for high-speed delivery, matching agile sprint frameworks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          6. CLOSING CTA (READY TO BUILD)
         ──────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-radial-at-b from-indigo-900/10 via-black to-black z-10 text-center">
        {/* Abstract orbits */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5 border-dashed opacity-30 pointer-events-none animate-spin" style={{ animationDuration: "120s" }} />

        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center">
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-green/10 via-black/20 to-accent-green/5 shadow-[0_0_60px_rgba(166,255,77,0.16)] blur-2xl" />
            <div className="absolute inset-6 sm:inset-8 rounded-full border border-white/10 bg-black/30 backdrop-blur-xl" />
            <div className="relative w-full h-full overflow-hidden rounded-full opacity-90 hover:opacity-100 transition-opacity duration-300">
              <TahrSymbol className="w-full h-full" glow={false} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36">
                <div className="absolute inset-0 rounded-full bg-black/40" />
                <div className="absolute inset-0 rounded-full border border-accent-green/30 shadow-[0_0_30px_rgba(166,255,77,0.25)]" />
                <img
                src={SaturnLogo}
                alt="QORE"
                className="w-full h-auto relative z-10 drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)] spin-ccw"
              />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="h-[1px] w-8 bg-accent-green" />
            <span className="text-xs font-mono tracking-[0.3em] text-accent-green uppercase font-bold glow-green">
              CLOSING CTA
            </span>
            <span className="h-[1px] w-8 bg-accent-green" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-tight mb-4 text-white leading-none">
            READY TO BUILD <br /> SOMETHING <span className="text-transparent text-stroke-white glow-purple tracking-wide">ICONIC?</span>
          </h2>
          <p className="text-secondary-gray text-base max-w-lg mb-10 leading-relaxed font-sans">
            Let's create a brand people remember. Partner with QORE to elevate your startup's aesthetic impact.
          </p>

          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-10 py-5 text-xs font-semibold tracking-widest uppercase bg-accent-green text-black overflow-hidden rounded-none transition-transform duration-300"
          >
            <span className="relative z-10 flex items-center gap-2 font-bold group-hover:text-white transition-colors duration-300">
              BOOK A DISCOVERY CALL
              <ArrowUpRight className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 z-0 bg-black origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
