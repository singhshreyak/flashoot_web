import { Home, Sparkles, Newspaper, Lightbulb, DollarSign, Compass, History } from 'lucide-react';
import { FloatingDock } from '@/components/ui/floating-dock';
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/aceternity';

const links = [
  {
    title: "Home",
    icon: <Home className="h-full w-full" />,
    href: "/",
  },
  {
    title: "Discover Vibe",
    icon: <Compass className="h-full w-full" />,
    href: "/discover",
  },
  {
    title: "Features",
    icon: <Sparkles className="h-full w-full" />,
    href: "/features",
  },
  {
    title: "Our Journey",
    icon: <History className="h-full w-full" />,
    href: "/journey",
  },
  {
    title: "Patent",
    icon: <Lightbulb className="h-full w-full" />,
    href: "/patent",
  },
  {
    title: "Press & Blog",
    icon: <Newspaper className="h-full w-full" />,
    href: "/press",
  },
  {
    title: "Pricing",
    icon: <DollarSign className="h-full w-full" />,
    href: "/pricing",
  }
];

export function FloatingNav() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-36 left-4 z-50 hidden sm:block" // Hide on mobile, show on sm breakpoint and up
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#fff"
          />
        </div>
        <FloatingDock 
          items={links}
          className="relative z-10"
        />
      </div>
    </motion.div>
  );
}