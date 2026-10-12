import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PublicNavbar } from "../components/public/PublicNavbar.tsx";
import { PublicFooter } from "../components/public/PublicFooter.tsx";
import { WebsiteChatbot } from "../components/public/WebsiteChatbot.tsx";

export const PublicLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top automatically whenever the route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white relative">
      <PublicNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <PublicFooter />
      {/* Product Knowledge Chatbot with direct WhatsApp integration */}
      <WebsiteChatbot />
    </div>
  );
};
