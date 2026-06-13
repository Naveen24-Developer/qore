/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Award, Flame, Star, Zap } from "lucide-react";
import { clientLogos, featuredWork, servicesList, statsList } from "../data";
import { WorkItem } from "../types";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState<WorkItem | null>(null);
  const previewVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isUnmuted, setIsUnmuted] = useState(false);

  useEffect(() => {
    if (!selectedProject) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const categories = ["ALL", "BRAND FILM", "PRODUCT LAUNCH", "SOCIAL CAMPAIGN"];

  // Map filters to content query
  const filteredWork = activeFilter === "ALL"
    ? featuredWork
    : featuredWork.filter(item => item.category === activeFilter);

  const clientDirectory = [
    { name: "SENTIN", sector: "AI Defense Systems", code: "SNTN-0" },
    { name: "flix.", sector: "Subscription Video", code: "FLX-11" },
    { name: "NEXORA", sector: "Cloud Computing", code: "NEXRS-9" },
    { name: "alto", sector: "Autonomous Driving", code: "ALT-3" },
    { name: "VOYRA", sector: "Aerospace Launch", code: "VYR-77" },
    { name: "DRIVEVA", sector: "Smart EV Rental", code: "DRVV-5" },
    { name: "ZENITH", sector: "Micro-SaaS Tech", code: "ZNT-41" },
    { name: "CHEYON", sector: "Creative Synthesis", code: "CHYN" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-bg-dark text-white pt-24 min-h-screen relative overflow-hidden"
    >
      {/* Background radial soft lights */}
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-accent-green/5 blur-[120px] pointer-events-none" />

      {/* ────────────────────────────────────────────────────────
          1. HEADER
         ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-24 relative z-10 text-left border-b border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-8 bg-accent-green" />
          <span className="text-xs font-mono tracking-[0.3em] text-accent-green font-bold uppercase glow-green">
            OUR SHOWCASE
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-black uppercase tracking-tight leading-none mb-6">
          IDEAS. <span className="text-transparent text-stroke-white glow-purple tracking-wide">DESIGNED.</span> <br />
          EDITED. DELIVERED.
        </h1>
        <p className="text-secondary-gray text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
          A premium selection of modular campaigns, cinematic edits, and scale branding architectures configured for startups pushing category limits.
        </p>
      </section>

      {/* Preview modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="preview-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative max-w-5xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-3 -right-3 bg-white text-black rounded-full w-9 h-9 flex items-center justify-center shadow-lg"
                aria-label="Close preview"
              >
                ✕
              </button>

              <div className="bg-[#0b0b0b] rounded-md overflow-hidden">
                <div className="w-full bg-black">
                  {selectedProject.mediaType === "video" && selectedProject.videoUrl ? (
                    <div className="relative">
                      <video
                        ref={previewVideoRef}
                        src={selectedProject.videoUrl}
                        poster={selectedProject.imageUrl}
                        className="w-full max-h-[70vh] object-contain bg-black"
                        controls
                        autoPlay
                        playsInline
                        muted={!isUnmuted}
                      />
                      <button
                        onClick={() => {
                          const newUnmuted = !isUnmuted;
                          setIsUnmuted(newUnmuted);
                          const v = previewVideoRef.current;
                          if (v) v.muted = !newUnmuted;
                        }}
                        className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded"
                      >
                        {isUnmuted ? "Mute" : "Unmute"}
                      </button>
                    </div>
                  ) : (
                    <img
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      className="w-full max-h-[70vh] object-contain"
                    />
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-display font-medium uppercase mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-secondary-gray mb-4">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono uppercase tracking-widest text-white/75 bg-bg-dark border border-white/10 px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ────────────────────────────────────────────────────────
          2. FILTER BAR
         ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-8 relative z-10">
        <div className="flex flex-wrap gap-2.5 border-b border-white/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`relative px-4 py-2.5 text-xs font-mono tracking-widest uppercase transition-all rounded-none focus:outline-none ${
                activeFilter === cat
                  ? "text-black font-bold z-10"
                  : "text-secondary-gray border border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              <span className="relative z-10">{cat}</span>
              {activeFilter === cat && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-accent-green glow-green"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. WORKGRID SHOWCASE
         ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-24 relative z-10 border-b border-white/10">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredWork.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="bg-[#050505]/65 border border-white/10 group overflow-hidden relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Edge markings on hover */}
                <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-transparent group-hover:border-accent-green/45 transition-colors duration-300 z-10 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-transparent group-hover:border-accent-green/45 transition-colors duration-300 z-10 pointer-events-none" />

                <div
                  className="relative aspect-video overflow-hidden bg-zinc-950 border-b border-white/10"
                  onMouseEnter={(e) => {
                    const v = (e.currentTarget.querySelector("video") as HTMLVideoElement | null);
                    if (v) {
                      v.currentTime = 0;
                      v.muted = true;
                      v.play().catch(() => {});
                    }
                  }}
                  onMouseLeave={(e) => {
                    const v = (e.currentTarget.querySelector("video") as HTMLVideoElement | null);
                    if (v) {
                      v.pause();
                      v.currentTime = 0;
                    }
                  }}
                >
                  {project.videoUrl ? (
                    <video
                      src={project.videoUrl}
                      poster={project.imageUrl}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
                      playsInline
                      muted
                      loop
                      preload="metadata"
                      aria-label={project.title}
                    />
                  ) : (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  {/* Subtle vector grid overlaid in the media card for premium styling */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[9px] font-mono tracking-widest text-white">
                    {project.category}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-2xl font-display font-medium tracking-tight uppercase text-white group-hover:text-accent-green transition-colors duration-300">
                      {project.title}
                    </h3>
                    <Award className="w-5 h-5 text-secondary-gray opacity-30 group-hover:opacity-100 group-hover:text-accent-green transition-all" />
                  </div>

                  <p className="text-secondary-gray text-sm leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono uppercase tracking-widest text-white/75 bg-bg-dark border border-white/10 px-2.5 py-1 select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. STARTUP CLIENT LOGO SHOWCASE (GRYSCALE BORDERS)
         ──────────────────────────────────────────────────────── */}
      <section className="bg-black/10 border-t border-white/10 py-24 sm:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col items-start mb-16 text-left">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-8 bg-neon-purple" />
              <span className="text-xs font-mono tracking-[0.3em] text-neon-purple uppercase font-bold glow-purple">
                PARTNERS WALLED
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium uppercase tracking-tight">
              CLIENT <span className="text-transparent text-stroke-white glow-purple tracking-wide">DIRECTORY.</span>
            </h2>
          </div>

          {/* Grayscale boxes layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={`logo-m1-${index}`}
                whileHover={{ scale: 1.01 }}
                className="bg-[#0b0b0b]/60 border border-white/10 hover:border-accent-green/35 p-6 flex flex-col justify-between min-h-[160px] relative group transition-colors duration-300"
              >
                {/* Edge ticks */}
                <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-transparent group-hover:border-accent-green/30 transition-colors" />
                <span className="text-[10px] font-mono text-secondary-gray/60 flex justify-between items-center mb-6 select-none">
                  <span>{logo.name}</span>
                  <Zap className="w-3.5 h-3.5 text-secondary-gray/40 group-hover:text-accent-green transition-colors" />
                </span>

                <div>
                  <img 
                    src={logo.imageUrl}
                    alt={logo.name}
                  className="text-xl sm:text-2xl font-display font-extrabold uppercase tracking-widest text-[#555] group-hover:text-white transition-colors duration-300"
                  />
                    
                  <p className="text-[11px] font-sans text-secondary-gray/60 group-hover:text-accent-green font-mono uppercase tracking-wider mt-1.5 transition-colors">
                    {logo.type === "text" ? "Tech Startup" : "Creative Client"  }
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
