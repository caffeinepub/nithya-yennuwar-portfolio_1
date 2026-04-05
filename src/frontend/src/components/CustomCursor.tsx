import { useCallback, useEffect, useRef, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  sx: number;
  sy: number;
}

interface TapLemon {
  id: number;
  x: number;
  y: number;
  emojis: Array<{ angle: number; distance: number }>;
}

let sparkleId = 0;
let tapId = 0;

function isTouch() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(hover: none)").matches ||
    window.matchMedia("(pointer: coarse)").matches ||
    "ontouchstart" in window
  );
}

/* ─────────────────────────────── Desktop cursor ─────────────────────────── */
function DesktopCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const ringPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const lastSparkleTime = useRef(0);

  const addSparkle = useCallback(
    (x: number, y: number, dx: number, dy: number) => {
      const now = performance.now();
      if (now - lastSparkleTime.current < 40) return; // throttle
      lastSparkleTime.current = now;

      const id = sparkleId++;
      const angle = Math.random() * Math.PI * 2;
      const dist = 20 + Math.random() * 30;
      const sparkle: Sparkle = {
        id,
        x,
        y,
        sx: Math.cos(angle) * dist + dx * 0.3,
        sy: Math.sin(angle) * dist + dy * 0.3,
      };
      setSparkles((prev) => {
        const next = [...prev, sparkle];
        return next.slice(-15); // max 15
      });
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
      }, 280);
    },
    [],
  );

  useEffect(() => {
    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - prevMousePos.current.x;
      const dy = e.clientY - prevMousePos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }

      if (speed > 8) {
        addSparkle(e.clientX, e.clientY, dx, dy);
      }

      prevMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animateRing = () => {
      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;
      ringPos.current.x += dx * 0.12;
      ringPos.current.y += dy * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animateRing);
    };
    rafRef.current = requestAnimationFrame(animateRing);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
        target.closest(
          "a, button, [role='button'], .case-card, .skill-card, .timeline-card, .how-i-work-step",
        )
      ) {
        setHovered(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
        target.closest(
          "a, button, [role='button'], .case-card, .skill-card, .timeline-card, .how-i-work-step",
        )
      ) {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, [addSparkle]);

  return (
    <>
      {/* Lemon emoji cursor dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          fontSize: "24px",
          lineHeight: 1,
          userSelect: "none",
          filter: "drop-shadow(0 2px 6px rgba(255,166,43,0.6))",
          transition: "filter 0.15s ease",
        }}
      >
        🍋
      </div>

      {/* Trailing ring */}
      <div
        ref={ringRef}
        className={`cursor-ring${hovered ? " hovered" : ""}`}
      />

      {/* Sparkle trail */}
      {sparkles.map((s) => (
        <div
          key={s.id}
          style={{
            position: "fixed",
            left: s.x,
            top: s.y,
            pointerEvents: "none",
            zIndex: 9998,
            fontSize: "11px",
            lineHeight: 1,
            transform: "translate(-50%, -50%)",
            animation: "sparkle-fade 260ms ease-out forwards",
            ["--sx" as string]: `${s.sx}px`,
            ["--sy" as string]: `${s.sy}px`,
          }}
        >
          ✦
        </div>
      ))}
    </>
  );
}

/* ─────────────────────────────── Mobile tap burst ───────────────────────── */
function MobileTapBurst() {
  const [taps, setTaps] = useState<TapLemon[]>([]);

  useEffect(() => {
    const onTouch = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      if (!touch) return;

      const count = 6 + Math.floor(Math.random() * 3); // 6–8
      const emojis = Array.from({ length: count }, () => ({
        angle: Math.random() * 360,
        distance: 60 + Math.random() * 40,
      }));

      const id = tapId++;
      setTaps((prev) => [
        ...prev,
        { id, x: touch.clientX, y: touch.clientY, emojis },
      ]);

      setTimeout(() => {
        setTaps((prev) => prev.filter((t) => t.id !== id));
      }, 600);
    };

    document.addEventListener("touchstart", onTouch, { passive: true });
    return () => document.removeEventListener("touchstart", onTouch);
  }, []);

  return (
    <>
      {taps.map((tap) =>
        tap.emojis.map((em, i) => {
          const rad = (em.angle * Math.PI) / 180;
          const tx = Math.cos(rad) * em.distance;
          const ty = Math.sin(rad) * em.distance;
          return (
            <div
              key={`${tap.id}-${i}`}
              style={{
                position: "fixed",
                left: tap.x,
                top: tap.y,
                pointerEvents: "none",
                zIndex: 9999,
                fontSize: "20px",
                lineHeight: 1,
                transform: "translate(-50%, -50%)",
                animation: "tap-burst 500ms ease-out forwards",
                ["--tx" as string]: `${tx}px`,
                ["--ty" as string]: `${ty}px`,
              }}
            >
              🍋
            </div>
          );
        }),
      )}
    </>
  );
}

/* ───────────────────────────────── Main export ──────────────────────────── */
export default function CustomCursor() {
  const touch = isTouch();
  if (touch) return <MobileTapBurst />;
  return <DesktopCursor />;
}
