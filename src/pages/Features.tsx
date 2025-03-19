import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, Clock, Calendar, CreditCard, Globe, Users,
  Camera, Video, Clapperboard, Sparkles, Zap, Wallet, Shield, Star,
  Quote 
} from 'lucide-react';
import NavHeader from '../components/NavHeader';
import { Footer } from '../components/Footer';
import { FloatingNav } from '@/components/FloatingNav';
import { ContainerScrollDemo } from '@/components/ui/container-scroll-demo';
import { SparklesCore } from '@/components/ui/aceternity';
import { NewsletterSection } from '@/components/newsletter-section';
import { Card3D } from '@/components/ui/3d-card';

const features = [
  {
    title: "Book Professional Reel-Makers Instantly",
    description: "Hire from a network of 250+ expert reel-makers who specialize in short-format content, available at your fingertips via a seamless booking system.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "High-Quality Content Shot on Latest iPhones",
    description: "Every shoot is done using the latest iPhones, ensuring cinematic-quality short videos with top-tier clarity and stabilization.",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Hassle-Free Booking & Scheduling",
    description: "Users can easily schedule shoots, select locations, and get confirmation in just a few clicks—no complicated processes!",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1515847049296-a281d6401047?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Fast Content Delivery",
    description: "Get professionally shot and edited reels delivered quickly, perfect for social media marketing, influencer content, and brand promotions.",
    icon: Clock,
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Secure Payments & Transparent Pricing",
    description: "No hidden charges! Clients get upfront pricing, secure payment options, and a seamless checkout experience.",
    icon: CreditCard,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Available on Web & Mobile",
    description: "Whether on a smartphone or desktop, Flashoot works everywhere, making it convenient for users to book and manage their shoots anytime, anywhere.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function Features() {
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
        <ContainerScrollDemo />
      </section>

      {/* Partner Cards Section */}
      <section className="py-12 md:py-24 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partner <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400">
              Experience seamless collaboration with our professional network
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* First Card */}
            <div className="relative overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl">
              <div className="relative">
                <img 
                  src="https://flashoot.com/wp-content/uploads/2025/03/mockup-4-png.webp"
                  alt="Partners reach on time"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                  Partners Reach{' '}
                  <span className="text-primary">On Time</span>
                </h3>
                <p className="text-base md:text-lg text-gray-400">
                  Our dedicated network of creators ensures punctual arrivals and professional service delivery, every single time.
                </p>
              </div>
            </div>

            {/* Second Card */}
            <div className="relative overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl">
              <div className="relative">
                <img 
                  src="https://flashoot.com/wp-content/uploads/2025/03/Mockup-3-png.webp"
                  alt="Start using OTP"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                  Start Using{' '}
                  <span className="text-primary">OTP</span>
                </h3>
                <p className="text-base md:text-lg text-gray-400">
                  Secure and seamless authentication process for a hassle-free booking experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-12">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Wallet className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Secure Payments</span>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                  Manage Your{' '}
                  <span className="gradient-text">Payments</span>
                  {' '}with Ease
                </h2>
                <p className="text-base md:text-lg text-gray-400">
                  Experience hassle-free transactions with our secure in-app wallet. Add funds, track expenses, and manage payments all in one place.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/20 border border-primary/20">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Secure Transactions</h3>
                    <p className="text-base md:text-lg text-gray-400">
                      Bank-grade security ensures your money and data are always protected
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/20 border border-primary/20">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Instant Transfers</h3>
                    <p className="text-base md:text-lg text-gray-400">
                      Quick and easy transfers to creators after service completion
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative w-full h-full">
                <img
                  src="https://flashoot.com/wp-content/uploads/2025/03/Mockup-6-png.webp"
                  alt="Flashoot Wallet"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Convenience Cards Section */}
      <section className="py-12 md:py-24 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Convenient <span className="gradient-text">Booking</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400">
              Book and manage your shoots with ease
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* First Card */}
            <div className="relative overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl">
              <div className="relative">
                <div className="w-full">
                  <img 
                    src="https://flashoot.com/wp-content/uploads/2025/03/Mockup-8-png.webp"
                    alt="Select Shoot According to your convenience"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                  Select Shoot According to your{' '}
                  <span className="text-primary">Convenience</span>
                </h3>
                <p className="text-base md:text-lg text-gray-400">
                  Choose your preferred time and location for the shoot. Our flexible scheduling ensures a seamless experience.
                </p>
              </div>
            </div>

            {/* Second Card */}
            <div className="relative overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl">
              <div className="relative">
                <div className="w-full">
                  <img 
                    src="https://flashoot.com/wp-content/uploads/2025/03/Mockup-5-png.webp"
                    alt="Trustworthy Verified Partners"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                  Trustworthy{' '}
                  <span className="text-primary">Verified Partners</span>
                </h3>
                <p className="text-base md:text-lg text-gray-400">
                  Work with our carefully vetted and verified content creators who maintain the highest professional standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Creators Say</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400">
              Join thousands of satisfied content creators who trust Flashoot
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "Fashion Influencer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
                quote: "Flashoot has transformed how I create content. The quality and efficiency are unmatched!"
              },
              {
                name: "Michael Chen",
                role: "Travel Vlogger",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
                quote: "The platform makes it incredibly easy to find and book professional creators wherever I travel."
              },
              {
                name: "Emma Davis",
                role: "Lifestyle Creator",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&h=256&auto=format&fit=crop",
                quote: "The quality of work and attention to detail from Flashoot's creators is consistently excellent."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8"
              >
                <div className="absolute -top-4 left-6">
                  <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/20">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <div className="pt-4">
                  <p className="text-base md:text-lg text-gray-300 mb-6">{testimonial.quote}</p>
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                      <p className="text-sm md:text-base text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">Flashoot</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400">
              Experience the future of content creation with our innovative platform
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-6 md:p-8 overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/20 w-fit mb-6">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-base md:text-lg text-gray-400">{feature.description}</p>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary/50 to-transparent"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <Footer />
      </div>

      {/* Floating Navigation */}
      <FloatingNav />
    </div>
  );
}