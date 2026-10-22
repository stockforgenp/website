import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/common/SEO.tsx";
import {
  FileText,
  Scale,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Monitor,
  Printer,
  Mail,
  Phone,
  HardDrive,
  RefreshCw,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.tsx";
import { CONTACT_INFO } from "../constants/contactInfo.ts";

export const TermsOfUsePage: React.FC = () => {
  const { isNepali } = useLanguage();

  const lastUpdated = isNepali ? "२०८३ कार्तिक ०५ (October 2026)" : "October 22, 2026";

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: isNepali ? "प्रयोगका सर्तहरू (Terms of Use) – StockForge" : "Terms of Use – StockForge Retail POS",
    description:
      "StockForge POS terms of use: desktop software licensing, 100% data ownership, hardware requirements, billing compliance, and fair support guidelines.",
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
            ? "प्रयोगका सर्तहरू (Terms of Use) – StockForge"
            : "Terms of Use – Desktop Software License & Customer Rights"
        }
        description={
          isNepali
            ? "StockForge को सफ्टवेयर प्रयोगका सर्तहरू: डेस्कटप लाइसेन्स, १००% डेटाको स्वामित्व, हार्डवेयर आवश्यकता र पारदर्शी सहयोग सेवा।"
            : "Review StockForge POS terms of use: native desktop licensing, complete store data ownership, hardware pairing guidelines, and customer service commitments."
        }
        keywords={[
          "StockForge terms of use",
          "POS software license Nepal",
          "offline desktop POS terms",
          "retail billing software conditions",
          "प्रयोगका सर्तहरू",
          "सफ्टवेयर लाइसेन्स",
        ]}
        locale={isNepali ? "ne_NP" : "en_NP"}
        canonicalPath="/terms"
        breadcrumbs={[
          { name: isNepali ? "गृहपृष्ठ" : "Home", path: "/" },
          { name: isNepali ? "प्रयोगका सर्तहरू" : "Terms of Use", path: "/terms" },
        ]}
        schemaJson={schemaJson}
      />

      {/* Header Banner */}
      <section className="pt-16 pb-12 bg-neutral-950 border-b border-neutral-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-400 text-xs font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>{isNepali ? "पारदर्शी कानुनी सम्झौता" : "Transparent Terms & Fair Licensing"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-100 tracking-tight">
            {isNepali ? (
              <>
                प्रयोगका <span className="text-emerald-400">सर्तहरू</span>
              </>
            ) : (
              <>
                Terms of <span className="text-emerald-400">Use</span>
              </>
            )}
          </h1>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
            {isNepali
              ? `पछिल्लो पटक अध्यावधिक: ${lastUpdated} · सफ्टवेयर प्रयोग गर्दा लागू हुने स्पष्ट र निष्पक्ष सर्तहरू।`
              : `Last Updated: ${lastUpdated} · Straightforward, fair licensing for retail storekeepers.`}
          </p>

          {/* Quick Switcher between Privacy Policy & Terms */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <Link
              to="/privacy"
              className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition-colors text-xs font-medium"
            >
              {isNepali ? "← गोपनीयता नीति (Privacy)" : "← Privacy Policy"}
            </Link>
            <span className="px-4 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold text-xs">
              {isNepali ? "प्रयोगका सर्तहरू (Terms)" : "Terms of Use"}
            </span>
          </div>
        </div>
      </section>

      {/* Core Terms Highlights */}
      <section className="py-10 bg-neutral-900/30 border-b border-neutral-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Monitor className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-neutral-100">
                {isNepali ? "नेटिभ डेस्कटप लाइसेन्स" : "Desktop App License"}
              </h3>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                {isNepali
                  ? "तपाईंको पसलको पीसी (Windows/Mac/Linux) मा १००% अफलाइन सञ्चालन अधिकार।"
                  : "Authorized for retail counter operations with zero recurring internet hostage fees."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center">
                <HardDrive className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-neutral-100">
                {isNepali ? "१००% डेटाको स्वामित्व" : "100% Data Ownership"}
              </h3>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                {isNepali
                  ? "तपाईंको सबै सामान, खाता, बिक्री र नाफाको डेटा तपाईंको मात्र स्वामित्वमा रहन्छ।"
                  : "You own all inventory, billing records, and customer khata ledgers without lock-in."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-neutral-100">
                {isNepali ? "स्थानीय प्राविधिक सहयोग" : "Dedicated Support"}
              </h3>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                {isNepali
                  ? "हार्डवेयर सेटअप, थर्मल प्रिन्टर र तालिमका लागि स्थानीय सहयोग उपलब्ध।"
                  : "Direct telephone, WhatsApp, and on-site support for printers and counter staff."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Terms Content */}
      <section className="py-14 bg-neutral-950 text-neutral-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 leading-relaxed text-xs sm:text-sm">
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                १
              </span>
              <span>{isNepali ? "१. सर्तहरूको स्वीकृति (Acceptance of Terms)" : "1. Acceptance of Terms"}</span>
            </h2>
            <p>
              {isNepali
                ? "StockForge डेस्कटप एप्लिकेसन डाउनलोड, इन्स्टल, सक्रिय वा प्रयोग गरेर, तपाईं यी प्रयोगका सर्तहरूसँग सहमत हुनुभएको मानिनेछ। यदि तपाईं यी सर्तहरूसँग असहमत हुनुहुन्छ भने, कृपया सफ्टवेयर इन्स्टल वा प्रयोग नगर्नुहोस्। यी सर्तहरू सम्पूर्ण खुद्रा पसल, मार्ट, किराना र व्यवसाय मालिकहरू तथा तिनीहरूका अधिकृत क्यासियरहरूमा समान रूपमा लागू हुनेछ।"
                : "By downloading, installing, activating, or operating the StockForge desktop application, or using our website and services, you agree to be bound by these Terms of Use. If you do not agree to these terms, do not install or use the software. These terms apply to all shop owners, commercial managers, and counter cashiers."}
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
                  ? "२. सफ्टवेयर लाइसेन्स र प्रयोगको दायरा (License Grant)"
                  : "2. Software License Grant & Scope"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "StockForge ले तपाईंलाई आफ्नो व्यावसायिक काउन्टरमा खुद्रा बिक्री, मौज्दात नियन्त्रण (Inventory), क्रमबद्ध इनभ्वाइस बिलिङ, र ग्राहक/आपूर्तिकर्ता खाता व्यवस्थापन गर्नका लागि गैर-हस्तान्तरणीय (Non-transferable) र गैर-विशेष (Non-exclusive) लाइसेन्स प्रदान गर्दछ।"
                : "StockForge grants you a non-exclusive, non-transferable license to install and execute the desktop application on designated counter hardware for retail point-of-sale, multi-unit inventory tracking, sequential invoicing, customer credit khata, and staff management."}
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-neutral-400">
              <li>
                {isNepali
                  ? "तपाईंले सफ्टवेयरको स्रोत कोडलाई रिभर्स-इन्जिनियर, डिकम्पाइल वा अनधिकृत नक्कल गर्न पाउनुहुने छैन।"
                  : "You may not reverse-engineer, decompile, extract, or redistribute the binary application without written authorization."}
              </li>
              <li>
                {isNepali
                  ? "लाइसेन्स सम्झौताअनुसार अधिकृत कम्प्युटर/टर्मिनलमा मात्र सफ्टवेयर सञ्चालन गर्न पाइनेछ।"
                  : "License activations are granted per registered store terminal according to your agreement."}
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
                  ? "३. डेटाको स्वामित्व र स्थानीय नियन्त्रण (Data Ownership)"
                  : "3. Complete Store Data Ownership"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "तपाईंको पसलको सम्पूर्ण डेटाको १००% कानुनी र वास्तविक स्वामित्व तपाईंमै निहित रहन्छ। StockForge ले तपाईंको व्यापारिक डेटामा कुनै पनि स्वामित्व दाबी गर्दैन।"
                : "You retain sole and exclusive ownership of all business records, inventory quantities, supplier purchase prices, customer credit balances, and financial ledgers created in the software."}
            </p>
            <p className="text-neutral-400">
              {isNepali
                ? "किनकि सम्पूर्ण डेटा तपाईंको आफ्नै कम्प्युटरमा स्थानीय SQLite फाइलमा बस्छ, तपाईंले कुनै पनि बेला १-क्लिकमा .sql स्क्रिप्ट वा .db फाइलको रूपमा आफ्नो डेटा पूर्ण रूपमा निर्यात गर्न सक्नुहुन्छ। हामी तपाईंको डेटालाई कुनै पनि क्लाउड बन्देज (Vendor Lock-in) मा राख्दैनौँ।"
                : "Because your database is embedded locally, you have unrestricted access to export complete .sql scripts and binary .db backups at any time with 0 vendor lock-in."}
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ४
              </span>
              <span>
                {isNepali
                  ? "४. कर, भ्याट र बिलिङ दायित्व (Tax & Legal Compliance)"
                  : "4. Tax, VAT & Commercial Compliance"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "StockForge ले स्वचालित क्रमबद्ध बिलिङ (BILL-YYYYMMDD-XXXX), कर (VAT / Non-VAT) विभाजन र छुट हिसाब गर्ने प्राविधिक उपकरण प्रदान गर्दछ। तर, नेपाल सरकार वा सम्बन्धित कर कार्यालय (आन्तरिक राजस्व विभाग - IRD) को नियम अनुसार आफ्नो व्यवसाय दर्ता गर्ने, सही कर प्रतिशत तोक्ने र समयमै विवरण बुझाउने सम्पूर्ण कानुनी जिम्मेवारी व्यवसाय मालिकको रहनेछ।"
                : "StockForge provides automated sequential bill numbering, transparent VAT/non-VAT tax calculations, and itemized discount math. However, the business owner is solely responsible for determining appropriate tax configurations, ensuring compliance with local Inland Revenue Department (IRD Nepal) requirements, and submitting accurate fiscal returns."}
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
                  ? "५. हार्डवेयर उपकरण र ब्याकअपको जिम्मेवारी (Hardware & Backups)"
                  : "5. Hardware, Peripherals & Backup Care"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "सफ्टवेयर सञ्चालन गर्न आवश्यक कम्प्युटर (विन्डोज, म्याक, लिनक्स), ५८mm वा ८०mm थर्मल रसिद प्रिन्टर, बारकोड स्क्यानर र क्यास ड्रयरको भौतिक मर्मत र सुरक्षा प्रयोगकर्ताको जिम्मेवारी हो।"
                : "Users are responsible for maintaining counter hardware (PCs, thermal receipt printers, barcode scanners, cash drawers) in functional working condition."}
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-neutral-400">
              <li>
                {isNepali
                  ? "कम्प्युटर बिग्रने, हार्डड्राइभ नष्ट हुने वा भाइरसका कारण हुन सक्ने डेटा क्षतिबाट बच्न प्रयोगकर्ताले नियमित रूपमा पेनड्राइभ वा गुगल सिटमा ब्याकअप लिनुपर्दछ।"
                  : "Hardware failures, power surges, or operating system corruptions can damage unbacked files. Users must routinely maintain external USB or Google Sheets cloud backups."}
              </li>
              <li>
                {isNepali
                  ? "नयाँ कम्प्युटरमा सफ्टवेयर सार्दा ब्याकअप फाइलमार्फत १-क्लिकमा रिस्टोर गर्न सकिन्छ।"
                  : "When migrating to a new machine, users can restore operations in seconds using standard database snapshots."}
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
                {isNepali
                  ? "६. प्राविधिक सहयोग र सेवा प्रतिबद्धता (Support & SLA)"
                  : "6. Technical Support & SLA Commitment"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "हाम्रो प्राविधिक सहयोग टोली हप्ताको ७ दिन बिहान ७:०० देखि साँझ १०:०० सम्म फोन तथा ह्वाट्सएपमार्फत उपलब्ध रहन्छ। काउन्टरको आपतकालीन समस्या (जस्तै बिलिङ रोकिनु वा प्रिन्टर त्रुटि) का लागि हामी २ घण्टाभित्र द्रुत समाधान (SLA < 2 Hours) प्रदान गर्न प्रतिबद्ध छौँ।"
                : "Our technical team is available 7 days a week (7:00 AM – 10:00 PM NPT) via phone and WhatsApp. For counter emergencies (such as bill printing halts or printer misalignments), we maintain a rapid response target (SLA < 2 hours)."}
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ७
              </span>
              <span>
                {isNepali
                  ? "७. दायित्वको सीमा (Limitation of Liability)"
                  : "7. Limitation of Liability & Warranty"}
              </span>
            </h2>
            <p>
              {isNepali
                ? 'StockForge सफ्टवेयर "जस्तो छ त्यस्तै" (As-Is) आधारमा उपलब्ध गराइन्छ। हामीले यसलाई उच्च गति, विश्वसनीयता र शून्य-त्रुटि इन्जिनका साथ परीक्षण गरेका छौँ। तर प्रयोगकर्ताको कम्प्युटरको हार्डवेयर असफलता, विद्युतीय गडबडी, वा ब्याकअप नलिइएका कारण हुन सक्ने नाफा नोक्सानका लागि कम्पनीको दायित्व प्रयोगकर्ताले तिरेको सफ्टवेयर शुल्कभन्दा बढी हुने छैन।'
                : 'StockForge is delivered "as is" with high-standard engineering rigor and zero-latency desktop architecture. Under no circumstances shall StockForge or its developers be held liable for indirect, incidental, or consequential business damages resulting from user hardware failures, power cuts, or lack of external backup discipline, exceeding the license fee paid.'}
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ८
              </span>
              <span>
                {isNepali ? "८. लागू हुने कानुन (Governing Law)" : "8. Governing Law & Jurisdiction"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "यी प्रयोगका सर्तहरू नेपालको प्रचलित कानुनबमोजिम व्याख्या र लागू गरिनेछन्। यस सम्झौतासँग सम्बन्धित कुनै पनि विवाद उत्पन्न भएमा नेपालको न्यायिक अधिकार क्षेत्र लागू हुनेछ।"
                : "These Terms of Use shall be governed by and construed in accordance with the laws of Nepal. Any dispute arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts of Nepal."}
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ९
              </span>
              <span>
                {isNepali ? "९. सम्पर्क ठेगाना" : "9. Legal & Support Contacts"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "प्रयोगका सर्तहरू वा लाइसेन्सिङ सम्झौताबारे कुनै प्रश्न भएमा सिधै सम्पर्क गर्नुहोस्:"
                : "For questions regarding our licensing terms or customer agreements, contact us directly:"}
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
            {isNepali ? "आफ्नो पसलमा StockForge सुरु गर्नुहोस्" : "Ready to Experience Zero-Downtime POS?"}
          </h3>
          <p className="text-xs text-neutral-400">
            {isNepali
              ? "कुनै पनि मासिक शुल्कको तनाव बिना अफलाइन काउन्टर सुरु गर्नुहोस्।"
              : "Zero cloud lag, 100% offline security, and complete data ownership on your PC."}
          </p>
          <div className="pt-2 flex items-center justify-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>{isNepali ? "निःशुल्क डेमो लिनुहोस्" : "Request Free Demo"}</span>
            </Link>
            <Link
              to="/privacy"
              className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 font-semibold text-xs transition-colors cursor-pointer"
            >
              <span>{isNepali ? "गोपनीयता नीति (Privacy)" : "Privacy Policy"}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

