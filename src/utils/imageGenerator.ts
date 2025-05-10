
import { toast } from "sonner";

// This implementation integrates with OpenAI's DALL-E image generation
export interface GeneratedImage {
  imageUrl: string;
  promptText: string;
}

// API key for OpenAI
const OPENAI_API_KEY = "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";

// Content type styles with more specific visual modifiers
const contentTypeStyles: Record<string, string[]> = {
  educational: ["infographic-style", "tutorial-steps", "explanation-diagram", "guide-visual", "informative-chart", "educational-layout", "learning-concept"],
  entertaining: ["vibrant-colorful", "fun-playful", "humor-concept", "exciting-dynamic", "engaging-action", "trending-viral", "entertainment-mood"],
  promotional: ["professional-clean", "sleek-minimal", "advertisement-styled", "marketing-polished", "brand-focused", "product-showcase", "promotion-aesthetic"],
};

// Social media platform specific styling
const platformStyles: Record<string, string[]> = {
  reels: ["vertical-format", "mobile-friendly", "instagram-aesthetic", "reels-style", "short-form"],
  tiktok: ["tiktok-style", "trendy-aesthetic", "viral-look", "tiktok-format", "creative-angle"],
  both: ["social-media-ready", "cross-platform", "viral-potential", "shareable-content", "engagement-focused"]
};

// Text overlay styles for different content types
const textOverlayStyles: Record<string, string[]> = {
  educational: ["Learn This!", "5 Tips You Need!", "Did You Know?", "THIS CHANGES EVERYTHING", "Secret Technique"],
  entertaining: ["WAIT FOR IT", "Watch This!", "You Won't Believe", "I Was Shocked!", "This Actually Works"],
  promotional: ["NEW DROP", "Limited Time Only!", "Exclusive Offer", "Don't Miss Out!", "Game Changer"],
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
  // Add more categories as needed
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

// Generate a detailed prompt for AI image generation
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
  
  // Select random style elements based on content type and platform
  const contentStyleIndex = Math.floor(Math.random() * contentTypeStyles[contentType as keyof typeof contentTypeStyles]?.length || 1);
  const platformStyleIndex = Math.floor(Math.random() * platformStyles[platform as keyof typeof platformStyles]?.length || 1);
  
  const contentStyleValue = contentTypeStyles[contentType as keyof typeof contentTypeStyles]?.[contentStyleIndex] || "visually appealing";
  const platformStyleValue = platformStyles[platform as keyof typeof platformStyles]?.[platformStyleIndex] || "social-media-ready";
  
  // Generate seed from prompt text for consistency
  const seed = basePrompt
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0) % 10000;
  
  // Use provided image prompt if available, otherwise craft detailed prompt for DALL-E
  let detailedPrompt = imagePrompt || `Create a high-quality vertical format image (9:16 ratio) for a ${isVideo ? 'video thumbnail' : 'social media post'} about "${basePrompt}". 
Style: ${contentStyleValue}, ${platformStyleValue}.
Make it visually striking with vibrant colors and dynamic composition.
Designed for ${platform === 'both' ? 'Instagram Reels and TikTok' : platform === 'reels' ? 'Instagram Reels' : 'TikTok'}.
The image should clearly relate to the topic and be highly engaging.`;

  // Add text overlay suggestion
  if (textOverlay) {
    detailedPrompt += `\nSuggested text overlay: "${textOverlay}"`;
  } else {
    const availableOverlays = textOverlayStyles[contentType as keyof typeof textOverlayStyles] || textOverlayStyles.default;
    const suggestedOverlay = availableOverlays[seed % availableOverlays.length];
    detailedPrompt += `\nSuggested text overlay: "${suggestedOverlay}"`;
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
