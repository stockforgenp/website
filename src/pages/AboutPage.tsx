import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/common/SEO.tsx";
import { AboutSection } from "../components/public/AboutSection.tsx";
import { Info, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.tsx";
import { CONTACT_INFO } from "../constants/contactInfo.ts";

export const AboutPage: React.FC = () => {
  const { isNepali } = useLanguage();

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About StockForge Retail POS",
    description:
      "The mission, philosophy, and history of StockForge POS: built for local retail marts and storekeepers with offline SQLite technology.",
    publisher: {
      "@type": "Organization",
      name: "StockForge Technologies",
      url: "https://stockforge.app",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: CONTACT_INFO.phone.clean,
        contactType: "customer service",
      },
    },
  };

  return (
    <div>
      <SEO
        title={
          isNepali
            ? "हाम्रोबारे – नेपालको अफलाइन POS इन्जिन कथा"
            : "About Us – Offline Retail Engine Mission in Nepal"
        }
        description={
          isNepali
            ? "क्लाउडPOS को ढिलाइ हटाएर नेपालका किराना र मार्टहरूलाई शून्य-विलम्ब स्थानीय डेस्कटप SQLite प्रविधि प्रदान गर्ने StockForge को कथा र मिसन जान्नुहोस्।"
            : "Learn how StockForge was built to free grocery stores and retail marts in Nepal from cloud downtime with native desktop offline SQLite storage and data privacy."
        }
        keywords={[
          "about StockForge",
          "offline desktop POS Nepal",
          "desktop POS Windows Mac Linux",
          "retail tech Nepal",
          "local retail store POS",
          "desktop SQLite retail engine",
          "store data sovereignty",
          "हाम्रोबारे",
          "नेपाल खुद्रा बिलिङ",
        ]}
        locale={isNepali ? "ne_NP" : "en_NP"}
        canonicalPath="/about"
        breadcrumbs={[
          { name: isNepali ? "गृहपृष्ठ" : "Home", path: "/" },
          { name: isNepali ? "हाम्रोबारे" : "About Us", path: "/about" },
        ]}
        schemaJson={schemaJson}
      />

      {/* Header Banner */}
      <section className="pt-16 pb-12 bg-neutral-950 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <Info className="w-3.5 h-3.5" />
            <span>
              {isNepali ? "हाम्रो कथा र उद्देश्य" : "Our Story & Purpose"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-100 tracking-tight">
            {isNepali ? (
              <>
                खुद्रा व्यापारमा{" "}
                <span className="text-emerald-400">
                  स्वतन्त्रता र विश्वसनीयताको नयाँ युग
                </span>
              </>
            ) : (
              <>
                Empowering Independent Retail with{" "}
                <span className="text-emerald-400">
                  Zero-Downtime Reliability
                </span>
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
            {isNepali
              ? "हामी विश्वास गर्छौँ कि कुनै पनि पसलको काउन्टर कमजोर इन्टरनेट वा टाढाको क्लाउड सर्भरका कारण बन्द हुनु हुँदैन।"
              : "Built by engineers who saw shopkeepers struggle with cloud freezing during festival rushes. Designed with local SQLite storage, sequential billing, and multi-unit precision."}
          </p>
        </div>
      </section>

      {/* Main About Component */}
      <AboutSection />

      {/* Bottom CTA */}
      <section className="py-12 bg-neutral-950 border-t border-neutral-800 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-100">
            {isNepali
              ? "हामीसँग जोडिन चाहनुहुन्छ?"
              : "Join 350+ Storekeepers Thriving with StockForge"}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            {isNepali
              ? "आफ्नो पसलमा नि:शुल्क परीक्षण गर्नुहोस् वा हाम्रो टोलीसँग प्रत्यक्ष कुरा गर्नुहोस्।"
              : "Launch your offline register in seconds or speak with one of our retail implementation specialists."}
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-950"
            >
              <Sparkles className="w-4 h-4" />
              <span>
                {isNepali ? "डेमो अनुरोध गर्नुहोस्" : "Request a Live Demo"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs sm:text-sm font-semibold border border-neutral-800"
            >
              {isNepali ? "सम्पर्क गर्नुहोस्" : "Contact Support Hub"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
