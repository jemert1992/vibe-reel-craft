import { ContentIdea, ContentType, Platform } from "@/types/content";
import { v4 as uuidv4 } from 'uuid';
import { niches } from "@/data/niches";

// Utility function to check if the niche is from the predefined list
const isPredefinedNiche = (niche: string): boolean => {
  return niches.includes(niche);
};

// Generate content ideas based on niche, content type and platform
export function generateContentIdeas(
  niche: string,
  contentType: ContentType = 'all',
  platform: Platform = 'both',
  count: number = 5
): ContentIdea[] {
  console.log(`Generating ${count} content ideas for niche: "${niche}", type: ${contentType}, platform: ${platform}`);
  
  // If niche is empty or undefined, return empty array
  if (!niche) {
    console.error('No niche provided for content generation');
    return [];
  }

  // Check if this is a custom niche and log it
  if (!isPredefinedNiche(niche)) {
    console.log(`Using custom niche: "${niche}"`);
  }

  // Map of educational content idea templates by niche
  const educationalTemplatesByNiche: Record<string, string[]> = {
    "Business": [
      "Top 5 {niche} Strategies for Entrepreneurs",
      "The Step-by-Step Guide to {niche} for Small Businesses",
      "Common {niche} Mistakes to Avoid for Business Owners",
      "Understanding {niche}: A Beginner's Guide for Entrepreneurs",
      "{niche} Metrics Every Business Owner Should Track",
    ],
    "Health": [
      "5 {niche} Myths Debunked by Experts",
      "A Beginner's Guide to {niche} for Better Health",
      "The Science Behind {niche} and Why It Works",
      "How to Incorporate {niche} Into Your Daily Routine",
      "Warning Signs Your {niche} Approach Is Wrong",
    ],
    "Technology": [
      "The Future of {niche}: Predictions and Trends",
      "How {niche} Is Changing the World",
      "Top 10 {niche} Innovations of the Year",
      "The Impact of {niche} on Society",
      "Is {niche} the Next Big Thing?",
    ],
    "Travel": [
      "The Ultimate {niche} Travel Guide",
      "Top 5 {niche} Destinations You Must Visit",
      "How to Travel {niche} on a Budget",
      "The Best Time to Visit {niche} Locations",
      "Hidden Gems for {niche} Enthusiasts",
    ],
    "Food": [
      "5 {niche} Recipes You Need to Try",
      "The Secret to Perfect {niche} Cooking",
      "How to Make {niche} at Home",
      "The Best {niche} Ingredients to Use",
      "A Beginner's Guide to {niche} Cuisine",
    ],
    "default": [
      "Top 5 {niche} Tips You Need to Know",
      "The Ultimate Guide to {niche} for Beginners",
      "Common {niche} Mistakes and How to Fix Them",
      "The Biggest {niche} Mistake to Avoid",
      "How to Improve Your {niche} Skills Fast",
      "Behind-the-Scenes: {niche} Secrets Revealed",
      "3 {niche} Hacks That Will Change Everything",
      "{niche} 101: Everything You Need to Know",
      "Why Your {niche} Strategy Isn't Working",
      "The Truth About {niche} Nobody Tells You",
    ],
  };

  // Map of entertaining content idea templates by niche
  const entertainingTemplatesByNiche: Record<string, string[]> = {
    "Comedy": [
      "When {niche} Goes Hilariously Wrong",
      "5 {niche} Moments That Will Make You Laugh",
      "{niche} Fails That Are Too Funny Not to Share",
      "If {niche} Were a Person (Comedy Skit)",
      "Things {niche} Enthusiasts Say vs. Reality",
    ],
    "Pets": [
      "Cute Pets Trying {niche} for the First Time",
      "My Pet's Hilarious Reaction to {niche}",
      "Pets vs. {niche}: The Ultimate Showdown",
      "How My Pet Became a {niche} Expert",
      "If Pets Could Talk About {niche}",
    ],
    "Gaming": [
      "Epic {niche} Fails and Wins",
      "The Funniest {niche} Glitches Ever",
      "When {niche} Gets Too Real (Gamer Reactions)",
      "Gaming Logic vs. {niche} Reality",
      "The Most Ridiculous {niche} Moments in Gaming",
    ],
    "Music": [
      "When {niche} Lyrics Make No Sense",
      "The Funniest {niche} Music Video Parodies",
      "If {niche} Songs Were About Everyday Life",
      "Musicians React to Hilarious {niche} Covers",
      "The Most Unexpected {niche} Remixes",
    ],
    "Movies": [
      "When {niche} Movie Scenes Go Wrong",
      "The Funniest {niche} Movie Bloopers",
      "If {niche} Characters Were Real People",
      "Movie Logic vs. {niche} Reality",
      "The Most Ridiculous {niche} Moments in Movies",
    ],
    "default": [
      "I Tried {niche} for a Week and Here's What Happened",
      "When {niche} Goes Wrong (Funny Moments)",
      "Testing Viral {niche} Hacks So You Don't Have To",
      "A Day in the Life of a {niche} Enthusiast",
      "The {niche} Challenge That's Taking Over Social Media",
      "What {niche} Looks Like in Different Countries",
      "Budget vs. Luxury {niche} Experience",
      "Surprising {niche} Facts in 30 Seconds",
      "We Tried {niche} Trends From the Past 50 Years",
      "Reacting to the Weirdest {niche} Products Online",
    ],
  };

  // Map of promotional content idea templates by niche
  const promotionalTemplatesByNiche: Record<string, string[]> = {
    "default": [
      "How Our {niche} Service Changed This Client's Life",
      "Before and After: {niche} Transformation",
      "Why Clients Choose Our {niche} Solutions",
      "Introducing Our New {niche} Product/Service",
      "The Benefits of Our {niche} Approach",
      "Client Success Story: {niche} Results in Action",
      "Limited Time Offer: {niche} Special Deal",
      "How We Solve Common {niche} Problems",
      "The Story Behind Our {niche} Business",
      "What Makes Our {niche} Service Different",
    ],
  };

  // Collection of caption templates
  const captionTemplates: Record<string, string[]> = {
    "educational": [
      "Learning about {niche} doesn't have to be complicated! Here's what you need to know 👇 #Learn{niche} #Tips",
      "Did you know this about {niche}? Share this with someone who needs to see it! #Educational{niche} #FactsOnly",
      "I wish someone had taught me this about {niche} sooner! Save this post for later 💯 #{niche}Tips #MustKnow",
      "The ultimate {niche} guide you've been waiting for 🔥 Let me know what other topics you want me to cover! #Learn{niche}",
      "This {niche} tip changed everything for me. What's your best tip? Comment below! #{niche}Community #ShareKnowledge"
    ],
    "entertaining": [
      "This {niche} moment had me dying 😂 Tag someone who can relate! #{niche}Life #Funny",
      "POV: When your {niche} plans don't go as expected 🙈 #Relatable{niche} #TooFunny",
      "I can't be the only one who does this with {niche}... right? 😅 #Humor #{niche}Problems",
      "Day 3 of {niche} adventures and I'm still wondering how I got here 🤣 #FunnyMoments #{niche}Fails",
      "When {niche} takes over your life like... 💁‍♀️ #RelatableContent #TrueStory"
    ],
    "promotional": [
      "Transform your {niche} experience with our latest offering ✨ Limited spots available! #New{niche}Service",
      "We're changing the {niche} game! 🙌 Click the link in bio to learn more #Innovation #{niche}Solutions",
      "Our clients' {niche} results speak for themselves 📈 DM for a free consultation #{niche}Experts",
      "Exclusive {niche} offer for our followers! 🎁 Use code SOCIAL20 for 20% off #{niche}Sale #LimitedTime",
      "The {niche} solution you've been searching for is here 🔍 Questions? Drop them below! #Problem{niche}Solved"
    ],
    "default": [
      "Sharing my {niche} journey with you all! What's your experience? 💭 #{niche}Life #ShareYourStory",
      "All things {niche} on today's agenda ✨ Save this post if you found it helpful! #{niche}Tips",
      "When it comes to {niche}, this is what matters most 👆 Agree or disagree? #Thoughts{niche} #Discussion",
      "{niche} content that's worth your time ⏱️ Follow for more insights like this! #{niche}Community",
      "This {niche} approach might surprise you 👀 What would you add to this list? #Unexpected{niche}"
    ]
  };

  // Generate ideas based on niche, content type and count
  const ideas: ContentIdea[] = [];

  for (let i = 0; i < count; i++) {
    const isEducational = contentType === 'all' || contentType === 'educational';
    const isEntertaining = contentType === 'all' || contentType === 'entertaining';
    const isPromotional = contentType === 'all' || contentType === 'promotional';
    
    // Randomly select content type if 'all' is selected
    let selectedType: ContentType = contentType;
    if (contentType === 'all') {
      const types: ContentType[] = ['educational', 'entertaining', 'promotional'];
      selectedType = types[Math.floor(Math.random() * types.length)];
    }
    
    // Get appropriate templates based on niche and content type
    let templates: string[] = [];
    
    if (selectedType === 'educational') {
      templates = educationalTemplatesByNiche[niche] || educationalTemplatesByNiche.default;
    } else if (selectedType === 'entertaining') {
      templates = entertainingTemplatesByNiche[niche] || entertainingTemplatesByNiche.default;
    } else if (selectedType === 'promotional') {
      templates = promotionalTemplatesByNiche.default;
    }
    
    // If no templates are found for the specific niche, use the default templates
    if (!templates || templates.length === 0) {
      console.log(`No specific templates found for "${niche}" with content type "${selectedType}". Using default templates.`);
      if (selectedType === 'educational') {
        templates = educationalTemplatesByNiche.default;
      } else if (selectedType === 'entertaining') {
        templates = entertainingTemplatesByNiche.default;
      } else {
        templates = promotionalTemplatesByNiche.default;
      }
    }
    
    // Select a random template and replace {niche} with the actual niche
    const randomIndex = Math.floor(Math.random() * templates.length);
    const template = templates[randomIndex];
    const title = template.replace(/{niche}/g, niche);
    
    // Generate a description based on the title
    const descriptionTemplates = [
      `Highlight the main aspects of ${niche} that your audience needs to understand.`,
      `Showcase how ${niche} can be approached differently for better results.`,
      `Explain the fundamentals of ${niche} and why they matter.`,
      `Reveal insider knowledge about ${niche} that most people don't know.`,
      `Compare common ${niche} approaches and identify which works best.`,
      `Highlight the single most common mistake people make in ${niche} and how to fix it.`,
      `Demonstrate a step-by-step process to improve ${niche} skills or knowledge.`,
      `Share a personal story or case study related to ${niche} with key lessons.`,
      `Present surprising facts about ${niche} that challenge conventional wisdom.`,
      `Provide practical tips for ${niche} that can be implemented immediately.`
    ];
    
    const descIndex = Math.floor(Math.random() * descriptionTemplates.length);
    const description = descriptionTemplates[descIndex];
    
    // Generate a caption for the post
    const captionArray = captionTemplates[selectedType] || captionTemplates.default;
    const captionIndex = Math.floor(Math.random() * captionArray.length);
    const caption = captionArray[captionIndex].replace(/{niche}/g, niche);
    
    console.log(`Generated content for niche "${niche}":`, { title, selectedType, caption });
    
    // Add the content idea to the array
    ideas.push({
      id: uuidv4(),
      title,
      description,
      niche,
      type: selectedType,
      platform,
      textOverlay: title,
      caption,
      hashTags: [`#${niche.replace(/\s+/g, '')}`, '#ContentCreator', '#SocialMedia']
    });
  }
  
  return ideas;
}
