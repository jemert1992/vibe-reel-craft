
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, RefreshCw, Image as ImageIcon, Video, Sparkles } from 'lucide-react';
import { GeneratedImage } from '@/utils/imageGeneration';
import { toast } from 'sonner';

interface ContentImageWithOverlayProps {
  title: string;
  description: string;
  textOverlay?: string;
  caption?: string;
  onImageGenerated?: (image: GeneratedImage) => void;
  generatedImage?: GeneratedImage;
  isGenerating: boolean;
  onGenerateImage: () => void;
}

const ContentImageWithOverlay: React.FC<ContentImageWithOverlayProps> = ({
  title,
  description,
  textOverlay,
  caption,
  generatedImage,
  isGenerating,
  onGenerateImage
}) => {
  const [imageError, setImageError] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  
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
    
    const selectedCategory = imageCategories[category as keyof typeof imageCategories] || imageCategories.default;
    return selectedCategory[Math.floor(Math.random() * selectedCategory.length)];
  };

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
          
          {/* Optional text overlay with toggle - only shown when explicitly enabled */}
          {showOverlay && textOverlay && (
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 flex flex-col justify-between p-4">
              {/* Title and description at the bottom */}
              <div>
                <h3 className="text-white font-bold text-lg md:text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{title}</h3>
                <p className="text-white/90 text-sm mt-1 line-clamp-2 drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">{description}</p>
              </div>
              
              {isVideoContent && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              )}
            </div>
          )}

          {/* Toggle overlay button - only shown when there is a text overlay available */}
          {textOverlay && (
            <button 
              onClick={() => setShowOverlay(prev => !prev)} 
              className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
              title={showOverlay ? "Hide text overlay" : "Show text overlay"}
            >
              {showOverlay ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                  <line x1="2" x2="22" y1="2" y2="22"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
            </button>
          )}
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
                Regenerate {isVideoContent ? "Creative Thumbnail" : "Creative Image"}
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate {isVideoContent ? "Creative Thumbnail" : "Creative Image"}
              </>
            )}
          </>
        )}
      </Button>
    </div>
  );
};

export default ContentImageWithOverlay;
