import React from "react";
import {
  Info,
  Shield,
  Zap,
  HeartHandshake,
  Building,
  Target,
  Lock,
  Globe2,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext.tsx";

export const AboutSection: React.FC = () => {
  const { isNepali } = useLanguage();

  const values = [
    {
      icon: Lock,
      title: isNepali
        ? "डेटा सार्वभौमिकता (Data Sovereignty)"
        : "Absolute Data Sovereignty",
      desc: isNepali
        ? "तपाईंको बिक्री, नाफा र ग्राहकको विवरण कुनै तेस्रो पक्षको क्लाउड सर्भरमा जाँदैन। सबै विवरण तपाईंको स्थानीय कम्प्युटरमै सुरक्षित रहन्छ।"
        : "Your transactions, margins, and customer data never leave your computer. 100% offline ACID SQLite database keeps your business confidential and secure.",
    },
    {
      icon: Zap,
      title: isNepali
        ? "शून्य-विलम्ब गति (Zero-Lag Speed)"
        : "Sub-Second Checkout Velocity",
      desc: isNepali
        ? "इन्टरनेट ढिलो हुँदा वा बत्ती जाँदा पनि काउन्टर रोकिँदैन। प्रति सेकेन्ड धेरै बिलिङ गर्न सकिने गरी डिजाइन गरिएको प्रणाली।"
        : "Engineered for peak rush hours. Zero network round-trips means sales process instantly with rapid item search and keyboard accelerators.",
    },
    {
      icon: Shield,
      title: isNepali
        ? "कानूनी तथा कर नियम अनुकूल बिलिङ"
        : "Standardized Invoicing Rigor",
      desc: isNepali
        ? "क्रमबद्ध बिल नम्बरिङ, करयोग्य रकम र पारदर्शी हिसाब जसले गर्दा अडिट र वित्तीय विवरण दाखिला गर्न सहज हुन्छ।"
        : "Standardized sequential bill sequencing, transparent taxable breakdowns, and automated invoice calculation built directly into the core ledger.",
    },
    {
      icon: HeartHandshake,
      title: isNepali
        ? "खुद्रा व्यापारीहरूको विश्वास"
        : "Built With Retailers in Mind",
      desc: isNepali
        ? "किराना, मार्ट, हार्डवेयर र लिक्विड/एकाइ आधारित पसलहरूको वास्तविक समस्या बुझेर तयार पारिएको सफ्टवेयर।"
        : "Developed in direct consultation with grocery shopkeepers, mart managers, and hardware retailers to eliminate daily bookkeeping pain.",
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: isNepali
        ? "स्थानीय खुद्रा समस्याहरूको अध्ययन"
        : "Retail Field Research",
      desc: isNepali
        ? "काठमाडौँ, ललितपुर र पोखराका ५० भन्दा बढी पसलहरूमा क्लाउड POS का समस्याहरूको पहिचान।"
        : "Investigated POS freeze rates during peak festivals across retail marts in Nepal.",
    },
    {
      year: "2025",
      title: isNepali
        ? "नेटिभ डेस्कटप SQLite इन्जिन"
        : "Native Desktop Architecture",
      desc: isNepali
        ? "इन्टरनेट बिना नै Windows, macOS र Linux मा स्थानीय SQLite चलाउने पूर्ण अफलाइन-फर्स्ट डेस्कटप सफ्टवेयर तयार।"
        : "Pioneered native offline desktop app with local SQLite ACID integrity, sequential billing, and multi-unit support for Windows, macOS & Linux.",
    },
    {
      year: "2026",
      title: isNepali ? "३५०+ पसलहरूमा सञ्चालन" : "Powering 350+ Stores",
      desc: isNepali
        ? "मासिक १२ करोड भन्दा बढीको कारोबार सुरक्षित रूपमा प्रशोधन गर्दै नयाँ मानक स्थापना।"
        : "Enabling seamless multi-unit inventory, automated payroll, and zero-downtime sales daily.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-neutral-950 border-t border-neutral-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <Info className="w-3.5 h-3.5" />
            <span>
              {isNepali ? "हाम्रो कथा र उद्देश्य" : "Our Story & Purpose"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight">
            {isNepali ? (
              <>
                किन हामीले <span className="text-emerald-400">StockForge</span>{" "}
                बनाएका हौँ?
              </>
            ) : (
              <>
                Why We Built{" "}
                <span className="text-emerald-400">StockForge</span> for
                Retailers
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            {isNepali
              ? "हामीले देखेका छौँ कि कसरी इन्टरनेट कनेक्सन कमजोर हुँदा वा क्लाउड सर्भर डाउन हुँदा खुद्रा पसलका ग्राहकहरू लामो लाइनमा उभिन बाध्य हुन्छन्। मासिक महँगो शुल्क तिरेर पनि भरपर्दो नहुने परम्परागत सफ्टवेयरको विकल्पका रूपमा StockForge को जन्म भएको हो।"
              : "We witnessed local retailers lose sales during festival rushes simply because their cloud POS was buffering or disconnected. We engineered StockForge to be completely resilient, fast, and 100% private with local storage."}
          </p>
        </div>

        {/* Mission & Vision Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-neutral-100 mb-2">
              {isNepali ? "हाम्रो मिसन (Our Mission)" : "Our Mission"}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {isNepali
                ? "प्रत्येक खुद्रा पसललाई—चाहे त्यो सानो किराना पसल होस् वा विशाल डिपार्टमेन्टल स्टोर—अत्याधुनिक, इन्टरनेट-रहित, भरपर्दो र पारदर्शी बिलिङ प्रविधि उपलब्ध गराउनु जसले गर्दा उनीहरूको व्यवसाय बिना कुनै रोकावट चौबीसै घण्टा चल्न सकोस्।"
                : "To democratize enterprise-grade retail intelligence for independent stores, marts, and specialty retailers. We believe store owners should own their software and data completely without being held hostage by monthly cloud subscriptions."}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400 mb-4">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-neutral-100 mb-2">
              {isNepali ? "हाम्रो भिजन (Our Vision)" : "Our Vision"}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {isNepali
                ? "खुद्रा व्यापारमा डिजिटल क्रान्ति ल्याउने जहाँ काउन्टर सफ्टवेयर चलाउन इन्टरनेट वा महँगो सर्भरको चिन्ता लिनु पर्दैन। क्रमबद्ध बिलिङ, एकाइ व्यवस्थापन (kg, ltr, pcs), र पेरोल व्यवस्थापनमा नेपालभरिका खुद्रा व्यापारीहरूको पहिलो रोजाइ बन्ने।"
                : "To set the gold standard for zero-downtime retail point-of-sale systems across South Asia. Empowering every shop owner with immediate financial transparency, exact unit margins, and effortless regulatory compliance."}
            </p>
          </div>
        </div>

        {/* Core Values 4-Grid */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-neutral-100 mb-6 text-center sm:text-left">
            {isNepali
              ? "हाम्रा मुख्य सिद्धान्तहरू"
              : "Core Principles Guiding StockForge"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-100 mb-1.5">
                    {v.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800">
          <h3 className="text-base sm:text-lg font-bold text-neutral-100 mb-6 flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-emerald-400" />
            <span>
              {isNepali
                ? "विकास यात्रा र माइलस्टोनहरू"
                : "Our Evolution & Key Milestones"}
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="space-y-2 border-l-2 border-emerald-500/40 pl-4 py-1"
              >
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {m.year}
                </span>
                <div className="text-sm font-bold text-neutral-100">
                  {m.title}
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
