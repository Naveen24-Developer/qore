/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = "h-8", showTagline = false }: LogoProps) {
  return (
    <div className="flex flex-col items-center sm:items-start group cursor-pointer">
      <div className={`flex items-center gap-1 ${className}`}>
        {/* Futuristic Custom Vector SVG Logo for QORE */}
        <svg
          viewBox="0 0 350 100"
          className="h-full w-auto fill-current text-white transition-all duration-300 group-hover:text-accent-green"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Letter Q (Modern Circle styling with custom spacing and stylish angular tail) */}
          <path
            d="M 60 15 
               C 85 15, 105 35, 105 60 
               C 105 73, 100 85, 91 92 
               L 105 106 
               L 85 106 
               L 75 96 
               C 70 98, 65 99, 60 99 
               C 35 99, 15 79, 15 60 
               C 15 35, 35 15, 60 15 Z 
               M 60 28 
               C 42 28, 28 42, 28 60 
               C 28 78, 42 92, 60 92 
               C 71 92, 80 87, 85 79 
               L 65 79 
               L 55 69 
               L 91 69 
               C 92 66, 92 63, 92 60 
               C 92 42, 78 28, 60 28 Z"
          />
          {/* Letter O (Circular target with a technical geometric notch at the top) */}
          <path
            d="M 160 30
               C 176 30, 189 43, 189 60
               C 189 77, 176 90, 160 90
               C 144 90, 131 77, 131 60
               C 131 43, 144 30, 160 30 Z
               M 160 41
               C 149 41, 141 49, 141 60
               C 141 71, 149 79, 160 79
               C 171 79, 179 71, 179 60
               C 179 49, 171 41, 160 41 Z"
          />
          {/* Micro structural slits on the O to match the premium technical logo */}
          <rect x="156" y="25" width="8" height="12" fill="#0A0A0A" />
          <path d="M 152 32 L 160 22 L 168 32" stroke="currentColor" strokeWidth="2.5" fill="none" />

          {/* Letter R (Geometric stencil cut R) */}
          <path
            d="M 210 30 
               H 250 
               C 265 30, 275 40, 275 53
               C 275 66, 264 74, 250 74
               H 230
               V 90
               H 210 V 30 Z
               M 230 42
               V 62
               H 248
               C 254 62, 257 59, 257 53
               C 257 47, 254 42, 248 42
               H 230 Z"
          />
          <path
            d="M 245 70
               L 273 90
               H 295
               L 264 68
               Z"
          />

          {/* Letter E (Comb styled 3 horizontal parallel spikes linked on the left) */}
          <path
            d="M 300 30 
               H 350 
               V 40 
               H 312 
               V 53 
               H 342 
               V 63 
               H 312 
               V 80 
               H 350 
               V 90 
               H 300 
               Z"
          />
        </svg>
      </div>

      {showTagline && (
        <span className="text-[9px] tracking-[0.55em] text-accent-green font-mono uppercase mt-2 opacity-90 font-semibold select-none glow-green">
          BUILD FROM THE CORE
        </span>
      )}
    </div>
  );
}
