import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PublicLayout } from "./pages/PublicLayout.tsx";

const HomePage = lazy(() =>
  import("./pages/HomePage.tsx").then((m) => ({ default: m.HomePage }))
);
const FeaturesPage = lazy(() =>
  import("./pages/FeaturesPage.tsx").then((m) => ({ default: m.FeaturesPage }))
);
const AboutPage = lazy(() =>
  import("./pages/AboutPage.tsx").then((m) => ({ default: m.AboutPage }))
);
const TestimonialsPage = lazy(() =>
  import("./pages/TestimonialsPage.tsx").then((m) => ({
    default: m.TestimonialsPage,
  }))
);
const FaqPage = lazy(() =>
  import("./pages/FaqPage.tsx").then((m) => ({ default: m.FaqPage }))
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage.tsx").then((m) => ({ default: m.ContactPage }))
);
const PrivacyPolicyPage = lazy(() =>
  import("./pages/PrivacyPolicyPage.tsx").then((m) => ({
    default: m.PrivacyPolicyPage,
  }))
);
const TermsOfUsePage = lazy(() =>
  import("./pages/TermsOfUsePage.tsx").then((m) => ({
    default: m.TermsOfUsePage,
  }))
);

const PageFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<PageFallback />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/features"
          element={
            <Suspense fallback={<PageFallback />}>
              <FeaturesPage />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<PageFallback />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="/testimonials"
          element={
            <Suspense fallback={<PageFallback />}>
              <TestimonialsPage />
            </Suspense>
          }
        />
        <Route
          path="/clients"
          element={<Navigate to="/testimonials" replace />}
        />
        <Route
          path="/reviews"
          element={<Navigate to="/testimonials" replace />}
        />
        <Route
          path="/faqs"
          element={
            <Suspense fallback={<PageFallback />}>
              <FaqPage />
            </Suspense>
          }
        />
        <Route path="/faq" element={<Navigate to="/faqs" replace />} />
        <Route path="/help" element={<Navigate to="/faqs" replace />} />
        <Route path="/demo" element={<Navigate to="/contact" replace />} />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<PageFallback />}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="/privacy"
          element={
            <Suspense fallback={<PageFallback />}>
              <PrivacyPolicyPage />
            </Suspense>
          }
        />
        <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
        <Route
          path="/terms"
          element={
            <Suspense fallback={<PageFallback />}>
              <TermsOfUsePage />
            </Suspense>
          }
        />
        <Route path="/terms-of-use" element={<Navigate to="/terms" replace />} />
        <Route path="/terms-of-service" element={<Navigate to="/terms" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
