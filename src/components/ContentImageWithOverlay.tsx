
import React from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, RefreshCw, Image as ImageIcon } from 'lucide-react';
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
  return (
    <div className="flex flex-col items-center mt-4">
      {generatedImage ? (
        <div className="relative w-full max-w-md rounded-md overflow-hidden">
          {/* Image with text overlay */}
          <img 
            src={generatedImage.imageUrl} 
            alt={title}
            className="w-full h-64 object-cover rounded-md"
            onError={(e) => {
              // If image fails to load, set a fallback image
              const target = e.target as HTMLImageElement;
              console.log("Image failed to load, using fallback");
              target.src = `https://source.unsplash.com/featured/?social-media&sig=${Date.now()}`;
              target.onerror = null; // Prevent infinite loop if fallback also fails
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 flex flex-col justify-end p-4">
            <h3 className="text-white font-bold text-lg md:text-xl">{title}</h3>
            <p className="text-white/90 text-sm mt-1 line-clamp-2">{description}</p>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md h-64 bg-gray-100 rounded-md flex flex-col items-center justify-center">
          <ImageIcon className="h-10 w-10 text-gray-400" />
          <p className="text-sm text-gray-500 mt-2">No image generated yet</p>
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
                Regenerate Image
              </>
            ) : (
              <>
                <ImageIcon className="mr-2 h-4 w-4" />
                Generate Image
              </>
            )}
          </>
        )}
      </Button>
    </div>
  );
};

export default ContentImageWithOverlay;
