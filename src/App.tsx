import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PublicLayout } from "./pages/PublicLayout.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { FeaturesPage } from "./pages/FeaturesPage.tsx";
import { AboutPage } from "./pages/AboutPage.tsx";
import { TestimonialsPage } from "./pages/TestimonialsPage.tsx";
import { FaqPage } from "./pages/FaqPage.tsx";
import { ContactPage } from "./pages/ContactPage.tsx";

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/clients" element={<Navigate to="/testimonials" replace />} />
        <Route path="/reviews" element={<Navigate to="/testimonials" replace />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/faq" element={<Navigate to="/faqs" replace />} />
        <Route path="/help" element={<Navigate to="/faqs" replace />} />
        <Route path="/demo" element={<Navigate to="/contact" replace />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
