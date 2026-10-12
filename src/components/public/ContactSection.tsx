import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  MessageSquare,
  Sparkles,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.tsx';

export const ContactSection: React.FC = () => {
  const { isNepali } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    shopName: '',
    email: '',
    phone: '',
    storeType: 'Grocery & Supermarket',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      shopName: '',
      email: '',
      phone: '',
      storeType: 'Grocery & Supermarket',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-neutral-900/40 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>{isNepali ? 'हामीसँग सम्पर्क गर्नुहोस्' : 'Get in Touch'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight">
            {isNepali ? (
              <>
                हाम्रो प्राविधिक टोलीसँग{' '}
                <span className="text-emerald-400">कुराकानी गर्नुहोस्</span>
              </>
            ) : (
              <>
                Let's Talk About{' '}
                <span className="text-emerald-400">Powering Your Retail Business</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-neutral-400">
            {isNepali
              ? 'सफ्टवेयर सेटअप, बिलिङ नियमहरू, वा नयाँ पसलको लागि परामर्श लिन जुनसुकै बेला सम्पर्क गर्नुहोस्।'
              : 'Have questions about multi-store deployments, hardware compatibility, or invoicing? Our retail engineers are here to assist you.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Store Care */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6">
              <h3 className="text-base font-bold text-neutral-100 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-400" />
                <span>{isNepali ? 'सम्पर्क विवरणहरू' : 'Direct Support Hub'}</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-200">
                      {isNepali ? 'प्रधान कार्यालय / सहयोग केन्द्र' : 'Operations & Support Hub'}
                    </div>
                    <div className="text-neutral-400 text-xs mt-0.5">
                      New Road Retail Technology Center, Kathmandu / Patan Hub, Nepal
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-200">
                      {isNepali ? 'फोन तथा ह्वाट्सएप' : 'Hotline & WhatsApp'}
                    </div>
                    <div className="text-neutral-400 text-xs font-mono mt-0.5">
                      +977 1-4245678 / +977 9801234567
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-200">
                      {isNepali ? 'इमेल सहयोग' : 'Email Inquiries'}
                    </div>
                    <div className="text-neutral-400 text-xs font-mono mt-0.5">
                      support@stockforge.pos / info@stockforge.pos
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-200">
                      {isNepali ? 'सहयोग समय' : 'Retail Support Hours'}
                    </div>
                    <div className="text-neutral-400 text-xs mt-0.5">
                      7:00 AM – 10:00 PM NST (All 7 Days Open)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Demo Promise Card */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-950/30 to-teal-950/30 border border-emerald-800/30 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <Sparkles className="w-4 h-4" />
                <span>{isNepali ? 'निःशुल्क अन-साइट डेमो अनुरोध' : 'Free Demo & Onboarding'}</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {isNepali
                  ? 'काठमाडौँ उपत्यका तथा मुख्य सहरहरूमा हाम्रा प्राविधिकहरूले तपाईंको पसलमै आएर निःशुल्क परीक्षण गराउन सक्छन्।'
                  : 'We provide complimentary hands-on walk-throughs for supermarket chains and local retail stores across Nepal.'}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-100">
                    {isNepali ? 'सन्देश सफलतापूर्वक पठाइयो!' : 'Message Received Successfully!'}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
                    {isNepali
                      ? `धन्यवाद ${formData.fullName}! तपाईंको अनुरोध प्राप्त भएको छ। हाम्रा खुद्रा विज्ञहरूले २ घण्टाभित्र सम्पर्क गर्नेछन्।`
                      : `Thank you, ${formData.fullName}! We have received your inquiry for ${formData.shopName || 'your shop'}. Our retail support team will contact you within 2 hours.`}
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-4 px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs font-semibold border border-neutral-800 cursor-pointer"
                  >
                    {isNepali ? 'अर्को सन्देश पठाउनुहोस्' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {isNepali ? 'पूरा नाम *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={isNepali ? 'जस्तै: सुरेश श्रेष्ठ' : 'e.g. Suresh Shrestha'}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {isNepali ? 'पसलको नाम' : 'Shop / Business Name'}
                      </label>
                      <input
                        type="text"
                        value={formData.shopName}
                        onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                        placeholder={isNepali ? 'जस्तै: एपेक्स सुपरमार्ट' : 'e.g. Apex Supermart'}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {isNepali ? 'इमेल ठेगाना *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="owner@store.com"
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {isNepali ? 'सम्पर्क फोन / मोबाइल *' : 'Phone / Mobile *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+977 98XXXXXXXX"
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {isNepali ? 'पसलको प्रकार' : 'Store Type'}
                      </label>
                      <select
                        value={formData.storeType}
                        onChange={(e) => setFormData({ ...formData, storeType: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-neutral-100 focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                      >
                        <option value="Grocery & Supermarket">Grocery & Supermarket</option>
                        <option value="Clothing & Boutique">Clothing & Boutique</option>
                        <option value="Electronics & Mobile">Electronics & Mobile</option>
                        <option value="Pharmacy & Health">Pharmacy & Health</option>
                        <option value="Hardware & Sanitary">Hardware & Sanitary</option>
                        <option value="Bakery & Cafe">Bakery & Cafe</option>
                        <option value="Departmental Wholesale">Departmental Wholesale</option>
                        <option value="Other">Other Retail</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {isNepali ? 'विषय' : 'Subject'}
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder={isNepali ? 'जस्तै: अन-साइट डेमो वा बिलिङ सोधपुछ' : 'e.g. Invoicing setup or on-site demo request'}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      {isNepali ? 'सन्देश वा जिज्ञासा *' : 'Your Message / Inquiries *'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        isNepali
                          ? 'तपाईंको पसलको आवश्यकता वा जिज्ञासा लेख्नुहोस्...'
                          : 'Describe your store setup, current pain points, or questions...'
                      }
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>{isNepali ? 'पठाउँदै...' : 'Sending Message...'}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{isNepali ? 'सन्देश पठाउनुहोस्' : 'Send Inquiry Message'}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
