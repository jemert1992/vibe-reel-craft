
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { niches } from '@/data/niches';
import { toast } from 'sonner';

interface NicheSelectorProps {
  selectedNiche: string;
  setSelectedNiche: (niche: string) => void;
  customNiche: string;
  setCustomNiche: (niche: string) => void;
}

const NicheSelector = ({
  selectedNiche,
  setSelectedNiche,
  customNiche,
  setCustomNiche
}: NicheSelectorProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleCustomNicheChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setCustomNiche(e.target.value);
  };

  const applyCustomNiche = () => {
    if (customNiche.trim()) {
      setSelectedNiche(customNiche);
      toast.success(`Custom niche "${customNiche}" selected!`);
    } else {
      toast.error("Please enter a custom niche first");
    }
  };

  return (
    <Card className="w-full border-2 border-gray-100">
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Select Your Niche</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-4">
          {niches.map((niche) => (
            <Button
              key={niche}
              variant={selectedNiche === niche ? "default" : "outline"}
              className={`h-auto py-2 ${
                selectedNiche === niche
                  ? "bg-social-purple hover:bg-social-dark-purple"
                  : ""
              }`}
              onClick={() => setSelectedNiche(niche)}
            >
              {niche}
            </Button>
          ))}
        </div>
        <div className="mt-4">
          <label htmlFor="custom-niche" className="text-sm font-medium">
            Or enter a custom niche:
          </label>
          <div className="flex gap-2 mt-1">
            <Input
              id="custom-niche"
              placeholder="E.g. Sustainable Fashion"
              value={inputValue}
              onChange={handleCustomNicheChange}
              className="flex-1"
            />
            <Button
              variant="outline"
              className="border-social-purple text-social-purple hover:bg-social-light-purple/20"
              onClick={applyCustomNiche}
            >
              Use Custom
            </Button>
          </div>
          {selectedNiche === customNiche && customNiche !== '' && (
            <p className="mt-2 text-sm text-social-purple">
              Using custom niche: {customNiche}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NicheSelector;
