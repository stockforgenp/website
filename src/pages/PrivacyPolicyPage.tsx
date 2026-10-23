import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/common/SEO.tsx";
import {
  ShieldCheck,
  Database,
  EyeOff,
  Cloud,
  Mail,
  Phone,
  FileCheck2,
  Lock,
  Globe2,
  FileText,
  UserCheck,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.tsx";
import { CONTACT_INFO } from "../constants/contactInfo.ts";

export const PrivacyPolicyPage: React.FC = () => {
  const { isNepali } = useLanguage();

  const lastUpdated = isNepali
    ? "२०८३ कार्तिक ०५ (October 2026)"
    : "October 23, 2026";

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: isNepali
      ? "गोपनीयता नीति (Privacy Policy) – StockForge"
      : "Privacy Policy – StockForge Desktop POS",
    description:
      "StockForge POS privacy policy compliant with The Privacy Act 2075 of Nepal, Electronic Transactions Act 2063, and international GDPR data protection standards. 100% offline local SQLite storage with zero cloud telemetry.",
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
            : "Privacy Policy – Nepal Privacy Act 2075 & International Standards"
        }
        description={
          isNepali
            ? "StockForge को गोपनीयता नीति: वैयक्तिक गोपनीयता सम्बन्धी ऐन २०७५, विद्युतीय कारोबार ऐन २०६३ र अन्तर्राष्ट्रिय GDPR सिद्धान्तहरू अनुरुप १००% अफलाइन स्थानीय SQLite भण्डारण तथा पूर्ण डेटा सार्वभौमसत्ता।"
            : "Understand StockForge's privacy policy: full compliance with Nepal's Privacy Act 2075, Electronic Transactions Act 2063, and international data protection standards. 100% offline local SQLite storage, zero cloud telemetry, and total merchant data sovereignty."
        }
        keywords={[
          "StockForge privacy policy",
          "Nepal Privacy Act 2075",
          "वैयक्तिक गोपनीयता सम्बन्धी ऐन २०७५",
          "Electronic Transactions Act 2063",
          "विद्युतीय कारोबार ऐन २०६३",
          "IRD Nepal tax records 6 years",
          "GDPR local data sovereignty",
          "offline POS privacy Nepal",
          "desktop POS security",
          "no cloud tracking POS",
          "गोपनीयता नीति",
          "डेटा सुरक्षा",
        ]}
        locale={isNepali ? "ne_NP" : "en_NP"}
        canonicalPath="/privacy"
        breadcrumbs={[
          { name: isNepali ? "गृहपृष्ठ" : "Home", path: "/" },
          {
            name: isNepali ? "गोपनीयता नीति" : "Privacy Policy",
            path: "/privacy",
          },
        ]}
        schemaJson={schemaJson}
      />

      {/* Header Banner */}
      <section className="pt-16 pb-12 bg-neutral-950 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>
              {isNepali
                ? "नेपाल कानुन र अन्तर्राष्ट्रिय मापदण्ड अनुकूलित"
                : "Nepal Statutory Law & International Privacy Standards"}
            </span>
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

          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto">
            {isNepali
              ? `पछिल्लो पटक अध्यावधिक: ${lastUpdated} · नेपालको वैयक्तिक गोपनीयता सम्बन्धी ऐन २०७५, विद्युतीय कारोबार ऐन २०६३ र अन्तर्राष्ट्रिय डेटा सुरक्षा सिद्धान्त अनुसार तयार पारिएको।`
              : `Last Updated: ${lastUpdated} · Formulated in strict accordance with The Privacy Act 2075 (Nepal), Electronic Transactions Act 2063, and international data protection standards.`}
          </p>
        </div>
      </section>

      {/* Core Privacy Highlights */}
      <section className="py-10 bg-neutral-900/30 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Database className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-neutral-100">
                {isNepali
                  ? "१००% स्थानीय SQLite भण्डारण"
                  : "100% Local SQLite Storage"}
              </h3>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                {isNepali
                  ? "बिक्री, ग्राहक खाता, मौज्दात र नाफा तपाईंको आफ्नै कम्प्युटरको डिस्कमा मात्र बस्छ। हाम्रो सर्भरमा कुनै पनि डेटा जाँदैन।"
                  : "All transactions, ledger balances, and product catalogs reside exclusively on your local computer's physical drive."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center">
                <EyeOff className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-neutral-100">
                {isNepali
                  ? "शून्य क्लाउड टेलिमेट्री (Zero Telemetry)"
                  : "Zero Cloud Telemetry"}
              </h3>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                {isNepali
                  ? "हामी तपाईंको बिक्रीको परिमाण, मार्जिन वा ग्राहक विवरण कहिल्यै हेर्दैनौँ, संकलन गर्दैनौँ र तेस्रो पक्षलाई बेच्दैनौँ।"
                  : "We do not track, aggregate, inspect, or monetize your store's turnover, margins, pricing, or customer identities."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <Cloud className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-neutral-100">
                {isNepali
                  ? "प्रयोगकर्ता-नियन्त्रित गुगल सिट ब्याकअप"
                  : "User-Controlled Cloud Backups"}
              </h3>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                {isNepali
                  ? "क्लाउड ब्याकअप लिँदा डेटा तपाईंको व्यक्तिगत Google Drive मा सिधै जान्छ। बिचमा कुनै मध्यस्थकर्ता सर्भर हुँदैन।"
                  : "Cloud backups sync point-to-point directly into your personal Google Sheet via official Google OAuth APIs."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="py-14 bg-neutral-950 text-neutral-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 leading-relaxed text-xs sm:text-sm">
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                १
              </span>
              <span>
                {isNepali
                  ? "१. हाम्रो गोपनीयता प्रतिबद्धता र वास्तुकला (Privacy Commitment & Architecture)"
                  : "1. Our Privacy Commitment & Architectural Philosophy"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "StockForge का लागि प्रयोगकर्ताको डेटा गोपनीयता र व्यापारिक सार्वभौमसत्ता सर्वोच्च प्राथमिकता हो। परम्परागत क्लाउड-आधारित POS सफ्टवेयरहरूले पसलको दैनिक कारोबार, खरिद-बिक्री दर, नाफा मार्जिन, स्टक परिमाण र ग्राहकहरूको व्यक्तिगत विवरण आफ्नो केन्द्रीय विदेशी वा टाढाको सर्भरमा अपलोड गर्दछन्। यसको विपरीत, StockForge पूर्ण रूपमा 'अफलाइन-फर्स्ट' (Offline-First, Local-First) नेटिभ डेस्कटप एप्लिकेसन (Windows, macOS, Linux) का रूपमा इन्जिनियर गरिएको छ।"
                : "At StockForge, user privacy and commercial sovereignty are foundational tenets. While conventional cloud POS software uploads retail turnover, cost structures, margin analytics, inventory levels, and customer credit databases to centralized remote servers, StockForge is engineered strictly as an offline-first, native desktop architecture for Windows, macOS, and Linux."}
            </p>
            <p className="text-neutral-400">
              {isNepali
                ? "यसको अर्थ तपाईंको पसलको कुनै पनि व्यापारिक विवरण, बिल, खाता वा लेखा हाम्रो वा कुनै पनि तेस्रो पक्षको सर्भरमा पठाइँदैन। सम्पूर्ण कम्प्युटेशन र डेटा प्रशोधन तपाईंको भौतिक कम्प्युटरभित्रै सम्पन्न हुन्छ, जसले गर्दा डेटा चुहावट, अनधिकृत निगरानी वा इन्टरनेट बन्द हुँदा व्यापार रोकिने जोखिम शून्य रहन्छ।"
                : "This means zero merchant records, ledger journals, or fiscal receipts are ever routed to our servers or third-party intermediaries. All computational workloads and data storage execute locally on your physical machine, eliminating risks of remote security breaches, competitor espionage, or outages."}
            </p>
          </div>

          {/* Section 2: Nepal Legislation & Statutory Framework */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                २
              </span>
              <span>
                {isNepali
                  ? "२. नेपालको कानुनी दायरा र वैधानिक अनुपालन (Nepal Statutory & Legal Compliance)"
                  : "2. Nepal Statutory & Legal Compliance Framework"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "StockForge नेपाल सरकारका प्रचलित कानुनहरू, निर्देशिकाहरू तथा राजस्व मापदण्डहरूको सम्मान र पूर्ण अनुपालन गर्दै डिजाइन गरिएको छ:"
                : "StockForge is architected in rigorous alignment with the prevailing statutory laws, data protection acts, and commercial directives of the Government of Nepal:"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <FileCheck2 className="w-4 h-4" />
                  <span>
                    {isNepali
                      ? "वैयक्तिक गोपनीयता सम्बन्धी ऐन, २०७५"
                      : "The Privacy Act, 2075 (2018)"}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  {isNepali
                    ? "ऐनको दफा ३, ४ र अनुसूचीहरू अनुसार नागरिकको वैयक्तिक जानकारी (नाम, सम्पर्क, आर्थिक कारोबार, खरिद इतिहास) बिना अधिकार संकलन गर्न वा सार्वजनिक गर्न पाइँदैन। StockForge ले ग्राहक डेटा व्यापारीको आफ्नै स्थानीय डिभाइसमा मात्र राख्ने भएकाले पसलधनी नै आफ्ना ग्राहकको डेटा नियन्त्रक (Data Controller) का रूपमा पूर्ण कानुनी सुरक्षामा रहन्छन्।"
                    : "In accordance with Sections 3, 4 and related schedules governing the sanctity of personal, financial, and transactional privacy, customer records remain strictly under the custody of the shop owner as the sole Data Controller. No unauthorized secondary processing or cross-merchant aggregation occurs."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-xs">
                  <Lock className="w-4 h-4" />
                  <span>
                    {isNepali
                      ? "विद्युतीय कारोबार ऐन, २०६३"
                      : "Electronic Transactions Act, 2063 (2008)"}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  {isNepali
                    ? "ऐनको परिच्छेद २ (दफा ३ देखि ९) बमोजिम सफ्टवेयरद्वारा सिर्जना गरिएका डिजिटल इनभ्वाइस, इलेक्ट्रोनिक भौचर र दैनिक हिसाब-किताबलाई कानुनी मान्यता प्राप्त हुन्छ। परिच्छेद ९ को कम्प्युटर सम्बन्धी कसुर तथा अनाधिकृत पहुँच विरुद्धको सुरक्षा सुनिश्चित गर्न सफ्टवेयरमा स्थानीय इन्क्रिप्सन र भूमिका-आधारित नियन्त्रण समावेश छ।"
                    : "Under Chapter 2 (Sections 3-9), electronic invoices, bill records, and digital audit logs generated by StockForge carry statutory validity. Safeguards against computer offenses and unauthorized system tampering under Chapter 9 are enforced via local role permissions and cryptographic database locking."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
                  <FileText className="w-4 h-4" />
                  <span>
                    {isNepali
                      ? "कर तथा राजस्व अभिलेख (६ वर्षे अनिवार्य भण्डारण)"
                      : "IRD Nepal 6-Year Statutory Record Retention"}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  {isNepali
                    ? "मूल्य अभिवृद्धि कर (भ्याट) ऐन, २०५२ को दफा १६ तथा आयकर ऐन, २०५८ को दफा ८१ बमोजिम प्रत्येक व्यापारीले आफ्नो व्यावसायिक कारोबार, बिक्री-खरिद र लेखाको विवरण कम्तीमा ६ (छ) वर्षसम्म अनिवार्य सुरक्षित राख्नुपर्छ। StockForge को स्थानीय SQLite डेटाबेस र १-क्लिक ब्याकअप (.sql/.db) ले व्यापारीलाई यी अभिलेखहरू कहिल्यै नमेटिने गरी सुरक्षित राख्न मद्दत गर्दछ।"
                    : "Under Section 16 of the Value Added Tax Act 2052 and Section 81 of the Income Tax Act 2058, registered merchants must maintain books of accounts and sales invoices for at least 6 fiscal years. StockForge’s offline database and permanent raw exports facilitate seamless compliance with Inland Revenue Department (IRD) audit inquiries."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                  <UserCheck className="w-4 h-4" />
                  <span>
                    {isNepali
                      ? "उपभोक्ता संरक्षण ऐन, २०७५"
                      : "Consumer Protection Act, 2075 (2018)"}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  {isNepali
                    ? "ऐनको दफा ६ र ७ अनुसार उपभोक्तालाई खरिद गरिएको वस्तुको स्पष्ट विवरण, अधिकतम खुद्रा मूल्य (MRP), छुट, कर र वास्तविक भुक्तानी रकम उल्लेख भएको पारदर्शी रसिद प्रदान गर्नुपर्छ। StockForge ले क्रमबद्ध बिलिङ र फिर्ता/सोधभर्ना (Return/Refund) को पारदर्शी अभिलेख राख्न सहयोग गर्दछ।"
                    : "Sections 6 & 7 mandate transparent itemized receipts stating MRP, discounts, net prices, taxes, batch numbers, and accurate refund/exchange documentation. StockForge ensures zero receipt manipulation through automated sequential indexing."}
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: International Standards & GDPR Principles */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ३
              </span>
              <span>
                {isNepali
                  ? "३. अन्तर्राष्ट्रिय गोपनीयता मापदण्ड र GDPR सिद्धान्तहरू (International Standards & GDPR Alignment)"
                  : "3. International Privacy Principles & GDPR Alignment"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "नेपाल बाहेक अन्तर्राष्ट्रिय बजार तथा विश्वव्यापी डेटा सुरक्षा मापदण्ड (EU General Data Protection Regulation - GDPR तथा OECD Privacy Guidelines) का मुख्य सिद्धान्तहरूलाई StockForge ले आफ्नो संरचनामै समावेश गरेको छ:"
                : "Beyond Nepal's borders, StockForge embraces core principles of the European Union General Data Protection Regulation (GDPR) and global privacy-by-design standards:"}
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-neutral-400">
              <li>
                <strong className="text-neutral-200">
                  {isNepali
                    ? "डेटा न्यूनीकरण (Data Minimization & Privacy by Default):"
                    : "Data Minimization & Privacy by Default:"}
                </strong>{" "}
                {isNepali
                  ? "हामी केवल पसल सञ्चालनका लागि अत्यावश्यक प्राविधिक विवरणहरू मात्र स्थानीय रूपमा प्रयोग गर्दछौँ। सफ्टवेयरमा कुनै पनि अनधिकृत ट्र्याकर, हिडन ब्याकडोर वा एड-नेटवर्क कोड राखिएको छैन।"
                  : "We adhere strictly to data minimization. The software processes solely what is mechanically necessary for retail inventory, billing, and accounting, without behavioral profiling or telemetry SDKs."}
              </li>
              <li>
                <strong className="text-neutral-200">
                  {isNepali
                    ? "डेटा पहुँच र सुधारको अधिकार (Right of Access & Rectification):"
                    : "Right of Access & Rectification:"}
                </strong>{" "}
                {isNepali
                  ? "पसलधनी तथा उनीहरूका ग्राहकले आफ्नो खाता, भुक्तानी इतिहास र बाँकी विवरण जुनसुकै बेला हेर्न, सुधार गर्न वा प्रिन्ट/पीडीएफमा निकाल्न सक्छन्।"
                  : "Merchants and their customers have unrestricted rights to inspect, amend, and audit their transaction ledgers, item details, and balance records at any point."}
              </li>
              <li>
                <strong className="text-neutral-200">
                  {isNepali
                    ? "डेटा पोर्टेबिलिटीको अधिकार (Right to Data Portability):"
                    : "Right to Data Portability (Zero Vendor Lock-In):"}
                </strong>{" "}
                {isNepali
                  ? "तपाईंको डेटा कुनै पनि स्वामित्वयुक्त वा बन्द प्रणालीमा बन्धक बनाइँदैन। १-क्लिकमा सम्पूर्ण डाटाबेसलाई खुला ढाँचा (.sql, .db, .csv, .xlsx) मा निर्यात गर्न सकिन्छ।"
                  : "You are never held captive by proprietary database schemas. Export your complete business catalog and transaction history into open formats (.sql, .db, .csv, Excel) at zero cost."}
              </li>
              <li>
                <strong className="text-neutral-200">
                  {isNepali
                    ? "डेटा मेटाउने अधिकार (Right to Erasure / Purge):"
                    : "Right to Erasure & Data Purge:"}
                </strong>{" "}
                {isNepali
                  ? "यदि कुनै ग्राहक वा निष्क्रिय उत्पादनको विवरण हटाउनु परेमा एपभित्रैबाट स्थायी रूपमा मेटाउन सकिन्छ। तपाईंको कम्प्युटरबाट हटाइएपछि त्यो विवरण संसारको कुनै पनि ठाउँमा अवस्थित रहँदैन।"
                  : "Upon deleting an inactive record or purging old accounts, records are permanently erased from the local SQLite engine without residual remote shadows."}
              </li>
            </ul>
          </div>

          {/* Section 4: Local Storage Breakdown */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ४
              </span>
              <span>
                {isNepali
                  ? "४. स्थानीय रूपमा भण्डारण हुने डेटा विवरण (Data Stored Locally)"
                  : "4. Scope of Data Stored on Your Local Machine"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "तपाईंले StockForge डेस्कटप एपमा प्रविष्टि गर्नुहुने सम्पूर्ण जानकारीहरू तपाईंको कम्प्युटरमै स्थानीय ACID-अनुकूल SQLite डेटाबेस फाइलमा सुरक्षित हुन्छन्। यसमा समावेश छन्:"
                : "All business records generated when running the StockForge desktop application are persisted exclusively inside an embedded ACID-compliant SQLite database on your computer's local drive. This includes:"}
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-neutral-400">
              <li>
                <strong className="text-neutral-200">
                  {isNepali
                    ? "सामान र इन्भेन्टरी (Catalog):"
                    : "Product Catalog & Inventory:"}
                </strong>{" "}
                {isNepali
                  ? "सामानको नाम, SKU, बारकोड, खरिद दर, बिक्री दर, थोक मूल्य, ब्याच नम्बर, म्याद सकिने मिति, मौज्दात र स्टक समायोजन (Stock In/Out, Damage, Expired)।"
                  : "Item names, SKUs, barcode numbers, cost prices, selling rates, wholesale slabs, batch lots, expiration dates, stock reconciliations, and damage/expired write-offs."}
              </li>
              <li>
                <strong className="text-neutral-200">
                  {isNepali
                    ? "बिक्री तथा खरिद इनभ्वाइस (Invoices):"
                    : "Sales & Purchase Invoices:"}
                </strong>{" "}
                {isNepali
                  ? "क्रमबद्ध बिल नम्बरहरू (BILL-YYYYMMDD-XXXX), खरिद बिल, छुट, कर (VAT/Non-VAT), भुक्तानी माध्यम (नगद, QR/अनलाइन, चेक, बैंक) र रसिद इतिहास।"
                  : "Sequential bill references, purchase vouchers, itemized discounts, tax tiers (VAT/Non-VAT), and multi-mode payment splits (Cash, QR/Online, Cheque, Bank Transfer)."}
              </li>
              <li>
                <strong className="text-neutral-200">
                  {isNepali
                    ? "ग्राहक तथा आपूर्तिकर्ता खाता (Khata Ledgers):"
                    : "Customer & Vendor Khata Ledgers:"}
                </strong>{" "}
                {isNepali
                  ? "ग्राहक र आपूर्तिकर्ताको नाम, फोन, साविकको बाँकी, हालको बाँकी, फर्स्यौट रसिद, भुक्तानी इतिहास र स्टेटमेन्ट।"
                  : "Party names, contact details, previous dues, credit sales, due collections, settlements, and double-entry ledger summaries."}
              </li>
              <li>
                <strong className="text-neutral-200">
                  {isNepali
                    ? "दैनिक हिसाब (Day Book), खर्च तथा तलब:"
                    : "Day Book, Shift Floats, Overhead & Payroll:"}
                </strong>{" "}
                {isNepali
                  ? "दैनिक कारोबार पुस्तिका (Day Book), पसलको खर्च (भाडा, ढुवानी, बिजुली), कर्मचारी तलब भौचर र क्यासियर सिफ्ट Z-Report।"
                  : "Consolidated double-entry daily day books, store overheads, staff salary disbursements, cashier drawer shift reconciliation, and opening cash floats."}
              </li>
            </ul>
          </div>

          {/* Section 5: Google Sheets & OAuth Disclosure */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ५
              </span>
              <span>
                {isNepali
                  ? "५. गुगल सिट ब्याकअप र Google API प्रयोगको स्पष्टीकरण (Google OAuth & Cloud Sync Disclosure)"
                  : "5. Google Sheets Cloud Backup & Google API Limited Use Disclosure"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "यदि तपाईंले सफ्टवेयरमा रहेको 'Google Sheets Cloud Backup' सुविधा प्रयोग गर्न छनौट गर्नुभयो भने, प्रमाणीकरण सिधै आधिकारिक Google OAuth मार्फत सुरक्षित रूपमा सम्पन्न हुन्छ:"
                : "If you choose to enable the optional 'Google Sheets Cloud Backup' feature, authentication occurs directly via official Google OAuth 2.0 PKCE protocols:"}
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-neutral-400">
              <li>
                <strong className="text-neutral-200">
                  {isNepali
                    ? "सिधा पोइन्ट-टु-पोइन्ट सिङ्क:"
                    : "Point-to-Point Direct Sync:"}
                </strong>{" "}
                {isNepali
                  ? "तपाईंको पसलको ब्याकअप डेटा तपाईंको आफ्नै व्यक्तिगत वा व्यावसायिक गुगल ड्राइभमा रहेको निर्दिष्ट गुगल सिटमा सिधै सुरक्षित हुन्छ। StockForge ले कुनै पनि मध्यवर्ती सर्भर प्रयोग गर्दैन।"
                  : "Backup data is transmitted point-to-point from your desktop client directly into your designated personal Google Sheet. No StockForge intermediary server acts as a middleman."}
              </li>
              <li>
                <strong className="text-neutral-200">
                  {isNepali
                    ? "गुगल प्रयोगकर्ता डेटा नीति (Google API Limited Use Policy):"
                    : "Google API Services User Data Policy Compliance:"}
                </strong>{" "}
                {isNepali
                  ? "गुगल एपीआईबाट प्राप्त जानकारीको StockForge द्वारा प्रयोग तथा स्थानान्तरण 'Google API Services User Data Policy' (Limited Use requirements सहित) को पूर्ण पालना गर्दछ। तपाईंको गुगल डेटा कुनै पनि एआई मोडेल तालिम वा तेस्रो पक्षीय विज्ञापनमा प्रयोग गरिँदैन।"
                  : "StockForge's use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements. Your Google Drive data is never accessed for AI training, advertisement targeting, or unauthorized external sharing."}
              </li>
              <li>
                <strong className="text-neutral-200">
                  {isNepali
                    ? "अनुमति खारेजीको स्वतन्त्रता:"
                    : "Unrestricted Right to Revoke:"}
                </strong>{" "}
                {isNepali
                  ? "तपाईंले जुनसुकै बेला आफ्नो गुगल खाता सुरक्षा ड्यासबोर्ड (myaccount.google.com/permissions) बाट StockForge को पहुँच खारेज गर्न सक्नुहुन्छ।"
                  : "You maintain absolute autonomy to revoke StockForge's Google Sheets permissions at any second via your official Google Account Security dashboard."}
              </li>
            </ul>
          </div>

          {/* Section 6: Website vs Desktop App Separation */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ६
              </span>
              <span>
                {isNepali
                  ? "६. वेबसाइटमा संकलन हुने सोधपुछ जानकारी (Website Inquiries & Privacy)"
                  : "6. Website Contact Inquiries & Technical Support Data"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "हाम्रो सार्वजनिक वेबसाइट (stockforge.app) र डेस्कटप सफ्टवेयर पूर्ण रूपमा अलग प्रणाली हुन्। जब तपाईं हाम्रो वेबसाइटमा अन-साइट डेमो वा सम्पर्क फाराम भर्नुहुन्छ, हामी निम्न जानकारी मात्र संकलन गर्दछौँ:"
                : "Our marketing website and the offline desktop software operate on strictly segregated boundaries. When you voluntarily submit a request for an on-site hardware demo or technical consultation, we collect only:"}
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-neutral-400">
              <li>
                {isNepali
                  ? "सम्पर्क व्यक्तिको नाम, फोन नम्बर / ह्वाट्सएप र इमेल ठेगाना।"
                  : "Representative name, phone/WhatsApp contact number, and business email."}
              </li>
              <li>
                {isNepali
                  ? "पसलको नाम, सहर/स्थान (जस्तै काठमाडौँ, वीरगञ्ज, पोखरा) र पसलको प्रकृति (किराना, मार्ट, हार्डवेयर, फेन्सी, आदि)।"
                  : "Store commercial name, municipality/city (e.g. Kathmandu, Birgunj, Pokhara), and business vertical."}
              </li>
              <li>
                {isNepali
                  ? "तपाईंको विशिष्ट सोधपुछ वा प्राविधिक आवश्यकता विवरण।"
                  : "Specific hardware preferences (printers, barcode scanners) or deployment timelines."}
              </li>
            </ul>
            <p className="text-neutral-400 pt-1">
              {isNepali
                ? "यी सम्पर्क विवरणहरू केवल डेमो तालिका मिलाउन र प्राविधिक सहयोग प्रदान गर्नका लागि मात्र प्रयोग गरिन्छ। हामी तपाईंको नम्बर वा इमेल कुनै पनि तेस्रो पक्ष, स्पाम एजेन्सी वा टेलिमार्केटर्सलाई बेच्ने वा बाँड्ने गर्दैनौँ।"
                : "This contact information is utilized solely to coordinate on-site demonstrations, verify peripheral compatibility, and deliver customer support. We maintain a zero-tolerance policy against selling or sharing merchant directories."}
            </p>
          </div>

          {/* Section 7: Security Protocols & Merchant Responsibilities */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ७
              </span>
              <span>
                {isNepali
                  ? "७. सुरक्षा दायित्व र ब्याकअपको सावधानी (Data Security & Merchant Best Practices)"
                  : "7. Security Hygiene & Merchant Operational Responsibilities"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "किनकि StockForge को सम्पूर्ण डेटा तपाईंको आफ्नै कम्प्युटरमा रहन्छ, कम्प्युटरको भौतिक सुरक्षा, हार्डवेयर सुरक्षा र नियमित ब्याकअपको प्राथमिक जिम्मेवारी प्रयोगकर्ताको रहनेछ। हामी निम्न उत्तम अभ्यासहरू अनिवार्य पालना गर्न सिफारिस गर्दछौँ:"
                : "Because your database engine is hosted on local merchant hardware, physical terminal security and backup hygiene reside under your direct supervision. We urge all storekeepers to enforce standard operating precautions:"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 space-y-1.5">
                <div className="text-emerald-400 font-bold text-xs flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  <span>
                    {isNepali ? "नियमित बाह्य ब्याकअप" : "External USB Backups"}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400">
                  {isNepali
                    ? "दैनिक वा साप्ताहिक रूपमा १-क्लिकमा .sql वा .db फाइल छुट्टै पेनड्राइभ वा बाह्य हार्डडिस्कमा सुरक्षित गर्नुहोस्।"
                    : "Routinely export 1-click database snapshots (.sql or .db) to an external flash drive or secondary hard drive."}
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 space-y-1.5">
                <div className="text-teal-400 font-bold text-xs flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  <span>
                    {isNepali
                      ? "काउन्टर पीसी सुरक्षा"
                      : "Terminal OS Access Control"}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400">
                  {isNepali
                    ? "काउन्टर कम्प्युटरमा बलियो अपरेटिङ सिस्टम पासवर्ड राख्नुहोस् र अपरिचित व्यक्तिलाई पहुँच नदिनुहोस्।"
                    : "Enforce secure operating system lock passwords on cash counter terminals to protect against walk-in tampering."}
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 space-y-1.5">
                <div className="text-cyan-400 font-bold text-xs flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>
                    {isNepali
                      ? "दैनिक सिफ्ट मिलान (Z-Report)"
                      : "Cashier Shift Reconciliation"}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400">
                  {isNepali
                    ? "काउन्टर बन्द गर्दा दैनिक क्यास ड्रयर सिफ्ट बन्द गरी हिसाब मिलान (Reconciliation) सुरक्षित गर्नुहोस्।"
                    : "Perform daily cashier shift closeouts and drawer audits to preserve unbroken double-entry audit trails."}
                </p>
              </div>
            </div>
          </div>

          {/* Section 8: Children's Privacy */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ८
              </span>
              <span>
                {isNepali
                  ? "८. बालबालिकाको गोपनीयता (Protection of Minors)"
                  : "8. Protection of Minors & Business Commercial Use"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "StockForge केवल व्यावसायिक प्रतिष्ठान, दर्ता भएका पसल र १८ वर्ष वा सोभन्दा माथिका अधिकृत व्यवसायीहरूका लागि लक्षित सफ्टवेयर हो। हामी जानीजानी बालबालिका सम्बन्धी कुनै पनि व्यक्तिगत जानकारी संकलन वा प्रशोधन गर्दैनौँ।"
                : "StockForge is designed exclusively for commercial enterprises, registered retail stores, and authorized operators aged 18 and older. We do not knowingly solicit or collect personal information from minors."}
            </p>
          </div>

          {/* Section 9: Legal Jurisdiction & Contact */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ९
              </span>
              <span>
                {isNepali
                  ? "९. नीति संशोधन, कानुनी क्षेत्राधिकार र सम्पर्क ठेगाना (Jurisdiction & Contact)"
                  : "9. Policy Revisions, Governing Jurisdiction & Privacy Officer"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "नेपाल सरकारको नयाँ कानुन, राजस्व नीति वा प्राविधिक सुधार अनुसार यो नीति समय-समयमा परिमार्जन हुन सक्छ। यस नीतिसँग सम्बन्धित कुनै पनि कानुनी प्रश्न वा विवादको समाधान नेपालको प्रचलित कानुनबमोजिम हुनेछ। कुनै पनि जिज्ञासाका लागि हाम्रो गोपनीयता अधिकारीसँग सम्पर्क गर्नुहोस्:"
                : "We may update this Privacy Policy periodically to reflect emerging statutory mandates in Nepal or international technical improvements. All interpretations remain subject to the laws of Nepal. For questions or concerns regarding our privacy standards, contact our privacy desk directly:"}
            </p>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2 mt-2">
              <div className="text-neutral-200 font-bold">
                StockForge (स्टकफोर्ज)
              </div>
              <p className="text-[11px] text-neutral-400">
                {isNepali
                  ? "डेटा सुरक्षा तथा गोपनीयता डेस्क · नेपाल"
                  : "Data Sovereignty & Legal Compliance Desk · Nepal"}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-neutral-400 pt-1">
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
                <span className="flex items-center gap-1.5 text-neutral-400 font-mono text-[11px]">
                  <Globe2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>Kathmandu / Parsa, Nepal</span>
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
            {isNepali
              ? "डेटा सुरक्षा वा सफ्टवेयरबारे कुनै प्रश्न छ?"
              : "Questions Regarding Data Security or Compliance?"}
          </h3>
          <p className="text-xs text-neutral-400">
            {isNepali
              ? "हाम्रो प्राविधिक तथा कानुनी टोलीसँग प्रत्यक्ष कुरा गर्नुहोस् र आफ्नो पसलका लागि १००% सुरक्षित समाधान पाउनुहोस्।"
              : "Our engineering and customer support team is available 7 days a week to address any technical or compliance question."}
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
              <span>
                {isNepali ? "प्रयोगका सर्तहरू (Terms)" : "Terms of Use"}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
