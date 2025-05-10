
import { ContentIdea, ContentType, Platform } from "@/types/content";

// Helper function to generate a random ID
const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Sample data for different content types with visual concepts
const contentTemplates: Record<string, Record<ContentType, any[]>> = {
  Fitness: {
    educational: [
      {
        title: "5 Common Workout Mistakes You're Making",
        description: "Create a fitness video highlighting the top 5 common workout mistakes people make with proper form demonstrations and corrections.",
        textOverlay: "STOP These 5 Workout Mistakes! 💪",
        imagePrompt: "A split-screen showing incorrect vs. correct squat form with highlighted areas of concern, using vibrant colors and clear visual indicators.",
        caption: "These mistakes could be holding back your fitness progress! ⚠️ Which one surprised you most? Comment below! #FitnessCorrections #WorkoutTips"
      },
      {
        title: "How to Perfect Your Squat Form",
        description: "Film a step-by-step breakdown of proper squat technique, highlighting common errors and how to fix them for maximum results.",
        textOverlay: "Perfect Your Squat TODAY! 🏋️",
        imagePrompt: "A side view of a person performing a perfect squat with form guidelines overlaid, using arrows to indicate proper positioning and alignment.",
        caption: "Master this fundamental movement for better results and fewer injuries! 💯 What exercise form would you like help with next? #SquatForm #FitnessEducation"
      }
    ],
    entertaining: [
      {
        title: "Try This 30-Second Fitness Challenge",
        description: "Create an engaging fitness challenge that viewers can try in just 30 seconds, perfect for a quick viral video.",
        textOverlay: "Can YOU Beat This Challenge? 🔥",
        imagePrompt: "A dynamic action shot of someone mid-challenge exercise with a timer overlay, using high-energy colors and motion blur to convey intensity.",
        caption: "Tag someone who needs to try this! 😱 Think you can beat my score? Show me in the comments! #FitnessChallenge #30SecondWorkout"
      },
      {
        title: "When Your Gym Buddy Skips Leg Day",
        description: "Create a humorous skit about the friend who always finds excuses to skip leg day at the gym, using trending sounds.",
        textOverlay: "Leg Day Excuses BE LIKE... 😂",
        imagePrompt: "A comical split-screen image showing a person with an exaggerated upper body and tiny legs versus a balanced physique, using meme-style edits.",
        caption: "We all know someone... 👀 Tag your gym buddy who needs this reminder! What's your favorite excuse? #LegDayHumor #GymLife"
      }
    ],
    promotional: [
      {
        title: "My 30-Day Fitness Program Results",
        description: "Share a compelling before and after transformation showcasing results from your fitness program with key highlights.",
        textOverlay: "30 Days Changed EVERYTHING ✨",
        imagePrompt: "A before/after side-by-side transformation photo with eye-catching progress indicators and visual improvement markers, professional and inspiring.",
        caption: "These results speak for themselves! 💥 Ready to transform your body and mindset? Link in bio for my complete program! #FitnessTransformation #30DayChallenge"
      },
      {
        title: "Why This Protein Powder Changed My Workouts",
        description: "Create a review highlighting the difference this specific protein supplement made to your fitness results with visual evidence.",
        textOverlay: "The GAME CHANGER Supplement! 🔄",
        imagePrompt: "A product showcase image with the protein powder prominently displayed alongside visual performance metrics/charts, professionally lit with brand colors.",
        caption: "Finally found the supplement that actually delivers results! 💪 Ask me any questions about it below! #SupplementReview #FitnessResults"
      }
    ],
    all: [] // This will be populated with all types
  },
  Beauty: {
    educational: [
      {
        title: "How to Layer Skincare Products Correctly",
        description: "Create a step-by-step guide showing the correct order to apply skincare products for maximum effectiveness.",
        textOverlay: "STOP Applying Products Wrong! ✋",
        imagePrompt: "A visually organized flat lay of skincare products in correct application order with numbered steps, clean aesthetic with soft lighting.",
        caption: "Your skincare might be canceling itself out! 😱 Are you applying in the right order? Let me know your routine below! #SkincareOrder #BeautyEducation"
      },
      {
        title: "Understanding Skin Types and Concerns",
        description: "Create an educational guide helping viewers identify their skin type with visual examples and customized recommendations.",
        textOverlay: "What's YOUR Skin Type? 🔍",
        imagePrompt: "A grid showing four different skin types with close-up texture examples and characteristic indicators, clean clinical style with clear labeling.",
        caption: "Knowing your skin type is step one to an effective routine! 💫 Take the quiz in my bio to find yours! #SkinTypeTips #SkincareBasics"
      }
    ],
    entertaining: [
      {
        title: "Trying Viral Beauty Hacks - Do They Work?",
        description: "Test popular beauty hacks from social media with honest reactions and results, using a trending sound.",
        textOverlay: "This Hack is a LIE! 🤯",
        imagePrompt: "A shocked facial expression with split-screen before/after of a beauty hack attempt, vibrant colors and exaggerated reaction styling.",
        caption: "I was SHOOK when I tried hack #3! 😳 Have you tried any of these? Share your fails below! #BeautyHacksFail #TrendAlert"
      },
      {
        title: "My Partner Does My Makeup",
        description: "Film a humorous challenge where your partner attempts to do your makeup, capturing genuine reactions.",
        textOverlay: "He Did My Makeup... OMG! 🙈",
        imagePrompt: "A side-by-side of a makeup lover's regular look versus the partner's attempt, with exaggerated reaction expressions, fun and candid styling.",
        caption: "The confidence vs the result... 🤣 Should we let him try again? Comment YES or NO! #PartnerMakeupChallenge #BeautyFail"
      }
    ],
    promotional: [
      {
        title: "My Holy Grail Beauty Products",
        description: "Share your all-time favorite beauty products that deliver consistent results, with before and after demonstrations.",
        textOverlay: "Products I ACTUALLY Repurchase 💄",
        imagePrompt: "An aesthetically arranged collection of well-used beauty products with elegant lighting and professional product photography styling.",
        caption: "These are the only products that have earned permanent spots in my routine! 💯 What's your ride-or-die beauty product? #HolyGrailProducts #BeautyMustHaves"
      },
      {
        title: "Why This Serum Changed My Skin",
        description: "Create a compelling review of a transformative skincare product with visual evidence of your results over time.",
        textOverlay: "The Serum That SAVED My Skin! ✨",
        imagePrompt: "A before/after skin transformation with product elegantly displayed in foreground, professional beauty advertisement style with soft glowing effects.",
        caption: "After trying EVERYTHING, this finally gave me results in just 3 weeks! 🌟 Questions about my routine? Ask below! #SkinTransformation #BeautyReview"
      }
    ],
    all: []
  },
  Food: {
    educational: [
      {
        title: "5 Cooking Mistakes Everyone Makes",
        description: "Create a helpful guide exposing common cooking errors with demonstrations of the correct techniques.",
        textOverlay: "You're Cooking It WRONG! 🍳",
        imagePrompt: "A side-by-side comparison of incorrect versus correct cooking technique with steam and action, vibrant colors and clear visual indicators.",
        caption: "Game-changing cooking tips your grandma should have taught you! 👵 Which one surprised you most? #CookingTips #KitchenHacks"
      },
      {
        title: "How to Properly Cut an Onion (Without Tears)",
        description: "Film a quick tutorial showing the professional chef method for dicing an onion efficiently and tearlessly.",
        textOverlay: "NEVER Cry Cutting Onions Again! 🧅",
        imagePrompt: "An overhead action shot of hands properly cutting an onion with knife skills demonstrated, professional food photography style with directional light.",
        caption: "This chef-approved method changed my meal prep forever! 🔪 Show me your onion cutting attempts! #ChefTips #CookingSkills"
      }
    ],
    entertaining: [
      {
        title: "Testing Weird Food Combinations That Actually Work",
        description: "Try unexpected food pairings that surprisingly taste amazing, with genuine reaction shots.",
        textOverlay: "This Combo CHANGED My Life! 🤤",
        imagePrompt: "A surprised facial expression with an unusual food pairing arranged in an appetizing way, bright colors and stylized food photography.",
        caption: "I was SKEPTICAL until I tried #3! 😱 What's the strangest food combo you secretly love? #WeirdFoodCombos #TasteTesting"
      },
      {
        title: "When the Recipe Says 'Easy' But It's Actually Not",
        description: "Create a humorous skit about the reality of attempting 'simple' recipes from the internet versus how they actually turn out.",
        textOverlay: "Pinterest vs. Reality: FOOD Edition 😂",
        imagePrompt: "A dramatic split-screen of a perfect Pinterest recipe result versus a hilarious cooking fail attempt, exaggerated styling with meme elements.",
        caption: "The audacity to call this 'beginner-friendly'! 💀 Tag someone whose cooking looks like the right side! #RecipeFails #CookingReality"
      }
    ],
    promotional: [
      {
        title: "5-Minute Breakfast Recipes That Keep Me Full",
        description: "Showcase quick, nutritious breakfast recipes that actually satisfy hunger, perfect for busy mornings.",
        textOverlay: "GAME-CHANGING 5-Min Breakfast! ⏰",
        imagePrompt: "A visually appealing healthy breakfast with a clock indicating 5 minutes, bright morning lighting and styled food photography.",
        caption: "Never skip breakfast again with these quick recipes! ☀️ Which one are you trying tomorrow? Full recipes in my bio! #QuickBreakfast #HealthyEating"
      },
      {
        title: "My Secret Sauce Recipe Everyone Asks For",
        description: "Share your signature sauce recipe that elevates any dish, with a demonstration of how to make it.",
        textOverlay: "The Sauce They BEG For! 🌶️",
        imagePrompt: "A close-up of sauce being drizzled over food with steam and vibrant colors, professional food styling with dramatic lighting.",
        caption: "My friends literally bring empty jars to dinner for this sauce! 🔥 Tag someone who needs this recipe! #SecretSauce #RecipeReveal"
      }
    ],
    all: []
  }
};

