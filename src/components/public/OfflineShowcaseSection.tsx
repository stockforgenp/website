import React, { useState } from "react";
import {
  WifiOff,
  Zap,
  HardDrive,
  Database,
  ArrowRight,
  Lock,
  CloudOff,
  Sparkles,
  FileSpreadsheet,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.tsx";

export const OfflineShowcaseSection: React.FC = () => {
  const { isNepali } = useLanguage();
  const [isSimulatedOffline, setIsSimulatedOffline] = useState(true);

  const benefits = [
    {
      icon: Zap,
      title: isNepali
        ? "० मि.से. शून्य-विलम्ब प्रतिक्रिया"
        : "0ms Sub-Millisecond Speed",
      description: isNepali
        ? "प्रत्येक उत्पादन खोजी र बिलिङ सिधै कम्प्युटरको मेमोरीमा हुन्छ। कुनै रिमोट सर्भर अनुरोध कुर्नु पर्दैन।"
        : "Every item lookup, price calculation, and bill generation executes client-side with instant zero-latency speed.",
    },
    {
      icon: CloudOff,
      title: isNepali
        ? "इन्टरनेट ब्ल्याकआउटमा पनि पूर्ण सञ्चालन"
        : "Uninterrupted Power & Network Outages",
      description: isNepali
        ? "चाडबाडको भीडभाड वा इन्टरनेट काटिँदा पनि ग्राहक बिलिङ, रसिद प्रिन्टिङ र स्टक कटौती सामान्य गतिमा चल्छ।"
        : "Keep checkout lines moving during cellular cuts, fiber outages, and busy festival sales periods.",
    },
    {
      icon: Lock,
      title: isNepali
        ? "शतप्रतिशत डेटाको गोपनीयता र स्वामित्व"
        : "Complete Data Privacy & Local Sovereignty",
      description: isNepali
        ? "तपाईंको बिक्री तथ्याङ्क र ग्राहकहरूको खाता विवरण तपाईंको आफ्नै हार्डवेयरमा सुरक्षित रहन्छ, तेस्रो पक्षको हातमा होइन।"
        : "Your financials, profit margins, and customer ledgers remain exclusively on your device, never exposed to third-party clouds.",
    },
    {
      icon: Database,
      title: isNepali
        ? "SQLite ACID विश्वसनीयता र सुरक्षा"
        : "Industrial Desktop SQLite ACID Durability",
      description: isNepali
        ? "बैंकिङ स्तरको डेटाबेस प्रविधि जसले आकस्मिक बत्ती जाँदा वा कम्प्युटर बन्द हुँदा पनि कारोबार सुरक्षित राख्छ।"
        : "Atomicity, Consistency, Isolation, and Durability ensure zero corrupted bills even if power is abruptly unplugged.",
    },
    {
      icon: HardDrive,
      title: isNepali
        ? "१-क्लिक स्थानीय .SQL ब्याकअप"
        : "1-Click Local SQL Script & DB Backups",
      description: isNepali
        ? "कुनै पनि समयमा आफ्नो सम्पूर्ण डेटाबेसलाई मानक .sql ढाँचामा सुरक्षित गर्न र नयाँ ल्यापटपमा सार्न सकिन्छ।"
        : "Download standard SQL database dumps with DDL and DML scripts anytime for painless off-device archiving.",
    },
    {
      icon: FileSpreadsheet,
      title: isNepali
        ? "वैकल्पिक गुगल सिट सिङ्क (Google Sheets Sync)"
        : "Optional Google Sheets Sync When Online",
      description: isNepali
        ? "इन्टरनेट उपलब्ध हुँदा १-क्लिकमा गुगल सिटमा ब्याकअप लिन सकिन्छ। पूर्ण रूपमा व्यापारीको आफ्नै नियन्त्रणमा।"
        : "When you do want remote spreadsheets, sync your sales, items, and inventory safely to your private Google Drive.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-950 via-neutral-900/40 to-neutral-950 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wide shadow-xs">
            <WifiOff className="w-3.5 h-3.5" />
            <span>
              {isNepali
                ? "१००% अफलाइन वास्तुकला · १००% स्थानीय नियन्त्रण"
                : "100% Offline-First Engine · Zero Cloud Latency"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-100 tracking-tight">
            {isNepali ? (
              <>
                इन्टरनेट बिना चल्ने{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  शक्तिशाली खुद्रा POS
                </span>{" "}
                प्रणाली
              </>
            ) : (
              <>
                Engineered for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  100% Offline Autonomy
                </span>{" "}
                and Zero-Latency Checkouts
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            {isNepali
              ? "क्लाउड-आधारित सफ्टवेयरहरू इन्टरनेट ढिलो हुँदा रोकिन्छन्। StockForge विन्डोज, म्याक र लिनक्स (Windows, macOS, Linux) का लागि निर्मित पूर्ण नेटिभ डेस्कटप सफ्टवेयर हो, जसले कम्प्युटरमै स्थानीय SQLite इन्जिन चलाउँछ र शून्य विलम्बमा काम गर्छ।"
              : "Legacy cloud POS terminals stall during fiber cuts and festival shopping surges. StockForge is a native desktop application for Windows, macOS, and Linux that runs an industrial SQLite engine directly on your machine, giving you instant checkouts with zero dependence on remote servers."}
          </p>
        </div>

        {/* Interactive Offline Simulation Widget */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-800/90 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-neutral-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-sm font-bold text-neutral-100">
                  {isNepali ? "स्थानीय इन्जिन स्थिति:" : "Local Engine Status:"}{" "}
                  <span className="text-emerald-400 font-mono">
                    Native Desktop SQLite ACID (Active)
                  </span>
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                {isNepali
                  ? "तपाईंको कम्प्युटरको इन्टरनेट बन्द गरेर पनि यो एप १००% पूर्ण क्षमतामा चलाउन सक्नुहुन्छ।"
                  : "Disconnect Wi-Fi or unplug your network cable. StockForge executes sales, receipts, and reports flawlessly."}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsSimulatedOffline(!isSimulatedOffline)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
                  isSimulatedOffline
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 border border-neutral-700"
                }`}
              >
                <WifiOff className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {isSimulatedOffline
                    ? isNepali
                      ? "✓ १००% अफलाइन मोड सक्रिय (Active)"
                      : "✓ 100% Offline Mode Active"
                    : isNepali
                      ? "अफलाइन मोड परीक्षण"
                      : "Simulate Offline Mode"}
                </span>
              </button>
            </div>
          </div>

          {/* Interactive Status Comparison Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 text-xs">
            <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
              <div className="text-[11px] font-semibold text-neutral-400 mb-1 uppercase tracking-wider">
                {isNepali
                  ? "बिक्री कारोबार विलम्ब (Latency)"
                  : "Checkout Transaction Latency"}
              </div>
              <div className="text-xl font-bold font-mono text-emerald-400">
                0.2 ms{" "}
                <span className="text-xs text-neutral-400 font-normal">
                  ({isNepali ? "तुरुन्तै" : "Instant client-side"})
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1.5">
                {isNepali
                  ? "क्लाउड POS मा ३-१० सेकेन्ड लाग्ने काम ०.२ मिलिसेकेन्डमै।"
                  : "Traditional cloud POS takes 3,000ms+ during peak traffic."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
              <div className="text-[11px] font-semibold text-neutral-400 mb-1 uppercase tracking-wider">
                {isNepali
                  ? "इन्टरनेट निर्भरता (Internet Requirement)"
                  : "Internet Dependency Ratio"}
              </div>
              <div className="text-xl font-bold font-mono text-emerald-400">
                0%{" "}
                <span className="text-xs text-neutral-400 font-normal">
                  ({isNepali ? "शून्य" : "Zero bytes needed"})
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1.5">
                {isNepali
                  ? "काउन्टरमा बिक्री र प्रिन्ट गर्दा शून्य इन्टरनेट प्रयोग हुन्छ।"
                  : "Ring up sales, calculate totals, and print receipts with zero network calls."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
              <div className="text-[11px] font-semibold text-neutral-400 mb-1 uppercase tracking-wider">
                {isNepali
                  ? "डेटा भण्डारण (Data Storage)"
                  : "Primary Data Location"}
              </div>
              <div className="text-xl font-bold font-mono text-emerald-400 truncate">
                Local Hardware{" "}
                <span className="text-xs text-neutral-400 font-normal">
                  ({isNepali ? "स्थानीय" : "Local SQLite DB"})
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1.5">
                {isNepali
                  ? "तपाईंको आफ्नै ल्यापटप वा काउन्टर कम्प्युटरको डिस्कमा सुरक्षित।"
                  : "Stored securely inside your local machine hard drive in standalone SQLite database files."}
              </p>
            </div>
          </div>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-neutral-100 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with CTAs */}
        <div className="mt-12 text-center pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <Sparkles className="w-4 h-4" />
            <span>
              {isNepali
                ? "१००% अफलाइन POS डेमो अनुरोध गर्नुहोस्"
                : "Request 100% Offline POS Demo"}
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/features"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs sm:text-sm font-semibold border border-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>
              {isNepali
                ? "इन्जिनका सम्पूर्ण प्राविधिक सुविधाहरू"
                : "Explore Technical Architecture"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
