/**
 * Product & Website Knowledge Base for Website Chatbot
 * Grounded 100% in local product and website content (Features, Integrations, Hardware, Pricing, FAQs, Contact).
 * Zero external AI / LLMs used - all answers are matched deterministically based on product capabilities.
 * Direct WhatsApp redirection provided for immediate human assistance.
 */

export type KnowledgeCategory =
  | 'overview'
  | 'features'
  | 'offline'
  | 'billing'
  | 'units'
  | 'backup'
  | 'integrations'
  | 'khata'
  | 'vendors'
  | 'staff'
  | 'expenses'
  | 'hardware'
  | 'pricing'
  | 'contact'
  | 'faqs';

export interface KnowledgeItem {
  id: string;
  category: KnowledgeCategory;
  keywords: string[];
  question_en: string;
  question_np: string;
  answer_en: string;
  answer_np: string;
  actionUrl?: string;
  actionLabel_en?: string;
  actionLabel_np?: string;
  suggestWhatsApp?: boolean;
}

export const KNOWLEDGE_BASE: KnowledgeItem[] = [
  // ==================== GREETINGS & INTRODUCTIONS ====================
  {
    id: 'general_greetings',
    category: 'overview',
    keywords: [
      'hello', 'hi', 'hey', 'namaste', 'namaskar', 'halo', 'hai', 'नमस्ते', 'नमस्कार',
      'हेलो', 'हाई', 'के छ', 'k cha', 'k chha', 'good morning', 'help', 'मद्दत', 'सोध्नु'
    ],
    question_en: 'Hello / Hi / How can you help me?',
    question_np: 'नमस्ते / नमस्कार! मलाई के मद्दत गर्न सक्नुहुन्छ?',
    answer_en:
      'Hello! I am your StockForge Product Guide. I can help you understand our 100% offline POS, automated billing, multi-unit inventory (kg, litre, pcs), Google Sheets backup, customer credit Khata, thermal printer setup, license pricing, and free on-site demo requests. What can I assist your retail store with today?',
    answer_np:
      'नमस्ते तथा नमस्कार! म StockForge उत्पादन सहायता बट हुँ। म तपाईंलाई हाम्रो १००% अफलाइन POS, स्वचालित बिलिङ, केजी/लिटर/पिस एकाइ स्टक, गुगल सिट ब्याकअप, ग्राहक उधारो खाता, थर्मल प्रिन्टर सेटअप, मूल्य र निःशुल्क अन-साइट डेमोबारे जानकारी दिन सक्छु। आज म तपाईंलाई के सम्बन्धी सहयोग गरूँ?',
    actionUrl: '/features',
    actionLabel_en: 'Explore Features',
    actionLabel_np: 'सुविधाहरू हेर्नुहोस्',
  },
  {
    id: 'what_is_stockforge',
    category: 'overview',
    keywords: [
      'what is stockforge', 'about stockforge', 'stockforge k ho', 'kasto software ho',
      'सफ्टवेयर के हो', 'स्टकफोर्ज', 'परिचय', 'कस्तो सफ्टवेयर', 'pos software', 'के हो'
    ],
    question_en: 'What is StockForge POS software?',
    question_np: 'StockForge कस्तो रिटेल POS सफ्टवेयर हो?',
    answer_en:
      'StockForge is an offline-first Point of Sale (POS) and inventory management software engineered specifically for grocery stores, retail marts, hardware outlets, and boutique shops in Nepal. It operates with 0 internet dependency, saves data in local SQLite WebAssembly, and connects seamlessly to cash drawers and thermal receipt printers.',
    answer_np:
      'StockForge नेपालका किराना पसल, मार्ट, हार्डवेयर र फेन्सी स्टोरहरूका लागि विशेष रूपमा तयार गरिएको अफलाइन रिटेल POS र इन्भेन्टरी सफ्टवेयर हो। यसमा बिलिङ गर्न इन्टरनेट चाहिँदैन, सम्पूर्ण डेटा तपाईंको आफ्नै कम्प्युटरमा SQLite मा सुरक्षित रहन्छ, र यसले थर्मल प्रिन्टर, क्यास ड्रयर तथा ग्राहक खातालाई पूर्ण समर्थन गर्दछ।',
    actionUrl: '/about',
    actionLabel_en: 'About StockForge',
    actionLabel_np: 'हाम्रोबारे हेर्नुहोस्',
  },
  {
    id: 'general_thanks',
    category: 'overview',
    keywords: [
      'thank you', 'thanks', 'dhanyabad', 'dhanyabaad', 'धन्यवाद', 'धेरै धन्यवाद', 'thank u', 'thx'
    ],
    question_en: 'Thank you!',
    question_np: 'धन्यवाद!',
    answer_en:
      "You're very welcome! If you have any further questions about setting up hardware, pricing licenses, or requesting a free on-site store demo, feel free to ask anytime or connect with our engineering team on WhatsApp (+977 9801234567).",
    answer_np:
      'धेरै धेरै धन्यवाद! StockForge, हार्डवेयर सेटअप वा पसलमै आएर डेमो हेर्न चाहनुहुन्छ भने जुनसुकै बेला प्रश्न सोध्न सक्नुहुन्छ वा हाम्रो प्राविधिक टोलीसँग ह्वाट्सएप (+९७७ ९८०१२३४५६७) मा सम्पर्क गर्न सक्नुहुन्छ।',
    actionUrl: '/contact',
    actionLabel_en: 'Contact Support',
    actionLabel_np: 'सम्पर्क गर्नुहोस्',
    suggestWhatsApp: true,
  },

  // ==================== FEATURES: OFFLINE & ARCHITECTURE ====================
  {
    id: 'offline_mode',
    category: 'offline',
    keywords: [
      'offline', 'internet', 'wifi', 'connection', 'network', 'afline', 'data',
      'blackout', 'इन्टरनेट', 'अफलाइन', 'नेट', 'बत्ती', 'सुरक्षा', 'speed', 'latency'
    ],
    question_en: 'Does StockForge work completely offline without an internet connection?',
    question_np: 'के StockForge चलाउन इन्टरनेट आवश्यक पर्छ? (Does it work offline?)',
    answer_en:
      'Yes, 100%! StockForge operates completely client-side using SQLite WebAssembly with local ACID transaction safety. Sales checkout, product catalog management, fast item search, sequential billing, and invoice printing operate at 0ms latency with zero internet or cloud dependencies.',
    answer_np:
      'पर्दैन! StockForge १००% अफलाइन-फर्स्ट प्रणाली हो। यो तपाईंको कम्प्युटर वा ल्यापटपको वेब ब्राउजरभित्र SQLite WebAssembly डेटाबेसमा स्थानीय रूपमा चल्छ। इन्टरनेट नभए पनि वा नेटवर्क पूर्ण रूपमा बन्द हुँदा पनि तपाईंले निर्बाध रूपमा सामान थप्न, बिक्री गर्न, र बिल प्रिन्ट गर्न सक्नुहुन्छ।',
    actionUrl: '/features',
    actionLabel_en: 'Explore Offline Architecture',
    actionLabel_np: 'अफलाइन प्रविधि हेर्नुहोस्',
  },
  {
    id: 'local_database_security',
    category: 'offline',
    keywords: [
      'storage', 'security', 'database', 'sqlite', 'acid', 'safe', 'privacy',
      'device', 'कहाँ रहन्छ', 'डेटाबेस', 'गोपनीयता', 'सेभ'
    ],
    question_en: 'Where is my shop data stored, and is it private and secure?',
    question_np: 'हाम्रो पसलको डेटा कहाँ सुरक्षित रहन्छ र यो कत्तिको गोप्य छ?',
    answer_en:
      'Your store database is stored 100% locally on your computer in encrypted browser-native SQLite storage. No customer transaction, revenue number, or inventory record is ever uploaded to third-party cloud servers without your explicit action. Complete data privacy and sovereignty.',
    answer_np:
      'तपाईंको पसलको सम्पूर्ण डेटा तपाईंको आफ्नै कम्प्युटरमा स्थानीय रूपमा सुरक्षित रहन्छ। कुनै पनि तेस्रो पक्ष वा क्लाउड सर्भरमा तपाईंको डेटा पठाउने गरिँदैन। यसले तपाईंको व्यापारको गोपनीयता, ग्राहक विवरण र नाफाको तथ्याङ्कलाई १००% सुरक्षित राख्छ।',
    actionUrl: '/about',
    actionLabel_en: 'Read Privacy Guarantee',
    actionLabel_np: 'गोपनीयता प्रतिबद्धता हेर्नुहोस्',
  },

  // ==================== FEATURES: INVENTORY & MULTI-UNITS ====================
  {
    id: 'measurement_units',
    category: 'units',
    keywords: [
      'unit', 'units', 'kg', 'litre', 'liter', 'piece', 'pcs', 'dozen', 'packet',
      'gram', 'meter', 'box', 'loose', 'weight', 'एकाइ', 'किलो', 'लिटर', 'प्याकेट', 'दशमलव', 'तौल'
    ],
    question_en: 'Which measurement units are supported for loose and packaged products?',
    question_np: 'सामानहरूमा कुन-कुन एकाइ (Units: piece, kg, litre, etc.) प्रयोग गर्न सकिन्छ?',
    answer_en:
      'StockForge natively supports piece (pcs), kilogram (kg), litre (ltr), gram (g), millilitre (ml), dozen, packet, box, and meter with fractional decimal quantities (e.g. 0.75 kg of rice, 1.5 litres of oil, or loose grains). When sold, inventory automatically deducts proportionally based on its unit.',
    answer_np:
      'तपाईंले सामानहरूलाई टुक्रा (piece/pcs), किलोग्राम (kg), लिटर (litre/ltr), ग्राम (g), मिलिलिटर (ml), दर्जन (dozen), प्याकेट (packet), बाकस (box) र मिटरमा दर्ता गर्न सक्नुहुन्छ। बिक्री गर्दा सामानको एकाइ अनुसार दशमलव मात्रा (जस्तै ०.७५ किलो, १.५ लिटर) समेत वास्तविक स्टक घट्छ।',
    actionUrl: '/features',
    actionLabel_en: 'View Supported Units',
    actionLabel_np: 'समर्थित एकाइहरू हेर्नुहोस्',
  },
  {
    id: 'low_stock_alerts',
    category: 'features',
    keywords: [
      'low stock', 'alert', 'reorder', 'minimum', 'warning', 'notify', 'चेतावनी',
      'स्टक सकियो', 'न्यूनतम', 'थोरै सामान'
    ],
    question_en: 'How do low-stock alerts and reorder threshold warnings work?',
    question_np: 'न्यूनतम स्टक चेतावनी (Low Stock Alert) ले कसरी काम गर्छ?',
    answer_en:
      'You can set a global low stock threshold (e.g. 10 units) or configure individual thresholds per product. As soon as checkout causes stock to hit or drop below this limit, the system highlights the item with an amber alert badge and displays immediate restock triggers.',
    answer_np:
      'तपाईंले सम्पूर्ण पसल वा प्रत्येक सामानको लागि न्यूनतम स्टक सीमा (जस्तै १० पिस वा ५ केजी) तोक्न सक्नुहुन्छ। बिक्रीपछि सामान तोकिएको सीमा वा सोभन्दा तल झर्नासाथ प्रणालीले पहेंलो चेतावनी ब्याज र रिस्टक सूचना देखाउँछ।',
    actionUrl: '/features',
    actionLabel_en: 'Inventory Alerts',
    actionLabel_np: 'इन्भेन्टरी चेतावनी हेर्नुहोस्',
  },

  // ==================== FEATURES: BILLING, VAT & INVOICING ====================
  {
    id: 'billing_invoicing',
    category: 'billing',
    keywords: [
      'bill', 'billing', 'invoice', 'sequential', 'receipt', 'bill number', 'बिल',
      'रसिद', 'बिल नम्बर', 'क्रमबद्ध'
    ],
    question_en: 'How does automated sequential billing work?',
    question_np: 'स्वचालित क्रमबद्ध बिलिङ (Sequential Billing) कसरी हुन्छ?',
    answer_en:
      'Every sale generates a unique standardized sequential bill number (format: BILL-YYYYMMDD-XXXX, e.g. BILL-20261011-0014). It tracks previous item quantities, calculates item discounts, computes taxable subtotal, and atomically saves the transaction in your local ledger.',
    answer_np:
      'प्रत्येक बिक्री सम्पन्न हुँदा प्रणालीले स्वतः एक अद्वितीय क्रमबद्ध बिल नम्बर (जस्तै BILL-20261011-0014) तयार गर्दछ। यसले सामानको छुट, करयोग्य रकम र जम्मा रकम गणना गरी स्थानीय लेजरमा सुरक्षित राख्छ।',
    actionUrl: '/features',
    actionLabel_en: 'Billing Features',
    actionLabel_np: 'बिलिङ सुविधा हेर्नुहोस्',
  },
  {
    id: 'vat_pan_tax',
    category: 'billing',
    keywords: [
      'vat', 'pan', 'tax', '13%', 'taxable', 'कर', 'पान', 'भ्याट', '१३%', 'लेखा'
    ],
    question_en: 'Does StockForge support 13% VAT, PAN registration, and tax breakdowns?',
    question_np: 'के प्रणालीमा १३% भ्याट (VAT), प्यान (PAN) र करको हिसाब गर्न सकिन्छ?',
    answer_en:
      'Yes! Under Settings you can enable 13% VAT (or customize any rate) and enter your store PAN/VAT registration number. Taxable subtotals, VAT amounts, and net totals are itemized on thermal receipts and financial sales audit logs.',
    answer_np:
      'सकिन्छ! सेटिङ्स मेनुमा गएर १३% भ्याट (वा आफूले चाहेको दर) सक्रिय गर्न सक्नुहुन्छ र पसलको PAN/VAT नम्बर प्रविष्ट गर्न सक्नुहुन्छ। बिलिङ गर्दा करयोग्य रकम, भ्याट रकम र कुल जम्मा रसिदमा स्पष्ट रूपमा छापिन्छ।',
    actionUrl: '/features',
    actionLabel_en: 'VAT Configuration Info',
    actionLabel_np: 'भ्याट सेटिङ विवरण',
  },
  {
    id: 'thermal_printers',
    category: 'hardware',
    keywords: [
      'printer', 'thermal', '80mm', '58mm', 'receipt', 'esc/pos', 'print', 'xprinter',
      'epson', 'प्रिन्टर', 'थर्मल', 'कागज', 'रसिद'
    ],
    question_en: 'Can I print receipts on standard 80mm and 58mm thermal POS printers?',
    question_np: 'के थर्मल बिल प्रिन्टर (Thermal POS 80mm/58mm) मा रसिद छाप्न सकिन्छ?',
    answer_en:
      'Yes! StockForge features tailored print stylesheets calibrated for all standard 80mm and 58mm thermal receipt printers (Epson, Xprinter, Citizen, Star Micronics, TVS). Prints shop name, PAN, phone, sequential bill ID, itemized units, tax breakdowns, and customized thank-you footers.',
    answer_np:
      'सकिन्छ! StockForge ले सबै मानक ८०mm र ५८mm थर्मल रसिद प्रिन्टरहरूलाई समर्थन गर्दछ। प्रिन्ट रसिदमा पसलको नाम, ठेगाना, फोन, बिल नम्बर, ग्राहकको नाम, एकाइसहितका सामानहरू, र कर विभाजन स्पष्ट रूपमा आउँछ।',
    actionUrl: '/features',
    actionLabel_en: 'Printer Compatibility',
    actionLabel_np: 'प्रिन्टर अनुकूलता हेर्नुहोस्',
  },

  // ==================== FEATURES: CRM, KHATA & VENDORS ====================
  {
    id: 'dues_and_partial_payments',
    category: 'khata',
    keywords: [
      'due', 'dues', 'partial payment', 'paid', 'previous due', 'total due',
      'current due', 'customer due', 'vendor due', 'ayub', 'balance due', 'बाँकी',
      'बक्यौता', 'साविकको बाँकी', 'आंशिक भुक्तानी', 'तिर्न बाँकी', 'उधारो बाँकी'
    ],
    question_en: 'How do dues, partial payments, and previous balances work for sales and purchases?',
    question_np: 'बिक्री तथा खरिदमा आंशिक भुक्तानी र साविक तथा कुल बाँकी (Dues) कसरी हिसाब हुन्छ?',
    answer_en:
      'StockForge supports flexible partial payments on sales checkouts and wholesale purchase restocks. For instance, if a customer bill is Rs. 10,000 and they only pay Rs. 6,000, Rs. 4,000 is tracked as current bill due. On their next visit with a Rs. 5,000 bill where they pay Rs. 3,000, StockForge automatically calculates and displays Previous Due (Rs. 4,000), Current Due (Rs. 2,000), and Total Due (Rs. 6,000) on POS screens, printed receipts, and sales history columns. The same system applies to vendor wholesale purchases.',
    answer_np:
      'StockForge ले बिक्री र खरिद दुवैमा आंशिक भुक्तानी (Partial Payment) र बाँकी बक्यौताको पूर्ण हिसाब राख्छ। जस्तै ग्राहकको रु. १०,००० को बिलमा रु. ६,००० तिर्दा रु. ४,००० बाँकी रहन्छ; अर्को पटक रु. ५,००० को बिलमा रु. ३,००० मात्र तिर्दा साविकको बाँकी (४,०००), हालको बिलको बाँकी (२,०००) र कुल बाँकी (६,०००) रसिद, काउन्टर र बिक्री इतिहासमा स्पष्ट रूपमा देखाउँछ। थोक आपूर्तिकर्ताको खरिदमा पनि यही स्वचालित हिसाब लागू हुन्छ।',
    actionUrl: '/features',
    actionLabel_en: 'Explore Dues Feature',
    actionLabel_np: 'बाँकी हिसाब सुविधा हेर्नुहोस्',
  },
  {
    id: 'khata_receivables',
    category: 'khata',
    keywords: [
      'khata', 'credit', 'customer', 'receivables', 'client', 'balance', 'udharo',
      'due', 'खाता', 'उधारो', 'ग्राहक', 'बाँकी', 'बक्यौता'
    ],
    question_en: 'How does the Customer Credit Khata (उधारो खाता) ledger work?',
    question_np: 'ग्राहकको उधारो खाता (Credit Khata) ले कसरी काम गर्छ?',
    answer_en:
      'StockForge features an integrated Customer Directory & Credit Khata ledger. You can register customers, view their complete purchase history, record partial or full cash settlements, and track total outstanding due balances in real-time.',
    answer_np:
      'ग्राहकहरूको नाम, फोन नम्बर र खरिद इतिहासका साथै उधारो खाता (Khata) मार्फत कुल बाँकी बक्यौता रकम, आंशिक भुक्तानी र रसिद रेकर्ड सहजै ट्र्याक गर्न सकिन्छ। नियमित ग्राहकको उधारो रसिद १-क्लिकमा व्यवस्थापन हुन्छ।',
    actionUrl: '/features',
    actionLabel_en: 'Customer Khata Guide',
    actionLabel_np: 'खाता सुविधा हेर्नुहोस्',
  },
  {
    id: 'vendor_supplier_ledger',
    category: 'vendors',
    keywords: [
      'vendor', 'supplier', 'wholesale', 'payable', 'purchase bill', 'dealer',
      'वितरक', 'आपूर्तिकर्ता', 'थोक', 'खरिद', 'भेन्डर'
    ],
    question_en: 'Can I manage wholesale suppliers, purchase bills, and accounts payable?',
    question_np: 'के थोक आपूर्तिकर्ता (Vendors) र खरिद बिलहरूको हिसाब राख्न सकिन्छ?',
    answer_en:
      'Yes! The Vendor & Supplier Directory tracks wholesale dealers, incoming batch shipments, purchase bills, payment terms, and accounts payable so you always know upcoming vendor payment commitments.',
    answer_np:
      'सकिन्छ! थोक बिक्रेता तथा वितरक (Suppliers) को सूची, सम्पर्क नम्बर, र खरिद बिलहरू एकै ठाउँमा व्यवस्थापन गर्न सकिन्छ। आपूर्तिकर्तालाई तिर्न बाँकी रकम (Accounts Payable) र भुक्तानी मिति सजिलै ट्र्याक गर्न सकिन्छ।',
    actionUrl: '/features',
    actionLabel_en: 'Vendor Ledger Info',
    actionLabel_np: 'आपूर्तिकर्ता खाता हेर्नुहोस्',
  },

  // ==================== FEATURES: FINANCE, COGS, PAYROLL, EXPENSES ====================
  {
    id: 'cogs_profit_analytics',
    category: 'features',
    keywords: [
      'cogs', 'profit', 'gross profit', 'margin', 'cost', 'revenue', 'नाफा',
      'मार्जिन', 'खरिद मूल्य', 'बिक्री नाफा'
    ],
    question_en: 'How does Cost of Goods Sold (COGS) and real-time gross profit calculation work?',
    question_np: 'वास्तविक कुल नाफा (Gross Profit) र COGS कसरी हिसाब गरिन्छ?',
    answer_en:
      'During checkout, StockForge snapshots the exact purchase cost of each item at that second. Even if supplier prices change next month, historical sales retain the accurate cost, giving you mathematically precise Gross Profit, Revenue, and Gross Margin percentages.',
    answer_np:
      'बिक्री गर्दाको खरिद मूल्यलाई ऐतिहासिक स्न्यापसटको रूपमा सुरक्षित गरिन्छ, जसले गर्दा पछि मूल्य परिवर्तन भए पनि तपाईंको वास्तविक कुल नाफा (Gross Profit) र मार्जिन शतप्रतिशत सही रहन्छ।',
    actionUrl: '/features',
    actionLabel_en: 'Profit Accounting Details',
    actionLabel_np: 'नाफा हिसाब हेर्नुहोस्',
  },
  {
    id: 'staff_payroll',
    category: 'staff',
    keywords: [
      'staff', 'employee', 'payroll', 'salary', 'wages', 'voucher', 'bonus',
      'deduction', 'कर्मचारी', 'तलब', 'पेरोल', 'तलब भौचर'
    ],
    question_en: 'How do staff records and monthly payroll disbursements work?',
    question_np: 'कर्मचारी विवरण र मासिक तलब (Staff & Payroll) कसरी व्यवस्थापन गर्ने?',
    answer_en:
      'StockForge includes a dedicated Staff Directory and Monthly Payroll ledger. You can register employees, designate roles (cashier, manager, delivery), set basic wages, apply bonuses and deductions, and print official salary payment vouchers.',
    answer_np:
      'कर्मचारी (Staff) मेनुमा कर्मचारीहरूको विवरण र आधारभूत तलब प्रविष्ट गर्न सक्नुहुन्छ। पेरोल (Payroll) खण्डबाट मासिक तलब भुक्तानी भौचर सिर्जना गर्न सकिन्छ र तलब रसिद प्रिन्ट गर्न सकिन्छ।',
    actionUrl: '/features',
    actionLabel_en: 'Payroll Features',
    actionLabel_np: 'पेरोल सुविधा हेर्नुहोस्',
  },
  {
    id: 'operational_expenses',
    category: 'expenses',
    keywords: [
      'expense', 'expenses', 'rent', 'electricity', 'freight', 'bills', 'net profit',
      'खर्च', 'भाडा', 'बिजुली', 'खुद नाफा'
    ],
    question_en: 'How does operational expense tracking and bottom-line Net Profit work?',
    question_np: 'दैनिक पसलको खर्च र वास्तविक खुद नाफा (Net Profit) कसरी हेर्ने?',
    answer_en:
      'Log shop overheads like room rent, electricity, packaging, transport, and maintenance under the Expenses module. StockForge subtracts both Cost of Goods Sold and total operational expenses from sales revenue to show your true bottom-line Net Profit.',
    answer_np:
      'पसलको दैनिक खर्चहरू—घरभाडा, बिजुली, प्याकेजिङ, र यातायात—विभाजन गरेर दर्ता गर्नुहोस्। कुल नाफाबाट खर्च घटाएर पसलको वास्तविक खुद नाफा (Net Profit) तत्काल हेर्न सकिन्छ।',
    actionUrl: '/features',
    actionLabel_en: 'Expense Ledger Info',
    actionLabel_np: 'खर्च लेजर हेर्नुहोस्',
  },

  // ==================== INTEGRATIONS ====================
  {
    id: 'integration_google_sheets',
    category: 'integrations',
    keywords: [
      'sheets', 'google sheets', 'cloud', 'backup', 'restore', 'sync', 'oauth',
      'गुगल सिट', 'क्लाउड ब्याकअप', 'सिंक'
    ],
    question_en: 'How does Google Sheets Cloud Backup & Restore integration work?',
    question_np: 'गुगल सिट (Google Sheets) क्लाउड ब्याकअप र रिस्टोर कसरी काम गर्छ?',
    answer_en:
      'StockForge integrates with Google Sheets via secure Google OAuth. When you click Backup in Settings, you authorize Google Sheets permission, and your entire catalog, sales logs, stock movements, and ledgers sync directly into your private Google Sheet. You can also restore store data from the sheet with 1 click (internet connection required).',
    answer_np:
      'तपाईंले आफ्नो पसलको सम्पूर्ण डेटा गुगल सिटमार्फत ब्याकअप र रिस्टोर गर्न सक्नुहुन्छ। जब तपाईं "ब्याकअप" मा क्लिक गर्नुहुन्छ, गुगल प्रमाणीकरणमार्फत सामानहरू, बिक्री इतिहास र खर्च सुरक्षित रूपमा गुगल सिटमा ब्याकअप हुन्छ। रिस्टोर गर्दा पनि सिटबाट सम्पूर्ण डेटा पुनः स्थापना हुन्छ (यस कार्यका लागि इन्टरनेट आवश्यक पर्छ)।',
    actionUrl: '/features',
    actionLabel_en: 'Learn Google Sheets Sync',
    actionLabel_np: 'गुगल सिट सिंक हेर्नुहोस्',
  },
  {
    id: 'integration_sql_backup',
    category: 'integrations',
    keywords: [
      'sql', '.sql', 'dump', 'script', 'export', 'import', 'ब्याकअप', 'एसक्युएल'
    ],
    question_en: 'Can I export and import standard SQL (.sql) database dumps?',
    question_np: 'के मानक SQL (.sql) फाइलमार्फत ब्याकअप र रिस्टोर गर्न सकिन्छ?',
    answer_en:
      'Yes! StockForge generates clean standard SQL (.sql) script dumps containing full CREATE TABLE schemas and INSERT statements for products, sales, khata ledgers, and expenses. You can restore this file on any machine with 1 click completely offline.',
    answer_np:
      'सकिन्छ! तपाईंले मानक SQL (.sql) फाइलमार्फत आफ्नो सम्पूर्ण डेटाबेस ब्याकअप र रिस्टोर गर्न सक्नुहुन्छ। यसले सबै तालिकाहरू, सामान, बिक्री र खर्चहरूको सफा SQL स्क्रिप्ट तयार गर्छ, जसलाई १-क्लिकमा अफलाइन पुनः स्थापना गर्न सकिन्छ।',
    actionUrl: '/faqs',
    actionLabel_en: 'SQL Backup Guide',
    actionLabel_np: 'एसक्युएल ब्याकअप हेर्नुहोस्',
  },
  {
    id: 'integration_sqlite_db',
    category: 'integrations',
    keywords: [
      '.db', '.sqlite', 'binary', 'flash drive', 'pen drive', 'usb', 'डाउनलोड', 'पेनड्राइभ'
    ],
    question_en: 'How do I download a binary SQLite (.db / .sqlite) file for a USB flash drive?',
    question_np: 'पेनड्राइभमा १-क्लिक बाइनरी SQLite (.sqlite/.db) फाइल कसरी डाउनलोड गर्ने?',
    answer_en:
      'Inside Settings, simply click "Download Binary SQLite (.sqlite)". It instantaneously packages your offline database into a single binary file ready to copy to a USB flash drive or external drive for air-gapped physical security.',
    answer_np:
      'सेटिङ्स मेनुमा गएर "Download Backup (.sqlite)" मा क्लिक गर्नासाथ पुरै डेटाबेस एउटा बाइनरी फाइलको रूपमा तत्काल डाउनलोड हुन्छ, जसलाई पेनड्राइभ वा बाह्य हार्डड्राइभमा सुरक्षित राख्न सकिन्छ।',
    actionUrl: '/faqs',
    actionLabel_en: 'Binary Backup Info',
    actionLabel_np: 'बाइनरी ब्याकअप हेर्नुहोस्',
  },
  {
    id: 'integration_barcode_scanners',
    category: 'integrations',
    keywords: [
      'scanner', 'barcode', 'qr', 'sku', 'usb scanner', 'laser', 'स्क्यानर',
      'बारकोड', 'स्क्यान'
    ],
    question_en: 'Are barcode scanners supported in StockForge?',
    question_np: 'के StockForge मा बारकोड स्क्यानर सपोर्ट छ?',
    answer_en:
      'Barcode scanner hardware integration is currently not implemented in StockForge. Instead, StockForge features ultra-responsive manual product search, quick catalog selection, and keyboard accelerators (F2) for rapid cashier checkout.',
    answer_np:
      'StockForge मा हाल बारकोड स्क्यानर इन्टिग्रेसन उपलब्ध छैन। यसको सट्टा, द्रुत वस्तु खोजी, क्याटलग छनोट र किबोर्ड सर्टकट (F2) मार्फत काउन्टरमा छिटो बिलिङ गर्न सकिन्छ।',
    actionUrl: '/features',
    actionLabel_en: 'Explore POS Features',
    actionLabel_np: 'काउन्टर सुविधाहरू हेर्नुहोस्',
  },
  {
    id: 'integration_cash_drawer_scales',
    category: 'integrations',
    keywords: [
      'cash drawer', 'drawer', 'scale', 'weighing scale', 'rj11', 'rj12', 'दराज', 'तराजु'
    ],
    question_en: 'Does StockForge support electronic cash drawers and weighing scales?',
    question_np: 'के इलेक्ट्रोनिक क्यास ड्रअर (Cash Drawer) र तराजु (Weighing Scale) चल्छ?',
    answer_en:
      'Yes! Electronic cash drawers trigger open automatically via standard RJ11 / RJ12 printer kick-out pulses upon receipt printing. For weighed items (fruits, vegetables, grains, meats), USB electronic scales can input weights directly into decimal quantities.',
    answer_np:
      'चल्छ! थर्मल प्रिन्टरसँग RJ11/RJ12 केबल जोडिएको क्यास ड्रअर (Cash Drawer) बिल प्रिन्ट हुनासाथ स्वतः खुल्छ। साथै तौल गर्नुपर्ने सामानहरूको लागि इलेक्ट्रोनिक तराजुबाट तौल सिधै प्रविष्ट गर्न सकिन्छ।',
    actionUrl: '/features',
    actionLabel_en: 'Hardware Specs',
    actionLabel_np: 'हार्डवेयर विवरण हेर्नुहोस्',
  },

  // ==================== USER EXPERIENCE & LOCALIZATION ====================
  {
    id: 'bilingual_nepali_english',
    category: 'overview',
    keywords: [
      'nepali', 'english', 'language', 'bilingual', 'currency', 'rs', 'rupee',
      'भाषा', 'नेपाली', 'अङ्ग्रेजी', 'मुद्रा', 'रु.'
    ],
    question_en: 'How does the bilingual English and Nepali switch work?',
    question_np: 'नेपाली र अङ्ग्रेजी भाषा कसरी परिवर्तन गर्ने?',
    answer_en:
      'You can switch the entire interface between English and Nepali with 1-click in the sidebar or top header without reloading. It synchronizes currency symbols (Rs. <-> रु.) across all invoices, reports, and receipt slips.',
    answer_np:
      'साइडबार वा हेडरमा रहेको भाषा बटन थिचेर १-सेकेन्डमै पुरै प्रणाली नेपाली वा अङ्ग्रेजीमा बदल्न सकिन्छ। भाषा परिवर्तनसँगै मुद्रा चिन्ह (Rs. वा रु.) र रिपोर्टहरू स्वतः समायोजन हुन्छन्।',
    actionUrl: '/features',
    actionLabel_en: 'Bilingual Interface',
    actionLabel_np: 'द्विभाषिक प्रणाली हेर्नुहोस्',
  },
  {
    id: 'dark_light_themes',
    category: 'overview',
    keywords: [
      'theme', 'dark mode', 'light mode', 'screen', 'eye', 'डार्क मोड', 'लाइट मोड', 'थिम'
    ],
    question_en: 'Does StockForge include Dark and Light theme modes for cashier shifts?',
    question_np: 'के सफ्टवेयरमा डार्क र लाइट थिम मोड छ?',
    answer_en:
      'Yes! Toggle instantly between high-contrast dark mode and clean daylight mode. Designed for visual comfort during long counter shifts to reduce eye fatigue.',
    answer_np:
      'छ! उच्च-कन्ट्रास्ट डार्क मोड र सफा लाइट मोडबीच तत्काल १-क्लिकमा स्विच गर्न सकिन्छ। काउन्टरमा लामो समय बस्दा आँखा नथाकोस् भनेर यो विशेष रूपमा अनुकूलित गरिएको छ।',
    actionUrl: '/features',
    actionLabel_en: 'Theme Controls',
    actionLabel_np: 'थिम नियन्त्रण हेर्नुहोस्',
  },
  {
    id: 'keyboard_shortcuts',
    category: 'features',
    keywords: [
      'shortcut', 'keyboard', 'f2', 'ctrl+k', 'hotkey', 'fast', 'सर्टकट', 'किबोर्ड'
    ],
    question_en: 'Which keyboard shortcuts are available for high-speed cashiers?',
    question_np: 'क्यासियरको लागि कुन-कुन किबोर्ड सर्टकटहरू छन्?',
    answer_en:
      'Cashiers can use F2 to jump directly to a New Sale checkout, Enter to complete transactions, Ctrl+K / Cmd+K to launch the Command Palette, and arrow keys to navigate catalogs without touching the mouse.',
    answer_np:
      'F2 थिचेर तत्काल नयाँ बिक्री सुरु गर्न सकिन्छ, Enter ले बिल सम्पन्न गर्छ, र Ctrl+K ले कमान्ड प्यालेट खोलेर माउस नछोइकनै सम्पूर्ण काम छिटो गर्न सकिन्छ।',
    actionUrl: '/features',
    actionLabel_en: 'Keyboard Shortcuts',
    actionLabel_np: 'किबोर्ड सर्टकट हेर्नुहोस्',
  },

  // ==================== PRICING & LICENSES ====================
  {
    id: 'pricing_packages',
    category: 'pricing',
    keywords: [
      'price', 'pricing', 'cost', 'fee', 'charge', 'lifetime', 'free', 'rupees',
      'मूल्य', 'खर्च', 'शुल्क', 'निःशुल्क', 'पैसा', 'प्याकेज', 'लाइसेन्स'
    ],
    question_en: 'What are the pricing plans and licensing options in Nepal?',
    question_np: 'StockForge को मूल्य, शुल्क र लाइसेन्स कति पर्छ?',
    answer_en:
      'We offer transparent pricing with ZERO monthly subscriptions:\n1. Community Edition: Rs. 0 FREE FOREVER for single-counter stores.\n2. Retail Mart Pro: Rs. 9,999 One-Time Lifetime License (Multi-unit, sequential billing, payroll, expenses, Google Sheets sync, on-site setup).\n3. Enterprise: Rs. 24,999 Lifetime License (Multi-terminal local LAN sync, hardware kit calibration, 24/7 dedicated support).',
    answer_np:
      'StockForge मा कुनै मासिक वा वार्षिक शुल्क छैन:\n१. कम्युनिटी संस्करण: रु. ० (साना पसलका लागि सधैँभरि निःशुल्क)।\n२. रिटेल मार्ट प्रो: रु. ९,९९९ (एकपटक मात्र - लाइफटाइम लाइसेन्स, बहु-एकाइ, पेरोल, खर्च, गुगल सिट ब्याकअप र अन-साइट सेटअपसहित)।\n३. इन्टरप्राइज: रु. २४,९९९ (लाइफटाइम लाइसेन्स - बहु-काउन्टर लोकल नेटवर्क सिंक, २४/७ हटलाइनसहित)।',
    actionUrl: '/contact',
    actionLabel_en: 'Consult Pricing & Plans',
    actionLabel_np: 'मूल्य तथा योजना हेर्नुहोस्',
    suggestWhatsApp: true,
  },

  // ==================== CONTACT, SUPPORT & ON-SITE DEMO ====================
  {
    id: 'contact_support_channels',
    category: 'contact',
    keywords: [
      'contact', 'support', 'help', 'phone', 'call', 'location', 'office',
      'kathmandu', 'hours', 'whatsapp', 'number', 'सम्पर्क', 'फोन', 'ह्वाट्सएप', 'ठेगाना', 'कार्यालय'
    ],
    question_en: 'What are your support contact numbers, office location, and hours?',
    question_np: 'सहयोगको लागि सम्पर्क फोन नम्बर, कार्यालय र समय के हो?',
    answer_en:
      'You can reach our retail engineering team directly:\n• Phone Hotline: +977 1-4245678 / +977 9801234567\n• WhatsApp: +977 9801234567 (Instant Chat)\n• Email: support@stockforge.pos / info@stockforge.pos\n• Office: New Road Retail Technology Center, Kathmandu / Patan Hub, Nepal\n• Support Hours: 7:00 AM – 8:30 PM NPT (7 days a week)',
    answer_np:
      'तपाईंले हाम्रो प्राविधिक टोलीसँग प्रत्यक्ष सम्पर्क गर्न सक्नुहुन्छ:\n• फोन: +977 1-4245678 / +977 9801234567\n• ह्वाट्सएप: +977 9801234567\n• इमेल: support@stockforge.pos\n• कार्यालय: न्यूरोड, काठमाडौं / पाटन, नेपाल\n• समय: बिहान ७:०० देखि साँझ ८:३० सम्म (साताको ७ दिन)',
    actionUrl: '/contact',
    actionLabel_en: 'Open Contact Form',
    actionLabel_np: 'सम्पर्क फाराम खोल्नुहोस्',
    suggestWhatsApp: true,
  },
  {
    id: 'onsite_demo_trial',
    category: 'contact',
    keywords: [
      'demo', 'trial', 'free demo', 'visit', 'onsite', 'pokhara', 'chitwan',
      'butwal', 'डेमो', 'परीक्षण', 'भिजिट', 'अनसाइट'
    ],
    question_en: 'Can I get an on-site demonstration at my shop in Nepal?',
    question_np: 'के हाम्रो पसलमै आएर प्रत्यक्ष डेमो (On-site Demo) देखाउन मिल्छ?',
    answer_en:
      'Yes! Our field technicians provide free on-site demonstrations and hardware pairing tests across Kathmandu Valley (Kathmandu, Lalitpur, Bhaktapur), Pokhara, Chitwan, Butwal, Biratnagar, and major retail centers. Send us a request via WhatsApp or our Contact form.',
    answer_np:
      'मिल्छ! हाम्रो प्राविधिक टोलीले काठमाडौं उपत्यका, पोखरा, चितवन, बुटवल, विराटनगरलगायत प्रमुख सहरहरूमा तपाईंको पसलमै आएर निःशुल्क अन-साइट डेमो र प्रिन्टर/स्क्यानर परीक्षण गरिदिन्छ। ह्वाट्सएप वा सम्पर्क फाराममार्फत अनुरोध गर्नुहोस्।',
    actionUrl: '/contact',
    actionLabel_en: 'Request On-Site Demo',
    actionLabel_np: 'अन-साइट डेमो अनुरोध गर्नुहोस्',
    suggestWhatsApp: true,
  },
  {
    id: 'instant_demo_shop',
    category: 'overview',
    keywords: [
      'try demo', 'sample data', 'test shop', 'login demo', 'free trial', 'नमूना', 'डेमो पसल'
    ],
    question_en: 'Can I test a sample shop or get a live demo?',
    question_np: 'के म प्रत्यक्ष डेमो (Live Demo) वा परामर्श पाउन सक्छु?',
    answer_en:
      'Yes! You can request a live on-site demo or consultation via our Contact page. Our team will demonstrate fast counter billing, khata ledgers, inventory tracking, and thermal prints tailored to your store setup.',
    answer_np:
      'अवश्य! तपाईंले हाम्रो सम्पर्क पृष्ठमार्फत प्रत्यक्ष डेमो वा परामर्श अनुरोध गर्न सक्नुहुन्छ। हाम्रो टोलीले तपाईंको पसल अनुसार द्रुत बिलिङ, खाता, स्टक व्यवस्थापन र प्रिन्टिङ प्रदर्शन गर्नेछ।',
    actionUrl: '/contact',
    actionLabel_en: 'Request Live Demo',
    actionLabel_np: 'प्रत्यक्ष डेमो अनुरोध गर्नुहोस्',
  },

  // ==================== FAQS ====================
  {
    id: 'faq_hardware_specs',
    category: 'faqs',
    keywords: [
      'computer', 'laptop', 'hardware', 'spec', 'ram', 'windows', 'mac', 'requirements',
      'कम्प्युटर', 'ल्यापटप', 'विन्डोज'
    ],
    question_en: 'What are the computer hardware and operating system requirements?',
    question_np: 'सफ्टवेयर चलाउन कस्तो कम्प्युटर वा ल्यापटप चाहिन्छ?',
    answer_en:
      'StockForge runs smoothly on ANY standard laptop, desktop PC, or POS terminal with 2GB+ RAM. Compatible with Windows 10/11, macOS, Linux, and ChromeOS using any modern browser (Google Chrome, Microsoft Edge, Firefox, Safari). No heavy GPU or dedicated server required.',
    answer_np:
      'StockForge चलाउन कुनै महँगो कम्प्युटर चाहिँदैन। २GB र्‍याम भएको सामान्य ल्यापटप, डेस्कटप वा टच POS टर्मिनलमा विन्डोज १०/११, म्याक वा लिनक्समा क्रोम वा एज ब्राउजरमार्फत सजिलै चल्छ।',
    actionUrl: '/features',
    actionLabel_en: 'Hardware Specs',
    actionLabel_np: 'हार्डवेयर विवरण हेर्नुहोस्',
  },
  {
    id: 'faq_multiple_counters',
    category: 'faqs',
    keywords: [
      'multi counter', 'two counters', 'lan', 'network', 'terminals', 'धेरै काउन्टर', 'काउन्टर'
    ],
    question_en: 'Can I run multiple checkout counters in the same store?',
    question_np: 'के एउटै पसलमा धेरै काउन्टरहरू (Multiple Counters) चलाउन सकिन्छ?',
    answer_en:
      'Yes! For supermarkets and multi-terminal marts, our Enterprise Edition provides local area network (LAN) synchronization across multiple counter machines without relying on external cloud connections.',
    answer_np:
      'सकिन्छ! ठूला मार्ट तथा सुपरमार्केटका लागि इन्टरप्राइज संस्करणमा लोकल नेटवर्क (LAN) मार्फत इन्टरनेट बिना नै धेरै काउन्टरहरूबीच सामानको स्टक र बिलिङ सिंक गर्न सकिन्छ।',
    actionUrl: '/contact',
    actionLabel_en: 'Ask Enterprise Team',
    actionLabel_np: 'इन्टरप्राइज टोलीसँग बुझ्नुहोस्',
    suggestWhatsApp: true,
  },
  {
    id: 'faq_excel_import',
    category: 'faqs',
    keywords: [
      'excel', 'csv', 'import', 'migrate', 'old software', 'सामान आयात', 'एक्सेल', 'माइग्रेसन'
    ],
    question_en: 'Can I import my existing product list from Excel or an old POS software?',
    question_np: 'के पुरानो सफ्टवेयर वा एक्सेल (Excel) बाट सामानहरू आयात गर्न सकिन्छ?',
    answer_en:
      'Yes! We support CSV and Excel spreadsheet import templates. Our technical onboarding team also assists in formatting and migrating your legacy product list, item rates, and opening stock counts into StockForge during setup.',
    answer_np:
      'सकिन्छ! तपाईंले एक्सेल वा CSV फाइलमार्फत आफ्ना सम्पूर्ण सामान, मूल्य र सुरुवाती स्टक संख्या सजिलै आयात गर्न सक्नुहुन्छ। हाम्रो प्राविधिक टोलीले डेटा माइग्रेसनमा पूर्ण सहयोग गर्दछ।',
    actionUrl: '/contact',
    actionLabel_en: 'Request Data Migration',
    actionLabel_np: 'डेटा माइग्रेसन अनुरोध गर्नुहोस्',
    suggestWhatsApp: true,
  },
];

