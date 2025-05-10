
import { ContentIdea } from "@/types/content";

const STORAGE_KEY = "savedContentIdeas";

export const saveIdeasToLocalStorage = (ideas: ContentIdea[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ideas));
  } catch (error) {
    console.error("Error saving ideas to localStorage:", error);
  }
};

export const loadIdeasFromLocalStorage = (): ContentIdea[] => {
  try {
    const savedIdeas = localStorage.getItem(STORAGE_KEY);
    return savedIdeas ? JSON.parse(savedIdeas) : [];
  } catch (error) {
    console.error("Error loading ideas from localStorage:", error);
    return [];
  }
};
