
import { ContentType, Platform } from "@/types/content";

export interface GeneratedImage {
  imageUrl: string;
  promptText: string;
}

// Define the possible content type values to match the ContentType type
export type StyleContentType = ContentType | 'all' | 'default';

// Define the possible platform values to match the Platform type
export type StylePlatform = Platform | 'default';
