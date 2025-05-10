
import { toast } from "sonner";

// This is a placeholder implementation that returns random images from picsum.photos
// In a real implementation, you would integrate with an AI image generation service

export interface GeneratedImage {
  imageUrl: string;
  promptText: string;
}

export async function generateImageWithPrompt(
  prompt: string,
  size: { width: number; height: number } = { width: 1024, height: 1024 }
): Promise<GeneratedImage> {
  try {
    // In a real implementation, this would be an API call to an AI service
    // For now, we're using placeholder images with random IDs
    
    // Use a consistent seed based on the prompt text to get the same image for the same prompt
    const seed = prompt
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0) % 1000;
    
    const imageUrl = `https://picsum.photos/seed/${seed}/${size.width}/${size.height}`;
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
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
