/**
 * Product Knowledge Assistant (Client Chatbot)
 * Grounded 100% in local product and website content with zero external AI models.
 * Includes direct WhatsApp button redirection and popular query shortcuts.
 */
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  X,
  Send,
  MessageCircle,
  ExternalLink,
  Bot,
  ArrowRight,
  HelpCircle,
  RefreshCw,
  Minus,
} from "lucide-react";
import {
  POPULAR_QUESTIONS,
  POPULAR_QUESTIONS_NP,
  queryKnowledgeBase,
  getWhatsAppUrl,
  WHATSAPP_NUMBER,
} from "../../lib/services/knowledgeService.ts";
import { CONTACT_INFO } from "../../constants/contactInfo.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  actionUrl?: string;
  actionLabel?: string;
  suggestWhatsApp?: boolean;
  isTyping?: boolean;
}

export const WebsiteChatbot: React.FC = () => {
  const { isNepali } = useLanguage();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isBotThinking, setIsBotThinking] = useState(false);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const getWelcomeText = useCallback(
    (nepali: boolean) =>
      nepali
        ? "नमस्ते! म StockForge सहायता बट हुँ। म तपाईंलाई विन्डोज, म्याक र लिनक्सका लागि यो अफलाइन नेटिभ डेस्कटप POS सफ्टवेयरका सुविधाहरू, बिलिङ, ब्याकअप र प्रिन्टर सेटअप सम्बन्धी जानकारी दिन सक्छु।"
        : "Hello! I am the StockForge Product Guide. Ask me anything about our offline native desktop POS (Windows, macOS, Linux), multi-unit inventory, automated billing, backups, or thermal printer setups!",
    [],
  );

  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: "welcome_1",
      sender: "bot",
      text: getWelcomeText(isNepali),
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  // Synchronize initial welcome message whenever user toggles language on website
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id.startsWith("welcome")) {
        return [
          {
            ...prev[0],
            text: getWelcomeText(isNepali),
          },
        ];
      }
      return prev;
    });
  }, [isNepali, getWelcomeText]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, messages, isBotThinking]);

  // Clean up typing interval on unmount
  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isBotThinking) return;

    // Clear any previous active typing animation if running
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
      setMessages((prev) =>
        prev.map((m) => (m.isTyping ? { ...m, isTyping: false } : m)),
      );
    }

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsBotThinking(true);

    // Realistic micro-delay before typing starts
    setTimeout(() => {
      const match = queryKnowledgeBase(query, isNepali);
      const fullText = match
        ? isNepali
          ? match.answer_np
          : match.answer_en
        : isNepali
          ? "माफ गर्नुहोला, तपाईंको सोधपुछ वेबसाइट जानकारीमा ठ्याक्कै भेटिएन। विस्तृत जानकारी वा तत्काल मद्दतको लागि हाम्रो ह्वाट्सएप वा फोनमा सिधै सम्पर्क गर्न सक्नुहुन्छ।"
          : "I couldn't find a direct match for that in our website documentation. For specific inquiries or hardware pairing assistance, our retail engineering team is available directly on WhatsApp and phone!";

      const botMessageId = `bot_${Date.now()}`;
      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      // Add bot message with empty text and isTyping = true
      const initialBotMsg: ChatMessage = {
        id: botMessageId,
        sender: "bot",
        text: "",
        timestamp,
        actionUrl: match ? match.actionUrl || "/contact" : "/contact",
        actionLabel: match
          ? isNepali
            ? match.actionLabel_np || "थप जानकारी"
            : match.actionLabel_en || "Learn More"
          : isNepali
            ? "सम्पर्क पृष्ठ हेर्नुहोस्"
            : "Visit Contact Page",
        suggestWhatsApp: match ? !!match.suggestWhatsApp : true,
        isTyping: true,
      };

      setIsBotThinking(false);
      setMessages((prev) => [...prev, initialBotMsg]);

      // Dynamic character typing interval
      let charIndex = 0;
      const charsPerTick = 2; // smooth and brisk streaming feel
      const tickSpeed = 22; // ms per tick

      typingIntervalRef.current = setInterval(() => {
        charIndex += charsPerTick;
        if (charIndex >= fullText.length) {
          if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
            typingIntervalRef.current = null;
          }
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMessageId
                ? { ...msg, text: fullText, isTyping: false }
                : msg,
            ),
          );
        } else {
          const currentSlice = fullText.slice(0, charIndex);
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMessageId ? { ...msg, text: currentSlice } : msg,
            ),
          );
        }
      }, tickSpeed);
    }, 400);
  };

  const handleResetChat = () => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }
    setIsBotThinking(false);
    setMessages([
      {
        id: `welcome_${Date.now()}`,
        sender: "bot",
        text: isNepali
          ? "कुराकानी रिसेट भयो। तपाईंलाई के सम्बन्धी जानकारी चाहिन्छ?"
          : "Chat history reset. How can I help you navigate StockForge features?",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  };

  const popularQuestions = isNepali ? POPULAR_QUESTIONS_NP : POPULAR_QUESTIONS;

  return (
    <>
      {/* Floating Launcher Buttons Container */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 select-none print:hidden">
        {/* Direct WhatsApp Redirection Button */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          href={getWhatsAppUrl(undefined, isNepali)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 h-12 w-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xl border border-emerald-400/40 transition-all cursor-pointer group"
          title={`Chat with us on WhatsApp (${WHATSAPP_NUMBER})`}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
        </motion.a>

        {/* Chatbot Trigger Button */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen((prev) => !prev)}
          className={`relative flex items-center justify-center h-12 w-12 rounded-full shadow-2xl transition-all cursor-pointer font-semibold text-xs border ${
            isOpen
              ? "bg-neutral-900 text-neutral-200 border-neutral-700"
              : "bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-400/40 hover:from-emerald-500 hover:to-teal-500 shadow-emerald-950/50"
          }`}
          aria-label={isOpen ? "Close Chatbot" : "Open Product Chatbot"}
        >
          {isOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <>
              <Bot className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse absolute top-1 right-1" />
            </>
          )}
        </motion.button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[410px] h-[540px] max-h-[82vh] rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl flex flex-col overflow-hidden text-neutral-100"
          >
            {/* Chatbot Header */}
            <div className="px-4 py-3 bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 border-b border-neutral-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs font-bold text-neutral-100">
                      {isNepali
                        ? "StockForge उत्पादन सहयोग"
                        : "StockForge Product Guide"}
                    </h3>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  </div>
                  <div className="text-[10px] text-neutral-400">
                    {isNepali
                      ? "वेबसाइट डाटाबाट प्रत्यक्ष उत्तर"
                      : "Verified website documentation"}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleResetChat}
                  className="p-1.5 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
                  title="Reset conversation"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
                  title="Minimize chat"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="px-3.5 py-2 bg-emerald-950/40 border-b border-emerald-900/40 flex items-center justify-between text-xs shrink-0">
              <div className="flex items-center gap-2 text-emerald-300 text-[11px]">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>
                  {isNepali
                    ? "ह्वाट्सएपमा प्रत्यक्ष परामर्श:"
                    : "Need 1-on-1 demo help?"}
                </span>
              </div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 text-[10px] font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors flex items-center gap-1 cursor-pointer shrink-0"
              >
                <span>WhatsApp</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            {/* Message Thread Area */}
            <div className="flex-1 p-3.5 overflow-y-auto space-y-3 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-emerald-600 text-white rounded-br-xs font-normal"
                        : "bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-bl-xs"
                    }`}
                  >
                    <div className="whitespace-pre-line text-xs">
                      {msg.text}
                      {msg.isTyping && (
                        <span className="inline-block w-1.5 h-3.5 ml-1 bg-emerald-400 align-middle animate-pulse" />
                      )}
                    </div>

                    {/* Optional contextual action link - only show after typing completes */}
                    {!msg.isTyping && msg.actionUrl && (
                      <div className="mt-2.5 pt-2 border-t border-neutral-800/80 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => {
                            setIsOpen(false);
                            navigate(msg.actionUrl!);
                          }}
                          className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                        >
                          <span>{msg.actionLabel || "Learn More"}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    )}

                    {/* WhatsApp button suggestion if query wasn't matched - show after typing completes */}
                    {!msg.isTyping && msg.suggestWhatsApp && (
                      <div className="mt-2.5 pt-2 border-t border-neutral-800/80">
                        <a
                          href={getWhatsAppUrl(undefined, isNepali)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[11px] transition-colors cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>
                            {isNepali
                              ? "ह्वाट्सएपमा च्याट गर्नुहोस्"
                              : `Chat on WhatsApp (${CONTACT_INFO.whatsapp.display})`}
                          </span>
                        </a>
                      </div>
                    )}
                  </div>
                  <span className="text-[9px] text-neutral-400 font-mono mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {/* Bot thinking / analyzing indicator */}
              {isBotThinking && (
                <div className="flex flex-col items-start">
                  <div className="bg-neutral-900 border border-neutral-800 text-neutral-400 rounded-2xl rounded-bl-xs px-3.5 py-2.5 shadow-xs flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                    <span className="ml-1 text-[11px] text-neutral-400 font-sans">
                      {isNepali
                        ? "वेबसाइट खोज्दै..."
                        : "Searching website knowledge..."}
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggested Questions Pill Carousel */}
            <div className="p-2 bg-neutral-950 border-t border-neutral-800/80 shrink-0 space-y-1.5">
              <div className="flex items-center justify-between text-[10px] font-medium text-neutral-400 px-1">
                <span className="flex items-center gap-1">
                  <HelpCircle className="w-3 h-3 text-neutral-500" />
                  <span>
                    {isNepali ? "मुख्य विषयहरू (Topics):" : "Key Topics:"}
                  </span>
                </span>
                <a
                  href={getWhatsAppUrl(undefined, isNepali)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
                >
                  <MessageCircle className="w-2.5 h-2.5" />
                  <span>{isNepali ? "ह्वाट्सएप" : "WhatsApp"}</span>
                </a>
              </div>

              {/* Topic chips */}
              <div className="flex gap-1 overflow-x-auto pb-0.5 no-scrollbar">
                {[
                  {
                    en: "Offline Mode",
                    np: "अफलाइन मोड",
                    q_en: "Does StockForge work completely offline without an internet connection?",
                    q_np: "के StockForge इन्टरनेट नभए पनि पूर्ण रूपमा अफलाइन चल्छ?",
                  },
                  {
                    en: "Multi-Units (kg, ltr)",
                    np: "एकाइ (केजी, लिटर)",
                    q_en: "Which measurement units are supported for loose and packaged products?",
                    q_np: "सामानहरूमा कुन-कुन एकाइ (केजी, लिटर, पिस आदि) प्रयोग गर्न सकिन्छ?",
                  },
                  {
                    en: "Thermal Printers",
                    np: "थर्मल प्रिन्टर",
                    q_en: "Can I print receipts on standard 80mm and 58mm thermal POS printers?",
                    q_np: "के थर्मल बिल प्रिन्टर (८०mm/५८mm) मा रसिद छाप्न सकिन्छ?",
                  },
                  {
                    en: "Google Sheets",
                    np: "गुगल सिट ब्याकअप",
                    q_en: "How does Google Sheets Cloud Backup & Restore integration work?",
                    q_np: "गुगल सिट (Google Sheets) क्लाउड ब्याकअप र रिस्टोर कसरी काम गर्छ?",
                  },
                  {
                    en: "Customer Khata",
                    np: "उधारो खाता",
                    q_en: "How does the Customer Credit Khata (उधारो खाता) ledger work?",
                    q_np: "ग्राहकको उधारो खाता (Credit Khata) ले कसरी काम गर्छ?",
                  },
                  {
                    en: "Dues & Settlement",
                    np: "बाँकी र फर्स्यौट",
                    q_en: "How do 1-click dues settlements and payment receipt vouchers work?",
                    q_np: "१-क्लिकमा बाँकी रकम फर्स्यौट (Settlement) र भुक्तानी रसिद कसरी काटिन्छ?",
                  },
                  {
                    en: "Pricing Plans",
                    np: "लाइसेन्स मूल्य",
                    q_en: "What are the pricing plans and licensing options in Nepal?",
                    q_np: "StockForge को मूल्य, शुल्क र लाइफटाइम लाइसेन्स कति पर्छ?",
                  },
                  {
                    en: "On-Site Demo",
                    np: "अन-साइट डेमो",
                    q_en: "Can I get an on-site demonstration at my shop in Nepal?",
                    q_np: "के हाम्रो पसलमै आएर प्रत्यक्ष डेमो (On-site Demo) हेर्न मिल्छ?",
                  },
                  {
                    en: "Hardware Specs",
                    np: "कम्प्युटर हार्डवेयर",
                    q_en: "What are the computer hardware and operating system requirements?",
                    q_np: "सफ्टवेयर चलाउन कस्तो कम्प्युटर वा ल्यापटप चाहिन्छ?",
                  },
                  {
                    en: "Contact Support",
                    np: "सम्पर्क विवरण",
                    q_en: "What are your support contact numbers, office location, and hours?",
                    q_np: "सहयोगको लागि सम्पर्क फोन नम्बर, कार्यालय र समय के हो?",
                  },
                ].map((t, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() =>
                      handleSendMessage(isNepali ? t.q_np : t.q_en)
                    }
                    className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-800/50 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {isNepali ? t.np : t.en}
                  </button>
                ))}
              </div>

              <div className="flex gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
                {popularQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(q)}
                    className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Text Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-2.5 bg-neutral-950 border-t border-neutral-800 flex items-center gap-2 shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                  isNepali
                    ? "कुनै प्रश्न सोध्नुहोस् (जस्तै: अफलाइन, बिलिङ, ब्याकअप)..."
                    : "Ask about offline, billing, units, thermal printers..."
                }
                className="flex-1 bg-neutral-900 border border-neutral-800 focus:border-emerald-500 rounded-xl px-3 py-2 text-xs text-neutral-100 placeholder:text-neutral-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className={`p-2 rounded-xl text-white transition-all cursor-pointer ${
                  inputValue.trim()
                    ? "bg-emerald-600 hover:bg-emerald-500"
                    : "bg-neutral-800 text-neutral-500 cursor-not-allowed opacity-50"
                }`}
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
