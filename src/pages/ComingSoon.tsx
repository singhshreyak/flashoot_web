import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesCore } from '@/components/ui/aceternity';
import { Mail, ArrowRight, Gift, Check, ArrowLeft, Star, Download } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'wouter';
import { Footer } from '@/components/Footer';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(87);
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-04-30T23:59:59').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setWaitlistCount(prev => prev + 1);
    
    toast.success("You're on the waitlist!", {
      description: (
        <div className="space-y-2">
          <p>You're one step closer to getting your free shoot!</p>
          <div className="flex items-center gap-2 text-primary">
            <Check className="w-4 h-4" />
            <span className="font-medium">Position secured: #{waitlistCount + 1}</span>
          </div>
        </div>
      ),
    });

    setIsSubmitting(false);
    setEmail('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ff000022,#00000000)]" />
        <motion.div
          className="absolute -right-64 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full"
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

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-4 left-4 z-50"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-6xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Column */}
            <div className="relative order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 -z-10">
                    <SparklesCore
                      background="transparent"
                      minSize={0.4}
                      maxSize={1}
                      particleDensity={100}
                      className="w-full h-full"
                      particleColor="#fff"
                    />
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
                    The Future of{' '}
                    <span className="relative">
                      <span className="gradient-text">Content</span>
                      <motion.div
                        className="absolute -right-6 -top-6"
                        animate={{
                          rotate: [0, 20, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Star className="w-8 h-8 text-primary" fill="currentColor" />
                      </motion.div>
                    </span>
                  </h1>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 leading-[1.1]">
                    is Coming
                  </h2>
                </div>

                <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl">
                  Get ready for a revolutionary way to create and manage your social media content. Join our waitlist to be among the first to experience it.
                </p>

                {/* Timer */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { value: timeLeft.days, label: "Days" },
                    { value: timeLeft.hours, label: "Hours" },
                    { value: timeLeft.minutes, label: "Minutes" },
                    { value: timeLeft.seconds, label: "Seconds" }
                  ].map(({ value, label }) => (
                    <div key={label} className="relative group">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <div className="relative p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 text-center">
                        <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                          {value.toString().padStart(2, '0')}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400">{label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Download Apps Section */}
                <div className="space-y-4">
                  <div className="text-xl font-semibold">Download our Apps Today</div>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    <a
                      href="https://apps.apple.com/in/app/flashoot/id6504755078"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[140px] sm:w-[160px] h-[42px] sm:h-[48px]"
                    >
                      <img
                        src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                        alt="Download on the App Store"
                        className="w-full h-full"
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.flashoot.user"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[160px] sm:w-[200px] h-[48px] sm:h-[60px]"
                    >
                      <img
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        alt="Get it on Google Play"
                        className="w-full h-full object-contain"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="relative order-1 lg:order-2 pt-16 lg:pt-0"> {/* Added pt-16 for mobile spacing */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-3xl blur-xl" />
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl space-y-8">
                  {/* Promo Banner */}
                  <div className="bg-gradient-to-r from-primary/20 to-transparent p-4 rounded-xl border border-primary/20 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-sm">
                      <Gift className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">First 100 users get</div>
                      <div className="text-lg sm:text-xl font-bold text-primary">One Free Shoot!</div>
                      <div className="text-sm text-primary/80 mt-1">
                        {100 - waitlistCount} spots remaining
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">Join the Waitlist</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full h-12 sm:h-14 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                          required
                        />
                      </div>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full h-12 sm:h-14 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Join Waitlist</span>
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4">
                    <div className="text-sm text-gray-400">You'll get early access to:</div>
                    {[
                      "Professional content creators network",
                      "Seamless booking system",
                      "Exclusive launch pricing",
                      "Priority support"
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}