export interface CaseStudyResult {
  metric: string;
  label: string;
}

export interface CaseStudyAnnotation {
  index: number;
  tag: string;
  note: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  accentColor: string;
  summary: string;
  keyResult: string;
  keyResultLabel: string;
  problem: string;
  strategy: string[];
  execution: string[];
  contentExamples: string[];
  results: CaseStudyResult[];
  keyLearnings: string[];
  myRole: string[];
  whatNext: string[];
  annotations: CaseStudyAnnotation[];
  services?: string[];
  confidential?: boolean;
  images?: string[];
  moodboard?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "mgr",
    title: "MGR University",
    category: "Community Growth",
    accentColor: "#2E5AA7",
    summary:
      "Built a multi-platform digital community from zero for a major university.",
    keyResult: "22K+",
    keyResultLabel: "followers on flagship page",
    problem:
      "No social presence. Students had no digital hub, no community identity online, and the institution had no way to connect authentically with its audience.",
    strategy: [
      "Built a multi-page ecosystem: official page + meme hub + event page",
      "Platform-native content tailored to student culture",
      "Leveraged student UGC to drive organic growth",
      "In-jokes and shared identity to build community loyalty",
    ],
    execution: [
      "Designed all visual templates and post formats",
      "Built editorial calendar: academics, events, culture, trending formats",
      "Ran meme campaigns that spread via student WhatsApp groups",
      "Introduced recurring series for consistent engagement",
    ],
    contentExamples: [
      "Campus meme series — viral across student networks",
      "Event countdown reels with trending audio",
      "Student achievement posts — high save/share rate",
      "Cultural celebration content for festivals and milestones",
    ],
    results: [
      { metric: "22K+", label: "Official Page Followers" },
      { metric: "16K+", label: "Community Page Followers" },
      { metric: "8K+", label: "Secondary Page Followers" },
      { metric: "3x", label: "Engagement Rate vs Avg" },
    ],
    keyLearnings: [
      "Multi-page ecosystems outperform single pages for large communities",
      "Meme-native content drives the fastest organic spread in student demographics",
      "UGC amplification reduces content load while boosting authenticity",
      "Consistent visual identity builds institutional credibility",
    ],
    myRole: [
      "Led full content strategy across 3 pages",
      "Designed all visual templates and post formats",
      "Planned and executed all campaign concepts",
      "Drove organic growth with zero paid budget",
    ],
    whatNext: [
      "Launch LinkedIn presence for alumni and recruiter reach",
      "Introduce student ambassador program for decentralized UGC",
      "Build analytics dashboard to track performance by content format",
    ],
    annotations: [
      {
        index: 0,
        tag: "What worked",
        note: "Meme content drove 3x more shares than any other format",
      },
      {
        index: 2,
        tag: "Insight",
        note: "Achievement posts had the highest save rate — students bookmarked them",
      },
    ],
    images: [
      "/assets/img_8101-019d5ef4-72d8-75fd-81e0-43ad109e2bd9.jpeg",
      "/assets/img_8102-019d5ef4-7110-76c4-b5f1-3138a6b83f8e.jpeg",
      "/assets/img_8103-019d5ef4-716a-7441-a461-0415c51fa57c.jpeg",
      "/assets/img_8104-019d5ef4-71f4-7687-8b4d-ee0e07237695.jpeg",
      "/assets/img_8105-019d5ef4-7173-72bc-8bf5-981757d86a3c.jpeg",
      "/assets/img_8106-019d5ef4-715c-7031-bd63-e81311e891d1.jpeg",
    ],
  },
  {
    id: "wuri",
    title: "Wuri App",
    category: "App Growth",
    accentColor: "#86C5FF",
    summary:
      "Drove downloads and engagement for a YC-backed AI storytelling app through targeted social strategy.",
    keyResult: "50K+",
    keyResultLabel: "downloads · 4.4★ rating",
    problem:
      "YC-backed app launching into a crowded creative tools market. Needed differentiation and a content system that made the product feel personal and story-worthy.",
    strategy: [
      "Positioned Wuri as a 'creative companion', not just a tool",
      "Content centered on user-created stories and emotional connection",
      "Leveraged AI-generated visuals for premium-looking posts at low cost",
      "Community prompts to drive user submissions and organic discovery",
    ],
    execution: [
      "Built weekly story spotlights and tutorial reels",
      "Created community prompt campaigns for UGC submissions",
      "Designed editorial visual templates matching app's design language",
      "Analyzed performance data to optimize posting cadence",
    ],
    contentExamples: [
      "Story spotlight reels featuring app-generated narratives",
      "Tutorial: 'Create X story in 60 seconds' — top performing format",
      "Community prompt campaigns driving UGC submissions",
      "AI visual showcases demonstrating app capabilities",
    ],
    results: [
      { metric: "50K+", label: "App Downloads" },
      { metric: "4.4★", label: "App Store Rating" },
      { metric: "↑ 3x", label: "Monthly Active Growth" },
      { metric: "Top 10", label: "App Store Charts" },
    ],
    keyLearnings: [
      "Product-led content converts better than lifestyle content for apps",
      "AI visuals can match premium studio aesthetics at near-zero cost",
      "Community prompts create a flywheel: content → downloads → more content",
      "Consistent cadence matters more than viral spikes for sustained growth",
    ],
    myRole: [
      "Owned end-to-end social media strategy",
      "Created all visual content using AI-assisted workflows",
      "Developed tutorial series that drove app discovery",
      "Analyzed performance to optimize posting cadence",
    ],
    whatNext: [
      "Build a creator community program to scale UGC at no cost",
      "Launch referral loop: app story → share → download flow",
      "Test TikTok as secondary channel for broader Gen Z reach",
    ],
    annotations: [
      {
        index: 1,
        tag: "Experiment",
        note: "60-second tutorial format outperformed everything else by 4x — became the core format",
      },
      {
        index: 2,
        tag: "What worked",
        note: "Community prompts created a self-sustaining content loop — users became our best marketers",
      },
    ],
    images: [
      "/assets/ccc2e50c-7a08-4d8c-ac11-afd41ff3984d-019d5ee8-02bf-72b3-a8f6-6a339af474ce.jpeg",
      "/assets/693b4f68-c324-427d-8f98-19337dd73b3e-019d5ee8-02c0-7356-b8d0-96da3444fbbd.jpeg",
      "/assets/3aeed1c7-a79c-4820-bed3-44092015699c-019d5ee8-02b3-7035-86d0-cf609b8495c1.jpeg",
      "/assets/img_8205-019d5ee8-04d2-737d-8fea-7750a874880a.jpeg",
      "/assets/015d7720-1963-4aae-8fe9-9ac39f34190f-019d5efe-f4ed-7090-91ac-186449b0b8cc.jpeg",
    ],
  },
  {
    id: "global-media",
    title: "Global Media Network",
    category: "Influencer Growth",
    accentColor: "#4B8B3B",
    summary:
      "Scaled a global media network spanning influencers and web series — building cross-platform identity and loyal audience communities.",
    keyResult: "66K+",
    keyResultLabel: "followers built",
    problem:
      "Multiple influencer accounts and web series had inconsistent branding, unclear voice, and plateaued growth. Needed a cohesive cross-platform identity system.",
    strategy: [
      "Built unified content architecture — shared visual DNA, distinct voices per account",
      "Strategic (not forced) cross-promotion across accounts",
      "Platform-specific formats: Instagram for visual, YouTube for long-form, Twitter for conversation",
      "Audience segmentation to inform content type per platform",
    ],
    execution: [
      "Rebuilt visual templates and brand guidelines per account",
      "Created cross-platform editorial calendars with platform-native formats",
      "Launched web series teasers, episode clips, and community engagement formats",
      "Introduced multi-platform follow strategy through cross-account discovery content",
    ],
    contentExamples: [
      "Episode teaser reels optimized per platform format",
      "Influencer collab content driving cross-account discovery",
      "Behind-the-series content building parasocial connection",
      "Community polls and Q&As generating conversation and data",
    ],
    results: [
      { metric: "66K+", label: "Total Followers Built" },
      { metric: "Multi-Platform", label: "Cross-Platform Strategy" },
      { metric: "Unified", label: "Brand Identity System" },
      { metric: "Global", label: "Audience Reach" },
    ],
    keyLearnings: [
      "Cross-platform growth needs platform-specific content, not reposts",
      "Shared visual DNA builds recognition without uniformity",
      "Web series content has a compound effect — each episode drives discovery for previous ones",
      "Community formats (polls, Q&As) are underutilized growth drivers",
    ],
    myRole: [
      "Developed unified content architecture across all accounts",
      "Created brand guidelines and visual templates per account",
      "Planned cross-promotion strategy for multi-platform follows",
      "Managed editorial calendars for web series + influencer content",
    ],
    whatNext: [
      "Launch a membership community layer for super-fans",
      "Build performance dashboard to identify top cross-platform growth drivers",
      "Test YouTube Shorts as a discovery funnel into long-form content",
    ],
    annotations: [
      {
        index: 0,
        tag: "Insight",
        note: "Platform-specific formats performed 3x better than reposts — same content, just reformatted",
      },
      {
        index: 2,
        tag: "What worked",
        note: "Behind-the-series content built deeper bonds than the episodes themselves",
      },
    ],
  },
  {
    id: "entertainment",
    title: "Entertainment Brand",
    category: "Concerts & Events",
    accentColor: "#FFA62B",
    confidential: true,
    summary:
      "Full-spectrum social strategy for a confidential live entertainment brand — from pre-show hype to post-event community.",
    keyResult: "+120%",
    keyResultLabel: "event engagement increase",
    services: [
      "Promos",
      "Teasers",
      "Glimpse Edits",
      "Short-form Video",
      "Real-time Story Coverage",
    ],
    problem:
      "Peak interest around event dates, significant drop-off between shows. Needed a year-round engagement strategy, not just event promotion.",
    strategy: [
      "3-phase content model: pre-event hype → live coverage → post-event community",
      "Distinct emotional tone per phase: anticipation, excitement, nostalgia",
      "Visual identity system that worked across all event types",
      "Community engagement formats to retain audience between events",
    ],
    execution: [
      "Created countdown series, artist announcement templates, real-time story formats",
      "Built post-event highlight reels with audience reactions",
      "Developed reusable visual templates for brand consistency",
      "Led real-time content coverage during live events",
    ],
    contentExamples: [
      "Artist announcement drops — teaser-style visuals",
      "Countdown series: '7 days until the night you won't forget'",
      "Real-time Instagram Stories during live events",
      "Post-event recap reels with audience reactions",
    ],
    results: [
      { metric: "+120%", label: "Average Event Engagement" },
      { metric: "+80%", label: "Organic Reach per Event" },
      { metric: "3x", label: "Story Interaction During Live" },
      { metric: "+40%", label: "Repeat Audience Engagement" },
    ],
    keyLearnings: [
      "Events need content before, during, and after — not just promotional posts",
      "Emotional arc content (anticipation → experience → nostalgia) builds stronger community",
      "Real-time coverage creates FOMO that converts to future ticket sales",
      "Post-event nostalgia content generates as much engagement as pre-event hype",
    ],
    myRole: [
      "Architected the 3-phase content model from scratch",
      "Scripted and planned all pre-event countdown content",
      "Led real-time coverage strategy during live events",
      "Built reusable visual templates for brand consistency",
    ],
    whatNext: [
      "Post-event community program to reduce inter-event drop-off",
      "VIP content tier for superfans (early access, behind-scenes)",
      "Data tracking across all 3 phases to optimize future event cycles",
    ],
    annotations: [
      {
        index: 0,
        tag: "Insight",
        note: "Artist drops hit peak engagement — timing matters more than production quality",
      },
      {
        index: 3,
        tag: "What worked",
        note: "Post-event nostalgia content matched pre-event hype engagement",
      },
    ],
  },
  {
    id: "film",
    title: "Film Marketing",
    category: "Movie Campaigns",
    accentColor: "#C62828",
    confidential: true,
    summary:
      "Led reel-based, trend-first promotional campaigns for film releases — scripting hooks, timing drops, and driving organic discovery.",
    keyResult: "5x",
    keyResultLabel: "non-follower reach via reels",
    services: [
      "Trailers",
      "Teasers",
      "Promos",
      "Glimpse Edits",
      "BTS Content",
      "Short-form Video",
    ],
    problem:
      "Film marketing is won in the first 3 seconds. Needed a strategy that cut through noise, drove genuine buzz, and converted viewers into audiences — not just impressions.",
    strategy: [
      "Trend-first, reel-native approach: identify trending audio early",
      "Hook-forward scripts that tease without spoiling",
      "Content timed around cultural moments for maximum organic reach",
      "Organic discovery prioritized over paid reach",
    ],
    execution: [
      "Scripted reel concepts for each film release",
      "Built content calendar: intrigue → reveal → release → community discussion",
      "Produced BTS formats, cast spotlights, and curiosity-bait clips",
      "Coordinated with production team for exclusive access",
    ],
    contentExamples: [
      "Hook reels: 30-second teasers around trending audio",
      "Behind-the-scenes exclusives building anticipation",
      "Cast spotlights humanizing the film",
      "Post-release: 'Did you notice...?' curiosity-bait formats",
    ],
    results: [
      { metric: "5x", label: "Non-Follower Reach via Reels" },
      { metric: "+150%", label: "Engagement vs Standard Posts" },
      { metric: "2–3x", label: "Higher Watch Time (Hook Content)" },
      { metric: "Significant", label: "Pre-Release Buzz & Discovery" },
    ],
    keyLearnings: [
      "Film audiences respond to tease and mystery — over-revealing kills curiosity",
      "Trending audio dramatically amplifies reach regardless of follower count",
      "Human stories (cast, BTS) outperform pure promotional content",
      "Timing content around cultural moments significantly impacts reach",
    ],
    myRole: [
      "Scripted all reel concepts and hook structures",
      "Planned full campaign arc pre-to-post release",
      "Identified trending audio for maximum organic reach",
      "Coordinated with production for exclusive behind-scenes access",
    ],
    whatNext: [
      "Pre-release community waitlist to amplify launch day",
      "Cast-generated content series expanding reach across their audiences",
      "Content-to-ticket-sales tracking to measure true ROI",
    ],
    annotations: [
      {
        index: 0,
        tag: "Insight",
        note: "Hook reels with trending audio reached 5x more non-followers than standard posts",
      },
      {
        index: 3,
        tag: "Experiment",
        note: "'Did you notice...?' formats unexpectedly went viral — curiosity drives rewatches",
      },
    ],
  },
  {
    id: "clothing",
    title: "Thread & Tone",
    category: "Fashion & Lifestyle",
    accentColor: "#2E5AA7",
    summary:
      "Built a community-first social presence for an emerging streetwear brand scaling from local to national reach.",
    keyResult: "180K+",
    keyResultLabel: "organic reach in 6 months",
    problem:
      "Strong product, no digital identity. 2.1K followers, low engagement, inconsistent posting. Needed to position as a premium streetwear label, not a local brand.",
    strategy: [
      "3-pillar content model: product storytelling + culture content + creator partnerships",
      "Repositioned from 'discount appeal' to 'aspiration and identity'",
      "Micro-influencer partnerships (5K–50K) for authentic engagement",
      "Instagram Close Friends for exclusive early-access drops",
    ],
    execution: [
      "Developed recurring content formats: 'Fit of the Week', behind-the-design, drop countdowns",
      "Partnered with 8 micro-influencers across fashion/lifestyle niches",
      "Introduced Close Friends exclusivity to drive FOMO on limited drops",
      "Weekly analytics reviews to optimize content and cadence",
    ],
    contentExamples: [
      "'Fit of the Week' reels featuring real customers — highest engagement format",
      "Limited-drop countdown with 48hr exclusivity window",
      "Behind-the-design series: 'How this piece was made'",
      "Micro-influencer collab reels with authentic styling",
    ],
    results: [
      { metric: "2.1K → 34K", label: "Followers (16 months)" },
      { metric: "+340%", label: "Engagement Rate Growth" },
      { metric: "180K+", label: "Organic Reach (Month 6)" },
      { metric: "8x", label: "Website Traffic from Social" },
    ],
    keyLearnings: [
      "Aesthetic consistency builds premium perception faster than product quality alone",
      "Micro-influencers outperformed macro partners on authentic engagement",
      "Close Friends exclusivity created real urgency — 3x higher conversion on drops",
      "Real customer UGC outperformed branded studio shots consistently",
    ],
    myRole: [
      "Developed full brand content strategy from scratch",
      "Designed repeatable visual content framework",
      "Sourced and briefed micro-influencer partners",
      "Led analytics reviews and weekly content optimization",
    ],
    whatNext: [
      "Scale creator program to 25+ micro-influencers with structured briefs",
      "Launch TikTok with repurposed Reels for younger demographics",
      "Build paid amplification strategy for top organic posts",
    ],
    annotations: [
      {
        index: 0,
        tag: "What worked",
        note: "Real customer fits drove 4x more saves than studio shots",
      },
      {
        index: 2,
        tag: "Insight",
        note: "Close Friends drops created genuine FOMO — sold out in under 2 hours",
      },
    ],
    moodboard:
      "/assets/4e6ea6c5-3a34-4e81-a0c8-ba289aea40ef-019d5f0a-df5b-7108-82e4-8bf214b930b1.png",
  },
];
