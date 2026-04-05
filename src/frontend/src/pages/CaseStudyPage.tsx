import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Images,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { caseStudies } from "../data/caseStudies";

const annotationTagColors: Record<string, string> = {
  Insight: "#2E5AA7",
  Experiment: "#FFA62B",
  "What worked": "#4B8B3B",
};

export default function CaseStudyPage() {
  const { id } = useParams({ from: "/case-study/$id" });
  const cs = caseStudies.find((c) => c.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCarouselIndex(0);
  }, [id]);

  // SEO meta tag injection
  useEffect(() => {
    if (!cs) return;
    const originalTitle = document.title;
    document.title = `${cs.title} — Nithya Yennuwar Portfolio`;

    const setMeta = (
      selector: string,
      attr: string,
      value: string,
      isOg = false,
    ) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        if (isOg) {
          el.setAttribute("property", attr);
        } else {
          el.setAttribute("name", attr);
        }
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    const description = `${cs.summary} — ${cs.keyResult} ${cs.keyResultLabel}`;
    setMeta('meta[name="description"]', "description", description);
    setMeta(
      'meta[property="og:title"]',
      "og:title",
      `${cs.title} — Nithya Yennuwar Portfolio`,
      true,
    );
    setMeta(
      'meta[property="og:description"]',
      "og:description",
      description,
      true,
    );
    setMeta('meta[property="og:type"]', "og:type", "article", true);
    setMeta('meta[name="twitter:card"]', "twitter:card", "summary");
    setMeta(
      'meta[name="twitter:title"]',
      "twitter:title",
      `${cs.title} — Nithya Yennuwar Portfolio`,
    );
    setMeta(
      'meta[name="twitter:description"]',
      "twitter:description",
      description,
    );

    return () => {
      document.title = originalTitle;
    };
  }, [cs]);

  if (!cs) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ backgroundColor: "var(--bg-page)" }}
      >
        <Navigation isCaseStudy={true} />
        <div className="text-center px-6 py-32">
          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "2.5rem",
              color: "var(--text-primary)",
            }}
          >
            Case study not found
          </h1>
          <Link
            to="/"
            className="mt-8 inline-block"
            style={{
              color: "var(--heading-accent)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = caseStudies.findIndex((c) => c.id === id);
  const prevCase = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextCase =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : null;

  return (
    <div
      className="min-h-screen page-enter"
      style={{
        backgroundColor: "var(--bg-page)",
        color: "var(--text-primary)",
      }}
    >
      <Navigation isCaseStudy={true} />

      {/* Hero Band */}
      <section
        className="pt-32 pb-20 px-6 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${cs.accentColor}10 0%, var(--bg-section-alt) 60%, var(--bg-page) 100%)`,
          borderBottom: `3px solid ${cs.accentColor}20`,
        }}
      >
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors duration-200"
            style={{
              color: "var(--text-muted)",
              fontFamily: "'Inter', sans-serif",
              textDecoration: "none",
            }}
            data-ocid="case-study.link"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>

          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{
              backgroundColor: `${cs.accentColor}14`,
              color: cs.accentColor,
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              border: `1px solid ${cs.accentColor}28`,
            }}
          >
            {cs.category}
          </div>

          {/* Confidential badge */}
          {cs.confidential && (
            <div
              className="inline-block ml-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{
                backgroundColor: "rgba(198,40,40,0.08)",
                color: "#C62828",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "1px solid rgba(198,40,40,0.2)",
              }}
            >
              🔒 Client Confidential
            </div>
          )}

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            {cs.title}
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "var(--text-muted)",
              maxWidth: "560px",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}
          >
            {cs.summary}
          </p>

          {/* Services tags (video editing etc.) */}
          {cs.services && cs.services.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  alignSelf: "center",
                  marginRight: "4px",
                }}
              >
                Services:
              </span>
              {cs.services.map((svc) => (
                <span
                  key={svc}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: `${cs.accentColor}10`,
                    color: cs.accentColor,
                    border: `1px solid ${cs.accentColor}25`,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {svc}
                </span>
              ))}
            </div>
          )}

          {/* Key metrics bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {cs.results.map((r, i) => (
              <div
                key={r.label}
                className="rounded-xl p-4 text-center metric-pulse"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: `1px solid ${cs.accentColor}18`,
                  animationDelay: `${i * 0.1}s`,
                  backdropFilter: "blur(8px)",
                }}
                data-ocid={`case-study.item.${i + 1}`}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                    fontWeight: 700,
                    color: cs.accentColor,
                    lineHeight: 1.1,
                    marginBottom: "4px",
                  }}
                >
                  {r.metric}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.65rem",
                    color: "var(--text-muted)",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-12">
        {/* Problem */}
        <article
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "0 4px 20px var(--shadow-card)",
          }}
        >
          <div
            className="px-8 py-5 flex items-center gap-3"
            style={{
              borderBottom: "1px solid var(--border-subtle)",
              background: "var(--bg-section-alt)",
            }}
          >
            <Target size={18} style={{ color: cs.accentColor }} />
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "1.3rem",
                color: "var(--text-primary)",
                fontWeight: 400,
              }}
            >
              The Problem
            </h2>
          </div>
          <div className="px-8 py-8">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "var(--text-primary)",
              }}
            >
              {cs.problem}
            </p>
          </div>
        </article>

        {/* Strategy */}
        <article
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "0 4px 20px var(--shadow-card)",
          }}
        >
          <div
            className="px-8 py-5 flex items-center gap-3"
            style={{
              borderBottom: "1px solid var(--border-subtle)",
              background: "var(--bg-section-alt)",
            }}
          >
            <Sparkles size={18} style={{ color: cs.accentColor }} />
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "1.3rem",
                color: "var(--text-primary)",
                fontWeight: 400,
              }}
            >
              The Strategy
            </h2>
          </div>
          <div className="px-8 py-8">
            <ul className="flex flex-col gap-3">
              {cs.strategy.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full"
                    style={{ backgroundColor: cs.accentColor }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      color: "var(--text-primary)",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Execution */}
        <article
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "0 4px 20px var(--shadow-card)",
          }}
        >
          <div
            className="px-8 py-5"
            style={{
              borderBottom: "1px solid var(--border-subtle)",
              background: "var(--bg-section-alt)",
            }}
          >
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "1.3rem",
                color: "var(--text-primary)",
                fontWeight: 400,
              }}
            >
              The Execution
            </h2>
          </div>
          <div className="px-8 py-8">
            <ul className="flex flex-col gap-3">
              {cs.execution.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full"
                    style={{ backgroundColor: cs.accentColor }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      color: "var(--text-primary)",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Content Examples */}
        <article
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "0 4px 20px var(--shadow-card)",
          }}
        >
          <div
            className="px-8 py-5"
            style={{
              borderBottom: "1px solid var(--border-subtle)",
              background: "var(--bg-section-alt)",
            }}
          >
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "1.3rem",
                color: "var(--text-primary)",
                fontWeight: 400,
              }}
            >
              Content Examples
            </h2>
          </div>
          <div className="px-8 py-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {cs.contentExamples.map((example, idx) => {
                const annotation = cs.annotations.find((a) => a.index === idx);
                return (
                  <div
                    key={example}
                    className="relative p-5 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${cs.accentColor}06 0%, rgba(248,230,160,0.08) 100%)`,
                      border: `1px solid ${cs.accentColor}18`,
                      backgroundColor: "var(--bg-card)",
                    }}
                    data-ocid={`case-study.item.${idx + 1}`}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        style={{
                          color: cs.accentColor,
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      />
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.9rem",
                          lineHeight: 1.65,
                          color: "var(--text-primary)",
                        }}
                      >
                        {example}
                      </p>
                    </div>
                    {annotation && (
                      <div
                        className="mt-3 flex items-start gap-2 rounded-lg px-3 py-2"
                        style={{
                          backgroundColor: `${annotationTagColors[annotation.tag] ?? cs.accentColor}0C`,
                          border: `1px solid ${annotationTagColors[annotation.tag] ?? cs.accentColor}20`,
                        }}
                      >
                        <span
                          className="px-2 py-0.5 rounded text-xs font-bold flex-shrink-0"
                          style={{
                            backgroundColor: `${annotationTagColors[annotation.tag] ?? cs.accentColor}18`,
                            color:
                              annotationTagColors[annotation.tag] ??
                              cs.accentColor,
                            fontFamily: "'Inter', sans-serif",
                            letterSpacing: "0.08em",
                          }}
                        >
                          {annotation.tag}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.78rem",
                            color: "var(--text-muted)",
                            fontStyle: "italic",
                            lineHeight: 1.5,
                          }}
                        >
                          {annotation.note}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </article>

        {/* Mood Board */}
        {cs.moodboard && (
          <article
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              boxShadow: "0 4px 20px var(--shadow-card)",
            }}
          >
            <div
              className="px-8 py-5"
              style={{
                borderBottom: "1px solid var(--border-subtle)",
                background: "var(--bg-section-alt)",
              }}
            >
              <h2
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "1.3rem",
                  color: "var(--text-primary)",
                  fontWeight: 400,
                }}
              >
                Mood Board
              </h2>
            </div>
            <div className="p-6">
              <button
                type="button"
                className="w-full block cursor-zoom-in focus:outline-none"
                onClick={() => setSelectedImage(cs.moodboard!)}
                data-ocid="case-study.canvas_target"
                aria-label="View mood board full screen"
              >
                <img
                  src={cs.moodboard}
                  alt={`${cs.title} mood board`}
                  className="w-full rounded-xl"
                  style={{
                    objectFit: "contain",
                    border: `1px solid ${cs.accentColor}20`,
                    display: "block",
                  }}
                />
              </button>
            </div>
          </article>
        )}

        {/* Social Storytelling Gallery — Horizontal Swipe Carousel */}
        {cs.images && cs.images.length > 0 && (
          <article
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              boxShadow: "0 4px 20px var(--shadow-card)",
            }}
          >
            <div
              className="px-8 py-5 flex items-center gap-3"
              style={{
                borderBottom: "1px solid var(--border-subtle)",
                background: "var(--bg-section-alt)",
              }}
            >
              <Images size={18} style={{ color: cs.accentColor }} />
              <h2
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "1.3rem",
                  color: "var(--text-primary)",
                  fontWeight: 400,
                }}
              >
                Social Storytelling
              </h2>
            </div>
            <div className="px-6 py-8 sm:px-8">
              {/* Carousel Wrapper */}
              <div
                className="relative select-none"
                onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
                onTouchEnd={(e) => {
                  if (touchStartX === null) return;
                  const diff = touchStartX - e.changedTouches[0].clientX;
                  if (Math.abs(diff) > 50) {
                    if (diff > 0) {
                      setCarouselIndex((prev) =>
                        Math.min(prev + 1, cs.images!.length - 1),
                      );
                    } else {
                      setCarouselIndex((prev) => Math.max(prev - 1, 0));
                    }
                  }
                  setTouchStartX(null);
                }}
              >
                {/* Image */}
                <button
                  type="button"
                  className="block w-full rounded-xl overflow-hidden cursor-zoom-in relative group"
                  style={{
                    border: `1.5px solid ${cs.accentColor}35`,
                    padding: 0,
                    background: "none",
                  }}
                  data-ocid="case-study.canvas_target"
                  onClick={() => setSelectedImage(cs.images![carouselIndex])}
                >
                  <img
                    key={cs.images[carouselIndex]}
                    src={cs.images[carouselIndex]}
                    alt={`Campaign slide ${carouselIndex + 1} of ${cs.images!.length}`}
                    className="w-full object-cover"
                    style={{
                      maxHeight: "420px",
                      aspectRatio: "16/9",
                      display: "block",
                      transition: "opacity 0.35s ease",
                    }}
                    loading="lazy"
                  />
                  {/* Click to enlarge hint */}
                  <span
                    className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs pointer-events-none opacity-0 group-hover:opacity-100"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.55)",
                      color: "#fff",
                      fontFamily: "'JetBrains Mono', monospace",
                      transition: "opacity 0.25s ease",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    ⤢ Click to enlarge
                  </span>
                </button>

                {/* Prev Arrow */}
                {carouselIndex > 0 && (
                  <button
                    type="button"
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full z-10"
                    style={{
                      width: "clamp(36px, 5vw, 48px)",
                      height: "clamp(36px, 5vw, 48px)",
                      backgroundColor: "var(--bg-card)",
                      boxShadow: "0 2px 12px var(--shadow-card)",
                      border: `1px solid ${cs.accentColor}25`,
                      cursor: "pointer",
                    }}
                    data-ocid="case-study.pagination_prev"
                    onClick={() =>
                      setCarouselIndex((prev) => Math.max(prev - 1, 0))
                    }
                    aria-label="Previous image"
                  >
                    <ArrowLeft
                      style={{
                        color: cs.accentColor,
                        width: "clamp(14px, 2vw, 18px)",
                        height: "clamp(14px, 2vw, 18px)",
                      }}
                    />
                  </button>
                )}

                {/* Next Arrow */}
                {carouselIndex < cs.images.length - 1 && (
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full z-10"
                    style={{
                      width: "clamp(36px, 5vw, 48px)",
                      height: "clamp(36px, 5vw, 48px)",
                      backgroundColor: "var(--bg-card)",
                      boxShadow: "0 2px 12px var(--shadow-card)",
                      border: `1px solid ${cs.accentColor}25`,
                      cursor: "pointer",
                    }}
                    data-ocid="case-study.pagination_next"
                    onClick={() =>
                      setCarouselIndex((prev) =>
                        Math.min(prev + 1, cs.images!.length - 1),
                      )
                    }
                    aria-label="Next image"
                  >
                    <ArrowRight
                      style={{
                        color: cs.accentColor,
                        width: "clamp(14px, 2vw, 18px)",
                        height: "clamp(14px, 2vw, 18px)",
                      }}
                    />
                  </button>
                )}
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {cs.images.map((src, idx) => (
                  <button
                    key={src}
                    type="button"
                    aria-label={`Go to image ${idx + 1}`}
                    data-ocid={`case-study.item.${idx + 1}`}
                    onClick={() => setCarouselIndex(idx)}
                    style={{
                      width: idx === carouselIndex ? "24px" : "10px",
                      height: "10px",
                      borderRadius: "99px",
                      border: `2px solid ${cs.accentColor}`,
                      backgroundColor:
                        idx === carouselIndex ? cs.accentColor : "transparent",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>

              {/* Counter */}
              <p
                className="text-center mt-2"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.05em",
                }}
              >
                {carouselIndex + 1} / {cs.images.length}
              </p>
            </div>
          </article>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
            onClick={() => setSelectedImage(null)}
            onKeyDown={(e) => e.key === "Escape" && setSelectedImage(null)}
            tabIndex={-1}
            data-ocid="case-study.modal"
          >
            <button
              type="button"
              className="absolute top-4 right-4 flex items-center justify-center rounded-full w-10 h-10"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              data-ocid="case-study.close_button"
            >
              <X size={20} />
            </button>
            <img
              src={selectedImage}
              alt="Campaign full view"
              className="max-h-screen rounded-xl"
              style={{
                maxWidth: "56rem",
                width: "100%",
                objectFit: "contain",
                boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
              }}
            />
          </div>
        )}

        {/* Results */}
        <article
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "var(--bg-card)",
            border: `2px solid ${cs.accentColor}25`,
            boxShadow: `0 8px 32px ${cs.accentColor}10`,
          }}
        >
          <div
            className="px-8 py-5"
            style={{
              borderBottom: `1px solid ${cs.accentColor}15`,
              background: `linear-gradient(135deg, ${cs.accentColor}08, rgba(248,230,160,0.12))`,
            }}
          >
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "1.3rem",
                color: "var(--text-primary)",
                fontWeight: 400,
              }}
            >
              The Results
            </h2>
          </div>
          <div className="px-8 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {cs.results.map((r, i) => (
                <div
                  key={r.label}
                  className="text-center p-4 rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${cs.accentColor}0A, ${cs.accentColor}05)`,
                    border: `1px solid ${cs.accentColor}18`,
                  }}
                  data-ocid={`case-study.item.${i + 1}`}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
                      fontWeight: 800,
                      color: cs.accentColor,
                      lineHeight: 1.0,
                      marginBottom: "6px",
                    }}
                  >
                    {r.metric}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.65rem",
                      color: "var(--text-muted)",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      lineHeight: 1.4,
                    }}
                  >
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* My Role */}
        <article
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "0 4px 20px var(--shadow-card)",
          }}
        >
          <div
            className="px-8 py-5"
            style={{
              borderBottom: "1px solid var(--border-subtle)",
              background: "var(--bg-section-alt)",
            }}
          >
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "1.3rem",
                color: "var(--text-primary)",
                fontWeight: 400,
              }}
            >
              My Role
            </h2>
          </div>
          <div className="px-8 py-8">
            <div className="flex flex-wrap gap-2.5">
              {cs.myRole.map((role) => (
                <span
                  key={role}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${cs.accentColor}0D`,
                    color: "var(--text-primary)",
                    border: `1.5px solid ${cs.accentColor}20`,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                  }}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Key Learnings */}
        <article
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "0 4px 20px var(--shadow-card)",
          }}
        >
          <div
            className="px-8 py-5"
            style={{
              borderBottom: "1px solid var(--border-subtle)",
              background: "var(--bg-section-alt)",
            }}
          >
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "1.3rem",
                color: "var(--text-primary)",
                fontWeight: 400,
              }}
            >
              Key Learnings
            </h2>
          </div>
          <div className="px-8 py-8">
            <ol className="flex flex-col gap-4">
              {cs.keyLearnings.map((learning, i) => (
                <li key={learning} className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{
                      backgroundColor: `${cs.accentColor}15`,
                      color: cs.accentColor,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.75rem",
                      border: `1.5px solid ${cs.accentColor}25`,
                      minWidth: "1.75rem",
                    }}
                  >
                    {i + 1}
                  </span>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      color: "var(--text-primary)",
                    }}
                  >
                    {learning}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </article>

        {/* What I Would Do Next */}
        {cs.whatNext && cs.whatNext.length > 0 && (
          <article
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              boxShadow: "0 4px 20px var(--shadow-card)",
            }}
          >
            <div
              className="px-8 py-5 flex items-center justify-between"
              style={{
                borderBottom: "1px solid var(--border-subtle)",
                background: "var(--bg-section-alt)",
              }}
            >
              <div className="flex items-center gap-3">
                <Sparkles
                  size={18}
                  style={{ color: "var(--heading-accent)" }}
                />
                <h2
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "1.3rem",
                    color: "var(--text-primary)",
                    fontWeight: 400,
                  }}
                >
                  What I Would Do Next
                </h2>
              </div>
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: "var(--bg-section-alt)",
                  color: "var(--heading-accent)",
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  border: "1px solid var(--border-strong)",
                  fontSize: "0.62rem",
                }}
              >
                Strategic Foresight
              </span>
            </div>
            <div className="px-8 py-8">
              <ol className="flex flex-col gap-5">
                {cs.whatNext.map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm"
                      style={{
                        backgroundColor: `${cs.accentColor}15`,
                        color: cs.accentColor,
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: "1rem",
                        border: `1.5px solid ${cs.accentColor}30`,
                        minWidth: "1.75rem",
                      }}
                    >
                      {i + 1}
                    </span>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "1rem",
                        lineHeight: 1.7,
                        color: "var(--text-primary)",
                      }}
                    >
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </article>
        )}

        {/* CTA */}
        <section
          className="rounded-2xl px-8 py-12 text-center"
          style={{
            background: `linear-gradient(135deg, var(--amalfi-blue) 0%, ${cs.accentColor}80 100%)`,
          }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "1.15rem",
              color: "rgba(255,255,255,0.85)",
              marginBottom: "0.75rem",
            }}
          >
            Want similar results for your brand?
          </p>
          <h3
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              color: "#fff",
              marginBottom: "1.5rem",
            }}
          >
            Let&apos;s Build Something Worth Following
          </h3>
          <Link
            to="/"
            className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 cta-btn"
            style={{
              backgroundColor: "var(--citrus-zest)",
              color: "#1a1a2e",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              textDecoration: "none",
            }}
            data-ocid="case-study.primary_button"
          >
            Get in Touch →
          </Link>
        </section>

        {/* Prev / Next Navigation */}
        <nav
          className="flex flex-col sm:flex-row gap-4 justify-between"
          aria-label="Case study navigation"
        >
          {prevCase ? (
            <Link
              to="/case-study/$id"
              params={{ id: prevCase.id }}
              className="flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-200"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                textDecoration: "none",
                flex: 1,
              }}
              data-ocid="case-study.link"
            >
              <ArrowLeft size={18} style={{ color: "var(--heading-accent)" }} />
              <div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Previous
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1rem",
                    color: "var(--text-primary)",
                    fontWeight: 600,
                  }}
                >
                  {prevCase.title}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextCase ? (
            <Link
              to="/case-study/$id"
              params={{ id: nextCase.id }}
              className="flex items-center justify-end gap-3 px-6 py-4 rounded-xl transition-all duration-200"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                textDecoration: "none",
                flex: 1,
                textAlign: "right",
              }}
              data-ocid="case-study.link"
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Next
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1rem",
                    color: "var(--text-primary)",
                    fontWeight: 600,
                  }}
                >
                  {nextCase.title}
                </div>
              </div>
              <ArrowRight
                size={18}
                style={{ color: "var(--heading-accent)" }}
              />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>

      <Footer />
    </div>
  );
}
