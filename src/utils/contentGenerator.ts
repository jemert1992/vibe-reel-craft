import { ContentIdea, ContentType, Platform } from "@/types/content";

// Helper function to generate a random ID
const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Sample data for different content types with enhanced visual concepts
const contentTemplates: Record<string, Record<ContentType, any[]>> = {
  Fitness: {
    educational: [
      {
        title: "One Simple Exercise Everyone Does Wrong",
        description: "Create a fitness post showing the correct form for a common exercise that most people do incorrectly.",
        textOverlay: "You're Doing This WRONG! 💪",
        imagePrompt: "A person demonstrating perfect squat form with proper posture, center framed against a clean gym background with dramatic lighting highlighting their form.",
        caption: "This small form correction will transform your results and prevent injuries! Drop a 🔥 if you learned something new today! #FormFix #FitnessForm"
      },
      {
        title: "The Only Stretch You Need Daily",
        description: "Show a single essential stretch that targets multiple muscle groups for better mobility.",
        textOverlay: "Do This EVERY Day! 🧘‍♂️",
        imagePrompt: "A fitness model performing a perfect hip flexor stretch on a yoga mat, with clean lighting and a gradient background emphasizing proper form and position.",
        caption: "I do this ONE stretch daily for better mobility and less pain. Has your flexibility improved with daily stretching? #MobilityMatters #DailyStretch"
      }
    ],
    entertaining: [
      {
        title: "The Gym Face Everyone Makes",
        description: "Create a humorous post showing the universal expression people make during an intense exercise.",
        textOverlay: "We ALL Make This Face! 😤",
        imagePrompt: "A person mid-exercise with an exaggerated effort facial expression, dramatically lit from above, center framed against a bold colored background for comic effect.",
        caption: "Tag someone who makes THIS exact face during leg day! 😂 What's your signature gym expression? #GymFaces #WorkoutHumor"
      },
      {
        title: "When Someone Takes Your Equipment",
        description: "A relatable gym moment showing a person's reaction when their equipment gets taken.",
        textOverlay: "Gym Etiquette 101 🏋️",
        imagePrompt: "A person with an exaggerated confused/annoyed expression looking at empty space where gym equipment should be, with vibrant colors and dramatic shadows for emphasis.",
        caption: "This happened THREE times today! Do you ask before taking someone's equipment or just grab and go? 👀 #GymEtiquette #GymLife"
      }
    ],
    promotional: [
      {
        title: "The One Supplement That Works",
        description: "Showcase a single effective supplement that delivers noticeable results.",
        textOverlay: "GAME CHANGER Supplement! ⚡",
        imagePrompt: "A single supplement bottle/container dramatically lit in the center of the frame against a dark background with a subtle glow effect emphasizing its importance.",
        caption: "After testing dozens of supplements, this is the ONLY one I've found that delivers real results. What supplements have actually worked for you? #SupplementTruth #FitnessResults"
      },
      {
        title: "My Favorite Workout Gear",
        description: "Highlight one piece of fitness equipment or apparel that enhances your workout experience.",
        textOverlay: "Never Workout Without THIS! 🔥",
        imagePrompt: "A single piece of premium workout equipment or apparel (like specialized lifting shoes) center-framed with dramatic lighting highlighting its features and quality.",
        caption: "This completely transformed my training sessions! What's your must-have workout gear? Link in bio for details! #FitnessEssentials #WorkoutGear"
      }
    ],
    all: [] // This will be populated with all types
  },
  Beauty: {
    educational: [
      {
        title: "The Multi-Use Product Everyone Needs",
        description: "Showcase a single beauty product that can be used in multiple ways for different effects.",
        textOverlay: "3 Uses, ONE Product! ✨",
        imagePrompt: "A single multi-purpose beauty product (like a tinted balm) center-framed against a clean, pastel background with dramatic lighting highlighting its texture and color.",
        caption: "This product works for lips, cheeks AND eyes! What's your favorite multi-use beauty hack? #BeautyHacks #MultitaskingMakeup"
      },
      {
        title: "The Correct Order of Skincare",
        description: "Focus on the most important skincare product in your routine and why order matters.",
        textOverlay: "ALWAYS Apply This FIRST! 🧴",
        imagePrompt: "A hand holding a single skincare product (serum bottle or similar) with perfect lighting highlighting the texture of the product against a clean, minimal background.",
        caption: "Getting the order wrong can make your expensive products useless! What's the first product in YOUR skincare routine? #SkincareOrder #BeautyScience"
      }
    ],
    entertaining: [
      {
        title: "When You Try a New Product",
        description: "A humorous take on trying a hyped beauty product for the first time.",
        textOverlay: "Expectations vs. REALITY! 😳",
        imagePrompt: "A person with an exaggerated shocked/surprised expression examining their face in a mirror after applying a beauty product, with bright, theatrical lighting.",
        caption: "The way this product promised me MODEL skin and delivered... THIS! 😂 What overhyped product disappointed you most? #BeautyFails #ProductReality"
      },
      {
        title: "My Makeup Without Filters",
        description: "An authentic look at makeup application in real lighting conditions.",
        textOverlay: "REAL Makeup, NO Filter! 👀",
        imagePrompt: "A close-up of perfect, detailed makeup (like an eye with elaborate eyeshadow) in natural lighting conditions showing genuine texture and dimension.",
        caption: "Keeping it 100% real with how this look actually appears in daylight! Do you prefer filtered or unfiltered beauty content? #NoFilter #RealMakeup"
      }
    ],
    promotional: [
      {
        title: "The Viral Product Worth the Hype",
        description: "Focus on a single trending beauty product that actually delivers on its promises.",
        textOverlay: "Believe The HYPE! 🙌",
        imagePrompt: "A single beauty product dramatically lit and center-framed against a background that complements its packaging, with a subtle glow effect emphasizing its importance.",
        caption: "After testing for 3 weeks, this viral product ACTUALLY lives up to the TikTok hype! Have you tried it yet? Link in bio! #WorthTheHype #BeautyMustHave"
      },
      {
        title: "The One Tool That Changed My Routine",
        description: "Highlight a single beauty tool that dramatically improved your beauty routine.",
        textOverlay: "BEST Beauty Investment! 💄",
        imagePrompt: "A high-end beauty tool (like a facial roller or premium brush) isolated against a luxurious background with dramatic lighting highlighting its quality and features.",
        caption: "I was skeptical but this tool cut my routine time in HALF! What beauty tool can't you live without? #BeautyEssentials #TimeHack"
      }
    ],
    all: []
  },
  Food: {
    educational: [
      {
        title: "The Secret Ingredient Chefs Use",
        description: "Reveal a single ingredient that professional chefs use to elevate ordinary dishes.",
        textOverlay: "Chefs' SECRET Ingredient! 🧂",
        imagePrompt: "A hand sprinkling a single special ingredient (like flaky salt or fresh herb) onto a perfectly plated dish, with dramatic lighting highlighting the ingredient's texture.",
        caption: "This ONE ingredient is the difference between home cooking and restaurant quality! What's your secret ingredient? #ChefSecrets #FlavorHack"
      },
      {
        title: "How to Cut Vegetables Like a Pro",
        description: "Show a professional knife technique for cutting vegetables efficiently.",
        textOverlay: "Cut Like a PRO Chef! 🔪",
        imagePrompt: "A close-up of hands using proper knife technique to slice a vegetable, with dramatic lighting highlighting the precision of the cut and quality of the knife.",
        caption: "This knife technique will speed up your prep time and make your dishes look restaurant-quality! What cooking skill do you want to learn next? #ChefSkills #KnifeTechnique"
      }
    ],
    entertaining: [
      {
        title: "When the Recipe Says 'Quick & Easy'",
        description: "A humorous take on supposedly simple recipes that turn complicated.",
        textOverlay: "'10-Minute' Recipe... RIGHT! 😅",
        imagePrompt: "A messy kitchen countertop with a single prominently featured failed dish in the center, with exaggerated lighting highlighting the chaos and contrast to perfection.",
        caption: "Hour 3 of this '10-minute recipe' and I'm questioning all my life choices! 💀 Tag someone who relates to this cooking struggle! #RecipeReality #CookingFail"
      },
      {
        title: "My Food vs. Restaurant Photos",
        description: "A humorous comparison of homemade food presentation versus professional photos.",
        textOverlay: "Instagram vs. My Plate! 🍽️",
        imagePrompt: "A somewhat messy but delicious-looking homemade dish presented on a regular dinner plate with natural lighting showing authentic food texture and presentation.",
        caption: "My attempt at that fancy restaurant dish looked NOTHING like the picture! 😂 Show me your cooking 'nailed it' moments! #FoodReality #CookingAttempts"
      }
    ],
    promotional: [
      {
        title: "The One Kitchen Tool You Need",
        description: "Feature a single essential kitchen tool that makes cooking easier and more efficient.",
        textOverlay: "BEST Kitchen Investment! 👨‍🍳",
        imagePrompt: "A single high-quality kitchen tool (like a chef's knife or multi-cooker) dramatically lit and center-framed against a clean kitchen background highlighting its features.",
        caption: "This tool has saved me HOURS of cooking time every week! What's your most-used kitchen tool? Link in bio for my recommendation! #KitchenEssentials #CookingTools"
      },
      {
        title: "The Easiest Meal Prep Hack",
        description: "Showcase a simple but effective meal preparation technique that saves time.",
        textOverlay: "Meal Prep GAME CHANGER! ⏱️",
        imagePrompt: "A single meal prep container with perfectly organized, colorful food components showing an efficient and appetizing preparation technique.",
        caption: "This simple hack has saved me 3 hours every Sunday! What's your favorite meal prep shortcut? Full guide in my bio! #MealPrepSunday #TimeHack"
      }
    ],
    all: []
  }
};

