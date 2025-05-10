
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
  
  // Enhanced creative visual approaches
  const creativeVisualStyles = [
    "Create a surreal, dreamlike scene with fantastical elements and unexpected juxtapositions.",
    "Design a whimsical, highly stylized image with exaggerated proportions and playful perspective.",
    "Generate an ethereal, magical atmosphere with glowing elements and enchanting light effects.",
    "Create a bold, graphic art style with high contrast colors and simplified shapes.",
    "Design a cinematic, dramatic scene with theatrical lighting and emotional impact."
  ];
  
  // Select a creative style based on seed for consistency
  const creativeStyleIndex = seed % creativeVisualStyles.length;
  const creativeStyle = creativeVisualStyles[creativeStyleIndex];
  
  // Enhanced prompt for more visually creative content - removed text overlay mention
  let detailedPrompt = imagePrompt || `${creativeStyle} Create a high-quality vertical format image (9:16 ratio) for ${platform === 'both' ? 'Instagram Reels and TikTok' : platform === 'reels' ? 'Instagram Reels' : 'TikTok'} about "${basePrompt}".
Style: ${contentStyleValue}, ${platformStyleValue}.
The image should have ONE clear visual subject with unexpected creative elements, vibrant colors, and artistic composition.
Make it visually striking with imaginative lighting, unique perspective, and artistic flair.
Incorporate surreal or fantastical elements that relate to the concept in an unexpected way.
The image should stand alone as a compelling visual story without requiring text explanation.
DO NOT include any text in the image itself.`;

  return detailedPrompt;
}
