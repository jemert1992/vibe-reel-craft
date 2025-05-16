
// Detect if content is likely to be video content from the prompt
export const isVideoContent = (prompt: string): boolean => {
  const videoKeywords = [
    'video', 'film', 'tutorial', 'step-by-step', 'how to', 'guide', 'watch', 'series',
    'shorts', 'reel', 'tiktok', 'clip', 'recording', 'footage', 'playback'
  ];
  
  const promptLower = prompt.toLowerCase();
  return videoKeywords.some(keyword => promptLower.includes(keyword));
};

// Enhanced fallback image system with more diverse category options
export const getFallbackImage = (niche?: string): string => {
  // Expanded set of fallback images
  const imageCategories: Record<string, string[]> = {
    food: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=1000"
    ],
    travel: [
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&q=80&w=1000"
    ],
    fitness: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000"
    ],
    tech: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1000" 
    ],
    fashion: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000"
    ],
    beauty: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1000"
    ],
    pets: [
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=1000"
    ],
    business: [
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?auto=format&fit=crop&q=80&w=1000"
    ],
    education: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1000"
    ],
    music: [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1000"
    ],
    default: [
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1534531173927-aeb928d54385?auto=format&fit=crop&q=80&w=1000"
    ]
  };

  if (!niche) {
    const defaultImages = imageCategories.default;
    return defaultImages[Math.floor(Math.random() * defaultImages.length)];
  }
  
  // Normalize the niche name and find appropriate category
  const nicheLower = niche.toLowerCase();
  
  for (const [category, images] of Object.entries(imageCategories)) {
    if (nicheLower.includes(category)) {
      return images[Math.floor(Math.random() * images.length)];
    }
  }
  
  // If no specific category matches, use general default images
  const defaultImages = imageCategories.default;
  return defaultImages[Math.floor(Math.random() * defaultImages.length)];
};
