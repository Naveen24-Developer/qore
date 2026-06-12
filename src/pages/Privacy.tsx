/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";

export default function Privacy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-bg-dark text-white pt-36 pb-24 min-h-screen relative overflow-hidden"
    >
      <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-neon-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-left">
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="w-8 h-8 text-accent-green glow-green" />
          <span className="text-xs font-mono tracking-[0.3em] text-accent-green font-bold uppercase select-none glow-green">
            LEGAL STATEMENT
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight mb-8">
          PRIVACY POLICY.
        </h1>

        <p className="text-xs font-mono text-secondary-gray uppercase mb-8">
          LAST REVISED: MAY 27, 2026
        </p>

        <div className="space-y-8 text-secondary-gray text-sm leading-relaxed max-w-3xl font-sans">
          <p>
            At QORE Studio, accessible from hello@qorestudio.com and our associated subdomains, maintaining the strict confidentiality of our startup clients' proprietary source designs, media files, and metric strategies is one of our primary operating priorities.
          </p>

          <h3 className="text-lg font-display font-bold uppercase text-white tracking-wide">
            1. COLLECTION OF INFORMATION
          </h3>
          <p>
            We collect the general metadata specifications you transmit willfully via our primary intake form. This encompasses: Full Name, Brand, Contact Email, selected Services, and project brief descriptions. This data is leveraged strictly to draft accurate service contracts or formulate creative roadmap estimates.
          </p>

          <h3 className="text-lg font-display font-bold uppercase text-white tracking-wide">
            2. CLIENT MEDIA CONFIDENTIALITY
          </h3>
          <p>
            Any cinematic sequence, sound layer, pre-render vector, or strategic positioning brief sent to our platform is held privately in sandboxed cloud directories. QORE does not share, sell, or license our clients' pre-launch raw files to third-party ad networks under any circumstances.
          </p>

          <h3 className="text-lg font-display font-bold uppercase text-white tracking-wide">
            3. PERSISTENT LOCAL CACHING
          </h3>
          <p>
            This application implements minimal browser parameters to buffer visual assets, ensuring high-speed delivery of interface components on secondary loads. It does not load tracking pixels or unsolicited telemetry cookies.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
