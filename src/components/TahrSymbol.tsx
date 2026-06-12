/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

interface TahrSymbolProps {
  className?: string;
  glow?: boolean;
}

export default function TahrSymbol({ className = "w-full h-auto", glow = true }: TahrSymbolProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Neo Purple glowing background aura */}
      {glow && (
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-[15%] rounded-full bg-indigo-600/20 blur-[60px] pointer-events-none z-0"
        />
      )}

      {/* Futuristic Vector Mascot Tahr */}
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 filter drop-shadow-[0_0_20px_rgba(139,92,246,0.35)]"
      >
        <g>
          {/* Concentric orbital rings symbolizing 'THE CORE' */}
          <motion.circle
            cx="250"
            cy="250"
            r="190"
            stroke="url(#purpleGradient)"
            strokeWidth="2.5"
            strokeDasharray="15 10 5 5"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />

          <motion.circle
            cx="250"
            cy="250"
            r="205"
            stroke="url(#greenGradient)"
            strokeWidth="1.5"
            strokeDasharray="40 100"
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          />

</g>


        
        

        {/* Gradients */}
        <defs>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#D946EF" />
          </linearGradient>

          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A6FF4D" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>

          <linearGradient id="bodyDarkGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#1E1B4B" />
            <stop offset="50%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#030712" />
          </linearGradient>

          <linearGradient id="hornGoldenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#818CF8" />
            <stop offset="70%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>

          <linearGradient id="tahrMetallicFace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="40%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
