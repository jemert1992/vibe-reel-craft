
export type ContentType = 'educational' | 'entertaining' | 'promotional' | 'all';
export type Platform = 'reels' | 'tiktok' | 'both';

export interface ContentIdea {
  id: string;
  title: string;
  description: string;
  niche: string;
  type: ContentType;
  platform: Platform;
  textOverlay?: string;
  imagePrompt?: string;
  caption?: string;
  generatedImage?: {
    imageUrl: string;
    promptText: string;
  };
  visualStyle?: string; // Added to help guide image generation
  hashTags?: string[]; // Added for better social media integration
}
