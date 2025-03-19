import React, { useState } from 'react';
import { Mail, ArrowRight, Star } from 'lucide-react';
import { toast } from 'sonner';
import { subscribeToNewsletter } from '@/lib/ghost';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubmitting(true);

    try {
      await subscribeToNewsletter(email);
      
      toast.success("Welcome to Flashoot!", {
        description: "Check your inbox for your exclusive 50% discount code.",
        action: {
          label: "Close",
          onClick: () => toast.dismiss(),
        },
      });
      
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-sm font-medium text-primary">Special Offer</span>
                </div>

                <h2 className="text-4xl font-bold leading-tight">
                  Get <span className="gradient-text">50% Off</span> Your First Order
                </h2>

                <p className="text-gray-400 text-lg">
                  Join our newsletter for exclusive offers and expert content creation tips.
                </p>
              </div>

              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Join 5,000+ content creators</p>
                  <p className="text-sm text-gray-400">Get weekly insights and tips</p>
                </div>
              </div>
            </div>

            {/* Right Column - Newsletter Form */}
            <div>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full h-12 pl-10 pr-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-primary text-white font-medium flex items-center justify-center gap-2 disabled:opacity-50 transition-colors hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Subscribe & Get 50% Off</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="space-y-4">
                    <div className="h-px bg-white/10" />
                    <p className="text-xs text-gray-500">
                      By subscribing, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}