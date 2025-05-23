
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
  const [expandedIdeas, setExpandedIdeas] = useState<Record<string, boolean>>({});

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
      
      // Make sure we explicitly pass the niche to ensure captions are properly contextualized
      console.log(`Generating image for idea with niche: ${idea.niche}`);
      
      // Create a detailed prompt based on the content idea and use provided image prompt if available
      const promptData = {
        basePrompt: `${idea.title} - ${idea.description.substring(0, 100)} - ${idea.niche} content for ${
          idea.platform === 'both' ? 'Instagram and TikTok' : 
          idea.platform === 'reels' ? 'Instagram Reels' : 'TikTok'
        }`,
        contentType: idea.type,
        platform: idea.platform,
        imagePrompt: idea.imagePrompt,
        niche: idea.niche // Explicitly pass the niche
      };
      
      const generatedImage = await generateImageWithPrompt(promptData);
      
      setGeneratedImages(prev => ({
        ...prev,
        [idea.id]: generatedImage
      }));
      
      toast.success('Creative image generated successfully!');
    } catch (error) {
      console.error('Failed to generate image:', error);
      toast.error(`Failed to generate image: ${error instanceof Error ? error.message : 'Unknown error'}`);
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
      toast.success('Creative idea saved!');
    } else {
      onSaveIdea(idea);
      toast.success('Idea saved! Generate a creative image to complete your content.');
    }
  };

  const handleCopyCaption = (caption: string) => {
    navigator.clipboard.writeText(caption);
    toast.success('Caption copied to clipboard!');
  };

  const toggleExpand = (ideaId: string) => {
    setExpandedIdeas(prev => ({
      ...prev,
      [ideaId]: !prev[ideaId]
    }));
  };

  return (
    <Card className="w-full border-2 border-gray-100">
      <CardContent className="pt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            Creative Content Ideas {ideas.length > 0 && <span className="text-sm text-gray-500">({ideas.length})</span>}
          </h2>
        </div>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="h-8 w-8 border-4 border-social-purple border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-500">Generating creative ideas...</p>
          </div>
        ) : ideas.length > 0 ? (
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-6">
              {ideas.map((idea) => (
                <Card key={idea.id} className="border border-gray-200 hover:border-social-purple transition-colors overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-base">{idea.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{idea.description}</p>
                          <div className="mt-2 flex items-center flex-wrap gap-2">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium 
                              ${idea.type === 'educational' ? 'bg-blue-100 text-blue-800' : 
                                idea.type === 'entertaining' ? 'bg-green-100 text-green-800' :
                                'bg-purple-100 text-purple-800'}`}>
                              {idea.type.charAt(0).toUpperCase() + idea.type.slice(1)}
                            </span>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {idea.platform === 'both' ? 'Reels & TikTok' : 
                                idea.platform === 'reels' ? 'Instagram Reels' : 'TikTok'}
                            </span>
                            {idea.niche && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                {idea.niche}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-xs h-7"
                            onClick={() => copyToClipboard(idea.description)}
                          >
                            Copy Idea
                          </Button>
                          <Button 
                            variant={isIdeaSaved(idea) ? "default" : "outline"} 
                            size="sm"
                            className={`text-xs h-7 ${isIdeaSaved(idea) ? 'bg-social-purple hover:bg-social-dark-purple' : 'text-social-purple'}`}
                            onClick={() => handleSaveIdea(idea)}
                            disabled={isIdeaSaved(idea)}
                          >
                            {isIdeaSaved(idea) ? 'Saved' : 'Save Idea'}
                          </Button>
                        </div>
                      </div>
                      
                      {/* Image generation section - without text overlay by default */}
                      <ContentImageWithOverlay
                        title={idea.title}
                        description={idea.description}
                        textOverlay={idea.textOverlay}
                        caption={idea.caption}
                        generatedImage={generatedImages[idea.id] || idea.generatedImage}
                        isGenerating={generatingImageForId === idea.id}
                        onGenerateImage={() => handleGenerateImage(idea)}
                      />
                      
                      {/* Caption section - always shown if caption exists */}
                      {idea.caption && (
                        <div className="mt-3 bg-gray-50 p-3 rounded-md border border-gray-200">
                          <div className="flex justify-between items-center">
                            <h4 className="text-xs font-medium text-gray-500">Caption for Posting:</h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 text-xs"
                              onClick={() => handleCopyCaption(idea.caption || '')}
                            >
                              Copy
                            </Button>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{idea.caption}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        ) : (
          <div className="flex flex-col items-center justify-center py-8">
            <p className="text-gray-500">Select a niche and generate to see creative ideas</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ContentIdeas;
