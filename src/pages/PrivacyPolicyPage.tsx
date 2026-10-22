import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/common/SEO.tsx";
import {
  ShieldCheck,
  Lock,
  Database,
  EyeOff,
  Cloud,
  FileText,
  Mail,
  Phone,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Server,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.tsx";
import { CONTACT_INFO } from "../constants/contactInfo.ts";

export const PrivacyPolicyPage: React.FC = () => {
  const { isNepali } = useLanguage();

  const lastUpdated = isNepali ? "२०८३ कार्तिक ०५ (October 2026)" : "October 22, 2026";

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: isNepali ? "गोपनीयता नीति (Privacy Policy) – StockForge" : "Privacy Policy – StockForge Desktop POS",
    description:
      "StockForge POS privacy policy: 100% offline-first local SQLite architecture, zero cloud telemetry, complete store data sovereignty, and user-controlled Google Sheets backups.",
    publisher: {
      "@type": "Organization",
      name: "StockForge",
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
            ? "गोपनीयता नीति (Privacy Policy) – StockForge"
            : "Privacy Policy – Local Data Sovereignty & Offline Security"
        }
        description={
          isNepali
            ? "StockForge को गोपनीयता नीति: १००% अफलाइन स्थानीय SQLite भण्डारण, कुनै क्लाउड ट्र्याकिङ छैन, र तपाईंको पसलको डेटा तपाईंको आफ्नै कम्प्युटरमा मात्र सुरक्षित रहन्छ।"
            : "Understand how StockForge POS protects your store privacy: 100% offline local SQLite storage, zero cloud telemetry, complete data ownership, and optional Google Sheets backup."
        }
        keywords={[
          "StockForge privacy policy",
          "offline POS privacy",
          "local SQLite data sovereignty",
          "desktop POS security",
          "no cloud tracking POS",
          "गोपनीयता नीति",
          "डेटा सुरक्षा",
        ]}
        locale={isNepali ? "ne_NP" : "en_NP"}
        canonicalPath="/privacy"
        breadcrumbs={[
          { name: isNepali ? "गृहपृष्ठ" : "Home", path: "/" },
          { name: isNepali ? "गोपनीयता नीति" : "Privacy Policy", path: "/privacy" },
        ]}
        schemaJson={schemaJson}
      />

      {/* Header Banner */}
      <section className="pt-16 pb-12 bg-neutral-950 border-b border-neutral-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isNepali ? "डेटा सुरक्षा र गोपनीयता" : "Privacy & Data Sovereignty"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-100 tracking-tight">
            {isNepali ? (
              <>
                गोपनीयता <span className="text-emerald-400">नीति</span>
              </>
            ) : (
              <>
                Privacy <span className="text-emerald-400">Policy</span>
              </>
            )}
          </h1>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
            {isNepali
              ? `पछिल्लो पटक अध्यावधिक: ${lastUpdated} · तपाईंको पसलको डेटा तपाईंको आफ्नै सम्पत्ति हो।`
              : `Last Updated: ${lastUpdated} · Your business data belongs strictly to you.`}
          </p>

          {/* Quick Switcher between Privacy Policy & Terms */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className="px-4 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold text-xs">
              {isNepali ? "गोपनीयता नीति (Privacy)" : "Privacy Policy"}
            </span>
            <Link
              to="/terms"
              className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition-colors text-xs font-medium"
            >
              {isNepali ? "प्रयोगका सर्तहरू (Terms of Use) →" : "Terms of Use →"}
            </Link>
          </div>
        </div>
      </section>

      {/* Core Privacy Highlights */}
      <section className="py-10 bg-neutral-900/30 border-b border-neutral-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Database className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-neutral-100">
                {isNepali ? "१००% स्थानीय भण्डारण" : "100% Local Storage"}
              </h3>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                {isNepali
                  ? "बिक्री, ग्राहक खाता र स्टक तपाईंको आफ्नै कम्प्युटरको SQLite डेटाबेसमा मात्र रहन्छ।"
                  : "All transactions, ledger balances, and inventory remain strictly on your local computer."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center">
                <EyeOff className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-neutral-100">
                {isNepali ? "कुनै क्लाउड ट्र्याकिङ छैन" : "Zero Cloud Telemetry"}
              </h3>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                {isNepali
                  ? "हामी तपाईंको बिक्रीको परिमाण, मार्जिन वा ग्राहक विवरण कहिल्यै हेर्दैनौँ र संकलन गर्दैनौँ।"
                  : "We do not track, upload, analyze, or monetize your store's sales, margins, or customers."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <Cloud className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-neutral-100">
                {isNepali ? "तपाईंको आफ्नै गुगल ड्राइभ" : "Your Own Google Drive"}
              </h3>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                {isNepali
                  ? "क्लाउड ब्याकअप लिँदा डेटा तपाईंको व्यक्तिगत गुगल सिटमा मात्र सुरक्षित हुन्छ।"
                  : "Cloud backups sync directly to your personal Google Sheet via Google OAuth. We never intermediate."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="py-14 bg-neutral-950 text-neutral-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 leading-relaxed text-xs sm:text-sm">
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                १
              </span>
              <span>{isNepali ? "१. हाम्रो गोपनीयता प्रतिबद्धता" : "1. Our Privacy Commitment"}</span>
            </h2>
            <p>
              {isNepali
                ? "StockForge का लागि प्रयोगकर्ताको डेटा गोपनीयता र स्वतन्त्रता सर्वोच्च प्राथमिकता हो। परम्परागत क्लाउड POS सफ्टवेयरले पसलको दैनिक कारोबार, मार्जिन र ग्राहकको व्यक्तिगत डेटा आफ्नो केन्द्रीय सर्भरमा राख्छन्। यसको विपरीत, StockForge पूर्ण रूपमा अफलाइन-फर्स्ट नेटिभ डेस्कटप एप्लिकेसन (Windows, macOS, Linux) का रूपमा तयार गरिएको हो। तपाईंको कुनै पनि व्यापारिक विवरण हाम्रो वा कुनै तेस्रो पक्षको सर्भरमा पठाइँदैन।"
                : "At StockForge, user privacy and data sovereignty are paramount. While generic cloud POS platforms upload store inventory, sales volumes, profits, and customer credit ledgers to centralized remote servers, StockForge is engineered as an offline-first native desktop software for Windows, macOS, and Linux. Your private retail records never leave your local physical device without your explicit command."}
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                २
              </span>
              <span>
                {isNepali
                  ? "२. स्थानीय डेटाबेस र भण्डारण (Local SQLite Storage)"
                  : "2. Local Database & On-Device Storage"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "तपाईंले StockForge डेस्कटप एपमा प्रविष्टि गर्नुहुने सम्पूर्ण जानकारीहरू तपाईंको कम्प्युटरमै स्थानीय SQLite डेटाबेस फाइलमा सुरक्षित हुन्छन्। यसमा समावेश छन्:"
                : "All data generated when running the StockForge desktop application is persisted exclusively inside an embedded ACID-compliant SQLite database stored on your computer's local drive. This includes:"}
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-neutral-400">
              <li>
                <strong className="text-neutral-200">
                  {isNepali ? "सामान र इन्भेन्टरी:" : "Product Catalog & Inventory:"}
                </strong>{" "}
                {isNepali
                  ? "सामानको नाम, SKU, बारकोड, खरिद दर, बिक्री दर, थोक मूल्य, ब्याच नम्बर, म्याद सकिने मिति र मौज्दात।"
                  : "Item names, SKUs, barcode numbers, cost prices, selling rates, wholesale slabs, batch lots, and stock levels."}
              </li>
              <li>
                <strong className="text-neutral-200">
                  {isNepali ? "बिक्री तथा खरिद इनभ्वाइस:" : "Sales & Purchase Invoices:"}
                </strong>{" "}
                {isNepali
                  ? "क्रमबद्ध बिल नम्बरहरू (BILL-...), छुट, कर, भुक्तानी माध्यम (नगद, QR, चेक, बैंक) र रसिद इतिहास।"
                  : "Sequential bill references, itemized line items, discounts, taxes, and payment mode splits (Cash, QR, Bank, Cheque)."}
              </li>
              <li>
                <strong className="text-neutral-200">
                  {isNepali ? "ग्राहक तथा आपूर्तिकर्ता खाता (Khata):" : "Customer & Vendor Khata Ledgers:"}
                </strong>{" "}
                {isNepali
                  ? "ग्राहक र आपूर्तिकर्ताको नाम, फोन, साविकको बाँकी, हालको बाँकी, फर्स्यौट रसिद र स्टेटमेन्ट।"
                  : "Party names, phone numbers, previous dues, current dues, settlements, and running balances."}
              </li>
              <li>
                <strong className="text-neutral-200">
                  {isNepali ? "खर्च, तलब र हिसाब-किताब:" : "Expenses, Payroll & Cash Float:"}
                </strong>{" "}
                {isNepali
                  ? "पसलको दैनिक खर्च (भाडा, बिजुली), कर्मचारी विवरण, मासिक तलब भौचर, क्यासियर सिफ्ट फ्लोट र दैनिक हिसाब (Day Book)।"
                  : "Store overheads, staff salary vouchers, cashier shift drawer floats, and double-entry daily day books."}
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ३
              </span>
              <span>
                {isNepali
                  ? "३. गुगल सिट ब्याकअप र OAuth अनुमति"
                  : "3. Google Sheets Backup & OAuth Integration"}
              </span>
            </h2>
            <p>
              {isNepali
                ? 'यदि तपाईंले सफ्टवेयरमा रहेको "Google Sheets Cloud Backup" सुविधा प्रयोग गर्नुभयो भने, प्रमाणीकरण सिधै आधिकारिक Google OAuth मार्फत सम्पन्न हुन्छ। यस प्रक्रियामा:'
                : 'If you opt to use the built-in "Google Sheets Cloud Backup" feature, authentication is executed directly via official Google OAuth consent screens. Under this integration:'}
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-neutral-400">
              <li>
                {isNepali
                  ? "तपाईंको पसलको डेटा तपाईंको आफ्नै व्यक्तिगत वा व्यापारिक गुगल ड्राइभमा रहेको गुगल सिटमा सिधै ब्याकअप हुन्छ।"
                  : "Data is synchronized directly between your desktop client and your personal Google Drive / Google Sheet."}
              </li>
              <li>
                {isNepali
                  ? "StockForge ले तपाईंको गुगल खाताको पासवर्ड वा अन्य व्यक्तिगत फाइलहरू हेर्न, संकलन गर्न वा भण्डारण गर्न सक्दैन।"
                  : "StockForge does not store, see, or transmit your Google credentials, passwords, or unrelated personal files."}
              </li>
              <li>
                {isNepali
                  ? "तपाईंले जुनसुकै बेला आफ्नो गुगल खाताको सुरक्षा सेटिङ्सबाट अनुमति खारेज (Revoke) गर्न सक्नुहुन्छ।"
                  : "You retain the right to revoke Google Sheets API access at any moment via your Google Account Security Dashboard."}
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ४
              </span>
              <span>
                {isNepali
                  ? "४. वेबसाइटमा संकलन हुने जानकारी (Website Inquiries)"
                  : "4. Information Collected on Our Website"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "जब तपाईं हाम्रो वेबसाइट (stockforge.app) मा आउनुहुन्छ वा अन-साइट डेमो / सहयोगका लागि फाराम भर्नुहुन्छ, हामी निम्न जानकारी मात्र लिन्छौँ:"
                : "When visiting our public website or submitting an on-site hardware demo request, we only collect the information you voluntarily submit:"}
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-neutral-400">
              <li>
                {isNepali
                  ? "सम्पर्क व्यक्तिको नाम, फोन नम्बर र इमेल ठेगाना।"
                  : "Your name, phone/WhatsApp number, and business email."}
              </li>
              <li>
                {isNepali
                  ? "पसलको नाम, सहर र पसलको प्रकृति (किराना, मार्ट, हार्डवेयर, आदि)।"
                  : "Your shop name, location/city, and store category (e.g. Grocery, Mart, Hardware)."}
              </li>
              <li>
                {isNepali
                  ? "तपाईंले पठाउनुभएको सोधपुछ वा प्राविधिक सन्देश।"
                  : "Your specific inquiry notes, questions, or scheduled demo preferences."}
              </li>
            </ul>
            <p className="text-neutral-400 pt-1">
              {isNepali
                ? "यी जानकारीहरू केवल तपाईंको डेमो तालिका मिलाउन र प्राविधिक सहयोग प्रदान गर्नका लागि मात्र प्रयोग गरिन्छ। हामी तपाईंको नम्बर वा इमेल कुनै पनि विज्ञापन एजेन्सीलाई बेच्ने वा बाँड्ने गर्दैनौँ।"
                : "This information is used strictly to coordinate on-site software demos, answer technical queries, and provide hardware recommendations. We never sell, rent, or lease contact databases to third-party telemarketers."}
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ५
              </span>
              <span>
                {isNepali
                  ? "५. डेटा सुरक्षा र प्रयोगकर्ताको जिम्मेवारी"
                  : "5. Data Security & User Responsibilities"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "किनकि StockForge को सम्पूर्ण डेटा तपाईंको आफ्नै कम्प्युटरमा रहन्छ, कम्प्युटरको भौतिक सुरक्षा र नियमित ब्याकअपको जिम्मेवारी प्रयोगकर्ताको रहनेछ। हामी निम्न उत्तम अभ्यासहरू अवलम्बन गर्न सिफारिस गर्दछौँ:"
                : "Because StockForge records reside locally on your physical hardware, physical computer security and backup hygiene are managed directly by you. We recommend following standard retail security best practices:"}
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-neutral-400">
              <li>
                {isNepali
                  ? "नियमित रूपमा १-क्लिकमा .sql वा .db फाइल पेनड्राइभमा सुरक्षित गर्नुहोस्।"
                  : "Regularly perform 1-click database exports (.sql or .db) to an external flash drive or secondary hard drive."}
              </li>
              <li>
                {isNepali
                  ? "काउन्टर कम्प्युटरमा बलियो पासवर्ड राख्नुहोस् र अपरिचित व्यक्तिलाई पहुँच नदिनुहोस्।"
                  : "Enforce secure operating system passwords on cash counter terminals."}
              </li>
              <li>
                {isNepali
                  ? "काउन्टर सिफ्ट बन्द गर्दा क्यासियर सिफ्ट Z-Report मिलान गरी सुरक्षित गर्नुहोस्।"
                  : "Close cashier shifts daily using the Cash Drawer shift reconciliation feature to maintain complete audit trails."}
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ६
              </span>
              <span>
                {isNepali ? "६. सम्पर्क तथा सहायता" : "6. Privacy Inquiries & Support"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "यदि तपाईंलाई हाम्रो गोपनीयता नीति, डेटा सुरक्षा वा सफ्टवेयरको भण्डारण प्रविधिबारे कुनै पनि जिज्ञासा भएमा हाम्रो प्राविधिक टोलीसँग सिधै सम्पर्क गर्न सक्नुहुन्छ:"
                : "For any inquiries regarding our offline architecture, data handling, or privacy standards, feel free to contact our engineering team directly:"}
            </p>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2 mt-2">
              <div className="text-neutral-200 font-bold">StockForge</div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <a
                    href={CONTACT_INFO.email.mailtoLink}
                    className="hover:text-emerald-400 font-mono transition-colors"
                  >
                    {CONTACT_INFO.email.address}
                  </a>
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <a
                    href={CONTACT_INFO.phone.telLink}
                    className="hover:text-emerald-400 font-mono transition-colors"
                  >
                    {CONTACT_INFO.phone.display}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-neutral-900/30 border-t border-neutral-800 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-3">
          <h3 className="text-lg font-bold text-neutral-100">
            {isNepali ? "कुनै प्रश्न वा द्विविधा छ?" : "Have Questions About Our Privacy Standards?"}
          </h3>
          <p className="text-xs text-neutral-400">
            {isNepali
              ? "हाम्रो प्राविधिक टोलीसँग प्रत्यक्ष कुरा गर्नुहोस् र आफ्नो पसलका लागि १००% सुरक्षित समाधान पाउनुहोस्।"
              : "Our engineering and customer support team is available 7 days a week to assist you."}
          </p>
          <div className="pt-2 flex items-center justify-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>{isNepali ? "सम्पर्क गर्नुहोस्" : "Contact Support"}</span>
            </Link>
            <Link
              to="/terms"
              className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 font-semibold text-xs transition-colors cursor-pointer"
            >
              <span>{isNepali ? "प्रयोगका सर्तहरू (Terms)" : "Terms of Use"}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

