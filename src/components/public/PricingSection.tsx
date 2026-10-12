/**
 * Transparent Retail Pricing & Deployment Packages Section
 * No hidden cloud subscriptions, 100% offline license sovereignty in Nepal (NPR / रु.).
 */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Store,
  Building2,
  HardDrive,
  Clock,
  HelpCircle,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.tsx';

interface PricingSectionProps {
  onSelectPlan?: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const { isNepali } = useLanguage();
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState<'onetime' | 'annual'>('onetime');

  const plans = [
    {
      id: 'community',
      name: isNepali ? 'आधारभूत संस्करण (Community)' : 'Community Offline Edition',
      tagline: isNepali
        ? 'साना पसल र एकल काउन्टरका लागि सधैँ निःशुल्क'
        : 'Forever free for single-counter neighborhood shops',
      priceNpr: 0,
      priceLabel: isNepali ? 'रु. ०' : 'Rs. 0',
      periodLabel: isNepali ? 'सधैँभरि निःशुल्क' : 'Free Forever',
      popular: false,
      ctaText: isNepali ? 'डेमो अनुरोध गर्नुहोस्' : 'Request Free Demo',
      ctaAction: () => navigate('/contact'),
      features: [
        isNepali ? '१००% अफलाइन SQLite WASM डेटाबेस' : '100% Offline SQLite WASM engine',
        isNepali ? 'असीमित सामान, स्टक र बिक्री बिल' : 'Unlimited products, inventory & sales',
        isNepali ? 'बारकोड / SKU द्रुत स्क्यानिङ' : 'Barcode & SKU fast scanner billing',
        isNepali ? '८०mm र ५८mm थर्मल रसिद प्रिन्टिङ' : '80mm & 58mm thermal receipt printing',
        isNepali ? 'ग्राहक उधारो खाता (Khata Ledger)' : 'Customer credit khata & due balances',
        isNepali ? 'स्थानीय .sql र .db ब्याकअप' : 'Local .sql & .db database export',
        isNepali ? 'डार्क र लाइट थिम मोड' : 'Dark & light cashier ergonomics',
        isNepali ? 'नेपाली र अङ्ग्रेजी द्विभाषिक इन्टरफेस' : 'Instant English & नेपाली bilingual switch',
      ],
      notIncluded: [
        isNepali ? 'गुगल सिट क्लाउड ब्याकअप' : 'Google Sheets cloud backup',
        isNepali ? 'कर्मचारी तलब भौचर (Payroll)' : 'Staff monthly payroll ledger',
        isNepali ? 'अन-साइट इन्जिनियर सहयोग' : 'On-site engineer deployment',
      ],
    },
    {
      id: 'pro',
      name: isNepali ? 'व्यावसायिक खुद्रा मार्ट (Retail Pro)' : 'Retail Mart Professional',
      tagline: isNepali
        ? 'किराना मार्ट, डेरी र हार्डवेयर पसलका लागि पूर्ण समाधान'
        : 'Complete POS engine for growing groceries, marts & retail hubs',
      priceNpr: 9999,
      priceLabel: isNepali ? 'रु. ९,९९९' : 'Rs. 9,999',
      periodLabel: isNepali ? 'एकपटक मात्र (One-Time License)' : 'One-Time Lifetime License',
      popular: true,
      badgeText: isNepali ? 'सबैभन्दा लोकप्रिय' : 'Most Popular in Nepal',
      ctaText: isNepali ? 'डेमो वा लाइसेन्स लिनुहोस्' : 'Request Demo / License',
      ctaAction: () => navigate('/contact'),
      features: [
        isNepali ? 'कम्युनिटीका सबै सुविधाहरू समावेश' : 'Everything in Community Edition, plus:',
        isNepali ? 'बहु-एकाइ इन्भेन्टरी (kg, litre, pcs, box)' : 'Granular multi-unit inventory (kg, ltr, pcs)',
        isNepali ? 'स्वचालित क्रमबद्ध बिलिङ (BILL-YYYYMMDD-XXXX)' : 'Automated sequential bill numbering',
        isNepali ? 'COGS खरिद मूल्य स्न्यापसट र कुल नाफा' : 'COGS snapshot pricing & gross profit tracking',
        isNepali ? 'कर्मचारी विवरण र मासिक तलब भुक्तानी भौचर' : 'Staff directory & monthly salary pay vouchers',
        isNepali ? 'पसल सञ्चालन खर्च (Expenses) लेजर' : 'Operating overheads expense ledger',
        isNepali ? 'गुगल सिट क्लाउड १-क्लिक ब्याकअप र रिस्टोर' : 'Google Sheets cloud 1-click sync & restore',
        isNepali ? 'थोक आपूर्तिकर्ता (Vendor) भुक्तानी खाता' : 'Vendor supplier accounts payable ledger',
        isNepali ? 'काठमाडौँ, पोखरा, चितवन, बुटवलमा अन-साइट सहायता' : 'Priority regional on-site setup support',
      ],
      notIncluded: [],
    },
    {
      id: 'enterprise',
      name: isNepali ? 'बहु-काउन्टर इन्टरप्राइज (Enterprise)' : 'Enterprise Multi-Counter',
      tagline: isNepali
        ? 'ठूला सुपरमार्ट र थोक वितरकका लागि'
        : 'Multi-terminal deployment for supermarkets & wholesale centers',
      priceNpr: 24999,
      priceLabel: isNepali ? 'रु. २४,९९९' : 'Rs. 24,999',
      periodLabel: isNepali ? 'लाइफटाइम लाइसेन्स' : 'Lifetime Enterprise License',
      popular: false,
      ctaText: isNepali ? 'कस्टम परामर्श लिनुहोस्' : 'Consult Enterprise Team',
      ctaAction: () => navigate('/contact'),
      features: [
        isNepali ? 'रिटेल प्रोका सम्पूर्ण सुविधाहरू समावेश' : 'Everything in Professional Edition, plus:',
        isNepali ? 'बहु-काउन्टर स्थानीय नेटवर्क सिंक (Multi-Counter)' : 'Multi-terminal counter local LAN deployment',
        isNepali ? 'थोक मूल्य र विभिन्न मूल्य स्तरहरू (Tiered Pricing)' : 'Tiered wholesale pricing rules & discounts',
        isNepali ? 'हार्डवेयर किट कन्फिगरेसन (प्रिन्टर, स्क्यानर, ड्रअर)' : 'Complete hardware peripheral calibration',
        isNepali ? 'कस्टम इनभ्वाइस हेड र लोगो सेटअप' : 'Custom receipt branding, PAN/VAT formatting',
        isNepali ? '२४/७ प्राथमिकता हटलाइन र ह्वाट्सएप सहयोग' : 'Dedicated direct phone & WhatsApp hotline',
        isNepali ? 'डेटाबेस माइग्रेसन तथा पुराना रेकर्ड आयात' : 'Legacy database migration & Excel import',
      ],
      notIncluded: [],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-neutral-950 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>
              {isNepali ? 'पारदर्शी लगानी · शून्य लुकेको शुल्क' : 'Transparent Pricing · No Cloud Subscriptions'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight">
            {isNepali ? (
              <>
                आफ्नो पसलको आवश्यकता अनुसारको{' '}
                <span className="text-emerald-400">उचित योजना</span> छान्नुहोस्
              </>
            ) : (
              <>
                Affordable, Lifetime Value for{' '}
                <span className="text-emerald-400">Independent Retail</span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            {isNepali
              ? 'महिनेपिच्छे महँगो क्लाउड सदस्यता तिर्नुपर्दैन। एकपटक स्थापना गर्नुहोस्, १००% अफलाइन चलाउनुहोस्, र आफ्नो सम्पूर्ण डेटा कम्प्युटरमै सुरक्षित राख्नुहोस्।'
              : 'Say goodbye to recurring cloud fees. Keep 100% of your retail margins with perpetual licenses, zero internet dependencies, and complete data ownership.'}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all ${
                plan.popular
                  ? 'bg-gradient-to-b from-neutral-900 to-neutral-950 border-2 border-emerald-500/60 shadow-2xl shadow-emerald-950/40'
                  : 'bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[11px] font-bold tracking-wide shadow-md">
                    <Sparkles className="w-3 h-3" />
                    <span>{plan.badgeText}</span>
                  </span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="border-b border-neutral-800/80 pb-6 mb-6">
                  <h3 className="text-lg font-bold text-neutral-100 mb-1">{plan.name}</h3>
                  <p className="text-xs text-neutral-400 min-h-[32px]">{plan.tagline}</p>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-neutral-100 font-mono tracking-tight">
                      {plan.priceLabel}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">
                      / {plan.periodLabel}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider mb-3">
                    {isNepali ? 'समावेश सुविधाहरू:' : 'Included Capabilities:'}
                  </div>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}

                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="pt-2 space-y-2 opacity-50">
                      {plan.notIncluded.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-500 line-through">
                          <span className="w-4 h-4 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => {
                    if (onSelectPlan) onSelectPlan(plan.name);
                    plan.ctaAction();
                  }}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-900/40'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border border-neutral-700'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantees & Payment Trust Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex items-center sm:items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                <HardDrive className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-neutral-200 text-xs">
                  {isNepali ? 'शतप्रतिशत स्थानीय डेटा' : '100% Data Sovereignty'}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  {isNepali
                    ? 'तपाईंको बिक्री तथा ग्राहक विवरण तपाईंको हार्डवेयरमा मात्र'
                    : 'Customer ledgers and invoices never leak to third-party clouds'}
                </div>
              </div>
            </div>

            <div className="flex items-center sm:items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-neutral-200 text-xs">
                  {isNepali ? '० सेकेन्डको विलम्ब' : '0ms Instant Response'}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  {isNepali
                    ? 'इन्टरनेट नहुँदा पनि काउन्टर कहिल्यै रोकिँदैन'
                    : 'Process peak customer rush with instant ACID SQLite speed'}
                </div>
              </div>
            </div>

            <div className="flex items-center sm:items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-neutral-200 text-xs">
                  {isNepali ? 'सुलभ भुक्तानी माध्यम' : 'Local Payment Friendly'}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  {isNepali
                    ? 'eSewa, Khalti, ConnectIPS, वा प्रत्यक्ष बैंक ट्रान्सफर'
                    : 'Accepted via eSewa, Khalti, ConnectIPS, or Bank Deposit'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
