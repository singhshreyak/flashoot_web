import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Smartphone, ChevronRight, LogOut, Settings, UserIcon, Menu, X, Home, Sparkles, Newspaper, Lightbulb, DollarSign, Compass, History } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { useQuery } from "@tanstack/react-query";
import type { User } from "@/shared/schema";
import { AppDownloadDialog } from "@/components/app-download-dialog";
import { Menu as HeadlessMenu, Transition } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';

const navigationItems = [
  {
    title: "Home",
    icon: Home,
    href: "/"
  },
  {
    title: "Discover Vibe",
    icon: Compass,
    href: "/discover"
  },
  {
    title: "Features",
    icon: Sparkles,
    href: "/features"
  },
  {
    title: "Our Journey",
    icon: History,
    href: "/journey"
  },
  {
    title: "Patent",
    icon: Lightbulb,
    href: "/patent"
  },
  {
    title: "Press & Blog",
    icon: Newspaper,
    href: "/press"
  },
  {
    title: "Pricing",
    icon: DollarSign,
    href: "/pricing"
  }
];

export default function NavHeader() {
  const { isAuthenticated } = useAuth();
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, navigate] = useLocation();
  const [location] = useLocation();

  const { data: user } = useQuery<User>({
    queryKey: ["/api/users/1"],
    queryFn: () => ({ id: "1", name: "Demo User", email: "demo@example.com", avatar: "https://github.com/shadcn.png" }),
    enabled: isAuthenticated,
  });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/">
              <img 
                src="https://flashoot.com/wp-content/uploads/2024/02/LOGO_png-01.png" 
                alt="Flashoot" 
                className="h-12 w-auto cursor-pointer"
              />
            </Link>
          </motion.div>

          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden sm:block"
            >
              <button
                onClick={() => setIsDownloadDialogOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Smartphone className="h-5 w-5" />
                Get the App
                <ChevronRight className="h-4 w-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {isAuthenticated ? (
                <HeadlessMenu as="div" className="relative">
                  <HeadlessMenu.Button className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <img
                      src={user?.avatar}
                      alt={user?.name}
                      className="h-8 w-8 rounded-full border-2 border-white/10"
                    />
                  </HeadlessMenu.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-in"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <HeadlessMenu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-lg bg-black/50 backdrop-blur-xl border border-white/10 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-2">
                        <HeadlessMenu.Item>
                          {({ active }) => (
                            <Link href="/profile" className={`${
                              active ? 'bg-white/5' : ''
                            } flex items-center gap-2 px-4 py-2 text-sm`}>
                              <UserIcon className="h-4 w-4" />
                              Profile
                            </Link>
                          )}
                        </HeadlessMenu.Item>
                        <HeadlessMenu.Item>
                          {({ active }) => (
                            <Link href="/settings" className={`${
                              active ? 'bg-white/5' : ''
                            } flex items-center gap-2 px-4 py-2 text-sm`}>
                              <Settings className="h-4 w-4" />
                              Settings
                            </Link>
                          )}
                        </HeadlessMenu.Item>
                        <div className="h-px bg-white/10 my-2" />
                        <HeadlessMenu.Item>
                          {({ active }) => (
                            <button className={`${
                              active ? 'bg-white/5' : ''
                            } flex items-center gap-2 px-4 py-2 text-sm text-red-500 w-full`}>
                              <LogOut className="h-4 w-4" />
                              Logout
                            </button>
                          )}
                        </HeadlessMenu.Item>
                      </div>
                    </HeadlessMenu.Items>
                  </Transition>
                </HeadlessMenu>
              ) : (
                <button
                  onClick={() => navigate('/coming-soon')}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 font-semibold hover:opacity-90 transition-opacity"
                >
                  Login
                </button>
              )}
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors sm:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-black/90 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
                        location === item.href
                          ? "bg-primary/20 border border-primary/30"
                          : "bg-white/5 border border-white/10"
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${
                        location === item.href ? "text-primary" : "text-white"
                      }`} />
                      <span className="font-medium">{item.title}</span>
                    </motion.div>
                  </Link>
                );
              })}

              <button
                onClick={() => {
                  setIsDownloadDialogOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/20 border border-primary/30"
              >
                <Smartphone className="h-5 w-5 text-primary" />
                <span className="font-medium">Get the App</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AppDownloadDialog 
        open={isDownloadDialogOpen} 
        onOpenChange={setIsDownloadDialogOpen} 
      />
    </nav>
  );
}