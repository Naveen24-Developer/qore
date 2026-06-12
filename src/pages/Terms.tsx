/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Scale } from "lucide-react";

export default function Terms() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-bg-dark text-white pt-36 pb-24 min-h-screen relative overflow-hidden"
    >
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-neon-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-left">
        <div className="flex items-center gap-3 mb-6">
          <Scale className="w-8 h-8 text-accent-green glow-green" />
          <span className="text-xs font-mono tracking-[0.3em] text-accent-green font-bold uppercase select-none glow-green">
            LEGAL STATEMENT
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight mb-8">
          TERMS & CONDITIONS.
        </h1>

        <p className="text-xs font-mono text-secondary-gray uppercase mb-8">
          LAST REVISED: MAY 27, 2026
        </p>

        <div className="space-y-8 text-secondary-gray text-sm leading-relaxed max-w-3xl font-sans">
          <p>
            Welcome to QORE Studio. These Terms govern the usage of this web solution, its integrated geometric tools, and general client project interactions with QORE agency frameworks.
          </p>

          <h3 className="text-lg font-display font-bold uppercase text-white tracking-wide">
            1. INTELLECTUAL PROPERTY RIGHTS
          </h3>
          <p>
            Unless otherwise agreed upon in a signed physical Master Services Agreement (MSA), all graphic elements, custom logo vectors, and codebases constructed natively by QORE remain our proprietary intellectual property until full draft payment settlements have been reconciled.
          </p>

          <h3 className="text-lg font-display font-bold uppercase text-white tracking-wide">
            2. CLIENT MEDIA LICENSING
          </h3>
          <p>
            By transmitting branding assets or raw video captures, client warrants that they hold legitimate distribution licenses. QORE cannot be held liable for copyright claims arising from raw assets provided by client administrators.
          </p>

          <h3 className="text-lg font-display font-bold uppercase text-white tracking-wide">
            3. AMENDMENT OF RATES
          </h3>
          <p>
            Our project estimates are validated for precisely 30 days starting from the formal quote dispatch date. After this duration, we reserve the right to recalibrate creative fees based on editor availability and queue demands.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