// Extend the base templates with generic ideas for all niches
const genericTemplates: Record<ContentType, any[]> = {
  educational: [
    {
      title: "The One [NICHE] Tip Everyone Needs",
      description: "Share a single, game-changing tip related to [NICHE] that can benefit everyone in the audience.",
      textOverlay: "[NICHE] Tip You NEED! 💡",
      imagePrompt: "A person demonstrating a single, clear [NICHE] technique or tip, center-framed with dramatic lighting highlighting the important elements against a simple background.",
      caption: "This ONE tip changed my entire approach to [NICHE]! What's the best [NICHE] advice you've ever received? #[NICHE]Tips #GameChanger"
    },
    {
      title: "The Biggest [NICHE] Mistake to Avoid",
      description: "Highlight the single most common mistake people make in [NICHE] and how to fix it.",
      textOverlay: "STOP Making This Mistake! ⚠️",
      imagePrompt: "A clear visual representation of a common [NICHE] mistake, dramatically lit with bold colors and clear visual elements highlighting what to avoid.",
      caption: "I see this mistake EVERYWHERE and it's costing you progress! Did you know about this? Drop a 🙌 if this helped! #[NICHE]Mistakes #LearnWithMe"
    }
  ],
  entertaining: [
    {
      title: "When You're Obsessed With [NICHE]",
      description: "A relatable, humorous take on being passionate about [NICHE].",
      textOverlay: "[NICHE] Obsession Be Like... 😂",
      imagePrompt: "A person with an exaggerated, humorous expression surrounded by or interacting with a single [NICHE]-related item, with vibrant colors and dramatic lighting for comedic effect.",
      caption: "My friends are tired of hearing about [NICHE] but I CANNOT stop talking about it! 🤣 Tag someone who's just as obsessed! #[NICHE]Addict #Relatable"
    },
    {
      title: "No One Told Me About [NICHE]",
      description: "A humorous take on surprising discoveries in [NICHE] that beginners aren't prepared for.",
      textOverlay: "They NEVER Tell Beginners! 😱",
      imagePrompt: "A person with a shocked/surprised expression interacting with a single [NICHE] item or situation, with theatrical lighting highlighting their reaction.",
      caption: "Month 1 vs Month 6 of [NICHE] and NO ONE prepared me for this reality! 💀 What surprised you most about getting into [NICHE]? #[NICHE]Reality #BeginnerProblems"
    }
  ],
  promotional: [
    {
      title: "The Only [NICHE] Product Worth Buying",
      description: "Showcase a single high-quality product related to [NICHE] that stands above the competition.",
      textOverlay: "FINALLY Found THE ONE! ✨",
      imagePrompt: "A single high-quality [NICHE] product dramatically lit and center-framed against a complementary background that highlights its features and premium quality.",
      caption: "After trying DOZENS of options, this is the only [NICHE] product I recommend! What's your holy grail [NICHE] item? Link in bio! #[NICHE]Essentials #TopPick"
    },
    {
      title: "How I Transformed My [NICHE]",
      description: "Show a dramatic transformation or improvement in [NICHE] using a specific method or product.",
      textOverlay: "One Change, BIG Results! 🔄",
      imagePrompt: "A single, powerful visual representing a transformation or significant improvement in [NICHE], with dramatic lighting emphasizing the change or result.",
      caption: "Making this ONE change completely transformed my [NICHE] results in just weeks! Want to know my exact method? Details in bio! #[NICHE]Transformation #GameChanger"
    }
  ],
  all: []
};

