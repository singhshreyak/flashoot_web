import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import NavHeader from './components/NavHeader';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { FloatingNav } from './components/FloatingNav';

function App() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />

      {/* Hero Section */}
      <section className="section-dark min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Gradient & Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ff000022,#00000000)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[300px] md:h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        </div>
        
        {/* Main Hero Content */}
        <div className="container mx-auto px-4 relative py-12 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="relative space-y-6 md:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                Book <span className="gradient-text">Reel-Makers</span>™
                <span className="block mt-2 sm:mt-4">Instantly, Effortlessly.</span>
              </h1>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => navigate('/coming-soon')}
                  className="w-full sm:w-auto group relative px-6 py-3 bg-gradient-to-r from-primary to-primary/90 rounded-xl font-medium text-white overflow-hidden glow-button backdrop-blur-sm border border-primary/20"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    Book Now
                  </span>
                </button>
                
                <Link href="/discover">
                  <button className="w-full sm:w-auto group flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all backdrop-blur-sm border border-white/10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur" />
                      <Play className="w-5 h-5 relative" />
                    </div>
                    Discover Vibe
                  </button>
                </Link>
              </div>

              {/* Featured In Section */}
              <div className="mt-16 sm:mt-24 md:mt-32 lg:mt-48">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                  <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    Featured In
                  </span>
                  <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    <img
                      src="https://flashoot.com/wp-content/uploads/2025/03/Outlook-Logo.png"
                      alt="Outlook India"
                      className="h-4 sm:h-5 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                    <img
                      src="https://flashoot.com/wp-content/uploads/2025/03/et-1.png"
                      alt="Economic Times"
                      className="h-5 sm:h-6 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                    <img
                      src="https://flashoot.com/wp-content/uploads/2025/03/ht-1.png"
                      alt="Hindustan Times"
                      className="h-5 sm:h-6 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Header */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 backdrop-blur-sm">
          {/* Stats Section */}
          <div className="container mx-auto px-4 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center backdrop-blur-xl border border-primary/10">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold">500+</div>
                    <div className="text-sm text-gray-400">Active Creators</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center backdrop-blur-xl border border-primary/10">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold">10K+</div>
                    <div className="text-sm text-gray-400">Videos Delivered</div>
                  </div>
                </div>
              </div>
              <Link href="/coming-soon">
                <button className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-white/10 to-transparent hover:from-white/15 hover:to-white/5 transition-all backdrop-blur-xl border border-white/10 font-medium">
                  View Pricing
                </button>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </section>

      {/* Floating Navigation */}
      <FloatingNav />

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

export default App;