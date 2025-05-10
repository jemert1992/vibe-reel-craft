
import { toast } from "sonner";
import { ContentType, Platform } from "@/types/content";

// This implementation integrates with OpenAI's DALL-E image generation
export interface GeneratedImage {
  imageUrl: string;
  promptText: string;
}

// API key for OpenAI
const OPENAI_API_KEY = "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";

// Define the possible content type values to match the ContentType type
type StyleContentType = ContentType | 'all' | 'default';

// Content type styles with more specific visual modifiers
const contentTypeStyles: Record<StyleContentType, string[]> = {
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

// Define the possible platform values to match the Platform type
type StylePlatform = Platform | 'default';

// Social media platform specific styling
const platformStyles: Record<StylePlatform, string[]> = {
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
const textOverlayStyles: Record<StyleContentType, string[]> = {
  educational: ["Learn This!", "5 Tips You Need!", "Did You Know?", "THIS CHANGES EVERYTHING", "Secret Technique"],
  entertaining: ["WAIT FOR IT", "Watch This!", "You Won't Believe", "I Was Shocked!", "This Actually Works"],
  promotional: ["NEW DROP", "Limited Time Only!", "Exclusive Offer", "Don't Miss Out!", "Game Changer"],
  all: ["MUST SEE", "Trending Now", "Viral Hack", "Life Changing", "Mind Blown"],
  default: ["MUST SEE", "Trending Now", "Viral Hack", "Life Changing", "Mind Blown"]
};

// Default fallback images by category
const defaultImages: Record<string, string[]> = {
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

// Check if the prompt contains video-related keywords
function isVideoContent(prompt: string): boolean {
  const videoKeywords = ['video', 'film', 'record', 'shoot', 'tutorial', 'step-by-step', 'how to', 'guide', 'watch', 'series'];
  return videoKeywords.some(keyword => prompt.toLowerCase().includes(keyword));
}

// Get a fallback image based on the niche
function getFallbackImage(niche: string): string {
  const nicheImages = defaultImages[niche] || defaultImages.default;
  const randomIndex = Math.floor(Math.random() * nicheImages.length);
  return nicheImages[randomIndex];
}

// Generate a detailed prompt for AI image generation with improved visual compatibility
function generateDetailedPrompt(promptData: { 
  basePrompt: string; 
  contentType?: string; 
  platform?: string; 
  textOverlay?: string;
  imagePrompt?: string;
}): string {
  const { basePrompt, contentType = 'default', platform = 'both', textOverlay, imagePrompt } = promptData;
  
  // Determine if this is video content
  const isVideo = isVideoContent(basePrompt);
  
  // Map the input content type to our StyleContentType union
  const contentTypeKey = (contentType as StyleContentType) || 'default';
  const platformKey = (platform as StylePlatform) || 'default';
  
  // Safely get style arrays with proper type checking
  const contentStyles = contentTypeStyles[contentTypeKey] || contentTypeStyles.default;
  const platformStyles = platformStyles[platformKey] || platformStyles.default;
  
  // Safely get random styles
  const contentStyleIndex = Math.floor(Math.random() * contentStyles.length);
  const platformStyleIndex = Math.floor(Math.random() * platformStyles.length);
  
  const contentStyleValue = contentStyles[contentStyleIndex] || "visually appealing";
  const platformStyleValue = platformStyles[platformStyleIndex] || "social-media-ready";
  
  // Parse the base prompt to extract key visual concepts
  const keywords = basePrompt.toLowerCase().match(/before|after|comparison|vs|versus|split|tutorial|how to|top \d+|review|showcase/g) || [];
  
  // Determine specific visual approach based on keywords
  let visualApproach = "";
  
  if (keywords.includes("before") || keywords.includes("after") || keywords.includes("comparison") || 
      keywords.includes("vs") || keywords.includes("versus") || keywords.includes("split")) {
    visualApproach = "Create a split-screen before/after comparison with clear visual distinction between sides. ";
  } else if (keywords.includes("tutorial") || keywords.includes("how to") || keywords.some(k => k.match(/top \d+/))) {
    visualApproach = "Create a step-by-step visual guide with numbered points or clear progression. ";
  } else if (keywords.includes("review") || keywords.includes("showcase")) {
    visualApproach = "Create a product-focused image with the item prominently displayed and its benefits visually represented. ";
  }
  
  // Generate seed from prompt text for consistency
  const seed = basePrompt
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0) % 10000;
  
  // Use provided image prompt if available, otherwise craft detailed prompt for DALL-E
  let detailedPrompt = imagePrompt || `${visualApproach}Create a high-quality vertical format image (9:16 ratio) for a ${isVideo ? 'video thumbnail' : 'social media post'} about "${basePrompt}". 
Style: ${contentStyleValue}, ${platformStyleValue}.
Make it visually striking with high contrast and dynamic composition.
Designed for ${platform === 'both' ? 'Instagram Reels and TikTok' : platform === 'reels' ? 'Instagram Reels' : 'TikTok'}.
The image should clearly communicate the concept without requiring text explanation.
DO NOT include any text in the image itself.`;

  // Add text overlay suggestion for guidance but not inclusion in the image
  if (textOverlay) {
    detailedPrompt += `\nNote: Image will have this text overlaid separately: "${textOverlay}" (DO NOT include this text in the image itself)`;
  } else {
    // Safely access text overlay styles
    const textOverlayKey = (contentType as StyleContentType) || 'default';
    const overlayStyles = textOverlayStyles[textOverlayKey] || textOverlayStyles.default;
    const overlayIndex = seed % overlayStyles.length;
    const suggestedOverlay = overlayStyles[overlayIndex] || "MUST SEE";
    detailedPrompt += `\nNote: Image will have text overlaid separately (DO NOT include text in the image itself)`;
  }
  
  return detailedPrompt;
}

// Generate image using OpenAI's DALL-E API
export async function generateImageWithPrompt(
  prompt: string | {
    basePrompt: string;
    contentType?: string;
    platform?: string;
    textOverlay?: string;
    imagePrompt?: string;
  },
  size: { width: number; height: number } = { width: 1024, height: 1792 }  // 9:16 aspect ratio
): Promise<GeneratedImage> {
  try {
    // Handle different prompt inputs (string or object)
    let promptData: {
      basePrompt: string;
      contentType?: string;
      platform?: string;
      textOverlay?: string;
      imagePrompt?: string;
    };
    
    if (typeof prompt === 'string') {
      promptData = { basePrompt: prompt };
    } else {
      promptData = prompt;
    }
    
    // Create a detailed prompt for better image quality and relevance
    const detailedPrompt = generateDetailedPrompt(promptData);
    console.log("Generating image with prompt:", promptData.basePrompt);
    console.log("Detailed prompt for AI:", detailedPrompt);
    
    // Call the OpenAI API
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt: detailedPrompt,
        n: 1,
        size: `${size.width}x${size.height}`,
        quality: "hd",
        style: "vivid"
      }),
    });
    
    const data = await response.json();
    
    if (data.error) {
      console.error("OpenAI API error:", data.error);
      throw new Error(data.error.message || "Failed to generate image");
    }
    
    return {
      imageUrl: data.data[0].url,
      promptText: detailedPrompt
    };
    
  } catch (error) {
    console.error("Error generating image:", error);
    toast.error("Failed to generate image. Using fallback image.");
    
    // Return a fallback image if generation fails
    const basePrompt = typeof prompt === 'string' ? prompt : prompt.basePrompt;
    const niche = basePrompt.split(' ')[0] || "default";
    
    return {
      imageUrl: getFallbackImage(niche),
      promptText: typeof prompt === 'string' ? prompt : prompt.basePrompt
    };
  }
}