// Extend the base templates with generic ideas for all niches
const genericTemplates: Record<ContentType, any[]> = {
  educational: [
    {
      title: "5 Things You Need to Know About [NICHE]",
      description: "Create an informative video breaking down the 5 most essential things beginners should know about [NICHE], with visual examples.",
      textOverlay: "5 [NICHE] FACTS You Need to Know! 💡",
      imagePrompt: "An organized visual with 5 numbered key points about [NICHE], using icons and visual aids to represent each fact, educational style with clear sections.",
      caption: "These fundamentals changed my [NICHE] journey completely! 🌟 Which fact surprised you most? #[NICHE]Tips #BeginnerAdvice"
    },
    {
      title: "Common Myths About [NICHE] Debunked",
      description: "Expose and correct widespread misconceptions about [NICHE] with evidence-based explanations and visual demonstrations.",
      textOverlay: "[NICHE] Myths BUSTED! ❌",
      imagePrompt: "A dramatic split screen showing myths versus reality with clear visual contrasts, using myth-busting visual elements like X marks and check marks.",
      caption: "Stop believing these [NICHE] myths TODAY! 🔍 What other myths have you heard? Let me know below! #MythBusting #[NICHE]Facts"
    }
  ],
  entertaining: [
    {
      title: "[NICHE] Expectation vs. Reality",
      description: "Create a humorous comparison between what people think [NICHE] looks like versus the actual experience, using a trending sound.",
      textOverlay: "[NICHE] Expectations vs. REALITY! 😂",
      imagePrompt: "A split-screen expectation versus reality comparison with exaggerated contrasts, using humor-focused styling and bold visual differences.",
      caption: "We've all been there! 💀 Tag someone who needs this reality check! #ExpectationVsReality #[NICHE]Life"
    },
    {
      title: "Things Only [NICHE] People Understand",
      description: "Create a relatable list of experiences that only people involved in [NICHE] will instantly recognize and relate to.",
      textOverlay: "[NICHE] Problems: You Know If You Know! 👀",
      imagePrompt: "A relatable reaction shot with visual representations of [NICHE]-specific situations, using meme styling and exaggerated expressions.",
      caption: "Number 3 happens to me DAILY! 😅 What [NICHE] problems would you add to the list? #[NICHE]Problems #RelatableContent"
    }
  ],
  promotional: [
    {
      title: "Why I Use This [NICHE] Product",
      description: "Create a compelling review of a game-changing product for [NICHE], highlighting its unique benefits with before and after results.",
      textOverlay: "This Changed My [NICHE] FOREVER! ✨",
      imagePrompt: "A before/after transformation showcasing product results with the product prominently displayed, professional advertisement styling with brand colors.",
      caption: "I honestly can't believe the difference this has made! 🤯 Questions about how I use it? Ask below! #[NICHE]Must-Have #ProductReview"
    },
    {
      title: "My [NICHE] Essentials",
      description: "Showcase the top products and tools you can't live without for [NICHE], with demonstrations of how you use each one.",
      textOverlay: "My TOP [NICHE] Must-Haves! 💯",
      imagePrompt: "An aesthetically arranged flat lay of essential [NICHE] products with professional styling and organized visual hierarchy.",
      caption: "These are the only products that earned a permanent spot in my [NICHE] routine! 🏆 What's your #1 essential? #[NICHE]Essentials #FavoriteProducts"
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
    `Create a ${niche.toLowerCase()} video about ${title.toLowerCase()}, focusing on clear visual demonstrations and eye-catching visuals that will stop viewers from scrolling.`,
    `Share your take on ${title.toLowerCase()} with a trending sound and strong visual hooks. Use text overlays to emphasize key points about this ${niche.toLowerCase()} topic.`,
    `Film a ${niche.toLowerCase()} tutorial showing step-by-step visuals of ${title.toLowerCase().includes('how to') ? title.toLowerCase().replace('how to ', '') : title.toLowerCase()}.`,
    `Create a visually striking ${niche.toLowerCase()} video starting with an attention-grabbing hook about ${title.toLowerCase()}.`
  ];
  
  // Platform-specific text overlay suggestions
  const textOverlayTemplates: Record<ContentType, string[]> = {
    educational: [
      `${title.includes('5') ? title.split(' ').slice(0, 3).join(' ') : '5 Things About'} YOU NEED TO KNOW! 💡`,
      `This ${title.split(' ').slice(-1)[0].toUpperCase()} Technique CHANGED EVERYTHING! ✅`,
      `${title.includes('How') ? title.replace('How to', 'How To ACTUALLY') : 'How To Master'} ${title.split(' ').slice(-1)[0]}! 👨‍🏫`,
      `${title.includes('Common') ? title : 'Common ' + niche} MISTAKES To Avoid! ⚠️`
    ],
    entertaining: [
      `${title} Be Like... 😂`,
      `When You ${title.split(' ').slice(1).join(' ')}! 💀`,
      `${title.includes('vs') ? title.toUpperCase() : title + ' VS REALITY'}! 👀`,
      `POV: ${title.charAt(0).toUpperCase() + title.slice(1)}! 🤣`
    ],
    promotional: [
      `This ${niche} ${title.includes('Product') ? 'Product' : 'Method'} CHANGED MY LIFE! ✨`,
      `The ${title.split(' ').slice(-2).join(' ')} You NEED To Try! 🔥`,
      `I Tried ${title} For 30 Days... 😱`,
      `The SECRET To ${title.includes('Why') ? title.replace('Why', '') : title}! 🤫`
    ],
    all: []
  };
  
  // Generate image prompt based on content type
  const generateImagePrompt = (type: ContentType, niche: string, title: string, platform: Platform) => {
    const basePrompts: Record<ContentType, string[]> = {
      educational: [
        `A clear, well-organized visual guide about ${title.toLowerCase()} with numbered steps or key points, using ${platformStyles[platform]} to ensure information is visually appealing.`,
        `A split-screen comparison related to ${title.toLowerCase()} showing correct vs. incorrect methods, with clear visual indicators and ${platformStyles[platform]}.`,
        `A tutorial-style image showing a ${niche.toLowerCase()} expert demonstrating ${title.toLowerCase()}, with highlighted key elements and ${platformStyles[platform]}.`
      ],
      entertaining: [
        `A humorous, exaggerated scene depicting ${title.toLowerCase()} with expressive facial reactions, using ${platformStyles[platform]} to maximize entertainment value.`,
        `A side-by-side expectation vs. reality comparison related to ${title.toLowerCase()}, using contrasting visual elements and ${platformStyles[platform]}.`,
        `A dramatic, attention-grabbing image representing ${title.toLowerCase()} with trending visual effects and ${platformStyles[platform]}.`
      ],
      promotional: [
        `A professional before/after transformation showcasing results related to ${title.toLowerCase()}, with product placement and ${platformStyles[platform]}.`,
        `A lifestyle-focused image featuring ${title.toLowerCase()} in an aspirational setting, using ${platformStyles[platform]} to create desire.`,
        `An aesthetically pleasing arrangement of products related to ${title.toLowerCase()}, styled with ${platformStyles[platform]} to highlight quality and benefits.`
      ],
      all: []
    };
    
    return basePrompts[type][Math.floor(Math.random() * basePrompts[type].length)];
  };
  
  // Generate captions with strong calls to action
  const generateCaption = (type: ContentType, niche: string, title: string) => {
    const captionTemplates: Record<ContentType, string[]> = {
      educational: [
        `This ${niche.toLowerCase()} hack changed my entire approach! 🤯 Which tip was most helpful? Comment below! #${niche}Tips #${niche}Education`,
        `I wish I knew this ${title.toLowerCase()} information sooner! ✨ Save this for later, you'll need it! #${niche}Advice #Learn${niche}`,
        `Game-changing ${niche.toLowerCase()} information that nobody talks about! 💡 Questions? Drop them below! #${niche}Secrets #${niche}Hacks`
      ],
      entertaining: [
        `We've all been there with ${title.toLowerCase()}! 😂 Tag someone who needs to see this! #${niche}Humor #${niche}Realities`,
        `The way I SCREAMED making this ${niche.toLowerCase()} video! 💀 What should I try next? #${niche}Fails #${niche}Comedy`,
        `This is too accurate! 🤣 Did this ${title.toLowerCase()} moment happen to you too? Share your story! #Relatable${niche} #${niche}Life`
      ],
      promotional: [
        `Finally found THE solution for ${title.toLowerCase()}! 🙌 Link in bio to transform your ${niche.toLowerCase()} experience! #${niche}MustHave #${niche}Transformation`,
        `This ${niche.toLowerCase()} product exceeded all my expectations! ✨ Questions about my results? Ask away! #${niche}Review #${niche}Products`,
        `Three weeks of using this ${niche.toLowerCase()} method and I'm never going back! 🔥 Try it and thank me later! #${niche}Results #${niche}Solution`
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
    
    const idea: ContentIdea = {
      id: generateId(),
      title: template.title,
      description: template.description,
      niche,
      type,
      platform,
      textOverlay: template.textOverlay,
      imagePrompt: template.imagePrompt,
      caption: template.caption
    };
    
    ideas.push(idea);
  }
  
  return ideas;
};
