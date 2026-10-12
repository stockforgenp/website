/**
 * Hardware Compatibility & Peripheral Specification Section
 * Detailed compatibility matrix for thermal receipt printers, barcode scanners,
 * electronic cash drawers, and offline operating environments across Nepal.
 */
import React from 'react';
import { motion } from 'framer-motion';
import {
  Printer,
  Barcode,
  Monitor,
  HardDrive,
  Cpu,
  CheckCircle2,
  Check,
  ShieldCheck,
  Zap,
  Cable,
  Tablet,
  Laptop,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.tsx';

export const HardwareSpecsSection: React.FC = () => {
  const { isNepali } = useLanguage();

  const hardwareCategories = [
    {
      title: isNepali ? 'थर्मल बिल प्रिन्टरहरू' : 'Thermal Receipt Printers',
      subtitle: isNepali ? '८०mm र ५८mm रोलहरू' : '80mm & 58mm Paper Widths',
      icon: Printer,
      color: 'emerald',
      brands: [
        'Epson TM-T88 / TM-T20 Series',
        'Xprinter XP-N160M / XP-58IIH / XP-80C',
        'Rongta RP80 / RP326 / RPP300',
        'Everycom EC-58 / EC-80 Thermal',
        'TVS Electronics RP-3200 Star',
        'Generic ESC/POS Bluetooth & USB Printers',
      ],
      specs: [
        isNepali ? 'अटो कटर (Auto-Cutter) पूर्ण समर्थन' : 'Auto-cutter full support',
        isNepali ? 'नेपाली/अङ्ग्रेजी फन्ट र लोगो प्रिन्ट' : 'Bilingual logo & store header print',
        isNepali ? 'USB, LAN/Ethernet वा Bluetooth' : 'USB, Ethernet LAN, or Bluetooth pairing',
      ],
    },
    {
      title: isNepali ? 'बारकोड तथा QR स्क्यानरहरू' : 'Barcode & QR Scanners',
      subtitle: isNepali ? '१D र २D स्क्यान' : '1D Linear & 2D QR Imagers',
      icon: Barcode,
      color: 'teal',
      brands: [
        'Honeywell Voyager 1250g / 1400g 2D',
        'Zebra / Symbol LS2208 / DS2208',
        'Netum NT-1228 / NT-2012 Wireless',
        'Datalogic QuickScan QBT2400',
        'Hands-Free Omnidirectional Desktop Scanners',
        'Plug & Play USB HID Keyboard Scanners',
      ],
      specs: [
        isNepali ? 'शून्य ड्राइभर (Plug & Play USB HID)' : 'Driverless USB HID keyboard input',
        isNepali ? 'EAN-13, UPC, Code 128, QR Code' : 'EAN-13, UPC, Code 128 & QR codes',
        isNepali ? 'धमिलो वा हल्का बिग्रेको बारकोड पनि पढ्ने' : 'High-density damaged label scanning',
      ],
    },
    {
      title: isNepali ? 'कम्प्युटर तथा अपरेटिङ सिस्टम' : 'Operating Environments',
      subtitle: isNepali ? 'कुनै पनि कम्प्युटरमा सहजै' : 'Cross-Platform WebAssembly',
      icon: Laptop,
      color: 'cyan',
      brands: [
        'Windows 11 / Windows 10 (32-bit & 64-bit)',
        'Apple macOS (Apple Silicon M1/M2/M3 & Intel)',
        'Ubuntu, Debian & RedHat Linux',
        'ChromeOS / Chromebook Devices',
        'Android Tablets & Handheld POS Devices',
        'Any Modern Chromium Browser (Chrome, Edge)',
      ],
      specs: [
        isNepali ? 'न्यूनतम २GB RAM भए पुग्ने' : 'Runs smoothly with 2GB+ system RAM',
        isNepali ? 'शून्य इन्टरनेट ब्यान्डविथ आवश्यक' : 'Zero internet bandwidth needed for billing',
        isNepali ? '१००% स्थानीय SQLite ACID इन्जिन' : '100% Client-side ACID storage durability',
      ],
    },
  ];

  return (
    <section id="hardware" className="py-20 bg-neutral-950 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <Cable className="w-3.5 h-3.5" />
            <span>
              {isNepali ? 'हार्डवेयर अनुकूलता सूची' : 'Certified Hardware Compatibility'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight">
            {isNepali ? (
              <>
                तपाईंसँग भएको जुनसुकै{' '}
                <span className="text-emerald-400">प्रिन्टर र स्क्यानरसँग</span> तुरुन्तै जोडिन्छ
              </>
            ) : (
              <>
                Compatible with Your Existing{' '}
                <span className="text-emerald-400">Printers & Scanners</span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            {isNepali
              ? 'कुनै नयाँ महँगो हार्डवेयर किन्नु पर्दैन। काठमाडौँ तथा नेपालका बजारहरूमा सजिलै पाइने सबै मानक थर्मल प्रिन्टर, बारकोड स्क्यानर र क्यास ड्रअरहरूसँग StockForge स्वतः चल्छ।'
              : 'No expensive proprietary hardware locks. StockForge interfaces seamlessly with universally available ESC/POS thermal printers, USB barcode scanners, and RJ11 cash drawers across Nepal.'}
          </p>
        </div>

        {/* 3-Column Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hardwareCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-neutral-100">{cat.title}</h3>
                      <div className="text-xs text-neutral-400">{cat.subtitle}</div>
                    </div>
                  </div>

                  {/* Tested Brands List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                      {isNepali ? 'प्रमाणित मोडलहरू:' : 'Verified Brands & Models:'}
                    </div>
                    <ul className="space-y-1.5 text-xs text-neutral-300">
                      {cat.brands.map((b, bi) => (
                        <li key={bi} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span className="truncate">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Specs Strip */}
                <div className="pt-4 border-t border-neutral-800 space-y-1.5">
                  {cat.specs.map((s, si) => (
                    <div key={si} className="flex items-center gap-2 text-[11px] text-neutral-400">
                      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Cash Drawer & Weighing Scale Strip */}
        <div className="mt-8 p-5 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-neutral-200">
                {isNepali ? 'क्यास ड्रअर र डिजिटल तराजु:' : 'Cash Drawer Kick & Produce Scales:'}
              </span>{' '}
              <span className="text-neutral-400">
                {isNepali
                  ? 'रसिद प्रिन्ट हुँदा RJ11 क्यास ड्रअर स्वतः खुल्छ। खुला सामान (kg, g) को दशमलव वजन तत्काल हिसाब हुन्छ।'
                  : 'Automatic pulse trigger for RJ11 cash drawers upon bill printing. Instant decimal kg/gram calculation for bulk grocery items.'}
              </span>
            </div>
          </div>

          <a
            href="/contact"
            className="text-emerald-400 hover:text-emerald-300 font-semibold whitespace-nowrap inline-flex items-center gap-1"
          >
            <span>{isNepali ? 'हार्डवेयर सहायता सोध्नुहोस् →' : 'Hardware Inquiries →'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
