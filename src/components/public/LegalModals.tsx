/**
 * Legal Modals: Privacy Policy & Terms of Service
 * Tailored for offline POS data sovereignty, local SQLite storage, and consumer standards in Nepal.
 */
import React from 'react';
import { Modal } from '../common/Modal.tsx';
import { ShieldCheck, FileText, CheckCircle2, Lock, HardDrive, Database } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.tsx';

interface LegalModalsProps {
  isPrivacyOpen: boolean;
  onClosePrivacy: () => void;
  isTermsOpen: boolean;
  onCloseTerms: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({
  isPrivacyOpen,
  onClosePrivacy,
  isTermsOpen,
  onCloseTerms,
}) => {
  const { isNepali } = useLanguage();

  return (
    <>
      {/* Privacy Policy Modal */}
      <Modal
        isOpen={isPrivacyOpen}
        onClose={onClosePrivacy}
        title={isNepali ? 'गोपनीयता नीति (Privacy Policy)' : 'Privacy Policy & Data Sovereignty'}
        subtitle={
          isNepali
            ? 'StockForge को स्थानीय डेटा सुरक्षा र गोपनीयता प्रतिबद्धता'
            : 'How StockForge guarantees 100% local device storage and zero cloud telemetry'
        }
        maxWidth="2xl"
      >
        <div className="space-y-4 text-xs text-neutral-300 leading-relaxed max-h-[70vh] overflow-y-auto pr-2">
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <div>
              <div className="font-bold text-xs">
                {isNepali ? 'डेटा सार्वभौमिकता सिद्धान्त' : 'Zero-Cloud Data Sovereignty'}
              </div>
              <div className="text-[11px] text-emerald-400/90 mt-0.5">
                {isNepali
                  ? 'तपाईंको पसलको कुनै पनि बिक्री, मूल्य वा ग्राहक रेकर्ड हाम्रो वा अन्य कुनै बाह्य सर्भरमा जाँदैन।'
                  : 'Your inventory, financial profits, and customer credit khata records reside exclusively on your local device.'}
              </div>
            </div>
          </div>

          <section className="space-y-1.5">
            <h4 className="font-bold text-neutral-100 text-sm">
              {isNepali ? '१. डेटा कहाँ भण्डारण हुन्छ?' : '1. Local Storage Architecture'}
            </h4>
            <p className="text-neutral-400">
              {isNepali
                ? 'StockForge ले तपाईंको कम्प्युटर वा उपकरणभित्र वेब ब्राउजरको IndexedDB भण्डारणमा SQLite WebAssembly (.sqlite / .db) डेटाबेस चलाउँछ। सम्पूर्ण कारोबारहरू स्थानीय रूपमा ACID नियम अनुसार सुरक्षित हुन्छन्।'
                : 'StockForge utilizes an embedded SQLite WebAssembly relational engine operating in your device browser storage. Every product, sale, movement, and expense is written directly to your local file system.'}
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-neutral-100 text-sm">
              {isNepali ? '२. कुनै तेस्रो-पक्ष ट्र्याकिङ वा टेलिमेट्री छैन' : '2. No Telemetry or Ad Tracking'}
            </h4>
            <p className="text-neutral-400">
              {isNepali
                ? 'हामी तपाईंको काउन्टरको बिक्री, आम्दानी वा सामानहरूको सूची ट्र्याक गर्दैनौँ। प्रणालीमा कुनै पनि बाह्य विज्ञापनदाता वा डेटा ब्रोकर कोड छैन।'
                : 'We do not collect store sales figures, inventory prices, or customer identities. There are zero third-party tracking pixels, marketing telemetry, or surveillance scripts embedded in the software.'}
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-neutral-100 text-sm">
              {isNepali ? '३. ब्याकअप र नियन्त्रण' : '3. User Backup Ownership'}
            </h4>
            <p className="text-neutral-400">
              {isNepali
                ? 'तपाईंले कुनै पनि समयमा सेटिङ्स मेनुबाट आफ्नो सम्पूर्ण डेटाबेस .db वा .sql फाइलमा डाउनलोड गर्न सक्नुहुन्छ। गुगल सिट ब्याकअप प्रयोग गर्दा पनि डेटा तपाईंको आफ्नै व्यक्तिगत गुगल ड्राइभ खातामा मात्र जान्छ।'
                : 'You maintain perpetual ownership of your database. You can export clean binary .db files, portable .sql scripts, or sync directly to your personal Google Sheet with your own Google account credentials.'}
            </p>
          </section>

          <div className="pt-3 border-t border-neutral-800 flex justify-end">
            <button
              onClick={onClosePrivacy}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
            >
              {isNepali ? 'बुझियो / बन्द गर्नुहोस्' : 'Understood'}
            </button>
          </div>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={isTermsOpen}
        onClose={onCloseTerms}
        title={isNepali ? 'सेवाका सर्तहरू (Terms of Service)' : 'Terms of Service & License'}
        subtitle={
          isNepali
            ? 'StockForge सफ्टवेयर प्रयोग र इजाजतपत्र सर्तहरू'
            : 'Software license agreement and retail store operational terms'
        }
        maxWidth="2xl"
      >
        <div className="space-y-4 text-xs text-neutral-300 leading-relaxed max-h-[70vh] overflow-y-auto pr-2">
          <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-3">
            <FileText className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="font-bold text-xs text-neutral-200">
                {isNepali ? 'इजाजतपत्र र स्वामित्व' : 'Software License & Usage Terms'}
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5">
                {isNepali
                  ? 'नेपालका कानुनी खुद्रा तथा थोक व्यापारहरूका लागि उपयुक्त'
                  : 'Designed for independent grocery marts, retail stores, and commercial counters in Nepal'}
              </div>
            </div>
          </div>

          <section className="space-y-1.5">
            <h4 className="font-bold text-neutral-100 text-sm">
              {isNepali ? '१. सफ्टवेयर इजाजतपत्र' : '1. Grant of License'}
            </h4>
            <p className="text-neutral-400">
              {isNepali
                ? 'StockForge ले तपाईंलाई आफ्नो पसलको काउन्टरमा सामान व्यवस्थापन, बिलिङ र हिसाब राख्नका लागि गैर-हस्तान्तरणीय इजाजतपत्र प्रदान गर्दछ। समुदाय संस्करण निःशुल्क प्रयोगका लागि खुला छ।'
                : 'StockForge grants retailers an authorized license to utilize the POS engine for checkout, inventory tracking, and billing. The Community Edition remains free of recurring fees.'}
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-neutral-100 text-sm">
              {isNepali ? '२. कर तथा बिलिङ दायित्व' : '2. Fiscal Invoicing Responsibility'}
            </h4>
            <p className="text-neutral-400">
              {isNepali
                ? 'पसलले जारी गर्ने बिल, करयोग्य रकम र PAN विवरणको सत्यता पसल सञ्चालकको आफ्नै जिम्मेवारी हो। सफ्टवेयरले नेपालका प्रचलित नियम अनुसार क्रमबद्ध नम्बर र कर गणना गर्न सजिलो बनाउँछ।'
                : 'Retailers are responsible for configuring their correct store PAN/VAT numbers and compliant tax rules. StockForge automates sequential bill numbering and transparent line-item computations.'}
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-neutral-100 text-sm">
              {isNepali ? '३. ब्याकअप नियमितता' : '3. Recommended Backup Routine'}
            </h4>
            <p className="text-neutral-400">
              {isNepali
                ? 'कम्प्युटर वा हार्डवेयर बिग्रन सक्ने जोखिमबाट बच्न हामी व्यापारीहरूलाई नियमित रूपमा १-क्लिक पेनड्राइभ ब्याकअप वा गुगल सिट ब्याकअप लिन सिफारिस गर्दछौँ।'
                : 'Because data is stored securely on your local computer, retailers are encouraged to maintain weekly binary (.db) or SQL (.sql) backups on a secondary USB flash drive or personal cloud drive.'}
            </p>
          </section>

          <div className="pt-3 border-t border-neutral-800 flex justify-end">
            <button
              onClick={onCloseTerms}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
            >
              {isNepali ? 'स्वीकार गर्नुहोस् / बन्द' : 'Accept & Close'}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
