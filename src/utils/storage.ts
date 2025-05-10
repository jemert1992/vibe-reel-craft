
import { ContentIdea } from "@/types/content";

const SAVED_IDEAS_KEY = 'social_media_generator_saved_ideas';

export const saveIdeasToLocalStorage = (ideas: ContentIdea[]): void => {
  localStorage.setItem(SAVED_IDEAS_KEY, JSON.stringify(ideas));
};

export const loadIdeasFromLocalStorage = (): ContentIdea[] => {
  const savedIdeas = localStorage.getItem(SAVED_IDEAS_KEY);
  if (savedIdeas) {
    try {
      return JSON.parse(savedIdeas);
    } catch (e) {
      console.error('Error parsing saved ideas:', e);
      return [];
    }
  }
  return [];
};
