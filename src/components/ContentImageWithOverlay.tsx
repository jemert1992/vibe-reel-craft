
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, RefreshCw, Image as ImageIcon, Video } from 'lucide-react';
import { GeneratedImage } from '@/utils/imageGenerator';

interface ContentImageWithOverlayProps {
  title: string;
  description: string;
  onImageGenerated?: (image: GeneratedImage) => void;
  generatedImage?: GeneratedImage;
  isGenerating: boolean;
  onGenerateImage: () => void;
}

const ContentImageWithOverlay: React.FC<ContentImageWithOverlayProps> = ({
  title,
  description,
  generatedImage,
  isGenerating,
  onGenerateImage
}) => {
  const [imageError, setImageError] = useState(false);
  
  // Enhanced video content detection with more keywords
  const isVideoContent = description.toLowerCase().includes('video') || 
    description.toLowerCase().includes('film') || 
    description.toLowerCase().includes('tutorial') ||
    description.toLowerCase().includes('step-by-step') ||
    description.toLowerCase().includes('how to') ||
    description.toLowerCase().includes('guide') ||
    description.toLowerCase().includes('watch') ||
    description.toLowerCase().includes('series');

  // Determine if we should use a video icon rather than image icon
  const IconComponent = isVideoContent ? Video : ImageIcon;
  const placeholderText = isVideoContent ? 
    "No video thumbnail generated yet" : 
    "No image generated yet";

  // Get a random fallback image URL for various niches
  const getFallbackImageUrl = () => {
    const imageCategories = {
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
      default: [
        "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1534531173927-aeb928d54385?auto=format&fit=crop&q=80&w=1000"
      ]
    };

    // Try to determine category from title or description
    let category = 'default';
    const contentText = (title + ' ' + description).toLowerCase();
    
    if (contentText.includes('food') || contentText.includes('recipe') || contentText.includes('meal') || contentText.includes('cook')) {
      category = 'food';
    } else if (contentText.includes('travel') || contentText.includes('destination') || contentText.includes('vacation')) {
      category = 'travel';
    } else if (contentText.includes('fitness') || contentText.includes('workout') || contentText.includes('exercise')) {
      category = 'fitness';
    }
    
    const selectedCategory = imageCategories[category] || imageCategories.default;
    return selectedCategory[Math.floor(Math.random() * selectedCategory.length)];
  };

  // Generate an engagement-boosting text overlay based on content
  const generateTextOverlay = () => {
    // Extract keywords from title
    const titleWords = title.split(' ');
    let overlayText = '';
    
    // If title already has a number (like "5 Tips..."), use it as is
    if (/\d+/.test(title) && title.length < 25) {
      overlayText = title;
    } 
    // If title is a "How to" guide
    else if (title.toLowerCase().includes('how to')) {
      overlayText = title.length < 25 ? title : `LEARN THIS NOW! 🔥`;
    } 
    // Create curiosity-driven overlay
    else if (titleWords.length > 5) {
      // Take first few words and add hook
      const shortTitle = titleWords.slice(0, 3).join(' ');
      overlayText = `${shortTitle}... REVEALED! 👀`;
    } 
    // Default case - short and punchy
    else {
      overlayText = `${title} 🔥`;
    }
    
    // Add emoji for engagement if none exists
    if (!overlayText.match(/[\u{1F300}-\u{1F6FF}]/u)) {
      // Add relevant emoji based on content
      if (description.toLowerCase().includes('tips')) overlayText += ' 💡';
      else if (description.toLowerCase().includes('secret')) overlayText += ' 🤫';
      else if (description.toLowerCase().includes('amazing')) overlayText += ' 🤩';
      else overlayText += ' ✨';
    }
    
    return overlayText;
  };

  // Only generate overlay text if we have an image
  const textOverlay = generatedImage ? generateTextOverlay() : '';

  return (
    <div className="flex flex-col items-center mt-4">
      {generatedImage ? (
        <div className="relative w-full max-w-md rounded-md overflow-hidden">
          <img 
            src={imageError ? getFallbackImageUrl() : generatedImage.imageUrl} 
            alt={title}
            className="w-full h-64 object-cover rounded-md"
            onError={(e) => {
              console.log("Image failed to load, using fallback");
              setImageError(true);
              const target = e.target as HTMLImageElement;
              target.src = getFallbackImageUrl();
              target.onerror = null; // Prevent infinite loop if fallback also fails
            }}
          />
          
          {/* Text overlay with platform-appropriate styling */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 flex flex-col justify-end p-4">
            {/* Bold, eye-catching text overlay */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full px-4 text-center">
              <h2 className="text-white font-extrabold text-xl md:text-2xl tracking-tight drop-shadow-lg break-words">
                {textOverlay}
              </h2>
            </div>
            
            <h3 className="text-white font-bold text-lg md:text-xl">{title}</h3>
            <p className="text-white/90 text-sm mt-1 line-clamp-2">{description}</p>
            
            {isVideoContent && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 rounded-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md h-64 bg-gray-100 rounded-md flex flex-col items-center justify-center">
          <IconComponent className="h-10 w-10 text-gray-400" />
          <p className="text-sm text-gray-500 mt-2">{placeholderText}</p>
        </div>
      )}
      
      <Button 
        onClick={onGenerateImage}
        disabled={isGenerating}
        className="mt-3 bg-social-purple hover:bg-social-dark-purple"
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            {generatedImage ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Regenerate {isVideoContent ? "Thumbnail" : "Image"}
              </>
            ) : (
              <>
                <IconComponent className="mr-2 h-4 w-4" />
                Generate {isVideoContent ? "Thumbnail" : "Image"}
              </>
            )}
          </>
        )}
      </Button>
    </div>
  );
};

export default ContentImageWithOverlay;
