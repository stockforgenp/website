import React from "react";
import { Link } from "react-router-dom";
import {
  Store,
  Receipt,
  ShieldCheck,
  Scale,
  Sparkles,
  ArrowRight,
  Database,
  Mail,
  Phone,
  MapPin,
  User,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { CONTACT_INFO } from "../../constants/contactInfo.ts";

export const PublicFooter: React.FC = () => {
  const { isNepali } = useLanguage();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs selection:bg-emerald-500 selection:text-white">
      {/* Top CTA Banner */}
      <div className="border-b border-neutral-800/80 bg-gradient-to-b from-neutral-900/60 via-neutral-950 to-neutral-950 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {isNepali
                ? "निःशुल्क अन-साइट डेमो उपलब्ध"
                : "Zero Cloud Dependency · 100% Offline POS"}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-neutral-100 tracking-tight max-w-2xl mx-auto">
            {isNepali ? (
              <>
                आजैबाट सुरु गर्नुहोस् आफ्नो{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  शून्य-विलम्ब रिटेल POS
                </span>
              </>
            ) : (
              <>
                Modernize Your Store with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  StockForge POS
                </span>
              </>
            )}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            {isNepali
              ? "स्वचालित क्रमबद्ध इनभ्वाइस बिलिङ, बहु-एकाइ (kg, ltr, pcs) स्टक नियन्त्रण, ग्राहक खाता हिसाब र स्थानीय डेस्कटप SQLite ACID सुरक्षा।"
              : "Sequential invoice numbering, decimal multi-unit stock control, khata credit ledger, thermal receipt printing, and local desktop SQLite engine for Windows, macOS & Linux."}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all cursor-pointer active:scale-98"
            >
              <Sparkles className="w-4 h-4" />
              <span>
                {isNepali
                  ? "निःशुल्क डेमो अनुरोध गर्नुहोस्"
                  : "Request Free On-Site Demo"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/features"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 border border-neutral-800 transition-colors cursor-pointer"
            >
              <span>
                {isNepali ? "सबै सुविधाहरू हेर्नुहोस्" : "Explore All Features"}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group select-none">
              <picture>
                <source srcSet="/icon-96.avif" type="image/avif" />
                <img
                  src="/icon-96.png"
                  alt="StockForge Logo"
                  width={36}
                  height={36}
                  loading="lazy"
                  decoding="async"
                  className="w-9 h-9 rounded-xl object-contain shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform"
                />
              </picture>
              <div>
                <span className="text-base font-black text-neutral-100 tracking-tight group-hover:text-emerald-400 transition-colors">
                  StockForge POS
                </span>
                <span className="block text-[10px] text-neutral-400 font-mono">
                  {isNepali
                    ? "अफलाइन डेस्कटप POS (Windows, Mac, Linux)"
                    : "Offline Desktop POS (Windows, Mac, Linux)"}
                </span>
              </div>
            </Link>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              {isNepali
                ? "नेपालका आधुनिक खुद्रा किराना, सुपरमार्ट, हार्डवेयर, र डेरी स्टोरहरूका लागि निर्मित शून्य-विलम्ब नेटिभ डेस्कटप POS सफ्टवेयर (Windows, macOS, Linux)।"
                : "Zero-latency native desktop POS and retail inventory management application for Windows, macOS, and Linux powered by embedded SQLite."}
            </p>

            {/* Quick Contact & Specs */}
            <div className="space-y-1.5 pt-1 text-[11px] text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>
                  {isNepali
                    ? CONTACT_INFO.address.displayNp
                    : CONTACT_INFO.address.displayEn}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={CONTACT_INFO.phone.telLink}
                  className="hover:text-emerald-400 transition-colors font-mono"
                >
                  {CONTACT_INFO.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={CONTACT_INFO.email.mailtoLink}
                  className="hover:text-emerald-400 transition-colors font-mono"
                >
                  {CONTACT_INFO.email.address}
                </a>
              </div>
            </div>
          </div>

          {/* Col 1: Platform Capabilities */}
          <div className="space-y-3">
            <div className="font-bold text-neutral-200 uppercase tracking-wider text-[11px]">
              {isNepali ? "सुविधाहरू" : "Platform Features"}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to="/features"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {isNepali
                    ? "बहु-एकाइ इन्भेन्टरी (kg, ltr, pcs)"
                    : "Multi-Unit Control"}
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {isNepali
                    ? "क्रमबद्ध बिलिङ र इनभ्वाइस"
                    : "Sequential Invoicing"}
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {isNepali
                    ? "थर्मल रसिद प्रिन्टिङ"
                    : "Thermal Receipt (ESC/POS)"}
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {isNepali
                    ? "नाफा र COGS विश्लेषण"
                    : "COGS & Profit Analytics"}
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {isNepali
                    ? "कर्मचारी पेरोल र भौचर"
                    : "Staff Salary & Payroll"}
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {isNepali
                    ? "ग्राहक खाता र आपूर्तिकर्ता"
                    : "Khata Credit Ledgers"}
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {isNepali
                    ? "गुगल सिट र SQL ब्याकअप"
                    : "Google Sheets & SQL Backup"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Retail Sectors */}
          <div className="space-y-3">
            <div className="font-bold text-neutral-200 uppercase tracking-wider text-[11px]">
              {isNepali ? "पसल प्रकारहरू" : "Store Sectors"}
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="hover:text-neutral-200 transition-colors">
                Grocery & Supermarkets
              </li>
              <li className="hover:text-neutral-200 transition-colors">
                Hardware & Electricals
              </li>
              <li className="hover:text-neutral-200 transition-colors">
                Dairy, Oils & Liquids
              </li>
              <li className="hover:text-neutral-200 transition-colors">
                Electronics & Mobile Stores
              </li>
              <li className="hover:text-neutral-200 transition-colors">
                Clothing & Boutiques
              </li>
              <li className="hover:text-neutral-200 transition-colors">
                Wholesale & Distributors
              </li>
              <li className="hover:text-neutral-200 transition-colors">
                Pharmacies & Personal Care
              </li>
            </ul>
          </div>

          {/* Col 3: Company, Support & Newsletter */}
          <div className="space-y-3">
            <div className="font-bold text-neutral-200 uppercase tracking-wider text-[11px]">
              {isNepali ? "सम्पर्क र जानकारी" : "Company & Help"}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to="/about"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {isNepali ? "हाम्रोबारे (About Us)" : "About StockForge"}
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {isNepali
                    ? "ग्राहक प्रतिक्रिया (Clients)"
                    : "Success Stories"}
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {isNepali
                    ? "प्रश्नोत्तर (FAQs)"
                    : "Frequently Asked Questions"}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {isNepali ? "सम्पर्क तथा सहयोग" : "Contact Support Hub"}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {isNepali ? "गोपनीयता नीति (Privacy)" : "Privacy Policy"}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {isNepali ? "प्रयोगका सर्तहरू (Terms)" : "Terms of Use"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & integrity */}
        <div className="pt-8 mt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div className="flex flex-wrap items-center gap-2">
            <span>
              © {new Date().getFullYear()} StockForge POS.{" "}
              {isNepali ? "सर्वाधिकार सुरक्षित।" : "All rights reserved."}
            </span>
            <span className="text-neutral-700">·</span>
            <Link
              to="/privacy"
              className="text-neutral-400 hover:text-emerald-400 transition-colors"
            >
              {isNepali ? "गोपनीयता नीति" : "Privacy"}
            </Link>
            <span className="text-neutral-700">·</span>
            <Link
              to="/terms"
              className="text-neutral-400 hover:text-emerald-400 transition-colors"
            >
              {isNepali ? "सर्तहरू" : "Terms"}
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5 text-neutral-400">
              <Database className="w-3.5 h-3.5 text-emerald-400" />
              <span>Offline Desktop App (Windows, macOS, Linux)</span>
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5 text-neutral-400">
              <Receipt className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sequential Bill Ledger Compliant</span>
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5 text-neutral-400">
              <Scale className="w-3.5 h-3.5 text-emerald-400" />
              <span>VAT / Non-VAT Multi-Tax Support</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
