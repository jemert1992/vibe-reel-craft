
import { toast } from "sonner";
import { generateDetailedPrompt } from './promptGenerator';
import { getFallbackImage } from './utilities';
import { GeneratedImage } from './types';

// API key for OpenAI
const OPENAI_API_KEY = "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";

// Generate image using OpenAI's DALL-E API with enhanced creativity
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
    
    // Create a detailed prompt for better image quality and creativity
    const detailedPrompt = generateDetailedPrompt(promptData);
    console.log("Generating creative image with prompt:", promptData.basePrompt);
    console.log("Detailed creative prompt for AI:", detailedPrompt);
    
    // Call the OpenAI API with enhanced creativity settings
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
        style: "vivid"  // Use 'vivid' for more creative, artistic images
      }),
    });
    
    const data = await response.json();
    
    if (data.error) {
      console.error("OpenAI API error:", data.error);
      throw new Error(data.error.message || "Failed to generate creative image");
    }
    
    return {
      imageUrl: data.data[0].url,
      promptText: detailedPrompt
    };
    
  } catch (error) {
    console.error("Error generating creative image:", error);
    toast.error("Failed to generate creative image. Using fallback image.");
    
    // Return a fallback image if generation fails
    const basePrompt = typeof prompt === 'string' ? prompt : prompt.basePrompt;
    const niche = basePrompt.split(' ')[0] || "default";
    
    return {
      imageUrl: getFallbackImage(niche),
      promptText: typeof prompt === 'string' ? prompt : prompt.basePrompt
    };
  }
}
