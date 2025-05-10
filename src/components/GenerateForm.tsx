
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface GenerateFormProps {
  onGenerate: () => void;
  loading: boolean;
  count: number;
  setCount: (count: number) => void;
  selectedNiche: string;
}

const GenerateForm = ({
  onGenerate,
  loading,
  count,
  setCount,
  selectedNiche
}: GenerateFormProps) => {
  return (
    <Card className="w-full border-2 border-gray-100">
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Generate Ideas</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="count">Number of ideas:</Label>
            <Input
              id="count"
              type="number"
              min={1}
              max={10}
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value) || 1)}
            />
          </div>
          <Button
            className="w-full bg-social-purple hover:bg-social-dark-purple"
            onClick={onGenerate}
            disabled={loading || !selectedNiche}
          >
            {loading ? (
              <>
                <span className="h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Generating...
              </>
            ) : (
              'Generate Content Ideas'
            )}
          </Button>
          {!selectedNiche && (
            <p className="text-sm text-red-500">Please select a niche first</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default GenerateForm;
