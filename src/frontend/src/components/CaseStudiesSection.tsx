import { Link } from "@tanstack/react-router";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="stripe-warm relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      {/* Med stripe bar at top of section */}
      <div
        className="med-stripe-bar absolute top-0 left-0 right-0"
        style={{ zIndex: 1 }}
      />

      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(255,166,43,0.07) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 2 }}>
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6 reveal">
          <span className="section-label">Selected Work</span>
          <div
            style={{
              flex: 1,
              height: "1px",
              backgroundColor: "var(--border-subtle)",
            }}
          />
        </div>

        <h2
          className="reveal delay-100"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            color: "var(--text-primary)",
            fontWeight: 400,
            marginBottom: "0.75rem",
          }}
        >
          Work That Delivers Results
        </h2>

        <p
          className="reveal delay-200"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            color: "var(--text-muted)",
            marginBottom: "3.5rem",
          }}
        >
          5 brands. 5 strategies. Real outcomes.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <Link
              key={cs.id}
              to="/case-study/$id"
              params={{ id: cs.id }}
              className={`case-card reveal delay-${Math.min(i * 100, 500)} block rounded-2xl overflow-hidden`}
              style={{
                backgroundColor: "var(--bg-card)",
                boxShadow:
                  "0 2px 16px var(--shadow-card), 0 1px 4px rgba(0,0,0,0.04)",
                textDecoration: "none",
                border: "1px solid var(--border-subtle)",
              }}
              data-ocid={`case-studies.item.${i + 1}`}
            >
              {/* Accent top bar */}
              <div style={{ height: "3px", backgroundColor: cs.accentColor }} />

              <div className="p-7">
                {/* Category tag */}
                <span
                  className="inline-block mb-4 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor: `${cs.accentColor}12`,
                    color: cs.accentColor,
                    border: `1px solid ${cs.accentColor}25`,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {cs.category}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    lineHeight: 1.25,
                    marginBottom: "0.75rem",
                  }}
                >
                  {cs.title}
                </h3>

                {/* Summary */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.88rem",
                    lineHeight: 1.65,
                    color: "var(--text-muted)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {cs.summary}
                </p>

                {/* Key result */}
                <div
                  className="py-4 px-5 rounded-xl mb-5"
                  style={{ backgroundColor: "var(--bg-section-alt)" }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "1.7rem",
                      color: cs.accentColor,
                      lineHeight: 1,
                    }}
                  >
                    {cs.keyResult}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      marginTop: "4px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {cs.keyResultLabel}
                  </div>
                </div>

                {/* CTA */}
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--citrus-zest)",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  View Case Study →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
