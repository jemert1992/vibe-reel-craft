import { toast } from "sonner";

// This implementation integrates with OpenAI's DALL-E image generation
export interface GeneratedImage {
  imageUrl: string;
  promptText: string;
}

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
function generateDetailedPrompt(prompt: string): string {
  // Extract potential content type and platform from prompt
  let contentType = prompt.toLowerCase().includes('educational') ? 'educational' : 
                   prompt.toLowerCase().includes('entertaining') ? 'entertaining' : 'promotional';
  
  let platform = prompt.toLowerCase().includes('reels') ? 'reels' :
                prompt.toLowerCase().includes('tiktok') ? 'tiktok' : 'both';

  // Determine if this is video content
  const isVideo = isVideoContent(prompt);
  
  // Select random style elements based on content type and platform
  const contentStyleIndex = Math.floor(Math.random() * contentTypeStyles[contentType].length);
  const platformStyleIndex = Math.floor(Math.random() * platformStyles[platform].length);
  
  // Generate seed from prompt text for consistency
  const seed = prompt
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0) % 10000;
  
  // Craft detailed prompt for DALL-E
  let detailedPrompt = `Create a high-quality vertical format image (9:16 ratio) for a ${isVideo ? 'video thumbnail' : 'social media post'} about "${prompt}". 
Style: ${contentTypeStyles[contentType][contentStyleIndex]}, ${platformStyles[platform][platformStyleIndex]}.
Make it visually striking with vibrant colors and dynamic composition.
Designed for ${platform === 'both' ? 'Instagram Reels and TikTok' : platform === 'reels' ? 'Instagram Reels' : 'TikTok'}.
The image should clearly relate to the topic and be highly engaging.`;

  // Add text overlay suggestion
  const textOverlays = textOverlayStyles[contentType as keyof typeof textOverlayStyles] || textOverlayStyles.default;
  const suggestedOverlay = textOverlays[seed % textOverlays.length];
  
  detailedPrompt += `\nSuggested text overlay: "${suggestedOverlay}"`;
  
  return detailedPrompt;
}

// Generate image using OpenAI's DALL-E API
export async function generateImageWithPrompt(
  prompt: string,
  size: { width: number; height: number } = { width: 1024, height: 1792 }  // 9:16 aspect ratio
): Promise<GeneratedImage> {
  try {
    // Create a detailed prompt for better image quality and relevance
    const detailedPrompt = generateDetailedPrompt(prompt);
    console.log("Generating image with prompt:", prompt);
    console.log("Detailed prompt for AI:", detailedPrompt);
    
    // In a real implementation, you would call the OpenAI API here
    // For demonstration, we'll simulate the API call with a mock implementation
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // For now, since we can't actually call OpenAI API without credentials,
    // return a fallback image with the prompt text
    const topicWords = prompt.split(' ');
    const mainTopic = topicWords.length > 0 ? topicWords[0] : 'default';
    
    return {
      imageUrl: getFallbackImage(mainTopic),
      promptText: detailedPrompt
    };
    
    /* When integrated with actual OpenAI API, replace the above with:
    
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
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
      throw new Error(data.error.message);
    }
    
    return {
      imageUrl: data.data[0].url,
      promptText: detailedPrompt
    };
    */
    
  } catch (error) {
    console.error("Error generating image:", error);
    toast.error("Failed to generate image");
    
    // Return a fallback image if generation fails
    return {
      imageUrl: getFallbackImage(prompt.split(' ')[0] || "default"),
      promptText: prompt
    };
  }
}
