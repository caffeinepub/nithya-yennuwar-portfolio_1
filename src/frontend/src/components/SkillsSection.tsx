const skillCategories = [
  {
    category: "Social Media Strategy",
    color: "#2E5AA7",
    icon: "📈",
    items: [
      { name: "Growth Strategy", detail: "Audience → Revenue" },
      { name: "Content Systems", detail: "Modular, scalable frameworks" },
      { name: "Community Building", detail: "Engagement & retention" },
      {
        name: "Platform-Native Content",
        detail: "Instagram, YouTube, LinkedIn",
      },
      { name: "Campaign Planning", detail: "End-to-end lifecycle" },
    ],
  },
  {
    category: "Analytics & Insights",
    color: "#1A3A6B",
    icon: "🔍",
    items: [
      { name: "Meta Business Suite", detail: "Ads + analytics" },
      { name: "Google Analytics", detail: "Web performance" },
      { name: "Looker Studio", detail: "Custom dashboards" },
      { name: "Sprout Social", detail: "Social listening" },
      { name: "Data-Led Reporting", detail: "Weekly sprints" },
    ],
  },
  {
    category: "Video Editing",
    color: "#86C5FF",
    icon: "🎬",
    items: [
      { name: "Reels & Short-form", detail: "Hook-first formats" },
      { name: "Trailers & Teasers", detail: "Film & event promos" },
      { name: "Glimpse Edits", detail: "Quick impact cuts" },
      { name: "AI-Enhanced Video", detail: "Runway ML, HeyGen" },
      { name: "CapCut · Premiere · DaVinci", detail: "Full editing stack" },
    ],
  },
  {
    category: "Content & Creation",
    color: "#FFA62B",
    icon: "🎨",
    items: [
      { name: "Canva Pro", detail: "Brand-consistent design" },
      { name: "Figma", detail: "UI & deck design" },
      { name: "Adobe Express", detail: "Rapid visual production" },
      { name: "Visual Branding", detail: "Identity systems" },
      { name: "Campaign Creatives", detail: "Multi-format assets" },
    ],
  },
  {
    category: "AI-Powered Workflows",
    color: "#4B8B3B",
    icon: "🤖",
    items: [
      { name: "AI Prompting", detail: "Content & scripts" },
      { name: "Midjourney", detail: "AI visual creation" },
      { name: "Runway ML", detail: "AI video generation" },
      { name: "HeyGen", detail: "AI avatar & voiceover" },
      { name: "Make.com + Metricool", detail: "Automation workflows" },
    ],
  },
  {
    category: "Automation & Tools",
    color: "#6B4FAD",
    icon: "⚡",
    items: [
      { name: "Buffer & Hootsuite", detail: "Scheduling & publishing" },
      { name: "Notion", detail: "Content calendars" },
      { name: "ChatGPT Advanced", detail: "AI-first content creation" },
      { name: "Claude & Jasper", detail: "Long-form content AI" },
      { name: "Make.com", detail: "Automated pipelines" },
    ],
  },
];

// Split into two rows for opposite-direction scrolling
const row1 = skillCategories.slice(0, 3);
const row2 = skillCategories.slice(3);

