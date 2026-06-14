/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Globe, Mail, Clock } from "lucide-react";
import Logo from "../assets/QORE-Logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark border-t border-white/10 pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 relative overflow-hidden">
      {/* Background gradients - responsive positioning */}
      <div className="absolute bottom-0 right-[15%] w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 rounded-full bg-neon-purple/5 blur-2xl sm:blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 left-[10%] w-40 sm:w-56 md:w-64 lg:w-80 h-40 sm:h-56 md:h-64 lg:h-80 rounded-full bg-accent-green/5 blur-2xl sm:blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
          
          {/* Logo & Description - Full width on mobile, half on tablet, 5 cols on desktop */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
            <img 
              src={Logo} 
              alt="QORE Logo" 
              className="w-40 sm:w-44 md:w-48 lg:w-52 h-auto mb-4 sm:mb-5" 
            />
            <p className="text-secondary-gray text-xs sm:text-sm max-w-sm leading-relaxed font-sans">
              Premium marketing and editing systems for ambitious startups that want to scale faster, look iconic, and lead their category.
            </p>
          </div>

          {/* Quick Links - Full width on mobile, half on tablet, 2 cols on desktop */}
          <div className="sm:col-span-1 lg:col-span-2 flex flex-col items-center sm:items-start">
            <h4 className="text-[10px] sm:text-xs font-mono font-semibold tracking-widest text-white uppercase mb-4 sm:mb-5 md:mb-6">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 sm:space-y-3 font-medium text-sm text-center sm:text-left">
              <li>
                <Link to="/" className="text-secondary-gray hover:text-accent-green transition-colors duration-300 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-gray hover:text-accent-green transition-colors duration-300 inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-gray hover:text-accent-green transition-colors duration-300 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-secondary-gray hover:text-accent-green transition-colors duration-300 inline-block">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-gray hover:text-accent-green transition-colors duration-300 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details - Full width on mobile, half on tablet, 3 cols on desktop */}
          <div className="sm:col-span-1 lg:col-span-3 flex flex-col items-center sm:items-start">
            <h4 className="text-[10px] sm:text-xs font-mono font-semibold tracking-widest text-white uppercase mb-4 sm:mb-5 md:mb-6">
              CONTACT
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-center sm:text-left text-secondary-gray font-sans">
              <li className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-green shrink-0" />
                <a href="mailto:hello@qore.com" className="hover:text-white transition-colors break-all sm:break-normal">
                  hello@qore.com
                </a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3">
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-green shrink-0" />
                <a href="https://www.instagram.com/theqore.in?igsh=Yzk5M2I2aXdvOHhw" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  @qorestudios.in
                </a>
              </li>
              <li className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-green mt-0.5 shrink-0" />
                <span className="text-[11px] sm:text-xs leading-relaxed text-center sm:text-left">
                  Open for selected startup projects worldwide.
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links - Full width on mobile/tablet, 2 cols on desktop */}
          <div className="sm:col-span-2 lg:col-span-2 flex flex-col items-center sm:items-start">
            <h4 className="text-[10px] sm:text-xs font-mono font-semibold tracking-widest text-white uppercase mb-4 sm:mb-5 md:mb-6">
              FOLLOW US
            </h4>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.instagram.com/theqore.in?igsh=Yzk5M2I2aXdvOHhw"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-none border border-white/10 flex items-center justify-center text-secondary-gray hover:border-accent-green hover:text-accent-green transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/theqore/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-none border border-white/10 flex items-center justify-center text-secondary-gray hover:border-accent-green hover:text-accent-green transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-none border border-white/10 flex items-center justify-center text-secondary-gray hover:border-accent-green hover:text-accent-green transition-all duration-300"
                aria-label="Website"
              >
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 w-full mb-6 sm:mb-8" />

        {/* Bottom Section - Fully Responsive */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs font-mono text-secondary-gray text-center select-none">
          <p>© {currentYear} QORE. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}