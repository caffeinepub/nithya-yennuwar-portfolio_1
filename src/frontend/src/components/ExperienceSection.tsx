const experiences = [
  {
    id: "freelance",
    period: "Dec 2024 – Present",
    role: "Freelance Social Media Growth Specialist",
    company: "",
    description:
      "Built end-to-end growth systems for concerts, films, web series, influencer brands, and YouTube channels. Designed platform-native content frameworks and developed AI-powered visual workflows for premium content at scale.",
    badge: "Current",
    badgeColor: "#2E5AA7",
  },
  {
    id: "wuri",
    period: "May 2024 – May 2025",
    role: "Social Media & Growth Specialist",
    company: "Wuri (YC-backed AI app)",
    description:
      "Developed full social media growth strategy for a YC-backed AI app. Designed tutorial-led content systems that drove 50K+ downloads and scaled monthly active growth 3x.",
    badge: "YC-Backed",
    badgeColor: "#FFA62B",
  },
  {
    id: "gaming",
    period: "2024 · 8 months",
    role: "Social Media Growth Strategist",
    company: "Gaming Agency",
    description:
      "Architected brand identity and engagement-driven content frameworks for gaming-focused accounts. Scaled audience engagement through platform-native formats and community-first strategy.",
    badge: "Gaming",
    badgeColor: "#4B8B3B",
  },
  {
    id: "krita",
    period: "2024 · 4 months",
    role: "Social Media & Website Handler",
    company: "Krita Technologies",
    description:
      "Developed integrated social media + web presence strategy for a technology brand. Built cohesive brand voice and digital identity system across all touchpoints.",
    badge: "Tech",
    badgeColor: "#86C5FF",
  },
  {
    id: "mgr",
    period: "2022 – 2024",
    role: "Campus Social Media Growth Strategist",
    company: "Dr. MGR University",
    description:
      "Built a multi-page social media ecosystem from zero — scaling flagship page to 22K+ followers. Designed content architecture covering academics, events, culture, and community with zero paid budget.",
    badge: "Education",
    badgeColor: "#C62828",
  },
  {
    id: "precollege",
    period: "Pre-College",
    role: "Event & Photography Coordination",
    company: "",
    description:
      "Developed foundational visual storytelling skills through event coordination and photography — building the eye for timing, narrative, and audience reaction that underpins all current work.",
    badge: "Origins",
    badgeColor: "#6B7280",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="stripe-blue relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-section-alt)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--border-subtle) 50%, transparent)",
          zIndex: 1,
        }}
      />

      <div className="max-w-5xl mx-auto relative" style={{ zIndex: 2 }}>
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6 reveal">
          <span className="section-label">Experience</span>
          <div
            style={{
              flex: 1,
              height: "1px",
              backgroundColor: "var(--border-strong)",
            }}
          />
        </div>

        <h2
          className="mb-16 reveal delay-100"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            color: "var(--text-primary)",
            fontWeight: 400,
          }}
        >
          The Journey
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 hidden md:block"
            style={{
              left: "0",
              width: "2px",
              background:
                "linear-gradient(to bottom, transparent, var(--amalfi-blue) 10%, var(--sea-breeze) 90%, transparent)",
              opacity: 0.3,
            }}
          />

          <div className="flex flex-col gap-8 md:pl-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className={`timeline-card reveal delay-${Math.min(i * 100, 500)} rounded-xl p-7 relative`}
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderLeft: `3px solid ${exp.badgeColor}`,
                  boxShadow:
                    "0 2px 16px var(--shadow-card), 0 1px 4px rgba(0,0,0,0.03)",
                }}
                data-ocid={`experience.item.${i + 1}`}
              >
                {/* Timeline dot */}
                <div
                  className="hidden md:block absolute w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: exp.badgeColor,
                    left: "-2.75rem",
                    top: "1.75rem",
                    boxShadow: `0 0 0 3px ${exp.badgeColor}20`,
                  }}
                />

                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: exp.badgeColor,
                      backgroundColor: `${exp.badgeColor}12`,
                      border: `1px solid ${exp.badgeColor}30`,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {exp.badge}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: exp.company ? "4px" : "8px",
                  }}
                >
                  {exp.role}
                </h3>

                {exp.company && (
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      color: "var(--heading-accent)",
                      fontWeight: 500,
                    }}
                  >
                    {exp.company}
                  </p>
                )}

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.92rem",
                    lineHeight: 1.7,
                    color: "var(--text-muted)",
                  }}
                >
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
