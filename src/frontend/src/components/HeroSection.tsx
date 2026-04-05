import { useEffect, useRef } from "react";

const marqueeItems = [
  "Growth Strategy",
  "Content Systems",
  "AI Workflows",
  "Audience Scaling",
  "Platform Strategy",
  "Social Media Growth",
  "Creator Partnerships",
  "Brand Positioning",
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onScroll = () => {
      const scrollY = window.scrollY;
      const bgEl = hero.querySelector(
        ".hero-bg-gradient",
      ) as HTMLElement | null;
      if (bgEl) bgEl.style.transform = `translateY(${scrollY * 0.08}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToWork = () => {
    document
      .querySelector("#case-studies")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="stripe-hero relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--bg-page) 0%, var(--bg-section-alt) 60%, var(--bg-page) 100%)",
      }}
    >
      {/* Sweep shimmer beam */}
      <div className="stripe-sweep-beam" />

      {/* Decorative background gradient blobs */}
      <div
        className="hero-bg-gradient absolute inset-0 pointer-events-none will-change-transform"
        style={{ zIndex: 0 }}
      >
        <div
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",
            width: "45vw",
            height: "45vw",
            maxWidth: "480px",
            maxHeight: "480px",
            background:
              "radial-gradient(circle, rgba(134,197,255,0.14) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "3%",
            width: "30vw",
            height: "30vw",
            maxWidth: "320px",
            maxHeight: "320px",
            background:
              "radial-gradient(circle, rgba(255,166,43,0.09) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "35%",
            width: "25vw",
            height: "25vw",
            maxWidth: "260px",
            maxHeight: "260px",
            background:
              "radial-gradient(circle, rgba(46,90,167,0.06) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* Giant decorative background letterform */}
      <div
        className="absolute pointer-events-none select-none"
        aria-hidden="true"
        style={{
          right: "-2%",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(18rem, 35vw, 42rem)",
          fontWeight: 400,
          color: "var(--heading-accent)",
          opacity: 0.033,
          lineHeight: 1,
          letterSpacing: "-0.05em",
          zIndex: 1,
          userSelect: "none",
        }}
      >
        NY
      </div>

      {/* Diagonal stripe accents — right edge */}
      <div
        className="hidden lg:block absolute right-0 top-0 bottom-0 pointer-events-none overflow-hidden"
        style={{ width: "28%", zIndex: 1 }}
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 260 700"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          role="presentation"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <rect
              key={i}
              x={i * 30}
              y={0}
              width={14}
              height={700}
              fill={
                i % 3 === 0 ? "#2E5AA7" : i % 3 === 1 ? "#86C5FF" : "#FFA62B"
              }
              opacity={0.04 + (i % 2) * 0.02}
            />
          ))}
          <line
            x1="0"
            y1="80"
            x2="260"
            y2="460"
            stroke="#2E5AA7"
            strokeWidth="1"
            opacity="0.1"
          />
          <line
            x1="0"
            y1="240"
            x2="260"
            y2="620"
            stroke="#FFA62B"
            strokeWidth="1"
            opacity="0.07"
          />
          <circle
            cx="200"
            cy="160"
            r="60"
            fill="none"
            stroke="#86C5FF"
            strokeWidth="1"
            opacity="0.12"
          />
          <circle
            cx="140"
            cy="450"
            r="36"
            fill="none"
            stroke="#2E5AA7"
            strokeWidth="1"
            opacity="0.09"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Top label */}
          <div
            className="flex items-center gap-4 mb-8"
            data-ocid="hero.section"
          >
            <span
              className="section-label"
              style={{
                color: "var(--heading-accent)",
                letterSpacing: "0.25em",
              }}
            >
              Social Media Growth Specialist
            </span>
            <div
              style={{
                width: "36px",
                height: "1px",
                backgroundColor: "var(--heading-accent)",
                opacity: 0.35,
              }}
            />
          </div>

          {/* Primary headline — typographic focus */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(2.6rem, 6.5vw, 5.4rem)",
              color: "var(--text-primary)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            I Build{" "}
            <span
              style={{ color: "var(--heading-accent)", fontStyle: "italic" }}
            >
              Growth Systems
            </span>
            <br />
            That Turn{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--citrus-zest), #ff8c00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Audiences
            </span>
            <br />
            Into Revenue
          </h1>

          {/* Gradient divider */}
          <div
            style={{
              width: "72px",
              height: "2px",
              background:
                "linear-gradient(to right, var(--amalfi-blue), var(--sea-breeze))",
              borderRadius: "2px",
              marginBottom: "1.75rem",
            }}
          />

          {/* Sub-headline */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
              lineHeight: 1.78,
              color: "var(--text-muted)",
              maxWidth: "540px",
              marginBottom: "2.25rem",
              fontWeight: 400,
            }}
          >
            Strategy-led social media growth for brands that want measurable,
            repeatable results — not just viral moments.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button
              type="button"
              onClick={scrollToWork}
              className="px-8 py-3.5 rounded-full font-semibold text-sm cta-btn"
              style={{
                backgroundColor: "var(--citrus-zest)",
                color: "#1a1a2e",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.03em",
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
              }}
              data-ocid="hero.primary_button"
            >
              View Case Studies →
            </button>
            <button
              type="button"
              onClick={scrollToContact}
              className="px-8 py-3.5 rounded-full font-semibold text-sm"
              style={{
                background: "transparent",
                border: "1.5px solid var(--heading-accent)",
                color: "var(--heading-accent)",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.03em",
                cursor: "pointer",
                fontWeight: 600,
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "var(--heading-accent)";
                (e.currentTarget as HTMLButtonElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "transparent";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--heading-accent)";
              }}
              data-ocid="hero.secondary_button"
            >
              Let&apos;s Talk
            </button>
          </div>

          {/* Authority signals */}
          <div
            className="flex flex-wrap gap-x-6 gap-y-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(0.68rem, 1.2vw, 0.78rem)",
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
            }}
          >
            {[
              "Worked across films, events, apps & global media",
              "Public + Confidential campaigns",
              "3+ Years · 10+ Brands",
            ].map((signal, i) => (
              <span key={signal} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span
                    style={{
                      width: "3px",
                      height: "3px",
                      borderRadius: "50%",
                      backgroundColor: "var(--citrus-zest)",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                )}
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee ticker strip */}
      <div
        className="relative z-10 w-full overflow-hidden py-3.5 mt-auto"
        style={{
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
          backgroundColor: "var(--bg-card)",
          opacity: 0.9,
          backdropFilter: "blur(8px)",
        }}
        aria-hidden="true"
      >
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              // biome-ignore lint/suspicious/noArrayIndexKey: static decorative list
              key={i}
              className="marquee-item"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color:
                  i % 3 === 0
                    ? "var(--heading-accent)"
                    : i % 3 === 1
                      ? "var(--text-muted)"
                      : "var(--citrus-zest)",
                whiteSpace: "nowrap",
                padding: "0 2rem",
              }}
            >
              {item}
              <span
                style={{
                  marginLeft: "2rem",
                  color: "var(--sea-breeze)",
                  opacity: 0.7,
                }}
              >
                ·
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Mediterranean stripe bar — bottom */}
      <div className="med-stripe-bar" style={{ zIndex: 10 }} />

      {/* Scroll indicator */}
      <div
        className="scroll-indicator"
        style={{
          position: "absolute",
          bottom: "4.5rem",
          right: "2.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 11,
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.6rem",
            color: "var(--text-muted)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, var(--heading-accent), transparent)",
            opacity: 0.4,
          }}
        />
      </div>
    </section>
  );
}
