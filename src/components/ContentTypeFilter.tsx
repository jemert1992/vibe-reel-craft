
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ContentType } from '@/types/content';

interface ContentTypeFilterProps {
  contentType: ContentType;
  setContentType: (type: ContentType) => void;
}

const ContentTypeFilter = ({
  contentType,
  setContentType
}: ContentTypeFilterProps) => {
  return (
    <Card className="w-full border-2 border-gray-100">
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Content Type</h2>
        <Tabs
          defaultValue="all"
          value={contentType}
          onValueChange={(value: string) => setContentType(value as ContentType)}
          className="w-full"
        >
          <TabsList className="w-full grid grid-cols-4 h-auto">
            <TabsTrigger
              value="all"
              className="py-2 data-[state=active]:bg-social-purple data-[state=active]:text-white"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="educational"
              className="py-2 data-[state=active]:bg-social-purple data-[state=active]:text-white"
            >
              Educational
            </TabsTrigger>
            <TabsTrigger
              value="entertaining"
              className="py-2 data-[state=active]:bg-social-purple data-[state=active]:text-white"
            >
              Entertaining
            </TabsTrigger>
            <TabsTrigger
              value="promotional"
              className="py-2 data-[state=active]:bg-social-purple data-[state=active]:text-white"
            >
              Promotional
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ContentTypeFilter;
