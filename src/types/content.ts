
export type ContentType = 'educational' | 'entertaining' | 'promotional' | 'all';
export type Platform = 'reels' | 'tiktok' | 'both';

export interface ContentIdea {
  id: string;
  title: string;
  description: string;
  niche: string;
  type: ContentType;
  platform: Platform;
  generatedImage?: {
    imageUrl: string;
    promptText: string;
  };
}
