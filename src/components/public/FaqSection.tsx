import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Search } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext.tsx";

export const FaqSection: React.FC = () => {
  const { isNepali } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: isNepali
        ? "के StockForge चलाउन इन्टरनेट आवश्यक पर्छ? (Does it work offline?)"
        : "Does StockForge work completely offline without an internet connection?",
      category: "offline",
      answer: isNepali
        ? "पर्दैन! StockForge १००% अफलाइन-फर्स्ट प्रणाली हो। यो तपाईंको कम्प्युटर वा ल्यापटपको वेब ब्राउजरभित्र SQLite WebAssembly डेटाबेसमा स्थानीय रूपमा चल्छ। इन्टरनेट नभए पनि वा नेटवर्क पूर्ण रूपमा बन्द हुँदा पनि तपाईंले निर्बाध रूपमा सामान थप्न, बिक्री गर्न, र बिल प्रिन्ट गर्न सक्नुहुन्छ।"
        : "No internet connection is required. StockForge operates entirely client-side using SQLite WebAssembly compiled directly into the application. Your counter operates at 0ms latency even during severe internet blackouts, network congestion, or rural connectivity drops.",
    },
    {
      question: isNepali
        ? "क्रमबद्ध बिल नम्बर र कर (Tax & Invoicing) कसरी हिसाब गरिन्छ?"
        : "How is automated sequential bill numbering and tax calculated?",
      answer: isNepali
        ? "प्रत्येक बिक्री सम्पन्न हुँदा प्रणालीले स्वतः एक अद्वितीय क्रमबद्ध बिल नम्बर (जस्तै BILL-20261006-0001) तयार गर्दछ। बिक्री भएका सामानहरूको कुल रकमबाट छुट घटाई करयोग्य रकम (Taxable Amount) निकालिन्छ र लागू हुने कर हिसाब गरेर कुल जम्मा रकम (Grand Total) सुरक्षित रूपमा स्टोर गरिन्छ।"
        : "During each checkout, StockForge automatically produces a sequential bill reference (format: BILL-YYYYMMDD-XXXX). The engine computes Taxable Subtotal = (Gross Items - Discounts), calculates transparent tax breakdowns, and persists the Grand Total atomically inside the ACID transaction.",
    },
    {
      question: isNepali
        ? "सामानहरूमा कुन-कुन एकाइ (Units: piece, kg, litre, etc.) प्रयोग गर्न सकिन्छ?"
        : "Which measurement units are supported for products (piece, kg, litre, etc.)?",
      answer: isNepali
        ? "तपाईंले सामानहरूलाई टुक्रा (piece/pcs), किलोग्राम (kg), लिटर (litre/ltr), ग्राम (g), मिलिलिटर (ml), दर्जन (dozen), प्याकेट (packet), वा बाकस (box) मा दर्ता गर्न सक्नुहुन्छ। बिक्री गर्दा सामानको एकाइ अनुसार वास्तविक स्टक घट्छ र न्यूनतम स्टक सीमामा पुग्दा चेतावनी आउँछ।"
        : "StockForge natively supports piece (pcs), kilogram (kg), litre (ltr), gram (g), millilitre (ml), dozen, packet, box, and meter. Products deduct inventory strictly according to their designated unit, and triggers low-stock alerts when stock drops below configured thresholds.",
    },
    {
      question: isNepali
        ? "हाम्रो पसलको डेटा कहाँ सुरक्षित रहन्छ र यसको ब्याकअप कसरी लिने?"
        : "Where is my shop data stored, and how do I back it up or export it?",
      answer: isNepali
        ? "तपाईंको पसलको सम्पूर्ण डेटा तपाईंको आफ्नै कम्प्युटरको सुरक्षित स्थानीय भण्डारणमा रहन्छ। सेटिङ्स (Settings) मेनुबाट १-क्लिकमा पुरै डेटाबेसलाई .db बाइनरी फाइल वा JSON ढाँचामा आफ्नो पेनड्राइभ वा बाह्य हार्डडिस्कमा सुरक्षित ब्याकअप लिन सक्नुहुन्छ।"
        : "Your shop database is stored locally on your device in secure persistent storage with zero external cloud transmission. Under Settings, you can trigger a one-click binary export of the entire SQLite database (.db) or JSON audit report to save to a flash drive or migrate to another PC.",
    },
    {
      question: isNepali
        ? "के गुगल सिटमार्फत डेटा ब्याकअप र रिस्टोर गर्न सकिन्छ? (Google Sheets Backup)"
        : "Can I backup and restore my store data through Google Sheets?",
      answer: isNepali
        ? 'सकिन्छ! तपाईंले आफ्नो पसलको सम्पूर्ण डेटा गुगल सिटमार्फत ब्याकअप र रिस्टोर गर्न सक्नुहुन्छ। जब तपाईं "ब्याकअप" मा क्लिक गर्नुहुन्छ, ग्राहक गुगलसँग प्रमाणीकरण भई गुगल सिटको अनुमति मागिनेछ, र त्यसपछि सम्पूर्ण सामान, बिक्री, स्टक र खर्च गुगल सिटमा ब्याकअप हुन्छ। रिस्टोर गर्दा पनि सोही प्रक्रियामार्फत सिटबाट सम्पूर्ण डेटा पुनः स्थापना गर्न सकिन्छ (यस कार्यका लागि इन्टरनेट आवश्यक पर्दछ)।'
        : "Yes! You can backup and restore your store data through Google Sheets. When you click Backup, the client is authenticated with Google and prompted for Google Sheets permission, and then all products, sales history, stock, and ledger data are backed up to your Google Sheet. The same process applies for restoring records back into your store (internet connection required).",
    },
    {
      question: isNepali
        ? "के SQL फाइल (.sql) मार्फत पनि ब्याकअप र रिस्टोर गर्न सकिन्छ? (SQL File Backup)"
        : "Can I backup and restore data using SQL (.sql) files?",
      answer: isNepali
        ? "सकिन्छ! तपाईंले मानक SQL (.sql) फाइलमार्फत पनि आफ्नो सम्पूर्ण डेटाबेस ब्याकअप र रिस्टोर गर्न सक्नुहुन्छ। यसले सबै तालिकाहरू, सामान, बिक्री, स्टक र खर्चहरूको सफा SQL स्क्रिप्ट तयार गर्छ, जसलाई कुनै पनि बेला १-क्लिकमा अफलाइन पुनः स्थापना गर्न सकिन्छ।"
        : "Yes! You can backup and restore your complete store database using standard SQL (.sql) files. It exports all table schemas, products, sales history, stock movements, and ledger entries as portable SQL scripts that can be restored anytime with 1-click offline execution.",
    },
    {
      question: isNepali
        ? "के थर्मल बिल प्रिन्टर (Thermal POS 80mm/58mm) मा रसिद छाप्न सकिन्छ?"
        : "Can I print receipts on standard 80mm / 58mm thermal POS printers?",
      answer: isNepali
        ? "सकिन्छ! StockForge ले सबै मानक ८०mm र ५८mm थर्मल रसिद प्रिन्टरहरूलाई समर्थन गर्दछ। प्रिन्ट रसिदमा पसलको नाम, ठेगाना, फोन, बिल नम्बर, ग्राहकको नाम, एकाइसहितका सामानहरू, कर विभाजन, र कृतज्ञता सन्देश स्पष्ट रूपमा आउँछ।"
        : "Yes. StockForge features custom CSS print stylesheets calibrated for 80mm and 58mm thermal receipt printers. Receipts format automatically with store branding, contact numbers, bill sequential IDs, itemized unit lines, tax breakdown, and custom receipt footers.",
    },
    {
      question: isNepali
        ? "कर्मचारीको मासिक तलब (Payroll) र पसलको खर्च कसरी व्यवस्थापन गर्ने?"
        : "How does staff payroll and operational expense tracking work?",
      answer: isNepali
        ? "कर्मचारी (Staff) मेनुमा कर्मचारीहरूको विवरण र आधारभूत तलब प्रविष्ट गर्न सक्नुहुन्छ। पेरोल (Payroll) खण्डबाट मासिक तलब भुक्तानी भौचर सिर्जना गर्न सकिन्छ। साथै, पसलको दैनिक खर्च (भाडा, बिजुली, ढुवानी) छुट्टै रेकर्ड गरी वास्तविक खुद नाफा (Net Profit) हेर्न सकिन्छ।"
        : "StockForge includes a dedicated Staff Directory and Monthly Payroll ledger. You can register employees, designate roles, track monthly salaries, and issue payment vouchers with voucher codes. Combined with the Expense Ledger, the platform computes true bottom-line Net Profit after payroll & overheads.",
    },
    {
      question: isNepali
        ? "बिक्री तथा खरिदमा आंशिक भुक्तानी र बाँकी बक्यौता (Dues) कसरी हिसाब हुन्छ?"
        : "How do partial payments and dues calculations work for sales and purchases?",
      answer: isNepali
        ? "StockForge ले बिक्री र खरिद दुवैमा आंशिक भुक्तानी (Partial Payment) समर्थन गर्छ। जस्तै ग्राहकको रु. १०,००० को बिलमा रु. ६,००० भुक्तानी भएमा रु. ४,००० बाँकी रहन्छ। अर्को पटक रु. ५,००० को बिलमा रु. ३,००० मात्र तिरेमा साविकको बाँकी (४,०००), हालको बाँकी (२,०००) र कुल बाँकी (६,०००) बिलिङ स्क्रिन, थर्मल रसिद र बिक्री इतिहासमा स्पष्ट देखाउँछ। थोक आपूर्तिकर्ता (Vendors) को खरिदमा पनि सोही अनुरूप बाँकी रकम ट्र्याक हुन्छ।"
        : "StockForge natively handles partial payments for both sales (customer dues) and purchases (vendor payables). For example, if a customer has a bill of Rs. 10,000 and pays Rs. 6,000, a Rs. 4,000 due is logged. Next time on a Rs. 5,000 bill with Rs. 3,000 paid, the system automatically itemizes Previous Due (4,000), Current Due (2,000), and Total Due (6,000) on the POS checkout screen, printed thermal receipts, and history tables. The exact same ledger logic applies to vendor purchases.",
    },
    {
      question: isNepali
        ? "के ग्राहकको उधारो खाता (Khata) र आपूर्तिकर्ता (Vendor) को हिसाब राख्न सकिन्छ?"
        : "How does Customer Credit Khata and Vendor Supplier management work?",
      answer: isNepali
        ? "सकिन्छ! ग्राहकहरूको नाम, फोन नम्बर र खरिद इतिहासका साथै उधारो खाता (Khata) मार्फत कुल बाँकी बक्यौता रकम (Total Due), भुक्तानी सम्झौता र रसिद रेकर्ड सहजै ट्र्याक गर्न सकिन्छ। त्यसैगरी, थोक आपूर्तिकर्ता (Vendors) हरूको विवरण, खरिद बिलहरू, र तिर्न बाँकी रकम (Accounts Payable) पनि व्यवस्थित गर्न सकिन्छ।"
        : "Yes! The platform includes Customer Directory & Credit Khata ledgers to track customer purchase histories, total outstanding dues, and settled receipts. Additionally, Vendor Management lets you track wholesale distributors, purchase bills, payment due dates, and accounts payable.",
    },
    {
      question: isNepali
        ? "के सफ्टवेयरमा डार्क/लाइट मोड र नेपाली भाषा स्विच गर्न मिल्छ?"
        : "Does StockForge support dark/light theme mode and bilingual English / Nepali switching?",
      answer: isNepali
        ? "मिल्छ! StockForge मा १-क्लिकमै डार्क मोड (रात्रिकालीन सिफ्ट) र लाइट मोड (दिनको काउन्टर) बीच स्विच गर्न सकिन्छ। साथै, सम्पूर्ण प्रणाली, मेनु, बिलिङ र रिपोर्टहरू तत्काल नेपाली वा अङ्ग्रेजी भाषामा बदल्न सकिन्छ। भाषा स्विच गर्दा मुद्रा चिन्ह (रु. / Rs.) र शब्दावली बिना कुनै रिलोड स्वतः अद्यावधिक हुन्छ।"
        : "Yes! StockForge features a 1-click theme toggle to switch between dark mode (for low-glare evening counters) and clean light mode. Furthermore, it includes instant bilingual switching between English and Nepali with automatic currency symbol adaptation (रु. / Rs.) and zero page reloads.",
    },
    {
      question: isNepali
        ? "के म वास्तविक सामानहरू प्रविष्ट गर्नुअघि नमूना (Demo) डेटाबाट परीक्षण गर्न सक्छु?"
        : "Can I test StockForge with sample demo data before entering real stock?",
      answer: isNepali
        ? 'अवश्य! नयाँ पसल दर्ता गर्दा "Check for seed test data" विकल्प छान्न सक्नुहुन्छ वा लगइन स्क्रिनमा "Instant Demo Shop" मा १-क्लिक गरी तयारी किराना, इलेक्ट्रोनिक्स र डेरी सामानहरू भएको परीक्षण खातामा सबै सुविधाहरू निःशुल्क जाँच्न सक्नुहुन्छ।'
        : 'Yes! When registering a shop, check the "Populate with sample test data" option, or click "Explore Instant Demo Shop" on the login screen. This pre-seeds sample multi-unit items, sales history, staff, and expenses so you can test every workflow immediately.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section
      id="faqs"
      className="py-20 bg-neutral-950 border-t border-neutral-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>
              {isNepali
                ? "प्रायः सोधिने प्रश्नहरू"
                : "Frequently Asked Questions"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight">
            {isNepali ? (
              <>
                तपाईंको जिज्ञासाको{" "}
                <span className="text-emerald-400">स्पष्ट जवाफ</span>
              </>
            ) : (
              <>
                Everything You Need to Know About{" "}
                <span className="text-emerald-400">StockForge POS</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-neutral-400">
            {isNepali
              ? "अफलाइन प्रविधि, क्रमबद्ध बिलिङ, एकाइ व्यवस्थापन र सुरक्षा बारे सम्पूर्ण जानकारी।"
              : "Answers to common questions regarding offline SQLite technology, sequential invoicing, and data privacy."}
          </p>

          {/* Quick Search Bar */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isNepali
                    ? "प्रश्न खोज्नुहोस् (जस्तै बिलिङ, अफलाइन, एकाइ...)"
                    : "Search questions (e.g. billing, offline, units, backup)..."
                }
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-neutral-400 bg-neutral-900/40 rounded-xl border border-neutral-800 text-xs">
              {isNepali
                ? "कुनै नतिजा फेला परेन।"
                : "No questions matching your search query."}
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-900/80 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-neutral-100">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-lg bg-neutral-800 text-neutral-400 shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/50 bg-neutral-950/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
