const steps = [
  {
    number: "01",
    title: "Audience Insights",
    annotation: "Psychographic mapping + platform-native behavior",
    icon: "🎯",
    color: "#2E5AA7",
  },
  {
    number: "02",
    title: "Content Frameworks",
    annotation: "Modular frameworks, not one-offs",
    icon: "🗂️",
    color: "#86C5FF",
  },
  {
    number: "03",
    title: "Distribution Engine",
    annotation: "Organic + paid synergy",
    icon: "📡",
    color: "#FFA62B",
  },
  {
    number: "04",
    title: "Optimization Loop",
    annotation: "Weekly sprints, data-led iterations",
    icon: "🔁",
    color: "#4B8B3B",
  },
  {
    number: "05",
    title: "Scale & Systematize",
    annotation: "Systems that grow without linear effort",
    icon: "🚀",
    color: "#C62828",
  },
];

export default function HowIWorkSection() {
  return (
    <section
      id="how-i-work"
      className="stripe-warm relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-section-alt)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        aria-hidden="true"
        style={{
          width: "360px",
          height: "360px",
          background:
            "radial-gradient(circle, rgba(134,197,255,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        aria-hidden="true"
        style={{
          width: "280px",
          height: "280px",
          background:
            "radial-gradient(circle, rgba(255,166,43,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />

      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 2 }}>
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6 reveal">
          <span
            className="section-label"
            style={{ color: "var(--heading-accent)" }}
          >
            Process
          </span>
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
          How I Work
        </h2>

        <p
          className="mb-16 reveal delay-200"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "var(--text-muted)",
            fontSize: "1rem",
            maxWidth: "540px",
          }}
        >
          A 5-step framework that turns audience data into repeatable growth
          systems — not one-off campaigns.
        </p>

        {/* Steps — horizontal desktop, vertical mobile */}
        <div className="how-i-work-grid">
          {steps.map((step, i) => (
            <div key={step.number} className="how-i-work-step-wrapper">
              {/* Step card */}
              <div
                className={`how-i-work-step reveal delay-${Math.min(i * 150 + 100, 700)}`}
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: `1.5px solid ${step.color}20`,
                  boxShadow: "0 4px 20px var(--shadow-card)",
                }}
                data-ocid={`how-i-work.item.${i + 1}`}
              >
                {/* Step number */}
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: step.color,
                    marginBottom: "0.75rem",
                    opacity: 0.85,
                  }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: `${step.color}12`,
                    border: `1.5px solid ${step.color}25`,
                    fontSize: "1.35rem",
                  }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "1.05rem",
                    fontWeight: 400,
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem",
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>

                {/* Annotation */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    fontStyle: "italic",
                    color: "var(--text-muted)",
                    lineHeight: 1.55,
                  }}
                >
                  {step.annotation}
                </p>

                {/* Bottom accent */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(to right, ${step.color}, transparent)`,
                    borderRadius: "0 0 1rem 1rem",
                    opacity: 0.5,
                  }}
                />
              </div>

              {/* Arrow connector (between steps, not after last) */}
              {i < steps.length - 1 && (
                <div className="how-i-work-arrow" aria-hidden="true">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path
                      d="M6 14h16M16 8l6 6-6 6"
                      stroke="var(--heading-accent)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.35"
                      className="arrow-horizontal"
                    />
                    <path
                      d="M14 6v16M8 16l6 6 6-6"
                      stroke="var(--heading-accent)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.35"
                      className="arrow-vertical"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-12 text-center reveal delay-700">
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "var(--heading-accent)",
              opacity: 0.75,
            }}
          >
            Every campaign starts with insight. Every system ends with scale.
          </p>
        </div>
      </div>
    </section>
  );
}
