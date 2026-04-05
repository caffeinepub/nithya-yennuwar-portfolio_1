import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import SunflowerToggle from "./SunflowerToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "How I Work", href: "#how-i-work" },
  { label: "Experience", href: "#experience" },
  { label: "Selected Work", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

interface NavigationProps {
  isCaseStudy?: boolean;
}

export default function Navigation({ isCaseStudy = false }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (isCaseStudy) {
      navigate({ to: "/" }).then(() => {
        setTimeout(() => {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      });
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? "nav-scrolled" : ""}`}
      style={{ padding: scrolled ? "10px 0" : "18px 0" }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "1.7rem",
            fontWeight: 400,
            color: "var(--heading-accent)",
            letterSpacing: "-0.01em",
            textDecoration: "none",
          }}
          data-ocid="nav.link"
        >
          NY
        </Link>

        {/* Desktop nav */}
        {isCaseStudy ? (
          <div className="hidden md:flex items-center">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{
                color: "var(--text-muted)",
                fontFamily: "'Inter', sans-serif",
                textDecoration: "none",
              }}
              data-ocid="nav.link"
            >
              <span>←</span> Back to Portfolio
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "var(--text-primary)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.02em",
                  opacity: 0.7,
                  transition: "opacity 0.2s ease",
                  fontSize: "0.82rem",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "0.7";
                }}
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}

        {/* Desktop right controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <SunflowerToggle isDark={theme === "dark"} onClick={toggleTheme} />

          {/* CTA */}
          <button
            type="button"
            onClick={() => {
              if (isCaseStudy) {
                navigate({ to: "/" }).then(() => {
                  setTimeout(() => {
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                });
              } else {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-5 py-2 rounded-full text-sm font-semibold cta-btn"
            style={{
              backgroundColor: "var(--citrus-zest)",
              color: "#1a1a2e",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.02em",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
            }}
            data-ocid="nav.primary_button"
          >
            Let&apos;s Connect
          </button>
        </div>

        {/* Mobile right controls */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile theme toggle */}
          <SunflowerToggle isDark={theme === "dark"} onClick={toggleTheme} />

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="p-2 rounded"
            style={{
              color: "var(--heading-accent)",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            data-ocid="nav.toggle"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 py-5 px-6 flex flex-col gap-4"
          style={{
            background: "var(--bg-mobile-menu)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border-subtle)",
            boxShadow: "0 8px 24px var(--shadow-card)",
          }}
        >
          {isCaseStudy ? (
            <Link
              to="/"
              className="text-sm font-medium"
              style={{
                color: "var(--text-muted)",
                fontFamily: "'Inter', sans-serif",
                textDecoration: "none",
              }}
              onClick={() => setMenuOpen(false)}
              data-ocid="nav.link"
            >
              ← Back to Portfolio
            </Link>
          ) : (
            navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  padding: "4px 0",
                }}
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))
          )}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              if (isCaseStudy) {
                navigate({ to: "/" }).then(() => {
                  setTimeout(() => {
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                });
              } else {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-5 py-2.5 rounded-full text-sm font-semibold w-fit mt-2"
            style={{
              backgroundColor: "var(--citrus-zest)",
              color: "#1a1a2e",
              fontFamily: "'Inter', sans-serif",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
            }}
            data-ocid="nav.primary_button"
          >
            Let&apos;s Connect
          </button>
        </div>
      )}
    </nav>
  );
}
