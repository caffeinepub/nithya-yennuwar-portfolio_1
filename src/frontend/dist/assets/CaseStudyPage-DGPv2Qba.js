import { c as createLucideIcon, u as useParams, a as caseStudies, r as reactExports, j as jsxRuntimeExports, N as Navigation, L as Link, X, F as Footer } from "./index-DsIe_rkc.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6", key: "pblm9e" }],
  ["path", { d: "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18", key: "nf6bnh" }],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["rect", { width: "16", height: "16", x: "6", y: "2", rx: "2", key: "12espp" }]
];
const Images = createLucideIcon("images", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
const annotationTagColors = {
  Insight: "#2E5AA7",
  Experiment: "#FFA62B",
  "What worked": "#4B8B3B"
};
function CaseStudyPage() {
  const { id } = useParams({ from: "/case-study/$id" });
  const cs = caseStudies.find((c) => c.id === id);
  const [selectedImage, setSelectedImage] = reactExports.useState(null);
  const [carouselIndex, setCarouselIndex] = reactExports.useState(0);
  const [touchStartX, setTouchStartX] = reactExports.useState(null);
  reactExports.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCarouselIndex(0);
  }, [id]);
  reactExports.useEffect(() => {
    if (!cs) return;
    const originalTitle = document.title;
    document.title = `${cs.title} — Nithya Yennuwar Portfolio`;
    const setMeta = (selector, attr, value, isOg = false) => {
      let el = document.querySelector(selector);
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
      true
    );
    setMeta(
      'meta[property="og:description"]',
      "og:description",
      description,
      true
    );
    setMeta('meta[property="og:type"]', "og:type", "article", true);
    setMeta('meta[name="twitter:card"]', "twitter:card", "summary");
    setMeta(
      'meta[name="twitter:title"]',
      "twitter:title",
      `${cs.title} — Nithya Yennuwar Portfolio`
    );
    setMeta(
      'meta[name="twitter:description"]',
      "twitter:description",
      description
    );
    return () => {
      document.title = originalTitle;
    };
  }, [cs]);
  if (!cs) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-screen flex flex-col items-center justify-center",
        style: { backgroundColor: "var(--bg-page)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { isCaseStudy: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center px-6 py-32", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                style: {
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "2.5rem",
                  color: "var(--text-primary)"
                },
                children: "Case study not found"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/",
                className: "mt-8 inline-block",
                style: {
                  color: "var(--heading-accent)",
                  fontFamily: "'Inter', sans-serif"
                },
                children: "← Back to Portfolio"
              }
            )
          ] })
        ]
      }
    );
  }
  const currentIndex = caseStudies.findIndex((c) => c.id === id);
  const prevCase = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextCase = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen page-enter",
      style: {
        backgroundColor: "var(--bg-page)",
        color: "var(--text-primary)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { isCaseStudy: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "pt-32 pb-20 px-6 relative overflow-hidden",
            style: {
              background: `linear-gradient(135deg, ${cs.accentColor}10 0%, var(--bg-section-alt) 60%, var(--bg-page) 100%)`,
              borderBottom: `3px solid ${cs.accentColor}20`
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/",
                  className: "inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors duration-200",
                  style: {
                    color: "var(--text-muted)",
                    fontFamily: "'Inter', sans-serif",
                    textDecoration: "none"
                  },
                  "data-ocid": "case-study.link",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 }),
                    "Back to Portfolio"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4",
                  style: {
                    backgroundColor: `${cs.accentColor}14`,
                    color: cs.accentColor,
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    border: `1px solid ${cs.accentColor}28`
                  },
                  children: cs.category
                }
              ),
              cs.confidential && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "inline-block ml-2 px-3 py-1 rounded-full text-xs font-semibold mb-4",
                  style: {
                    backgroundColor: "rgba(198,40,40,0.08)",
                    color: "#C62828",
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    border: "1px solid rgba(198,40,40,0.2)"
                  },
                  children: "🔒 Client Confidential"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  style: {
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    lineHeight: 1.1,
                    marginBottom: "1.25rem",
                    letterSpacing: "-0.02em"
                  },
                  children: cs.title
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    color: "var(--text-muted)",
                    maxWidth: "560px",
                    lineHeight: 1.7,
                    marginBottom: "2.5rem"
                  },
                  children: cs.summary
                }
              ),
              cs.services && cs.services.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      alignSelf: "center",
                      marginRight: "4px"
                    },
                    children: "Services:"
                  }
                ),
                cs.services.map((svc) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "px-3 py-1 rounded-full text-xs font-medium",
                    style: {
                      backgroundColor: `${cs.accentColor}10`,
                      color: cs.accentColor,
                      border: `1px solid ${cs.accentColor}25`,
                      fontFamily: "'Inter', sans-serif"
                    },
                    children: svc
                  },
                  svc
                ))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6", children: cs.results.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-xl p-4 text-center metric-pulse",
                  style: {
                    backgroundColor: "var(--bg-card)",
                    border: `1px solid ${cs.accentColor}18`,
                    animationDelay: `${i * 0.1}s`,
                    backdropFilter: "blur(8px)"
                  },
                  "data-ocid": `case-study.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                          fontWeight: 700,
                          color: cs.accentColor,
                          lineHeight: 1.1,
                          marginBottom: "4px"
                        },
                        children: r.metric
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.65rem",
                          color: "var(--text-muted)",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase"
                        },
                        children: r.label
                      }
                    )
                  ]
                },
                r.label
              )) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 py-16 flex flex-col gap-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "article",
            {
              className: "rounded-2xl overflow-hidden",
              style: {
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 4px 20px var(--shadow-card)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "px-8 py-5 flex items-center gap-3",
                    style: {
                      borderBottom: "1px solid var(--border-subtle)",
                      background: "var(--bg-section-alt)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 18, style: { color: cs.accentColor } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h2",
                        {
                          style: {
                            fontFamily: "'DM Serif Display', serif",
                            fontSize: "1.3rem",
                            color: "var(--text-primary)",
                            fontWeight: 400
                          },
                          children: "The Problem"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1rem",
                      lineHeight: 1.8,
                      color: "var(--text-primary)"
                    },
                    children: cs.problem
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "article",
            {
              className: "rounded-2xl overflow-hidden",
              style: {
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 4px 20px var(--shadow-card)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "px-8 py-5 flex items-center gap-3",
                    style: {
                      borderBottom: "1px solid var(--border-subtle)",
                      background: "var(--bg-section-alt)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 18, style: { color: cs.accentColor } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h2",
                        {
                          style: {
                            fontFamily: "'DM Serif Display', serif",
                            fontSize: "1.3rem",
                            color: "var(--text-primary)",
                            fontWeight: 400
                          },
                          children: "The Strategy"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-3", children: cs.strategy.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "flex-shrink-0 mt-1.5 w-2 h-2 rounded-full",
                      style: { backgroundColor: cs.accentColor }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.95rem",
                        lineHeight: 1.7,
                        color: "var(--text-primary)"
                      },
                      children: item
                    }
                  )
                ] }, item)) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "article",
            {
              className: "rounded-2xl overflow-hidden",
              style: {
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 4px 20px var(--shadow-card)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "px-8 py-5",
                    style: {
                      borderBottom: "1px solid var(--border-subtle)",
                      background: "var(--bg-section-alt)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h2",
                      {
                        style: {
                          fontFamily: "'DM Serif Display', serif",
                          fontSize: "1.3rem",
                          color: "var(--text-primary)",
                          fontWeight: 400
                        },
                        children: "The Execution"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-3", children: cs.execution.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "flex-shrink-0 mt-1.5 w-2 h-2 rounded-full",
                      style: { backgroundColor: cs.accentColor }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.95rem",
                        lineHeight: 1.7,
                        color: "var(--text-primary)"
                      },
                      children: item
                    }
                  )
                ] }, item)) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "article",
            {
              className: "rounded-2xl overflow-hidden",
              style: {
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 4px 20px var(--shadow-card)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "px-8 py-5",
                    style: {
                      borderBottom: "1px solid var(--border-subtle)",
                      background: "var(--bg-section-alt)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h2",
                      {
                        style: {
                          fontFamily: "'DM Serif Display', serif",
                          fontSize: "1.3rem",
                          color: "var(--text-primary)",
                          fontWeight: 400
                        },
                        children: "Content Examples"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: cs.contentExamples.map((example, idx) => {
                  const annotation = cs.annotations.find((a) => a.index === idx);
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "relative p-5 rounded-xl",
                      style: {
                        background: `linear-gradient(135deg, ${cs.accentColor}06 0%, rgba(248,230,160,0.08) 100%)`,
                        border: `1px solid ${cs.accentColor}18`,
                        backgroundColor: "var(--bg-card)"
                      },
                      "data-ocid": `case-study.item.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            CircleCheck,
                            {
                              size: 16,
                              style: {
                                color: cs.accentColor,
                                flexShrink: 0,
                                marginTop: "2px"
                              }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              style: {
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "0.9rem",
                                lineHeight: 1.65,
                                color: "var(--text-primary)"
                              },
                              children: example
                            }
                          )
                        ] }),
                        annotation && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "mt-3 flex items-start gap-2 rounded-lg px-3 py-2",
                            style: {
                              backgroundColor: `${annotationTagColors[annotation.tag] ?? cs.accentColor}0C`,
                              border: `1px solid ${annotationTagColors[annotation.tag] ?? cs.accentColor}20`
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "px-2 py-0.5 rounded text-xs font-bold flex-shrink-0",
                                  style: {
                                    backgroundColor: `${annotationTagColors[annotation.tag] ?? cs.accentColor}18`,
                                    color: annotationTagColors[annotation.tag] ?? cs.accentColor,
                                    fontFamily: "'Inter', sans-serif",
                                    letterSpacing: "0.08em"
                                  },
                                  children: annotation.tag
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  style: {
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "0.78rem",
                                    color: "var(--text-muted)",
                                    fontStyle: "italic",
                                    lineHeight: 1.5
                                  },
                                  children: annotation.note
                                }
                              )
                            ]
                          }
                        )
                      ]
                    },
                    example
                  );
                }) }) })
              ]
            }
          ),
          cs.moodboard && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "article",
            {
              className: "rounded-2xl overflow-hidden",
              style: {
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 4px 20px var(--shadow-card)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "px-8 py-5",
                    style: {
                      borderBottom: "1px solid var(--border-subtle)",
                      background: "var(--bg-section-alt)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h2",
                      {
                        style: {
                          fontFamily: "'DM Serif Display', serif",
                          fontSize: "1.3rem",
                          color: "var(--text-primary)",
                          fontWeight: 400
                        },
                        children: "Mood Board"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "w-full block cursor-zoom-in focus:outline-none",
                    onClick: () => setSelectedImage(cs.moodboard),
                    "data-ocid": "case-study.canvas_target",
                    "aria-label": "View mood board full screen",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: cs.moodboard,
                        alt: `${cs.title} mood board`,
                        className: "w-full rounded-xl",
                        style: {
                          objectFit: "contain",
                          border: `1px solid ${cs.accentColor}20`,
                          display: "block"
                        }
                      }
                    )
                  }
                ) })
              ]
            }
          ),
          cs.images && cs.images.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "article",
            {
              className: "rounded-2xl overflow-hidden",
              style: {
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 4px 20px var(--shadow-card)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "px-8 py-5 flex items-center gap-3",
                    style: {
                      borderBottom: "1px solid var(--border-subtle)",
                      background: "var(--bg-section-alt)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Images, { size: 18, style: { color: cs.accentColor } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h2",
                        {
                          style: {
                            fontFamily: "'DM Serif Display', serif",
                            fontSize: "1.3rem",
                            color: "var(--text-primary)",
                            fontWeight: 400
                          },
                          children: "Social Storytelling"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-8 sm:px-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "relative select-none",
                      onTouchStart: (e) => setTouchStartX(e.touches[0].clientX),
                      onTouchEnd: (e) => {
                        if (touchStartX === null) return;
                        const diff = touchStartX - e.changedTouches[0].clientX;
                        if (Math.abs(diff) > 50) {
                          if (diff > 0) {
                            setCarouselIndex(
                              (prev) => Math.min(prev + 1, cs.images.length - 1)
                            );
                          } else {
                            setCarouselIndex((prev) => Math.max(prev - 1, 0));
                          }
                        }
                        setTouchStartX(null);
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            className: "block w-full rounded-xl overflow-hidden cursor-zoom-in relative group",
                            style: {
                              border: `1.5px solid ${cs.accentColor}35`,
                              padding: 0,
                              background: "none"
                            },
                            "data-ocid": "case-study.canvas_target",
                            onClick: () => setSelectedImage(cs.images[carouselIndex]),
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "img",
                                {
                                  src: cs.images[carouselIndex],
                                  alt: `Campaign slide ${carouselIndex + 1} of ${cs.images.length}`,
                                  className: "w-full object-cover",
                                  style: {
                                    maxHeight: "420px",
                                    aspectRatio: "16/9",
                                    display: "block",
                                    transition: "opacity 0.35s ease"
                                  },
                                  loading: "lazy"
                                },
                                cs.images[carouselIndex]
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs pointer-events-none opacity-0 group-hover:opacity-100",
                                  style: {
                                    backgroundColor: "rgba(0,0,0,0.55)",
                                    color: "#fff",
                                    fontFamily: "'JetBrains Mono', monospace",
                                    transition: "opacity 0.25s ease",
                                    backdropFilter: "blur(4px)"
                                  },
                                  children: "⤢ Click to enlarge"
                                }
                              )
                            ]
                          }
                        ),
                        carouselIndex > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            className: "absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full z-10",
                            style: {
                              width: "clamp(36px, 5vw, 48px)",
                              height: "clamp(36px, 5vw, 48px)",
                              backgroundColor: "var(--bg-card)",
                              boxShadow: "0 2px 12px var(--shadow-card)",
                              border: `1px solid ${cs.accentColor}25`,
                              cursor: "pointer"
                            },
                            "data-ocid": "case-study.pagination_prev",
                            onClick: () => setCarouselIndex((prev) => Math.max(prev - 1, 0)),
                            "aria-label": "Previous image",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              ArrowLeft,
                              {
                                style: {
                                  color: cs.accentColor,
                                  width: "clamp(14px, 2vw, 18px)",
                                  height: "clamp(14px, 2vw, 18px)"
                                }
                              }
                            )
                          }
                        ),
                        carouselIndex < cs.images.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full z-10",
                            style: {
                              width: "clamp(36px, 5vw, 48px)",
                              height: "clamp(36px, 5vw, 48px)",
                              backgroundColor: "var(--bg-card)",
                              boxShadow: "0 2px 12px var(--shadow-card)",
                              border: `1px solid ${cs.accentColor}25`,
                              cursor: "pointer"
                            },
                            "data-ocid": "case-study.pagination_next",
                            onClick: () => setCarouselIndex(
                              (prev) => Math.min(prev + 1, cs.images.length - 1)
                            ),
                            "aria-label": "Next image",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              ArrowRight,
                              {
                                style: {
                                  color: cs.accentColor,
                                  width: "clamp(14px, 2vw, 18px)",
                                  height: "clamp(14px, 2vw, 18px)"
                                }
                              }
                            )
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-2 mt-4", children: cs.images.map((src, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Go to image ${idx + 1}`,
                      "data-ocid": `case-study.item.${idx + 1}`,
                      onClick: () => setCarouselIndex(idx),
                      style: {
                        width: idx === carouselIndex ? "24px" : "10px",
                        height: "10px",
                        borderRadius: "99px",
                        border: `2px solid ${cs.accentColor}`,
                        backgroundColor: idx === carouselIndex ? cs.accentColor : "transparent",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        padding: 0
                      }
                    },
                    src
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-center mt-2",
                      style: {
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        letterSpacing: "0.05em"
                      },
                      children: [
                        carouselIndex + 1,
                        " / ",
                        cs.images.length
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          selectedImage && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "fixed inset-0 z-50 flex items-center justify-center p-4",
              style: { backgroundColor: "rgba(0,0,0,0.85)" },
              onClick: () => setSelectedImage(null),
              onKeyDown: (e) => e.key === "Escape" && setSelectedImage(null),
              tabIndex: -1,
              "data-ocid": "case-study.modal",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "absolute top-4 right-4 flex items-center justify-center rounded-full w-10 h-10",
                    style: {
                      backgroundColor: "rgba(255,255,255,0.15)",
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,0.2)",
                      cursor: "pointer"
                    },
                    onClick: (e) => {
                      e.stopPropagation();
                      setSelectedImage(null);
                    },
                    "data-ocid": "case-study.close_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: selectedImage,
                    alt: "Campaign full view",
                    className: "max-h-screen rounded-xl",
                    style: {
                      maxWidth: "56rem",
                      width: "100%",
                      objectFit: "contain",
                      boxShadow: "0 24px 80px rgba(0,0,0,0.6)"
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "article",
            {
              className: "rounded-2xl overflow-hidden",
              style: {
                backgroundColor: "var(--bg-card)",
                border: `2px solid ${cs.accentColor}25`,
                boxShadow: `0 8px 32px ${cs.accentColor}10`
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "px-8 py-5",
                    style: {
                      borderBottom: `1px solid ${cs.accentColor}15`,
                      background: `linear-gradient(135deg, ${cs.accentColor}08, rgba(248,230,160,0.12))`
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h2",
                      {
                        style: {
                          fontFamily: "'DM Serif Display', serif",
                          fontSize: "1.3rem",
                          color: "var(--text-primary)",
                          fontWeight: 400
                        },
                        children: "The Results"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8", children: cs.results.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "text-center p-4 rounded-xl",
                    style: {
                      background: `linear-gradient(135deg, ${cs.accentColor}0A, ${cs.accentColor}05)`,
                      border: `1px solid ${cs.accentColor}18`
                    },
                    "data-ocid": `case-study.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
                            fontWeight: 800,
                            color: cs.accentColor,
                            lineHeight: 1,
                            marginBottom: "6px"
                          },
                          children: r.metric
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.65rem",
                            color: "var(--text-muted)",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            lineHeight: 1.4
                          },
                          children: r.label
                        }
                      )
                    ]
                  },
                  r.label
                )) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "article",
            {
              className: "rounded-2xl overflow-hidden",
              style: {
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 4px 20px var(--shadow-card)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "px-8 py-5",
                    style: {
                      borderBottom: "1px solid var(--border-subtle)",
                      background: "var(--bg-section-alt)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h2",
                      {
                        style: {
                          fontFamily: "'DM Serif Display', serif",
                          fontSize: "1.3rem",
                          color: "var(--text-primary)",
                          fontWeight: 400
                        },
                        children: "My Role"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2.5", children: cs.myRole.map((role) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "px-4 py-2 rounded-full text-sm font-medium",
                    style: {
                      backgroundColor: `${cs.accentColor}0D`,
                      color: "var(--text-primary)",
                      border: `1.5px solid ${cs.accentColor}20`,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem"
                    },
                    children: role
                  },
                  role
                )) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "article",
            {
              className: "rounded-2xl overflow-hidden",
              style: {
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 4px 20px var(--shadow-card)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "px-8 py-5",
                    style: {
                      borderBottom: "1px solid var(--border-subtle)",
                      background: "var(--bg-section-alt)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h2",
                      {
                        style: {
                          fontFamily: "'DM Serif Display', serif",
                          fontSize: "1.3rem",
                          color: "var(--text-primary)",
                          fontWeight: 400
                        },
                        children: "Key Learnings"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "flex flex-col gap-4", children: cs.keyLearnings.map((learning, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm",
                      style: {
                        backgroundColor: `${cs.accentColor}15`,
                        color: cs.accentColor,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.75rem",
                        border: `1.5px solid ${cs.accentColor}25`,
                        minWidth: "1.75rem"
                      },
                      children: i + 1
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.95rem",
                        lineHeight: 1.7,
                        color: "var(--text-primary)"
                      },
                      children: learning
                    }
                  )
                ] }, learning)) }) })
              ]
            }
          ),
          cs.whatNext && cs.whatNext.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "article",
            {
              className: "rounded-2xl overflow-hidden",
              style: {
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 4px 20px var(--shadow-card)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "px-8 py-5 flex items-center justify-between",
                    style: {
                      borderBottom: "1px solid var(--border-subtle)",
                      background: "var(--bg-section-alt)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Sparkles,
                          {
                            size: 18,
                            style: { color: "var(--heading-accent)" }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h2",
                          {
                            style: {
                              fontFamily: "'DM Serif Display', serif",
                              fontSize: "1.3rem",
                              color: "var(--text-primary)",
                              fontWeight: 400
                            },
                            children: "What I Would Do Next"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "px-3 py-1 rounded-full text-xs font-semibold",
                          style: {
                            backgroundColor: "var(--bg-section-alt)",
                            color: "var(--heading-accent)",
                            fontFamily: "'Inter', sans-serif",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            border: "1px solid var(--border-strong)",
                            fontSize: "0.62rem"
                          },
                          children: "Strategic Foresight"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "flex flex-col gap-5", children: cs.whatNext.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm",
                      style: {
                        backgroundColor: `${cs.accentColor}15`,
                        color: cs.accentColor,
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: "1rem",
                        border: `1.5px solid ${cs.accentColor}30`,
                        minWidth: "1.75rem"
                      },
                      children: i + 1
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "1rem",
                        lineHeight: 1.7,
                        color: "var(--text-primary)"
                      },
                      children: step
                    }
                  )
                ] }, step)) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "section",
            {
              className: "rounded-2xl px-8 py-12 text-center",
              style: {
                background: `linear-gradient(135deg, var(--amalfi-blue) 0%, ${cs.accentColor}80 100%)`
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontSize: "1.15rem",
                      color: "rgba(255,255,255,0.85)",
                      marginBottom: "0.75rem"
                    },
                    children: "Want similar results for your brand?"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    style: {
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "clamp(1.4rem, 3vw, 2rem)",
                      color: "#fff",
                      marginBottom: "1.5rem"
                    },
                    children: "Let's Build Something Worth Following"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/",
                    className: "inline-block px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 cta-btn",
                    style: {
                      backgroundColor: "var(--citrus-zest)",
                      color: "#1a1a2e",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      textDecoration: "none"
                    },
                    "data-ocid": "case-study.primary_button",
                    children: "Get in Touch →"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "nav",
            {
              className: "flex flex-col sm:flex-row gap-4 justify-between",
              "aria-label": "Case study navigation",
              children: [
                prevCase ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/case-study/$id",
                    params: { id: prevCase.id },
                    className: "flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-200",
                    style: {
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      textDecoration: "none",
                      flex: 1
                    },
                    "data-ocid": "case-study.link",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18, style: { color: "var(--heading-accent)" } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "0.7rem",
                              color: "var(--text-muted)",
                              letterSpacing: "0.12em",
                              textTransform: "uppercase"
                            },
                            children: "Previous"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              fontFamily: "'Playfair Display', serif",
                              fontSize: "1rem",
                              color: "var(--text-primary)",
                              fontWeight: 600
                            },
                            children: prevCase.title
                          }
                        )
                      ] })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
                nextCase ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/case-study/$id",
                    params: { id: nextCase.id },
                    className: "flex items-center justify-end gap-3 px-6 py-4 rounded-xl transition-all duration-200",
                    style: {
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      textDecoration: "none",
                      flex: 1,
                      textAlign: "right"
                    },
                    "data-ocid": "case-study.link",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "0.7rem",
                              color: "var(--text-muted)",
                              letterSpacing: "0.12em",
                              textTransform: "uppercase"
                            },
                            children: "Next"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              fontFamily: "'Playfair Display', serif",
                              fontSize: "1rem",
                              color: "var(--text-primary)",
                              fontWeight: 600
                            },
                            children: nextCase.title
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        ArrowRight,
                        {
                          size: 18,
                          style: { color: "var(--heading-accent)" }
                        }
                      )
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {})
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
      ]
    }
  );
}
export {
  CaseStudyPage as default
};