// Platform-specific styling suggestions
const platformStyles: Record<string, string> = {
  reels: "polished and aesthetically pleasing with clean lines and professional quality, Instagram-ready",
  tiktok: "bold and trendy with vibrant colors, text effects, and high-energy visual style",
  both: "balanced blend of professional quality with trendy elements, suitable for cross-platform posting"
};

// Generate enhanced descriptions with visual elements
const generateEnhancedDescription = (title: string, niche: string, type: ContentType, platform: Platform): any => {
  // Base description templates with stronger visual focus
  const descriptionTemplates = [
    `Create a ${niche.toLowerCase()} post with one clear focal point showing ${title.toLowerCase()}, designed to stop viewers from scrolling.`,
    `Share a visually striking ${niche.toLowerCase()} post about ${title.toLowerCase()} with a single main subject and bold visual elements.`,
    `Design a ${niche.toLowerCase()} post featuring ${title.toLowerCase().includes('how to') ? title.toLowerCase().replace('how to ', '') : title.toLowerCase()} with one clear visual concept.`,
    `Create an eye-catching ${niche.toLowerCase()} post with a single subject highlighting ${title.toLowerCase()}.`
  ];
  
  // Platform-specific text overlay suggestions
  const textOverlayTemplates: Record<ContentType, string[]> = {
    educational: [
      `${title.split(' ').slice(0, 3).join(' ').toUpperCase()}! 💡`,
      `You NEED To Know THIS! ✅`,
      `This Changes EVERYTHING! 🔍`,
      `STOP Doing This Wrong! ⚠️`
    ],
    entertaining: [
      `This Is SO Me! 😂`,
      `When ${title.split(' ').slice(0, 4).join(' ')}... 💀`,
      `${platform === 'tiktok' ? 'TikTok' : 'Instagram'} vs REALITY! 👀`,
      `Tell Me You ${title.split(' ').slice(0, 3).join(' ')}... 🤣`
    ],
    promotional: [
      `GAME CHANGER Alert! ✨`,
      `You NEED This NOW! 🔥`,
      `I'm OBSESSED With This! 😍`,
      `The SECRET Everyone Wants! 🤫`
    ],
    all: []
  };
  
  // Generate image prompt based on content type
  const generateImagePrompt = (type: ContentType, niche: string, title: string, platform: Platform) => {
    const basePrompts: Record<ContentType, string[]> = {
      educational: [
        `A single, clear visual showing ${title.toLowerCase()} with ${platformStyles[platform]}, centered composition with one main focal point to ensure information is instantly understandable.`,
        `A person demonstrating ${title.toLowerCase()} with dramatic lighting highlighting the key action or item, using ${platformStyles[platform]} and ensuring there's space at the top for text overlay.`,
        `A close-up of the most important element of ${title.toLowerCase()}, with ${platformStyles[platform]} and bold visual contrast to emphasize the educational point.`
      ],
      entertaining: [
        `A person with an exaggerated facial expression reacting to ${title.toLowerCase()}, using ${platformStyles[platform]} with bold colors and theatrical lighting for maximum entertainment value.`,
        `A single humorous visual representing ${title.toLowerCase()}, with ${platformStyles[platform]} and exaggerated elements to heighten comedic effect.`,
        `A dramatic, attention-grabbing image showing ${title.toLowerCase()} with a comical twist, using ${platformStyles[platform]} and leaving space at the top for bold text.`
      ],
      promotional: [
        `A single high-quality ${niche.toLowerCase()} product related to ${title.toLowerCase()}, dramatically lit with ${platformStyles[platform]} to create desire and showcase quality.`,
        `A person showcasing or using a premium ${niche.toLowerCase()} item related to ${title.toLowerCase()}, with ${platformStyles[platform]} and luxurious visual elements.`,
        `An aspirational lifestyle image featuring ${title.toLowerCase()}, using ${platformStyles[platform]} with emphasis on a single desirable item or outcome.`
      ],
      all: []
    };
    
    return basePrompts[type][Math.floor(Math.random() * basePrompts[type].length)];
  };
  
  // Generate captions with strong calls to action and more detailed information
  const generateCaption = (type: ContentType, niche: string, title: string) => {
    const captionTemplates: Record<ContentType, string[]> = {
      educational: [
        `This simple ${niche.toLowerCase()} tip changed everything for me! I've been using this approach for months and have seen incredible improvements in my results. The key is consistency and attention to detail. Did you already know this? Drop a 💯 if this helped! #${niche}Tips #${niche}Education`,
        
        `I wish someone had told me this ${title.toLowerCase()} hack sooner! After struggling for years, I discovered this technique through a professional workshop and it's been a complete game-changer for my ${niche.toLowerCase()} journey. Save this post—you'll need it later! #${niche}Advice #Learn${niche}`,
        
        `The ONE thing about ${niche.toLowerCase()} nobody talks about! I spent hours researching this topic and testing different methods before landing on this solution. This approach has helped me improve by at least 40% in just a few weeks. Got questions? Ask below and I'll help! #${niche}Secrets #${niche}Hacks`
      ],
      entertaining: [
        `Tell me you're obsessed with ${niche.toLowerCase()} without TELLING me! 😂 I've been doing this exact thing for years and my friends always call me out on it. It's become such a habit that I don't even realize I'm doing it anymore. Tag someone who relates to this! #${niche}Humor #${niche}Life`,
        
        `My reaction every single time I ${title.toLowerCase().includes('when') ? title.toLowerCase().replace('when', '') : title.toLowerCase()}! 💀 The first time this happened to me was three years ago, and somehow I still fall into the same trap every single time. Who else does this? Share your story below! #Relatable${niche} #${niche}Reality`,
        
        `No one prepared me for this part of ${niche.toLowerCase()}! 🤣 When I started my ${niche.toLowerCase()} journey, I thought I knew what to expect, but this situation catches me off guard EVERY time. What's your most embarrassing ${niche.toLowerCase()} moment? Let's share our stories! #${niche}Fails #${niche}Comedy`
      ],
      promotional: [
        `After trying EVERYTHING, this ${niche.toLowerCase()} game-changer has completely transformed my results! I tested over 20 different products and techniques before discovering this solution. Within just two weeks, I noticed significant improvements that none of the alternatives could deliver. Want the details? Drop a 🔥 below! #${niche}MustHave #${niche}Transformation`,
        
        `This is the ONE ${niche.toLowerCase()} essential I recommend to EVERYONE! I've been using it consistently for 6 months and have seen dramatic improvements in my results. The quality and effectiveness are unmatched by anything else I've tried in my 5+ years in this field. What's your can't-live-without item? Link in bio! #${niche}Essentials #${niche}Products`,
        
        `Three weeks using this ${niche.toLowerCase()} method and the results speak for themselves! I documented my entire journey and the before/after difference is incredible. The key was following the exact process I outline in my guide - any deviations significantly reduced effectiveness. Questions? I'm answering all in the comments! #${niche}Results #${niche}Solution`
      ],
      all: []
    };
    
    return captionTemplates[type][Math.floor(Math.random() * captionTemplates[type].length)];
  };
  
  // Select from templates based on type
  const typeTemplates = textOverlayTemplates[type] || textOverlayTemplates.educational;
  const selectedTextOverlay = typeTemplates[Math.floor(Math.random() * typeTemplates.length)];
  
  return {
    description: descriptionTemplates[Math.floor(Math.random() * descriptionTemplates.length)],
    textOverlay: selectedTextOverlay.replace(/\[NICHE\]/g, niche),
    imagePrompt: generateImagePrompt(type, niche, title, platform),
    caption: generateCaption(type, niche, title)
  };
};

