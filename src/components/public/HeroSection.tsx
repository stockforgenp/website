import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Receipt,
  Scale,
  Database,
  Printer,
  Plus,
  Minus,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.tsx';

interface HeroSectionProps {
  onExploreFeatures: () => void;
  onRequestDemo: () => void;
  onContactUs?: () => void;
}

interface DemoItem {
  id: number;
  name: string;
  unit: string;
  price: number;
  qty: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreFeatures,
  onRequestDemo,
  onContactUs,
}) => {
  const { isNepali } = useLanguage();

  // Interactive Live POS Simulation state inside Hero
  const [demoItems, setDemoItems] = useState<DemoItem[]>([
    { id: 1, name: 'Basmati Super Rice', unit: 'kg', price: 160, qty: 5 },
    { id: 2, name: 'Pure Mustard Oil', unit: 'litre', price: 290, qty: 2 },
    { id: 3, name: 'Organic Masala Tea', unit: 'packet', price: 220, qty: 3 },
    { id: 4, name: 'Fresh Farm Eggs', unit: 'piece', price: 18, qty: 12 },
  ]);

  const [appliedDiscount] = useState<number>(50);

  const updateQty = (id: number, delta: number) => {
    setDemoItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextQty = Math.max(1, Math.min(99, item.qty + delta));
          return { ...item, qty: nextQty };
        }
        return item;
      })
    );
  };

  const currencySymbol = isNepali ? 'रु.' : 'Rs.';
  const subtotal = demoItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const taxableAmount = Math.max(0, subtotal - appliedDiscount);
  const vatRate = 13.0; // Standard tax rate
  const vatAmount = Math.round((taxableAmount * vatRate) / 100);
  const grandTotal = taxableAmount + vatAmount;

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wide"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>
                {isNepali
                  ? '१००% अफलाइन · स्वचालित क्रमबद्ध बिलिङ · बहु-एकाइ इन्भेन्टरी'
                  : '100% Offline-First · Automated Sequential Billing · Multi-Unit Engine'}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-neutral-100 tracking-tight leading-[1.15]"
            >
              {isNepali ? (
                <>
                  आधुनिक खुद्रा पसलका लागि{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                    शून्य-विलम्ब अफलाइन POS
                  </span>{' '}
                  र इन्भेन्टरी प्रणाली
                </>
              ) : (
                <>
                  The Zero-Latency{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                    Offline POS & Inventory
                  </span>{' '}
                  Engine for Modern Retail
                </>
              )}
            </motion.h1>

            {/* Sub-headline description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {isNepali
                ? 'इन्टरनेट नहुँदा पनि तपाईंको पसल कहिल्यै रोकिँदैन। किलोग्राम, लिटर वा पिसमा सामान व्यवस्थापन, प्रत्येक बिक्रीमा स्वचालित क्रमबद्ध बिल नम्बर, नाफा/नोक्सान विश्लेषण, र कर्मचारी पेरोल — सबै एउटै उच्च-गतिको SQLite प्रणालीमा।'
                : 'Never freeze your counter when the internet drops. Manage multi-unit stock (piece, kg, litre, packet), generate automated sequential bill numbers, track gross profits, and manage staff salaries with total ACID SQLite reliability.'}
            </motion.p>

            {/* Primary Action Buttons: Request Demo & Contact Us (Both point to /contact) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
            >
              <button
                onClick={onRequestDemo}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm flex items-center gap-2.5 shadow-lg shadow-emerald-900/40 hover:shadow-emerald-900/60 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isNepali ? 'डेमो अनुरोध गर्नुहोस्' : 'Request a Live Demo'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreFeatures}
                className="px-5 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white font-semibold text-sm border border-neutral-800 hover:border-neutral-700 transition-all cursor-pointer"
              >
                {isNepali ? 'सुविधाहरू हेर्नुहोस्' : 'Explore Platform Features'}
              </button>

              <button
                onClick={onContactUs || onRequestDemo}
                className="px-4 py-3.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4 cursor-pointer"
              >
                {isNepali ? 'सम्पर्क गर्नुहोस् / सोधपुछ →' : 'Contact Support Hub →'}
              </button>
            </motion.div>

            {/* Quick Proof Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-neutral-800/60 text-left"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <Database className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-200">100% Offline</div>
                  <div className="text-[10px] text-neutral-400">Zero cloud lag</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <Receipt className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-200">Sequential Bill</div>
                  <div className="text-[10px] text-neutral-400">Auto sequential</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <Scale className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-200">Multi-Unit</div>
                  <div className="text-[10px] text-neutral-400">kg, litre, pcs, box</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-200">ACID SQLite</div>
                  <div className="text-[10px] text-neutral-400">Total data privacy</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Live Interactive POS Simulator Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-neutral-900/90 border border-neutral-800 rounded-2xl shadow-2xl p-4 sm:p-5 relative overflow-hidden backdrop-blur-xl"
            >
              {/* Simulator Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-neutral-200">
                    {isNepali ? 'प्रत्यक्ष बिलिङ सिमुलेटर' : 'Live POS Billing Demo'}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  BILL-20261006-0042
                </div>
              </div>

              {/* Multi-Unit Cart items list */}
              <div className="space-y-2 mb-4">
                <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider flex justify-between">
                  <span>{isNepali ? 'वस्तु / एकाइ' : 'Item / Unit'}</span>
                  <span>{isNepali ? 'रकम' : 'Subtotal'}</span>
                </div>

                {demoItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2 rounded-lg bg-neutral-950/70 border border-neutral-800/70 hover:border-neutral-700 transition-colors"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold text-neutral-200 truncate">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-neutral-400 font-mono">
                        {currencySymbol} {item.price} / {item.unit}
                      </div>
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center gap-1 mx-3">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-5 h-5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center justify-center text-xs cursor-pointer"
                        title="Reduce quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-emerald-400 font-mono min-w-8 text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-5 h-5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center justify-center text-xs cursor-pointer"
                        title="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-xs font-bold text-neutral-100 font-mono text-right shrink-0">
                      {currencySymbol} {(item.price * item.qty).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tax & Grand Total Breakdown Card */}
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800/90 space-y-1.5 font-mono text-xs">
                <div className="flex justify-between text-neutral-400">
                  <span>{isNepali ? 'उपकुल (Subtotal):' : 'Item Subtotal:'}</span>
                  <span>{currencySymbol} {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>{isNepali ? 'छुट (Discount):' : 'Discount:'}</span>
                  <span className="text-amber-400">- {currencySymbol} {appliedDiscount}</span>
                </div>
                <div className="flex justify-between text-neutral-300 font-semibold pt-1 border-t border-neutral-800/80">
                  <span>{isNepali ? 'करयोग्य रकम (Taxable):' : 'Taxable Amount:'}</span>
                  <span>{currencySymbol} {taxableAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span className="flex items-center gap-1">
                    <Receipt className="w-3 h-3" />
                    <span>{isNepali ? 'कर / हिसाब (Tax & Invoicing):' : 'Tax & Invoicing:'}</span>
                  </span>
                  <span>+ {currencySymbol} {vatAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-base font-black text-white pt-2 border-t border-neutral-700/80">
                  <span className="text-neutral-100">
                    {isNepali ? 'कुल जम्मा (Grand Total):' : 'Grand Total:'}
                  </span>
                  <span className="text-emerald-400 font-mono">
                    {currencySymbol} {grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Bottom Interactive CTA: Points to /contact demo request */}
              <div className="mt-3 pt-3 flex items-center justify-between text-xs">
                <span className="text-[11px] text-neutral-400 flex items-center gap-1 font-mono">
                  <Printer className="w-3 h-3 text-emerald-400" />
                  <span>80mm Thermal Print Ready</span>
                </span>
                <button
                  onClick={onRequestDemo}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs flex items-center gap-1 transition-all cursor-pointer shadow-sm"
                >
                  <span>{isNepali ? 'अन-साइट डेमो अनुरोध' : 'Request On-Site Demo'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
