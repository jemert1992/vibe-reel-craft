
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
  const isVideoContent = description.toLowerCase().includes('video') || 
    description.toLowerCase().includes('film') || 
    description.toLowerCase().includes('tutorial') ||
    description.toLowerCase().includes('step-by-step');

  // Determine if we should use a video icon rather than image icon
  const IconComponent = isVideoContent ? Video : ImageIcon;
  const placeholderText = isVideoContent ? 
    "No video thumbnail generated yet" : 
    "No image generated yet";

  // Get a random fallback image URL for food-related content
  const getFallbackImageUrl = () => {
    const foodImages = [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000", 
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=1000"
    ];
    return foodImages[Math.floor(Math.random() * foodImages.length)];
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 flex flex-col justify-end p-4">
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

