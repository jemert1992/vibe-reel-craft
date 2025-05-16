
import { toast } from "sonner";
import { generateDetailedPrompt } from './imageGeneration/promptGenerator';
import { getFallbackImage } from './imageGeneration/utilities';
import { GeneratedImage } from './imageGeneration/types';

// Generate image using fallback system since the OpenAI API key is not working
export async function generateImageWithPrompt(
  prompt: string | {
    basePrompt: string;
    contentType?: string;
    platform?: string;
    textOverlay?: string;
    imagePrompt?: string;
    niche?: string;
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
      niche?: string;
    };
    
    if (typeof prompt === 'string') {
      promptData = { basePrompt: prompt };
    } else {
      promptData = prompt;
    }
    
    // Create a detailed prompt for better image quality
    const detailedPrompt = generateDetailedPrompt(promptData);
    console.log("Using fallback image system with prompt:", promptData.basePrompt);
    console.log("Using niche:", promptData.niche || "none specified");
    
    // Get the appropriate fallback image based on niche and content
    const niche = typeof prompt === 'string' ? undefined : prompt.niche || prompt.basePrompt.split(' ')[0] || "default";
    const fallbackImageUrl = getFallbackImage(niche);
    
    // Add artificial delay to simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return fallback image with prompt information
    return {
      imageUrl: fallbackImageUrl,
      promptText: detailedPrompt
    };
    
  } catch (error) {
    console.error("Error in image fallback system:", error);
    toast.error("Using standard fallback image.");
    
    // Return a very basic fallback
    const basePrompt = typeof prompt === 'string' ? prompt : prompt.basePrompt;
    const niche = typeof prompt === 'string' ? undefined : prompt.niche || basePrompt.split(' ')[0] || "default";
    
    return {
      imageUrl: getFallbackImage(niche),
      promptText: typeof prompt === 'string' ? prompt : prompt.basePrompt
    };
  }
}

// Export the GeneratedImage type
export type { GeneratedImage };
