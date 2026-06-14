/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WorkItem, ServiceItem, StatItem, ProcessStep, FAQItem } from "./types";
import Saturn from "./assets/Client-Saturn.png";
import HappieeHearts from "./assets/Client-Happiee-Hearts-logo.png";
import ZYLOQ from "./assets/Client-GOLD-TRANSPARENT.png";
import JawaVideo from "./video/Jawa.mp4";
import Jawaimg from "./assets/Jawaimg.png";
import Iphone from "./assets/Iphone.jpeg";
import Post from "./assets/Insta-Post.jpeg"
import Digistat from "./assets/Digistat.png";
import Ponkali from "./assets/ponkali.png";

export const clientLogos = [
  { name: "SATURN STUDIO", type: "image", imageUrl: Saturn },
  { name: "HEAPPIEE HEARTS", type: "image", imageUrl: HappieeHearts },
  { name: "ZYLOQ", type: "image", imageUrl: ZYLOQ },
  { name: "DIGISTAT", type: "image", imageUrl: Digistat },
  { name: "PONKALI", type: "image", imageUrl: Ponkali },
];


export const featuredWork: WorkItem[] = [
  {
    id: "jawa",
    title: "JAWA",
    category: "BRAND FILM",
    description: "Bringing Colours to Life with Motion Graphics",
    imageUrl: Jawaimg,
    videoUrl: JawaVideo,
    mediaType: "video",
    glowColor: "rgba(139, 92, 246, 0.6)",
    tags: ["Cinematography", "Brand Film"],
  },

  {
    id: "nexora",
    title: "NEXORA",
    category: "PRODUCT LAUNCH",
    description: "Launch systems and fast-paced 3D renders that captured 2.5X expected pre-orders in 48 hours.",
    imageUrl: Iphone,
    glowColor: "rgba(166, 255, 77, 0.4)", // neon green glow
    tags: ["Visual Identity", "3D Render", "Interaction"],
  },

  {
    id: "aarav boutique",
    title: "AARAV BOUTIQUE",
    category: "SOCIAL CAMPAIGN",
    description: "Unorthodox motion graphics system driving 40% engagement margins across mobile formats.",
    imageUrl: Post,
    glowColor: "rgba(166, 255, 77, 0.4)",
    tags: ["Motion Design", "Growth Systems", "Sound FX"],
  },
];

export const servicesList: ServiceItem[] = [
  {
    id: "video-editing",
    number: "01",
    title: "CINEMATIC VIDEO EDITING",
    description: "High-retention cinematic edits designed for modern audiences.",
    details: [
      "Short-form social edits (Reels, TikTok, Shorts)",
      "High-production product launch videos",
      "Executive developer stories and founder profiles",
      "Sound design engineering and Foley soundscapes",
      "Custom color grading and dramatic lighting curves"
    ],
    imageUrl: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "brand-identity",
    number: "02",
    title: "BRAND IDENTITY",
    description: "Minimal brand systems built to look premium everywhere.",
    details: [
      "Vector logo systems & guidelines definition",
      "Dynamic typography scale and spacing kits",
      "Interactive web UI color palette design",
      "Branded collateral (packaging, physical media)",
      "Design systems for in-house scale"
    ],
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "performance-marketing",
    number: "03",
    title: "PERFORMANCE MARKETING",
    description: "Creative campaigns focused on attention, engagement, and conversion.",
    details: [
      "Startup-centric paid ad funnel configuration",
      "Organic growth systems and video sequencing",
      "A/B creative testing methodologies",
      "Data-driven content iterations",
      "Analytics reporting & attribution models"
    ],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "content-strategy",
    number: "04",
    title: "CONTENT STRATEGY",
    description: "Scalable content structures for startups that move fast.",
    details: [
      "End-to-end content pipeline orchestration",
      "Distribution optimization across video services",
      "Hook analysis and thumbnail psychology",
      "Community content moderation strategies",
      "Category dominant roadmap design"
    ],
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "STRATEGY",
    description: "We understand your startup, audience, market, and goals to create the right cinematic roadmap.",
  },
  {
    number: "02",
    title: "CREATIVE DIRECTION",
    description: "We build a strong visual and messaging system that represent your brand's unique character.",
  },
  {
    number: "03",
    title: "PRODUCTION",
    description: "Our dedicated editing and design teams bring the concepts to life with high-end tools.",
  },
  {
    number: "04",
    title: "LAUNCH & SCALE",
    description: "We help launch, monitor engagement, and iterate to achieve vertical market dominance.",
  },
];

export const statsList: StatItem[] = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Startup Clients" },
  { value: "10M+", label: "Views Generated" },
  { value: "100%", label: "Commitment to Quality" },
];

export const faqList: FAQItem[] = [
  {
    question: "How soon can we start?",
    answer: "Typically within 3-7 business days of aligning on strategy, assets, and workflow integration.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer: "Yes, we work with ambitious teams spanning from pre-launch seed stages through established Series B+ scaling brands.",
  },
  {
    question: "What is your typical turnaround time for film edits?",
    answer: "First drafts are usually delivered within 4-5 business days. Social cutdowns can be completed in rapid 24-48 hour sprints once templates are dialed in.",
  },
  {
    question: "Are custom 3D web features included in the plans?",
    answer: "Absolutely, we specialize in high-end WebGL systems that allow startups to showcase their physical or virtual solutions in pristine detail direct in-browser.",
  },
];
