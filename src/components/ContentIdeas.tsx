
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ContentIdea } from '@/types/content';
import { toast } from 'sonner';
import ContentImageWithOverlay from './ContentImageWithOverlay';
import { generateImageWithPrompt, GeneratedImage } from '@/utils/imageGenerator';

interface ContentIdeasProps {
  ideas: ContentIdea[];
  loading: boolean;
  savedIdeas: ContentIdea[];
  onSaveIdea: (idea: ContentIdea) => void;
}

const ContentIdeas = ({ ideas, loading, savedIdeas, onSaveIdea }: ContentIdeasProps) => {
  const [generatingImageForId, setGeneratingImageForId] = useState<string | null>(null);
  const [generatedImages, setGeneratedImages] = useState<Record<string, GeneratedImage>>({});

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const isIdeaSaved = (idea: ContentIdea) => {
    return savedIdeas.some(savedIdea => savedIdea.id === idea.id);
  };

  const handleGenerateImage = async (idea: ContentIdea) => {
    try {
      setGeneratingImageForId(idea.id);
      
      // Generate a prompt for the image based on the idea details
      const imagePrompt = `${idea.title} - ${idea.niche} ${idea.type} content for ${
        idea.platform === 'both' ? 'Instagram Reels and TikTok' : 
        idea.platform === 'reels' ? 'Instagram Reels' : 'TikTok'
      }`;
      
      const generatedImage = await generateImageWithPrompt(imagePrompt);
      
      setGeneratedImages(prev => ({
        ...prev,
        [idea.id]: generatedImage
      }));
      
      toast.success('Image generated successfully!');
    } catch (error) {
      console.error('Failed to generate image:', error);
      toast.error('Failed to generate image');
    } finally {
      setGeneratingImageForId(null);
    }
  };

  const handleSaveIdea = (idea: ContentIdea) => {
    // If there's a generated image for this idea, include it when saving
    if (generatedImages[idea.id]) {
      const ideaWithImage = {
        ...idea,
        generatedImage: generatedImages[idea.id]
      };
      onSaveIdea(ideaWithImage);
    } else {
      onSaveIdea(idea);
    }
  };

  return (
    <Card className="w-full border-2 border-gray-100">
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Content Ideas</h2>
        {loading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="h-8 w-8 border-4 border-social-purple border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-500">Generating ideas...</p>
          </div>
        ) : ideas.length > 0 ? (
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-6">
              {ideas.map((idea) => (
                <Card key={idea.id} className="border border-gray-200 hover:border-social-purple transition-colors">
                  <CardContent className="p-4">
                    <div className="flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-base">{idea.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{idea.description}</p>
                          <div className="mt-2 flex items-center">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium 
                              ${idea.type === 'educational' ? 'bg-blue-100 text-blue-800' : 
                                idea.type === 'entertaining' ? 'bg-green-100 text-green-800' :
                                'bg-purple-100 text-purple-800'}`}>
                              {idea.type.charAt(0).toUpperCase() + idea.type.slice(1)}
                            </span>
                            <span className="text-xs text-gray-500 ml-2">
                              {idea.platform === 'both' ? 'Reels & TikTok' : 
                                idea.platform === 'reels' ? 'Instagram Reels' : 'TikTok'}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-xs h-7"
                            onClick={() => copyToClipboard(idea.description)}
                          >
                            Copy
                          </Button>
                          <Button 
                            variant={isIdeaSaved(idea) ? "default" : "outline"} 
                            size="sm"
                            className={`text-xs h-7 ${isIdeaSaved(idea) ? 'bg-social-purple hover:bg-social-dark-purple' : 'text-social-purple'}`}
                            onClick={() => handleSaveIdea(idea)}
                            disabled={isIdeaSaved(idea)}
                          >
                            {isIdeaSaved(idea) ? 'Saved' : 'Save'}
                          </Button>
                        </div>
                      </div>
                      
                      {/* Image generation section */}
                      <ContentImageWithOverlay
                        title={idea.title}
                        description={idea.description}
                        generatedImage={generatedImages[idea.id]}
                        isGenerating={generatingImageForId === idea.id}
                        onGenerateImage={() => handleGenerateImage(idea)}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        ) : (
          <div className="flex flex-col items-center justify-center py-8">
            <p className="text-gray-500">Select a niche and generate to see ideas</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ContentIdeas;
