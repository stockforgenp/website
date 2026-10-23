import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/common/SEO.tsx";
import { FeaturesSection } from "../components/public/FeaturesSection.tsx";
import {
  Check,
  X,
  Layers,
  Sparkles,
  ArrowRight,
  Monitor,
  Printer,
  Keyboard,
  HardDrive,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  FileCode,
  Cloud,
  RefreshCw,
  UserCheck,
  Truck,
  Sun,
  Moon,
  Languages,
  Calendar,
  BookOpen,
  Wallet,
  CreditCard,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.tsx";

export const FeaturesPage: React.FC = () => {
  const { isNepali } = useLanguage();

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "StockForge Retail Engine",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows, macOS, Linux",
    description:
      "Features breakdown of StockForge POS: multi-unit inventory (piece, kg, litre), automated sequential billing, offline SQLite database, COGS profit analytics, and staff payroll.",
    featureList: [
      "Multi-Unit Inventory (kg, litre, piece, dozen, packet, box, meter)",
      "Daily Book (Day Book / रोजिन्दा हिसाब किताब) with Opening Cash Balance, Inflow (+Debit) & Outflow (-Credit) Auditing, and A4/Thermal Reports",
      "Multi-Mode Payment Tracking (Cash, Online/QR, Cheque, Bank Transfer, Store Credit) across Sales, Purchases, Expenses & Payroll",
      "Multi-UOM & Packaging Hierarchy (Bulk Carton/Box to Loose Piece automated inventory conversion)",
      "Batch Number & Expiry Date Tracking with FEFO (First Expiring, First Out) Inventory Depletion",
      "Automated 30-Day Near-Expiry Alerts & Expired Stock Quarantine Radar",
      "Wholesale vs. Retail Dual-Tiered Pricing with Customer Classification and Volume Breakpoints",
      "Thermal Barcode Label & Supermarket Shelf Tag Printing (Code 128, 50x25mm / 38x25mm rolls & A4 sheets)",
      "Customer Sales Returns & Credit Notes (CN-XXXXX) with Restock or Damaged Write-off options",
      "Damaged, Expired & Spoilage Write-Off with Scrap Vouchers (WO-XXXXX) and Automated P&L Loss Expense Integration",
      "Vendor Purchase Returns & Debit Notes (DN-XXXXX) with Inventory Outflow & Balance Deduction",
      "Cash Drawer & Cashier Shift Management (Opening Float, Live Reconciliation, Over/Short Variance & Z-Report)",
      "Automated Sequential Invoicing and Bill Number Generation",
      "Offline-First Native Desktop SQLite Architecture with Local ACID Persistence",
      "Google Sheets Cloud Backup & Restore with Google OAuth Permission (Internet Required)",
      "SQL File Database Backup & Restore (.sql) with Standard DDL & DML Schema Dumps",
      "Gross Profit & Cost of Goods Sold (COGS) Snapshot Pricing",
      "Operational Expense Ledger & Net Bottom-Line Profit Analysis",
      "Staff Management & Monthly Salary Disbursement Vouchers",
      "Sales & Purchase Dues Tracking with Previous Due, Current Due & Total Outstanding Due",
      "Partial Payments at Checkout & Inflow with Due Breakdown on Thermal Receipts",
      "Multi-Mode Payment Tracking (Cash, Online/QR, Cheque, Bank Transfer) across Sales, Purchases, Expenses & Cash Drawer",
      "Customer Directory & Credit Khata Ledger with Total Due Balance Tracking",
      "Vendor & Supplier Management with Wholesale Purchase Payables",
      "Individual Customer & Vendor Ledgers with Detailed Debit/Credit Entries and Running Balance",
      "1-Click Balance Settlement with Multi-Channel Payments (Cash, eSewa, Khalti, Bank) and Payment Receipts",
      "Dark & Light Theme Mode Toggle with Ergonomic Contrast Persistence",
      "Bilingual Switch (English & नेपाली) with Automatic Currency रु./Rs. Sync",
      "Offline Bikram Sambat (B.S.) Nepali Calendar with A.D. / B.S. Toggle and Fiscal Year Month Boundaries",
      "High-Speed 80mm & 58mm Thermal Receipt Printing",
      "Keyboard Shortcuts & Fast Counter Automation",
    ],
  };

  const comparisonRows = [
    {
      feature: isNepali
        ? "इन्टरनेट नहुँदा काउन्टर चल्ने (Offline Operation)"
        : "Works During Complete Internet Blackout",
      stockforge: true,
      stockforgeNote: "100% Offline Desktop App",
      cloudPos: false,
      cloudPosNote: "Freezes or shows error page",
    },
    {
      feature: isNepali
        ? "विक्रम संवत् मिति र क्यालेन्डर (Bikram Sambat B.S.)"
        : "Bikram Sambat (B.S.) Official Nepali Calendar",
      stockforge: true,
      stockforgeNote:
        "Native offline B.S. calendar, bills & fiscal month filters",
      cloudPos: false,
      cloudPosNote: "English Gregorian (A.D.) dates only",
    },
    {
      feature: isNepali
        ? "द्विभाषिक प्रणाली (नेपाली / English Switch)"
        : "Bilingual UI Switch (English / नेपाली)",
      stockforge: true,
      stockforgeNote: "Zero-reload instant switch & रु./Rs. sync",
      cloudPos: false,
      cloudPosNote: "English-only with no native Nepali support",
    },
    {
      feature: isNepali
        ? "डार्क र लाइट थिम (Dark & Light Mode)"
        : "Dark & Light Theme Ergonomics",
      stockforge: true,
      stockforgeNote: "1-Click theme toggle for eye comfort",
      cloudPos: false,
      cloudPosNote: "Fixed glaring white screen only",
    },
    {
      feature: isNepali
        ? "ब्याच र म्याद सकिने मिति ट्र्याकिङ (Batch & Expiry FEFO)"
        : "Batch Number & Expiry Tracking with FEFO Auto-Depletion",
      stockforge: true,
      stockforgeNote:
        "Native batch tracking, FEFO billing, & 30-day expiry radar",
      cloudPos: false,
      cloudPosNote:
        "Basic flat stock count only; requires expensive pharma add-on",
    },
    {
      feature: isNepali
        ? "थोक तथा खुद्रा दोहोरो मूल्य दर (Dual Wholesale/Retail Pricing)"
        : "Wholesale vs. Retail Dual Pricing & Volume Slabs",
      stockforge: true,
      stockforgeNote:
        "Native dual rates, auto-tiering by customer & min qty triggers",
      cloudPos: false,
      cloudPosNote:
        "Single fixed price only; manual discount overrides required",
    },
    {
      feature: isNepali
        ? "एकाइ तथा प्याकेजिङ रूपान्तरण (Multi-UOM Hierarchy)"
        : "Packaging Hierarchy & Unit Conversion (Carton to Pcs)",
      stockforge: true,
      stockforgeNote:
        "Auto conversion multipliers (1 Ctn = 24 pcs) with dual sales/purchase selection",
      cloudPos: false,
      cloudPosNote: "Manual stock adjustments needed for bulk vs loose goods",
    },
    {
      feature: isNepali
        ? "फिर्ता तथा क्रेडिट/डेबिट नोट (Returns & Notes)"
        : "Comprehensive Buy/Sell Returns & Credit/Debit Notes",
      stockforge: true,
      stockforgeNote:
        "Built-in Credit Notes (CN-...) & Debit Notes (DN-...) with restock or damaged write-off",
      cloudPos: false,
      cloudPosNote:
        "Manual bill deletions or cumbersome third-party return plugins",
    },
    {
      feature: isNepali
        ? "बारकोड स्टिकर तथा सेल्फ ट्याग (Barcode Printing)"
        : "Barcode Sticker & Supermarket Shelf Tag Printing",
      stockforge: true,
      stockforgeNote:
        "Direct thermal roll (TSC/Xprinter 50x25mm) & A4 sheets with batch, price, and MRP",
      cloudPos: false,
      cloudPosNote: "Requires costly external barcode software subscription",
    },
    {
      feature: isNepali
        ? "काउन्टर सिफ्ट तथा क्यास ड्रयर (Shift Management)"
        : "Cash Drawer & Cashier Shift Reconciliation",
      stockforge: true,
      stockforgeNote:
        "Native opening float, live drawer calculation, physical count & over/short Z-reports",
      cloudPos: false,
      cloudPosNote:
        "Blind cash registers with zero shift variance accountability",
    },
    {
      feature: isNepali
        ? "दैनिक हिसाब किताब र डे-बुक (Daily Cash Day Book)"
        : "Dedicated Daily Day Book & Cash Flow Ledger",
      stockforge: true,
      stockforgeNote:
        "Opening/closing balances, +Debit/-Credit, and A4/thermal printout",
      cloudPos: false,
      cloudPosNote:
        "Fragmented receipts; lacks double-entry day book reconciliation",
    },
    {
      feature: isNepali
        ? "ड्यामेज, म्याद नाघेका र नोक्सानी (Write-Off & Scrap)"
        : "Damaged, Expired & Spoilage Write-Off Vouchers",
      stockforge: true,
      stockforgeNote:
        "Formal Scrap Vouchers (WO-...), quarantine radar, and automated P&L loss expense posting",
      cloudPos: false,
      cloudPosNote:
        "Manual stock overrides that distort financial profit and inventory balance",
    },
    {
      feature: isNepali
        ? "ग्राहक खाता र उधारो ट्र्याकिङ (Customer Khata Ledger)"
        : "Customer Directory & Credit Khata Ledger",
      stockforge: true,
      stockforgeNote: "Built-in customer profiles & credit tracking",
      cloudPos: false,
      cloudPosNote: "Requires expensive standalone CRM addon",
    },
    {
      feature: isNepali
        ? "भेन्डर र आपूर्तिकर्ता व्यवस्थापन (Vendor & Supplier Mgmt)"
        : "Vendor Directory & Wholesale Accounts Payable",
      stockforge: true,
      stockforgeNote: "Included supplier directory & invoice ledger",
      cloudPos: false,
      cloudPosNote: "Locked behind enterprise ERP tiers",
    },
    {
      feature: isNepali
        ? "बिक्री तथा खरिद बाँकी बक्यौता र आंशिक भुक्तानी (Dues Tracking)"
        : "Sales & Purchase Dues Tracking with Partial Payments",
      stockforge: true,
      stockforgeNote:
        "Auto Previous Due + Current Due = Total Due on bills & ledgers",
      cloudPos: false,
      cloudPosNote: "Forces full payment or requires external manual ledger",
    },
    {
      feature: isNepali
        ? "बहु-माध्यम भुक्तानी ट्र्याकिङ (Multi-Mode Payment Tracking)"
        : "Multi-Mode Payment Tracking & Cash Float Segregation",
      stockforge: true,
      stockforgeNote:
        "Cash, Online/QR, Cheque, Bank separated on bills, receipts & cash drawer shifts",
      cloudPos: false,
      cloudPosNote:
        "Lumps all transactions together or lacks drawer cash segregation",
    },
    {
      feature: isNepali
        ? "व्यक्तिगत पार्टी लेजर तथा स्टेटमेन्ट (Individual Party Statements)"
        : "Dedicated Individual Ledgers & Printable Statements",
      stockforge: true,
      stockforgeNote:
        "Chronological debit/credit history & 1-click print (A4/Thermal)",
      cloudPos: false,
      cloudPosNote:
        "Only aggregated summaries; detailed statements locked behind ERP",
    },
    {
      feature: isNepali
        ? "१-क्लिक रकम फर्स्यौट तथा भुक्तानी रसिद (1-Click Balance Settlement)"
        : "1-Click Dues Settlement & Multi-Channel Receipts",
      stockforge: true,
      stockforgeNote: "Cash, eSewa, Khalti, Bank with instant payment receipts",
      cloudPos: false,
      cloudPosNote: "Rigid settlement flows or manual journal entries required",
    },
    {
      feature: isNepali
        ? "गुगल सिट ब्याकअप र रिस्टोर (Google Sheets Backup & Restore)"
        : "Google Sheets Cloud Backup & Restore (Internet Required)",
      stockforge: true,
      stockforgeNote: "Authenticated Google Sheet Sync & Restore",
      cloudPos: false,
      cloudPosNote: "Locked into proprietary cloud databases",
    },
    {
      feature: isNepali
        ? "SQL फाइलमार्फत ब्याकअप र रिस्टोर (SQL File Backup & Restore)"
        : "SQL File Database Backup & Restore (.sql)",
      stockforge: true,
      stockforgeNote: "Standard .sql dump export & 1-click restore",
      cloudPos: false,
      cloudPosNote: "No raw database script access or export",
    },
    {
      feature: isNepali
        ? "क्रमबद्ध बिल नम्बर र इनभ्वाइस (Sequential Billing)"
        : "Automated Sequential Billing & Custom Invoicing",
      stockforge: true,
      stockforgeNote: "Automatic BILL-YYYYMMDD-XXXX",
      cloudPos: false,
      cloudPosNote: "Manual bill numbering or extra addon",
    },
    {
      feature: isNepali
        ? "बहु-एकाइ सामान (piece, kg, litre, dozen, packet)"
        : "Granular Multi-Unit Inventory (kg, ltr, pcs)",
      stockforge: true,
      stockforgeNote: "Native unit conversions & alerts",
      cloudPos: false,
      cloudPosNote: "Only supports generic piece units",
    },
    {
      feature: isNepali
        ? "डेटाको गोपनीयता र स्वामित्व (Data Sovereignty)"
        : "Data Privacy & Local Storage Ownership",
      stockforge: true,
      stockforgeNote: "Stored 100% on local hardware",
      cloudPos: false,
      cloudPosNote: "Stored on 3rd party remote server",
    },
    {
      feature: isNepali
        ? "मासिक वा वार्षिक शुल्क (Recurring Subscription)"
        : "No Forced Monthly Cloud Subscription Fees",
      stockforge: true,
      stockforgeNote: "Zero monthly hostage fees",
      cloudPos: false,
      cloudPosNote: "Locks you into expensive recurring plans",
    },
    {
      feature: isNepali
        ? "कर्मचारी पेरोल र तलब भौचर (Staff Payroll)"
        : "Integrated Staff Directory & Payroll Slips",
      stockforge: true,
      stockforgeNote: "Included out-of-the-box",
      cloudPos: false,
      cloudPosNote: "Requires expensive 3rd-party ERP add-on",
    },
    {
      feature: isNepali
        ? "थर्मल रसिद प्रिन्टिङ (Thermal POS 80mm/58mm)"
        : "Instant 80mm & 58mm Thermal Print Stylings",
      stockforge: true,
      stockforgeNote: "Custom CSS thermal print format",
      cloudPos: true,
      cloudPosNote: "Basic unformatted print dialog",
    },
  ];

  return (
    <div>
      <SEO
        title={
          isNepali
            ? "सुविधाहरू – बहु-एकाइ इन्भेन्टरी र बिलिङ POS"
            : "Platform Features – Multi-Unit Inventory & Khata POS"
        }
        description={
          isNepali
            ? "StockForge का सम्पूर्ण सुविधाहरू: बहु-एकाइ इन्भेन्टरी, क्रमबद्ध इनभ्वाइस, ग्राहक उधारो खाता, र गुगल सिट ब्याकअप। सम्पूर्ण क्षमताहरू हेर्नुहोस्।"
            : "Explore StockForge retail POS capabilities: multi-unit inventory (kg, ltr, pcs), sequential bills, customer Khata, Google Sheets backup, and thermal print."
        }
        keywords={[
          "retail POS features Nepal",
          "multi unit inventory management",
          "sequential invoicing BILL",
          "offline desktop SQLite POS",
          "customer credit khata ledger",
          "vendor wholesale ledger",
          "Google Sheets backup POS",
          "SQL file database dump",
          "dark mode retail POS",
          "thermal printer 80mm 58mm",
          "खुद्रा पसल सुविधाहरू",
        ]}
        locale={isNepali ? "ne_NP" : "en_NP"}
        canonicalPath="/features"
        breadcrumbs={[
          { name: isNepali ? "गृहपृष्ठ" : "Home", path: "/" },
          { name: isNepali ? "सुविधाहरू" : "Features", path: "/features" },
        ]}
        schemaJson={schemaJson}
      />

      {/* Hero Header */}
      <section className="pt-16 pb-12 bg-neutral-950 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>
              {isNepali
                ? "विस्तृत सुविधाहरू"
                : "Platform Features & Capabilities"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-100 tracking-tight">
            {isNepali ? (
              <>
                आधुनिक खुद्रा पसलका लागि{" "}
                <span className="text-emerald-400">शक्तिशाली सुविधाहरू</span>
              </>
            ) : (
              <>
                Engineered for High Velocity,{" "}
                <span className="text-emerald-400">
                  Precision & Offline Independence
                </span>
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
            {isNepali
              ? "बहु-एकाइ इन्भेन्टरी, द्रुत बिलिङ, डिजिटल उधारो खाता र १००% अफलाइन डेस्कटप गतिको साथ आफ्नो काउन्टर आधुनिक बनाउनुहोस्।"
              : "Everything your retail counter needs: multi-unit inventory, instant billing, customer khata, and 100% offline desktop speed."}
          </p>
        </div>
      </section>

      {/* Visual Checkout Workflow Section */}
      <section className="py-12 bg-neutral-900/30 border-b border-neutral-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-100">
              {isNepali
                ? "दैनिक खुद्रा काउन्टर कार्यप्रवाह (POS Flow)"
                : "High-Velocity Counter Checkout Workflow"}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              {isNepali
                ? "द्रुत उत्पादन खोजीदेखि ०ms स्थानीय SQLite कमिट र थर्मल रसिद प्रिन्टसम्मको स्वचालित प्रक्रिया।"
                : "From instant product search and fractional weighing to instant local ACID SQLite commit and sequential receipt printing."}
            </p>
          </div>

          <div className="flex justify-center mb-6">
            <img
              src="/pos-workflow-nepal.svg"
              alt="High-speed offline retail checkout flow in Nepal: fast product search, multi-unit measurement, automated sequential bill numbering, zero-latency desktop SQLite, and 80mm thermal printing"
              width={960}
              height={420}
              loading="lazy"
              decoding="async"
              className="w-full max-w-4xl rounded-2xl border border-neutral-800 shadow-2xl bg-neutral-950/70"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {isNepali
                  ? "इन्टरनेट नहुँदा पनि ०ms गति"
                  : "Zero Cloud Overhead (0ms)"}
              </span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-teal-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>
                {isNepali ? "क्रमबद्ध बिलिङ" : "Atomic Sequential Numbers"}
              </span>
            </span>
            <span>•</span>
            <Link
              to="/contact"
              className="text-neutral-300 hover:text-emerald-400 underline font-semibold transition-colors"
            >
              {isNepali
                ? "अन-साइट डेमो अनुरोध गर्नुहोस् →"
                : "Request On-Site Hardware Demo →"}
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features Section component */}
      <FeaturesSection />

      {/* Comparison Matrix Table */}
      <section className="py-20 bg-neutral-950 border-t border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {isNepali
                  ? "तुलनात्मक समीक्षा"
                  : "Direct Architecture Comparison"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-100">
              {isNepali
                ? "StockForge बनाम परम्परागत क्लाउड POS"
                : "StockForge POS vs. Generic Cloud POS"}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              {isNepali
                ? "किन स्थानीय खुद्रा व्यापारीहरू इन्टरनेट-निर्भर सफ्टवेयर छोडेर StockForge रोज्दैछन्?"
                : "Why retail storekeepers are ditching slow internet-dependent systems."}
            </p>
          </div>

          {/* Comparison Table */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-neutral-900 border-b border-neutral-800 text-neutral-300">
                    <th className="py-4 px-5 font-bold uppercase tracking-wider text-[11px]">
                      {isNepali ? "सुविधा / क्षमता" : "Feature / Capability"}
                    </th>
                    <th className="py-4 px-5 font-bold uppercase tracking-wider text-[11px] text-emerald-400 bg-emerald-400/20">
                      StockForge POS
                    </th>
                    <th className="py-4 px-5 font-bold uppercase tracking-wider text-[11px] text-neutral-400">
                      Generic Cloud POS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/80">
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-neutral-900/60 transition-colors"
                    >
                      <td className="py-3.5 px-5 font-medium text-neutral-200">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-5 bg-emerald-200/10 font-semibold text-emerald-500">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{row.stockforgeNote}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-5 text-neutral-400">
                        <div className="flex items-center gap-2">
                          {row.cloudPos ? (
                            <Check className="w-4 h-4 text-neutral-400 shrink-0" />
                          ) : (
                            <X className="w-4 h-4 text-rose-400 shrink-0" />
                          )}
                          <span>{row.cloudPosNote}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Google Sheets Cloud Backup & Restore Spotlight */}
      <section className="py-16 bg-neutral-900/60 border-t border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 via-neutral-950 to-teal-950/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>
                    {isNepali
                      ? "क्लाउड ब्याकअप र रिस्टोर"
                      : "Cloud Backup & Restore"}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-100 tracking-tight">
                  {isNepali ? (
                    <>
                      गुगल सिटमार्फत{" "}
                      <span className="text-emerald-400">
                        सजिलो ब्याकअप र रिस्टोर
                      </span>
                    </>
                  ) : (
                    <>
                      Backup & Restore Your Data Through{" "}
                      <span className="text-emerald-400">Google Sheets</span>
                    </>
                  )}
                </h2>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {isNepali
                    ? 'तपाईंले आफ्नो पसलको सम्पूर्ण डेटा गुगल सिटमार्फत ब्याकअप र रिस्टोर गर्न सक्नुहुन्छ। जब तपाईं "ब्याकअप" मा क्लिक गर्नुहुन्छ, ग्राहक गुगलसँग सुरक्षित रूपमा प्रमाणीकरण भई गुगल सिटको अनुमति मागिनेछ, र त्यसपछि सबै सामानहरू, बिक्री, स्टक तथा हिसाब सुरक्षित रूपमा सिटमा ब्याकअप हुनेछ। रिस्टोर गर्दा पनि सोही प्रक्रियामार्फत सिटबाट सम्पूर्ण डेटा पुनः प्राप्त गर्न सकिन्छ (यस कार्यका लागि इन्टरनेट आवश्यक पर्दछ)। साथै, तपाईंले मानक SQL (.sql) फाइलमार्फत पनि अफलाइन १-क्लिकमा पुरै डेटाबेस ब्याकअप र रिस्टोर गर्न सक्नुहुन्छ।'
                    : "You can backup and restore your data through Google Sheet. When you click backup, the client will be authenticated with Google and asked for Google Sheet permission, then all the data will be backed up. The same seamless process applies for restore back into your store (internet connection required). Additionally, you can backup and restore your entire database using standard SQL (.sql) script files."}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
                    <Cloud className="w-3.5 h-3.5 text-emerald-400" />
                    Google OAuth Authentication
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900 border border-emerald-500/20 text-[11px] font-mono text-teal-300">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-teal-400" />
                    Google Sheets Permission
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900 border border-emerald-500/20 text-[11px] font-mono text-teal-300">
                    <FileCode className="w-3.5 h-3.5 text-emerald-400" />
                    .sql File Backup & Restore
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900 border border-emerald-500/20 text-[11px] font-mono text-cyan-300">
                    <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
                    1-Click Restore (Offline or Cloud)
                  </span>
                </div>
              </div>

              {/* Visual Flow diagram */}
              <div className="lg:col-span-5">
                <div className="rounded-xl border border-neutral-800 bg-neutral-950/90 p-5 space-y-3 shadow-inner">
                  <div className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider flex items-center justify-between pb-2 border-b border-neutral-800">
                    <span>
                      {isNepali
                        ? "ब्याकअप र रिस्टोर कार्यप्रवाह"
                        : "Backup & Restore Flow"}
                    </span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Cloud Sync
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-start gap-3 p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800">
                      <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xs">
                        1
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-200">
                          {isNepali
                            ? "क्लिक ब्याकअप (Click Backup)"
                            : "Click Backup"}
                        </div>
                        <div className="text-[11px] text-neutral-400">
                          {isNepali
                            ? "ग्राहक गुगलसँग प्रमाणीकरण हुन्छ र गुगल सिटको अनुमति मागिन्छ"
                            : "Client authenticated with Google & asked for Google Sheet permission"}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800">
                      <div className="w-6 h-6 rounded-md bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 font-bold text-xs">
                        2
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-200">
                          {isNepali
                            ? "सम्पूर्ण डेटा ब्याकअप (All Data Backed Up)"
                            : "All Data Backed Up"}
                        </div>
                        <div className="text-[11px] text-neutral-400">
                          {isNepali
                            ? "सामान, बिक्री, स्टक र खर्च गुगल सिटमा सुरक्षित भण्डारण हुन्छ"
                            : "Products, sales history, inventory, and expenses sync to your Sheet"}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800">
                      <div className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 font-bold text-xs">
                        3
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-200">
                          {isNepali
                            ? "सोही प्रक्रियाबाट रिस्टोर (Restore from Sheet)"
                            : "Same Flow to Restore"}
                        </div>
                        <div className="text-[11px] text-neutral-400">
                          {isNepali
                            ? "गुगल प्रमाणीकरणपछि सिटबाट सबै डेटा पुनः प्राप्ति (इन्टरनेट आवश्यक)"
                            : "Restore all records effortlessly back into StockForge (internet required)"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer & Vendor Ledger + Theme & Language Showcase */}
      <section className="py-16 bg-neutral-950 border-t border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-6">
            {/* Card 1: Customer Khata, Vendor Directory & Dues Tracking */}
            <div className="p-7 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 space-y-5 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    CRM & Dues Math
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-100">
                    {isNepali
                      ? "ग्राहक उधारो खाता, आपूर्तिकर्ता र बाँकी बक्यौता (Dues) प्रणाली"
                      : "Customer Credit Khata, Vendor Directory & Dues Tracking"}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {isNepali
                  ? "काउन्टरमा बिक्री वा खरिद गर्दा ग्राहक र आपूर्तिकर्ताको आंशिक भुक्तानी (Partial Payment) सहजै दर्ता गर्नुहोस्। जस्तै ग्राहकको रु. १०,००० को बिलमा रु. ६,००० तिरेमा रु. ४,००० बाँकी रहन्छ; अर्को पटक रु. ५,००० को बिलमा रु. ३,००० तिर्दा साविकको बाँकी (४,०००), हालको बाँकी (२,०००) र कुल बाँकी (६,०००) रसिद, बिलिङ र इतिहासमा स्पष्ट देखिन्छ। थोक आपूर्तिकर्ता (Vendors) लाई तिर्न बाँकी रकममा पनि यही नियम लागू हुन्छ।"
                  : "Effortlessly handle partial payments on sales and inventory restocks. For instance, if a customer pays Rs. 6,000 on a Rs. 10,000 bill, Rs. 4,000 remains due. On their next Rs. 5,000 bill with Rs. 3,000 paid, the system automatically itemizes Previous Due (4,000), Current Due (2,000), and Total Due (6,000) on POS screens, printed receipts, and history ledgers. The exact same accounting applies to wholesale vendor purchases."}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-200 mb-1">
                    <UserCheck className="w-4 h-4 text-emerald-400" />
                    <span>
                      {isNepali
                        ? "साविक + हालको बाँकी"
                        : "Previous + Current Due"}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    {isNepali
                      ? "रसिद र इतिहासमा कुल बाँकी बक्यौता"
                      : "Total due breakdown on every receipt"}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-200 mb-1">
                    <Truck className="w-4 h-4 text-teal-400" />
                    <span>
                      {isNepali
                        ? "आपूर्तिकर्ता खरिद बाँकी"
                        : "Vendor Purchase Due"}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    {isNepali
                      ? "थोक बिल, आंशिक भुक्तानी र पेएबल्स"
                      : "Wholesale restock partial payments"}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Individual Ledgers & 1-Click Balance Settlement */}
            <div className="p-7 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 space-y-5 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    Ledgers & Settlement
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-100">
                    {isNepali
                      ? "व्यक्तिगत खाता लेजर (Statements) र १-क्लिक रकम फर्स्यौट"
                      : "Individual Party Ledgers & 1-Click Balance Settlement"}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {isNepali
                  ? "प्रत्येक ग्राहक तथा आपूर्तिकर्ताको छुट्टाछुट्टै ऐतिहासिक खाता विवरण (Account Statement)। मितिअनुसार सबै बिल, डेबिट, क्रेडिट, भुक्तानी र चालु बाँकी (Running Balance) स्पष्ट हेर्नुहोस्। बाँकी रकम संकलन वा भुक्तानी गर्दा कुल बक्यौता वा निश्चित बिलअनुसार १-क्लिकमा रकम फर्स्यौट गर्नुहोस् (नगद, eSewa, Khalti, बैंक वा चेक) र तत्काल प्रिन्ट गर्न मिल्ने भुक्तानी रसिद (Payment Receipt) निकाल्नुहोस्।"
                  : "Maintain dedicated chronological account statements for each customer and supplier. Audit every invoice, debit, credit payment, and real-time running balance with date filtering. Settle balances instantly in 1-click against total account dues or specific bills using Cash, eSewa, Khalti, Bank Transfer, ConnectIPS, or Cheque with instant printable settlement receipts."}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-200 mb-1">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span>
                      {isNepali
                        ? "व्यक्तिगत लेजर स्टेटमेन्ट"
                        : "Party Account Statements"}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    {isNepali
                      ? "थर्मल र A4 ढाँचामा १-क्लिक प्रिन्ट"
                      : "80mm thermal & A4 print ready"}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-200 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>
                      {isNepali
                        ? "१-क्लिक रकम फर्स्यौट"
                        : "1-Click Dues Settlement"}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    {isNepali
                      ? "नगद, eSewa, Khalti, बैंक भुक्तानी रसिद"
                      : "Cash, eSewa, Khalti, Bank & vouchers"}
                  </p>
                </div>
              </div>
            </div>

            {/* Card: Daily Cash Book & Multi-Mode Flow Audit */}
            <div className="p-7 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 space-y-5 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Wallet className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    Audit & Cash Reconciliation
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-100">
                    {isNepali
                      ? "दैनिक हिसाब किताब (Daily Book) र बहु-माध्यम नगद प्रवाह अडिट"
                      : "Daily Cash Book (Day Book) & Multi-Channel Audit"}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {isNepali
                  ? "पसलको दिनभरको सम्पूर्ण आम्दानी र खर्चको दोहोरो हिसाब (Double-Entry Day Book)। सुरुको नगद मौज्दात (Opening Cash Balance), बिक्री आम्दानी, खरिद भुक्तानी, पसल खर्च, कर्मचारी तलब, ग्राहकबाट बाँकी असुली र आपूर्तिकर्ता भुक्तानीलाई नगद, Fonepay/QR, बैंक, चेक र उधारो अनुसार छुट्टाछुट्टै देखाउँछ। दिनको अन्त्यमा गल्लामा हुनुपर्ने वास्तविक नगद (Closing Cash Balance) ठ्याक्कै हिसाब गरी १-क्लिकमा A4 वा ८०mm थर्मल रिपोर्ट प्रिन्ट गर्न सकिन्छ।"
                  : "A dedicated financial Day Book unifying all daily transactions across Sales, Restock Purchases, Store Overheads, Staff Salaries, Customer Due Collections, and Vendor Due Payments. Categorizes flows into Cash, Fonepay/QR, Bank Transfer, Cheque, and Store Credit. Automatically calculates prior cumulative Opening Cash Balance, Inflow (+Debit), Outflow (-Credit), Net Cash in Hand, and Closing Balance with 1-click A4 ledger and 80mm thermal register closing slips."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-200 mb-1">
                    <Wallet className="w-4 h-4 text-cyan-400" />
                    <span>
                      {isNepali
                        ? "ओपनिङ र क्लोजिङ ब्यालेन्स"
                        : "Opening & Closing Float"}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    {isNepali
                      ? "गल्लाको वास्तविक नगद अडिट"
                      : "Cumulative cash in hand tracking"}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-200 mb-1">
                    <CreditCard className="w-4 h-4 text-emerald-400" />
                    <span>
                      {isNepali
                        ? "नगद, QR र बैंक विभाजन"
                        : "Cash vs. Digital QR & Bank"}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    {isNepali
                      ? "Fonepay, eSewa, चेक र खाता"
                      : "Segmented by payment channels"}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-200 mb-1">
                    <Printer className="w-4 h-4 text-teal-400" />
                    <span>
                      {isNepali
                        ? "A4 र थर्मल प्रिन्ट रिपोर्ट"
                        : "A4 & 80mm Day Book Slips"}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    {isNepali
                      ? "दिनको अन्त्यमा १-क्लिक प्रिन्ट"
                      : "Instant register closing receipts"}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Theme Toggle & Bilingual UI */}
            <div className="p-7 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 space-y-5 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    UI Experience
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-100">
                    {isNepali
                      ? "डार्क र लाइट थिम तथा द्विभाषिक (नेपाली/English) प्रणाली"
                      : "Dark & Light Theme Toggle and Bilingual UI Switch"}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {isNepali
                  ? "१-क्लिकमै उच्च-कन्ट्रास्ट डार्क मोड र सफा लाइट मोडबीच स्विच गर्नुहोस्। दिनभर काउन्टरमा बस्ने क्यासियरको आँखाको सुरक्षाका लागि विशेष डिजाइन। साथै, सम्पूर्ण सफ्टवेयरलाई बिना रिलोड नेपाली वा अङ्ग्रेजीमा बदल्नुहोस्, मुद्रा (रु. / Rs.) स्वतः समायोजित हुन्छ।"
                  : "Effortlessly toggle between crisp high-contrast dark mode and clean daylight mode with 1-click. Designed for visual ergonomics during prolonged cashier shifts. Switch instantly between English and Nepali with automatic currency symbol adaptation (रु. / Rs.) and zero page reloads."}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-200 mb-1">
                    <Moon className="w-4 h-4 text-amber-400" />
                    <span>
                      {isNepali ? "डार्क र लाइट मोड" : "Dark & Light Mode"}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    {isNepali
                      ? "आँखाको आराम र कन्ट्रास्ट बचत"
                      : "Low-glare shift ergonomics"}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-200 mb-1">
                    <Languages className="w-4 h-4 text-emerald-400" />
                    <span>
                      {isNepali ? "नेपाली र English" : "Bilingual Switch"}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    {isNepali
                      ? "रु. र Rs. तत्काल सिङ्क"
                      : "Instant रु. / Rs. synchronization"}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Bikram Sambat (B.S.) Nepali Calendar & Fiscal Accounting */}
            <div className="md:col-span-2 p-7 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 space-y-5 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                    Nepal Localization
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-100">
                    {isNepali
                      ? "अफलाइन विक्रम संवत् (वि.सं.) मिति प्रणाली र क्यालेन्डर"
                      : "Offline Bikram Sambat (B.S.) Nepali Calendar & Fiscal Accounting"}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {isNepali
                  ? "नेपाली खुद्रा बजार र कर प्रणालीलाई ध्यानमा राखी निर्मित। बिल, इनभ्वाइस, तलब भौचर र रिपोर्टहरूमा स्वचालित रूपमा विक्रम संवत् (वि.सं.) मिति प्रदर्शित हुन्छ। नेपालको आर्थिक वर्ष (साउन १ - असार मसान्त) र महिना सीमा (बैशाख - चैत) अनुसार स्वतः हिसाब-किताब मिल्छ। आवश्यक परेमा सेटिङ्सबाट १-क्लिकमै ईस्वी संवत् (A.D.) मा बदल्न सकिन्छ।"
                  : "Engineered specifically for Nepali commerce. All point-of-sale bills, thermal receipts, staff salary slips, and financial ledgers natively display official Bikram Sambat (B.S.) dates. Accounting filters automatically calculate by Nepali months (Baisakh to Chaitra) and fiscal periods (Shrawan 1 to Ashadh 32). Toggle between B.S. and A.D. anytime in Settings with 100% offline precision."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-200 mb-1">
                    <Calendar className="w-4 h-4 text-teal-400" />
                    <span>
                      {isNepali
                        ? "पूर्वनिर्धारित वि.सं. (Default B.S.)"
                        : "Default B.S. Format"}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    {isNepali
                      ? "रसिद र बिलमा मिति: २०८३/०७/०१"
                      : "Official Nepali dates on all receipts"}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-200 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>
                      {isNepali ? "१००% अफलाइन इन्जिन" : "100% Offline Engine"}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    {isNepali
                      ? "इन्टरनेट बिना तत्काल वि.सं. मिति चयन"
                      : "Zero cloud latency, works without net"}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-200 mb-1">
                    <RefreshCw className="w-4 h-4 text-amber-400" />
                    <span>
                      {isNepali ? "वि.सं. र ई.सं. टगल" : "B.S. & A.D. Toggle"}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    {isNepali
                      ? "सेटिङ्सबाट सजिलै ढाँचा परिवर्तन"
                      : "1-Click switch in Settings anytime"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Compatibility Showcase */}
      <section className="py-16 bg-neutral-900/40 border-t border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-100 mb-2">
              {isNepali
                ? "हार्डवेयर र उपकरण अनुकूलता"
                : "Universal Hardware Compatibility"}
            </h2>
            <p className="text-xs text-neutral-400">
              {isNepali
                ? "कुनै नयाँ महँगो हार्डवेयर किन्नु पर्दैन। तपाईंको हालको ल्यापटप, क्यास ड्रयर र प्रिन्टरसँग सिधै चल्छ।"
                : "Plug and play with standard USB and Bluetooth thermal receipt printers, cash drawers, and existing computers."}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center gap-3">
              <Printer className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-neutral-200">
                  80mm & 58mm Thermal
                </div>
                <div className="text-[10px] text-neutral-400">
                  USB, Bluetooth, Wi-Fi
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center gap-3">
              <Keyboard className="w-6 h-6 text-teal-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-neutral-200">
                  Keyboard & Hotkeys
                </div>
                <div className="text-[10px] text-neutral-400">
                  F2 Quick Sale & Shortcuts
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center gap-3">
              <Monitor className="w-6 h-6 text-cyan-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-neutral-200">
                  Native Desktop App
                </div>
                <div className="text-[10px] text-neutral-400">
                  Windows, macOS, Linux
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center gap-3">
              <HardDrive className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-neutral-200">
                  Local Flash Drives
                </div>
                <div className="text-[10px] text-neutral-400">
                  Instant .db & .sql backups
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-neutral-950 border-t border-neutral-800 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-100 mb-2">
            {isNepali
              ? "डेमो अनुरोध वा परामर्श लिनुहोस्"
              : "Request an On-Site Demo or Consultation"}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mb-6">
            {isNepali
              ? "हाम्रो प्राविधिक टोलीसँग प्रत्यक्ष कुरा गर्नुहोस् र आफ्नो पसलका लागि उपयुक्त समाधान पाउनुहोस्।"
              : "Connect with our retail implementation specialists for customized multi-unit setups and streamlined invoicing."}
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-950 cursor-pointer"
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
