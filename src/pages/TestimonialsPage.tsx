import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/common/SEO.tsx";
import { ClientsTestimonialsSection } from "../components/public/ClientsTestimonialsSection.tsx";
import { Users, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.tsx";

export const TestimonialsPage: React.FC = () => {
  const { isNepali } = useLanguage();

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "StockForge POS Platform",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "350",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Rajesh Prasad Sah" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Managing multi-unit grocery stock in kg, litre, and pieces with automated sequential bill numbers in Adarshnagar, Birgunj saved us 3 hours every single evening.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Amit Kumar Patel" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "During peak festive rush in Main Road Birgunj when mobile networks were jammed, StockForge ran 100% offline without pausing for even a single second.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sunita Devi Yadav" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Selling milk in litres and paneer in kg in Pokhariya Bazaar with fractional decimals is completely effortless now. Stock deductions and bills are exact.",
      },
    ],
  };

  return (
    <div>
      <SEO
        title={
          isNepali
            ? "ग्राहक समीक्षा – वीरगञ्ज र पोखरियाका खुद्रा व्यापारीहरू"
            : "Storekeeper Reviews – Verified Retailers in Birgunj & Pokhariya"
        }
        description={
          isNepali
            ? "वीरगञ्ज र पोखरियाका किराना मार्ट, डेरी, कपडा र हार्डवेयर पसलहरूको वास्तविक अनुभव। १००% अफलाइन द्रुत बिलिङ र ग्राहक खाता बारे व्यापारीहरूका सफलताका कथाहरू।"
            : "Read verified success stories from retail marts, dairies, and hardware suppliers across Birgunj and Pokhariya, Parsa using StockForge offline desktop POS."
        }
        keywords={[
          "retail POS reviews Nepal",
          "verified customer stories POS",
          "store owner testimonials Birgunj",
          "retailers Pokhariya Parsa",
          "offline POS Birgunj",
          "mart billing Pokhariya",
          "नेपाल पसल ग्राहक समीक्षा",
          "वीरगञ्ज पसल सफ्टवेयर",
          "पोखरिया बिलिङ",
        ]}
        locale={isNepali ? "ne_NP" : "en_NP"}
        canonicalPath="/testimonials"
        breadcrumbs={[
          { name: isNepali ? "गृहपृष्ठ" : "Home", path: "/" },
          {
            name: isNepali ? "ग्राहक प्रतिक्रिया" : "Client Stories",
            path: "/testimonials",
          },
        ]}
        schemaJson={schemaJson}
      />

      {/* Header Banner */}
      <section className="pt-16 pb-12 bg-neutral-950 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>
              {isNepali
                ? "सन्तुष्ट व्यापारीहरू"
                : "Verified Store Owner Stories"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-100 tracking-tight">
            {isNepali ? (
              <>
                वास्तविक व्यापारीहरूको{" "}
                <span className="text-emerald-400">सफलता र अनुभव</span>
              </>
            ) : (
              <>
                Real Feedback from{" "}
                <span className="text-emerald-400">
                  Independent Retail Pioneers
                </span>
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
            {isNepali
              ? "साना किराना पसलदेखि ठूला मार्टसम्म—हेर्नुहोस् कसरी StockForge ले उनीहरूको दैनिक बिलिङ, हिसाब र इन्भेन्टरी समस्या समाधान गर्‍यो।"
              : "Discover how marts, grocery stores, organic dairies, and hardware suppliers eliminated counter freezes, streamlined invoicing, and automated daily reconciliations."}
          </p>
        </div>
      </section>

      {/* Main Testimonials Section */}
      <ClientsTestimonialsSection />

      {/* Bottom CTA */}
      <section className="py-12 bg-neutral-950 border-t border-neutral-800 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-100">
            {isNepali
              ? "तपाईं पनि आफ्नो पसललाई आधुनिक बनाउनुहोस्"
              : "Ready to Transform Your Store Counter?"}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            {isNepali
              ? "१ मिनेटमा आफ्नो पसल दर्ता गर्नुहोस् र १००% अफलाइन POS सुरु गर्नुहोस्।"
              : "Join the community of modern storekeepers who never worry about internet outages again."}
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
              {isNepali ? "हामीसँग सोधपुछ गर्नुहोस्" : "Contact Support Team"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
