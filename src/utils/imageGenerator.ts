import { toast } from "sonner";

// This is an improved implementation that generates more relevant images for social media posts
// In a real implementation, you would integrate with an AI image generation service like DALL-E or Midjourney

export interface GeneratedImage {
  imageUrl: string;
  promptText: string;
}

// Enhanced image categories with more specific terms for better image relevance
const imageCategories: Record<string, string[]> = {
  Fitness: ["fitness-workout", "gym-routine", "exercise-form", "sports-action", "healthy-lifestyle", "weight-training", "yoga-pose"],
  Beauty: ["makeup-tutorial", "skincare-routine", "beauty-products", "fashion-style", "hair-styling", "cosmetics-flatlay", "beauty-influencer"],
  Food: ["food-photography", "cooking-action", "recipe-ingredients", "food-plating", "baking-desserts", "meal-prep", "restaurant-dish"],
  Travel: ["travel-destination", "vacation-spot", "adventure-landscape", "tourist-landmark", "hotel-luxury", "beach-sunset", "city-skyline"],
  Tech: ["technology-gadget", "computer-setup", "smartphone-app", "digital-lifestyle", "tech-review", "electronics-new", "coding-screen"],
  DIY: ["crafts-creative", "diy-project", "homemade-creation", "artistic-process", "handmade-item", "workshop-tools", "creative-workspace"],
  Business: ["business-professional", "office-workspace", "entrepreneur-lifestyle", "success-mindset", "professional-meeting", "career-growth", "laptop-coffee"],
  Education: ["learning-resources", "study-setup", "knowledge-sharing", "school-supplies", "teaching-moment", "book-collection", "educational-infographic"],
  Gaming: ["gaming-setup", "videogame-screenshot", "game-controller", "esports-action", "streaming-setup", "gaming-accessories", "virtual-reality"],
  Parenting: ["parenting-moments", "kids-activities", "family-time", "children-playing", "baby-milestone", "motherhood-lifestyle", "family-home"],
  // Default categories with social media specific imagery
  default: ["social-media-content", "content-creation", "creative-flatlay", "influencer-lifestyle", "trending-topic", "viral-concept", "social-media-post"]
};

// Enhanced content type styles with more specific visual modifiers
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

// Generate a more relevant image URL based on the idea content
export async function generateImageWithPrompt(
  prompt: string,
  size: { width: number; height: number } = { width: 1024, height: 1024 }
): Promise<GeneratedImage> {
  try {
    // Parse niche, content type and platform from the prompt
    let niche = "default";
    let contentType = "entertaining"; // Default to entertaining for social media
    let platform = "both";
    
    // Extract niche from prompt
    for (const potentialNiche of Object.keys(imageCategories)) {
      if (prompt.toLowerCase().includes(potentialNiche.toLowerCase())) {
        niche = potentialNiche;
        break;
      }
    }
    
    // Extract content type from prompt
    for (const potentialType of Object.keys(contentTypeStyles)) {
      if (prompt.toLowerCase().includes(potentialType.toLowerCase())) {
        contentType = potentialType;
        break;
      }
    }
    
    // Extract platform from prompt
    if (prompt.toLowerCase().includes("reels") || prompt.toLowerCase().includes("instagram")) {
      platform = "reels";
    } else if (prompt.toLowerCase().includes("tiktok")) {
      platform = "tiktok";
    }
    
    // Generate deterministic seed based on prompt for consistent results
    const seed = prompt
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0) % 10000;
    
    // Select relevant keywords for better image matching
    const nicheKeywords = imageCategories[niche] || imageCategories.default;
    const styleKeywords = contentTypeStyles[contentType] || [];
    const platformKeywords = platformStyles[platform] || [];
    
    // Create more targeted keyword combination
    const mainKeyword = nicheKeywords[seed % nicheKeywords.length];
    const styleKeyword = styleKeywords.length > 0 ? styleKeywords[seed % styleKeywords.length] : '';
    const platformKeyword = platformKeywords.length > 0 ? platformKeywords[seed % platformKeywords.length] : '';
    
    // Extract key topic from the prompt (first 2-3 words or a specific phrase)
    let topicKeyword = "";
    if (prompt.includes(":")) {
      // If there's a colon, take what's before it as a specific topic
      topicKeyword = prompt.split(":")[0].trim().split(" ").slice(0, 3).join("-");
    } else {
      // Otherwise take first few words as the topic
      topicKeyword = prompt.split(" ").slice(0, 3).join("-");
    }
    
    // Clean up topic keyword to remove special characters
    topicKeyword = topicKeyword.replace(/[^\w\s-]/g, "").toLowerCase();
    
    // Form a specific, relevant search term for Unsplash
    const searchTerms = [
      topicKeyword,
      mainKeyword,
      styleKeyword,
      platformKeyword,
      "social-media"
    ].filter(Boolean).join(",");
    
    // Use Unsplash source with multiple search terms for better relevance
    // Add parameters for high-quality, relevant content ideal for social media
    const imageUrl = `https://source.unsplash.com/featured/?${searchTerms}&orientation=portrait&sig=${seed}`;
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Generated image URL with search terms:", searchTerms);
    
    return {
      imageUrl,
      promptText: prompt
    };
  } catch (error) {
    console.error("Error generating image:", error);
    toast.error("Failed to generate image");
    throw error;
  }
}
