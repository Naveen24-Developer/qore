/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Mail, Instagram, Clock, HelpCircle, ChevronDown, ChevronUp, Calendar, CheckCircle } from "lucide-react";
import { faqList } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    email: "",
    service: "",
    budget: "",
    details: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const services = [
    "Select services Needed",
    "Cinematic Video Editing",
    "Brand Identity",
    "Performance Marketing",
    "Website Development",
    "Custom Technology Solutions",
    "Content Strategy",
  ];

  const budgets = [
    "Optional Project Budget",
    "Under ₹5k",
    "₹5k - ₹15k",
    "₹15k - ₹40k",
    "₹40k+",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to send WhatsApp message professionally
  const sendWhatsAppMessage = (data: typeof formData) => {
    // Professional WhatsApp message format
    const message = `*✨ NEW PROJECT INQUIRY - QORE STUDIO ✨*

*📋 CLIENT DETAILS*
━━━━━━━━━━━━━━━━━━━━━
*👤 Name:* ${data.name.trim()}
*🏢 Brand/Startup:* ${data.brand.trim()}
*📧 Email:* ${data.email.trim()}
━━━━━━━━━━━━━━━━━━━━━

*🎯 PROJECT SPECIFICATIONS*
━━━━━━━━━━━━━━━━━━━━━
*🛠️ Service Required:* ${data.service}
*💰 Budget Range:* ${data.budget !== "Optional Project Budget" ? data.budget : "Not specified"}
━━━━━━━━━━━━━━━━━━━━━

*📝 PROJECT DETAILS*
━━━━━━━━━━━━━━━━━━━━━
${data.details.trim() || "No additional details provided."}

━━━━━━━━━━━━━━━━━━━━━
*⏰ Inquiry Date:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
*🔗 Source:* QORE Studio Website Contact Form

*📞 *Respond within 24 business hours*`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "+91 9443774834";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };


  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Simple validation
    if (!formData.name.trim()) return setErrorMsg("Full Name is required.");
    if (!formData.brand.trim()) return setErrorMsg("Startup / Brand Name is required.");
    if (!formData.email.trim() || !formData.email.includes("@")) {
      return setErrorMsg("Please provide a valid Email Address.");
    }
    if (formData.service === "" || formData.service === "Select services Needed") {
      return setErrorMsg("Please select a service component.");
    }

    // Send WhatsApp message
    sendWhatsAppMessage(formData);
    
    // Success simulation
    console.log("QORE Inquiry Submitted Successfully:", formData);
    setFormSubmitted(true);
  };

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-bg-dark text-white pt-24 min-h-screen relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-[12%] right-[5%] w-[450px] h-[450px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-accent-green/5 blur-[100px] pointer-events-none" />

      {/* ────────────────────────────────────────────────────────
          1. HEADER HERO
         ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-24 relative z-10 text-left border-b border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-8 bg-accent-green" />
          <span className="text-xs font-mono tracking-[0.3em] text-accent-green font-bold uppercase glow-green">
            GET IN TOUCH
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-black uppercase tracking-tight leading-none mb-6">
          LET'S BUILD YOUR BRAND <br />
          FROM <span className="text-transparent text-stroke-white glow-purple tracking-wide">THE CORE.</span>
        </h1>
        <p className="text-secondary-gray text-base sm:text-lg leading-relaxed max-w-2xl font-sans font-medium text-white/55">
          Tell us about your startup, goals, and vision. We'll help you configure a premium brand experience designed to perform.
        </p>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. CONTACT FORM AND SIDEBAR
         ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 relative z-10 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Block (Left) */}
          <div className="lg:col-span-7 bg-[#050505]/65 border border-white/10 p-8 sm:p-12 relative">
            <div className="absolute top-3 left-3 w-1.5 h-1.5 border-t border-l border-white/30" />
            <div className="absolute top-3 right-3 w-1.5 h-1.5 border-t border-r border-white/30" />
            <div className="absolute bottom-3 left-3 w-1.5 h-1.5 border-b border-l border-white/30" />
            <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-b border-r border-white/30" />

            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                >
                  <h3 className="text-lg font-mono font-bold uppercase tracking-wider text-neon-purple mb-8 glow-purple">
                    SEND US A MESSAGE
                  </h3>

                  {errorMsg && (
                    <div className="p-4 bg-red-950/40 border border-red-500/20 text-red-400 text-sm font-mono uppercase tracking-wide">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-mono text-secondary-gray uppercase tracking-widest mb-2 font-bold select-none">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full bg-bg-dark border border-white/10 px-4 py-3.5 text-sm rounded-none focus:outline-none focus:border-accent-green text-white transition-colors placeholder:text-zinc-600"
                    />
                  </div>

                  {/* Brand field */}
                  <div>
                    <label className="block text-xs font-mono text-secondary-gray uppercase tracking-widest mb-2 font-bold select-none">
                      STARTUP / BRAND NAME *
                    </label>
                    <input
                      type="text"
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      placeholder="Your startup or brand name"
                      className="w-full bg-bg-dark border border-white/10 px-4 py-3.5 text-sm rounded-none focus:outline-none focus:border-accent-green text-white transition-colors placeholder:text-zinc-600"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-mono text-secondary-gray uppercase tracking-widest mb-2 font-bold select-none">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@startup.com"
                      className="w-full bg-bg-dark border border-white/10 px-4 py-3.5 text-sm rounded-none focus:outline-none focus:border-accent-green text-white transition-colors placeholder:text-zinc-600"
                    />
                  </div>

                  {/* Selection and Budget Split */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-secondary-gray uppercase tracking-widest mb-2 font-bold select-none">
                        SERVICES NEEDED *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-bg-dark border border-white/10 px-4 py-3 text-sm rounded-none focus:outline-none focus:border-accent-green text-secondary-gray focus:text-white transition-colors"
                      >
                        {services.map((item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-secondary-gray uppercase tracking-widest mb-2 font-bold select-none">
                        PROJECT BUDGET (OPTIONAL)
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-bg-dark border border-white/10 px-4 py-3 text-sm rounded-none focus:outline-none focus:border-accent-green text-secondary-gray focus:text-white transition-colors"
                      >
                        {budgets.map((item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project details area */}
                  <div>
                    <label className="block text-xs font-mono text-secondary-gray uppercase tracking-widest mb-2 font-bold select-none">
                      PROJECT DETAILS
                    </label>
                    <textarea
                      name="details"
                      rows={5}
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, goals, target audience, and anything we should know."
                      className="w-full bg-bg-dark border border-white/10 p-4 text-sm rounded-none focus:outline-none focus:border-accent-green text-white transition-colors placeholder:text-zinc-600 resize-none"
                    />
                  </div>

                  {/* Submission triggers */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full group relative inline-flex items-center justify-center p-4 text-xs font-semibold tracking-widest uppercase bg-accent-green text-black overflow-hidden rounded-none transition-colors duration-300 pointer-events-auto"
                    >
                      <span className="relative z-10 flex items-center gap-2 font-bold group-hover:text-white transition-colors">
                        SEND INQUIRY
                        <Send className="w-3.5 h-3.5" />
                      </span>
                      <div className="absolute inset-0 z-0 bg-black origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="py-16 text-center flex flex-col items-center"
                >
                  <CheckCircle className="w-16 h-16 text-accent-green mb-6 glow-green" />
                  <h3 className="text-2xl font-display font-extrabold uppercase tracking-widest text-white mb-3">
                    INQUIRY TRANSMITTED
                  </h3>
                  <p className="text-secondary-gray text-sm max-w-sm mb-8 leading-relaxed font-sans">
                    Thank you {formData.name}. We've received the specifications for <strong>{formData.brand}</strong>. Our lead content architect will contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormData({
                        name: "",
                        brand: "",
                        email: "",
                        service: "",
                        budget: "",
                        details: "",
                      });
                      setFormSubmitted(false);
                    }}
                    className="border border-white/10 hover:border-accent-green text-xs font-mono uppercase tracking-widest px-6 py-2.5 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-5 space-y-12 h-full">
            {/* Contact Details Grid */}
            <div className="bg-[#0b0b0b]/60 border border-white/10 p-8 space-y-8 relative">
              <div className="absolute top-3 left-3 w-1 h-1 border-t border-l border-white/20" />
              <div className="absolute top-3 right-3 w-1 h-1 border-t border-r border-white/20" />
              <div className="absolute bottom-3 left-3 w-1 h-1 border-b border-l border-white/20" />
              <div className="absolute bottom-3 right-3 w-1 h-1 border-b border-r border-white/20" />

              <h3 className="text-lg font-mono font-bold uppercase tracking-wider text-accent-green glow-green">
                CONTACT INFORMATION
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4 items-start group">
                  <div className="p-3 border border-white/10 group-hover:border-accent-green transition-colors text-zinc-400 group-hover:text-accent-green mt-1 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-secondary-gray uppercase select-none">
                      EMAIL DESIGN DESK
                    </span>
                    <a
                      href="mailto:hello@qore.com"
                      className="block text-white group-hover:text-accent-green font-medium text-sm sm:text-base transition-colors"
                    >
                      hello@qore.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="p-3 border border-white/10 group-hover:border-accent-green transition-colors text-zinc-400 group-hover:text-accent-green mt-1 shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-secondary-gray uppercase select-none">
                      INSTAGRAM PROFILE
                    </span>
                    <a
                      href="https://www.instagram.com/theqore.in?igsh=Yzk5M2I2aXdvOHhw"
                      target="_blank"
                      rel="noreferrer"
                      className="block text-white group-hover:text-accent-green font-medium text-sm sm:text-base transition-colors"
                    >
                      @qorestudios.in
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="p-3 border border-white/10 group-hover:border-accent-green transition-colors text-zinc-400 group-hover:text-accent-green mt-1 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-secondary-gray uppercase select-none">
                      AVAILABILITY
                    </span>
                    <p className="text-white text-sm">
                      Open for selected startup projects worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Collapsible FAQ Block */}
            <div className="bg-[#0b0b0b]/60 border border-white/10 p-8 relative">
              <div className="absolute top-3 left-3 w-1 h-1 border-t border-l border-white/20" />
              <div className="absolute top-3 right-3 w-1 h-1 border-t border-r border-white/20" />
              <div className="absolute bottom-3 left-3 w-1 h-1 border-b border-l border-white/20" />
              <div className="absolute bottom-3 right-3 w-1 h-1 border-b border-r border-white/20" />

              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-5 h-5 text-accent-green shrink-0 glow-green" />
                <h3 className="text-lg font-mono font-bold uppercase tracking-wider text-white">
                  FAQ
                </h3>
              </div>

              <div className="space-y-4">
                {faqList.map((faq, idx) => (
                  <div key={idx} className="border-b border-white/5 pb-3">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex justify-between items-center text-left py-2 font-display font-semibold text-sm hover:text-accent-green transition-colors focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      {expandedFaq === idx ? (
                        <ChevronUp className="w-4 h-4 text-accent-green shrink-0 ml-3" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0 ml-3" />
                      )}
                    </button>

                    <AnimatePresence>
                      {expandedFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs text-secondary-gray leading-relaxed pt-2 font-sans">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. EXTRA DISCOVERY CALL CALENDAR CTA
         ──────────────────────────────────────────────────────── */}
      {/* <section className="max-w-7xl mx-auto px-6 sm:px-8 py-24 relative z-10">
        <div className="bg-gradient-to-r from-indigo-950/10 via-black to-[#050505] border border-white/10 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-none relative">
          <div className="absolute top-3 left-3 w-1.5 h-1.5 border-t border-l border-white/20" />
          <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-b border-r border-white/20" />

          <div className="flex gap-5 items-center text-left">
            <div className="p-4 bg-accent-green/10 text-accent-green border border-accent-green/20 shrink-0">
              <Calendar className="w-8 h-8 glow-green" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-accent-green uppercase tracking-widest select-none glow-green">
                READY TO START?
              </span>
              <h4 className="text-xl sm:text-2xl font-display font-medium uppercase tracking-tight text-white mt-1">
                Book a discovery call and let's bring your vision to life.
              </h4>
            </div>
          </div>

          <a
            href="https://calendly.com"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-xs font-semibold tracking-widest uppercase border border-white/25 overflow-hidden rounded-none transition-colors duration-300 hover:border-accent-green"
          >
            <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-black font-semibold">
              BOOK A DISCOVERY CALL
              <Send className="w-3.5 h-3.5" />
            </span>
            <div className="absolute inset-0 z-0 bg-accent-green origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </a>
        </div>
      </section> */}
    </motion.div>
  );
}