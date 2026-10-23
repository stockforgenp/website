import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SEO } from "../components/common/SEO.tsx";
import { HeroSection } from "../components/public/HeroSection.tsx";
import { OfflineShowcaseSection } from "../components/public/OfflineShowcaseSection.tsx";
import {
  Scale,
  Receipt,
  Database,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  HelpCircle,
  Sparkles,
  UserCheck,
  FileSpreadsheet,
  Cpu,
  Layers,
  PhoneCall,
  BookOpen,
  Boxes,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.tsx";
import { CONTACT_INFO } from "../constants/contactInfo.ts";

export const HomePage: React.FC = () => {
  const { isNepali } = useLanguage();
  const navigate = useNavigate();

  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "StockForge Desktop POS",
      alternateName: "StockForge Offline Desktop Retail POS",
      url: "https://stockforge.app/",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Windows, macOS, Linux",
      softwareVersion: "2.5.0",
      description:
        "Zero-latency native desktop retail POS & inventory management software for Windows, macOS, and Linux powered by embedded SQLite with automated sequential billing, multi-unit stock, and Khata ledger.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "NPR",
      },
      featureList: [
        "100% Offline Native Desktop Application (Windows, macOS, Linux)",
        "Embedded Local SQLite Database with ACID Durability",
        "Automated Sequential Invoicing & BILL-YYYYMMDD-XXXX Bill Numbering",
        "Multi-Unit Product Inventory (piece, kg, litre, dozen, packet, box, meter)",
        "Gross Profit & Cost of Goods Sold (COGS) Snapshot Pricing",
        "Staff Directory & Monthly Payroll Disbursement Vouchers",
        "Sales & Purchase Dues Tracking with Previous Due, Current Due & Total Due Balance",
        "Partial Payments at Checkout & Inflow with Due Breakdown on Thermal Receipts",
        "Customer Directory & Credit Khata Ledger with Total Due Balance Tracking",
        "Vendor & Supplier Management with Accounts Payable Tracking",
        "Google Sheets Cloud & SQL File Database Backup & Restore (.sql)",
        "Daily Book (Day Book / रोजिन्दा हिसाब किताब) with Opening Cash Balance, +Debit & -Credit Auditing, and 80mm/A4 Print Reports",
        "Multi-Mode Payment Tracking (Cash, Fonepay / QR, Bank Transfer, Cheque, Store Credit)",
        "Batch Number & Expiry Date Tracking with FEFO (First Expiring, First Out) Depletion",
        "Wholesale vs. Retail Dual-Tiered Pricing with Customer Type & Slab Volume Triggers",
        "Damaged, Expired & Spoilage Write-Off with Scrap Vouchers (WO-XXXXX)",
        "Customer Sales Returns (Credit Notes CN-...) and Vendor Purchase Returns (Debit Notes DN-...)",
        "Cash Drawer & Cashier Shift Management with Opening Float and Z-Reports",
        "Bilingual Switch (English & नेपाली) with Automatic Currency रु./Rs. Sync",
        "Dark & Light Theme Mode Ergonomic Toggle",
        "Thermal Receipt Printing (80mm / 58mm)",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "StockForge",
      url: "https://stockforge.app/",
      logo: "https://stockforge.app/icon.png",
      description:
        "Developer of zero-latency offline retail POS systems and inventory management engines for modern stores across Nepal.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: CONTACT_INFO.phone.clean,
        contactType: "customer service",
        availableLanguage: ["English", "Nepali"],
        areaServed: "NP",
      },
    },
  ];

  return (
    <div>
      <SEO
        title={
          isNepali
            ? "StockForge – नेपालको अफलाइन खुद्रा POS र बिलिङ सफ्टवेयर"
            : "StockForge POS – Offline Retail POS & Inventory in Nepal"
        }
        description={
          isNepali
            ? "इन्टरनेट बिना चल्ने द्रुत खुद्रा POS। बहु-एकाइ इन्भेन्टरी, क्रमबद्ध बिलिङ र ग्राहक खाता व्यवस्थापन गर्नुहोस्। आजै प्रत्यक्ष डेमो अनुरोध गर्नुहोस्।"
            : "Speed up store checkouts with zero-latency offline POS. Manage multi-unit stock, sequential bills, and customer khata in Nepal. Request a live demo today."
        }
        keywords={[
          "offline desktop POS software",
          "desktop POS Windows Mac Linux",
          "retail billing software Nepal",
          "desktop inventory management software",
          "multi unit inventory kg litre pcs",
          "customer credit khata ledger",
          "thermal receipt printing 80mm",
          "sequential invoicing BILL",
          "zero downtime POS Nepal",
          "डेस्कटप बिलिङ सफ्टवेयर",
          "नेपाल इन्भेन्टरी व्यवस्थापन",
        ]}
        locale={isNepali ? "ne_NP" : "en_NP"}
        canonicalPath="/"
        breadcrumbs={[{ name: isNepali ? "गृहपृष्ठ" : "Home", path: "/" }]}
        schemaJson={schemaJson}
      />

      {/* Hero Section (Contains the single <h1>) */}
      <HeroSection
        onRequestDemo={() => navigate("/contact")}
        onExploreFeatures={() => navigate("/features")}
        onContactUs={() => navigate("/contact")}
      />

      {/* Section 1: Architecture Comparison Diagram (H2) */}
      <section className="py-16 bg-neutral-950 border-t border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
              <Cpu className="w-3.5 h-3.5" />
              <span>
                {isNepali ? "इन्जिनको संरचना" : "Architecture Breakdown"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight">
              {isNepali
                ? "नेपालका खुद्रा व्यापारीहरू किन अफलाइन प्रणाली रोज्छन्?"
                : "Why Independent Retailers in Nepal Choose Offline-First Architecture"}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {isNepali
                ? "परम्परागत क्लाउड POS ले प्रत्येक बिलिङ गर्दा टाढाको सर्भरमा अनुरोध पठाउँछ, जसले गर्दा भीडभाडमा काउन्टर ढिलो हुन्छ। StockForge विन्डोज, म्याक र लिनक्स (Windows, macOS, Linux) का लागि नेटिभ डेस्कटप सफ्टवेयर हो, जसले तपाईंको कम्प्युटरमै स्थानीय SQLite मार्फत ०ms मा तुरुन्तै कारोबार सम्पन्न गर्छ।"
                : "Traditional cloud point-of-sale software depends on continuous internet connections. When network traffic spikes during festive shopping, cloud counters freeze. StockForge runs as a native desktop application on Windows, macOS, and Linux, executing all queries locally with 0ms sub-millisecond SQLite speed."}
            </p>
          </div>

          {/* Visual Architecture Comparison Image */}
          <div className="flex justify-center mb-8">
            <img
              src="/architecture-diagram.svg"
              alt="Visual comparison between legacy cloud POS latency and StockForge offline native desktop application zero millisecond response time in Nepal"
              width={900}
              height={480}
              loading="lazy"
              decoding="async"
              className="w-full max-w-4xl rounded-2xl border border-neutral-800 shadow-2xl bg-neutral-900/60"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {isNepali
                  ? "इन्टरनेट नहुँदा पनि शतप्रतिशत काम"
                  : "100% Functional Without Internet"}
              </span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-teal-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>
                {isNepali
                  ? "स्थानीय हार्डवेयरमा सुरक्षित डेटा"
                  : "Complete Data Privacy On Device"}
              </span>
            </span>
            <span>•</span>
            <Link
              to="/features"
              className="text-neutral-300 hover:text-emerald-400 underline font-semibold transition-colors"
            >
              {isNepali
                ? "थप सुविधाहरू हेर्नुहोस् →"
                : "Learn more about platform features →"}
            </Link>
          </div>
        </div>
      </section>

      {/* Promoted Section: 100% Offline-First Interactive Showcase */}
      <OfflineShowcaseSection />

      {/* Section 2: Core Capabilities Strip (H2 & H3) */}
      <section className="py-16 bg-neutral-900/40 border-y border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-semibold text-emerald-400 font-mono uppercase tracking-wider mb-1">
                {isNepali
                  ? "इन्जिनका मुख्य आधारहरू"
                  : "Core Architecture Pillars"}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-100 tracking-tight">
                {isNepali
                  ? "आधुनिक खुद्रा काउन्टरका लागि आवश्यक शक्तिशाली क्षमताहरू"
                  : "Essential Capabilities for Modern High-Velocity Retail Counters"}
              </h2>
            </div>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 px-4 py-2.5 rounded-xl border border-emerald-500/25 transition-all shrink-0"
            >
              <span>
                {isNepali
                  ? "सबै सुविधाहरू हेर्नुहोस्"
                  : "Explore All Features"}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* 1. Multi-Unit Inventory */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-neutral-100 mb-1.5">
                  {isNepali
                    ? "बहु-एकाइ इन्भेन्टरी (kg, litre, pcs)"
                    : "Multi-Unit Inventory (kg, litre, pcs)"}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                  {isNepali
                    ? "खुला चामल, तेल वा प्याकेट सामान—केजी, लिटर वा पिसमा सजिलै बिक्री गर्नुहोस्। दशमलव तौल (जस्तै १.५ kg) मा पनि तत्काल स्टक कटौती।"
                    : "Sell loose or packaged items by kg, litre, or piece. Full support for fractional weights (like 1.5 kg) with real-time stock deductions."}
                </p>
              </div>
              <Link
                to="/features"
                className="text-[11px] font-semibold text-emerald-400 hover:underline inline-flex items-center gap-1"
              >
                <span>
                  {isNepali ? "एकाइ प्रणाली हेर्नुहोस्" : "Multi-unit details"}
                </span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* 2. Sequential Billing */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-3">
                  <Receipt className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-neutral-100 mb-1.5">
                  {isNepali
                    ? "क्रमबद्ध बिलिङ (BILL-YYYYMMDD-XXXX)"
                    : "Sequential Invoicing & Bill Numbers"}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                  {isNepali
                    ? "हरेक बिक्रीमा स्वतः अद्वितीय क्रमबद्ध बिल नम्बर तयार। छुट, कर र कुल रकम १ सेकेन्डमै सटीक हिसाब!"
                    : "Automated audit-proof bill numbers per checkout. Subtotals, discounts, and taxes calculated in a snap."}
                </p>
              </div>
              <Link
                to="/features"
                className="text-[11px] font-semibold text-teal-400 hover:underline inline-flex items-center gap-1"
              >
                <span>
                  {isNepali ? "बिलिङ ढाँचा हेर्नुहोस्" : "Invoice formats"}
                </span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* 3. 100% Offline SQLite */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-neutral-100 mb-1.5">
                  {isNepali
                    ? "१००% नेटिभ डेस्कटप SQLite ACID डेटाबेस"
                    : "100% Native Desktop SQLite ACID"}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                  {isNepali
                    ? "Windows, macOS र Linux मा चल्ने नेटिभ डेस्कटप एप। इन्टरनेट बिना पनि ०ms गतिमा चल्छ र सम्पूर्ण डेटा कम्प्युटरमै १००% सुरक्षित!"
                    : "Native desktop app for Windows, Mac & Linux with embedded SQLite. Zero internet needed, zero cloud lag, and 100% local privacy."}
                </p>
              </div>
              <Link
                to="/about"
                className="text-[11px] font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1"
              >
                <span>
                  {isNepali
                    ? "सुरक्षा प्रविधि पढ्नुहोस्"
                    : "Offline architecture story"}
                </span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* 4. Customer & Vendor Dues, Ledgers & Settlement */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-neutral-100 mb-1.5">
                  {isNepali
                    ? "बाँकी बक्यौता (Dues), व्यक्तिगत लेजर र १-क्लिक फर्स्यौट"
                    : "Customer & Vendor Dues, Ledgers & Settlement"}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                  {isNepali
                    ? "आंशिक भुक्तानी, साविक र हालको बाँकी हिसाब, प्रत्येक ग्राहक र आपूर्तिकर्ताको विस्तृत खाता लेजर, र १-क्लिकमा नगद/eSewa/बैंकबाट रकम फर्स्यौट!"
                    : "Manage partial payments, Previous + Current Due math on receipts, individual party ledgers, and 1-click balance settlements via Cash, eSewa, or Bank."}
                </p>
              </div>
              <Link
                to="/features"
                className="text-[11px] font-semibold text-emerald-400 hover:underline inline-flex items-center gap-1"
              >
                <span>
                  {isNepali ? "लेजर तथा फर्स्यौट प्रणाली हेर्नुहोस्" : "Dues, ledgers & settlement specs"}
                </span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* 5. Profit & Payroll */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-3">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-neutral-100 mb-1.5">
                  {isNepali
                    ? "नाफा (COGS) र कर्मचारी पेरोल"
                    : "Gross Margin & Staff Payroll"}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                  {isNepali
                    ? "बिक्री हुँदाकै खरिद मूल्यबाट वास्तविक कुल नाफा (COGS) हेर्नुहोस् र १-क्लिकमा कर्मचारीको मासिक तलब भौचर निकाल्नुहोस्।"
                    : "Lock in buy prices at checkout to see real gross margins. Manage staff wages and print monthly salary slips in seconds."}
                </p>
              </div>
              <Link
                to="/features"
                className="text-[11px] font-semibold text-amber-400 hover:underline inline-flex items-center gap-1"
              >
                <span>
                  {isNepali ? "पेरोल सुविधा हेर्नुहोस्" : "Payroll workflow"}
                </span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* 6. Google Sheets & SQL Backup */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-3">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-neutral-100 mb-1.5">
                  {isNepali
                    ? "गुगल सिट र .sql डेटा ब्याकअप"
                    : "Google Sheets & SQL File Backups"}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                  {isNepali
                    ? "१-क्लिकमै गुगल सिटमा क्लाउड ब्याकअप वा पेनड्राइभमा .sql स्क्रिप्ट सेभ गर्नुहोस्। कुनै पनि समयमा तत्काल डेटा रिस्टोर!"
                    : "Back up your store to your Google Sheet in 1 click, or export clean .sql files for USB storage and quick PC migration."}
                </p>
              </div>
              <Link
                to="/faqs"
                className="text-[11px] font-semibold text-purple-400 hover:underline inline-flex items-center gap-1"
              >
                <span>
                  {isNepali ? "ब्याकअप प्रश्नोत्तर हेर्नुहोस्" : "Backup FAQs"}
                </span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* 7. Daily Book & Multi-Mode Cash Flow */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-neutral-100 mb-1.5">
                  {isNepali
                    ? "दैनिक हिसाब किताब (Daily Book / Day Book)"
                    : "Daily Book & Cash Flow Ledger"}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                  {isNepali
                    ? "दिनभरको बिक्री, खरिद, खर्च, ग्राहक बाँकी संकलन र तलबको दोहोरो हिसाब। सुरुको ओपनिङ नगद, दिनको आम्दानी-खर्च (+डेबिट/-क्रेडिट), र गल्लाको क्लोजिङ ब्यालेन्स तत्काल अडिट!"
                    : "Track daily sales, purchases, expenses, and due collections. Computes opening float, +debit inflow vs -credit outflow, and final closing cash in hand with 80mm/A4 reports."}
                </p>
              </div>
              <Link
                to="/features"
                className="text-[11px] font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1"
              >
                <span>
                  {isNepali ? "डे-बुक सुविधा हेर्नुहोस्" : "Daily book details"}
                </span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* 8. Batch Expiry & Spoilage Write-Off */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-3">
                  <Boxes className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-neutral-100 mb-1.5">
                  {isNepali
                    ? "ब्याच, FEFO म्याद र नोक्सानी व्यवस्थापन"
                    : "Batch Lots, FEFO Expiry & Spoilage"}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                  {isNepali
                    ? "उत्पादन तथा म्याद सकिने मिति, ३०-दिने पूर्वचेतावनी, र पहिले म्याद सकिने सामान (FEFO) स्वतः बिक्री। बिग्रेका सामान नष्ट गर्न स्क्र्याप भौचर (WO-...) र नाफा-नोक्सान समायोजन।"
                    : "Track batch lots with FEFO automated depletion, early 30-day expiry radar, and formal scrap write-off vouchers (WO-...) to keep inventory and accounting crystal clear."}
                </p>
              </div>
              <Link
                to="/features"
                className="text-[11px] font-semibold text-amber-400 hover:underline inline-flex items-center gap-1"
              >
                <span>
                  {isNepali ? "ब्याच तथा म्याद विवरण" : "Batch & FEFO specs"}
                </span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Helpful Everyday Store Scenarios (H2 & H3) */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-100 tracking-tight">
              {isNepali
                ? "दैनिक खुद्रा व्यापारका वास्तविक समस्याहरूको भरपर्दो समाधान"
                : "Built to Solve Everyday Retail Bottlenecks in Nepal"}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              {isNepali
                ? "काठमाडौँ उपत्यकादेखि विभिन्न सहरका खुद्रा व्यापारीहरूको अनुभवका आधारमा तयार गरिएका व्यावहारिक समाधानहरू।"
                : "Engineered from direct field observations in grocery marts, dairies, and hardware supply stores."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Scenario 1
              </span>
              <h3 className="text-base font-bold text-neutral-100">
                {isNepali
                  ? "दशैँ-तिहारको भीडभाड र नेटवर्क ढिलाइ"
                  : "Festival Rush Counter Congestion"}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {isNepali
                  ? "चाडपर्वमा न्यूरोड वा असनमा मोबाइल नेटवर्क जाम हुँदा अनलाइन POS रोकिन्छन्। StockForge डेस्कटप एप्लिकेसनमा सबै डेटा स्थानीय SQLite इन्जिनमार्फत चल्ने भएकाले सामान छनोट र बिलिङ ० सेकेन्डको ढिलाइ बिना चल्छ।"
                  : "Cellular signals in dense commercial centers often collapse during peak festivals. Because StockForge requires zero network round-trips for sales, your cashiers process customers without waiting."}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
              <span className="text-xs font-mono font-bold text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                Scenario 2
              </span>
              <h3 className="text-base font-bold text-neutral-100">
                {isNepali
                  ? "तौल र तरल पदार्थको सटीक बिक्री"
                  : "Fractional Weight & Liquid Precision"}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {isNepali
                  ? "२.५ किलोग्राम बासमती चामल वा १.५ लिटर तोरीको तेल बेच्दा दशमलव मात्राको हिसाब गर्न झन्झट हुँदैन। प्रणालीले स्वतः स्टक घटाउँछ र न्यूनतम स्टक चेतावनी दिन्छ।"
                  : "Selling 2.75 kg of loose lentils or 1.5 litres of milk requires decimal arithmetic. StockForge calculates line totals accurately and updates bulk inventories in real time."}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                Scenario 3
              </span>
              <h3 className="text-base font-bold text-neutral-100">
                {isNepali
                  ? "आंशिक भुक्तानी, साविकको बाँकी र कुल बक्यौता हिसाब"
                  : "Partial Payments & Real-Time Dues Tracking"}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {isNepali
                  ? "जस्तै ग्राहकको रु. १०,००० को बिलमा रु. ६,००० तिर्दा रु. ४,००० बाँकी रहन्छ। अर्को पटक रु. ५,००० को बिलमा रु. ३,००० तिर्दा साविकको बाँकी (४,०००), हालको बाँकी (२,०००) र कुल बाँकी (६,०००) रसिद र इतिहासमा स्पष्ट देखिन्छ। थोक आपूर्तिकर्ताको खरिदमा पनि यही स्वचालित हिसाब लागू हुन्छ।"
                  : "If a customer with a Rs. 10,000 bill pays Rs. 6,000, Rs. 4,000 remains due. Next time on a Rs. 5,000 bill with Rs. 3,000 paid, StockForge instantly itemizes Previous Due (4,000), Current Due (2,000), and Total Due (6,000) on the receipt. Wholesale vendor purchases follow the exact same automated ledger."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Verified Social Proof Teaser (H2 & H3) */}
      <section className="py-16 bg-neutral-900/40 border-t border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-neutral-900 to-teal-950/40 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                <Users className="w-3.5 h-3.5" />
                <span>
                  {isNepali
                    ? "३५०+ सक्रिय पसलहरूको विश्वास"
                    : "350+ Verified Retail Stores Across Nepal"}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-100 tracking-tight">
                {isNepali
                  ? "खुद्रा व्यापारीहरू के भन्छन्? वास्तविक प्रतिक्रिया पढ्नुहोस्"
                  : "See How Supermarts & Retailers Save 3+ Hours Daily"}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
                {isNepali
                  ? "किराना मार्ट, डेरी, हार्डवेयर र बुटिक पसलहरू कसरी शून्य-ढिलाइ बिलिङबाट लाभान्वित भइरहेका छन् हेर्नुहोस्।"
                  : "Read firsthand testimonials on how offline stability, customer Khata, and multi-unit billing eliminated counter stress."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                to="/testimonials"
                className="px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold border border-neutral-700 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>
                  {isNepali
                    ? "प्रतिक्रियाहरू पढ्नुहोस्"
                    : "Read Client Stories"}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-lg shadow-emerald-950 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {isNepali ? "डेमो अनुरोध गर्नुहोस्" : "Request Free Demo"}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Strong Final CTA Section with Helpful Next Steps */}
      <section className="py-20 bg-neutral-950 border-t border-neutral-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {isNepali
                ? "कुनै प्रतिबद्धता बिना निःशुल्क डेमो"
                : "Zero Commitment · On-Site Setup Available"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-neutral-100 tracking-tight">
            {isNepali ? (
              <>
                आफ्नो पसल काउन्टरलाई{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  शून्य-ढिलाइ गतिमा
                </span>{" "}
                ल्याउनुहोस्
              </>
            ) : (
              <>
                Ready to Upgrade Your Store Counter to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Zero-Downtime Speed?
                </span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {isNepali
              ? "हाम्रा प्राविधिक इन्जिनियरहरू तपाईंको पसलमै आएर निःशुल्क डेमो देखाउन तयार छन्। तपाईंको हालकै ल्यापटप र प्रिन्टरसँग सिधै चल्छ।"
              : "Our retail solutions engineers provide hands-on demonstrations across Birgunj, Pokhariya, Parsa, and retail commercial hubs. Works directly with your existing laptop, PC, and 80mm receipt printer."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm flex items-center gap-2 shadow-xl shadow-emerald-950 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>
                {isNepali
                  ? "प्रत्यक्ष डेमो अनुरोध गर्नुहोस्"
                  : "Schedule On-Site Demo"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/faqs"
              className="px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-sm font-semibold border border-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-neutral-400" />
              <span>
                {isNepali ? "बारम्बार सोधिने प्रश्नहरू" : "Read POS FAQs"}
              </span>
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap justify-center items-center gap-6 text-[11px] text-neutral-400">
            <span>✓ Native Desktop App for Windows, macOS & Linux</span>
            <span>✓ Standard 80mm / 58mm Thermal Printers Supported</span>
            <span>✓ No Forced Monthly Cloud Fees</span>
          </div>
        </div>
      </section>
    </div>
  );
};
