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

  // Enhanced collection of caption templates with longer, more informative content
  const captionTemplates: Record<string, string[]> = {
    "educational": [
      "Learning about {niche} doesn't have to be complicated! In this comprehensive guide, I break down the essential concepts, share expert-backed strategies, and reveal the most common mistakes to avoid. Whether you're a beginner or looking to refine your knowledge, these insights will help you master {niche} fundamentals. Save this post for future reference! #Learn{niche} #ExpertTips #DetailedGuide",
      
      "Did you know these fascinating facts about {niche}? After researching extensively and consulting with industry experts, I've compiled this detailed breakdown of what truly matters in the {niche} space. Swipe through for an in-depth analysis that challenges conventional wisdom and provides practical applications for your everyday life or business. Share this with someone who needs this valuable information! #Educational{niche} #DetailedAnalysis #ResearchBacked",
      
      "I wish someone had taught me these {niche} principles sooner! After years of trial and error, I've created this comprehensive resource covering everything from fundamental concepts to advanced strategies. Each point is backed by research and real-world application, making this your ultimate reference guide for all things {niche}. Save this post for when you need it most! #{niche}Mastery #ComprehensiveGuide #SaveThisForLater",
      
      "The ultimate {niche} guide you've been waiting for is finally here! Through extensive research and collaboration with industry leaders, I've created this in-depth exploration of {niche} that covers historical context, current best practices, and future trends to watch. This isn't just surface-level information—it's an actionable framework you can implement immediately. Let me know what other topics you want me to cover in this level of detail! #Definitive{niche}Guide #ExpertInsights #DetailedBreakdown",
      
      "This {niche} insight changed everything for my approach! After analyzing dozens of case studies and speaking with leading experts, I've compiled these detailed findings that challenge the status quo. The post includes step-by-step explanations, comparative analysis, and practical applications that you won't find elsewhere. What's your experience with these {niche} strategies? Comment below with your thoughts or questions! #{niche}Deep Dive #ResearchBacked #ComprehensiveAnalysis"
    ],
    "entertaining": [
      "This {niche} moment had me absolutely dying 😂 After collecting hilarious examples from across the internet and my own experience, I've put together this entertaining but surprisingly educational compilation! Each example includes the backstory and aftermath that makes these situations even funnier when you understand the full context. Tag someone who can relate to these all-too-familiar {niche} scenarios! #Hilarious{niche} #CannotStopLaughing #RelatableContent",
      
      "POV: When your {niche} plans don't go as expected 🙈 I spent weeks gathering these spectacular fails and unexpected outcomes to create this entertaining yet informative collection. Beyond just the funny moments, I've included the valuable lessons learned and how each situation eventually resolved (or didn't!). This is both entertainment AND education in one package. Have you experienced something similar? Share your story in the comments! #Epic{niche}Fails #LearnFromMyMistakes #EntertainingEducation",
      
      "I can't be the only one who does this with {niche}... right? 😅 After surveying hundreds of people in the community and collecting their anonymous confessions, I've created this hilariously honest deep-dive into the quirky habits, secret shortcuts, and guilty pleasures we all have when it comes to {niche}. The extensive research behind this entertaining content might make you feel seen in ways you never expected! #UnspokenTruths #Humor{niche} #WeAllDoThis",
      
      "Day 3 of my {niche} adventures and I'm documenting the entire journey—successes, failures, and everything in between! This multi-part series tracks my comprehensive experience with detailed timestamps, unexpected discoveries, and the emotional rollercoaster that ensued. Follow along for the complete story with daily updates and behind-the-scenes content not shared elsewhere. #Authentic{niche}Journey #DocumentedExperience #UnfilteredContent",
      
      "When {niche} takes over your life like... 💁‍♀️ Based on interviews with dozens of enthusiasts and my own obsessive research, this entertaining yet informative deep dive explores how {niche} evolves from casual interest to complete lifestyle transformation. I've included psychological insights, progression timelines, and hilarious-but-true stages of {niche} addiction that you'll definitely recognize if you're already deep in this world! #LifeTakeover #Progressive{niche}Obsession #HilariouslyAccurate"
    ],
    "promotional": [
      "Transform your {niche} experience with our latest offering! ✨ After months of research and development, working closely with industry experts and beta testers across multiple industries, we've created a comprehensive solution that addresses the most common pain points in the {niche} space. This detailed post outlines the problem-solving approach, key features, and the measurable results our early adopters have already achieved. Limited spots available for our premium tier—click the link in bio to learn more about pricing tiers and exclusive launch benefits! #Innovative{niche}Solution #DetailedOverview #LimitedAvailability",
      
      "We're changing the {niche} game! 🙌 Our team has spent the past year interviewing hundreds of {niche} enthusiasts to identify the biggest challenges and opportunities in this space. This comprehensive post details our revolutionary approach, the scientific principles behind our methodology, and includes case studies with verified results from our diverse client base. The extended breakdown covers everything from implementation strategies to expected outcomes at different stages. Click the link in bio for the complete resource library and special launch pricing! #Game-Changing{niche} #ExtensiveResearch #VerifiedResults",
      
      "Our clients' {niche} results speak for themselves! 📈 This in-depth case study collection features detailed before-and-after analyses from clients across various industries and experience levels. Each example includes the complete methodology, timeline of implementation, challenges encountered, solutions developed, and final measurable outcomes with supporting data. We've also included our comprehensive assessment framework so you can evaluate your current {niche} situation. DM for a personalized consultation that includes our 20-point {niche} audit! #Proven{niche}System #DetailedCaseStudies #DataDriven",
      
      "Exclusive {niche} offer for our dedicated followers! 🎁 After gathering extensive feedback from our community, we've created this comprehensive package that includes our core service plus additional resources we've never offered before. This detailed post covers everything included in each tier, comparative analysis with other options in the market, implementation timeline, and the complete support structure available to you. Use code SOCIAL20 for 20% off our most comprehensive package with lifetime access to future updates! #Complete{niche}Solution #ExtensiveResources #ExclusiveOffer",
      
      "The {niche} solution you've been searching for is finally here! 🔍 Based on extensive market research and analysis of over 1,000 customer feedback points, we've developed this comprehensive approach that addresses the most common and complex {niche} challenges. This in-depth overview covers our proprietary methodology, the scientific principles supporting our approach, implementation framework, and detailed expected outcomes at various stages. Questions about how this would work for your specific situation? Drop them below for personalized insights from our expert team! #Comprehensive{niche}System #ResearchBacked #PersonalizedSolutions"
    ],
    "default": [
      "Sharing my complete {niche} journey with you all! This isn't just a highlight reel—it's an honest documentation of the entire process from beginning to current state, including challenges faced, resources that proved most valuable, unexpected discoveries, and measurable outcomes at each stage. The comprehensive timeline includes specific turning points and decisions that made the biggest difference. What's your experience with {niche}? I'd love to hear your detailed stories too! #{niche}FullStory #CompleteJourney #TransparentSharing",
      
      "All things {niche} covered in this definitive guide! After months of research, interviews with experts, and personal experimentation, I've compiled this comprehensive resource that addresses everything from fundamental principles to advanced strategies, common misconceptions, historical context, and future trends. Each section includes actionable takeaways and additional resources for deeper exploration. Save this post if you found it helpful—it's designed to be your complete reference! #{niche}Encyclopedia #CompleteGuide #SaveThisResource",
      
      "When it comes to {niche}, these are the critical factors most people overlook! My extensive analysis reveals the hidden connections between seemingly unrelated aspects of {niche} that collectively determine success. This detailed breakdown includes historical context, comparative case studies, expert perspectives, and a framework for implementing these insights in your unique situation. Agree or disagree with these findings? Let's have an in-depth discussion in the comments! #Critical{niche}Factors #ComprehensiveAnalysis #ExpertInsights",
      
      "{niche} content that's actually worth your time ⏱️ Unlike the surface-level information flooding your feed, this post dives deep into the nuances, underlying principles, and practical applications of {niche} knowledge. I've included extensive research notes, expert contributions, comparative analysis, and a complete implementation framework. Follow for more thoroughly researched and carefully crafted content like this! #In-Depth{niche} #ResearchBacked #ComprehensiveContent",
      
      "This unconventional {niche} approach might surprise you, but the research supports its effectiveness! 👀 After analyzing dozens of case studies and testing multiple methodologies, I've documented this comprehensive alternative framework that challenges conventional wisdom while delivering superior results. The detailed breakdown includes theoretical foundations, practical implementation steps, potential challenges, and expected outcomes at different stages. What would you add to this analysis? I welcome thoughtful additions to this research! #Research-Backed{niche} #AlternativeApproach #ComprehensiveFramework"
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
      "Highlight the main aspects of {niche} that your audience needs to understand.",
      "Showcase how {niche} can be approached differently for better results.",
      "Explain the fundamentals of {niche} and why they matter.",
      "Reveal insider knowledge about {niche} that most people don't know.",
      "Compare common {niche} approaches and identify which works best.",
      "Highlight the single most common mistake people make in {niche} and how to fix it.",
      "Demonstrate a step-by-step process to improve {niche} skills or knowledge.",
      "Share a personal story or case study related to {niche} with key lessons.",
      "Present surprising facts about {niche} that challenge conventional wisdom.",
      "Provide practical tips for {niche} that can be implemented immediately."
    ];
    
    const descIndex = Math.floor(Math.random() * descriptionTemplates.length);
    const description = descriptionTemplates[descIndex];
    
    // Generate an enhanced caption for the post - using the new longer, more informative captions
    const captionArray = captionTemplates[selectedType] || captionTemplates.default;
    const captionIndex = Math.floor(Math.random() * captionArray.length);
    const caption = captionArray[captionIndex].replace(/{niche}/g, niche);
    
    console.log(`Generated content for niche "${niche}":`, { title, selectedType, caption: caption.substring(0, 50) + '...' });
    
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
