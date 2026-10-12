import React, { useState } from 'react';
import {
  Users,
  Star,
  Quote,
  CheckCircle2,
  Building2,
  MapPin,
  TrendingUp,
  Receipt,
  Scale,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.tsx';

export const ClientsTestimonialsSection: React.FC = () => {
  const { isNepali } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const testimonials = [
    {
      id: 1,
      name: 'Ramesh Shrestha',
      role: isNepali ? 'सञ्चालक, श्रेष्ठ किराना तथा मार्ट' : 'Owner, Shrestha Supermart & Mart',
      location: 'Kumaripati, Lalitpur',
      type: 'grocery',
      storeType: isNepali ? 'किराना तथा सुपरमार्केट' : 'Grocery & Mart',
      rating: 5,
      avatarInitials: 'RS',
      avatarBg: 'bg-emerald-600',
      highlight: isNepali ? 'प्रतिदिन ३ घण्टा समय बचत' : 'Saves 3 Hours Daily on Billing',
      content: isNepali
        ? 'हाम्रो मार्टमा चामल kg मा, तेल litre मा र अन्य सामान piece मा बेच्नुपर्छ। StockForge मा एकाइ अनुसार स्टक घट्ने र प्रत्येक बिलमा स्वतः क्रमबद्ध बिल नम्बर हिसाब हुने भएकाले दिनको अन्त्यमा हिसाब मिलाउन ३ घण्टा बचत भएको छ।'
        : 'We sell rice in kg, cooking oils in litres, and packaged snacks in pieces. The multi-unit support automatically updates inventory, and sequential bill numbers make our evening reconciliation flawless.',
      metric: isNepali ? '९८% द्रुत बिलिङ' : '3x Faster Counter Checkout',
    },
    {
      id: 2,
      name: 'Bikash Adhikari',
      role: isNepali ? 'प्रबन्धक, एपेक्स टेक ग्याजेट्स' : 'Store Manager, Apex Tech & Mobiles',
      location: 'New Road, Kathmandu',
      type: 'electronics',
      storeType: isNepali ? 'इलेक्ट्रोनिक्स तथा मोबाइल' : 'Electronics & Accessories',
      rating: 5,
      avatarInitials: 'BA',
      avatarBg: 'bg-teal-600',
      highlight: isNepali ? 'इन्टरनेट नहुँदा पनि निर्बाध काम' : 'Zero Downtime During Rush Hours',
      content: isNepali
        ? 'दशैँ-तिहारको भीडभाडमा न्यूरोडमा इन्टरनेट र फोन नेटवर्क एकदमै ढिलो हुन्छ। अरू पसलका अनलाइन POS रोकिएर ग्राहक फर्किए, तर हाम्रो StockForge अफलाइन भएकाले एक सेकेन्ड पनि रोकिएन।'
        : 'During Dashain festival, cell reception in New Road is notoriously overwhelmed. While neighboring shops with cloud POS were stuck waiting for pages to load, StockForge ran at full speed with 0ms lag.',
      metric: isNepali ? '१००% अफलाइन विश्वसनीयता' : '100% Offline Resilience',
    },
    {
      id: 3,
      name: 'Sunita Thapa',
      role: isNepali ? 'संस्थापक, उपत्यका अर्गानिक डेरी' : 'Founder, Valley Organic Dairy & Agro',
      location: 'Sanepa, Lalitpur',
      type: 'grocery',
      storeType: isNepali ? 'डेरी, तेल तथा जैविक उत्पादन' : 'Organic Dairy & Farm Produce',
      rating: 5,
      avatarInitials: 'ST',
      avatarBg: 'bg-amber-600',
      highlight: isNepali ? 'लिटर र किलोग्रामको सही हिसाब' : 'Flawless Liquid & Weight Precision',
      content: isNepali
        ? 'दूध र घ्यू लिटरमा र पनिर किलोग्राममा बेच्दा दशमलव मात्रा (जस्तै १.५ लिटर वा २.५ kg) को सही मूल्य र स्टक हिसाब गर्न पहिले निकै झन्झट हुन्थ्यो। StockForge ले यो समस्या सधैंका लागि समाधान गरिदियो।'
        : 'Selling fresh milk in litres and artisanal cheese in kilograms requires true fractional precision. StockForge deducts exact inventory and accurately generates the invoice bill instantly.',
      metric: isNepali ? '०% स्टक त्रुटि' : 'Zero Stock Discrepancies',
    },
    {
      id: 4,
      name: 'Khemraj Poudel',
      role: isNepali ? 'सञ्चालक, हिमालयन हार्डवेयर' : 'Managing Director, Himalayan Hardware',
      location: 'Prithvi Chowk, Pokhara',
      type: 'hardware',
      storeType: isNepali ? 'हार्डवेयर तथा निर्माण सामग्री' : 'Hardware & Construction Tools',
      rating: 5,
      avatarInitials: 'KP',
      avatarBg: 'bg-blue-600',
      highlight: isNepali ? 'कर्मचारी तलब र नाफा स्पष्ट' : 'Integrated Payroll & Net Profit',
      content: isNepali
        ? 'हाम्रा ६ जना कर्मचारी छन्। तिनीहरूको मासिक तलब भुक्तानी भौचर, दैनिक पसलको खर्च, र सामानको कुल नाफा (Gross Profit) एउटै सफ्टवेयरमा देख्न पाउनु हाम्रो लागि ठूलो राहत हो।'
        : 'Managing 6 store staff was messy before. StockForge handles employee salary disbursement slips, shop overhead expenses, and true gross profit after COGS in one place.',
      metric: isNepali ? 'सटीक नाफा रिपोर्ट' : 'Clear COGS & Net Margins',
    },
    {
      id: 5,
      name: 'Pratima Gurung',
      role: isNepali ? 'प्रोपाइटर, बेला मोडा बुटिक' : 'Proprietor, Bella Moda Boutique',
      location: 'Thamel, Kathmandu',
      type: 'retail',
      storeType: isNepali ? 'पहिरन तथा फेसन' : 'Apparel & Fashion Boutique',
      rating: 5,
      avatarInitials: 'PG',
      avatarBg: 'bg-rose-600',
      highlight: isNepali ? 'थर्मल बिल र आधुनिक इन्टरफेस' : 'Elegant Receipts & Dark Mode',
      content: isNepali
        ? 'बिलिङ इन्टरफेस धेरै सफा र छरितो छ। डार्क मोडमा काम गर्न सजिलो हुन्छ र हाम्रो थर्मल प्रिन्टरमा पसलको नाम र कर हिसाबसहित सुन्दर रसिद प्रिन्ट हुन्छ। हाम्रा ग्राहकहरू पनि प्रभावित छन्।'
        : 'The sleek dark mode interface is stunning, and thermal receipts print instantly with custom store headers, bill numbers, and clean tax breakdowns. The fastest POS we have ever used.',
      metric: isNepali ? '५ तारा ग्राहक सन्तुष्टि' : '5-Star Customer Feedback',
    },
    {
      id: 6,
      name: 'Santosh Koirala',
      role: isNepali ? 'निर्देशक, कोइराला डिपार्टमेन्टल स्टोर' : 'Director, Koirala Departmental Store',
      location: 'Birtamode, Jhapa',
      type: 'retail',
      storeType: isNepali ? 'डिपार्टमेन्टल तथा होलसेल' : 'Wholesale & Retail Mart',
      rating: 5,
      avatarInitials: 'SK',
      avatarBg: 'bg-purple-600',
      highlight: isNepali ? 'डेटा ब्याकअप र सुरक्षा' : 'Effortless Data Backup & Export',
      content: isNepali
        ? 'हाम्रो लागि डेटाको सुरक्षा पहिलो प्राथमिकता थियो। StockForge ले कुनै बाहिरी सर्भरमा डेटा पठाउँदैन। हामी हरेक हप्ता १ क्लिकमा पुरै .db फाइल पेनड्राइभमा ब्याकअप राख्छौँ।'
        : 'Data privacy was critical for us. StockForge keeps everything on local SQLite. We take a one-click binary backup of the entire .db database every week to a flash drive with total peace of mind.',
      metric: isNepali ? '१००% स्थानीय ब्याकअप' : 'Complete Data Ownership',
    },
  ];

  const filtered =
    selectedCategory === 'all'
      ? testimonials
      : testimonials.filter((t) => t.type === selectedCategory);

  return (
    <section id="testimonials" className="py-20 bg-neutral-900/40 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>{isNepali ? 'सन्तुष्ट ग्राहकहरूको अनुभव' : 'Trusted by 350+ Stores'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight">
            {isNepali ? (
              <>
                नेपालभरिका खुद्रा व्यापारीहरू{' '}
                <span className="text-emerald-400">StockForge लाई किन विश्वास गर्छन्?</span>
              </>
            ) : (
              <>
                Real Stories from{' '}
                <span className="text-emerald-400">Thriving Retail Store Owners</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-neutral-400">
            {isNepali
              ? 'साना किराना पसलदेखि ठूला मार्टसम्म, व्यापारीहरू कसरी आफ्नो बिलिङ, हिसाब र इन्भेन्टरी व्यवस्थापन गरिरहेका छन् पढ्नुहोस्।'
              : 'Discover how marts, grocery stores, pharmacies, and boutiques power their operations with zero-lag SQLite speed.'}
          </p>

          {/* Metrics summary banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-left">
            <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800">
              <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">350+</div>
              <div className="text-[11px] text-neutral-400">Active Retail Stores</div>
            </div>
            <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800">
              <div className="text-xl sm:text-2xl font-black text-teal-400 font-mono">100%</div>
              <div className="text-[11px] text-neutral-400">Offline Reliability</div>
            </div>
            <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800">
              <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">0-Lag</div>
              <div className="text-[11px] text-neutral-400">Sequential Invoicing</div>
            </div>
            <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800">
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono">4.9 / 5</div>
              <div className="text-[11px] text-neutral-400">Customer Rating</div>
            </div>
          </div>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-neutral-950/90 border border-neutral-800/90 hover:border-emerald-500/40 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="space-y-4">
                {/* Header with Rating and Verified Store Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    <span>Verified Store</span>
                  </span>
                </div>

                {/* Highlight banner */}
                <div className="text-xs font-bold text-neutral-200 bg-neutral-900/90 px-3 py-1.5 rounded-lg border border-neutral-800 flex items-center justify-between">
                  <span>{item.highlight}</span>
                  <span className="text-[10px] font-mono text-emerald-400">{item.metric}</span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 mt-6 border-t border-neutral-900 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-md`}
                >
                  {item.avatarInitials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-neutral-200 truncate">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-neutral-400 truncate">
                    {item.role}
                  </div>
                  <div className="text-[10px] text-neutral-400 flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-emerald-400" />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
