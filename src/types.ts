/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  description: string;
  // optional image thumbnail (used as poster for videos)
  imageUrl?: string;
  // optional video URL for video-based work items
  videoUrl?: string;
  // media type hint: 'image' (default) or 'video'
  mediaType?: "image" | "video";
  glowColor: string;
  tags: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  imageUrl: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ClientLogo {
  name: string;
  url?: string;
}
