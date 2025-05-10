
import { defaultImages } from './styleConstants';

// Check if the prompt contains video-related keywords
export function isVideoContent(prompt: string): boolean {
  const videoKeywords = ['video', 'film', 'record', 'shoot', 'tutorial', 'step-by-step', 'how to', 'guide', 'watch', 'series'];
  return videoKeywords.some(keyword => prompt.toLowerCase().includes(keyword));
}

// Get a fallback image based on the niche
export function getFallbackImage(niche: string): string {
  const nicheImages = defaultImages[niche] || defaultImages.default;
  const randomIndex = Math.floor(Math.random() * nicheImages.length);
  return nicheImages[randomIndex];
}
