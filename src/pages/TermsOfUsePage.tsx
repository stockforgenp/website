import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/common/SEO.tsx";
import {
  Scale,
  ShieldCheck,
  Monitor,
  Mail,
  Phone,
  HardDrive,
  FileText,
  AlertTriangle,
  FileCheck2,
  Lock,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.tsx";
import { CONTACT_INFO } from "../constants/contactInfo.ts";

export const TermsOfUsePage: React.FC = () => {
  const { isNepali } = useLanguage();

  const lastUpdated = isNepali
    ? "२०८३ कार्तिक ०५ (October 2026)"
    : "October 23, 2026";

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: isNepali
      ? "प्रयोगका सर्तहरू (Terms of Use) – StockForge"
      : "Terms of Use – StockForge Retail POS",
    description:
      "StockForge POS terms of use: governed by Nepal Copyright Act 2059, Consumer Protection Act 2075, and Electronic Transactions Act 2063. Complete desktop software licensing, local data sovereignty, billing compliance, and fair support guidelines.",
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
            : "Terms of Use – Nepal Commercial Law & Software Licensing"
        }
        description={
          isNepali
            ? "StockForge को सफ्टवेयर प्रयोगका सर्तहरू: प्रतिलिपि अधिकार ऐन २०५९, उपभोक्ता संरक्षण ऐन २०७५ र विद्युतीय कारोबार ऐन २०६३ अनुसार पारदर्शी डेस्कटप लाइसेन्स, १००% डेटा स्वामित्व र कानुनी दायित्व।"
            : "Review StockForge POS terms of use: fully compliant with Nepal Copyright Act 2059, Consumer Protection Act 2075, Electronic Transactions Act 2063, and international fair software licensing. 100% data ownership and clear merchant rights."
        }
        keywords={[
          "StockForge terms of use",
          "Nepal Copyright Act 2059",
          "प्रतिलिपि अधिकार ऐन २०५९",
          "Consumer Protection Act 2075",
          "उपभोक्ता संरक्षण ऐन २०७५",
          "Electronic Transactions Act 2063",
          "विद्युतीय कारोबार ऐन २०६३",
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
          {
            name: isNepali ? "प्रयोगका सर्तहरू" : "Terms of Use",
            path: "/terms",
          },
        ]}
        schemaJson={schemaJson}
      />

      {/* Header Banner */}
      <section className="pt-16 pb-12 bg-neutral-950 border-b border-neutral-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-400 text-xs font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>
              {isNepali
                ? "नेपालको कानुन र अन्तर्राष्ट्रिय सम्झौता अनुकूलित"
                : "Governed by Nepal Law & International Licensing Norms"}
            </span>
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
              ? `पछिल्लो पटक अध्यावधिक: ${lastUpdated} · खुद्रा व्यवसायी, काउन्टर क्यासियर र व्यवस्थापकहरूका लागि स्पष्ट, निष्पक्ष र वैधानिक सम्झौता।`
              : `Last Updated: ${lastUpdated} · Straightforward, equitable licensing agreement for retail merchants, cashiers, and enterprise operators.`}
          </p>
        </div>
      </section>

      {/* Core Terms Highlights */}
      <section className="py-10 bg-neutral-900/30 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Monitor className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-neutral-100">
                {isNepali ? "नेटिभ डेस्कटप लाइसेन्स" : "Desktop Terminal License"}
              </h3>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                {isNepali
                  ? "तपाईंको पसलको पीसी (Windows/Mac/Linux) मा १००% अफलाइन सञ्चालन अधिकार। इन्टरनेट बन्द हुँदा पनि काउन्टर रोकिँदैन।"
                  : "Authorized for retail counter operations with zero recurring internet hostage fees or forced subscription shutdowns."}
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
                  ? "तपाईंको सबै सामान, खाता, बिक्री, खर्च र नाफाको डेटा तपाईंको मात्र निजी स्वामित्वमा रहन्छ।"
                  : "You own all inventory catalogs, billing ledgers, and customer khata balances with zero proprietary lock-in."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-neutral-100">
                {isNepali ? "द्रुत स्थानीय सहयोग (SLA)" : "Rapid Local Support (SLA)"}
              </h3>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                {isNepali
                  ? "हार्डवेयर सेटअप, थर्मल प्रिन्टर, स्क्यानर र तालिमका लागि स्थानीय फोन र ह्वाट्सएप सहयोग उपलब्ध।"
                  : "Direct telephone and WhatsApp support 7 days a week with a rapid emergency response commitment."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Terms Content */}
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
                  ? "१. सर्तहरूको स्वीकृति (Acceptance of Terms)"
                  : "1. Acceptance of Terms & Legal Capacity"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "StockForge डेस्कटप एप्लिकेसन डाउनलोड, इन्स्टल, सक्रिय वा प्रयोग गरेर, तपाईं यी प्रयोगका सर्तहरूसँग पूर्ण रूपमा सहमत हुनुभएको मानिनेछ। यदि तपाईं यी सर्तहरूसँग सहमत हुनुहुन्न भने, कृपया सफ्टवेयर इन्स्टल वा प्रयोग नगर्नुहोस्। यी सर्तहरू सम्पूर्ण खुद्रा पसल, मार्ट, किराना र व्यावसायिक प्रतिष्ठानका मालिकहरू तथा तिनीहरूका अधिकृत क्यासियरहरूमा समान रूपमा लागू हुनेछ। यो सम्झौता विद्युतीय कारोबार ऐन, २०६३ बमोजिम कानुनी रूपमा बाध्यकारी छ।"
                : "By downloading, installing, activating, or operating the StockForge desktop application, or accessing our related web services, you enter into a legally binding agreement and agree to be governed by these Terms of Use. If you do not agree to these terms, do not install, copy, or use the software. This agreement applies universally to business owners, store managers, and authorized cashiers, and is legally enforceable under the Electronic Transactions Act, 2063 (Nepal)."}
            </p>
          </div>

          {/* Section 2: Nepal Legislation & Statutory Grounding */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                २
              </span>
              <span>
                {isNepali
                  ? "२. नेपालको वैधानिक कानुनहरू र दायित्व (Statutory Legal Framework of Nepal)"
                  : "2. Statutory Legal Framework of Nepal & Commercial Law"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "StockForge सफ्टवेयरको प्रयोग तथा यसबाट जारी हुने बिलिङ र हिसाब-किताब नेपालका देहायका प्रचलित ऐन-नियमहरूद्वारा निर्देशित हुन्छन्:"
                : "The operation of StockForge, alongside all commercial transactions, invoices, and accounting records generated therein, is regulated under the statutory laws of Nepal:"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <FileCheck2 className="w-4 h-4" />
                  <span>
                    {isNepali
                      ? "प्रतिलिपि अधिकार ऐन, २०५९"
                      : "The Copyright Act, 2059 (2002)"}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  {isNepali
                    ? "ऐनको दफा ३ र ४ अनुसार StockForge का सम्पूर्ण कम्प्युटर प्रोग्राम, बाइनरी कोड, युजर इन्टरफेस, डाटाबेस संरचना, लोगो र कागजातहरू बौद्धिक सम्पत्ति (Intellectual Property) हुन्। प्रयोगकर्तालाई केवल अधिकृत काउन्टरमा प्रयोगको सीमित लाइसेन्स प्रदान गरिन्छ, स्वामित्व हस्तान्तरण हुँदैन।"
                    : "Under Sections 3 and 4, all software source code, compiled binaries, algorithms, UI designs, and documentation constitute protected intellectual property. Users are granted a limited operational license; title and copyright remain exclusively with StockForge."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-xs">
                  <Scale className="w-4 h-4" />
                  <span>
                    {isNepali
                      ? "उपभोक्ता संरक्षण ऐन, २०७५"
                      : "Consumer Protection Act, 2075 (2018)"}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  {isNepali
                    ? "ऐनको दफा ६, ७ र ८ बमोजिम बिक्रेताले उपभोक्तालाई स्पष्ट र वास्तविक विवरणसहितको बिल दिनुपर्छ। StockForge ले क्रमबद्ध इनभ्वाइस नम्बर, सामानको ब्याच, म्याद सकिने मिति र फिर्ता/सोधभर्ना (Return/Refund) को पारदर्शी गणना सुनिश्चित गरी उपभोक्ता संरक्षण कानुनको पालनामा सहयोग पुर्‍याउँछ।"
                    : "Sections 6, 7 & 8 mandate accurate, unadulterated billing indicating exact unit prices, MRP, discounts, batch expiration, and fair return/refund processing. StockForge provides algorithmic safeguards ensuring audit trails cannot be arbitrarily rewritten."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
                  <Lock className="w-4 h-4" />
                  <span>
                    {isNepali
                      ? "विद्युतीय कारोबार ऐन, २०६३"
                      : "Electronic Transactions Act, 2063 (2008)"}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  {isNepali
                    ? "ऐनको परिच्छेद २ अनुसार सफ्टवेयरबाट जारी गरिएका विद्युतीय रसिद, डिजिटल भौचर र खाता अभिलेखलाई प्रमाणका रूपमा मान्यता दिइन्छ। परिच्छेद ९ को दफा ४४ देखि ५१ बमोजिम कम्प्युटर प्रणालीमा अनाधिकृत प्रवेश, तथ्याङ्क चोरी वा स्रोत कोड परिवर्तन गर्ने कार्य कानुनतः दण्डनीय हुनेछ।"
                    : "Chapter 2 grants full evidentiary status to electronic transaction records and invoices. Chapter 9 strictly prohibits unauthorized tampering, system hacking, or reverse-compilation, prescribing penal consequences under Nepali jurisdiction."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                  <FileText className="w-4 h-4" />
                  <span>
                    {isNepali
                      ? "मूल्य अभिवृद्धि कर तथा आयकर ऐन"
                      : "VAT Act 2052 & Income Tax Act 2058"}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  {isNepali
                    ? "आन्तरिक राजस्व विभाग (IRD) को नियमअनुसार करदाताले आफ्नो कर दायरा (VAT / PAN) अनुसार सही दरमा बिल जारी गर्नुपर्छ र कम्तीमा ६ वर्षसम्म कारोबार सुरक्षित राख्नुपर्छ। सफ्टवेयरले प्राविधिक गणना प्रदान गरे पनि कर तिर्ने र सही घोषणा गर्ने अन्तिम दायित्व व्यापारीकै हुनेछ।"
                    : "While StockForge automates mathematical VAT (13%), PAN, and exempt calculations, the merchant remains solely responsible for registering with IRD, adhering to fiscal billing regulations, and maintaining 6-year local audit logs."}
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Software License Scope */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ३
              </span>
              <span>
                {isNepali
                  ? "३. सफ्टवेयर लाइसेन्स र प्रयोगको दायरा (License Grant & EULA Scope)"
                  : "3. Software License Grant & End-User License Scope (EULA)"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "StockForge ले तपाईंलाई आफ्नो व्यावसायिक काउन्टरमा खुद्रा बिक्री, मौज्दात नियन्त्रण (Inventory), क्रमबद्ध इनभ्वाइस बिलिङ, र ग्राहक/आपूर्तिकर्ता खाता व्यवस्थापन गर्नका लागि गैर-हस्तान्तरणीय (Non-transferable) र गैर-विशेष (Non-exclusive) लाइसेन्स प्रदान गर्दछ:"
                : "Subject to the terms hereof, StockForge grants you a non-exclusive, non-transferable, revocable license to install and execute the desktop application on designated counter hardware for retail point-of-sale, multi-unit inventory tracking, sequential invoicing, customer credit khata, and staff management:"}
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-neutral-400">
              <li>
                <strong className="text-neutral-200">
                  {isNepali ? "अधिकृत काउन्टर टर्मिनल:" : "Authorized Counter Terminals:"}
                </strong>{" "}
                {isNepali
                  ? "लाइसेन्स सम्झौताअनुसार खरिद गरिएका तोकिएका काउन्टर पीसी/टर्मिनलमा मात्र सफ्टवेयर सञ्चालन गर्न पाइनेछ।"
                  : "Software execution is authorized per licensed store terminal in accordance with your agreed deployment tier."}
              </li>
              <li>
                <strong className="text-neutral-200">
                  {isNepali ? "स्रोत कोडको सुरक्षा र निषेध:" : "Prohibition of Decompilation:"}
                </strong>{" "}
                {isNepali
                  ? "तपाईंले सफ्टवेयरको बाइनरी कोडलाई रिभर्स-इन्जिनियर, डिकम्पाइल, मोडिफाई वा अनधिकृत रूपमा तेस्रो पक्षलाई रिप्याकेज/पुनर्वितरण गर्न पाउनुहुने छैन।"
                  : "You shall not reverse-engineer, decompile, disassemble, rent, lease, sub-license, or redistribute the binary application without express prior written consent."}
              </li>
              <li>
                <strong className="text-neutral-200">
                  {isNepali ? "व्यापारिक प्रयोगको सीमा:" : "Permitted Commercial Usage:"}
                </strong>{" "}
                {isNepali
                  ? "सफ्टवेयर केवल वैध व्यवसाय र प्रचलित कानुनबमोजिम दर्ता भएका पसलको आन्तरिक लेखा तथा बिलिङका लागि मात्र प्रयोग गर्न पाइनेछ।"
                  : "The software may solely be deployed for lawful business retail management, inventory control, and legitimate customer transactions."}
              </li>
            </ul>
          </div>

          {/* Section 4: Data Ownership & Zero Lock-in */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ४
              </span>
              <span>
                {isNepali
                  ? "४. पसलको सम्पूर्ण डेटाको स्वामित्व र स्वतन्त्रता (Data Ownership & Zero Lock-in)"
                  : "4. Complete Store Data Ownership & Zero Vendor Lock-in"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "तपाईंको पसलको सम्पूर्ण डेटाको १००% कानुनी र वास्तविक स्वामित्व तपाईंमै निहित रहन्छ। StockForge ले तपाईंको व्यापारिक डेटा, सामानको सूची, खरिद दर, बिक्री परिमाण वा ग्राहकको खातामा कुनै पनि स्वामित्व दाबी गर्दैन र गर्ने छैन।"
                : "You retain sole and absolute legal and beneficial title to all store catalogs, inventory quantities, supplier procurement rates, customer credit balances, employee records, and double-entry day books generated within StockForge."}
            </p>
            <p className="text-neutral-400">
              {isNepali
                ? "किनकि सम्पूर्ण डेटा तपाईंको आफ्नै कम्प्युटरमा स्थानीय SQLite फाइलमा बस्छ, तपाईंले कुनै पनि बेला १-क्लिकमा .sql स्क्रिप्ट, .db बाइनरी ब्याकअप वा .csv ढाँचामा आफ्नो डेटा पूर्ण रूपमा निर्यात गर्न सक्नुहुन्छ। हामी तपाईंको डेटालाई कुनै पनि क्लाउड बन्देज (Vendor Lock-in) मा राख्दैनौँ।"
                : "Because your database engine runs locally on your machine, you enjoy unconditional freedom to export raw .sql scripts, .db SQLite binaries, and tabular CSV files at any time without fees, technical barriers, or proprietary restrictions."}
            </p>
          </div>

          {/* Section 5: Acceptable Use & Fraud Prohibition */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ५
              </span>
              <span>
                {isNepali
                  ? "५. स्वीकार्य प्रयोग र जालसाजी निषेध (Acceptable Use & Fraud Prohibition)"
                  : "5. Acceptable Use Policy & Fraud Prevention"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "StockForge सफ्टवेयर प्रयोग गर्दा देहायका गैरकानुनी वा अवाञ्छित गतिविधिहरू गर्न सख्त मनाही गरिएको छ:"
                : "Users agree to employ StockForge exclusively in compliance with ethical business standards and applicable criminal and civil codes. The following actions are strictly prohibited:"}
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-neutral-400">
              <li>
                {isNepali
                  ? "नक्कली वा दोहोरो बिलिङ गरी राजस्व छली (Tax Evasion) वा ठगी गर्ने कार्य।"
                  : "Generating fraudulent, fictitious, or counterfeit invoices for tax evasion or deceptive trade practices."}
              </li>
              <li>
                {isNepali
                  ? "नेपाल कानुनद्वारा प्रतिबन्धित लागूऔषध, हातहतियार वा अवैध वस्तुहरूको अनधिकृत कारोबार दर्ता गर्नु।"
                  : "Logging, tracking, or distributing contraband, illegal narcotics, or weapons prohibited under national law."}
              </li>
              <li>
                {isNepali
                  ? "सफ्टवेयरको सुरक्षा प्रणाली, लाइसेन्स प्रमाणीकरण वा डेटाबेस इन्क्रिप्सनलाई तोड्ने प्रयास (Cracking/Patching) गर्नु।"
                  : "Attempting to circumvent license keys, cryptographic checksums, or terminal authorization algorithms."}
              </li>
              <li>
                {isNepali
                  ? "अरूको पहिचान, ट्रेडमार्क वा पसलको नाम अनधिकृत प्रयोग गरी ग्राहकलाई झुक्याउनु।"
                  : "Impersonating other commercial entities, brands, or trademarks on printed customer receipts."}
              </li>
            </ul>
          </div>

          {/* Section 6: Hardware, Power & Force Majeure */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ६
              </span>
              <span>
                {isNepali
                  ? "६. हार्डवेयर, विद्युतीय सुरक्षा र काबु बाहिरको परिस्थिति (Hardware, Power & Force Majeure)"
                  : "6. Hardware Maintenance, Electrical Surge & Force Majeure"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "सफ्टवेयर सञ्चालन गर्न आवश्यक कम्प्युटर, ५८mm वा ८०mm थर्मल प्रिन्टर, बारकोड स्क्यानर, क्यास ड्रयर र निर्बाध विद्युतीय आपूर्ति (UPS / इनभर्टर) को भौतिक व्यवस्थापन प्रयोगकर्ताको जिम्मेवारी हो:"
                : "Merchants are responsible for providing adequate operational environments for cash counter hardware (PCs, thermal receipt printers, USB barcode scanners, electronic cash drawers, and reliable UPS power backup):"}
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-neutral-400">
              <li>
                <strong className="text-neutral-200">
                  {isNepali ? "विद्युतीय भोल्टेज र ब्याकअप सावधानी:" : "Electrical Surge & Power Spikes:"}
                </strong>{" "}
                {isNepali
                  ? "नेपालमा हुन सक्ने बिजुलीको उतारचढाव (Voltage Fluctuation) वा आकस्मिक लोडसेडिङबाट कम्प्युटरको हार्डडिस्क बिग्रन सक्ने भएकाले उपयुक्त UPS प्रयोग गर्न र दैनिक रूपमा पेनड्राइभमा ब्याकअप राख्न अनिवार्य छ।"
                  : "Due to unpredictable power grid fluctuations and outages, merchants must operate POS terminals on regulated UPS battery backups and maintain redundant offline USB flash backups."}
              </li>
              <li>
                <strong className="text-neutral-200">
                  {isNepali ? "काबु बाहिरको परिस्थिति (Force Majeure):" : "Force Majeure Clause:"}
                </strong>{" "}
                {isNepali
                  ? "प्राकृतिक विपद् (भूकम्प, बाढी, चट्याङ), देशव्यापी इन्टरनेट बन्द, लामो समयको विद्युतीय अवरोध, वा हार्डवेयरको भौतिक क्षतिबाट हुने प्रत्यक्ष वा अप्रत्यक्ष व्यापारिक नोक्सानीका लागि कम्पनी जिम्मेवार हुने छैन।"
                  : "StockForge shall not be held liable for failure to perform or service disruptions resulting from acts of God (earthquakes, floods, lightning strikes), widespread telecommunication breakdowns, civil disturbances, or physical hardware destruction."}
              </li>
            </ul>
          </div>

          {/* Section 7: Technical Support & SLA */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ७
              </span>
              <span>
                {isNepali
                  ? "७. प्राविधिक सहयोग र सेवा प्रतिबद्धता (Technical Support & SLA Commitment)"
                  : "7. Technical Support & SLA Commitment"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "हाम्रो ग्राहक तथा इन्जिनियरिङ सहयोग टोली हप्ताको ७ दिन बिहान ७:०० देखि साँझ १०:०० सम्म फोन तथा ह्वाट्सएपमार्फत उपलब्ध रहन्छ। काउन्टरको आपतकालीन समस्या (जस्तै बिल प्रिन्ट नहुनु वा सफ्टवेयर नखुल्नु) का लागि हामी २ घण्टाभित्र द्रुत समाधान (SLA < 2 Hours) प्रदान गर्न प्रतिबद्ध छौँ।"
                : "Our technical support and engineering team operates 7 days a week (7:00 AM – 10:00 PM NPT) via direct phone, WhatsApp, and remote screen assistance. For counter-critical emergencies (such as bill printing halts or terminal crashes), we adhere to a rapid response target (SLA < 2 hours)."}
            </p>
          </div>

          {/* Section 8: Disclaimer of Warranties & Limitation of Liability */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ८
              </span>
              <span>
                {isNepali
                  ? "८. वारेन्टी अस्वीकरण र दायित्वको सीमा (Warranty Disclaimer & Limitation of Liability)"
                  : "8. Warranty Disclaimer & Limitation of Liability"}
              </span>
            </h2>
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                <AlertTriangle className="w-4 h-4" />
                <span>
                  {isNepali
                    ? 'सफ्टवेयर "जस्तो छ त्यस्तै" (As-Is) आधारमा प्रदान'
                    : 'Software Provided "As-Is" & "As-Available"'}
                </span>
              </div>
              <p className="text-[11px] text-neutral-300 leading-relaxed">
                {isNepali
                  ? 'StockForge सफ्टवेयरलाई उच्च इन्जिनियरिङ गुणस्तर, शून्य ल्याग र व्यापक परीक्षणका साथ तयार गरिएको छ। यद्यपि, कानुनले अनुमति दिएको अधिकतम हदसम्म यो सफ्टवेयर "जस्तो छ त्यस्तै" (As-Is) आधारमा प्रदान गरिन्छ। प्रयोगकर्ताको कम्प्युटर भाइरस, हार्डड्राइभ क्र्यास, विद्युतीय झट्का वा ब्याकअप नलिएका कारण हुन सक्ने नाफा नोक्सान, डाटा हराउने वा व्यापार अवरोधका लागि कम्पनीको कूल कानुनी दायित्व प्रयोगकर्ताले सफ्टवेयर लाइसेन्सका लागि तिरेको वास्तविक रकमभन्दा बढी हुने छैन।'
                  : 'To the maximum extent permitted by applicable law, StockForge is provided "as-is" and "as-available" without warranties of any kind, whether express or implied. Under no circumstances shall StockForge, its developers, or affiliates be liable for indirect, punitive, incidental, or consequential damages (including lost profits, lost sales, data corruption, or business interruption) resulting from local hardware failures, power cuts, or lack of external backup hygiene, exceeding the actual license fees paid in the preceding 12 months.'}
              </p>
            </div>
          </div>

          {/* Section 9: Governing Law, Dispute Resolution & Severability */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ९
              </span>
              <span>
                {isNepali
                  ? "९. लागू हुने कानुन, विवाद समाधान र विच्छेदनीयता (Governing Law & Jurisdiction)"
                  : "9. Governing Law, Dispute Resolution & Severability"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "यी सर्तहरू नेपालको प्रचलित कानुनबमोजिम व्याख्या र लागू गरिनेछन्। यस सम्झौतासँग सम्बन्धित कुनै पनि विवाद उत्पन्न भएमा पहिले ३० दिनभित्र आपसी छलफल र मेलमिलापबाट समाधान खोजिनेछ। सहमति हुन नसकेमा नेपालको काठमाडौँ वा पर्सा जिल्ला अदालतको न्यायिक अधिकार क्षेत्र लागू हुनेछ। यदि यस सम्झौताको कुनै बुँदा प्रचलित कानुनसँग बाझिएमा, त्यो बुँदा मात्र निष्प्रभावी हुनेछ र बाँकी सर्तहरू यथावत लागू रहनेछन्।"
                : "These Terms of Use shall be governed by and construed in accordance with the laws of Nepal. In the event of any controversy or dispute, the parties shall first endeavor to settle the dispute amicably through good-faith consultations within 30 days. Failing mutual settlement, disputes shall be subject to the exclusive jurisdiction of the competent courts of Kathmandu or Parsa District, Nepal. If any provision of these terms is adjudicated invalid or unenforceable, such invalidity shall not affect the enforceability of the remaining provisions."}
            </p>
          </div>

          {/* Section 10: Legal Contact Information */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                १०
              </span>
              <span>
                {isNepali ? "१०. कानुनी तथा सहायता सम्पर्क" : "10. Legal & Support Contacts"}
              </span>
            </h2>
            <p>
              {isNepali
                ? "प्रयोगका सर्तहरू, लाइसेन्सिङ सम्झौता वा व्यापारिक साझेदारीबारे कुनै पनि जिज्ञासा भएमा हाम्रो अधिकृत टोलीसँग सिधै सम्पर्क गर्न सक्नुहुन्छ:"
                : "For questions regarding our licensing terms, enterprise contracts, or merchant rights, reach out to our legal and support desk directly:"}
            </p>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2 mt-2">
              <div className="text-neutral-200 font-bold">StockForge (स्टकफोर्ज)</div>
              <p className="text-[11px] text-neutral-400">
                {isNepali
                  ? "लाइसेन्सिङ तथा कानुनी डेस्क · नेपाल"
                  : "Software Licensing & Legal Compliance Desk · Nepal"}
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
              ? "आफ्नो पसलमा StockForge सुरु गर्नुहोस्"
              : "Ready to Deploy StockForge in Your Store?"}
          </h3>
          <p className="text-xs text-neutral-400">
            {isNepali
              ? "कुनै पनि मासिक इन्टरनेट बन्धक बिना १००% सुरक्षित र भरपर्दो अफलाइन काउन्टर सुरु गर्नुहोस्।"
              : "Zero cloud lag, 100% offline security, and complete data ownership on your PC."}
          </p>
          <div className="pt-2 flex items-center justify-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>
                {isNepali ? "निःशुल्क डेमो लिनुहोस्" : "Request Free Demo"}
              </span>
            </Link>
            <Link
              to="/privacy"
              className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 font-semibold text-xs transition-colors cursor-pointer"
            >
              <span>
                {isNepali ? "गोपनीयता नीति (Privacy)" : "Privacy Policy"}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
