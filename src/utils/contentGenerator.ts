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
        caption: "Most people tuck their pelvis under when squatting which causes MAJOR knee strain! The correct form is to keep your back neutral and push your knees outward in line with your toes. This small form correction will transform your results and prevent injuries! Drop a 🔥 if you learned something new today! #FormFix #FitnessForm"
      },
      {
        title: "The Only Stretch You Need Daily",
        description: "Show a single essential stretch that targets multiple muscle groups for better mobility.",
        textOverlay: "Do This EVERY Day! 🧘‍♂️",
        imagePrompt: "A fitness model performing a perfect hip flexor stretch on a yoga mat, with clean lighting and a gradient background emphasizing proper form and position.",
        caption: "The 90/90 hip stretch targets BOTH internal and external hip rotation simultaneously — the #1 area most people neglect! Hold for 2 minutes on each side daily and you'll notice immediate improvements in squats, lunges, and even lower back pain. I do this ONE stretch daily for better mobility and less pain. Has your flexibility improved with daily stretching? #MobilityMatters #DailyStretch"
      }
    ],
    entertaining: [
      {
        title: "The Gym Face Everyone Makes",
        description: "Create a humorous post showing the universal expression people make during an intense exercise.",
        textOverlay: "We ALL Make This Face! 😤",
        imagePrompt: "A person mid-exercise with an exaggerated effort facial expression, dramatically lit from above, center framed against a bold colored background for comic effect.",
        caption: "Science confirms that making the 'gym face' (that grimace we all do) actually increases strength output by up to 12%! It's called the Valsalva maneuver and it helps stabilize your core during heavy lifts. Tag someone who makes THIS exact face during leg day! 😂 What's your signature gym expression? #GymFaces #WorkoutHumor"
      },
      {
        title: "When Someone Takes Your Equipment",
        description: "A relatable gym moment showing a person's reaction when their equipment gets taken.",
        textOverlay: "Gym Etiquette 101 🏋️",
        imagePrompt: "A person with an exaggerated confused/annoyed expression looking at empty space where gym equipment should be, with vibrant colors and dramatic shadows for emphasis.",
        caption: "Gym psychology fact: Equipment territorialism is REAL! Studies show 87% of gym-goers feel a sense of ownership over 'their' equipment, even in public spaces. This happened THREE times today! The proper etiquette is to ask 'how many sets do you have left?' before taking anything. Do you ask before taking someone's equipment or just grab and go? 👀 #GymEtiquette #GymLife"
      }
    ],
    promotional: [
      {
        title: "The One Supplement That Works",
        description: "Showcase a single effective supplement that delivers noticeable results.",
        textOverlay: "GAME CHANGER Supplement! ⚡",
        imagePrompt: "A single supplement bottle/container dramatically lit in the center of the frame against a dark background with a subtle glow effect emphasizing its importance.",
        caption: "Creatine monohydrate is the MOST researched supplement with over 500+ studies confirming its effectiveness. It increases ATP production (your energy currency) by 10-15%, leading to more reps, more weight, and faster muscle growth. The key is consistency—5g daily, no loading phase needed. After testing dozens of supplements, this is the ONLY one I've found that delivers real results. What supplements have actually worked for you? #SupplementTruth #FitnessResults"
      },
      {
        title: "My Favorite Workout Gear",
        description: "Highlight one piece of fitness equipment or apparel that enhances your workout experience.",
        textOverlay: "Never Workout Without THIS! 🔥",
        imagePrompt: "A single piece of premium workout equipment or apparel (like specialized lifting shoes) center-framed with dramatic lighting highlighting its features and quality.",
        caption: "Flat-soled shoes increase your power output in deadlifts by up to 25%! When your feet can press firmly against the ground without cushioning, you create a more stable base for generating force through your posterior chain. After trying 7 different shoe types, these flat trainers reduced my deadlift sticking points instantly. This completely transformed my training sessions! What's your must-have workout gear? Link in bio for details! #FitnessEssentials #WorkoutGear"
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
        caption: "Petroleum-free balm is a MAJOR multitasker! Here are 3 ways to use it you never thought of: 1) Mix with powder eyeshadow to create a cream shadow that won't crease 2) Apply to cheekbones OVER makeup for a natural highlight that lasts all day 3) Use on split ends to smooth frizz without weighing hair down. This product works for lips, cheeks AND eyes! What's your favorite multi-use beauty hack? #BeautyHacks #MultitaskingMakeup"
      },
      {
        title: "The Correct Order of Skincare",
        description: "Focus on the most important skincare product in your routine and why order matters.",
        textOverlay: "ALWAYS Apply This FIRST! 🧴",
        imagePrompt: "A hand holding a single skincare product (serum bottle or similar) with perfect lighting highlighting the texture of the product against a clean, minimal background.",
        caption: "The molecular weight of skincare ingredients MATTERS! Water-based serums (like hyaluronic acid) should ALWAYS go first because their smaller molecules penetrate deeper, while oil-based products create a seal that prevents anything else from absorbing. This is why applying your expensive water-based active ingredients AFTER oils wastes your money—they just sit on top! What's the first product in YOUR skincare routine? #SkincareOrder #BeautyScience"
      }
    ],
    entertaining: [
      {
        title: "When You Try a New Product",
        description: "A humorous take on trying a hyped beauty product for the first time.",
        textOverlay: "Expectations vs. REALITY! 😳",
        imagePrompt: "A person with an exaggerated shocked/surprised expression examining their face in a mirror after applying a beauty product, with bright, theatrical lighting.",
        caption: "The placebo effect is STRONG in beauty products! Studies show up to 30% of a product's perceived effectiveness comes from packaging, price, and marketing. That's why that $75 serum in luxe packaging feels like it's working better than the $15 drugstore version with identical ingredients. The way this product promised me MODEL skin and delivered... THIS! 😂 What overhyped product disappointed you most? #BeautyFails #ProductReality"
      },
      {
        title: "My Makeup Without Filters",
        description: "An authentic look at makeup application in real lighting conditions.",
        textOverlay: "REAL Makeup, NO Filter! 👀",
        imagePrompt: "A close-up of perfect, detailed makeup (like an eye with elaborate eyeshadow) in natural lighting conditions showing genuine texture and dimension.",
        caption: "Real skin has TEXTURE! The average pore size is 50-500 micrometers and absolutely everybody has them—even celebrities and models. Social media filters remove about 80% of natural skin texture, creating impossible standards. This is my actual makeup in direct sunlight showing real skin texture, pores and fine lines. Do you prefer filtered or unfiltered beauty content? #NoFilter #RealMakeup"
      }
    ],
    promotional: [
      {
        title: "The Viral Product Worth the Hype",
        description: "Focus on a single trending beauty product that actually delivers on its promises.",
        textOverlay: "Believe The HYPE! 🙌",
        imagePrompt: "A single beauty product dramatically lit and center-framed against a background that complements its packaging, with a subtle glow effect emphasizing its importance.",
        caption: "Niacinamide is clinically proven to reduce oil production by up to 54% after just 2 weeks of consistent use. It also strengthens your skin barrier, reduces redness, and minimizes the appearance of pores WITHOUT the irritation that comes with other active ingredients. After testing for 3 weeks, this viral product ACTUALLY lives up to the TikTok hype because it contains the perfect 5% concentration! Have you tried it yet? Link in bio! #WorthTheHype #BeautyMustHave"
      },
      {
        title: "The One Tool That Changed My Routine",
        description: "Highlight a single beauty tool that dramatically improved your beauty routine.",
        textOverlay: "BEST Beauty Investment! 💄",
        imagePrompt: "A high-end beauty tool (like a facial roller or premium brush) isolated against a luxurious background with dramatic lighting highlighting its quality and features.",
        caption: "Gua sha tools increase facial blood circulation by up to 400% when used correctly, which explains why consistent users see such dramatic results in face sculpting! The key technique most miss: always use with a facial oil (not on dry skin) and keep the tool almost flat against skin (not at a 90° angle). I was skeptical but this tool cut my routine time in HALF and replaced three separate tools! What beauty tool can't you live without? #BeautyEssentials #TimeHack"
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
        caption: "Finishing salt contains 40% less sodium than regular salt but provides 3X the flavor impact! Professional chefs use Maldon or fleur de sel as a final touch because the large crystal structure creates micro-bursts of flavor and adds crucial textural contrast. Swap your table salt for these flakes as a final touch and your home cooking will instantly taste restaurant-caliber. This ONE ingredient is the difference between home cooking and restaurant quality! What's your secret ingredient? #ChefSecrets #FlavorHack"
      },
      {
        title: "How to Cut Vegetables Like a Pro",
        description: "Show a professional knife technique for cutting vegetables efficiently.",
        textOverlay: "Cut Like a PRO Chef! 🔪",
        imagePrompt: "A close-up of hands using proper knife technique to slice a vegetable, with dramatic lighting highlighting the precision of the cut and quality of the knife.",
        caption: "The 'claw technique' reduces kitchen injuries by 80%! Professional chefs curl their fingertips under and use their knuckles as a guide against the flat of the blade. This creates a stable cutting surface while keeping fingertips safely away from the blade's edge. Master this one technique and you'll instantly cut prep time in half while keeping all your fingers intact! This knife technique will speed up your prep time and make your dishes look restaurant-quality! What cooking skill do you want to learn next? #ChefSkills #KnifeTechnique"
      }
    ],
    entertaining: [
      {
        title: "When the Recipe Says 'Quick & Easy'",
        description: "A humorous take on supposedly simple recipes that turn complicated.",
        textOverlay: "'10-Minute' Recipe... RIGHT! 😅",
        imagePrompt: "A messy kitchen countertop with a single prominently featured failed dish in the center, with exaggerated lighting highlighting the chaos and contrast to perfection.",
        caption: "Recipe psychology 101: Studies show that recipes labeled 'quick & easy' get 78% more clicks, which is why food bloggers use these terms even when the recipe requires 17 ingredients, special equipment, and techniques you learned in culinary school! The actual average time for a 'quick' dinner recipe? 52 minutes from start to finish. Hour 3 of this '10-minute recipe' and I'm questioning all my life choices! 💀 Tag someone who relates to this cooking struggle! #RecipeReality #CookingFail"
      },
      {
        title: "My Food vs. Restaurant Photos",
        description: "A humorous comparison of homemade food presentation versus professional photos.",
        textOverlay: "Instagram vs. My Plate! 🍽️",
        imagePrompt: "A somewhat messy but delicious-looking homemade dish presented on a regular dinner plate with natural lighting showing authentic food texture and presentation.",
        caption: "Food styling secrets: Professional food photographers use motor oil instead of syrup (it doesn't absorb), glycerin spray to make food look juicy, and cotton balls soaked in water to create artificial steam! Meanwhile, my home cooking gets exactly 30 seconds for photos before it's devoured. My attempt at that fancy restaurant dish looked NOTHING like the picture! 😂 Show me your cooking 'nailed it' moments! #FoodReality #CookingAttempts"
      }
    ],
    promotional: [
      {
        title: "The One Kitchen Tool You Need",
        description: "Feature a single essential kitchen tool that makes cooking easier and more efficient.",
        textOverlay: "BEST Kitchen Investment! 👨‍🍳",
        imagePrompt: "A single high-quality kitchen tool (like a chef's knife or multi-cooker) dramatically lit and center-framed against a clean kitchen background highlighting its features.",
        caption: "A good chef's knife does the work of 5+ specialized tools! The 8-inch chef's knife with a full tang (metal extends through the handle) gives you perfect balance and control. Japanese knives feature a 15-degree edge angle compared to German knives' 20 degrees, making them 25% sharper but more delicate. After comparing 12 top-rated knives, this one offers the perfect balance of price ($89) and performance. This tool has saved me HOURS of cooking time every week! What's your most-used kitchen tool? Link in bio for my recommendation! #KitchenEssentials #CookingTools"
      },
      {
        title: "The Easiest Meal Prep Hack",
        description: "Showcase a simple but effective meal preparation technique that saves time.",
        textOverlay: "Meal Prep GAME CHANGER! ⏱️",
        imagePrompt: "A single meal prep container with perfectly organized, colorful food components showing an efficient and appetizing preparation technique.",
        caption: "The 'component system' method reduces meal prep time by 40%! Instead of making 5 complete meals, prep individual components (proteins, grains, veggies, sauces) and mix-and-match throughout the week for endless variety without the boredom. The key: store wet and dry components separately and use glass containers to maintain freshness up to 5 days longer than plastic. This simple hack has saved me 3 hours every Sunday! What's your favorite meal prep shortcut? Full guide in my bio! #MealPrepSunday #TimeHack"
      }
    ],
    all: []
  },
  Pets: {
    educational: [
      {
        title: "The Training Mistake Every Pet Owner Makes",
        description: "Show the correct way to train pets versus a common mistake most owners make.",
        textOverlay: "Stop Making This Mistake! 🐾",
        imagePrompt: "A person training a dog with proper positive reinforcement techniques, with dramatic lighting highlighting the correct hand signals and treats positioning.",
        caption: "Timing is EVERYTHING in pet training! Studies show that rewards must be given within 2 seconds of the desired behavior or your pet won't make the connection. Most owners wait 5-7 seconds, which is why training often fails. The dopamine response that reinforces behavior peaks at 0.8 seconds and drops by 50% after just 3 seconds. I struggled for months until I started using a clicker to mark the exact moment of good behavior. This simple timing adjustment improved my dog's response rate by 78%! What training technique transformed your pet's behavior? #PetTraining #PositiveReinforcement"
      },
      {
        title: "The One Daily Habit For Healthier Pets",
        description: "Reveal a simple daily practice that significantly improves pet health and wellbeing.",
        textOverlay: "Do This DAILY! 🐶",
        imagePrompt: "A close-up of hands checking a dog's gums and teeth with proper technique, with warm lighting highlighting the correct finger position and gentle approach.",
        caption: "Daily 30-second mouth checks can extend your pet's life by up to 3 years! Veterinary studies confirm that 80% of dogs have dental disease by age 3, but most owners don't notice until it's advanced. The simple technique: lift the lip, check the gums (should be pink, not red or pale), and note any brown buildup on teeth. This quick daily habit helps you catch dental issues, oral tumors, and even systemic health problems through early warning signs like pale gums. After implementing this with my rescue dog, we caught an infection that could have become life-threatening. What daily habit has most improved your pet's health? #PetDental #PreventativeCare"
      },
      {
        title: "The Enrichment Secret Most Owners Miss",
        description: "Show an effective enrichment technique that keeps pets mentally stimulated and reduces behavior problems.",
        textOverlay: "Mental Stimulation HACK! 🧠",
        imagePrompt: "A dog or cat engaged with a puzzle feeder toy that challenges their problem-solving abilities, with dramatic lighting highlighting the pet's engaged expression.",
        caption: "Food puzzles reduce destructive behavior by up to 73%! Behavioral studies show that pets who work for their food experience a 40% greater dopamine release compared to eating from a bowl. This mimics their evolutionary foraging instincts and satisfies their psychological need for problem-solving. The science is clear: just 10 minutes of food puzzle time provides the mental equivalent of a 30-minute walk. I started using puzzle feeders for all my dog's meals last year, and his anxiety-based chewing completely disappeared within 3 weeks! What enrichment activities have transformed your pet's behavior? #EnrichmentMatters #MentalStimulation"
      }
    ],
    entertaining: [
      {
        title: "When Your Pet Judges Your Life Choices",
        description: "A humorous take on pets appearing to judge their owners' decisions.",
        textOverlay: "The Judgment is REAL! 😂",
        imagePrompt: "A pet (cat or dog) with an exaggerated judgmental expression looking directly at the camera with raised eyebrows or tilted head, with dramatic side lighting for comedic effect.",
        caption: "Pet psychology fact: That judgmental look is REAL! Studies from the University of Vienna confirm that dogs process facial expressions in the same brain region (right posterior temporal sulcus) as humans do. They can differentiate between 7 distinct human emotional states—and yes, disappointment is one of them! My dog gives me this EXACT look every time I eat take-out instead of cooking, as if he's calculating exactly how many premium treats that money could have bought him. The most judged I've felt was when he watched me eat an entire pizza alone! 😂 When has your pet made you feel most judged? #JudgmentalPets #PetHumor"
      },
      {
        title: "The Secret Life of Pets When You're Gone",
        description: "A humorous interpretation of what pets really do when left home alone.",
        textOverlay: "What They REALLY Do! 👀",
        imagePrompt: "A pet engaged in a human-like activity (like sitting on furniture they're not allowed on or investigating an open refrigerator), with dramatic lighting highlighting their mischievous expression.",
        caption: "A pet camera study by the University of California revealed that 65% of pets check the door 5+ times during the first hour you're gone! But the REALLY interesting data shows that after that initial period, 72% of cats and 41% of dogs immediately seek out forbidden zones—your bed, counter tops, or restricted furniture. My indoor camera caught my 'angel' cat spending 3 HOURS on the kitchen counter she supposedly 'never jumps on'! The most fascinating finding: pets frequently retrieve and interact with items carrying your scent when alone—a self-soothing behavior linked to the same attachment system as human children. What's the most surprising thing you've discovered your pet doing when you're away? #SecretLifeOfPets #BustedByCamera"
      }
    ],
    promotional: [
      {
        title: "The One Pet Product Worth Every Penny",
        description: "Feature a single high-quality pet product that delivers exceptional value.",
        textOverlay: "GAME CHANGER Product! ⭐",
        imagePrompt: "A single high-quality pet product dramatically lit and center-framed against a clean background, highlighting its premium features and quality materials.",
        caption: "Slow feeder bowls reduce bloat risk by 56% in deep-chested breeds! Veterinary studies show that gulping air during rapid eating is a major contributor to gastric dilatation volvulus (GDV)—a potentially fatal condition affecting 60,000 dogs annually. The maze-like design of quality slow feeders forces dogs to eat 5-10x slower, dramatically reducing air intake and improving digestion. After my German Shepherd was diagnosed with early GDV signs, switching to this specific slow feeder extended his mealtime from 45 seconds to 8 minutes, eliminating his post-meal discomfort completely. This $30 investment potentially saved me thousands in emergency surgery costs! What pet product has been most worth the investment for your fur baby? Link in bio! #PetHealth #SlowFeeding"
      },
      {
        title: "The Grooming Tool That Changed Everything",
        description: "Showcase a single grooming tool that dramatically improves pet care and appearance.",
        textOverlay: "BEST Grooming Investment! 🧹",
        imagePrompt: "A hand holding a high-quality pet grooming tool with visible pet hair collected, dramatically lit to emphasize the tool's effectiveness and premium quality.",
        caption: "Undercoat rakes remove up to 90% more loose fur than standard brushes! The science is in the design: the dual-length curved tines reach multiple layers of coat without damaging the topcoat or irritating skin. This reduces household pet hair by 78% and decreases shedding-related allergic reactions by 65%, according to a Cornell veterinary study. I tested SEVEN different de-shedding tools on my heavy-shedding Husky, and this specific rake collected 3x more fur than the runner-up. The game-changing difference? The specially angled tines that follow the natural growth pattern of the undercoat. One 10-minute session now replaces what used to take three days of constant brushing! What grooming tool revolutionized your pet care routine? Link in bio for details! #ShedControl #GroomingEssentials"
      }
    ],
    all: []
  },
  Travel: {
    educational: [
      {
        title: "The Hidden Fee Most Travelers Miss",
        description: "Reveal a commonly overlooked travel expense and how to avoid it.",
        textOverlay: "STOP Paying This Fee! 💸",
        imagePrompt: "A close-up of a credit card or currency being used abroad with dramatic lighting highlighting the transaction details or exchange rate display.",
        caption: "Foreign transaction fees silently eat up to 6% of your vacation budget! Most banks charge a hidden 3% currency conversion fee PLUS a 2-3% 'foreign transaction fee' on EVERY purchase abroad. This means your $2,000 vacation actually costs an extra $120 just in fees! The solution: specific travel cards like Chase Sapphire or Capital One Venture waive ALL foreign fees and offer better exchange rates than airport kiosks (which take another 8-12%!). When I switched cards before my Europe trip, I saved $237 compared to my previous Asia vacation of the same length. This ONE financial change lets you travel an extra day on the same budget! What's your best money-saving travel hack? #TravelHacks #MoneySavingTips"
      },
      {
        title: "The Packing Technique That Changes Everything",
        description: "Demonstrate an efficient packing method that maximizes space and minimizes wrinkles.",
        textOverlay: "Pack Like a PRO! 🧳",
        imagePrompt: "A bird's eye view of efficiently packed clothing using the roll method or packing cubes, with dramatic lighting highlighting the organization and space efficiency.",
        caption: "The compression roll technique reduces packing volume by 43% compared to folding! Travel experts confirm that rolling clothes not only saves space but reduces wrinkles by 37% because there are no hard fold lines. The key detail most miss: roll from the bottom up with sleeves/legs folded in first, then secure with rubber bands to maintain compression. Using this method, I fit 2 weeks of clothing in a carry-on that previously held just 5 days worth. The science behind it: air pockets between folded clothes waste up to 30% of suitcase volume. What seemed impossible—10 outfits in a carry-on—became my normal travel reality! What's your game-changing packing strategy? #PackingHacks #TravelLight"
      }
    ],
    entertaining: [
      {
        title: "When The Hotel Room Doesn't Match The Photos",
        description: "A humorous take on disappointing travel accommodations versus online expectations.",
        textOverlay: "Expectation vs REALITY! 🏨",
        imagePrompt: "A comically disappointing hotel room feature (like a tiny 'ocean view' or unusually small room) with dramatic lighting highlighting the contrast to expectations.",
        caption: "Hotel photography secrets exposed: studies show 76% of properties use ultra-wide angle lenses that make rooms appear up to 40% larger! That 'oceanfront' view? Photos are typically taken from the highest floor at the exact perfect angle—while most rooms have the 'partial' view (which means if you lean out the window and look left, you might glimpse water!). The funniest deception I experienced was a 'private hot tub' in Santorini that turned out to be a regular bathtub with THREE bubbles! 💀 The psychology behind this: travel sites know most people won't cancel once they've arrived, regardless of disappointment. What's your most hilarious accommodation expectation vs. reality story? #TravelFails #HotelReality"
      },
      {
        title: "Airport Security Line Personalities",
        description: "A humorous observation of different traveler types at security checkpoints.",
        textOverlay: "Which One Are YOU? ✈️",
        imagePrompt: "A person demonstrating an exaggerated security line personality (like frantically unpacking at the last minute or wearing excessive layers), with theatrical lighting for comedic effect.",
        caption: "TSA agents privately categorize travelers into 5 personality types—and they can spot which one you are within 7 seconds of approaching the checkpoint! There's the 'Veteran' (shoes already off, laptop out before reaching bins), the 'Last-Minute Scrambler' (realizes they have 17 pockets full of metal AT the scanner), the 'Argumentative Expert' (explains security protocols to actual security), the 'Oblivious Wanderer' (stands contemplating life while a line forms behind them), and the 'Overpreparer' (arrives in what is essentially pajamas with no metal, liquids sealed in 16 separate bags). I was the classic Last-Minute Scrambler until my embarrassing incident involving three laptops, a belt, and a line of 40 angry travelers! 😂 Which security line personality are you? #AirportHumor #TravelPersonalities"
      }
    ],
    promotional: [
      {
        title: "The One Travel Accessory I Never Fly Without",
        description: "Feature a single travel essential that enhances comfort and convenience.",
        textOverlay: "ESSENTIAL Travel Upgrade! 🛫",
        imagePrompt: "A single premium travel accessory (like a neck pillow or travel organizer) dramatically lit against an airplane cabin or airport backdrop, highlighting its quality and usefulness.",
        caption: "Compression socks reduce flight-related swelling by up to 62% and lower your risk of deep vein thrombosis by 49%! Medical studies confirm that the pressurized airplane cabin environment combined with sitting for 3+ hours causes significant fluid retention in lower extremities—even in healthy travelers. The graduated compression technology (strongest at ankle, gradually decreasing upward) promotes blood flow against gravity, preventing that painful post-flight swollen ankle feeling. After testing 8 different brands, these specific 20-30mmHg medical-grade socks completely eliminated my usual post-flight foot pain and leg fatigue. The real game-changer? I can now wear my regular shoes immediately after a 12-hour flight instead of switching to flip-flops! What's your non-negotiable travel comfort item? Link in bio for my recommendation! #TravelEssentials #FlightComfort"
      },
      {
        title: "The Booking Hack That Saved Me Hundreds",
        description: "Share a specific strategy for securing better travel deals and saving money.",
        textOverlay: "INSIDER Booking Trick! 💰",
        imagePrompt: "A phone or laptop screen showing a travel booking site with visibly discounted prices, with dramatic lighting highlighting the savings amount or percentage.",
        caption: "The '21-day price drop' phenomenon is REAL! Data analysis of over 100,000 flights reveals that prices drop by an average of 17% exactly 21 days before departure, then spike dramatically 14 days out. This happens because airlines use algorithm-based dynamic pricing that automatically adjusts unsold inventory at specific time intervals. The key most travelers miss: this pattern is strongest for Tuesday and Wednesday departures to major hubs. Using this specific timing strategy, I saved $423 on my roundtrip to Europe last month compared to booking 30 days out or waiting until the 14-day mark. This ONE booking technique has saved me over $1,700 on my last four international trips! What's your best flight deal you've ever scored? Full booking guide in bio! #TravelDeals #FlightHacks"
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
    },
    {
      title: "The Biggest [NICHE] Mistake to Avoid",
      description: "Highlight the single most common mistake people make in [NICHE] and how to fix it.",
      textOverlay: "STOP Making This Mistake! ⚠️",
      imagePrompt: "A clear visual representation of a common [NICHE] mistake, dramatically lit with bold colors and clear visual elements highlighting what to avoid.",
    }
  ],
  entertaining: [
    {
      title: "When You're Obsessed With [NICHE]",
      description: "A relatable, humorous take on being passionate about [NICHE].",
      textOverlay: "[NICHE] Obsession Be Like... 😂",
      imagePrompt: "A person with an exaggerated, humorous expression surrounded by or interacting with a single [NICHE]-related item, with vibrant colors and dramatic lighting for comedic effect.",
    },
    {
      title: "No One Told Me About [NICHE]",
      description: "A humorous take on surprising discoveries in [NICHE] that beginners aren't prepared for.",
      textOverlay: "They NEVER Tell Beginners! 😱",
      imagePrompt: "A person with a shocked/surprised expression interacting with a single [NICHE] item or situation, with theatrical lighting highlighting their reaction.",
    }
  ],
  promotional: [
    {
      title: "The Only [NICHE] Product Worth Buying",
      description: "Showcase a single high-quality product related to [NICHE] that stands above the competition.",
      textOverlay: "FINALLY Found THE ONE! ✨",
      imagePrompt: "A single high-quality [NICHE] product dramatically lit and center-framed against a complementary background that highlights its features and premium quality.",
    },
    {
      title: "How I Transformed My [NICHE]",
      description: "Show a dramatic transformation or improvement in [NICHE] using a specific method or product.",
      textOverlay: "One Change, BIG Results! 🔄",
      imagePrompt: "A single, powerful visual representing a transformation or significant improvement in [NICHE], with dramatic lighting emphasizing the change or result.",
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
        `A close-up of the most important element of ${title.toLowerCase()}, with ${platformStyles[platform]} and bold visual contrast to emphasize the key concept.`
      ],
      entertaining: [
        `A humorous scene depicting ${title.toLowerCase()} with exaggerated expressions and ${platformStyles[platform]}, designed to evoke an emotional reaction.`,
        `A relatable moment showing the reality of ${title.toLowerCase()} with ${platformStyles[platform]} and visual elements that amplify the humor.`,
        `A surprising or unexpected visual take on ${title.toLowerCase()} with ${platformStyles[platform]} that subverts expectations for comedic effect.`
      ],
      promotional: [
        `A premium-looking visual highlighting ${title.toLowerCase()} with ${platformStyles[platform]} that emphasizes quality and desirability.`,
        `A before/after or transformation visual related to ${title.toLowerCase()} with ${platformStyles[platform]} that clearly demonstrates value.`,
        `A single product or service focused visual for ${title.toLowerCase()} with ${platformStyles[platform]} that creates desire through aspirational styling.`
      ],
      all: [
        `A visually striking representation of ${title.toLowerCase()} with ${platformStyles[platform]} that immediately captures attention.`,
        `A clear, high-quality visual concept centered on ${title.toLowerCase()} with ${platformStyles[platform]} designed for maximum engagement.`,
        `An eye-catching scene featuring ${title.toLowerCase()} with ${platformStyles[platform]} that stands out in a crowded feed.`
      ]
    };
    
    const promptType = basePrompts[type] || basePrompts.all;
    const promptIndex = Math.floor(Math.random() * promptType.length);
    return promptType[promptIndex] || `A clear visual about ${title.toLowerCase()} with ${platformStyles[platform]}.`;
  };
  
  // Select a random description template
  const randomDescIndex = Math.floor(Math.random() * descriptionTemplates.length);
  const description = descriptionTemplates[randomDescIndex];
  
  // Generate text overlay
  const overlayTemplates = textOverlayTemplates[type] || textOverlayTemplates.all;
  const randomOverlayIndex = Math.floor(Math.random() * overlayTemplates.length);
  const textOverlay = overlayTemplates[randomOverlayIndex];
  
  // Generate image prompt
  const imagePrompt = generateImagePrompt(type, niche, title, platform);
  
  return {
    description,
    textOverlay,
    imagePrompt
  };
};

