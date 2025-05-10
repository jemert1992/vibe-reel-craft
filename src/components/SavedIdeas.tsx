
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ContentIdea } from '@/types/content';
import { toast } from 'sonner';

interface SavedIdeasProps {
  savedIdeas: ContentIdea[];
  onRemoveIdea: (idea: ContentIdea) => void;
}

const SavedIdeas = ({ savedIdeas, onRemoveIdea }: SavedIdeasProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  return (
    <Card className="w-full border-2 border-gray-100">
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">
          Saved Ideas {savedIdeas.length > 0 && <span className="text-sm text-gray-500">({savedIdeas.length})</span>}
        </h2>
        {savedIdeas.length > 0 ? (
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {savedIdeas.map((idea) => (
                <Card key={idea.id} className="border border-gray-200">
                  <CardContent className="p-4">
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
                          variant="outline" 
                          size="sm"
                          className="text-xs h-7 text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => onRemoveIdea(idea)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        ) : (
          <div className="flex flex-col items-center justify-center py-8">
            <p className="text-gray-500">No saved ideas yet</p>
            <p className="text-gray-400 text-sm">Save ideas from the generator to see them here</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SavedIdeas;
