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
      name: 'Rajesh Prasad Sah',
      role: isNepali ? 'सञ्चालक, माँ दुर्गा सुपरमार्ट' : 'Owner, Maa Durga Supermart',
      location: 'Adarshnagar, Birgunj',
      type: 'grocery',
      storeType: isNepali ? 'किराना तथा सुपरमार्ट' : 'Grocery & Supermart',
      rating: 5,
      avatarInitials: 'RS',
      avatarBg: 'bg-emerald-600',
      highlight: isNepali ? 'प्रतिदिन ३ घण्टा समय बचत' : 'Saves 3 Hours Daily on Billing',
      content: isNepali
        ? 'वीरगञ्जको आदर्शनगरमा हाम्रो मार्टमा चामल kg मा, तेल litre मा र अन्य प्याकेज सामान piece मा बेच्नुपर्छ। StockForge मा एकाइ अनुसार स्टक घट्ने र प्रत्येक बिलमा स्वतः क्रमबद्ध बिल नम्बर हिसाब हुने भएकाले दिनको अन्त्यमा हिसाब मिलाउन ३ घण्टा बचत भएको छ।'
        : 'At our mart in Adarshnagar, Birgunj, we sell rice in kg, cooking oils in litres, and packaged snacks in pieces. The multi-unit support automatically updates inventory, and sequential bill numbers make our evening reconciliation effortless.',
      metric: isNepali ? '९८% द्रुत बिलिङ' : '3x Faster Counter Checkout',
    },
    {
      id: 2,
      name: 'Amit Kumar Patel',
      role: isNepali ? 'प्रबन्धक, तराई टेक एण्ड मोबाइल हब' : 'Store Manager, Terai Tech & Mobile Hub',
      location: 'Main Road, Birgunj',
      type: 'electronics',
      storeType: isNepali ? 'इलेक्ट्रोनिक्स तथा मोबाइल' : 'Electronics & Accessories',
      rating: 5,
      avatarInitials: 'AP',
      avatarBg: 'bg-teal-600',
      highlight: isNepali ? 'नेटवर्क जाम हुँदा पनि निर्बाध काम' : 'Zero Downtime During Festive Rush',
      content: isNepali
        ? 'छठ र दीपावलीको भीडभाडमा मेन रोड वीरगञ्जमा मोबाइल नेटवर्क र इन्टरनेट एकदमै ढिलो हुन्छ। छेउका पसलहरूको अनलाइन POS घुमेको घुम्यै भएर ग्राहक रोकिए, तर हाम्रो StockForge १००% अफलाइन भएकाले एक सेकेन्ड पनि रोकिएन।'
        : 'During Chhath and Diwali festivals along Main Road Birgunj, cellular networks get completely congested. While neighboring shops with cloud POS were stuck waiting for pages to load, StockForge ran 100% offline at 0ms latency.',
      metric: isNepali ? '१००% अफलाइन विश्वसनीयता' : '100% Offline Resilience',
    },
    {
      id: 3,
      name: 'Sunita Devi Yadav',
      role: isNepali ? 'संस्थापक, पोखरिया अर्गानिक डेरी तथा एग्रो' : 'Founder, Pokhariya Organic Dairy & Agro',
      location: 'Pokhariya Bazaar, Parsa',
      type: 'grocery',
      storeType: isNepali ? 'डेरी, तेल तथा कृषि उत्पादन' : 'Organic Dairy & Agro Products',
      rating: 5,
      avatarInitials: 'SY',
      avatarBg: 'bg-amber-600',
      highlight: isNepali ? 'लिटर र किलोग्रामको सटिक हिसाब' : 'Flawless Liquid & Fractional Precision',
      content: isNepali
        ? 'पोखरिया बजारमा दूध र तोरीको तेल लिटरमा र पनिर किलोग्राममा बेच्दा दशमलव मात्रा (जस्तै १.७५ लिटर वा २.५ kg) को सही मूल्य र स्टक हिसाब गर्न पहिले निकै झन्झट हुन्थ्यो। StockForge ले मौज्दात र बिलिङ सधैंका लागि सटिक बनाइदियो।'
        : 'In Pokhariya Bazaar, selling pure milk and mustard oil in litres and paneer in kg requires true fractional precision. StockForge deducts exact inventory and accurately prints invoice bills instantly.',
      metric: isNepali ? '०% स्टक त्रुटि' : 'Zero Stock Discrepancies',
    },
    {
      id: 4,
      name: 'Manoj Kumar Gupta',
      role: isNepali ? 'सञ्चालक, गुप्ता हार्डवेयर एण्ड स्यानिटरी' : 'Managing Director, Gupta Hardware & Sanitary',
      location: 'Link Road, Birgunj',
      type: 'hardware',
      storeType: isNepali ? 'हार्डवेयर तथा निर्माण सामग्री' : 'Hardware & Construction Tools',
      rating: 5,
      avatarInitials: 'MG',
      avatarBg: 'bg-blue-600',
      highlight: isNepali ? 'ग्राहक खाता (Khata) र नाफा स्पष्ट' : 'Transparent Customer Khata & Margins',
      content: isNepali
        ? 'हाम्रो लिङ्क रोड वीरगञ्जको पसलमा ४०० भन्दा बढी ग्राहकको उधारो खाता चल्छ। StockForge ले साविकको बाँकी, हालको बाँकी, नगद/बैंक संकलन र खुद नाफा (Net Profit) एउटै स्क्रिनमा स्पष्ट देखाउँछ। हिसाबमा १ रुपैयाँ पनि फरक पर्दैन।'
        : 'Managing over 400 credit khata customer accounts on Link Road, Birgunj used to be chaotic. StockForge tracks previous dues, payments, expense vouchers, and true gross profit in one unified ledger.',
      metric: isNepali ? 'सटीक नाफा रिपोर्ट' : 'Clear COGS & Net Margins',
    },
    {
      id: 5,
      name: 'Priyanka Barnawal',
      role: isNepali ? 'प्रोपाइटर, रोयल कलेक्सन फेसन' : 'Proprietor, Royal Collection Garments',
      location: 'Maisthan Chowk, Birgunj',
      type: 'retail',
      storeType: isNepali ? 'पहिरन तथा रेडिमेड वस्त्र' : 'Apparel & Fashion Boutique',
      rating: 5,
      avatarInitials: 'PB',
      avatarBg: 'bg-rose-600',
      highlight: isNepali ? 'बारकोड स्क्यान र द्रुत रसिद' : 'Rapid Barcode Scanning & Thermal Bills',
      content: isNepali
        ? 'माईस्थान चोकको हाम्रो फेसन स्टोरमा बिहेको मौसममा ग्राहकको ठूलो चाप हुन्छ। बारकोड स्क्यानर जोड्नासाथ १ सेकेन्डमै बिल बन्छ र ८०mm थर्मल प्रिन्टरमा पसलको नामसहित सफा रसिद प्रिन्ट हुन्छ। ग्राहकहरू निकै खुसी छन्।'
        : 'During wedding season around Maisthan Chowk, Birgunj, our boutique sees high footfall. Barcode scanning and instant 80mm thermal receipt printing keep checkout lines moving with zero delays.',
      metric: isNepali ? '५ तारा ग्राहक सन्तुष्टि' : '5-Star Customer Feedback',
    },
    {
      id: 6,
      name: 'Santosh Kumar Chaurasiya',
      role: isNepali ? 'निर्देशक, चौरसिया ट्रेडर्स एण्ड मार्ट' : 'Director, Chaurasiya Traders & Mart',
      location: 'Hospital Road, Pokhariya, Parsa',
      type: 'retail',
      storeType: isNepali ? 'थोक तथा खुद्रा मार्ट' : 'Wholesale & Retail Mart',
      rating: 5,
      avatarInitials: 'SC',
      avatarBg: 'bg-purple-600',
      highlight: isNepali ? 'डेटा ब्याकअप र सुरक्षा' : 'Effortless Data Backup & Export',
      content: isNepali
        ? 'पोखरियामा इन्टरनेट कहिले आउने कहिले जाने समस्या हुन्छ। StockForge ले स्थानीय SQLite मा सबै डेटा राख्ने भएकाले इन्टरनेट नहुँदा पनि हाम्रो थोक कारोबार रोकिँदैन। हरेक हप्ता १ क्लिकमा पुरै .db फाइल पेनड्राइभमा सुरक्षित राख्छौँ।'
        : 'In Pokhariya, internet outages are frequent. StockForge stores everything locally on SQLite, so our wholesale trade runs without interruption. We take a one-click binary backup of the entire database to a USB drive every week.',
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
