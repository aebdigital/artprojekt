"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const defaultSettings: CookieSettings = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>(defaultSettings);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    } else {
      try {
        setSettings(JSON.parse(consent));
      } catch {
        setSettings(defaultSettings);
      }
    }
  }, []);

  const saveSettings = (newSettings: CookieSettings) => {
    localStorage.setItem("cookieConsent", JSON.stringify(newSettings));
    setSettings(newSettings);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveSettings({ necessary: true, analytics: true, marketing: true });
  };

  const acceptNecessary = () => {
    saveSettings({ necessary: true, analytics: false, marketing: false });
  };

  const openSettings = () => {
    setShowSettings(true);
    setShowBanner(false);
  };

  // Expose openSettings globally for footer link
  useEffect(() => {
    (window as Window & { openCookieSettings?: () => void }).openCookieSettings = () => {
      setShowSettings(true);
    };
    return () => {
      delete (window as Window & { openCookieSettings?: () => void }).openCookieSettings;
    };
  }, []);

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-[3000] bg-black text-white p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
          >
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Táto stránka používa cookies</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Používame cookies na zlepšenie vášho zážitku z prehliadania, zobrazovanie personalizovaného obsahu a analýzu návštevnosti.
                  Kliknutím na &quot;Prijať všetky&quot; súhlasíte s používaním všetkých cookies.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={openSettings}
                  className="px-5 py-2.5 text-sm font-medium border border-white/30 text-white hover:bg-white/10 transition-colors duration-300"
                >
                  Nastavenia
                </button>
                <button
                  onClick={acceptNecessary}
                  className="px-5 py-2.5 text-sm font-medium border border-white/30 text-white hover:bg-white/10 transition-colors duration-300"
                >
                  Iba nevyhnutné
                </button>
                <button
                  onClick={acceptAll}
                  className="px-5 py-2.5 text-sm font-medium bg-white text-black hover:bg-white/90 transition-colors duration-300"
                >
                  Prijať všetky
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[3001] bg-black/70"
              onClick={() => setShowSettings(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3002] w-[90vw] max-w-[500px] bg-white text-[#222] rounded-lg shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Nastavenia cookies</h2>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <p className="text-sm text-gray-600 mb-6">
                  Tu si môžete prispôsobiť nastavenia cookies podľa vašich preferencií.
                </p>

                {/* Necessary Cookies */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Nevyhnutné cookies</h3>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={settings.necessary}
                        disabled
                        className="sr-only"
                      />
                      <div className="w-11 h-6 bg-black rounded-full cursor-not-allowed">
                        <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Tieto cookies sú nevyhnutné pre správne fungovanie webovej stránky a nemožno ich vypnúť.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Analytické cookies</h3>
                    <button
                      onClick={() => setSettings({ ...settings, analytics: !settings.analytics })}
                      className="relative w-11 h-6 rounded-full transition-colors duration-300"
                      style={{ backgroundColor: settings.analytics ? "#000" : "#d1d5db" }}
                    >
                      <div
                        className="absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300"
                        style={{ left: settings.analytics ? "calc(100% - 22px)" : "2px" }}
                      />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    Pomáhajú nám pochopiť, ako návštevníci používajú našu stránku, čo nám umožňuje zlepšovať jej funkčnosť.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Marketingové cookies</h3>
                    <button
                      onClick={() => setSettings({ ...settings, marketing: !settings.marketing })}
                      className="relative w-11 h-6 rounded-full transition-colors duration-300"
                      style={{ backgroundColor: settings.marketing ? "#000" : "#d1d5db" }}
                    >
                      <div
                        className="absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300"
                        style={{ left: settings.marketing ? "calc(100% - 22px)" : "2px" }}
                      />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    Používajú sa na zobrazovanie relevantných reklám a sledovanie efektivity marketingových kampaní.
                  </p>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-5 py-2.5 text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                >
                  Zrušiť
                </button>
                <button
                  onClick={() => saveSettings(settings)}
                  className="px-5 py-2.5 text-sm font-medium bg-black text-white hover:bg-gray-800 transition-colors duration-300"
                >
                  Uložiť nastavenia
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