export const POPULAR_QUESTIONS = [
  'Does StockForge work completely offline?',
  'How do measurement units (kg, litre, pcs) work?',
  'How do I backup to Google Sheets or flash drive?',
  'Can I print receipts on 80mm/58mm thermal printers?',
  'How does customer credit Khata ledger work?',
  'What are your pricing packages and licenses?',
  'What are your support contact numbers & WhatsApp?',
  'Can I request a free on-site demo at my shop?',
];

export const POPULAR_QUESTIONS_NP = [
  'के StockForge इन्टरनेट नभए पनि चल्छ?',
  'सामानको एकाइ (केजी, लिटर, पिस) कसरी चल्छ?',
  'गुगल सिट वा पेनड्राइभमा डेटा ब्याकअप कसरी लिने?',
  'थर्मल बिल प्रिन्टरमा रसिद छाप्न सकिन्छ?',
  'ग्राहकको उधारो खाता (Khata) कसरी राख्ने?',
  'सफ्टवेयरको मूल्य र लाइसेन्स कति पर्छ?',
  'सहयोगको लागि सम्पर्क फोन र ह्वाट्सएप नम्बर के हो?',
  'के पसलमै आएर प्रत्यक्ष डेमो हेर्न मिल्छ?',
];

export const WHATSAPP_NUMBER = '9779801234567';
export const WHATSAPP_DEFAULT_MESSAGE =
  'Namaste StockForge! I would like to inquire about the offline retail POS software, hardware setup, and on-site demonstration.';

