import { useEffect, useState } from "react";
import { ContentIdea, ContentType, Platform } from "@/types/content";
import Header from "@/components/Header";
import NicheSelector from "@/components/NicheSelector";
import ContentTypeFilter from "@/components/ContentTypeFilter";
import GenerateForm from "@/components/GenerateForm";
import ContentIdeas from "@/components/ContentIdeas";
import SavedIdeas from "@/components/SavedIdeas";
import Footer from "@/components/Footer";
import { generateContentIdeas } from "@/utils/contentGenerator";
import { loadIdeasFromLocalStorage, saveIdeasToLocalStorage } from "@/utils/storage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [selectedNiche, setSelectedNiche] = useState<string>("");
  const [customNiche, setCustomNiche] = useState<string>("");
  const [contentType, setContentType] = useState<ContentType>("all");
  const [count, setCount] = useState<number>(5);
  const [ideas, setIdeas] = useState<ContentIdea[]>([]);
  const [savedIdeas, setSavedIdeas] = useState<ContentIdea[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("generator");

  // Load saved ideas from localStorage on initial render
  useEffect(() => {
    const loadedIdeas = loadIdeasFromLocalStorage();
    setSavedIdeas(loadedIdeas);
  }, []);

  const handleGenerate = () => {
    if (!selectedNiche) return;
    
    setLoading(true);
    
    // Fixed the order of parameters - platform is specified as 'both' (default)
    // as the third parameter, and count is moved to the fourth parameter
    setTimeout(() => {
      const newIdeas = generateContentIdeas(selectedNiche, contentType, 'both', count);
      setIdeas(newIdeas);
      setLoading(false);
    }, 1500);
  };

  const handleSaveIdea = (idea: ContentIdea) => {
    const updatedSavedIdeas = [...savedIdeas, idea];
    setSavedIdeas(updatedSavedIdeas);
    saveIdeasToLocalStorage(updatedSavedIdeas);
  };

  const handleRemoveIdea = (idea: ContentIdea) => {
    const updatedSavedIdeas = savedIdeas.filter((savedIdea) => savedIdea.id !== idea.id);
    setSavedIdeas(updatedSavedIdeas);
    saveIdeasToLocalStorage(updatedSavedIdeas);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="md:hidden mb-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="generator">Creative Generator</TabsTrigger>
              <TabsTrigger value="saved">
                Saved <span className="ml-1 text-xs">({savedIdeas.length})</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className={`lg:col-span-2 space-y-6 ${activeTab !== "generator" ? "hidden md:block" : ""}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <NicheSelector
                selectedNiche={selectedNiche}
                setSelectedNiche={setSelectedNiche}
                customNiche={customNiche}
                setCustomNiche={setCustomNiche}
              />
              <div className="space-y-6">
                <ContentTypeFilter
                  contentType={contentType}
                  setContentType={setContentType}
                />
                <GenerateForm
                  onGenerate={handleGenerate}
                  loading={loading}
                  count={count}
                  setCount={setCount}
                  selectedNiche={selectedNiche}
                />
              </div>
            </div>
            <ContentIdeas
              ideas={ideas}
              loading={loading}
              savedIdeas={savedIdeas}
              onSaveIdea={handleSaveIdea}
            />
          </div>
          
          <div className={`${activeTab !== "saved" ? "hidden md:block" : ""}`}>
            <SavedIdeas
              savedIdeas={savedIdeas}
              onRemoveIdea={handleRemoveIdea}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
