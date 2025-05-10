
import { ContentIdea, ContentType, Platform } from "@/types/content";

// Helper function to generate a random ID
const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Sample data for different content types
const contentTemplates: Record<string, Record<ContentType, string[]>> = {
  Fitness: {
    educational: [
      "5 Common Workout Mistakes You're Making",
      "How to Perfect Your Squat Form",
      "The Science Behind Muscle Growth",
      "Understanding Macro Nutrients for Fitness"
    ],
    entertaining: [
      "Try This 30-Second Fitness Challenge",
      "Surprising Before and After Transformation",
      "When Your Gym Buddy Skips Leg Day",
      "Workout Fails Compilation"
    ],
    promotional: [
      "My 30-Day Fitness Program Results",
      "Why This Protein Powder Changed My Workouts",
      "Join My Upcoming Fitness Challenge",
      "Review: The Best Fitness Apps of 2025"
    ],
    all: [] // This will be populated with all types
  },
  Beauty: {
    educational: [
      "How to Layer Skincare Products Correctly",
      "Understanding Skin Types and Concerns",
      "Makeup Techniques for Hooded Eyes",
      "The Truth About Beauty Industry Claims"
    ],
    entertaining: [
      "Trying Viral Beauty Hacks - Do They Work?",
      "Full Face Using Only Kids Makeup",
      "My Partner Does My Makeup",
      "Beauty Expectation vs. Reality"
    ],
    promotional: [
      "My Holy Grail Beauty Products",
      "Why This Serum Changed My Skin",
      "Join My Makeup Masterclass",
      "New Beauty Collection Reveal"
    ],
    all: []
  }
};

// Extend the base templates with generic ideas for all niches
const genericTemplates: Record<ContentType, string[]> = {
  educational: [
    "5 Things You Need to Know About [NICHE]",
    "Beginner's Guide to [NICHE]",
    "Common Myths About [NICHE] Debunked",
    "The History of [NICHE] in 60 Seconds",
    "How to Get Started in [NICHE]",
    "What No One Tells You About [NICHE]"
  ],
  entertaining: [
    "Day in the Life of a [NICHE] Creator",
    "When [NICHE] Goes Wrong",
    "[NICHE] Expectation vs. Reality",
    "Things Only [NICHE] People Understand",
    "Trying Viral [NICHE] Trends",
    "If [NICHE] People Were Honest"
  ],
  promotional: [
    "Why I Use This [NICHE] Product",
    "My [NICHE] Essentials",
    "How I Improved My [NICHE] Skills",
    "Review: Best [NICHE] Tools",
    "Join My [NICHE] Community",
    "My [NICHE] Services/Offerings"
  ],
  all: []
};

// Helper function to generate descriptions
const generateDescription = (title: string, niche: string): string => {
  const descriptionTemplates = [
    `Create a ${niche.toLowerCase()} video about ${title.toLowerCase()}, focusing on providing value to your audience through personal experiences and expert tips.`,
    `Share your take on ${title.toLowerCase()} with a trending sound. Include text overlays with key points about this ${niche.toLowerCase()} topic.`,
    `Film a ${niche.toLowerCase()} tutorial showing step-by-step how to ${title.toLowerCase().includes('how to') ? title.toLowerCase().replace('how to ', '') : title.toLowerCase()}.`,
    `Start with a hook like "Want to know about ${title.toLowerCase()}?" then share 3-5 tips related to this ${niche.toLowerCase()} topic.`
  ];
  
  return descriptionTemplates[Math.floor(Math.random() * descriptionTemplates.length)];
};

// Helper function to generate platform recommendation
const generatePlatform = (): Platform => {
  const platforms: Platform[] = ['reels', 'tiktok', 'both'];
  return platforms[Math.floor(Math.random() * platforms.length)];
};

// Main content generation function
export const generateContentIdeas = (
  niche: string,
  contentType: ContentType,
  count: number
): ContentIdea[] => {
  // If we have specific templates for this niche, use those
  let templates = contentTemplates[niche];
  
  // If no specific templates for this niche, create generic ones
  if (!templates) {
    templates = {
      educational: [...genericTemplates.educational],
      entertaining: [...genericTemplates.entertaining],
      promotional: [...genericTemplates.promotional],
      all: []
    };
  }
  
  // Combine all types if "all" is selected
  if (contentType === 'all') {
    templates.all = [
      ...templates.educational,
      ...templates.entertaining,
      ...templates.promotional
    ];
  }
  
  // Select the appropriate template list
  const selectedTemplates = templates[contentType];
  
  // Generate the ideas
  const ideas: ContentIdea[] = [];
  
  for (let i = 0; i < count; i++) {
    // For generic templates, replace [NICHE] with the selected niche
    let title;
    let type: ContentType = contentType;
    
    if (contentType === 'all') {
      // If 'all' is selected, randomly choose a content type for each idea
      const types: ContentType[] = ['educational', 'entertaining', 'promotional'];
      type = types[Math.floor(Math.random() * types.length)];
      
      // Get a template from the specific type
      const typeTemplates = templates[type];
      if (typeTemplates.length > 0) {
        title = typeTemplates[Math.floor(Math.random() * typeTemplates.length)];
      } else {
        // Fall back to generic templates
        title = genericTemplates[type][Math.floor(Math.random() * genericTemplates[type].length)];
      }
    } else {
      // Get a template from the selected type
      if (selectedTemplates.length > 0) {
        title = selectedTemplates[Math.floor(Math.random() * selectedTemplates.length)];
      } else {
        // Fall back to generic templates
        title = genericTemplates[contentType][Math.floor(Math.random() * genericTemplates[contentType].length)];
      }
    }
    
    // Replace [NICHE] with the actual niche
    title = title.replace(/\[NICHE\]/g, niche);
    
    const idea: ContentIdea = {
      id: generateId(),
      title,
      description: generateDescription(title, niche),
      niche,
      type,
      platform: generatePlatform()
    };
    
    ideas.push(idea);
  }
  
  return ideas;
};
