import { useEffect, useMemo, useRef } from "react";

// ─── Palette constants ────────────────────────────────────────────────────────
const BLUE = "#2E5AA7";
const BLUE_T = "rgba(46,90,167,0.55)";
const BREEZE = "#86C5FF";
const BREEZE_T = "rgba(134,197,255,0.6)";
const CREAM = "rgba(248,230,160,0.75)";
const CITRUS = "#FFA62B";
const CITRUS_T = "rgba(255,166,43,0.65)";
const GREEN = "rgba(120,168,90,0.7)";
const GREEN_D = "rgba(80,120,60,0.75)";

// ─── SVG element renderers ────────────────────────────────────────────────────

function OliveBranch({ size }: { size: number }) {
  const s = size;
  return (
    <svg
      role="img"
      aria-label="Olive branch"
      width={s}
      height={s * 0.9}
      viewBox="0 0 60 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Olive branch</title>
      <path
        d="M8 48 C18 36 28 24 48 8"
        stroke={BLUE}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse
        cx="18"
        cy="38"
        rx="7"
        ry="3.5"
        fill={GREEN}
        transform="rotate(-40 18 38)"
      />
      <ellipse
        cx="28"
        cy="28"
        rx="7"
        ry="3.5"
        fill={GREEN_D}
        transform="rotate(-50 28 28)"
      />
      <ellipse
        cx="38"
        cy="18"
        rx="6"
        ry="3"
        fill={GREEN}
        transform="rotate(-45 38 18)"
      />
      <ellipse
        cx="46"
        cy="12"
        rx="5"
        ry="2.5"
        fill={GREEN_D}
        transform="rotate(-35 46 12)"
      />
      <path
        d="M28 28 C24 22 20 18 16 16"
        stroke={BLUE}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse
        cx="20"
        cy="22"
        rx="5"
        ry="2.5"
        fill={GREEN}
        transform="rotate(-60 20 22)"
      />
      <ellipse
        cx="16"
        cy="17"
        rx="4"
        ry="2"
        fill={GREEN_D}
        transform="rotate(-55 16 17)"
      />
      <circle cx="34" cy="22" r="2.5" fill={BLUE_T} />
      <circle cx="24" cy="32" r="2" fill={BLUE_T} />
    </svg>
  );
}

function LemonSlice({ size }: { size: number }) {
  const s = size;
  return (
    <svg
      role="img"
      aria-label="Lemon slice"
      width={s}
      height={s}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Lemon slice</title>
      <circle
        cx="30"
        cy="30"
        r="26"
        fill="rgba(255,220,80,0.5)"
        stroke={CITRUS}
        strokeWidth="2"
      />
      <circle cx="30" cy="30" r="20" fill="rgba(255,235,120,0.4)" />
      <line
        x1="30"
        y1="10"
        x2="30"
        y2="50"
        stroke={CITRUS_T}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="30"
        x2="50"
        y2="30"
        stroke={CITRUS_T}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="15.9"
        y1="15.9"
        x2="44.1"
        y2="44.1"
        stroke={CITRUS_T}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="44.1"
        y1="15.9"
        x2="15.9"
        y2="44.1"
        stroke={CITRUS_T}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="30" cy="30" r="4" fill={CITRUS} opacity="0.7" />
      <circle
        cx="30"
        cy="30"
        r="22"
        fill="none"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="3"
      />
    </svg>
  );
}

