export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="relative py-10 px-6"
      style={{
        backgroundColor: "var(--bg-page)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.7rem",
              fontWeight: 400,
              color: "var(--heading-accent)",
              letterSpacing: "-0.01em",
            }}
          >
            NY
          </span>
        </div>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.78rem",
            color: "var(--text-muted)",
            textAlign: "center",
            margin: 0,
          }}
        >
          &copy; {year} Nithya Yennuwar — All Rights Reserved
        </p>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            margin: 0,
          }}
        >
          Built with ♥ using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--citrus-zest)", textDecoration: "none" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.textDecoration =
                "underline";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.textDecoration =
                "none";
            }}
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
