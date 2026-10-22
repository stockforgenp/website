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
  Calendar,
  BookOpen,
  CheckCircle2,
  BadgeCheck,
  FileText,
  CreditCard,
  Boxes,
  Tag,
  RotateCcw,
  Barcode,
  AlertOctagon,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext.tsx";

export const FeaturesSection = () => {
  const { isNepali } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filterTabs = [
    { id: "all", label_en: "All Features", label_np: "सबै सुविधाहरू" },
    {
      id: "dues_crm",
      label_en: "Dues & Ledgers",
      label_np: "बाँकी, लेजर र फर्स्यौट",
    },
    { id: "billing", label_en: "Billing & Receipts", label_np: "बिलिङ र रसिद" },
    {
      id: "finance",
      label_en: "Profit & Expenses",
      label_np: "नाफा तथा खर्च",
    },
    { id: "inventory", label_en: "Multi-Unit Stock", label_np: "एकाइ र स्टक" },
    { id: "system", label_en: "Offline & Backups", label_np: "अफलाइन र ब्याकअप" },
  ];

  const features = [
    {
      category: "finance",
      icon: BookOpen,
      color: "cyan",
      title: isNepali
        ? "दैनिक हिसाब किताब (Daily Book / Day Book)"
        : "Daily Book (Day Book Ledger)",
      subtitle: isNepali
        ? "ओपनिङ ब्यालेन्स, दैनिक नगद प्रवाह (+डेबिट/-क्रेडिट) र बाँकी अडिट"
        : "Opening balance, daily cash flow (+debit/-credit) & dues audit",
      description: isNepali
        ? "बिक्री, खरिद, खर्च, ग्राहक बाँकी संकलन, भेन्डर भुक्तानी, तलब र फिर्ताको सम्पूर्ण दैनिक कारोबार एउटै ठाउँमा। ओपनिङ क्यास ब्यालेन्स, दैनिक खुद नगद प्रवाह र क्लोजिङ ब्यालेन्सको स्पष्ट हिसाब। साथै, १-क्लिकमा A4 वा ८०mm थर्मल प्रिन्ट रिपोर्ट!"
        : "A dedicated double-entry day book auditing daily transactions across Sales, Purchases, Expenses, Customer Due Collections, Vendor Due Payments, Staff Salaries, and Returns. Calculates real Opening Cash Balance, Inflow (+Debit), Outflow (-Credit), Net Cash in Hand, and Closing Balance with 1-click A4 & 80mm thermal reports.",
      badges: [
        "Day Book (रोजिन्दा)",
        "Opening & Closing Balance",
        "+Debit & -Credit Cash Flow",
        "Payment Mode Summary",
        "A4 & 80mm Print Reports",
      ],
    },
    {
      category: "billing",
      icon: CreditCard,
      color: "emerald",
      title: isNepali
        ? "बहु-माध्यम भुक्तानी (Multi-Mode Payments)"
        : "Multi-Mode Payment Tracking",
      subtitle: isNepali
        ? "नगद, Fonepay / QR, बैंक ट्रान्सफर, चेक र उधारो विभाजन"
        : "Split & audit Cash, Online/QR, Bank Transfer, Cheque & Credit",
      description: isNepali
        ? "काउन्टर बिलिङ, खरिद, पसल खर्च, पेरोल र बाँकी फर्स्यौट गर्दा भुक्तानी माध्यम (नगद, Fonepay/QR, बैंक, चेक वा उधारो) प्रविष्ट गर्नुहोस्। दिनभर कुन माध्यमबाट कति रकम आयो वा गयो, डे-बुक र लेजरमा १ सेकेन्डमै अडिट हुन्छ।"
        : "Record explicit payment modes (Cash, Online/QR like Fonepay/eSewa/Khalti, Bank Transfer, Cheque, or Store Credit) across checkout sales, purchase restocks, operating expenses, payroll, and debt settlements. Instantly audit physical drawer cash vs digital receipts.",
      badges: [
        "Cash & Till Float",
        "Fonepay / QR / eSewa",
        "Bank & Cheque",
        "Store Credit / Khata",
        "Channel Breakdown",
      ],
    },
    {
      category: "inventory",
      icon: Boxes,
      color: "amber",
      title: isNepali
        ? "ब्याच तथा म्याद ट्र्याकिङ (FEFO)"
        : "Batch & Expiry Tracking (FEFO)",
      subtitle: isNepali
        ? "ब्याच अनुसार मौज्दात र ३०-दिने म्याद अलर्ट"
        : "Batch-wise stock with automated 30-day expiry radar",
      description: isNepali
        ? "औषधि, किराना तथा कस्मेटिक्सका लागि ब्याच नं., उत्पादन र म्याद सकिने मिति ट्र्याकिङ। बिलिङमा स्वतः पहिले म्याद सकिने ब्याच (FEFO) बाट स्टक घट्छ।"
        : "Enterprise batch-lot tracking with FEFO (First Expiring, First Out) automated depletion. Track manufacturing and expiry dates, get 30-day early warnings, and prevent selling expired goods.",
      badges: ["Batch # Lots", "FEFO Auto-Depletion", "30-Day Expiry Radar", "Receipt Batch Printing"],
    },
    {
      category: "billing",
      icon: Tag,
      color: "teal",
      title: isNepali
        ? "थोक तथा खुद्रा दोहोरो मूल्य (Wholesale Pricing)"
        : "Wholesale vs. Retail Dual Pricing",
      subtitle: isNepali
        ? "ग्राहक वर्ग वा न्यूनतम परिमाणका आधारमा स्वतः थोक दर"
        : "Tiered pricing by customer type or volume thresholds",
      description: isNepali
        ? "एउटै उत्पादनमा खुद्रा (MRP) र थोक मूल्य सेट गर्नुहोस्। थोक ग्राहक छान्दा वा न्यूनतम अर्डर परिमाण पुग्दा काउन्टरमा स्वतः थोक दर लागू हुन्छ। १-क्लिकमा दर फेर्न सकिने!"
        : "Define both retail and wholesale rates per product with minimum volume triggers. When selecting a wholesale buyer or meeting quantity thresholds, StockForge automatically applies wholesale pricing.",
      badges: ["Dual Pricing", "Wholesale Slab Qty", "Auto Customer Tier", "1-Click Rate Switch"],
    },
    {
      category: "inventory",
      icon: Layers,
      color: "cyan",
      title: isNepali
        ? "एकाइ तथा प्याकेजिङ रूपान्तरण (Multi-UOM Hierarchy)"
        : "Multi-UOM & Packaging Hierarchy",
      subtitle: isNepali
        ? "१ कार्टुन = २४ पिस, १ बोरा = २५ केजी स्वतः स्टक रूपान्तरण"
        : "Seamless bulk-to-loose packaging conversion (1 Ctn = 24 pcs)",
      description: isNepali
        ? "थोक कार्टुन, पेटी, बोरा वा क्यारेटमा खरिद गर्नुहोस् र खुद्रा पिस वा लिटरमा बिक्री गर्नुहोस्। खरिद तथा बिक्री दुवैमा स्वतः गुणक (Multiplier) अनुसार आधारभूत मौज्दात समायोजन हुन्छ।"
        : "Configure nested packaging tiers (e.g. 1 Carton = 24 pcs, 1 Sack = 25 kg). Sell or purchase by package or loose units with automated base inventory deduction and package-specific pricing.",
      badges: ["Multi-UOM Hierarchy", "Carton-to-Pcs Conversion", "Package Multipliers", "Dual POS Selector"],
    },
    {
      category: "inventory",
      icon: Barcode,
      color: "emerald",
      title: isNepali
        ? "बारकोड तथा सेल्फ ट्याग प्रिन्ट (Barcode Generator)"
        : "Barcode & Shelf Tag Generator",
      subtitle: isNepali
        ? "थर्मल स्टिकर (50x25mm) र सुपरमार्केट सेल्फ मूल्य ट्याग"
        : "Direct thermal stickers & supermarket shelf edge price tags",
      description: isNepali
        ? "पसलको आफ्नै बारकोड लेबल र सेल्फ ट्याग तत्काल प्रिन्ट गर्नुहोस्। TSC, Xprinter, Zebra वा A4 ग्रिडमा मूल्य (MRP), ब्याच नं., म्याद र पसलको नामसहित अफलाइन बारकोड उत्पादन।"
        : "Generate and print professional Code 128 retail barcodes and shelf edge tags directly from your product catalog. Compatible with TSC, Xprinter, Zebra thermal roll printers (50x25mm / 38x25mm) and standard A4 label sheets, with price, MRP, batch, and expiry overlays.",
      badges: ["Code 128 Barcodes", "50x25mm Thermal Roll", "Supermarket Shelf Tags", "Batch & MRP Overlays", "A4 Label Sheets"],
    },
    {
      category: "inventory",
      icon: AlertOctagon,
      color: "rose",
      title: isNepali
        ? "ड्यामेज, म्याद नाघेका र नोक्सानी व्यवस्थापन (Write-Off & Scrap)"
        : "Damaged & Expired Stock Write-Off",
      subtitle: isNepali
        ? "क्वारेन्टाइन, नष्ट वाउचर (WO-...) र नाफा-नोक्सान खर्च समायोजन"
        : "Quarantine radar, scrap vouchers (WO-...) & P&L loss posting",
      description: isNepali
        ? "म्याद नाघेका, फुटेका, कुहिएका वा हराएका सामानलाई बिक्री हुनबाट रोक्न छुट्टै क्वारेन्टाइन गर्नुहोस्। नष्ट गर्दा औपचारिक वाउचर (WO-...) जारी हुने, स्टक स्वतः घट्ने र चाहेमा खरिद मूल्यलाई नोक्सानी खर्चका रूपमा नाफा-नोक्सान हिसाबमा देखाउने सुविधा।"
        : "Isolate expired and damaged inventory in a dedicated quarantine radar. Issue formal Scrap Vouchers (WO-...), deduct units from live stock, and optionally book the cost loss into your expense ledger so financial bottom-line profits remain 100% honest and audited.",
      badges: [
        "Quarantine Segregation",
        "Scrap Vouchers (WO-...)",
        "Automated Stock Deduction",
        "P&L Spoilage Expense",
        "Loss Value Analytics",
      ],
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
      badges: ["Sequential Bill #", "Tax Breakdown", "Instant Total"],
    },
    {
      category: "dues_crm",
      icon: UserCheck,
      color: "emerald",
      title: isNepali
        ? "ग्राहक उधारो तथा बाँकी बक्यौता (Customer Dues)"
        : "Customer Dues & Credit Khata",
      subtitle: isNepali
        ? "साविकको बाँकी + हालको बिल = कुल बाँकी स्वतः हिसाब"
        : "Auto Previous + Current Due = Total Due Math",
      description: isNepali
        ? "काउन्टरमा बिल काट्दा ग्राहकको साविकको बाँकी, हालको बाँकी र आंशिक भुक्तानीपछि बाँकी रहने कुल रकम रसिद तथा खातामा स्वतः हिसाब हुन्छ। कुनै म्यानुअल क्यालकुलेटर चाहिँदैन!"
        : "Accept partial payments at counter checkout without manual math. Automatically calculates Previous Due + Current Bill Due = Total Due Balance and itemizes all amounts directly on printed thermal receipts.",
      badges: [
        "Credit Khata",
        "Previous + Current Due",
        "Receipt Breakdown",
        "Customer Directory",
      ],
    },
    {
      category: "dues_crm",
      icon: Truck,
      color: "teal",
      title: isNepali
        ? "आपूर्तिकर्ता (Vendor) तथा खरिद बाँकी बक्यौता"
        : "Vendor Management & Accounts Payable",
      subtitle: isNepali
        ? "थोक खरिद बिल, आंशिक भुक्तानी र आपूर्तिकर्ता बक्यौता"
        : "Wholesale restock invoices & supplier payables",
      description: isNepali
        ? "थोक आपूर्तिकर्ताहरूको सम्पर्क, खरिद इनभ्वाइसहरू, भुक्तानी गरिएको रकम र तिर्न बाँकी बक्यौता एकै ठाउँमा व्यवस्थापन गर्नुहोस्। कुन सप्लायरलाई कति रकम कहिले तिर्नुपर्ने हो, तत्काल हेर्नुहोस्।"
        : "Track wholesale distributors, restock purchase invoices, cash paid, and outstanding accounts payable in one central hub. Maintain strong supplier relationships and plan inventory cash flow with ease.",
      badges: [
        "Vendor Directory",
        "Accounts Payable",
        "Purchase Invoices",
        "Restock History",
      ],
    },
    {
      category: "dues_crm",
      icon: BookOpen,
      color: "cyan",
      title: isNepali
        ? "व्यक्तिगत ग्राहक र भेन्डर लेजर (Party Statements)"
        : "Dedicated Party Ledgers & Statements",
      subtitle: isNepali
        ? "प्रत्येक ग्राहक र आपूर्तिकर्ताको पूर्ण खाता विवरण"
        : "Full chronological transaction ledger with print statements",
      description: isNepali
        ? "हरेक ग्राहक र भेन्डरको छुट्टाछुट्टै विस्तृत लेजर खाता। मितिअनुसार सम्पूर्ण खरिद/बिक्री बिल, डेबिट-क्रेडिट, भुक्तानी र चालु बक्यौता (Running Balance) हेर्नुहोस् र १-क्लिकमा थर्मल वा A4 स्टेटमेन्ट प्रिन्ट गर्नुहोस्।"
        : "Access an individualized chronological transaction ledger for every customer and vendor. View all invoices, debits, credits, payments, and running balances, with 1-click printable statements in 80mm thermal or A4 formats.",
      badges: [
        "Individual Ledgers",
        "Debit & Credit Entries",
        "Running Balance",
        "Print Statement (A4/Thermal)",
      ],
    },
    {
      category: "dues_crm",
      icon: CheckCircle2,
      color: "amber",
      title: isNepali
        ? "१-क्लिक रकम फर्स्यौट र भुक्तानी रसिद (Settlement)"
        : "1-Click Dues Settlement & Payment Receipts",
      subtitle: isNepali
        ? "नगद, eSewa, Khalti, बैंकबाट तत्काल बाँकी चुक्ता"
        : "Settle dues in full or partial with instant vouchers",
      description: isNepali
        ? "ग्राहकबाट बाँकी रकम संकलन गर्दा वा भेन्डरलाई भुक्तानी गर्दा कुल बाँकी वा निश्चित बिल नम्बरअनुसार १-क्लिकमा रकम फर्स्यौट गर्नुहोस्। नगद, बैंक, eSewa, Khalti, ConnectIPS मार्फत फर्स्यौट गरी तत्काल भुक्तानी रसिद निकाल्नुहोस्।"
        : "Settle outstanding balances seamlessly against the entire account balance or specific bill numbers. Supports Cash, Bank Transfer, eSewa, Khalti, ConnectIPS, and Cheque with automated printable settlement vouchers.",
      badges: [
        "Full / Partial Settlement",
        "Bill-Specific Settlement",
        "eSewa, Khalti, Bank",
        "Printable Payment Receipts",
      ],
    },
    {
      category: "dues_crm",
      icon: RotateCcw,
      color: "rose",
      title: isNepali
        ? "फिर्ता तथा क्रेडिट र डेबिट नोट (Returns & Notes)"
        : "Returns & Credit / Debit Notes",
      subtitle: isNepali
        ? "बिक्री तथा खरिद फिर्ता, रिस्टक वा ड्यामेज राइट-अफ"
        : "Customer & vendor returns with restock or damage write-off",
      description: isNepali
        ? "ग्राहक बिक्री फिर्ताका लागि क्रमबद्ध क्रेडिट नोट (CN-...) र आपूर्तिकर्ता खरिद फिर्ताका लागि डेबिट नोट (DN-...) जारी गर्नुहोस्। बिग्रेका सामान नष्ट (Damaged Write-off) गर्ने वा सुरक्षित सामान स्वतः स्टकमा फर्काउने (Restock) विकल्प र खाता मिलान।"
        : "Issue sequential Credit Notes (CN-...) for customer sales returns and Debit Notes (DN-...) for vendor purchase returns. Choose whether returned goods are restocked into live inventory or written off as damaged, with automatic khata ledger balance adjustments.",
      badges: [
        "Credit Notes (CN-...)",
        "Debit Notes (DN-...)",
        "Restock vs. Damaged Write-off",
        "Khata Balance Adjustment",
      ],
    },
    {
      category: "billing",
      icon: Wallet,
      color: "amber",
      title: isNepali
        ? "काउन्टर सिफ्ट तथा क्यास ड्रयर (Shift Management)"
        : "Cash Drawer & Shift Management",
      subtitle: isNepali
        ? "ओपनिङ फ्लोट, दिनभरको क्यास रिकन्सिलिएसन र ओभर/सर्ट हिसाब"
        : "Opening float, live drawer balance & cash over/short variance",
      description: isNepali
        ? "क्यासियर सिफ्ट व्यवस्थापन र ड्रयर सुरक्षा। सुरुमा ओपनिङ क्यास फ्लोट राख्नुहोस्, काउन्टर बन्द गर्दा वास्तविक गनेको क्यास प्रविष्टि गरी प्रणालीको हिसाबसँग स्वतः मिलान गर्नुहोस्। बढी वा घटी (Variance) र Z-Report स्लिप तत्काल प्रिन्ट!"
        : "Streamline cashier shift handovers with opening till floats, live drawer balance tracking, physical cash counting, and automated cash over/short variance auditing. Generate comprehensive end-of-shift Z-Reports on 80mm thermal receipts.",
      badges: [
        "Opening Float",
        "Physical Till Count",
        "Over/Short Variance",
        "Z-Report Slips",
        "Cashier Audit Trail",
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
    {
      category: "experience",
      icon: Calendar,
      color: "teal",
      title: isNepali
        ? "विक्रम संवत् मिति र क्यालेन्डर (Bikram Sambat B.S.)"
        : "Offline Bikram Sambat (B.S.) Nepali Calendar",
      subtitle: isNepali
        ? "नेपाली महिना (बैशाख - चैत) र वि.सं./ई.सं. स्विच"
        : "Official B.S. dates on bills with 1-click A.D. toggle",
      description: isNepali
        ? "बिल, रसिद, पेरोल र लेखा रिपोर्टहरूमा स्वचालित रूपमा विक्रम संवत् (वि.सं.) मिति। सेटिङ्सबाट सजिलै वि.सं. वा ई.सं. (A.D.) छान्नुहोस्—१००% अफलाइन क्यालेन्डर इन्जिन!"
        : "Native Bikram Sambat date formatting enabled by default across retail bills, salary slips, and accounting ledgers. Switch between B.S. and A.D. in Settings anytime offline with zero network required.",
      badges: [
        "Bikram Sambat (B.S.)",
        "100% Offline B.S. Engine",
        "B.S. & A.D. Toggle",
        "Nepali Fiscal Accounting",
      ],
    },
  ];

  const displayedFeatures =
    activeCategory === "all"
      ? features
      : features.filter((f) => f.category === activeCategory);

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

          {/* Interactive Feature Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                    isActive
                      ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/40 shadow-xs"
                      : "bg-neutral-900/60 text-neutral-400 hover:text-neutral-200 border-neutral-800 hover:border-neutral-700"
                  }`}
                >
                  {isNepali ? tab.label_np : tab.label_en}
                </button>
              );
            })}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedFeatures.map((feat, idx) => {
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
