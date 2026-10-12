/**
 * Interactive Retail Efficiency & ROI Savings Calculator
 * Enables store owners to compute time saved, eliminated rush congestion,
 * and financial gains by shifting from cloud latency to offline SQLite WASM.
 */
import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calculator,
  Clock,
  TrendingUp,
  Zap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Coins,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { formatCurrency, formatNumber } from '../../lib/utils/format.ts';

export const RoiCalculatorSection: React.FC = () => {
  const { isNepali, formatNumberByLang } = useLanguage();
  const navigate = useNavigate();

  // Slider inputs
  const [dailyCustomers, setDailyCustomers] = useState<number>(200);
  const [avgTicketSize, setAvgTicketSize] = useState<number>(450); // NPR average sale
  const [storeType, setStoreType] = useState<string>('grocery');

  // Multipliers based on store sector
  const storeFactors: Record<string, { secondsSavedPerTx: number; auditHoursPerMonth: number }> = {
    grocery: { secondsSavedPerTx: 14, auditHoursPerMonth: 25 },
    hardware: { secondsSavedPerTx: 20, auditHoursPerMonth: 30 },
    dairy: { secondsSavedPerTx: 12, auditHoursPerMonth: 20 },
    pharmacy: { secondsSavedPerTx: 15, auditHoursPerMonth: 28 },
    general: { secondsSavedPerTx: 15, auditHoursPerMonth: 22 },
  };

  const factor = storeFactors[storeType] || storeFactors.grocery;

  // Computations
  const calculations = useMemo(() => {
    // Daily seconds saved at counter = dailyCustomers * secondsSaved
    const dailySecondsSaved = dailyCustomers * factor.secondsSavedPerTx;
    const monthlyHoursSavedCounter = Math.round((dailySecondsSaved * 30) / 3600);
    const totalMonthlyHoursSaved = monthlyHoursSavedCounter + factor.auditHoursPerMonth;

    // Prevented walkouts during peak festival/network freezes (~1.5% of peak customers walk away when queue freezes)
    const savedWalkawayCustomersPerMonth = Math.round(dailyCustomers * 30 * 0.015);
    const monthlyRecoveredRevenue = savedWalkawayCustomersPerMonth * avgTicketSize;

    // Labor efficiency value (assuming modest NPR 150/hr cashier/manager time valuation)
    const monthlyLaborValue = totalMonthlyHoursSaved * 150;

    const totalAnnualBenefit = (monthlyRecoveredRevenue + monthlyLaborValue) * 12;

    return {
      monthlyHoursSaved: totalMonthlyHoursSaved,
      monthlyRecoveredRevenue,
      savedWalkaways: savedWalkawayCustomersPerMonth,
      totalAnnualBenefit,
    };
  }, [dailyCustomers, avgTicketSize, factor]);

  const currencySymbol = isNepali ? 'रु.' : 'Rs.';

  return (
    <section id="roi-calculator" className="py-20 bg-neutral-900/50 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Explainer */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
              <Calculator className="w-3.5 h-3.5" />
              <span>{isNepali ? 'दक्षता क्याल्कुलेटर' : 'Retail Efficiency Calculator'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight leading-tight">
              {isNepali ? (
                <>
                  तपाईंको पसलले कति समय र{' '}
                  <span className="text-emerald-400">बिक्री बचत गर्छ?</span>
                </>
              ) : (
                <>
                  Calculate Your Store’s{' '}
                  <span className="text-emerald-400">Time & Revenue Gains</span>
                </>
              )}
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {isNepali
                ? 'क्लाउड POS मा बारकोड स्क्यान गर्दा लाग्ने २-३ सेकेन्डको इन्टरनेट पर्खाइ भीडभाडमा ठूलो लाइन बन्छ। StockForge को ०ms गति र स्वचालित क्रमबद्ध बिलिङले दैनिक काउन्टरमा घण्टौँ समय बचाउँछ।'
                : 'Sub-millisecond local SQLite transaction commits eliminate the 2 to 4 second network lag on every barcode scan. Test how much counter speed and saved walkouts mean for your store bottom line.'}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                  <Clock className="w-3 h-3" />
                </div>
                <span>
                  {isNepali
                    ? 'काउन्टरमा ग्राहकको लाइन ३५% छिटो अघि बढ्छ'
                    : 'Process checkout queues up to 35% faster'}
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <div className="w-5 h-5 rounded-full bg-teal-500/15 text-teal-400 flex items-center justify-center shrink-0">
                  <Zap className="w-3 h-3" />
                </div>
                <span>
                  {isNepali
                    ? 'इन्टरनेट बिग्रिँदा वा चाडपर्वमा काउन्टर कहिल्यै रोकिँदैन'
                    : 'Zero lost sales during festival rush network collapses'}
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <div className="w-5 h-5 rounded-full bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3 h-3" />
                </div>
                <span>
                  {isNepali
                    ? 'दैनिक हिसाब, खाता र मौज्दात मिलाउन १ मिनेट पर्याप्त'
                    : 'Automated end-of-day khata & inventory balancing'}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigate('/contact')}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg shadow-emerald-950 transition-all cursor-pointer"
              >
                <span>{isNepali ? 'प्रत्यक्ष डेमो अनुरोध गर्नुहोस्' : 'Schedule On-Site Store Demo'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Controls & Computed Cards */}
          <div className="lg:col-span-7 bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 space-y-6 shadow-2xl">
            {/* Control 1: Store Sector */}
            <div>
              <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                {isNepali ? '१. पसलको विधा छान्नुहोस्' : '1. Store Sector'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'grocery', label: isNepali ? 'किराना / मार्ट' : 'Grocery Mart' },
                  { id: 'hardware', label: isNepali ? 'हार्डवेयर' : 'Hardware' },
                  { id: 'dairy', label: isNepali ? 'डेरी / लिक्विड' : 'Dairy & Liquids' },
                  { id: 'pharmacy', label: isNepali ? 'फार्मेसी / अन्य' : 'Pharmacy / Retail' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setStoreType(s.id)}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      storeType === s.id
                        ? 'bg-emerald-600 text-white border border-emerald-500 shadow-sm'
                        : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-400 border border-neutral-800'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Daily Customer Influx */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                  {isNepali ? '२. दैनिक ग्राहक संख्या (Daily Customers)' : '2. Daily Customers'}
                </label>
                <span className="font-mono font-bold text-sm text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  {formatNumberByLang(dailyCustomers)} {isNepali ? 'ग्राहक/दिन' : 'customers/day'}
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="800"
                step="10"
                value={dailyCustomers}
                onChange={(e) => setDailyCustomers(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                <span>30</span>
                <span>200</span>
                <span>400</span>
                <span>800+</span>
              </div>
            </div>

            {/* Control 3: Average Ticket Size */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                  {isNepali
                    ? `३. औसत बिल रकम (Average Bill in ${currencySymbol})`
                    : `3. Average Bill Size (${currencySymbol})`}
                </label>
                <span className="font-mono font-bold text-sm text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20">
                  {formatCurrency(avgTicketSize, currencySymbol)}
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="2500"
                step="50"
                value={avgTicketSize}
                onChange={(e) => setAvgTicketSize(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-teal-500"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                <span>{currencySymbol} 100</span>
                <span>{currencySymbol} 800</span>
                <span>{currencySymbol} 1,500</span>
                <span>{currencySymbol} 2,500+</span>
              </div>
            </div>

            {/* Output Metric Cards */}
            <div className="pt-4 border-t border-neutral-800/80">
              <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-3">
                {isNepali ? 'अनुमानित मासिक तथा वार्षिक बचत:' : 'Projected Store Value Created:'}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Metric 1: Hours Saved */}
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{isNepali ? 'मासिक समय बचत' : 'Hours Saved / Mo'}</span>
                  </div>
                  <div className="text-2xl font-black text-emerald-400 font-mono mt-1">
                    {formatNumberByLang(calculations.monthlyHoursSaved)}{' '}
                    <span className="text-xs text-neutral-400 font-normal">
                      {isNepali ? 'घण्टा' : 'hrs'}
                    </span>
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    {isNepali ? 'काउन्टर + दैनिक हिसाब' : 'Counter speed + closing'}
                  </div>
                </div>

                {/* Metric 2: Recovered Rush Revenue */}
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-semibold">
                    <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
                    <span>{isNepali ? 'सुरक्षित मासिक बिक्री' : 'Retained Sales / Mo'}</span>
                  </div>
                  <div className="text-xl font-black text-teal-400 font-mono mt-1">
                    {formatCurrency(calculations.monthlyRecoveredRevenue, currencySymbol)}
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    {isNepali
                      ? `~${formatNumberByLang(calculations.savedWalkaways)} जना ग्राहक नफर्किएको`
                      : `~${calculations.savedWalkaways} retained shoppers`}
                  </div>
                </div>

                {/* Metric 3: Total Annual Gain */}
                <div className="p-4 rounded-xl bg-neutral-900 border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 to-neutral-900">
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-300 font-semibold">
                    <Coins className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{isNepali ? 'कुल वार्षिक लाभ' : 'Annual Value'}</span>
                  </div>
                  <div className="text-xl font-black text-white font-mono mt-1">
                    {formatCurrency(calculations.totalAnnualBenefit, currencySymbol)}
                  </div>
                  <div className="text-[10px] text-emerald-400/80 mt-0.5 font-medium">
                    {isNepali ? 'समय + ग्राहक सन्तुष्टि' : 'Time + recovered sales'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
