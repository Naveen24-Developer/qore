/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Check, Quote, Calendar, Award, Star, TrendingUp, Users } from "lucide-react";
import { statsList } from "../data";
import TahrSymbol from "../components/TahrSymbol";
import Logo from "../assets/Qore-Q-Logo.png";
import Sign from "../assets/Founder-Sign.png";
export default function About() {
  const whyQoreBullets = [
    "Minimal but impactful design styling",
    "Premium-first execution on visual media",
    "Fast-moving nimble creative systems",
    "Content engineered to interest modern audiences",
    "Brand storytelling matching modern cinematic quality",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-bg-dark text-white pt-24 min-h-screen relative overflow-hidden"
    >
      {/* Glow animations */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[2%] w-[400px] h-[400px] rounded-full bg-accent-green/5 blur-[100px] pointer-events-none" />

      {/* ────────────────────────────────────────────────────────
          1. ABOUT HEADER & HERO
         ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-white/10">
        <div className="lg:col-span-7 flex flex-col items-start lg:pr-12 lg:border-r lg:border-white/10 h-full justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-accent-green" />
            <span className="text-xs font-mono tracking-[0.3em] text-accent-green font-bold uppercase glow-green">
              ABOUT QORE
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-black uppercase tracking-tight leading-none mb-6">
            BUILT FOR AMBITIOUS <br />
            <span className="text-transparent text-stroke-white glow-purple">STARTUPS.</span>
          </h1>
          <p className="text-secondary-gray text-base sm:text-lg leading-relaxed mb-6 font-sans">
            QORE was created to help startups compete visually with the biggest brands in the world. We believe that lack of a massive corporate budget should never translate to average staging.
          </p>
          <div className="h-[2px] bg-accent-green w-16 mb-6 glow-green" />
          <p className="text-secondary-gray text-base leading-relaxed">
            We combine premium design aesthetics, strict marketing communication strategy, and cinematic sound-editing into a singular unified creative workspace built to generate attention and accelerate startup category dominance.
          </p>
        </div>

{/* Hero Image Side Concept (The Tahr Mascot with Logo Overlay) */}
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
                src={Logo}
                alt="QORE Logo"
                className="w-full h-auto relative z-10 drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. MISSION STATEMENT
         ──────────────────────────────────────────────────────── */}
      <section className="bg-black/40 border-b border-white/10 py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-6 bg-neon-purple" />
            <span className="text-xs font-mono tracking-[0.3em] text-neon-purple font-bold uppercase glow-purple">
              OUR MISSION
            </span>
            <span className="h-[1px] w-6 bg-neon-purple" />
          </div>
          <h2 className="text-xl sm:text-3xl font-display font-medium leading-relaxed text-white max-w-4xl">
            "To help startups build powerful visual identities and digital systems that attract premium attention, inspire deep trust, and accelerate organizational growth."
          </h2>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. WHY QORE & THE TAHR SYMBOL SPLIT
         ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-white/10">
        {/* Left Side: Why QORE */}
        <div className="flex flex-col items-start bg-[#050505]/60 hover:bg-black/20 p-8 border border-white/10 relative">
          <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/20" />
          <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/20" />
          
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-accent-green" />
            <span className="text-xs font-mono tracking-[0.3em] text-accent-green uppercase font-bold glow-green">
              WHY QORE
            </span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-display font-medium uppercase tracking-tight mb-8">
            RECONFIGURING <span className="text-transparent text-stroke-white">CREATIVE</span> EXECUTION.
          </h3>
          <ul className="space-y-4 w-full">
            {whyQoreBullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-4 p-4 bg-black/40 border border-white/10 transition-all hover:border-white/20 group">
                <div className="w-6 h-6 rounded-none bg-accent-green/10 flex items-center justify-center text-accent-green group-hover:bg-accent-green group-hover:text-black transition-colors shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm sm:text-base text-secondary-gray group-hover:text-white transition-colors">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: The Tahr Symbol meaning */}
        <div className="flex flex-col items-start bg-gradient-to-br from-indigo-950/10 via-black to-black p-8 sm:p-12 border border-white/10 relative overflow-hidden group">
          {/* Edge/corner markings to match editorial styling */}
          <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/30" />
          <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/30" />
          <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/30" />
          <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/30" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-10 pointer-events-none">
            <TahrSymbol className="w-full h-full" glow={false} />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-neon-purple" />
            <span className="text-xs font-mono tracking-[0.3em] text-neon-purple uppercase font-bold glow-purple">
              THE TAHR SYMBOL
            </span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-display font-medium uppercase tracking-tight mb-6">
            ELEVATION & <span className="text-transparent text-stroke-white select-none">DOMINANCE.</span>
          </h3>
          <p className="text-secondary-gray text-sm sm:text-base leading-relaxed mb-6 font-sans">
            The Nilgiri Tahr is a rare, majestic mountain goat native to steep rocky ridges. It symbolizes <strong>resilience, raw elevation, and undisputed category dominance</strong> under challenging, unpredictable alpine environments.
          </p>
          <p className="text-secondary-gray text-sm sm:text-base leading-relaxed font-sans mb-8">
            Like ambitious startups scaling the peaks of their respective industries, the Tahr continues its upwards climb where others stop. It doesn't find flat ground; it creates a stable footing on the absolute edge. <strong>That mindset defines QORE.</strong>
          </p>
          
          <div className="w-full flex justify-end">
            <span className="text-xs font-mono tracking-[0.3em] text-accent-green uppercase font-semibold select-none glow-green">
              CLIMB HIGHER
            </span>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. FOUNDER'S BELIEF BLOCK
         ──────────────────────────────────────────────────────── */}
      <section className="bg-black/60 border-b border-white/10 py-24 sm:py-32 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Workspace Concept Mock */}
            <div className="lg:col-span-5 relative h-[300px] sm:h-[400px] bg-zinc-950 border border-white/10 p-6 flex flex-col justify-between group">
              <div className="absolute inset-0 bg-radial-at-t from-indigo-950/30 via-black to-black opacity-90 z-0" />
              
              {/* Corner markings */}
              <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-white/40" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-white/40" />
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-white/40" />
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-white/40" />

              <div className="relative z-10 text-[9px] font-mono tracking-widest text-secondary-gray uppercase flex justify-between items-center bg-black/40 px-3 py-1.5 border border-white/10">
                <span>PROJECT STATION 01</span>
                <span className="w-2 h-2 rounded-full bg-accent-green glow-green" />
              </div>
              
              {/* Minimal geometric desk mockup */}
              <div className="relative z-10 w-full flex flex-col items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-xl font-display font-light text-center tracking-[0.25em] text-white">QORE WORKSPACE</div>
                <div className="w-1/3 h-[2px] bg-accent-green glow-green" />
              </div>

              <div className="relative z-10 flex justify-between items-baseline text-xs font-mono text-secondary-gray">
                <span>CRAFTED PRIVATELY</span>
                <span>UTC+0</span>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col items-start">
              <Quote className="w-12 h-12 text-accent-green mb-6 opacity-85 glow-green" />
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[1px] w-8 bg-neon-purple" />
                <span className="text-xs font-mono tracking-[0.3em] text-neon-purple font-bold uppercase  glow-purple">
                  FOUNDER'S BELIEF
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-display font-bold uppercase tracking-tight text-white mb-6 leading-tight">
                "Startups deserve world-class creative execution from day one."
              </h3>
              <p className="text-secondary-gray text-base leading-relaxed mb-8">
                QORE exists to remove the gap between incredibly ambitious startup solutions and the level of aesthetic maturity they deserve to be seen in. Your initial impressions construct your lasting organic valuation.
              </p>
              <div>
                <img src={Sign} alt="Founder Signature" className="w-24 h-auto" />
                <p className="text-sm font-mono font-bold tracking-widest text-accent-green uppercase select-none glow-green">
                  Founder, QORE
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. METRICS / STATS CARDS
         ──────────────────────────────────────────────────────── */}
      <section className="bg-bg-dark pt-24 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col items-start mb-16 text-left">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-8 bg-accent-green" />
              <span className="text-xs font-mono tracking-[0.3em] text-accent-green uppercase font-bold glow-green">
                METRIC SNAPSHOTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight">
              PERFORMANCE IN <span className="text-transparent text-stroke-white">NUMBERS.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsList.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#0b0b0b] border border-white/10 p-8 relative flex flex-col justify-between min-h-[180px] hover:border-accent-green/35 transition-colors group"
              >
                <div className="text-xs font-mono text-secondary-gray uppercase tracking-widest flex justify-between items-center mb-6">
                  <span>METRIC 0{idx + 1}</span>
                  {idx === 0 && <Award className="w-4 h-4 text-neon-purple" />}
                  {idx === 1 && <Users className="w-4 h-4 text-accent-green" />}
                  {idx === 2 && <TrendingUp className="w-4 h-4 text-neon-purple" />}
                  {idx === 3 && <Star className="w-4 h-4 text-accent-green" />}
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-display font-black text-white mb-2 group-hover:text-accent-green transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-sans tracking-wide text-secondary-gray leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
