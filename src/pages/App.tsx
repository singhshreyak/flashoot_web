import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import NavHeader from '../components/NavHeader';
import { Footer } from '../components/Footer';
import { FloatingNav } from '@/components/FloatingNav';

const features = [
  "On-Demand Reel Creation",
  "Effortless Booking",
  "Quality Assurance"
];

export default function AppShowcase() {
  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      
      <main className="relative min-h-screen pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ff000022,#00000000)]" />
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  Your Vision, Our Expertise
                </h2>
                <h1 className="text-5xl font-bold leading-tight">
                  Create{' '}
                  <span className="bg-gradient-to-r from-[#FF6B6B] via-[#9B6BFF] to-[#6B9BFF] bg-clip-text text-transparent">
                    Content
                  </span>
                  <br />
                  With Ease
                </h1>
              </div>

              <p className="text-lg text-gray-400 leading-relaxed">
                Our reel creators come to shoot and edit your reels, delivering a seamless and professional experience directly to you.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="h-16"
                  />
                </a>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="h-12"
                  />
                </a>
              </div>
            </motion.div>

            {/* Right Column - App Screenshots */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <img
                  src="https://flashoot.com/wp-content/uploads/2024/07/screens-1.png"
                  alt="Flashoot App Screenshots"
                  className="relative rounded-3xl shadow-2xl scale-110"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <Footer />
        </div>
      </main>

      {/* Floating Navigation */}
      <FloatingNav />
    </div>
  );
}