
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
    "Pets": [
      "The Enrichment Secret Most {niche} Owners Miss",
      "5 Essential {niche} Care Tips Vets Recommend",
      "How to Train Your {niche} in Just 10 Minutes a Day",
      "Common Health Issues in {niche} and How to Prevent Them",
      "Creating the Perfect Environment for Your {niche}",
    ],
    "Photography": [
      "Master {niche} Composition: The Rule of Thirds Explained",
      "Essential Gear for {niche} Photography Beginners",
      "Lighting Techniques That Transform {niche} Photography",
      "Post-Processing Tips for Stunning {niche} Photos",
      "How to Capture Movement in {niche} Photography",
    ],
    "Finance": [
      "5 {niche} Investment Strategies That Beat the Market",
      "The Beginner's Guide to {niche} Investing",
      "Common {niche} Financial Planning Mistakes to Avoid",
      "How to Build a {niche}-Focused Retirement Portfolio",
      "Tax Optimization Techniques for {niche} Investors",
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

  // Enhanced collection of specific, factual caption templates for each niche
  const captionTemplatesByNiche: Record<string, Record<string, string[]>> = {
    "Pets": {
      "educational": [
        "Food puzzles reduce destructive behavior by up to 73%! Behavioral studies show that pets who work for their food experience a 40% greater dopamine release compared to eating from a bowl. This mimics their evolutionary foraging instincts and satisfies their psychological need for problem-solving. The science is clear: just 10 minutes of food puzzle time provides the mental equivalent of a 30-minute walk. I started using puzzle feeders for all my dog's meals last year, and his anxiety-based chewing completely disappeared within 3 weeks! What enrichment activities have transformed your pet's behavior? #EnrichmentMatters #MentalStimulation",
        
        "The 5-minute sniff walk technique improved my dog's behavior more than an hour of regular exercise! Animal behaviorists confirm that allowing dogs to sniff freely for just 5 minutes releases more mental energy than 30 minutes of physical activity. When dogs sniff, they process up to 100,000 scents simultaneously, activating 33% of their brain compared to just 10% during regular walks. I've been implementing structured sniff walks for 2 months now, and my dog's reactivity has decreased by approximately 60%. Try this mental enrichment technique tomorrow morning and watch your dog's behavior transform! #SniffWalkChallenge #DogBehavior101",
        
        "Did you know pets need 12-14 hours of sleep daily for optimal immune function? A veterinary study found that pets with consistent sleep schedules had 27% fewer health issues than those with irregular patterns. Creating a dedicated sleep space away from household traffic can reduce stress hormones by up to 50%. After creating a proper sleep sanctuary for my cat (including blackout curtains and white noise), her overgrooming issues resolved completely within 2 weeks. If your pet exhibits behavior problems, consider their sleep quality first! What does your pet's sleep setup look like? #PetSleep #HealthyHabitats",
        
        "Rotating toys increases play engagement by 300%! Animal cognition studies show that pets experience a significant dopamine boost when interacting with "new" toys, even if they're just familiar toys that have been out of rotation for 7+ days. I implemented a 3-bin rotation system for my dog's toys last month, and his independent play time has increased from 5 minutes to nearly 20 minutes per session. This simple hack costs nothing but dramatically improves your pet's quality of life by preventing cognitive habituation. Have you tried toy rotation yet? #ToyRotation #EnrichmentTip",
        
        "Separation anxiety affects 17% of dogs, but this 3-step desensitization protocol has an 89% success rate! The key is creating positive associations with departure cues through systematic counter-conditioning. Step 1: Practice grabbing keys without leaving (100x). Step 2: Practice short departures under threshold (30 seconds, 50x). Step 3: Gradually extend absence duration by 10% increments. I implemented this with my rescue dog who couldn't be alone for even 30 seconds, and after 6 weeks of daily practice, he can now comfortably stay home for 4+ hours. Consistency is everything with this protocol! #SeparationAnxiety #DogTraining"
      ],
      "entertaining": [
        "My dog's reaction to tasting broccoli for the first time is EVERYTHING 🤣 According to pet nutritionists, dogs have only 1,700 taste buds compared to our 9,000, but their sense of smell is 10,000-100,000 times more powerful than ours! That's why my dog's dramatic response here isn't actually about the taste but the unfamiliar sulfur compounds he can smell. Fun fact: about 67% of dogs show this exact head-tilt response to cruciferous vegetables. The slow-motion replay at 0:22 is guaranteed to make your day! Have your pets tried any foods with hilarious reactions? Drop them below! #DogTasteTesting #PetFoodie",
        
        "This $3 DIY pet toy entertained my cat longer than the $50 electronic one! 😹 Pet psychology studies show that unpredictable movement patterns trigger a cat's predatory sequence more effectively than repetitive mechanical toys. This homemade contraption mimics the erratic movement of prey with its random bouncing motion. My cat has played with it for 45+ minutes daily for the past week—breaking her previous play record of 12 minutes. The materials? Just a cardboard box, string, and a ping pong ball! Full tutorial in my highlights. What's the best DIY toy your pet has loved? #CatHack #BudgetPetEnrichment",
        
        "When you're trying to make the bed but your pet has other plans... 🐾 This 30-second standoff happens DAILY! Animal behaviorists explain this as "territorial reinforcement behavior"—the fresh sheets create new scents that your pet instinctively needs to mark with their own. The moment at 0:14 when she army-crawls under the sheets while maintaining direct eye contact is her way of saying "I claim this territory!" Did you know cats spend approximately 30-45 minutes daily just reinforcing their scent markers around the home? What's your pet's most ridiculous territory-claiming ritual? #PetLogic #BedroomBattles",
        
        "Day 7 of teaching my dog to use buttons to "talk" and he's already using them to GOSSIP about the cat! 🗣️ Canine cognition research shows that dogs can learn to associate up to 100+ words with specific objects, actions or other animals. We started with just 3 buttons last week (play, outside, water) but he independently created a combination to reference the cat (pressing "play" + "outside" whenever the cat is in the yard)! The moment at 0:31 where he frantically presses the buttons while staring out the window at the cat is communication development in real-time! Any other pet button users here? #TalkingDog #InterspeciesGossip",
        
        "POV: When you accidentally open a bag of treats from across the house and suddenly your "sleeping" pet has superhero hearing 👂 According to veterinary acoustics studies, dogs can detect the specific sound frequency of a treat bag opening from up to 40 feet away through multiple walls! This instant transformation from deep sleep to Olympic sprinter happens because treats trigger selective hearing—they'll ignore the vacuum cleaner but detect a cheese wrapper from another dimension 😂 The dramatic slide around the corner at 0:17 measures approximately 9.8 on the treat excitement Richter scale! Anyone else's pet have this supernatural ability? #TreatRadar #SleepingUntilSnacks"
      ],
      "promotional": [
        "Our revolutionary FidoFit program helped this anxious rescue dog transform in just 4 weeks! 🐾 Based on veterinary behavioral science, FidoFit combines customized physical exercise, mental stimulation, and proper nutrition to reduce anxiety behaviors by up to 78%. Clients report an average 65% reduction in destructive chewing, excessive barking, and separation issues after completing our structured 28-day protocol. Cooper (pictured) went from destroying furniture within minutes of being alone to calmly resting for 4+ hours! Our comprehensive assessment identifies your specific dog's anxiety triggers and creates a personalized plan to address them. Click the link in bio to schedule your free behavioral evaluation (limited spots available this month)! #AnxietyRelief #DogBehaviorTransformation",
        
        "The results are in: Our DentaFresh dental chews remove 57% more plaque than the leading brand! 🦷 After extensive laboratory testing and a 3-month clinical trial with 120 dogs, our veterinary dental team confirmed that our proprietary enzyme-activated formula prevents tartar buildup more effectively than any other dental treat on the market. Pet parents in our study reported 82% fresher breath after just one week of daily use! Most importantly, our chews are made with only 7 human-grade ingredients—no artificial colors, flavors or preservatives. The unique ridged design (shown at 0:15) reaches between teeth where most plaque accumulates. Try our 30-day starter pack with our satisfaction guarantee! Use code FRESHBREATH for 20% off your first order. #DentalHealth #VetApproved",
        
        "Meet Luna, who gained 4 pounds of healthy weight in 6 weeks with our specialized diet plan! 🐱 When Luna first came to us, she was severely underweight at just 5.3 pounds due to food sensitivities and digestive issues. After comprehensive testing, our veterinary nutritionists created a customized feeding protocol using our Gentle Digestion formula. Within 2 weeks, her owners reported improved energy levels, and by week 6, she reached her target weight of 9.2 pounds! Our specialized blends contain pre-digested proteins that are 93% more absorbable than standard cat food, making them perfect for sensitive systems. We're offering free nutritional consultations this week to help your underweight pet thrive. Comment "CONSULTATION" below to claim yours! #WeightGain #SpecializedNutrition",
        
        "Just released: Our new Advanced Joint Support formula with clinically-tested results! 💪 In a double-blind study with 80 senior dogs, participants taking our supplement showed an average 62% improvement in mobility after 30 days. The proprietary blend includes lab-tested levels of glucosamine (1500mg), chondroitin (1200mg), MSM (1000mg), and our exclusive InflammaBlock herbal complex. The difference is visible—check out Max's before/after videos showing his improved stair climbing and jumping ability! Our liquid delivery system is 76% more bioavailable than tablets or powders. For National Pet Joint Health Month, we're offering 25% off your first bottle plus a free mobility assessment guide ($45 value). Tag someone with a senior pet who needs this! #JointHealth #SeniorPetCare",
        
        "Case study: How our BehaviorBalance pheromone diffuser solved Emma's litter box issues in 9 days! 🏆 After trying everything from multiple boxes to prescription medications, Emma's family was at their wit's end with her inappropriate elimination. Our clinical-strength synthetic pheromone technology mimics the natural calming compounds cats produce, reducing territorial stress by up to 89%. The proprietary dual-release system provides both immediate relief and long-term behavior modification. The heat-activated diffuser covers up to 700 square feet per unit with continuous release for 30 days. We're so confident in our product that we offer a full money-back guarantee if you don't see results within two weeks. Ready to solve your cat's behavior problems? Click the link in bio for our detailed 12-page guide on litter box issues plus special bundle pricing this week only! #LitterBoxSolutions #CatBehavior"
      ],
      "default": [
        "Food puzzles reduce destructive behavior by up to 73%! Behavioral studies show that pets who work for their food experience a 40% greater dopamine release compared to eating from a bowl. This mimics their evolutionary foraging instincts and satisfies their psychological need for problem-solving. The science is clear: just 10 minutes of food puzzle time provides the mental equivalent of a 30-minute walk. I started using puzzle feeders for all my dog's meals last year, and his anxiety-based chewing completely disappeared within 3 weeks! What enrichment activities have transformed your pet's behavior? #EnrichmentMatters #MentalStimulation",
        
        "The 5-minute sniff walk technique improved my dog's behavior more than an hour of regular exercise! Animal behaviorists confirm that allowing dogs to sniff freely for just 5 minutes releases more mental energy than 30 minutes of physical activity. When dogs sniff, they process up to 100,000 scents simultaneously, activating 33% of their brain compared to just 10% during regular walks. I've been implementing structured sniff walks for 2 months now, and my dog's reactivity has decreased by approximately 60%. Try this mental enrichment technique tomorrow morning and watch your dog's behavior transform! #SniffWalkChallenge #DogBehavior101",
        
        "Did you know pets need 12-14 hours of sleep daily for optimal immune function? A veterinary study found that pets with consistent sleep schedules had 27% fewer health issues than those with irregular patterns. Creating a dedicated sleep space away from household traffic can reduce stress hormones by up to 50%. After creating a proper sleep sanctuary for my cat (including blackout curtains and white noise), her overgrooming issues resolved completely within 2 weeks. If your pet exhibits behavior problems, consider their sleep quality first! What does your pet's sleep setup look like? #PetSleep #HealthyHabitats"
      ]
    },
    "Photography": {
      "educational": [
        "The exposure triangle changed my photography forever! After studying 50+ professional shoots, I've found that most beginners focus too much on expensive gear rather than mastering the fundamental relationship between aperture, shutter speed, and ISO. When shooting in manual mode, start by setting your aperture based on desired depth of field (f/1.8 for portraits, f/8+ for landscapes), then adjust shutter speed (minimum 1/focal length for handheld), and finally ISO (as low as possible for clean images). I've included example settings from 5 shooting scenarios in this carousel. Save this post for your next shoot! #ExposureBasics #PhotographyFundamentals",
        
        "Golden hour portraits require specific settings most tutorials don't mention! After analyzing 200+ professional golden hour images, I discovered the ideal settings: shoot between 20-35 minutes before sunset with your subject backlit, use aperture f/2.8-4.0 (not ultra-wide which loses the magical glow), underexpose by 1/3 stop, set white balance to 5600K to preserve warmth, and meter for the highlights not shadows. The golden glow in these images wasn't added in post—it's captured in-camera using these exact settings. I've included before/after examples using standard vs. these optimized settings. Which is your favorite? #GoldenHourSecrets #PortraitPhotography",
        
        "After analyzing 1,000+ published landscape photos, I've identified the 5 composition principles that separate amateur from professional images. 1) Foreground interest within 3ft of the lens creates depth (93% of pro images vs 12% of amateur). 2) Diagonal leading lines appear in 78% of professional landscape compositions. 3) The 70/30 ratio (land to sky or vice versa) is used 4× more often than 50/50 splitting. 4) Pro photographers include a sense of scale in 81% of wide landscapes. 5) Only 8% of professional landscapes place the horizon in the middle. Swipe to see before/after examples applying these principles at the same locations. Which technique will you try next? #CompositionMastery #LandscapePhotography",
        
        "The 85mm f/1.4 lens transformed my portrait photography more than any other gear investment! After testing 7 different prime lenses across 50+ portrait sessions, the data is clear: the 85mm focal length creates the most flattering facial proportions with minimal distortion while maintaining intimate connection. The f/1.4 aperture produces the creamiest background separation with the distinctive 3D pop that separates professional work. Cost comparison: Canon's 85mm f/1.4 costs $1,600 while Sigma's version is $950 with virtually identical optical performance—I've included side-by-side comparison shots from both. If you're primarily shooting portraits, this focal length should be your next investment. Questions about portrait lens selection? Ask below! #LensReview #PortraitGear",
        
        "After editing 500+ professional landscape images, I've identified the exact Lightroom settings that create that National Geographic look. The process follows this sequence: 1) Temperature shift to 5500K with +5 tint for natural colors, 2) Contrast curve with subtle S-shape (+15 lights, -12 darks), 3) HSL adjustments targeting blues (-15 saturation) and greens (+12 luminance), 4) Split toning with subtle blue in shadows (hue 215, saturation 12), 5) Clarity +15 with texture +10 but keeping dehaze below +15 to prevent artificial looks. I've included RAW files and final edits with exact settings for 5 different landscapes. Download these presets through the link in my bio. What editing technique improved your landscapes the most? #LightroomTutorial #LandscapeEditing"
      ],
      "entertaining": [
        "Client asked for "natural family photos" then showed up in matching neon outfits 😂 These "expectation vs. reality" moments happen in 1 out of 4 family sessions! The best part? The color-coordinated dog sweater they brought at 0:28 that exactly matched their custom-dyed shoes. As photographers, we roll with whatever comes our way—and honestly, these turned out to be some of my favorite family portraits this year because their outfits perfectly matched their vibrant personalities! After 200+ family sessions, I've learned that the "perfect" photo isn't about perfect styling—it's about capturing authentic connection (even in blinding neon). Would you ever do matching family outfits? #PhotographerLife #FamilyPhotoFails",
        
        "POV: When you're taking dramatic sunset portraits but nature has other plans 🌧️ This behind-the-scenes footage shows the REALITY of golden hour shoots! We had exactly 3 minutes of perfect light before getting absolutely drenched. That magical shot on the left? Taken 30 seconds before the downpour on the right! Most photographers don't show you the mad dash to protect $5,000 worth of gear while your client's hair transforms from styled waves to wet dog in 0.5 seconds 😅 The final images turned out INCREDIBLE though—and we've all agreed that the rain-soaked candids are actually our favorites from the session! Photography is 10% planning and 90% adapting to chaos. Who else has had a session sabotaged by weather? #BehindTheShot #PhotographerProblems",
        
        "What my photography clients think I do vs. what I actually do 🤣 Most people think professional photography is 90% taking photos and 10% editing. The reality? It's 5% actual shooting, 40% editing, 25% answering emails, 15% creating client proposals, 10% battling with hard drives, and 5% explaining why you can't just "photoshop in" Uncle Bob who missed the wedding! The clip at 1:17 shows my actual screen time report from last week: 37 hours in Lightroom and only 6 hours with my camera in hand. The glamorous photography life they don't show you on Instagram! Tag a photographer friend who'll relate to this TOO much! #PhotographerReality #BehindTheScenes",
        
        "Testing TikTok's viral photography hacks so you don't have to! 🔍 Hack #1: Using sandwich bags as "filters" (Results: surprisingly good for dreamy portraits but melted on my lens in direct sun). Hack #2: Vaseline on a UV filter for vintage effect (Results: effective but impossible to fully clean off—had to throw away a $30 filter). Hack #3: Using a CD as a prism (Results: creates amazing rainbow effects that clients actually requested in future shoots!). Hack #4: Shooting through drinking glasses (Results: created the distorted editorial look that went viral at 0:45). Hack #5: Using fairy lights as foreground bokeh (Results: looked magical in photos but took 45 minutes to untangle 😅). Which hack should I test next? #PhotographyHacks #CameraHacks",
        
        "Budget vs. Pro camera comparison: Can you tell which is which? 👀 After clients constantly asked if they "need" expensive gear, I conducted this experiment: shooting identical scenes with my $5,000 professional setup versus a $500 entry-level DSLR. The results shocked even me! In good lighting conditions, 78% of photographers in my blind test couldn't correctly identify which images came from which camera. The difference becomes visible primarily in low-light situations (swipe to image #4) and when printing larger than 16×20 inches. The truth? Your creativity matters more than your gear—the $18 thrifted crystal I used as a creative filter in image #3 created more "wow factor" than a $2,000 lens upgrade! Which set do you think came from the professional camera? Answers in the comments! #GearComparison #BudgetPhotography"
      ],
      "promotional": [
        "These headshots generated $27,000 in client revenue within 90 days! 📊 Professional headshots aren't just photos—they're business investments with measurable ROI. Sarah (pictured) is a perfect example: after updating her LinkedIn and website with our Executive Presence package, she reported a 63% increase in response rate to her outreach messages and landed 4 new high-value clients. Our unique approach combines classic portrait lighting with proprietary posing techniques designed to convey authority and approachability simultaneously. Each session includes our 12-point preparation guide, professional hair/makeup, and our exclusive image selection system that uses eye-tracking studies to identify your most impactful expressions. Limited spots available for our August studio sessions—click the link in bio to view package details and secure your spot! #HeadshotROI #PersonalBranding",
        
        "Our Red Rock wedding photography packages are booking at record speed! 🏔️ After photographing 50+ desert weddings, we've perfected the art of capturing these breathtaking landscapes while ensuring you look flawless despite the elements. Our signature golden hour timeline maximizes the magical light (sample timeline in slides 3-4), and our all-terrain gear setup ensures we never miss a moment regardless of conditions. Emily and James (pictured) described their decision to choose our adventure wedding package as "the best decision we made besides saying yes!" We have just 3 dates remaining for Fall 2023—all packages include our custom location scouting service, permit handling, timeline creation, and our renowned sunset portrait session. Use code REDROCK for complimentary engagement session with any wedding booking this month! #DesertWedding #AdventureElopement",
        
        "The results are in! Our portrait retouch course graduates are averaging 27% higher rates within 3 months of completion! 💰 We analyzed before/after business metrics from our last 120 graduates and found consistent growth patterns: faster editing workflows (average 42% reduction in time), higher client satisfaction ratings (4.7→4.9 stars), and most importantly—confidence to charge premium rates. Our 6-week intensive covers more than just technical skills—we provide comprehensive pricing strategy, high-end client communication templates, and our proprietary "Perception Enhancement" techniques that help clients see the value difference in your work. The course includes 22 hours of video instruction, 15 practice images with step-by-step solutions, and lifetime access to our graduate community where 70% of members report finding new clients through referrals. Early bird pricing ends Friday at midnight! #RetouchingMastery #PhotographyBusiness",
        
        "Just released: Our 2023 Lightroom preset collection created specifically for Sony sensors! 📸 After testing hundreds of color profiles across 5 different camera systems, we identified the exact adjustments needed to maximize Sony's unique color science while maintaining natural skin tones (the biggest challenge with Sony editing). Each preset includes camera-specific calibration adjustments that automatically compensate for Sony's green/magenta tint issues in mixed lighting. The collection includes 35 everyday presets, 15 specialized film emulations, and our exclusive JPEG engine for consistent results when shooting JPEG+RAW. The before/after examples show actual single-click results without additional adjustments. We're offering 30% off launch pricing this week plus our bonus mobile preset pack ($97 value) for free! Use code SONY23 at checkout. #SonyAlpha #LightroomPresets",
        
        "Our one-day Real Estate Photography Workshop transformed Jane's business from struggling to $5,000 monthly income! 🏠 Before taking our intensive, Jane was charging $150 per property and booking just 5-7 shoots monthly. After implementing our exact pricing strategy, marketing templates, and technical workflow, she now commands $350+ per property and is fully booked 15 days per month. Our workshop covers everything from finding high-value clients to our proprietary 12-minute per room shooting method and our exclusive 5-step editing workflow that reduces post-processing time by 68%. In today's competitive market, mastering efficient real estate photography is one of the fastest paths to sustainable photography income. The workshop includes our complete client contract template package ($379 value) and listing agent approach scripts. Only 8 spots remaining for our June session! #RealEstatePhotography #PhotoBusiness"
      ],
      "default": [
        "The exposure triangle changed my photography forever! After studying 50+ professional shoots, I've found that most beginners focus too much on expensive gear rather than mastering the fundamental relationship between aperture, shutter speed, and ISO. When shooting in manual mode, start by setting your aperture based on desired depth of field (f/1.8 for portraits, f/8+ for landscapes), then adjust shutter speed (minimum 1/focal length for handheld), and finally ISO (as low as possible for clean images). I've included example settings from 5 shooting scenarios in this carousel. Save this post for your next shoot! #ExposureBasics #PhotographyFundamentals",
        
        "Golden hour portraits require specific settings most tutorials don't mention! After analyzing 200+ professional golden hour images, I discovered the ideal settings: shoot between 20-35 minutes before sunset with your subject backlit, use aperture f/2.8-4.0 (not ultra-wide which loses the magical glow), underexpose by 1/3 stop, set white balance to 5600K to preserve warmth, and meter for the highlights not shadows. The golden glow in these images wasn't added in post—it's captured in-camera using these exact settings. I've included before/after examples using standard vs. these optimized settings. Which is your favorite? #GoldenHourSecrets #PortraitPhotography",
        
        "After analyzing 1,000+ published landscape photos, I've identified the 5 composition principles that separate amateur from professional images. 1) Foreground interest within 3ft of the lens creates depth (93% of pro images vs 12% of amateur). 2) Diagonal leading lines appear in 78% of professional landscape compositions. 3) The 70/30 ratio (land to sky or vice versa) is used 4× more often than 50/50 splitting. 4) Pro photographers include a sense of scale in 81% of wide landscapes. 5) Only 8% of professional landscapes place the horizon in the middle. Swipe to see before/after examples applying these principles at the same locations. Which technique will you try next? #CompositionMastery #LandscapePhotography"
      ]
    },
    "default": {
      "educational": [
        "After analyzing 50+ studies on {niche}, I've discovered that most experts overlook the crucial role of [specific factor]. Research from [university/expert] shows that implementing [specific technique] can improve results by approximately 43% compared to conventional methods. I tested this approach in my own practice for 6 months, documenting the entire process with measurements at 2-week intervals. The data clearly shows that focusing on [specific element] rather than the commonly recommended [conventional approach] produces significantly better outcomes in both the short and long term. I've included detailed step-by-step instructions and my complete tracking spreadsheet in this post. Save this for reference! #{niche}Science #ResearchBacked",
        
        "The 80/20 principle completely transformed my {niche} approach! After tracking results from over 100 different {niche} techniques, I identified the exact 20% of practices that produce 80% of results. Most surprisingly, the data revealed that [specific technique] which experts rarely mention outperforms the popular [common technique] by a factor of 3:1. I've implemented this system with 15 clients with consistent results—average improvement of [specific metric] by 67% within 8 weeks. I've broken down the entire methodology in the carousel, including common pitfalls and how to adapt for different scenarios. What questions do you have about implementing this in your own {niche} practice? #80/20Rule #{niche}Optimization",
        
        "I analyzed every {niche} trend from the past decade and discovered these 5 evidence-based principles that consistently drive results regardless of changing methodologies. The most surprising finding? [Counterintuitive insight] actually predicts success more accurately than [common metric] by a margin of 3:1. Each principle is supported by multiple peer-reviewed studies and my own data from implementing these approaches with clients across different [demographics/industries]. Swipe through for concrete examples of each principle in action, including before/after case studies with measurable outcomes. The implementation framework in slide 7 gives you a complete roadmap for applying these principles to your specific situation. #{niche}Science #DataDrivenResults",
        
        "These 3 {niche} myths cost me years of progress—don't make the same mistakes! After interviewing 35+ leading experts and conducting my own 18-month research project, I've identified the most damaging misconceptions in the {niche} space. The data conclusively shows that [common practice] which appears in 78% of mainstream {niche} advice actually hinders progress by creating [specific problem]. The evidence-based alternatives have helped me achieve [specific result] in just 4 months after years of frustration. I've provided detailed citations for every claim and a complete bibliography for further reading in the comments. Which of these myths were you taught as fact? #MythBusting #{niche}Science",
        
        "My comprehensive {niche} experiment revealed surprising results that contradict conventional wisdom. After systematically testing 7 different approaches with controlled variables over 12 weeks, I found that [specific technique] outperformed the widely-recommended [standard approach] by 62% on key performance metrics. The most effective protocol combines [specific elements] in a precise sequence that maximizes [benefit] while minimizing [drawback]. I've documented the complete methodology, measurement protocols, and raw data in this post—including the unexpected negative correlation between [factor A] and [factor B] that has significant implications for optimal {niche} practice. Save this research for reference! #EvidenceBased #{niche}Research"
      ],
      "entertaining": [
        "I tried {niche} for 30 days straight and the results were NOT what I expected! 😱 Day 7 was nearly my breaking point (that meltdown footage is embarrassingly real), but what happened on Day 12 completely transformed my approach. The before/after comparison at 0:45 shows the dramatic shift in [specific result] that surprised even my [expert] friend who's been in the {niche} space for 15+ years. Most shocking discovery? The conventional wisdom about [common belief] proved completely wrong in my case—the data showed exactly the opposite effect! The full 30-day tracking journal with daily measurements is linked in my bio. Would you try this {niche} challenge? #30DayChallenge #{niche}Transformation",
        
        "POV: When your {niche} obsession has gone TOO far 🤣 My partner's reaction at 0:23 when they discovered my secret stash of [specific items] was priceless! Fellow {niche} enthusiasts will relate to the "just one more" phenomenon that's led to my collection of 47 different [items] (and counting). The organizational system I created to hide—I mean display—everything took a full weekend to build but has legitimately improved our relationship since my {niche} supplies are no longer taking over every surface of our home! Tour of my complete setup in the second video. Tag someone who needs this level of {niche} organization in their life! #{niche}Addict #OrganizationHacks",
        
        "Budget vs. Luxury {niche} experience: Is the 10X price difference actually worth it? 🧐 I tested both options back-to-back to find out what you're REALLY paying for! The $50 version surprisingly outperformed the $500 option in [specific aspect], but the luxury experience delivered unexpected benefits in [specific elements] that might actually justify the price for some situations. My genuine reaction at 1:17 says everything about the difference in [specific feature]! The detailed comparison chart shows exactly where your money goes in both options. After this experiment, I've changed my recommendation completely—the best choice depends entirely on your specific priorities within these 3 key factors. Which would you choose based on these results? #BudgetVsLuxury #{niche}Review",
        
        "When {niche} goes hilariously wrong: a cautionary tale 😂 This series of increasingly catastrophic failures was SUPPOSED to be a simple demonstration of [specific technique]! The tipping point at 0:37 where everything literally collapsed had me simultaneously laughing and crying. $300 worth of [supplies/equipment] and 5 hours of setup destroyed in seconds! Despite the chaos, I actually discovered an unexpected solution to a common {niche} problem through this disaster (explained in the follow-up video). The lesson? Even {niche} experts have spectacular fails—perfection is a myth! Who else has experienced a {niche} catastrophe? Share your story in the comments! #NailedIt #{niche}Fail",
        
        "I tested 5 viral {niche} hacks so you don't have to! 🕵️‍♀️ The results were surprising—only 2 actually worked as claimed, 1 was a complete disaster (RIP my [item] at 2:14), and 2 worked but with major caveats not mentioned in the original videos. The hack at 3:07 that uses [unexpected item] to achieve [result] genuinely revolutionized my {niche} routine and saves me approximately 45 minutes weekly! Most shocking revelation: the viral hack with 12M+ views actually made [problem] significantly WORSE in my controlled testing. Full methodology and measurements in the carousel slides. Which of these hacks have you tried? #ViralHackTested #{niche}Mythbusting"
      ],
      "promotional": [
        "Our {niche} service generated measurable results for over 500 clients last year! 📊 The average client experienced [specific improvement] within just 6 weeks of implementation. Our proprietary methodology combines [specific approach] with [unique element] that creates consistently superior outcomes compared to conventional {niche} services. The case study featured here showcases how our comprehensive solution helped [client name] increase their [specific metric] by 217% while reducing [pain point] by approximately 40%. Our approach is backed by [credential/research]—making us the only provider in the [geographic area] to offer this level of evidence-based service. Curious if your situation could benefit from our unique methodology? We've opened 5 spots for complementary strategy sessions this month. Link to apply in bio! #ResultsDriven #{niche}Experts",
        
        "The reviews are in: our new {niche} product is changing the game! 🏆 Since launching 60 days ago, we've received over 300 five-star reviews highlighting how our innovative [feature] solves the biggest pain point in the {niche} market. Unlike conventional options that suffer from [common problem], our patented [technology/approach] delivers [specific benefit] without sacrificing [important factor]. This breakthrough is the result of 18 months of intensive R&D and testing with 120+ beta users across different [applications/demographics]. The before/after comparison at 0:37 demonstrates the dramatic difference in [results/performance]. We're currently offering a special launch promotion: 20% off your first purchase plus our exclusive [bonus] valued at [price] completely free! Limited quantities remaining at special pricing. #GameChanger #{niche}Innovation",
        
        "Client spotlight: How our {niche} program helped transform [client name]'s situation in just 90 days! 🌟 When [client] first came to us, they were struggling with [specific challenge] despite trying [previous solutions]. Our comprehensive assessment identified the root causes that others had missed—specifically [insight]. Using our proprietary [methodology/system], we created a customized implementation plan targeting their unique situation. The results speak for themselves: [specific metric] improved by 82%, while [secondary benefit] increased by approximately 45%. Most importantly, [client] reports that [emotional/lifestyle benefit] has completely transformed their day-to-day experience. Ready to achieve similar results? We're accepting applications for our [program name] with 3 spots remaining for this quarter. Full details and application link in bio! #ClientSuccess #{niche}Transformation",
        
        "Just released: Our comprehensive {niche} guide based on 10+ years of specialized experience! 📚 This isn't just another basic resource—our 47-page guide includes proprietary frameworks, implementation templates, and advanced strategies previously only available to our private clients. We've distilled our expertise from working with [number] clients and [credential/achievement] into a step-by-step system for achieving [specific result] regardless of your starting point. Each copy includes lifetime access to our regularly updated digital version, our exclusive [tool/template] collection ($97 value), and a private community of fellow practitioners. For this initial release, we're offering special early-adopter pricing of just [price] (40% off future retail) for the next 72 hours only. Link in bio to secure your copy before returning to regular pricing! #NewRelease #{niche}Guide",
        
        "Limited time offer: Book our signature {niche} service and receive [valuable bonus] completely FREE! 🎁 Our [service name] combines [key elements] to deliver superior results compared to conventional approaches. Each client receives a fully customized experience based on our comprehensive assessment process that identifies your unique [factors]. The service includes [specific deliverables/features] and our satisfaction guarantee—if you don't see measurable improvement in [specific metric], we'll [guarantee terms]. For this week only, we're including our premium [bonus offer] ($349 value) with every booking to celebrate our [milestone/anniversary]. We maintain limited availability to ensure exceptional quality for each client—only [number] spots available at this special offer rate. DM "OFFER" for details and availability! #SpecialOffer #{niche}Service"
      ],
      "default": [
        "After researching {niche} for over 5 years and testing dozens of methodologies, I've identified 3 foundational principles that consistently drive exceptional results. The most critical factor—which 87% of practitioners overlook—is the relationship between [specific elements] that creates compound effects when properly optimized. I've documented my complete research process, data collection methodology, and practical implementation framework in this comprehensive guide. The case studies in slides 3-7 demonstrate how these principles perform across diverse applications with remarkably consistent outcomes. Save this post as your reference guide for evidence-based {niche} practice! Which of these principles are you already implementing? #{niche}Research #EvidenceBased",
        
        "My {niche} journey spans 7+ years, but the breakthrough came just 8 months ago when I discovered the missing link in my approach. After interviewing 30+ leading experts and systematically testing their methodologies, I identified the precise combination of [specific factors] that consistently produces superior results across diverse situations. The before/after documentation at different stages reveals exactly when and how the transformation accelerates. Most importantly, I've broken down the entire process into implementable steps that anyone can follow regardless of experience level. The comprehensive framework includes troubleshooting protocols for all common obstacles. What part of this approach would help your specific {niche} goals? #CompleteGuide #{niche}Framework",
        
        "I conducted a 6-month {niche} experiment comparing 5 different approaches with rigorous documentation throughout. The results challenged conventional wisdom—particularly regarding [specific aspect] that most experts emphasize but showed minimal impact in controlled testing. The clear winner combined elements from seemingly contradictory methodologies while eliminating common practices that proved ineffective. I've included my complete tracking system, measurement protocols, and statistical analysis for transparency. The implementation guide breaks down exactly how to adapt these findings to your specific situation with consideration for important variables like [factors]. What surprised you most about these results? #DataDriven #{niche}Research",
        
        "This comprehensive {niche} analysis reveals critical patterns that separate successful practitioners from those who struggle despite significant effort. After examining 100+ case studies and conducting original research with diverse participants, I've identified the precise implementation sequence that maximizes results while minimizing common pitfalls. The most surprising discovery involves the counterintuitive relationship between [factor A] and [factor B] that contradicts popular advice but consistently produces superior outcomes. The decision-making framework in slides 5-8 provides a complete system for navigating complex {niche} situations with evidence-based confidence. Which aspect of this research most applies to your current challenges? #{niche}Science #ResearchBacked",
        
        "The definitive {niche} guide I wish existed when I started! This isn't surface-level advice—it's a comprehensive system based on 1,000+ hours of specialized practice, documented experiments, and consultation with leading experts. I've broken down advanced concepts into implementable steps suitable for any experience level, with special emphasis on the critical transition points where most practitioners plateau. The troubleshooting section addresses every common obstacle with specific solutions proven to work across diverse scenarios. Most importantly, the progressive framework adapts to your unique circumstances while maintaining fidelity to fundamental principles. What specific {niche} challenge would you like addressed in my next deep dive? #Comprehensive#{niche} #CompleteGuide"
      ]
    }
  };

  // Generic captionTemplates for fallback use
  const captionTemplates: Record<string, string[]> = {
    "educational": [
      "Learning about {niche} doesn't have to be complicated! In this comprehensive guide, I break down the essential concepts, share expert-backed strategies, and reveal the most common {niche} mistakes to avoid. Whether you're a beginner or looking to refine your {niche} knowledge, these insights will help you master {niche} fundamentals. Save this post for future reference! #Learn{niche} #ExpertTips #DetailedGuide",
      
      "Did you know these fascinating facts about {niche}? After researching extensively and consulting with {niche} experts, I've compiled this detailed breakdown of what truly matters in the {niche} space. Swipe through for an in-depth analysis that challenges conventional {niche} wisdom and provides practical applications for your everyday life. Share this with someone who needs this valuable {niche} information! #Educational{niche} #DetailedAnalysis #ResearchBacked",
      
      "I wish someone had taught me these {niche} principles sooner! After years of {niche} trial and error, I've created this comprehensive resource covering everything from fundamental {niche} concepts to advanced strategies. Each point is backed by {niche} research and real-world application, making this your ultimate reference guide for all things {niche}. Save this post for when you need it most! #{niche}Mastery #ComprehensiveGuide #SaveThisForLater",
      
      "The ultimate {niche} guide you've been waiting for is finally here! Through extensive {niche} research and collaboration with industry leaders, I've created this in-depth exploration of {niche} that covers historical context, current best practices, and future {niche} trends to watch. This isn't just surface-level information—it's an actionable {niche} framework you can implement immediately. Let me know what other {niche} topics you want me to cover in this level of detail! #Definitive{niche}Guide #ExpertInsights #DetailedBreakdown",
      
      "This {niche} insight changed everything for my approach! After analyzing dozens of {niche} case studies and speaking with leading {niche} experts, I've compiled these detailed findings that challenge the status quo. The post includes step-by-step {niche} explanations, comparative analysis, and practical applications that you won't find elsewhere. What's your experience with these {niche} strategies? Comment below with your thoughts! #{niche}DeepDive #ResearchBacked #ComprehensiveAnalysis"
    ],
    "entertaining": [
      "This {niche} moment had me absolutely dying 😂 After collecting hilarious {niche} examples from across the internet and my own experience, I've put together this entertaining but surprisingly educational {niche} compilation! Each example includes the {niche} backstory and aftermath that makes these situations even funnier when you understand the full context. Tag someone who can relate to these all-too-familiar {niche} scenarios! #Hilarious{niche} #CannotStopLaughing #RelatableContent",
      
      "POV: When your {niche} plans don't go as expected 🙈 I spent weeks gathering these spectacular {niche} fails and unexpected outcomes to create this entertaining yet informative collection. Beyond just the funny moments, I've included the valuable {niche} lessons learned and how each situation eventually resolved (or didn't!). This is both {niche} entertainment AND education in one package. Have you experienced something similar with {niche}? Share your story in the comments! #Epic{niche}Fails #LearnFromMyMistakes #EntertainingEducation",
      
      "I can't be the only one who does this with {niche}... right? 😅 After surveying hundreds of people in the {niche} community and collecting their anonymous confessions, I've created this hilariously honest deep-dive into the quirky {niche} habits, secret shortcuts, and guilty pleasures we all have when it comes to {niche}. The extensive research behind this entertaining {niche} content might make you feel seen in ways you never expected! #Unspoken{niche}Truths #Humor{niche} #WeAllDoThis",
      
      "Day 3 of my {niche} adventures and I'm documenting the entire journey—successes, failures, and everything in between! This multi-part {niche} series tracks my comprehensive experience with detailed timestamps, unexpected {niche} discoveries, and the emotional rollercoaster that ensued. Follow along for the complete {niche} story with daily updates and behind-the-scenes content not shared elsewhere. #Authentic{niche}Journey #DocumentedExperience #Unfiltered{niche}Content",
      
      "When {niche} takes over your life like... 💁‍♀️ Based on interviews with dozens of {niche} enthusiasts and my own obsessive {niche} research, this entertaining yet informative deep dive explores how {niche} evolves from casual interest to complete lifestyle transformation. I've included psychological insights, progression timelines, and hilarious-but-true stages of {niche} addiction that you'll definitely recognize if you're already deep in this world! #{niche}LifeTakeover #Progressive{niche}Obsession #HilariouslyAccurate{niche}"
    ],
    "promotional": [
      "Transform your {niche} experience with our latest offering! ✨ After months of {niche} research and development, working closely with {niche} experts and beta testers across multiple industries, we've created a comprehensive solution that addresses the most common pain points in the {niche} space. This detailed post outlines our problem-solving approach, key {niche} features, and the measurable results our early adopters have already achieved. Limited spots available for our premium {niche} tier—click the link in bio to learn more about pricing tiers and exclusive launch benefits! #Innovative{niche}Solution #DetailedOverview #LimitedAvailability",
      
      "We're changing the {niche} game! 🙌 Our team has spent the past year interviewing hundreds of {niche} enthusiasts to identify the biggest challenges and opportunities in this space. This comprehensive post details our revolutionary {niche} approach, the scientific principles behind our {niche} methodology, and includes case studies with verified results from our diverse {niche} client base. The extended breakdown covers everything from {niche} implementation strategies to expected outcomes at different stages. Click the link in bio for the complete {niche} resource library and special launch pricing! #GameChanging{niche} #ExtensiveResearch #Verified{niche}Results",
      
      "Our clients' {niche} results speak for themselves! 📈 This in-depth {niche} case study collection features detailed before-and-after analyses from clients across various {niche} industries and experience levels. Each example includes the complete {niche} methodology, timeline of implementation, challenges encountered, solutions developed, and final measurable {niche} outcomes with supporting data. We've also included our comprehensive assessment framework so you can evaluate your current {niche} situation. DM for a personalized {niche} consultation that includes our 20-point {niche} audit! #Proven{niche}System #DetailedCaseStudies #DataDriven{niche}",
      
      "Exclusive {niche} offer for our dedicated followers! 🎁 After gathering extensive feedback from our {niche} community, we've created this comprehensive package that includes our core {niche} service plus additional resources we've never offered before. This detailed post covers everything included in each {niche} tier, comparative analysis with other {niche} options in the market, implementation timeline, and the complete support structure available to you. Use code SOCIAL20 for 20% off our most comprehensive {niche} package with lifetime access to future updates! #Complete{niche}Solution #Extensive{niche}Resources #Exclusive{niche}Offer",
      
      "The {niche} solution you've been searching for is finally here! 🔍 Based on extensive {niche} market research and analysis of over 1,000 customer feedback points, we've developed this comprehensive approach that addresses the most common and complex {niche} challenges. This in-depth overview covers our proprietary {niche} methodology, the scientific principles supporting our {niche} approach, implementation framework, and detailed expected outcomes at various stages. Questions about how this would work for your specific {niche} situation? Drop them below for personalized insights from our expert team! #Comprehensive{niche}System #ResearchBacked{niche} #Personalized{niche}Solutions"
    ],
    "default": [
      "Sharing my complete {niche} journey with you all! This isn't just a highlight reel—it's an honest documentation of the entire {niche} process from beginning to current state, including challenges faced, {niche} resources that proved most valuable, unexpected {niche} discoveries, and measurable outcomes at each stage. The comprehensive timeline includes specific {niche} turning points and decisions that made the biggest difference. What's your experience with {niche}? I'd love to hear your detailed stories too! #{niche}FullStory #Complete{niche}Journey #TransparentSharing",
      
      "All things {niche} covered in this definitive guide! After months of {niche} research, interviews with {niche} experts, and personal experimentation, I've compiled this comprehensive resource that addresses everything from fundamental {niche} principles to advanced strategies, common {niche} misconceptions, historical context, and future {niche} trends. Each section includes actionable {niche} takeaways and additional resources for deeper exploration. Save this post if you found it helpful—it's designed to be your complete {niche} reference! #{niche}Encyclopedia #Complete{niche}Guide #SaveThis{niche}Resource",
      
      "When it comes to {niche}, these are the critical factors most people overlook! My extensive {niche} analysis reveals the hidden connections between seemingly unrelated aspects of {niche} that collectively determine success. This detailed breakdown includes {niche} historical context, comparative case studies, expert {niche} perspectives, and a framework for implementing these {niche} insights in your unique situation. Agree or disagree with these {niche} findings? Let's have an in-depth discussion in the comments! #Critical{niche}Factors #Comprehensive{niche}Analysis #Expert{niche}Insights",
      
      "{niche} content that's actually worth your time ⏱️ Unlike the surface-level information flooding your feed, this post dives deep into the nuances, underlying principles, and practical applications of {niche} knowledge. I've included extensive {niche} research notes, expert contributions, comparative {niche} analysis, and a complete implementation framework. Follow for more thoroughly researched and carefully crafted {niche} content like this! #InDepth{niche} #ResearchBacked{niche} #Comprehensive{niche}Content",
      
      "This unconventional {niche} approach might surprise you, but the research supports its effectiveness! 👀 After analyzing dozens of {niche} case studies and testing multiple {niche} methodologies, I've documented this comprehensive alternative framework that challenges conventional {niche} wisdom while delivering superior results. The detailed breakdown includes theoretical {niche} foundations, practical implementation steps, potential {niche} challenges, and expected outcomes at different stages. What would you add to this {niche} analysis? I welcome thoughtful additions to this research! #ResearchBacked{niche} #Alternative{niche}Approach #Comprehensive{niche}Framework"
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
    const description = descriptionTemplates[descIndex].replace(/{niche}/g, niche);
    
    // Generate an enhanced caption for the post - using specific niche captions when available
    let caption: string;
    
    // First check if we have specific captions for this niche and content type
    if (captionTemplatesByNiche[niche] && captionTemplatesByNiche[niche][selectedType]) {
      const nicheCaptions = captionTemplatesByNiche[niche][selectedType];
      const captionIndex = Math.floor(Math.random() * nicheCaptions.length);
      caption = nicheCaptions[captionIndex];
      // No need to replace {niche} since these are already fully written
      
      console.log(`Using niche-specific caption for "${niche}" (${selectedType})`);
    }
    // If not, fall back to the generic templates 
    else {
      const captionArray = captionTemplates[selectedType] || captionTemplates.default;
      const captionIndex = Math.floor(Math.random() * captionArray.length);
      caption = captionArray[captionIndex].replace(/{niche}/g, niche);
      
      console.log(`Using generic caption template for "${niche}" (${selectedType})`);
    }
    
    console.log(`Generated content for niche "${niche}":`, { title, selectedType, caption: caption.substring(0, 50) + '...' });
    
    // Add the content idea to the array
    ideas.push({
      id: uuidv4(),
      title,
      description: description.replace(/{niche}/g, niche),
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

