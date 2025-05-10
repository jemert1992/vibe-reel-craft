
import { StyleContentType, StylePlatform } from './types';
import { contentTypeStyles, platformStyles, textOverlayStyles } from './styleConstants';
import { isVideoContent } from './utilities';

// Generate a detailed prompt for AI image generation with improved visual compatibility
export function generateDetailedPrompt(promptData: { 
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
  const platformStylesArray = platformStyles[platformKey] || platformStyles.default;
  
  // Safely get random styles with bounds checking
  const contentStyleIndex = Math.floor(Math.random() * contentStyles.length);
  const platformStyleIndex = Math.floor(Math.random() * platformStylesArray.length);
  
  const contentStyleValue = contentStyles[contentStyleIndex] || "visually appealing";
  const platformStyleValue = platformStylesArray[platformStyleIndex] || "social-media-ready";
  
  // Parse the base prompt to extract key visual concepts
  const keywords: string[] = basePrompt.toLowerCase().match(/before|after|comparison|vs|versus|split|tutorial|how to|top \d+|review|showcase/g) || [];
  
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
    const textOverlayArray = textOverlayStyles[contentTypeKey] || textOverlayStyles.default;
    const overlayIndex = seed % textOverlayArray.length;
    const suggestedOverlay = textOverlayArray[overlayIndex] || "MUST SEE";
    detailedPrompt += `\nNote: Image will have text overlaid separately (DO NOT include text in the image itself)`;
  }
  
  return detailedPrompt;
}