function MedVase({ size }: { size: number }) {
  const s = size;
  return (
    <svg
      role="img"
      aria-label="Mediterranean vase"
      width={s * 0.7}
      height={s}
      viewBox="0 0 42 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Mediterranean vase</title>
      <path
        d="M13 8 C6 14 4 24 4 30 C4 42 10 52 21 54 C32 52 38 42 38 30 C38 24 36 14 29 8 Z"
        fill={BREEZE_T}
        stroke={BLUE}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 8 C15 4 17 2 21 2 C25 2 27 4 29 8"
        fill="none"
        stroke={BLUE}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <ellipse
        cx="21"
        cy="2.5"
        rx="5"
        ry="2"
        fill="none"
        stroke={BLUE}
        strokeWidth="1.5"
      />
      <path
        d="M13 12 C8 12 6 18 8 22 C10 22 12 20 13 18"
        fill="none"
        stroke={BLUE}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M29 12 C34 12 36 18 34 22 C32 22 30 20 29 18"
        fill="none"
        stroke={BLUE}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 28 Q21 32 35 28"
        fill="none"
        stroke={BLUE}
        strokeWidth="1"
        opacity="0.6"
        strokeLinecap="round"
      />
      <path
        d="M6 32 Q21 36 36 32"
        fill="none"
        stroke={BLUE}
        strokeWidth="1"
        opacity="0.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WaveLine({ size }: { size: number }) {
  const w = size * 1.4;
  const h = size * 0.5;
  return (
    <svg
      role="img"
      aria-label="Wave line"
      width={w}
      height={h}
      viewBox="0 0 84 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Wave line</title>
      <path
        d="M2 20 C10 8 18 8 26 20 C34 32 42 32 50 20 C58 8 66 8 74 20 C80 28 82 24 84 20"
        stroke={BREEZE}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M2 20 C10 8 18 8 26 20 C34 32 42 32 50 20 C58 8 66 8 74 20 C80 28 82 24 84 20"
        stroke="rgba(134,197,255,0.25)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function BotanicalStar({ size }: { size: number }) {
  const s = size;
  return (
    <svg
      role="img"
      aria-label="Botanical star"
      width={s}
      height={s}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Botanical star</title>
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse
          key={angle}
          cx="30"
          cy="30"
          rx="6"
          ry="16"
          fill={CREAM}
          stroke="rgba(255,166,43,0.4)"
          strokeWidth="0.8"
          transform={`rotate(${angle} 30 30)`}
        />
      ))}
      <circle cx="30" cy="30" r="7" fill={CITRUS} opacity="0.8" />
      <circle cx="30" cy="30" r="4" fill="rgba(255,240,200,0.9)" />
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <circle
            key={`dot-${angle}`}
            cx={30 + Math.sin(rad) * 18}
            cy={30 - Math.cos(rad) * 18}
            r="1.5"
            fill={CITRUS}
            opacity="0.6"
          />
        );
      })}
    </svg>
  );
}

function MedArch({ size }: { size: number }) {
  const s = size;
  return (
    <svg
      role="img"
      aria-label="Mediterranean arch"
      width={s}
      height={s * 0.85}
      viewBox="0 0 60 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Mediterranean arch</title>
      <path
        d="M6 50 L6 24 A24 24 0 0 1 54 24 L54 50"
        stroke={BLUE}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(134,197,255,0.1)"
      />
      <path
        d="M12 50 L12 26 A18 18 0 0 1 48 26 L48 50"
        stroke={BREEZE}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M24 10 L30 4 L36 10"
        fill="none"
        stroke={BLUE}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="2" y="47" width="10" height="4" rx="1" fill={BLUE_T} />
      <rect x="48" y="47" width="10" height="4" rx="1" fill={BLUE_T} />
    </svg>
  );
}

function SunRays({ size }: { size: number }) {
  const s = size;
  const rays = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg
      role="img"
      aria-label="Sun rays"
      width={s}
      height={s}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Sun rays</title>
      <circle cx="30" cy="30" r="9" fill={CITRUS} opacity="0.85" />
      <circle cx="30" cy="30" r="6" fill="rgba(255,240,180,0.9)" />
      {rays.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 30 + Math.cos(rad) * 12;
        const y1 = 30 + Math.sin(rad) * 12;
        const x2 = 30 + Math.cos(rad) * 24;
        const y2 = 30 + Math.sin(rad) * 24;
        return (
          <line
            key={angle}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={CITRUS}
            strokeWidth={angle % 90 === 0 ? "2.5" : "1.5"}
            strokeLinecap="round"
            opacity="0.8"
          />
        );
      })}
      <circle
        cx="30"
        cy="30"
        r="27"
        fill="none"
        stroke={CITRUS}
        strokeWidth="0.8"
        opacity="0.3"
        strokeDasharray="3 4"
      />
    </svg>
  );
}

