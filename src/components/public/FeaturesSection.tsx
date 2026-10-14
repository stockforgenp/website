import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Scale,
  Receipt,
  Database,
  TrendingUp,
  Wallet,
  Users,
  Printer,
  Sparkles,
  ArrowRight,
  Layers,
  Keyboard,
  FileSpreadsheet,
  FileCode,
  UserCheck,
  Truck,
  Sun,
  Languages,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext.tsx";

export const FeaturesSection = () => {
  const { isNepali } = useLanguage();

  const features = [
    {
      category: "inventory",
      icon: Scale,
      color: "emerald",
      title: isNepali
        ? "बहु-एकाइ इन्भेन्टरी (Multi-Unit)"
        : "Multi-Unit Inventory (kg, ltr, pcs)",
      subtitle: isNepali
        ? "पिस, केजी वा लिटरमा सहज बिक्री"
        : "Sell loose or packaged items effortlessly",
      description: isNepali
        ? "खुला चामल, तेल वा प्याकेट सामान—दशमलव तौलसहित सजिलै बिक्री गर्नुहोस्। स्टक सकिन लाग्दा तत्काल अलर्ट!"
        : "Sell loose, weighted, or packaged stock with fractional precision. Real-time deduction with instant low-stock alerts.",
      badges: ["kg, litre, pcs", "Real-Time Deduct", "Low-Stock Alerts"],
    },
    {
      category: "billing",
      icon: Receipt,
      color: "teal",
      title: isNepali
        ? "स्वचालित क्रमबद्ध बिलिङ"
        : "Instant Sequential Invoicing",
      subtitle: isNepali
        ? "अद्वितीय र पारदर्शी बिल नम्बर (BILL-...)"
        : "Audit-proof automated bill numbers",
      description: isNepali
        ? "हरेक बिक्रीमा स्वतः क्रमबद्ध बिल नम्बर तयार। छुट, कर र कुल रकम १ सेकेन्डमै हिसाब!"
        : "Every sale generates a unique sequential bill number (BILL-YYYYMMDD-XXXX). Subtotals, discounts, and taxes calculated in a snap.",
      badges: [
        "Sequential Bill #",
        "Tax Breakdown",
        "Instant Total",
      ],
    },
    {
      category: "system",
      icon: Database,
      color: "cyan",
      title: isNepali
        ? "१००% अफलाइन SQLite इन्जिन"
        : "100% Offline SQLite Engine",
      subtitle: isNepali
        ? "इन्टरनेट बिना तत्काल गति (०ms)"
        : "Zero internet needed. Zero lag.",
      description: isNepali
        ? "विन्डोज, म्याक र लिनक्समा सिधै चल्ने नेटिभ डेस्कटप एप। बत्ती जाओस् वा नेट काटियोस्—काउन्टर कहिल्यै रोकिँदैन!"
        : "Native desktop app for Windows, Mac & Linux powered by local SQLite. Zero cloud lag, no buffering, and checkout never freezes.",
      badges: [
        "Desktop App (Win/Mac/Linux)",
        "Zero Lag",
        "Local SQLite Engine",
      ],
    },
    {
      category: "system",
      icon: FileSpreadsheet,
      color: "emerald",
      title: isNepali
        ? "गुगल सिट क्लाउड ब्याकअप"
        : "Google Sheets Cloud Backup",
      subtitle: isNepali
        ? "१-क्लिकमै गुगल ड्राइभमा सुरक्षित सिंक"
        : "1-Click secure Google Drive sync",
      description: isNepali
        ? "सामान, बिक्री र खाताको डेटा १-क्लिकमै आफ्नै गुगल सिटमा सुरक्षित ब्याकअप राख्नुहोस् र जुनसुकै बेला रिस्टोर गर्नुहोस्।"
        : "Back up products, sales, and khata records directly to your personal Google Sheet in 1 click, and restore anytime with ease.",
      badges: [
        "Google Sheets",
        "1-Click Sync",
        "Cloud Backup & Restore",
      ],
    },
    {
      category: "system",
      icon: FileCode,
      color: "teal",
      title: isNepali
        ? "SQL फाइल ब्याकअप (.sql)"
        : "SQL File Database Export (.sql)",
      subtitle: isNepali
        ? "पेनड्राइभमा पोर्टेबल डेटाबेस ब्याकअप"
        : "Portable offline database snapshots",
      description: isNepali
        ? "सम्पूर्ण डेटा .sql फाइलमा पेनड्राइभमा सुरक्षित गर्नुहोस्। नयाँ कम्प्युटरमा सार्न वा ब्याकअप राख्न १-क्लिकमै सम्भव!"
        : "Export your complete store database as clean standard .sql files. Keep USB copies or migrate between PCs in seconds.",
      badges: [
        ".sql Script",
        "USB Portable",
        "1-Click Restore",
      ],
    },
    {
      category: "finance",
      icon: TrendingUp,
      color: "amber",
      title: isNepali
        ? "वास्तविक नाफा र COGS विश्लेषण"
        : "Real-Time Profit & COGS Analytics",
      subtitle: isNepali
        ? "हरेक बिलमा वास्तविक खुद नाफा"
        : "Know your exact margins on every sale",
      description: isNepali
        ? "बिक्री हुँदाकै खरिद मूल्य स्न्यापसट गरी वास्तविक कुल नाफा र मार्जिन देखाउँछ। बजार भाउ घटबढ भए पनि हिसाब १००% सही!"
        : "Lock in buy prices at checkout to see real gross margins on every bill—no guesswork even when wholesale costs fluctuate.",
      badges: ["COGS Snapshot", "Gross Margin %", "True Profit"],
    },
    {
      category: "finance",
      icon: Users,
      color: "blue",
      title: isNepali
        ? "कर्मचारी पेरोल र तलब भौचर"
        : "Staff Directory & Salary Slips",
      subtitle: isNepali
        ? "तलब, पद र पेरोल रसिद एकै ठाउँमा"
        : "Salaries, roles, and vouchers made simple",
      description: isNepali
        ? "कर्मचारीको मासिक तलब, पद र भुक्तानी रेकर्ड राख्नुहोस्। १-क्लिकमा प्रिन्ट गर्न मिल्ने तलब भौचर तयार!"
        : "Maintain staff profiles, track monthly wages, and generate professional printable salary vouchers in seconds.",
      badges: ["Salary Ledger", "Printable Slips", "Staff Roles"],
    },
    {
      category: "finance",
      icon: Wallet,
      color: "rose",
      title: isNepali
        ? "दैनिक पसल खर्च खाता"
        : "Daily Overhead Expense Ledger",
      subtitle: isNepali
        ? "भाडा, बिजुली र खुद नाफाको हिसाब"
        : "Track rent, bills, and see real net profit",
      description: isNepali
        ? "पसलको भाडा, बिजुली र ढुवानी खर्च रेकर्ड गर्नुहोस् र कुल आम्दानीबाट कटाएर वास्तविक खुद नाफा (Net Profit) हेर्नुहोस्।"
        : "Log daily shop overheads (rent, bills, logistics). Auto-deducted from gross revenue to reveal your actual take-home profit.",
      badges: [
        "Expense Categories",
        "Net Profit Clarity",
        "Cash Flow",
      ],
    },
    {
      category: "billing",
      icon: Printer,
      color: "emerald",
      title: isNepali
        ? "थर्मल रसिद प्रिन्टिङ (Thermal POS)"
        : "High-Speed Thermal Receipts",
      subtitle: isNepali
        ? "८०mm र ५८mm प्रिन्टरमा १ सेकेन्डमै बिल"
        : "Crisp 80mm & 58mm slips in under a second",
      description: isNepali
        ? "पसलको नाम, फोन, कर तथा छुट विवरणसहित ८०mm वा ५८mm थर्मल प्रिन्टरमा द्रुत र आकर्षक रसिद छाप्नुहोस्।"
        : "Print clean, branded slips on standard 80mm or 58mm POS printers with store headers, tax lines, and custom thank-you notes.",
      badges: ["80mm / 58mm Ready", "Instant Print", "Store Branding"],
    },
    {
      category: "billing",
      icon: Wallet,
      color: "amber",
      title: isNepali
        ? "आंशिक भुक्तानी र बाँकी बक्यौता (Dues)"
        : "Smart Dues & Partial Payments",
      subtitle: isNepali
        ? "साविकको बाँकी + हालको बाँकी = कुल बाँकी"
        : "Auto-math: Previous + Current = Total Due",
      description: isNepali
        ? "आंशिक भुक्तानी सहजै दर्ता गर्नुहोस्। साविकको बाँकी र हालको बाँकी जोडेर कुल बाँकी रकम रसिद तथा खातामा स्वतः हिसाब!"
        : "Accept partial payments without calculator headaches. Automatically tracks previous, current, and total dues on receipts.",
      badges: [
        "Partial Payments",
        "Auto Due Math",
        "Receipt Dues",
      ],
    },
    {
      category: "crm",
      icon: UserCheck,
      color: "emerald",
      title: isNepali
        ? "ग्राहक खाता र उधारो (Credit Khata)"
        : "Customer Directory & Credit Khata",
      subtitle: isNepali
        ? "डिजिटल उधारो खाता—कापी-कलमको झन्झटमुक्त"
        : "Digital credit khata with zero math errors",
      description: isNepali
        ? "ग्राहकको नाम, फोन र खरिद इतिहास राख्नुहोस्। उधारो खाता (Khata) मार्फत बाँकी बक्यौता र भुक्तानी चुट्कीमै व्यवस्थापन!"
        : "Save customer profiles, visit history, and credit ledgers. Track outstanding balances and log settlements effortlessly.",
      badges: [
        "Credit Khata",
        "Due Balance",
        "Customer Profiles",
      ],
    },
    {
      category: "crm",
      icon: Truck,
      color: "teal",
      title: isNepali
        ? "आपूर्तिकर्ता (Vendor) तथा खरिद खाता"
        : "Vendor & Supplier Ledger",
      subtitle: isNepali
        ? "थोक बिक्रेता र खरिद बिलको सरल व्यवस्थापन"
        : "Streamline restocks and wholesale payables",
      description: isNepali
        ? "सप्लायरको सम्पर्क, खरिद बिल र तिर्न बाँकी रकम एकै ठाउँमा। कुन सामान कहिले आयो र कति भुक्तानी बाँकी छ तुरुन्त हेर्नुहोस्।"
        : "Organize distributors, wholesale bills, and payment terms in one place. Always know what you owe and when to restock.",
      badges: [
        "Vendor Directory",
        "Accounts Payable",
        "Purchase Invoices",
      ],
    },
    {
      category: "system",
      icon: Keyboard,
      color: "purple",
      title: isNepali
        ? "किबोर्ड सर्टकट र द्रुत काउन्टर"
        : "High-Velocity Cashier Shortcuts",
      subtitle: isNepali
        ? "F2 थिच्नुहोस्, १ सेकेन्डमै बिल तयार"
        : "Lightning-fast F2 & keyboard checkout",
      description: isNepali
        ? "माउस छुनै पर्दैन! F2 बाट तुरुन्तै बिलिङ सुरु गर्नुहोस्, सामान खोज्नुहोस् र भीडभाडमा पनि द्रुत गतिमा बिल काट्नुहोस्।"
        : "Ditch the mouse. Press F2 to start sales, search items instantly, and close bills in seconds to breeze through counter rushes.",
      badges: ["F2 Quick Sale", "Fast Item Search", "Zero Mouse Lag"],
    },
    {
      category: "experience",
      icon: Sun,
      color: "amber",
      title: isNepali
        ? "डार्क र लाइट थिम (Dark & Light Theme)"
        : "Dark & Light Mode Toggle",
      subtitle: isNepali
        ? "दिन वा रात—आँखालाई आरामदायी थिम"
        : "Easy on the eyes, day or night",
      description: isNepali
        ? "१-क्लिकमै डार्क र लाइट मोड स्विच गर्नुहोस्। लामो समय काउन्टरमा बस्दा पनि आँखा दुख्ने वा थकान हुने समस्या शून्य!"
        : "Switch between crisp dark mode and clean daylight mode with 1-click. Zero glare, reducing fatigue during long shifts.",
      badges: [
        "Dark & Light Modes",
        "1-Click Switch",
        "Eye Comfort",
      ],
    },
    {
      category: "experience",
      icon: Languages,
      color: "emerald",
      title: isNepali
        ? "द्विभाषिक प्रणाली (नेपाली / English)"
        : "Bilingual Switch (English / नेपाली)",
      subtitle: isNepali
        ? "नेपाली र अङ्ग्रेजीमा तत्काल स्विच"
        : "Instant switch with रु. / Rs. sync",
      description: isNepali
        ? "१-क्लिकमै नेपाली वा अङ्ग्रेजी भाषा रोज्नुहोस्। पेज रिलोड नभई सम्पूर्ण मेनु र मुद्रा (रु. / Rs.) स्वतः अपडेट!"
        : "Switch the entire app between English and Nepali in 1 click with zero reload and automatic रु. / Rs. currency adaptation.",
      badges: [
        "English & नेपाली",
        "रु. / Rs. Sync",
        "Zero Reload",
      ],
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-neutral-900/40 border-t border-neutral-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>
              {isNepali
                ? "शक्तिशाली इन्जिनका सुविधाहरू"
                : "Enterprise Capabilities"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight">
            {isNepali ? (
              <>
                तपाईंको पसललाई प्रभावकारी बनाउने{" "}
                <span className="text-emerald-400">
                  सम्पूर्ण आधुनिक सुविधाहरू
                </span>
              </>
            ) : (
              <>
                Engineered for Speed, Precision, and{" "}
                <span className="text-emerald-400">
                  Total Offline Independence
                </span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-neutral-400">
            {isNepali
              ? "साना किराना पसलदेखि ठूला सुपरमार्ट र निर्माण सामग्री विक्रेतासम्मका लागि आवश्यक सबै उपकरणहरू एउटै सफ्टवेयरमा।"
              : "From corner grocery marts to bustling supermarkets and hardware distributors, StockForge delivers comprehensive retail control without cloud lock-in."}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-950/80 border border-neutral-800/90 hover:border-emerald-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex flex-col">
                      <h3 className="text-base font-bold text-neutral-100 mb-1 group-hover:text-emerald-400 transition-colors">
                        {feat.title}
                      </h3>

                      <div className="text-[11px] font-mono text-neutral-400 mb-3">
                        {feat.subtitle}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Badges */}
                <div className="pt-4 mt-4 border-t border-neutral-900 flex flex-wrap gap-1.5">
                  {feat.badges.map((b, bIdx) => (
                    <span
                      key={bIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-neutral-900 to-teal-950/40 border border-emerald-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-white">
              {isNepali
                ? "के तपाईं आफ्नो पसलमा क्रमबद्ध बिलिङ र बहु-एकाइ इन्भेन्टरी परीक्षण गर्न तयार हुनुहुन्छ?"
                : "Ready to experience zero-lag sequential billing & multi-unit tracking?"}
            </h4>
            <p className="text-xs text-neutral-400">
              {isNepali
                ? "कुनै क्रेडिट कार्ड वा इन्टरनेट आवश्यक छैन। तुरुन्तै सुरु गर्नुहोस्।"
                : "No monthly cloud subscription lock-in. 100% offline-ready immediately."}
            </p>
          </div>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center gap-2 shrink-0 shadow-md transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isNepali ? "डेमो अनुरोध गर्नुहोस्" : "Request Demo"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
