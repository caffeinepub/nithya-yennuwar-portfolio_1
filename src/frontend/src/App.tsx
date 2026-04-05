import { Toaster } from "@/components/ui/sonner";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import CustomCursor from "./components/CustomCursor";
import FloatingElements from "./components/FloatingElements";
import { ThemeProvider } from "./context/ThemeContext";
import { routeTree } from "./routeTree";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function IntersectionObserverSetup() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const setupObserver = () => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
      );
      const targets = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right",
      );
      for (const el of targets) {
        observerRef.current?.observe(el);
      }
    };

    // Small delay to allow DOM to render
    const timer = setTimeout(setupObserver, 100);
    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, []);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <FloatingElements />
      <CustomCursor />
      <IntersectionObserverSetup />
      <RouterProvider router={router} />
      <Toaster position="bottom-right" />
    </ThemeProvider>
  );
}