export function getWhatsAppUrl(customMessage?: string, isNepali = false): string {
  const defaultMsg = isNepali
    ? 'नमस्ते StockForge! म अफलाइन रिटेल POS सफ्टवेयर, हार्डवेयर र डेमोबारे थप बुझ्न चाहन्छु।'
    : WHATSAPP_DEFAULT_MESSAGE;
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

/**
 * Deterministic text search over the product knowledge base
 * Evaluates keyword presence, category affinity, string containment, and language prioritization.
 * Zero external AI / LLM used.
 */
export function queryKnowledgeBase(query: string, isNepali = false): KnowledgeItem | null {
  const clean = query.trim().toLowerCase();
  if (!clean) return null;

  // Split with Nepali danda '।' and common separators
  const words = clean
    .split(/[\s,?.!/|।_=-]+/)
    .filter((w) => w.length > 1);

  let bestMatch: KnowledgeItem | null = null;
  let highestScore = 0;

  for (const item of KNOWLEDGE_BASE) {
    let score = 0;
    const qEnLower = item.question_en.toLowerCase();
    const qNpLower = item.question_np.toLowerCase();

    // 1. Whole-query containment in questions (boosted for selected language)
    if (qNpLower.includes(clean)) {
      score += isNepali ? 28 : 16;
    }
    if (qEnLower.includes(clean)) {
      score += isNepali ? 16 : 28;
    }

    // 2. Keyword exact and substring matches
    for (const kw of item.keywords) {
      const kwLower = kw.toLowerCase();
      if (clean === kwLower) {
        score += 22;
      } else if (clean.includes(kwLower) || kwLower.includes(clean)) {
        score += 14;
      }
      for (const w of words) {
        if (kwLower === w) {
          score += 8;
        } else if (kwLower.includes(w) || w.includes(kwLower)) {
          score += 4;
        }
      }
    }

    // 3. Question individual token matches
    for (const w of words) {
      if (qNpLower.includes(w)) score += isNepali ? 6 : 3;
      if (qEnLower.includes(w)) score += isNepali ? 3 : 6;
    }

    // 4. Answer text matches
    for (const w of words) {
      if (item.answer_np.toLowerCase().includes(w)) score += isNepali ? 3 : 1;
      if (item.answer_en.toLowerCase().includes(w)) score += isNepali ? 1 : 3;
    }

    // 5. Category affinity boost
    if (clean.includes(item.category)) {
      score += 5;
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  // Threshold to avoid matching completely irrelevant queries
  if (highestScore >= 3) {
    return bestMatch;
  }

  return null;
}
