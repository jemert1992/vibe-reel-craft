
import { generateImageWithPrompt as originalGenerateImageWithPrompt } from './imageGeneration/imageGenerator';
import type { GeneratedImage } from './imageGeneration/types';

// Create a wrapper to ensure we pass the niche through
export const generateImageWithPrompt = (promptData: {
  basePrompt: string;
  contentType?: string;
  platform?: string;
  textOverlay?: string;
  imagePrompt?: string;
  niche?: string;
}): Promise<GeneratedImage> => {
  return originalGenerateImageWithPrompt(promptData);
};

export { GeneratedImage };