function LeafTrio({ size }: { size: number }) {
  const s = size;
  return (
    <svg
      role="img"
      aria-label="Leaf trio"
      width={s}
      height={s * 1.1}
      viewBox="0 0 50 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Leaf trio</title>
      <path
        d="M25 52 C25 52 14 40 14 28 C14 16 20 8 25 4 C30 8 36 16 36 28 C36 40 25 52 25 52 Z"
        fill="url(#leafGrad1)"
        stroke={GREEN_D}
        strokeWidth="1"
      />
      <path
        d="M25 52 C25 40 25 20 25 4"
        stroke="rgba(80,120,60,0.5)"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M22 46 C22 46 8 36 6 24 C4 14 8 6 14 4 C20 6 26 14 26 24 C26 34 22 46 22 46 Z"
        fill="url(#leafGrad2)"
        stroke={GREEN_D}
        strokeWidth="1"
        transform="rotate(-25 14 25)"
      />
      <path
        d="M28 46 C28 46 42 36 44 24 C46 14 42 6 36 4 C30 6 24 14 24 24 C24 34 28 46 28 46 Z"
        fill="url(#leafGrad1)"
        stroke={GREEN_D}
        strokeWidth="1"
        transform="rotate(25 36 25)"
      />
      <defs>
        <linearGradient id="leafGrad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#78A85A" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#4A7A35" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="leafGrad2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#86C5A0" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#5A9060" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── Element definition types ─────────────────────────────────────────────────

type AnimType = "sway" | "orbit" | "breathe" | "drift1" | "drift2" | "drift3";

type FloatElementDef = {
  type: "svg" | "emoji" | "text";
  render: (size: number) => React.ReactNode;
  minSize: number;
  maxSize: number;
  animType: AnimType;
  minOpacity: number;
  maxOpacity: number;
  shimmer: boolean;
};

const ELEMENT_DEFS: FloatElementDef[] = [
  // ── SVG elements ──
  {
    type: "svg",
    render: (s) => <OliveBranch size={s} />,
    minSize: 48,
    maxSize: 72,
    animType: "sway",
    minOpacity: 0.22,
    maxOpacity: 0.42,
    shimmer: true,
  },
  {
    type: "svg",
    render: (s) => <OliveBranch size={s} />,
    minSize: 40,
    maxSize: 60,
    animType: "breathe",
    minOpacity: 0.2,
    maxOpacity: 0.38,
    shimmer: true,
  },
  {
    type: "svg",
    render: (s) => <LemonSlice size={s} />,
    minSize: 44,
    maxSize: 68,
    animType: "breathe",
    minOpacity: 0.25,
    maxOpacity: 0.45,
    shimmer: true,
  },
  {
    type: "svg",
    render: (s) => <LemonSlice size={s} />,
    minSize: 36,
    maxSize: 52,
    animType: "sway",
    minOpacity: 0.2,
    maxOpacity: 0.4,
    shimmer: false,
  },
  {
    type: "svg",
    render: (s) => <MedVase size={s} />,
    minSize: 44,
    maxSize: 70,
    animType: "breathe",
    minOpacity: 0.22,
    maxOpacity: 0.4,
    shimmer: true,
  },
  {
    type: "svg",
    render: (s) => <MedVase size={s} />,
    minSize: 36,
    maxSize: 56,
    animType: "sway",
    minOpacity: 0.18,
    maxOpacity: 0.35,
    shimmer: false,
  },
  {
    type: "svg",
    render: (s) => <WaveLine size={s} />,
    minSize: 44,
    maxSize: 64,
    animType: "sway",
    minOpacity: 0.2,
    maxOpacity: 0.38,
    shimmer: true,
  },
  {
    type: "svg",
    render: (s) => <BotanicalStar size={s} />,
    minSize: 38,
    maxSize: 58,
    animType: "orbit",
    minOpacity: 0.25,
    maxOpacity: 0.45,
    shimmer: true,
  },
  {
    type: "svg",
    render: (s) => <BotanicalStar size={s} />,
    minSize: 28,
    maxSize: 46,
    animType: "orbit",
    minOpacity: 0.22,
    maxOpacity: 0.4,
    shimmer: false,
  },
  {
    type: "svg",
    render: (s) => <MedArch size={s} />,
    minSize: 50,
    maxSize: 80,
    animType: "breathe",
    minOpacity: 0.18,
    maxOpacity: 0.35,
    shimmer: true,
  },
  {
    type: "svg",
    render: (s) => <SunRays size={s} />,
    minSize: 36,
    maxSize: 56,
    animType: "orbit",
    minOpacity: 0.22,
    maxOpacity: 0.42,
    shimmer: true,
  },
  {
    type: "svg",
    render: (s) => <LeafTrio size={s} />,
    minSize: 42,
    maxSize: 66,
    animType: "sway",
    minOpacity: 0.2,
    maxOpacity: 0.38,
    shimmer: false,
  },
  // ── Emoji accents ──
  {
    type: "emoji",
    render: () => "🍋",
    minSize: 24,
    maxSize: 42,
    animType: "drift1",
    minOpacity: 0.28,
    maxOpacity: 0.48,
    shimmer: false,
  },
  {
    type: "emoji",
    render: () => "🍋",
    minSize: 22,
    maxSize: 38,
    animType: "drift2",
    minOpacity: 0.25,
    maxOpacity: 0.44,
    shimmer: false,
  },
  {
    type: "emoji",
    render: () => "🍋",
    minSize: 28,
    maxSize: 44,
    animType: "drift3",
    minOpacity: 0.28,
    maxOpacity: 0.45,
    shimmer: false,
  },
  {
    type: "emoji",
    render: () => "🌊",
    minSize: 26,
    maxSize: 40,
    animType: "drift1",
    minOpacity: 0.25,
    maxOpacity: 0.42,
    shimmer: false,
  },
  {
    type: "emoji",
    render: () => "🌊",
    minSize: 22,
    maxSize: 36,
    animType: "drift2",
    minOpacity: 0.22,
    maxOpacity: 0.38,
    shimmer: false,
  },
  {
    type: "emoji",
    render: () => "🫒",
    minSize: 24,
    maxSize: 40,
    animType: "drift3",
    minOpacity: 0.25,
    maxOpacity: 0.42,
    shimmer: false,
  },
  {
    type: "emoji",
    render: () => "🫒",
    minSize: 22,
    maxSize: 36,
    animType: "drift1",
    minOpacity: 0.22,
    maxOpacity: 0.38,
    shimmer: false,
  },
  {
    type: "emoji",
    render: () => "🌿",
    minSize: 24,
    maxSize: 42,
    animType: "drift2",
    minOpacity: 0.25,
    maxOpacity: 0.44,
    shimmer: false,
  },
  {
    type: "emoji",
    render: () => "🌿",
    minSize: 22,
    maxSize: 38,
    animType: "drift3",
    minOpacity: 0.22,
    maxOpacity: 0.4,
    shimmer: false,
  },
  {
    type: "emoji",
    render: () => "🌸",
    minSize: 24,
    maxSize: 40,
    animType: "drift1",
    minOpacity: 0.25,
    maxOpacity: 0.43,
    shimmer: false,
  },
  {
    type: "emoji",
    render: () => "🌸",
    minSize: 22,
    maxSize: 38,
    animType: "drift2",
    minOpacity: 0.22,
    maxOpacity: 0.4,
    shimmer: false,
  },
  // ── Text stars ──
  {
    type: "text",
    render: () => "✦",
    minSize: 18,
    maxSize: 32,
    animType: "orbit",
    minOpacity: 0.28,
    maxOpacity: 0.5,
    shimmer: true,
  },
  {
    type: "text",
    render: () => "✧",
    minSize: 16,
    maxSize: 28,
    animType: "orbit",
    minOpacity: 0.25,
    maxOpacity: 0.45,
    shimmer: false,
  },
  {
    type: "text",
    render: () => "✦",
    minSize: 20,
    maxSize: 34,
    animType: "breathe",
    minOpacity: 0.3,
    maxOpacity: 0.52,
    shimmer: true,
  },
];

// ─── Seeded RNG ───────────────────────────────────────────────────────────────
function seededRand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// ─── Animation CSS mapping ────────────────────────────────────────────────────
function animCSS(type: AnimType, duration: number, delay: number): string {
  const shimmer = `float-shimmer ${duration * 0.6}s ease-in-out ${delay}s infinite`;
  switch (type) {
    case "sway":
      return `float-sway ${duration}s ease-in-out ${delay}s infinite, ${shimmer}`;
    case "orbit":
      return `float-orbit ${duration * 0.5}s linear ${delay}s infinite`;
    case "breathe":
      return `float-breathe ${duration}s ease-in-out ${delay}s infinite`;
    case "drift1":
      return `float-drift-1 ${duration}s ease-in-out ${delay}s infinite, float-pulse ${duration * 0.55}s ease-in-out ${delay}s infinite`;
    case "drift2":
      return `float-drift-2 ${duration}s ease-in-out ${delay}s infinite, float-pulse ${duration * 0.5}s ease-in-out ${delay}s infinite`;
    case "drift3":
      return `float-drift-3 ${duration}s ease-in-out ${delay}s infinite, float-pulse ${duration * 0.6}s ease-in-out ${delay}s infinite`;
    default: {
      const _: never = type;
      return _ as string;
    }
  }
}

// ─── Placed element type ──────────────────────────────────────────────────────
interface PlacedEl {
  id: number;
  defIndex: number;
  left: number;
  top: number;
  size: number;
  rotation: number;
  opacity: number;
  duration: number;
  delay: number;
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function FloatingElements() {
  const prefersReduced = useRef(
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  const isMobile = useRef(
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 768px)").matches
      : false,
  );

  const placed = useMemo<PlacedEl[]>(() => {
    const rand = seededRand(77);
    const total = isMobile.current ? 10 : 22;
    const opacityFactor = isMobile.current ? 0.7 : 1.0;
    const indices = ELEMENT_DEFS.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return Array.from({ length: total }, (_, i) => {
      const defIndex = indices[i % indices.length];
      const def = ELEMENT_DEFS[defIndex];
      const opacity =
        (def.minOpacity + rand() * (def.maxOpacity - def.minOpacity)) *
        opacityFactor;
      return {
        id: i,
        defIndex,
        left: rand() * 94,
        top: rand() * 89,
        size: def.minSize + rand() * (def.maxSize - def.minSize),
        rotation: -25 + rand() * 50,
        opacity,
        duration: 14 + rand() * 18,
        delay: -(rand() * 10),
      };
    });
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced.current && containerRef.current) {
      containerRef.current.style.display = "none";
    }
  }, []);

  const depthFilter =
    "drop-shadow(2px 6px 12px rgba(46,90,167,0.2)) drop-shadow(0 0 20px rgba(255,166,43,0.08))";

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {placed.map((el) => {
        const def = ELEMENT_DEFS[el.defIndex];
        const anim = animCSS(def.animType, el.duration, el.delay);
        const isInline = def.type === "emoji" || def.type === "text";
        const content = def.render(Math.round(el.size));

        return (
          <div
            key={el.id}
            style={{
              position: "absolute",
              left: `${el.left}%`,
              top: `${el.top}%`,
              opacity: el.opacity,
              pointerEvents: "none",
              userSelect: "none",
              animation: anim,
              filter: depthFilter,
              transform: `rotate(${el.rotation}deg)`,
              ["--el-opacity" as string]: String(el.opacity),
              ["--init-rot" as string]: `${el.rotation}deg`,
              ...(isInline
                ? { fontSize: `${Math.round(el.size)}px`, lineHeight: 1 }
                : {}),
            }}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
