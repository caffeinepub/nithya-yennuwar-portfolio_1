const highlightCards = [
  { title: "3+ Years", subtitle: "Growth Strategy", emoji: "✦" },
  { title: "10+ Brands", subtitle: "Built & Scaled", emoji: "◆" },
  { title: "AI-Native", subtitle: "Workflows", emoji: "✳" },
];

const aiCapabilities = [
  "AI Prompting — Content & Scripts",
  "AI Visual Video Creation",
  "AI-Assisted Creative Direction",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="stripe-textile relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      {/* Subtle decorative corner — z-index above stripe */}
      <div
        className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(134,197,255,0.12) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 2 }}>
        {/* Label */}
        <div className="flex items-center gap-4 mb-6 reveal">
          <span className="section-label">About</span>
          <div
            style={{
              flex: 1,
              height: "1px",
              backgroundColor: "var(--border-subtle)",
            }}
          />
        </div>

        {/* Editorial Name Block */}
        <div className="reveal mb-10" style={{ display: "inline-block" }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "var(--heading-accent)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              marginBottom: "0.45rem",
            }}
          >
            Nithya Yennuwar
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "0.85rem",
            }}
          >
            Social Media Growth Specialist
          </p>
          {/* Thin decorative rule */}
          <div
            style={{
              width: "56px",
              height: "2px",
              borderRadius: "2px",
              background:
                "linear-gradient(90deg, var(--amalfi-blue), var(--sea-breeze), transparent)",
            }}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Left text col */}
          <div className="lg:col-span-2">
            <h2
              className="reveal delay-100"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                color: "var(--text-primary)",
                lineHeight: 1.15,
                marginBottom: "2rem",
              }}
            >
              The Strategy Behind the Scroll
            </h2>

            <div className="flex flex-col gap-5">
              {[
                "Social Media Growth Specialist with 3+ years of cross-industry impact. From university campuses to YC-backed startups, film campaigns to global media networks, I build growth systems that perform.",
                "My work sits at the intersection of audience understanding, content strategy, and distribution systems — developing digital identities that don't just look good, but drive measurable growth.",
                "Currently scaling audience engagement for concerts, films, web series, influencer brands, and YouTube channels as an independent growth specialist — leveraging AI-powered creative workflows to deliver premium content at scale.",
                "Worked across films, events, apps, and global media — handling both public campaigns and confidential brand strategies that demanded discretion and senior-level thinking.",
              ].map((text, i) => (
                <p
                  key={text.slice(0, 30)}
                  className={`reveal delay-${(i + 2) * 100}`}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    color: "var(--text-primary)",
                    opacity: 0.85,
                  }}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Parisienne quote */}
            <blockquote
              className="reveal mt-10 pl-6"
              style={{
                borderLeft: "2px solid var(--heading-accent)",
                margin: 0,
                marginTop: "2.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'Parisienne', cursive",
                  fontSize: "clamp(1rem, 2vw, 1.3rem)",
                  color: "var(--heading-accent)",
                  lineHeight: 1.7,
                  fontStyle: "normal",
                }}
              >
                &ldquo;I build growth systems the way great stories captivate —
                with strategy, audience insight, and scroll-stopping
                content.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right stat cards + AI Toolkit */}
          <div className="flex flex-col gap-5">
            {highlightCards.map((card, i) => (
              <div
                key={card.title}
                className={`reveal delay-${(i + 2) * 100} rounded-2xl p-7 flex items-center gap-5`}
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1.5px solid var(--border-subtle)",
                  boxShadow: "0 2px 16px var(--shadow-card)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-3px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 12px 28px var(--shadow-card)";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "var(--border-strong)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 2px 16px var(--shadow-card)";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "var(--border-subtle)";
                }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--bg-section-alt)",
                    color: "var(--heading-accent)",
                    fontSize: "1.4rem",
                    fontWeight: 300,
                  }}
                >
                  {card.emoji}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "1.6rem",
                      color: "var(--text-primary)",
                      lineHeight: 1.1,
                    }}
                  >
                    {card.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.72rem",
                      color: "var(--heading-accent)",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginTop: "2px",
                    }}
                  >
                    {card.subtitle}
                  </div>
                </div>
              </div>
            ))}

            {/* AI Capabilities callout */}
            <div
              className="reveal rounded-2xl p-6"
              style={{
                backgroundColor: "var(--bg-section-alt)",
                border: "1.5px solid var(--border-subtle)",
                boxShadow: "0 2px 16px var(--shadow-card)",
              }}
            >
              <p
                className="section-label mb-4"
                style={{ color: "var(--heading-accent)" }}
              >
                AI-Powered Toolkit
              </p>
              <ul className="flex flex-col gap-3">
                {aiCapabilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "var(--heading-accent)",
                        flexShrink: 0,
                        marginTop: "0.45rem",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.88rem",
                        color: "var(--text-primary)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
