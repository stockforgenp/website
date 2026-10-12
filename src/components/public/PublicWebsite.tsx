import React, { useState, useEffect } from 'react';
import { PublicNavbar } from './PublicNavbar.tsx';
import { HeroSection } from './HeroSection.tsx';
import { FeaturesSection } from './FeaturesSection.tsx';
import { AboutSection } from './AboutSection.tsx';
import { ClientsTestimonialsSection } from './ClientsTestimonialsSection.tsx';
import { FaqSection } from './FaqSection.tsx';
import { ContactSection } from './ContactSection.tsx';
import { PublicFooter } from './PublicFooter.tsx';
import { WebsiteChatbot } from './WebsiteChatbot.tsx';
import { ArrowUp, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.tsx';

export const PublicWebsite: React.FC = () => {
  const { isNepali } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top sticky navigation bar */}
      <PublicNavbar />

      {/* Main Public Website Sections */}
      <main className="flex-1">
        <HeroSection
          onRequestDemo={() => scrollToSection('contact')}
          onExploreFeatures={() => scrollToSection('features')}
          onContactUs={() => scrollToSection('contact')}
        />

        <FeaturesSection onRequestDemo={() => scrollToSection('contact')} />

        <AboutSection />

        <ClientsTestimonialsSection />

        <FaqSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <PublicFooter />

      {/* Product Knowledge Chatbot with direct WhatsApp integration */}
      <WebsiteChatbot />

      {/* Floating Bottom Quick Action Pill */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-xl shadow-emerald-950/60 border border-emerald-400/30 transition-all cursor-pointer transform hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isNepali ? 'डेमो अनुरोध गर्नुहोस्' : 'Request a Demo'}</span>
          </button>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 shadow-lg transition-colors cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