function SkillCard({
  skill,
  categoryColor,
  categoryLabel,
  categoryIcon,
  index,
}: {
  skill: { name: string; detail: string };
  categoryColor: string;
  categoryLabel: string;
  categoryIcon: string;
  index: number;
}) {
  return (
    <div
      className="skill-card flex-shrink-0 rounded-xl flex flex-col"
      data-ocid={`skills.item.${index}`}
      style={{
        width: "178px",
        minHeight: "162px",
        backgroundColor: "var(--bg-card)",
        borderLeft: `3.5px solid ${categoryColor}`,
        boxShadow: "0 3px 16px var(--shadow-card), 0 1px 4px rgba(0,0,0,0.04)",
        padding: "1.1rem 1rem 0.9rem",
        gap: "0.3rem",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-6px) scale(1.02)";
        el.style.boxShadow = `0 18px 36px ${categoryColor}22, 0 4px 12px rgba(0,0,0,0.07)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "";
        el.style.boxShadow =
          "0 3px 16px var(--shadow-card), 0 1px 4px rgba(0,0,0,0.04)";
      }}
    >
      {/* Icon */}
      <div
        style={{ fontSize: "1.6rem", lineHeight: 1, marginBottom: "0.45rem" }}
      >
        {categoryIcon}
      </div>

      {/* Skill Name */}
      <h4
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "0.9rem",
          fontWeight: 700,
          color: "var(--text-primary)",
          lineHeight: 1.3,
          marginBottom: "0.2rem",
        }}
      >
        {skill.name}
      </h4>

      {/* Detail */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.72rem",
          color: "var(--text-muted)",
          lineHeight: 1.45,
          flexGrow: 1,
        }}
      >
        {skill.detail}
      </p>

      {/* Category pill */}
      <div
        style={{
          marginTop: "auto",
          paddingTop: "0.6rem",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: categoryColor,
            backgroundColor: `${categoryColor}12`,
            borderRadius: "999px",
            padding: "2px 8px",
            border: `1px solid ${categoryColor}28`,
          }}
        >
          {categoryLabel}
        </span>
      </div>
    </div>
  );
}

function CarouselRow({
  categories,
  direction,
}: {
  categories: typeof skillCategories;
  direction: "left" | "right";
}) {
  // Flatten all skills from these categories with their metadata
  const allCards = categories.flatMap((cat) =>
    cat.items.map((skill, i) => ({
      skill,
      categoryColor: cat.color,
      categoryLabel: cat.category,
      categoryIcon: cat.icon,
      key: `${cat.category}-${i}`,
    })),
  );

  const animationName =
    direction === "left" ? "skills-scroll-left" : "skills-scroll-right";

  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        className="skills-carousel-track"
        style={{
          display: "flex",
          gap: "16px",
          width: "max-content",
          animationName,
          animationDuration: "42s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: "running",
          willChange: "transform",
        }}
      >
        {/* Render twice for seamless infinite loop */}
        {[...allCards, ...allCards].map((item, idx) => (
          <SkillCard
            key={`${item.key}-${idx}`}
            skill={item.skill}
            categoryColor={item.categoryColor}
            categoryLabel={item.categoryLabel}
            categoryIcon={item.categoryIcon}
            index={idx + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="stripe-hero relative py-28 overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      {/* Keyframe styles injected inline */}
      <style>{`
        @keyframes skills-scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes skills-scroll-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .skills-carousel-track {
            animation-play-state: paused !important;
          }
        }
        .skills-section-wrap:hover .skills-carousel-track {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at bottom left, rgba(46,90,167,0.07) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative" style={{ zIndex: 2 }}>
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6 reveal">
          <span className="section-label">Skills &amp; Tools</span>
          <div
            style={{
              flex: 1,
              height: "1px",
              backgroundColor: "var(--border-subtle)",
            }}
          />
        </div>

        <h2
          className="mb-3 reveal delay-100"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            color: "var(--text-primary)",
            fontWeight: 400,
          }}
        >
          The Toolkit
        </h2>

        <p
          className="mb-12 reveal delay-200"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "var(--text-muted)",
            fontSize: "1rem",
          }}
        >
          Platforms, tools, and AI-powered systems I use to build and grow.
        </p>

        {/* AI Callout Banner */}
        <div
          className="reveal delay-200 mb-14 rounded-2xl p-6 md:p-8"
          style={{
            background:
              "linear-gradient(135deg, var(--bg-section-alt) 0%, rgba(134,197,255,0.08) 100%)",
            border: "1.5px solid var(--border-subtle)",
            boxShadow: "0 4px 24px var(--shadow-card)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex items-center gap-3 flex-shrink-0">
              <span style={{ fontSize: "2rem" }}>🤖</span>
              <div>
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "1.3rem",
                    color: "var(--text-primary)",
                    marginBottom: "2px",
                  }}
                >
                  AI-Augmented, Human-Led
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "var(--heading-accent)",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  AI Capabilities
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "AI Prompting for Content & Scripts", emoji: "✍️" },
                { label: "AI Visual & Video Creation", emoji: "🎬" },
                { label: "Ideation → Draft → Refine → Publish", emoji: "🔄" },
              ].map((cap) => (
                <span
                  key={cap.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "var(--border-subtle)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border-strong)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <span>{cap.emoji}</span>
                  {cap.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full-width carousel — outside max-w container for edge-to-edge */}
      <div className="skills-section-wrap reveal delay-300">
        <div className="flex flex-col gap-5">
          {/* Row 1: left → right */}
          <CarouselRow categories={row1} direction="left" />
          {/* Row 2: right → left */}
          <CarouselRow categories={row2} direction="right" />
        </div>
      </div>

      {/* Category legend below carousel */}
      <div
        className="max-w-6xl mx-auto px-6 mt-10 reveal delay-400"
        style={{ zIndex: 2 }}
      >
        <div className="flex flex-wrap gap-3 justify-center">
          {skillCategories.map((cat) => (
            <span
              key={cat.category}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: cat.color,
                backgroundColor: `${cat.color}10`,
                border: `1.5px solid ${cat.color}28`,
              }}
            >
              <span style={{ fontSize: "0.85rem" }}>{cat.icon}</span>
              {cat.category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
