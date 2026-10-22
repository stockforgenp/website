import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/common/SEO.tsx";
import { FaqSection } from "../components/public/FaqSection.tsx";
import { HelpCircle, MessageSquare, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.tsx";

export const FaqPage: React.FC = () => {
  const { isNepali } = useLanguage();

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does StockForge work completely offline without an internet connection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. StockForge is a native desktop application for Windows, macOS, and Linux that runs entirely locally with an embedded SQLite engine. Sales, stock updates, and billing work at 0ms latency with zero network dependencies.",
        },
      },
      {
        "@type": "Question",
        name: "Is StockForge a desktop application or a web app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "StockForge is a native desktop application, not a web application. It installs directly on Windows, macOS, and Linux computers with zero browser dependencies.",
        },
      },
      {
        "@type": "Question",
        name: "How is automated sequential bill numbering and tax calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each checkout automatically produces a unique sequential bill reference (format BILL-YYYYMMDD-XXXX). The system computes taxable subtotal after discounts, calculates applicable tax breakdowns, and stores the grand total in the local ledger.",
        },
      },
      {
        "@type": "Question",
        name: "Which measurement units are supported for products (piece, kg, litre, etc.)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "StockForge natively supports piece (pcs), kilogram (kg), litre (ltr), gram (g), millilitre (ml), dozen, packet, box, and meter. Products automatically deduct inventory according to their unit designation.",
        },
      },
      {
        "@type": "Question",
        name: "Where is my shop data stored, and how do I back it up?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your shop database is stored locally on your device with zero cloud transmission. Under Settings, you can trigger a one-click binary export of the entire SQLite database (.db) or JSON audit report to a flash drive.",
        },
      },
      {
        "@type": "Question",
        name: "Can I backup and restore data through Google Sheets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can backup and restore all your store data through Google Sheets. When you click Backup, the client is authenticated with Google and prompted for Google Sheets permission, and all data is backed up. The same applies for restore back into your store (internet connection required).",
        },
      },
      {
        "@type": "Question",
        name: "Can I backup and restore data using SQL (.sql) files?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can backup and restore your complete store database using standard SQL (.sql) script files. All schema definitions, inventory records, sales, and accounting ledgers can be exported and restored with 1-click execution offline.",
        },
      },
      {
        "@type": "Question",
        name: "Does StockForge support Customer Credit Khata and Vendor Supplier management?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. StockForge features customer directory and credit Khata ledgers to track customer balances and purchase histories, as well as vendor supplier directories to track purchase invoices, payment schedules, and accounts payable.",
        },
      },
      {
        "@type": "Question",
        name: "Does StockForge include Dark/Light theme toggles and bilingual English / Nepali localization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. StockForge includes a 1-click Dark and Light theme toggle for cashier ergonomics, as well as an instant bilingual switch between English and Nepali with automatic currency symbol sync.",
        },
      },
      {
        "@type": "Question",
        name: "Can I print receipts on standard 80mm / 58mm thermal POS printers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. StockForge features custom CSS print stylesheets calibrated for 80mm and 58mm thermal receipt printers with store header, bill numbers, unit breakdown, tax breakdown, and footer notes.",
        },
      },
      {
        "@type": "Question",
        name: "Does StockForge support Nepali Bikram Sambat (B.S.) dates on bills and reports?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, and it is enabled by default. StockForge includes a 100% offline Bikram Sambat (B.S.) calendar engine that displays official Nepali dates across bills, invoices, salary slips, and accounting ledgers, with a 1-click toggle to A.D. in Settings.",
        },
      },
      {
        "@type": "Question",
        name: "How does the dedicated Daily Cash Book (Day Book) audit work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "StockForge includes a dedicated Daily Book (shortcut Ctrl+J / ⌘+J) that aggregates daily Sales, Restock Purchases, Store Overheads, Staff Salaries, Customer Due Collections, and Vendor Due Payments. It computes cumulative Opening Cash Balance, +Debit Inflows, -Credit Outflows, and Closing Balance with 1-click printable A4 & 80mm thermal reports.",
        },
      },
      {
        "@type": "Question",
        name: "Can I record payments across Cash, Fonepay, QR, Bank Transfer, and Cheque?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every sale, purchase restock, expense, payroll voucher, and due settlement supports explicit payment modes: Cash, Online/QR (Fonepay, eSewa, Khalti), Bank Transfer, Cheque, and Store Credit.",
        },
      },
    ],
  };

  return (
    <div>
      <SEO
        title={
          isNepali
            ? "प्रश्नोत्तर (FAQs) – खुद्रा POS र बिलिङ सहायता"
            : "Frequently Asked Questions – Offline Retail POS Help"
        }
        description={
          isNepali
            ? "अफलाइन POS प्रविधि, ८०mm/५८mm थर्मल प्रिन्टर, लिटर/केजी एकाइ, र सुरक्षित डेटाबेस ब्याकअप बारे बारम्बार सोधिने प्रश्नहरूको स्पष्ट जवाफ पाउनुहोस्।"
            : "Get answers to common retail POS questions: native desktop offline SQLite safety, 80mm/58mm thermal printing, fractional units, and database backups in Nepal."
        }
        keywords={[
          "offline POS FAQ Nepal",
          "desktop POS questions and answers",
          "native desktop SQLite POS",
          "thermal printer pairing POS",
          "Google Sheets restore POS",
          "customer khata credit FAQ",
          "प्रायः सोधिने प्रश्नहरू",
          "बिलिङ सफ्टवेयर प्रश्नोत्तर",
        ]}
        locale={isNepali ? "ne_NP" : "en_NP"}
        canonicalPath="/faqs"
        breadcrumbs={[
          { name: isNepali ? "गृहपृष्ठ" : "Home", path: "/" },
          { name: isNepali ? "प्रश्नोत्तर" : "FAQs", path: "/faqs" },
        ]}
        schemaJson={schemaJson}
      />

      {/* Header Banner */}
      <section className="pt-16 pb-12 bg-neutral-950 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>
              {isNepali ? "सहयोग तथा जानकारी" : "Knowledge & Help Center"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-100 tracking-tight">
            {isNepali ? (
              <>
                तपाईंका प्रश्नहरूका{" "}
                <span className="text-emerald-400">विस्तृत र स्पष्ट जवाफ</span>
              </>
            ) : (
              <>
                Clear Answers to{" "}
                <span className="text-emerald-400">
                  Common Retail Inquiries
                </span>
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
            {isNepali
              ? "अफलाइन इन्जिन, क्रमबद्ध बिलिङ हिसाब, बहु-एकाइ इन्भेन्टरी, र डेटा सुरक्षा सम्बन्धमा सबैभन्दा धेरै सोधिने प्रश्नहरूको समाधान।"
              : "Detailed explanations of our offline architecture, sequential invoicing standards, measurement units, hardware integration, and database backup."}
          </p>
        </div>
      </section>

      {/* Main FAQ Component */}
      <FaqSection />

      {/* Still have questions? Help Card */}
      <section className="py-12 bg-neutral-900/40 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 text-center space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
              <MessageSquare className="w-6 h-6" />
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-neutral-100">
              {isNepali
                ? "तपाईंको जिज्ञासा अझै बाँकी छ?"
                : "Still Have Questions or Specific Requirements?"}
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
              {isNepali
                ? "हाम्रो प्राविधिक टोली तपाईंलाई मद्दत गर्न तयार छ। फोन वा इमेलमार्फत सिधै सम्पर्क गर्नुहोस्।"
                : "Our retail support specialists are available daily to assist with hardware pairing, invoicing setups, or data migration."}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {isNepali ? "डेमो अनुरोध गर्नुहोस्" : "Request a Demo"}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-semibold text-xs border border-neutral-800 transition-all cursor-pointer"
              >
                {isNepali ? "सम्पर्क फाराम खोल्नुहोस्" : "Contact Support Hub"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
