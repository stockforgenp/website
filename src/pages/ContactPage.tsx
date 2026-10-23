import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/common/SEO.tsx";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.tsx";
import { submitEnquiry } from "../lib/services/enquiryService.ts";
import { CONTACT_INFO } from "../constants/contactInfo.ts";

export const ContactPage: React.FC = () => {
  const { isNepali } = useLanguage();

  const [formValues, setFormValues] = useState({
    fullName: "",
    shopName: "",
    email: "",
    phone: "",
    storeType: "Grocery & Supermarket",
    inquiryType: "on_site_demo",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<{
    referenceId: string;
    submittedAt: string;
    fullName: string;
    shopName: string;
  } | null>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    // Front-end validations
    if (!formValues.fullName.trim() || formValues.fullName.trim().length < 2) {
      setErrorMessage(
        isNepali
          ? "कृपया कम्तिमा २ अक्षरको पूरा नाम प्रविष्ट गर्नुहोस्।"
          : "Please enter a valid full name (at least 2 characters).",
      );
      return;
    }

    if (!formValues.email.trim() || !formValues.email.includes("@")) {
      setErrorMessage(
        isNepali
          ? "कृपया मान्य इमेल ठेगाना प्रविष्ट गर्नुहोस्।"
          : "Please enter a valid email address.",
      );
      return;
    }

    if (!formValues.phone.trim()) {
      setErrorMessage(
        isNepali
          ? "कृपया सम्पर्क फोन नम्बर प्रविष्ट गर्नुहोस्।"
          : "Please enter a contact phone number.",
      );
      return;
    }

    if (!formValues.message.trim() || formValues.message.trim().length < 10) {
      setErrorMessage(
        isNepali
          ? "कृपया सन्देशमा कम्तिमा १० अक्षर लेख्नुहोस्।"
          : "Please enter a detailed message (at least 10 characters).",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const generatedSubject =
        formValues.subject.trim() ||
        `${formValues.storeType} - ${formValues.shopName.trim() || formValues.fullName.trim()} Inquiry`;

      const enq = await submitEnquiry({
        full_name: formValues.fullName,
        shop_name: formValues.shopName || undefined,
        email: formValues.email,
        phone: formValues.phone,
        store_type: formValues.storeType,
        inquiry_type: formValues.inquiryType,
        subject: generatedSubject,
        message: formValues.message,
      });

      setSubmissionResult({
        referenceId: enq.reference_id,
        submittedAt: new Date().toLocaleTimeString(),
        fullName: enq.full_name,
        shopName: enq.shop_name || "Your Retail Store",
      });
    } catch (err: any) {
      console.error("Error submitting inquiry to API:", err);
      setErrorMessage(
        err.message ||
          (isNepali
            ? "अनुरोध पठाउन सकिएन। कृपया केही समयपछि पुनः प्रयास गर्नुहोस्।"
            : "Failed to submit inquiry. Please check your network and try again."),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setErrorMessage(null);
    setFormValues({
      fullName: "",
      shopName: "",
      email: "",
      phone: "",
      storeType: "Grocery & Supermarket",
      inquiryType: "on_site_demo",
      subject: "",
      message: "",
    });
  };

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "StockForge Retail Support Hub",
    description:
      "Contact our retail solutions engineering team for billing inquiries, hardware integration, and on-site POS demonstrations.",
    mainEntity: {
      "@type": "ContactPoint",
      telephone: CONTACT_INFO.phone.clean,
      contactType: "customer support",
      areaServed: "NP",
      availableLanguage: ["English", "Nepali"],
    },
  };

  return (
    <div>
      <SEO
        title={
          isNepali
            ? "सम्पर्क र सहयोग केन्द्र – StockForge अफलाइन POS"
            : "Contact & Retail Support Hub – StockForge POS"
        }
        description={
          isNepali
            ? "StockForge प्राविधिक टोलीसँग सम्पर्क गर्नुहोस्। अन-साइट डेमो अनुरोध, बिलिङ तथा इनभ्वाइस सेटअप, र हार्डवेयर अनुकूलता सम्बन्धी सोधपुछ।"
            : "Contact the StockForge support team for on-site POS demo requests, hardware compatibility checks, and sequential billing setup assistance."
        }
        keywords={[
          "contact StockForge",
          "request POS demo Nepal",
          "retail POS consultation",
          "POS hardware pairing support",
          "mart billing setup inquiry",
          "सम्पर्क तथा सहयोग",
          "डेमो अनुरोध",
        ]}
        locale={isNepali ? "ne_NP" : "en_NP"}
        canonicalPath="/contact"
        breadcrumbs={[
          { name: isNepali ? "गृहपृष्ठ" : "Home", path: "/" },
          { name: isNepali ? "सम्पर्क" : "Contact", path: "/contact" },
        ]}
        schemaJson={schemaJson}
      />

      {/* Header Banner */}
      <section className="pt-16 pb-12 bg-neutral-950 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>
              {isNepali ? "हामीसँग सम्पर्क" : "Retail Engineering & Support"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-100 tracking-tight">
            {isNepali ? (
              <>
                हाम्रो प्राविधिक टोलीसँग{" "}
                <span className="text-emerald-400">सिधै परामर्श गर्नुहोस्</span>
              </>
            ) : (
              <>
                Let's Talk About Powering Your{" "}
                <span className="text-emerald-400">Retail Counters</span>
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
            {isNepali
              ? "सफ्टवेयर सेटअप, बिलिङ नियमहरू, थर्मल प्रिन्टर जडान, वा पसलको लागि अन-साइट डेमो अनुरोध गर्न फाराम भर्नुहोस्।"
              : "Our retail engineering team is available 7 days a week for on-site demonstrations, billing inquiries, and multi-counter setups."}
          </p>
        </div>
      </section>

      {/* Main Form and Info Split */}
      <section className="py-16 bg-neutral-900/40 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Channels & Operational Hours */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-7 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6">
                <h2 className="text-base font-bold text-neutral-100 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <span>
                    {isNepali
                      ? "प्रत्यक्ष सम्पर्क केन्द्र"
                      : "Direct Support Channels"}
                  </span>
                </h2>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-200">
                        {isNepali ? "स्थान तथा कार्यालय" : "Location & Office"}
                      </div>
                      <div className="text-neutral-400 text-xs mt-0.5 leading-relaxed">
                        {isNepali
                          ? CONTACT_INFO.address.displayNp
                          : CONTACT_INFO.address.displayEn}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-200">
                        {isNepali ? "मोबाइल नम्बर" : "Direct Mobile"}
                      </div>
                      <a
                        href={CONTACT_INFO.phone.telLink}
                        className="text-neutral-400 text-xs font-mono mt-0.5 block hover:text-emerald-400 transition-colors"
                      >
                        {CONTACT_INFO.phone.display}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-200">
                        {isNepali
                          ? "ह्वाट्सएप च्याट"
                          : "WhatsApp & Instant Messaging"}
                      </div>
                      <a
                        href={CONTACT_INFO.whatsapp.getUrl(undefined, isNepali)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 text-xs font-mono mt-0.5 block hover:text-emerald-400 transition-colors"
                      >
                        {CONTACT_INFO.whatsapp.display} (
                        {isNepali ? "च्याट उपलब्ध" : "Chat available"})
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-200">
                        {isNepali ? "इमेल सम्पर्क" : "Email Enquiries"}
                      </div>
                      <a
                        href={CONTACT_INFO.email.mailtoLink}
                        className="text-neutral-400 text-xs font-mono mt-0.5 block hover:text-emerald-400 transition-colors"
                      >
                        {CONTACT_INFO.email.address}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-200">
                        {isNepali ? "सञ्चालन समय" : "Store Support Hours"}
                      </div>
                      <div className="text-neutral-400 text-xs mt-0.5">
                        {isNepali
                          ? CONTACT_INFO.hours.np
                          : CONTACT_INFO.hours.en}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Level Commitment */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-teal-950/30 border border-emerald-800/30 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>
                    {isNepali
                      ? "२ घण्टाभित्र जवाफ प्रतिबद्धता"
                      : "< 2 Hour Guaranteed Response"}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {isNepali
                    ? "हामी बुझ्छौँ कि खुद्रा पसलको काउन्टरमा समय कति महत्वपूर्ण हुन्छ। हाम्रो टोलीले तपाईंको जिज्ञासाको तत्काल समाधान दिनेछ।"
                    : "We understand that counter issues cost revenue. Retail inquiries submitted through this portal are prioritized within 2 hours."}
                </p>
              </div>
            </div>

            {/* Right Column: React Router Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl">
                {submissionResult ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/25">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
                      Ref #{submissionResult.referenceId}
                    </div>

                    <h3 className="text-xl font-bold text-neutral-100">
                      {isNepali
                        ? "अनुरोध सफलतापूर्वक दर्ता भयो!"
                        : "Inquiry Submitted Successfully!"}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                      {isNepali
                        ? `धन्यवाद ${submissionResult.fullName}! तपाईंको अनुरोध (Ref: ${submissionResult.referenceId}) हाम्रो सहयोग केन्द्रमा प्राप्त भएको छ। हाम्रा खुद्रा विज्ञहरूले २ घण्टाभित्र सम्पर्क गर्नेछन्।`
                        : `Thank you, ${submissionResult.fullName}! Your inquiry for ${submissionResult.shopName} has been routed to our retail specialists. We will reach out via phone or email shortly.`}
                    </p>

                    <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs font-semibold border border-neutral-800 cursor-pointer"
                      >
                        {isNepali
                          ? "अर्को अनुरोध पठाउनुहोस्"
                          : "Submit Another Inquiry"}
                      </button>

                      <Link
                        to="/"
                        className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md cursor-pointer flex items-center gap-1.5"
                      >
                        <span>
                          {isNepali
                            ? "गृहपृष्ठमा फर्कनुहोस्"
                            : "Return to Home"}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="border-b border-neutral-800/80 pb-3 mb-2">
                      <h2 className="text-base font-bold text-neutral-100">
                        {isNepali
                          ? "पसल सहयोग तथा डेमो अनुरोध फाराम"
                          : "Retail Inquiry & On-Site Demo Request"}
                      </h2>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        {isNepali
                          ? "तपाईंको पसलको विवरण प्रविष्ट गर्नुहोस् र हाम्रो विशेषज्ञ टोलीसँग कुराकानी गर्नुहोस्।"
                          : "Fill in your store details below to connect with our regional POS engineers."}
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-semibold">
                            {isNepali
                              ? "अनुरोध पठाउन समस्या भयो"
                              : "Submission Failed"}
                          </p>
                          <p className="mt-0.5 text-neutral-300">
                            {errorMessage}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                          {isNepali ? "पूरा नाम *" : "Full Name *"}
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formValues.fullName}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              fullName: e.target.value,
                            })
                          }
                          placeholder={
                            isNepali
                              ? "जस्तै: रमेश श्रेष्ठ"
                              : "e.g. Ramesh Shrestha"
                          }
                          className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                          {isNepali ? "पसलको नाम" : "Shop / Business Name"}
                        </label>
                        <input
                          type="text"
                          name="shopName"
                          value={formValues.shopName}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              shopName: e.target.value,
                            })
                          }
                          placeholder={
                            isNepali
                              ? "जस्तै: श्रेष्ठ सुपरमार्ट"
                              : "e.g. Shrestha Supermart"
                          }
                          className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                          {isNepali ? "इमेल ठेगाना *" : "Email Address *"}
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formValues.email}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              email: e.target.value,
                            })
                          }
                          placeholder="shopkeeper@store.com"
                          className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                          {isNepali
                            ? "सम्पर्क फोन / मोबाइल *"
                            : "Phone / Mobile Number *"}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formValues.phone}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              phone: e.target.value,
                            })
                          }
                          placeholder="+977 98XXXXXXXX"
                          className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                          {isNepali ? "पसलको प्रकार" : "Retail Store Type"}
                        </label>
                        <select
                          name="storeType"
                          value={formValues.storeType}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              storeType: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-neutral-100 focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                        >
                          <option value="Grocery & Supermarket">
                            Grocery & Supermarket
                          </option>
                          <option value="Hardware & Construction">
                            Hardware & Construction
                          </option>
                          <option value="Dairy, Oils & Liquids">
                            Dairy, Oils & Liquids
                          </option>
                          <option value="Electronics & Mobile">
                            Electronics & Mobile
                          </option>
                          <option value="Pharmacy & Health">
                            Pharmacy & Health
                          </option>
                          <option value="Clothing & Boutique">
                            Clothing & Boutique
                          </option>
                          <option value="Departmental Wholesale">
                            Departmental Wholesale
                          </option>
                          <option value="Other">Other Retail Business</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                          {isNepali ? "अनुरोधको प्रकृति" : "Inquiry Purpose"}
                        </label>
                        <select
                          name="inquiryType"
                          value={formValues.inquiryType}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              inquiryType: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-neutral-100 focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                        >
                          <option value="on_site_demo">
                            Request On-Site POS Demo
                          </option>
                          <option value="vat_compliance">
                            Sequential Invoicing & Billing Setup
                          </option>
                          <option value="hardware_pairing">
                            Thermal Printer & POS Hardware Compatibility
                          </option>
                          <option value="multi_unit_help">
                            Multi-Unit Inventory Guidance
                          </option>
                          <option value="wholesale_deployment">
                            Multi-Counter Enterprise Setup
                          </option>
                          <option value="general_support">
                            General Support Question
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {isNepali ? "विषय" : "Subject"}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formValues.subject}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            subject: e.target.value,
                          })
                        }
                        placeholder={
                          isNepali
                            ? "जस्तै: काठमाडौँ मार्टका लागि २ वटा काउन्टर सेटअप"
                            : "e.g. 2 counter setup for New Road grocery mart"
                        }
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {isNepali
                          ? "विस्तृत सन्देश वा आवश्यकताहरू *"
                          : "Inquiry Message & Requirements *"}
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formValues.message}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            message: e.target.value,
                          })
                        }
                        placeholder={
                          isNepali
                            ? "तपाईंको पसलका सामानहरूको प्रकार, हालको समस्याहरू वा डेमोको लागि उपयुक्त मिति लेख्नुहोस्..."
                            : "Describe your current counter challenges, inventory volume, or preferred demo timings..."
                        }
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>
                          {isNepali ? "पठाउँदै..." : "Submitting Inquiry..."}
                        </span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>
                            {isNepali
                              ? "अनुरोध दर्ता गर्नुहोस्"
                              : "Submit Retail Inquiry"}
                          </span>
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
    </div>
  );
};
