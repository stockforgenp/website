import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Scale,
  Receipt,
  Database,
  TrendingUp,
  Wallet,
  Users,
  Printer,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Zap,
  BarChart3,
  Layers,
  Clock,
  Keyboard,
  FileSpreadsheet,
  FileCode,
  UserCheck,
  Truck,
  Sun,
  Moon,
  Languages,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.tsx';

interface FeaturesSectionProps {
  onRequestDemo?: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onRequestDemo }) => {
  const { isNepali } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'inventory' | 'billing' | 'crm' | 'finance' | 'system' | 'experience'>('all');

  const categories = [
    { id: 'all', label: isNepali ? 'सबै सुविधाहरू' : 'All Features' },
    { id: 'inventory', label: isNepali ? 'इन्भेन्टरी र एकाइ' : 'Inventory & Units' },
    { id: 'billing', label: isNepali ? 'बिलिङ र इनभ्वाइस' : 'Billing & Invoicing' },
    { id: 'crm', label: isNepali ? 'ग्राहक र आपूर्तिकर्ता' : 'Customers & Vendors' },
    { id: 'experience', label: isNepali ? 'थिम र भाषा' : 'Theme & Language' },
    { id: 'finance', label: isNepali ? 'नाफा र पेरोल' : 'Profit & Payroll' },
    { id: 'system', label: isNepali ? 'अफलाइन र ब्याकअप' : 'Offline & Cloud Sync' },
  ];

  const features = [
    {
      category: 'inventory',
      icon: Scale,
      color: 'emerald',
      title: isNepali ? 'बहु-एकाइ इन्भेन्टरी (Multi-Unit)' : 'Granular Multi-Unit Inventory',
      subtitle: isNepali ? 'पिस, किलोग्राम, लिटर, दर्जन, प्याकेट' : 'Piece, kg, litre, dozen, packet & boxes',
      description: isNepali
        ? 'तपाईंको पसलका सामानहरू विभिन्न एकाइमा बिक्री गर्नुहोस्—जस्तै चामल (kg), तेल (litre), वा चाउचाउ (packet/piece)। बिक्री गर्दा वास्तविक समयमा स्टक घट्ने र न्यूनतम स्टक चेतावनी सुविधा।'
        : 'Sell loose, weighted, or packaged inventory with tailored unit designations (piece, kg, litre, dozen, packet, box). Automatic real-time deductions and configurable minimum stock alert notifications.',
      badges: ['kg, litre, pcs', 'Real-time Deduct', 'Min Stock Alert'],
    },
    {
      category: 'billing',
      icon: Receipt,
      color: 'teal',
      title: isNepali ? 'स्वचालित क्रमबद्ध बिलिङ र इनभ्वाइस' : 'Automated Sequential Billing & Invoicing',
      subtitle: isNepali ? 'BILL-YYYYMMDD-XXXX ढाँचा' : 'Standardized Invoicing Compliance',
      description: isNepali
        ? 'प्रत्येक बिक्री हुँदा स्वतः क्रमबद्ध बिल नम्बर सिर्जना हुन्छ। करयोग्य रकम, छुट तथा कर हिसाब गरी कुल जम्मा रकम (Grand Total) सुरक्षित भण्डारण गरिन्छ।'
        : 'Every sale automatically generates a unique sequential bill number (e.g. BILL-20261006-0042). Automatically computes subtotal, itemized tax breakdowns, and stores grand total securely.',
      badges: ['Sequential Bill #', 'Taxable Breakdown', 'Automated Grand Total'],
    },
    {
      category: 'system',
      icon: Database,
      color: 'cyan',
      title: isNepali ? '१००% अफलाइन SQLite ACID भण्डारण' : '100% Offline SQLite ACID Storage',
      subtitle: isNepali ? 'इन्टरनेट बिना तत्काल गति' : 'Zero Network Latency & Cloud Outage Immunity',
      description: isNepali
        ? 'ब्राउजरमै एकीकृत SQLite WebAssembly डेटाबेसमार्फत चल्ने भएकाले इन्टरनेट नभए पनि काउन्टर रोकिँदैन। स्थानीय कम्प्युटरमै १-क्लिकमा .db ब्याकअप र पुनर्स्थापना सम्भव।'
        : 'Powered by in-browser SQLite WebAssembly with true ACID transaction safety. Operates completely without internet connection, ensuring checkout never freezes during network outages.',
      badges: ['SQLite WASM', 'Zero Cloud Lag', '1-Click .db Backup'],
    },
    {
      category: 'system',
      icon: FileSpreadsheet,
      color: 'emerald',
      title: isNepali ? 'गुगल सिटमार्फत क्लाउड ब्याकअप र रिस्टोर' : 'Google Sheets Cloud Backup & Restore',
      subtitle: isNepali ? 'गुगल अनुमतिसहित क्लाउड ब्याकअप (इन्टरनेट आवश्यक)' : 'Authenticated Google Cloud Sync (Internet Required)',
      description: isNepali
        ? 'तपाईंले आफ्नो पसलको सम्पूर्ण डेटा गुगल सिटमार्फत ब्याकअप र रिस्टोर गर्न सक्नुहुन्छ। जब तपाईं "ब्याकअप" मा क्लिक गर्नुहुन्छ, ग्राहक गुगलसँग प्रमाणीकरण भई गुगल सिटको अनुमति मागिनेछ, र सामानहरू, बिक्री इतिहास, स्टक र खर्च सबै सुरक्षित रूपमा ब्याकअप हुनेछ। रिस्टोर गर्दा पनि सोही प्रक्रियामार्फत सिटबाट सम्पूर्ण डेटा पुनः स्थापना हुन्छ (यस कार्यका लागि इन्टरनेट आवश्यक पर्दछ)।'
        : 'Backup and restore all your store data through Google Sheets. When you click Backup, the client is securely authenticated with Google and prompted for Google Sheets permission, then all products, sales history, stock movements, and ledger data are backed up into your sheet. The same seamless flow applies when restoring records back into your store (internet connection required).',
      badges: ['Google Sheets', 'OAuth Permission', 'Cloud Backup & Restore', 'Internet Required'],
    },
    {
      category: 'system',
      icon: FileCode,
      color: 'teal',
      title: isNepali ? 'SQL फाइलमार्फत ब्याकअप र रिस्टोर (.sql)' : 'SQL File Backup & Restore (.sql)',
      subtitle: isNepali ? 'मानक SQL डम्प र १-क्लिक पुनर्स्थापना' : 'Standard SQL Dump & 1-Click Restore',
      description: isNepali
        ? 'तपाईंले आफ्नो पसलको सम्पूर्ण डेटा मानक SQL (.sql) फाइलमार्फत पनि ब्याकअप र रिस्टोर गर्न सक्नुहुन्छ। सम्पूर्ण तालिका संरचना, सामानहरू, बिक्री, स्टक मुभमेन्ट र दैनिक खर्चहरू पोर्टेबल SQL स्क्रिप्टको रूपमा सुरक्षित गर्न र कुनै पनि बेला १-क्लिकमा पुनः स्थापना गर्न सकिन्छ।'
        : 'You can also backup and restore your complete store database using standard SQL (.sql) files. Export entire schema tables, products, sales history, stock movements, and expense ledgers into portable SQL script dumps, and restore anytime with seamless 1-click execution.',
      badges: ['.sql File', 'Standard SQL Dump', '1-Click Restore', 'Offline Portable'],
    },
    {
      category: 'finance',
      icon: TrendingUp,
      color: 'amber',
      title: isNepali ? 'वास्तविक नाफा विश्लेषण र COGS' : 'Real-Time Gross Profit & COGS Analytics',
      subtitle: isNepali ? 'खरिद मूल्य स्न्यापसट' : 'Precision Profit Margins',
      description: isNepali
        ? 'बिक्री गर्दाको खरिद मूल्यलाई ऐतिहासिक स्न्यापसटको रूपमा सुरक्षित गरिन्छ, जसले गर्दा मूल्य परिवर्तन भए पनि तपाईंको वास्तविक कुल नाफा (Gross Profit) र मार्जिन शतप्रतिशत सही रहन्छ।'
        : 'Snapshots original purchase cost at the exact second of sale, ensuring your Cost of Goods Sold (COGS), gross revenue, and profit margins remain mathematically accurate even when prices change later.',
      badges: ['COGS Tracking', 'Historical Snapshots', 'Gross Margin %'],
    },
    {
      category: 'finance',
      icon: Users,
      color: 'blue',
      title: isNepali ? 'कर्मचारी विवरण र पेरोल व्यवस्थापन' : 'Staff Directory & Payroll Management',
      subtitle: isNepali ? 'मासिक तलब र भौचर' : 'Disbursements & Salary Slips',
      description: isNepali
        ? 'कर्मचारीको प्रोफाइल, पद, आधारभूत तलब, र मासिक भुक्तानी भौचर व्यवस्थापन गर्नुहोस्। एक क्लिकमा तलब भुक्तानी रेकर्ड र पेरोल रसिद तयार।'
        : 'Maintain staff records, track roles and monthly salaries, disburse wages with automated payment reference codes, and generate printable salary vouchers in seconds.',
      badges: ['Salary Ledger', 'Monthly Slips', 'Staff Roles'],
    },
    {
      category: 'finance',
      icon: Wallet,
      color: 'rose',
      title: isNepali ? 'दैनिक सञ्चालन खर्च खाता' : 'Daily Operational Expense Ledger',
      subtitle: isNepali ? 'भाडा, बिजुली, ढुवानी आदि' : 'Bottom-Line Net Profit Clarity',
      description: isNepali
        ? 'पसलको दैनिक खर्चहरू—घरभाडा, बिजुली, प्याकेजिङ, र यातायात—विभाजन गरेर दर्ता गर्नुहोस्। कुल नाफाबाट खर्च घटाएर पसलको वास्तविक खुद नाफा पत्ता लगाउनुहोस्।'
        : 'Track recurring and ad-hoc overhead expenses (shop rent, electricity, courier, packaging, repairs). Combines gross profit with expenses to deliver true bottom-line net profit.',
      badges: ['Expense Categories', 'Receipt Attachments', 'Net Profit Metric'],
    },
    {
      category: 'billing',
      icon: Printer,
      color: 'emerald',
      title: isNepali ? 'थर्मल रसिद प्रिन्टिङ (Thermal POS)' : 'High-Speed Thermal Receipt Printing',
      subtitle: isNepali ? '80mm र 58mm प्रिन्टर अनुकूल' : 'Formatted Store Slips with Tax Breakdown',
      description: isNepali
        ? 'स्ट्यान्डर्ड ८०mm र ५८mm थर्मल प्रिन्टरमा पसलको नाम, फोन, ग्राहक जानकारी, वस्तु एकाइ, कर तथा छुट विवरण, र कृतज्ञता सन्देशसहित द्रुत रसिद छाप्नुहोस्।'
        : 'Instant one-click thermal printing formatted for standard 80mm & 58mm retail receipt printers. Shows store header, customer info, unit breakdown, tax breakdown, and footer notes.',
      badges: ['80mm / 58mm Support', 'Receipt Breakdown', 'Custom Header'],
    },
    {
      category: 'crm',
      icon: UserCheck,
      color: 'emerald',
      title: isNepali ? 'ग्राहक विवरण तथा उधारो खाता (Khata)' : 'Customer Directory & Credit Khata Ledger',
      subtitle: isNepali ? 'खरिद इतिहास, बाँकी उधारो र भुक्तानी' : 'Profiles, Purchase History & Credit Tracking',
      description: isNepali
        ? 'नियमित ग्राहकहरूको नाम, फोन नम्बर र खरिद इतिहास सुरक्षित राख्नुहोस्। ग्राहकको उधारो खाता (Khata) मार्फत बाँकी बक्यौता रकम, भुक्तानी सीमा, आंशिक भुक्तानी, र रसिद रेकर्ड सहजै व्यवस्थापन गर्नुहोस्।'
        : 'Maintain a unified customer directory with contact information, purchase history, and visit frequencies. Track customer credit (उधारो / Khata) ledgers with real-time balance calculations, settled invoices, credit limits, and receipt reconciliation.',
      badges: ['Customer Directory', 'Credit Khata Ledger', 'Purchase History', 'Due Balance Alerts'],
    },
    {
      category: 'crm',
      icon: Truck,
      color: 'teal',
      title: isNepali ? 'आपूर्तिकर्ता (Vendor) तथा खरिद खाता' : 'Vendor & Supplier Directory Ledger',
      subtitle: isNepali ? 'थोक बिक्रेता विवरण, खरिद बिल र भुक्तानी' : 'Wholesale Suppliers, POs & Accounts Payable',
      description: isNepali
        ? 'थोक बिक्रेता तथा वितरक (Suppliers) को सूची, सम्पर्क नम्बर, र खरिद बिलहरू एकै ठाउँमा व्यवस्थापन गर्नुहोस्। भेन्डरलाई तिर्न बाँकी रकम (Accounts Payable), भुक्तानी मिति, र स्टक आपूर्ति इतिहास सजिलै निगरानी गर्नुहोस्।'
        : 'Organize wholesale distributors, suppliers, and purchase orders in one dedicated directory. Track vendor accounts payable, incoming batch shipments, outstanding dues, payment schedules, and invoice histories seamlessly.',
      badges: ['Vendor Directory', 'Accounts Payable', 'Purchase Bills', 'Payment Terms'],
    },
    {
      category: 'system',
      icon: Keyboard,
      color: 'purple',
      title: isNepali ? 'किबोर्ड सर्टकट र द्रुत काउन्टर' : 'High-Velocity Cashier Shortcuts',
      subtitle: isNepali ? 'F2, Enter, बारकोड स्क्यानर' : 'Sub-Second Checkout Flow',
      description: isNepali
        ? 'माउस नचलाई सिधै किबोर्डबाट बिक्री सुरु गर्नुहोस् (F2), बारकोड स्क्यान गर्नुहोस्, र तत्काल बिल भुक्तानी गर्नुहोस्। व्यस्त समयमा ग्राहकको लामो लाइन चाँडै व्यवस्थापन।'
        : 'Engineered for high-volume cashiers. Seamless barcode scanner integration, F2 instant sale, auto-quantity steppers, and quick checkout so you never have long lines at the counter.',
      badges: ['Barcode Scanner', 'F2 Quick Sale', 'Zero Mouse Dependency'],
    },
    {
      category: 'experience',
      icon: Sun,
      color: 'amber',
      title: isNepali ? 'डार्क र लाइट थिम मोड (Dark & Light Theme)' : 'Dark & Light Theme Mode Toggle',
      subtitle: isNepali ? 'काउन्टर र रात्रिकालीन सिफ्ट अनुकूल' : 'Ergonomic Viewing for Prolonged Cashier Shifts',
      description: isNepali
        ? '१-क्लिकमै उच्च-कन्ट्रास्ट डार्क मोड र सफा लाइट मोडबीच स्विच गर्नुहोस्। दिनभर काउन्टरमा बस्ने क्यासियर तथा पसलेको आँखालाई तनावमुक्त राख्न विशेष रूपमा अनुकूलित।'
        : 'Effortlessly toggle between crisp high-contrast dark mode and clean daylight mode with 1-click. Designed for visual comfort during prolonged cashier shifts, reducing eye strain and counter fatigue.',
      badges: ['Dark & Light Modes', '1-Click Toggle', 'Eye Ergonomics', 'Preference Persist'],
    },
    {
      category: 'experience',
      icon: Languages,
      color: 'emerald',
      title: isNepali ? 'द्विभाषिक प्रणाली (नेपाली / English Switch)' : 'Bilingual Switch (English / नेपाली)',
      subtitle: isNepali ? 'नेपाली र अङ्ग्रेजी इन्टरफेस तथा मुद्रा' : 'Native English & Nepali UI with Currency Sync',
      description: isNepali
        ? 'सम्पूर्ण स्क्रिन, मेनु, बिलिङ, र रिपोर्टहरू १-क्लिकमा नेपाली वा अङ्ग्रेजी भाषामा परिवर्तन गर्नुहोस्। भाषा परिवर्तनसँगै मुद्रा चिन्ह (रु. / Rs.) र वित्तीय शब्दावली स्वतः समायोजन हुन्छ।'
        : 'Instant zero-reload language switching between English and Nepali across all counter interfaces, reports, and receipts. Automatically synchronizes currency representations (रु. / Rs.) and terminology.',
      badges: ['English & नेपाली', 'Instant UI Switch', 'रु. / Rs. Sync', 'Zero Reload'],
    },
  ];

  const filteredFeatures =
    activeCategory === 'all'
      ? features
      : features.filter((f) => f.category === activeCategory);

  return (
    <section id="features" className="py-20 bg-neutral-900/40 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>{isNepali ? 'शक्तिशाली इन्जिनका सुविधाहरू' : 'Enterprise Capabilities'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight">
            {isNepali ? (
              <>
                तपाईंको पसललाई प्रभावकारी बनाउने{' '}
                <span className="text-emerald-400">सम्पूर्ण आधुनिक सुविधाहरू</span>
              </>
            ) : (
              <>
                Engineered for Speed, Precision, and{' '}
                <span className="text-emerald-400">Total Offline Independence</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-neutral-400">
            {isNepali
              ? 'साना किराना पसलदेखि ठूला सुपरमार्ट र निर्माण सामग्री विक्रेतासम्मका लागि आवश्यक सबै उपकरणहरू एउटै सफ्टवेयरमा।'
              : 'From corner grocery marts to bustling supermarkets and hardware distributors, StockForge delivers comprehensive retail control without cloud lock-in.'}
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                    : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-950/80 border border-neutral-800/90 hover:border-emerald-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-neutral-100 mb-1 group-hover:text-emerald-400 transition-colors">
                    {feat.title}
                  </h3>

                  <div className="text-[11px] font-mono text-neutral-400 mb-3">
                    {feat.subtitle}
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
                ? 'के तपाईं आफ्नो पसलमा क्रमबद्ध बिलिङ र बहु-एकाइ इन्भेन्टरी परीक्षण गर्न तयार हुनुहुन्छ?'
                : 'Ready to experience zero-lag sequential billing & multi-unit tracking?'}
            </h4>
            <p className="text-xs text-neutral-400">
              {isNepali
                ? 'कुनै क्रेडिट कार्ड वा इन्टरनेट आवश्यक छैन। तुरुन्तै सुरु गर्नुहोस्।'
                : 'No monthly cloud subscription lock-in. 100% offline-ready immediately.'}
            </p>
          </div>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center gap-2 shrink-0 shadow-md transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isNepali ? 'डेमो अनुरोध गर्नुहोस्' : 'Request Demo'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
