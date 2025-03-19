import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Zap, Lock, Code, Target } from 'lucide-react';
import NavHeader from '../components/NavHeader';
import { Footer } from '../components/Footer';
import { FloatingNav } from '@/components/FloatingNav';
import { SparklesCore } from '@/components/ui/aceternity';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay, 
  gradient 
}: { 
  icon: any;
  title: string;
  description: string;
  delay: number;
  gradient: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="relative group h-full"
  >
    <motion.div
      className={`absolute inset-0 ${gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <div className="relative h-full p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="flex flex-col gap-4 h-full">
        <div className={`p-3 rounded-xl ${gradient} backdrop-blur-sm w-fit`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="space-y-2 flex-grow">
          <h4 className="text-lg font-semibold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            {title}
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Patent() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavHeader />
      
      <main className="flex-1 relative pt-20 pb-24">
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

        <div className="container max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-4 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Header */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm">Patent Pending Technology</span>
                </motion.div>

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
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.1]">
                    Innovation in{' '}
                    <span className="bg-gradient-to-r from-[#FF6B6B] via-[#9B6BFF] to-[#6B9BFF] bg-clip-text text-transparent">
                      Progress
                    </span>
                  </h1>

                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    Our latest technology is <span className="text-primary">patent pending</span>, showcasing our commitment to pioneering innovation.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 backdrop-blur-sm border border-yellow-500/20"
                >
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm md:text-base text-yellow-400">Flashoot App Technology Patent Pending</span>
                </motion.div>
              </div>

              {/* Right Column - Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureCard
                  icon={Zap}
                  title="Revolutionary Platform"
                  description="Our innovative technology connects content creators with businesses through an automated platform."
                  delay={0.4}
                  gradient="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]"
                />

                <FeatureCard
                  icon={Lock}
                  title="Advanced Security"
                  description="Military-grade encryption ensures secure transactions and protects intellectual property."
                  delay={0.5}
                  gradient="bg-gradient-to-r from-[#7928CA] to-[#FF0080]"
                />

                <FeatureCard
                  icon={Code}
                  title="Smart Automation"
                  description="Automated workflows and intelligent systems optimize the content creation pipeline."
                  delay={0.6}
                  gradient="bg-gradient-to-r from-[#FF6B6B] to-[#6B9BFF]"
                />

                <FeatureCard
                  icon={Target}
                  title="Precision Matching"
                  description="AI-driven algorithms ensure perfect creator-client matches based on style and requirements."
                  delay={0.7}
                  gradient="bg-gradient-to-r from-[#6B9BFF] to-[#9B6BFF]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Navigation */}
      <FloatingNav />
    </div>
  );
}