// Fill the "all" categories with combined ideas
Object.keys(contentTemplates).forEach(niche => {
  contentTemplates[niche].all = [
    ...contentTemplates[niche].educational,
    ...contentTemplates[niche].entertaining,
    ...contentTemplates[niche].promotional
  ];
});

// Main content generation function
export const generateContentIdeas = (
  niche: string,
  contentType: ContentType,
  count: number
): ContentIdea[] => {
  // If we have specific templates for this niche, use those
  let templates = contentTemplates[niche];
  
  // If no specific templates for this niche, create generic ones
  if (!templates) {
    templates = {
      educational: structuredClone(genericTemplates.educational),
      entertaining: structuredClone(genericTemplates.entertaining),
      promotional: structuredClone(genericTemplates.promotional),
      all: []
    };
    
    // Fill the "all" category for the new niche
    templates.all = [
      ...templates.educational,
      ...templates.entertaining,
      ...templates.promotional
    ];
    
    // Replace [NICHE] in all generic templates
    Object.keys(templates).forEach(type => {
      if (type !== 'all') {
        templates[type as ContentType].forEach(template => {
          template.title = template.title.replace(/\[NICHE\]/g, niche);
          template.description = template.description.replace(/\[NICHE\]/g, niche);
          template.textOverlay = template.textOverlay.replace(/\[NICHE\]/g, niche);
          template.imagePrompt = template.imagePrompt.replace(/\[NICHE\]/g, niche);
          template.caption = template.caption.replace(/\[NICHE\]/g, niche);
        });
      }
    });
  }
  
  // Generate the ideas
  const ideas: ContentIdea[] = [];
  
  for (let i = 0; i < count; i++) {
    let template;
    let type: ContentType = contentType;
    
    // Select template based on content type
    if (contentType === 'all') {
      // If 'all' is selected, randomly choose a content type for each idea
      const types: ContentType[] = ['educational', 'entertaining', 'promotional'];
      type = types[Math.floor(Math.random() * types.length)];
      
      // Get a template from the specific type
      const typeTemplates = templates[type];
      if (typeTemplates.length > 0) {
        template = typeTemplates[Math.floor(Math.random() * typeTemplates.length)];
      } else {
        // Fall back to generic templates
        template = structuredClone(genericTemplates[type][Math.floor(Math.random() * genericTemplates[type].length)]);
        template.title = template.title.replace(/\[NICHE\]/g, niche);
        template.description = template.description.replace(/\[NICHE\]/g, niche);
        template.textOverlay = template.textOverlay.replace(/\[NICHE\]/g, niche);
        template.imagePrompt = template.imagePrompt.replace(/\[NICHE\]/g, niche);
        template.caption = template.caption.replace(/\[NICHE\]/g, niche);
      }
    } else {
      // Get a template from the selected type
      if (templates[contentType].length > 0) {
        template = templates[contentType][Math.floor(Math.random() * templates[contentType].length)];
      } else {
        // Fall back to generic templates
        template = structuredClone(genericTemplates[contentType][Math.floor(Math.random() * genericTemplates[contentType].length)]);
        template.title = template.title.replace(/\[NICHE\]/g, niche);
        template.description = template.description.replace(/\[NICHE\]/g, niche);
        template.textOverlay = template.textOverlay.replace(/\[NICHE\]/g, niche);
        template.imagePrompt = template.imagePrompt.replace(/\[NICHE\]/g, niche);
        template.caption = template.caption.replace(/\[NICHE\]/g, niche);
      }
    }
    
    // Generate platform recommendation
    const platforms: Platform[] = ['reels', 'tiktok', 'both'];
    const platform = platforms[Math.floor(Math.random() * platforms.length)];
    
    // If we don't have a complete template, generate missing parts
    if (!template.textOverlay || !template.imagePrompt || !template.caption) {
      const enhancedParts = generateEnhancedDescription(template.title, niche, type, platform);
      template.textOverlay = template.textOverlay || enhancedParts.textOverlay;
      template.imagePrompt = template.imagePrompt || enhancedParts.imagePrompt;
      template.caption = template.caption || enhancedParts.caption;
    }
    
    // Generate hashtags if they're not already in the caption
    let caption = template.caption;
    if (!caption.includes('#')) {
      const hashtags = [`#${niche}`, `#${type}Content`, platform === 'tiktok' ? '#TikTokTips' : '#ReelsIdeas'];
      caption += ` ${hashtags.join(' ')}`;
    }
    
    const idea: ContentIdea = {
      id: generateId(),
      title: template.title,
      description: template.description,
      niche,
      type,
      platform,
      textOverlay: template.textOverlay,
      imagePrompt: template.imagePrompt,
      caption: caption,
      visualStyle: "high-contrast, single focal point, vibrant colors"
    };
    
    ideas.push(idea);
  }
  
  return ideas;
}
