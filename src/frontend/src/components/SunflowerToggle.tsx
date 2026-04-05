interface SunflowerToggleProps {
  isDark: boolean;
  onClick: () => void;
}

export default function SunflowerToggle({
  isDark,
  onClick,
}: SunflowerToggleProps) {
  const petalClass = `sunflower-petals ${isDark ? "bloomed" : "closed"}`;
  const centerClass = `sunflower-center ${isDark ? "bloomed" : "closed"}`;
  const petalColor = isDark ? "#FFA62B" : "#9DAFC0";
  const centerColor = isDark ? "#7A4F0D" : "#6B7280";
  const dotColor = isDark ? "#FFC55A" : "#9DAFC0";

  return (
    <button
      type="button"
      className="sunflower-btn"
      onClick={onClick}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      data-ocid="nav.toggle"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
        aria-hidden="true"
        focusable="false"
      >
        {/* Petals group — rotated around center (14,14) */}
        <g className={petalClass}>
          {/* 8 petals at 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315° */}
          <ellipse
            cx="14"
            cy="4.5"
            rx="2.4"
            ry="5"
            fill={petalColor}
            opacity="0.9"
            style={{ transformOrigin: "14px 14px", transform: "rotate(0deg)" }}
          />
          <ellipse
            cx="14"
            cy="4.5"
            rx="2.4"
            ry="5"
            fill={petalColor}
            opacity="0.85"
            style={{ transformOrigin: "14px 14px", transform: "rotate(45deg)" }}
          />
          <ellipse
            cx="14"
            cy="4.5"
            rx="2.4"
            ry="5"
            fill={petalColor}
            opacity="0.9"
            style={{ transformOrigin: "14px 14px", transform: "rotate(90deg)" }}
          />
          <ellipse
            cx="14"
            cy="4.5"
            rx="2.4"
            ry="5"
            fill={petalColor}
            opacity="0.85"
            style={{
              transformOrigin: "14px 14px",
              transform: "rotate(135deg)",
            }}
          />
          <ellipse
            cx="14"
            cy="4.5"
            rx="2.4"
            ry="5"
            fill={petalColor}
            opacity="0.9"
            style={{
              transformOrigin: "14px 14px",
              transform: "rotate(180deg)",
            }}
          />
          <ellipse
            cx="14"
            cy="4.5"
            rx="2.4"
            ry="5"
            fill={petalColor}
            opacity="0.85"
            style={{
              transformOrigin: "14px 14px",
              transform: "rotate(225deg)",
            }}
          />
          <ellipse
            cx="14"
            cy="4.5"
            rx="2.4"
            ry="5"
            fill={petalColor}
            opacity="0.9"
            style={{
              transformOrigin: "14px 14px",
              transform: "rotate(270deg)",
            }}
          />
          <ellipse
            cx="14"
            cy="4.5"
            rx="2.4"
            ry="5"
            fill={petalColor}
            opacity="0.85"
            style={{
              transformOrigin: "14px 14px",
              transform: "rotate(315deg)",
            }}
          />
        </g>

        {/* Leaf — small decorative charm at bottom */}
        {isDark && (
          <ellipse
            cx="14"
            cy="24.5"
            rx="2"
            ry="3.5"
            fill="#4CAF50"
            opacity="0.7"
            style={{ transformOrigin: "14px 14px", transform: "rotate(12deg)" }}
          />
        )}

        {/* Center circle */}
        <circle
          cx="14"
          cy="14"
          r="5"
          fill={centerColor}
          className={centerClass}
        />

        {/* Seed dots on center (only when bloomed) */}
        {isDark && (
          <>
            <circle cx="13" cy="13" r="0.8" fill={dotColor} opacity="0.9" />
            <circle cx="15" cy="13" r="0.8" fill={dotColor} opacity="0.9" />
            <circle cx="14" cy="15" r="0.8" fill={dotColor} opacity="0.9" />
            <circle cx="13" cy="15.5" r="0.5" fill={dotColor} opacity="0.7" />
            <circle cx="15" cy="15.5" r="0.5" fill={dotColor} opacity="0.7" />
          </>
        )}
      </svg>
    </button>
  );
}
