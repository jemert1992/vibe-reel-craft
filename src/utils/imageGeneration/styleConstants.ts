
import { StyleContentType, StylePlatform } from './types';

// Content type styles with more specific visual modifiers
export const contentTypeStyles: Record<StyleContentType, string[]> = {
  educational: [
    "infographic-style with clear numbered points", 
    "step-by-step visual guide with arrows", 
    "split-screen comparison showing right vs wrong approaches", 
    "educational diagram with labeled components", 
    "informative chart with data visualization",
    "before/after demonstration of technique"
  ],
  entertaining: [
    "dramatic reaction shot with exaggerated expression", 
    "split-screen expectation vs reality comparison", 
    "humorous scenario with vibrant colors", 
    "trending meme format with bold text", 
    "candid capture of an amusing moment",
    "side-by-side transformation with dramatic contrast"
  ],
  promotional: [
    "professional product showcase with clean background", 
    "lifestyle shot showing product benefits", 
    "before/after transformation highlighting results", 
    "testimonial-style image with product", 
    "aspirational scene featuring the product in use",
    "clean product flat-lay with brand colors"
  ],
  all: [
    "versatile composition with clear subject focus",
    "balanced visual with informative elements",
    "engaging scene that communicates the core message",
    "striking visual that captures attention immediately",
    "professional quality image with versatile appeal"
  ],
  default: [
    "versatile composition with clear subject focus",
    "balanced visual with informative elements",
    "engaging scene that communicates the core message",
    "striking visual that captures attention immediately",
    "professional quality image with versatile appeal"
  ]
};

// Social media platform specific styling
export const platformStyles: Record<StylePlatform, string[]> = {
  reels: [
    "vertical 9:16 format optimized for Instagram", 
    "clean aesthetic with soft shadows", 
    "Instagram-friendly color palette", 
    "lifestyle-focused composition",
    "polished professional quality"
  ],
  tiktok: [
    "bold contrasting colors for TikTok visibility", 
    "trendy visual effects like duotone or glitch", 
    "attention-grabbing composition", 
    "Gen-Z aesthetic with modern elements",
    "energetic and dynamic feel"
  ],
  both: [
    "balanced aesthetic that works across platforms", 
    "universal vertical format with central focus", 
    "trending visual style with broad appeal", 
    "attention-grabbing but polished composition",
    "cross-platform optimized lighting and contrast"
  ],
  default: [
    "balanced aesthetic that works across platforms", 
    "universal vertical format with central focus", 
    "trending visual style with broad appeal", 
    "attention-grabbing but polished composition",
    "cross-platform optimized lighting and contrast"
  ]
};

// Text overlay styles for different content types
export const textOverlayStyles: Record<StyleContentType, string[]> = {
  educational: ["Learn This!", "5 Tips You Need!", "Did You Know?", "THIS CHANGES EVERYTHING", "Secret Technique"],
  entertaining: ["WAIT FOR IT", "Watch This!", "You Won't Believe", "I Was Shocked!", "This Actually Works"],
  promotional: ["NEW DROP", "Limited Time Only!", "Exclusive Offer", "Don't Miss Out!", "Game Changer"],
  all: ["MUST SEE", "Trending Now", "Viral Hack", "Life Changing", "Mind Blown"],
  default: ["MUST SEE", "Trending Now", "Viral Hack", "Life Changing", "Mind Blown"]
};

// Default fallback images by category
export const defaultImages: Record<string, string[]> = {
  Food: [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=1000"
  ],
  Travel: [
    "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&q=80&w=1000"
  ],
  Fitness: [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000"
  ],
  default: [
    "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1534531173927-aeb928d54385?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=1000"
  ]
};