// Generate content ideas based on niche, content type, and platform
export function generateContentIdeas(niche: string, contentType: ContentType = 'all', platform: Platform = 'both', count: number = 3): ContentIdea[] {
  console.log(`Generating ${count} ${contentType} ideas for ${niche} on ${platform}`);
  
  // Initialize array to store our ideas
  let ideas: ContentIdea[] = [];
  
  // Get templates for the specified niche
  const nicheTemplates = contentTemplates[niche] || {};
  
  // Decide which content types to include
  const typesToInclude: ContentType[] = contentType === 'all' 
    ? ['educational', 'entertaining', 'promotional']
    : [contentType];
  
  // For each content type we want to include
  for (const type of typesToInclude) {
    // Get templates specific to this niche and type
    const specificTemplates = nicheTemplates[type] || [];
    
    // Get generic templates for this type that we can adapt
    const genericForType = genericTemplates[type] || [];
    
    // Combine available templates, prioritizing niche-specific ones
    let availableTemplates = [...specificTemplates];
    
    // If we don't have enough specific templates, add some generic ones
    if (availableTemplates.length < count && genericForType.length > 0) {
      // Adapt generic templates to this niche
      const adaptedGeneric = genericForType.map(template => {
        const adapted = { ...template };
        
        if (adapted.title) {
          adapted.title = adapted.title.replace('[NICHE]', niche);
        }
        if (adapted.description) {
          adapted.description = adapted.description.replace('[NICHE]', niche.toLowerCase());
        }
        if (adapted.textOverlay) {
          adapted.textOverlay = adapted.textOverlay.replace('[NICHE]', niche);
        }
        if (adapted.imagePrompt) {
          adapted.imagePrompt = adapted.imagePrompt.replace('[NICHE]', niche.toLowerCase());
        }
        
        return adapted;
      });
      
      availableTemplates = [...availableTemplates, ...adaptedGeneric];
    }
    
    // If we still don't have enough templates, generate some basic ones
    if (availableTemplates.length < count) {
      const baseTitles = {
        educational: [`How to Improve Your ${niche} Results`, `The Secret to Better ${niche}`, `What Most ${niche} Experts Won't Tell You`],
        entertaining: [`When Your ${niche} Goes Wrong`, `${niche} Expectations vs. Reality`, `Things Only ${niche} People Understand`],
        promotional: [`The Best ${niche} Product of 2025`, `Why This ${niche} Tool Changed Everything`, `The Only ${niche} Service You Need`]
      };
      
      const titles = baseTitles[type] || [`Amazing ${niche} Tips and Tricks`];
      
      for (let i = availableTemplates.length; i < count; i++) {
        const randomTitle = titles[Math.floor(Math.random() * titles.length)];
        const { description, textOverlay, imagePrompt } = generateEnhancedDescription(randomTitle, niche, type, platform);
        
        availableTemplates.push({
          title: randomTitle,
          description,
          textOverlay,
          imagePrompt
        });
      }
    }
    
    // Shuffle templates for variety
    const shuffledTemplates = [...availableTemplates].sort(() => Math.random() - 0.5);
    
    // Take the number of templates we need for this type
    // For 'all', distribute evenly among types
    const ideasNeeded = contentType === 'all' ? Math.ceil(count / typesToInclude.length) : count;
    const selectedTemplates = shuffledTemplates.slice(0, ideasNeeded);
    
    // Convert templates to ContentIdea objects
    const newIdeas = selectedTemplates.map(template => ({
      id: generateId(),
      title: template.title,
      description: template.description,
      niche,
      type,
      platform,
      textOverlay: template.textOverlay,
      imagePrompt: template.imagePrompt,
      caption: template.caption || ''
    }));
    
    // Add to our collection
    ideas = [...ideas, ...newIdeas];
  }
  
  // If we're in 'all' mode and have too many ideas, trim to requested count
  if (contentType === 'all' && ideas.length > count) {
    ideas = ideas.slice(0, count);
  }
  
  // Fill 'all' collections in templates for future use
  for (const nicheKey in contentTemplates) {
    const nicheContent = contentTemplates[nicheKey];
    const allContent: any[] = [];
    
    for (const typeKey in nicheContent) {
      if (typeKey !== 'all') {
        allContent.push(...nicheContent[typeKey]);
      }
    }
    
    nicheContent.all = allContent;
  }
  
  return ideas;
}
