import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Store,
  Layers,
  HelpCircle,
  Menu,
  X,
  Sun,
  Moon,
  Languages,
  ArrowRight,
  Sparkles,
  Users,
  Mail,
  Info,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext.tsx";
import { useLanguage } from "../../context/LanguageContext.tsx";

export const PublicNavbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { isNepali, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    {
      path: "/",
      label: isNepali ? "गृहपृष्ठ" : "Home",
      icon: Store,
      end: true,
    },
    {
      path: "/features",
      label: isNepali ? "सुविधाहरू" : "Features",
      icon: Layers,
    },
    { path: "/about", label: isNepali ? "हाम्रोबारे" : "About Us", icon: Info },
    {
      path: "/testimonials",
      label: isNepali ? "ग्राहक प्रतिक्रिया" : "Happy Clients",
      icon: Users,
    },
    {
      path: "/faqs",
      label: isNepali ? "प्रश्नोत्तर" : "FAQs",
      icon: HelpCircle,
    },
    { path: "/contact", label: isNepali ? "सम्पर्क" : "Contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          aria-label="StockForge POS Home"
        >
          <img
            src="/icon.png"
            alt="StockForge Logo"
            className="w-10 h-10 rounded-xl object-contain shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-black tracking-tight text-neutral-100 group-hover:text-emerald-400 transition-colors">
                StockForge
              </span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                POS
              </span>
            </div>
            <span className="block text-[10px] text-neutral-400 font-mono -mt-0.5">
              Nepal Retail Engine
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 font-semibold"
                      : "text-neutral-300 hover:text-emerald-500 hover:bg-emerald-300/20 border border-transparent"
                  }`
                }
              >
                <Icon className="w-3.5 h-3.5 text-emerald-400/80" />
                <span>{link.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Action Controls & Language/Theme Switchers */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-neutral-300 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 rounded-lg border border-neutral-800 transition-colors cursor-pointer shadow-xs"
            title={isNepali ? "Switch to English" : "नेपाली भाषामा बदल्नुहोस्"}
            aria-label="Toggle language"
          >
            <Languages className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] font-bold text-emerald-400 font-mono">
              {isNepali ? "नेपाली" : "EN"}
            </span>
          </button>

          {/* Theme Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 text-neutral-400 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 rounded-lg border border-neutral-800 transition-colors cursor-pointer shadow-xs"
            title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <Sun className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-neutral-400" />
            )}
          </button>

          {/* Primary CTA: Request Demo */}
          <Link
            to="/contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg text-xs font-bold shadow-md shadow-emerald-950/40 transition-all cursor-pointer active:scale-98"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isNepali ? "डेमो अनुरोध" : "Request Demo"}</span>
            <ArrowRight className="w-3 h-3 hidden xs:inline" />
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg border border-neutral-800 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-5 bg-neutral-950 border-b border-neutral-800 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                    isActive
                      ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 font-semibold"
                      : "text-neutral-300 hover:text-emerald-500 hover:bg-emerald-300/20 border border-transparent"
                  }`
                }
              >
                <Icon className="w-4 h-4 text-emerald-400/80" />
                <span>{link.label}</span>
              </NavLink>
            );
          })}

          <div className="pt-3 border-t border-neutral-800/80 flex flex-col gap-2">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-3 text-xs font-bold text-center text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-lg flex items-center justify-center gap-2 shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isNepali ? "डेमो अनुरोध गर्नुहोस्" : "Request Demo"}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
