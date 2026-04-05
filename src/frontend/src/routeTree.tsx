import { createRootRoute, createRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import HomePage from "./pages/HomePage";

const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const caseStudyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/case-study/$id",
  component: () => (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--warm-white)",
            fontFamily: "'Inter', sans-serif",
            color: "var(--muted-gray)",
            fontSize: "1rem",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                border: "2px solid var(--amalfi-blue)",
                borderTopColor: "transparent",
                borderRadius: "50%",
                margin: "0 auto 1rem",
                animation: "spin 0.8s linear infinite",
              }}
            />
            Loading case study...
          </div>
        </div>
      }
    >
      <CaseStudyPage />
    </Suspense>
  ),
});

export const routeTree = rootRoute.addChildren([homeRoute, caseStudyRoute]);
