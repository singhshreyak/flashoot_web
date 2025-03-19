import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Link } from 'wouter';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
              <div className="relative p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <p className="text-sm sm:text-base">
                    We use third-party cookies in order to personalise your experience. Read our{' '}
                    <Link href="/cookies">
                      <span className="text-primary hover:text-primary/80 transition-colors cursor-pointer">
                        Cookie Policy
                      </span>
                    </Link>
                    .
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    onClick={handleReject}
                    className="px-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-sm font-medium transition-colors"
                  >
                    Reject
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    onClick={handleAccept}
                    className="px-6 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-colors"
                  >
                    Allow
                  </motion.button>
                </div>
                <button
                  onClick={handleReject}
                  className="absolute top-2 right-2 p-1 rounded-lg hover:bg-white/5 transition-colors sm:hidden"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}