import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Clock, Camera, Video, Users, Sparkles } from 'lucide-react';
import NavHeader from '../components/NavHeader';
import { Footer } from '../components/Footer';
import { FloatingNav } from '@/components/FloatingNav';
import { SparklesCore } from '@/components/ui/aceternity';
import { GlowingStarsBackgroundCard } from '@/components/ui/glowing-stars';
import { Card3D } from '@/components/ui/3d-card';

const plans = [
  {
    name: "Basic",
    price: "₹9,999",
    description: "Perfect for individuals and small businesses starting their content journey",
    features: [
      "2 Hours of Shooting",
      "5 Edited Reels/Stories",
      "Basic Color Grading",
      "24-Hour Delivery",
      "1 Location",
      "Social Media License"
    ],
    popular: false,
    gradient: "from-blue-500/20 via-blue-500/10 to-transparent"
  },
  {
    name: "Professional",
    price: "₹24,999",
    description: "Ideal for growing brands and content creators who need more content",
    features: [
      "6 Hours of Shooting",
      "15 Edited Reels/Stories",
      "Advanced Color Grading",
      "12-Hour Delivery",
      "3 Locations",
      "Commercial License",
      "Music Licensing",
      "Priority Support"
    ],
    popular: true,
    gradient: "from-primary/20 via-primary/10 to-transparent"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For established brands requiring high-volume, premium content creation",
    features: [
      "Unlimited Shooting Hours",
      "Unlimited Reels/Stories",
      "Premium Color Grading",
      "Same-Day Delivery",
      "Multiple Locations",
      "Full Commercial Rights",
      "Dedicated Account Manager",
      "Custom Branding",
      "Analytics Dashboard"
    ],
    popular: false,
    gradient: "from-purple-500/20 via-purple-500/10 to-transparent"
  }
];

const features = [
  {
    icon: Camera,
    title: "Professional Equipment",
    description: "Latest cameras and gear for high-quality content"
  },
  {
    icon: Video,
    title: "Expert Editing",
    description: "Professional post-production and effects"
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising quality"
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Experienced creators at your service"
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      
      <main className="relative pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
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

        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <section className="py-12 text-center relative">
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
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              >
                Simple, Transparent <span className="gradient-text">Pricing</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 max-w-2xl mx-auto text-lg"
              >
                Choose the perfect plan for your content creation needs. No hidden fees, just quality results.
              </motion.p>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card3D key={plan.name} className="h-full">
                  <GlowingStarsBackgroundCard className="h-full">
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <div className="bg-primary/20 backdrop-blur-sm border border-primary/20 rounded-full px-3 py-1 flex items-center gap-1">
                          <Star className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">Most Popular</span>
                        </div>
                      </div>
                    )}

                    <div className="h-full flex flex-col">
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <div className="flex items-baseline gap-1 mb-4">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          {plan.price !== "Custom" && <span className="text-gray-400">/project</span>}
                        </div>
                        <p className="text-gray-400 text-sm">{plan.description}</p>
                      </div>

                      <div className="flex-grow">
                        <div className="space-y-4 mb-8">
                          {plan.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                                <Check className="w-3 h-3 text-primary" />
                              </div>
                              <span className="text-sm text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button className="w-full px-4 py-3 rounded-xl bg-primary/20 hover:bg-primary/30 backdrop-blur-sm border border-primary/20 transition-colors font-medium">
                        Get Started
                      </button>
                    </div>
                  </GlowingStarsBackgroundCard>
                </Card3D>
              ))}
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Everything you need to create <span className="gradient-text">amazing content</span>
              </h2>
              <p className="text-gray-400">
                Professional tools and support to help you succeed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
                    <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/20 w-fit mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <Footer />
        </div>
      </main>

      {/* Floating Navigation */}
      <FloatingNav />
    </div>
  );
}