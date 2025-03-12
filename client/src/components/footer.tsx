import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "We'll keep you updated with the latest news and offers.",
    });
    setEmail("");
  };

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8">
          <div className="absolute inset-0">
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.05]" />

            {/* Animated background elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="relative">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Join Our Creative Community
              </h2>
              <p className="text-muted-foreground">
                Stay updated with the latest photography trends, exclusive offers, and creative inspiration.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
                <div className="relative flex-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 blur-xl" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/80 relative border-white/10 h-12"
                    required
                  />
                </div>
                <Button type="submit" className="h-12 px-6 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-100 group-hover:opacity-90 transition-opacity" />
                  <span className="relative text-white font-medium group-hover:scale-105 transition-transform">
                    Subscribe
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <img 
              src="https://flashoot.com/wp-content/uploads/2024/02/LOGO_png-01.png" 
              alt="Flashoot" 
              className="h-8 hover:opacity-80 transition-opacity"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional photography and videography booking platform.
              Get instant reels and high-quality content delivered to you.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                ['About Us', '/about'],
                ['Careers', '/careers'],
                ['Team', '/team'],
                ['Contact', '/contact'],
                ['Corporate', '/corporate'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link 
                    href={href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                  >
                    <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities Section */}
          <div>
            <h3 className="font-semibold mb-4">Available in</h3>
            <ul className="space-y-3">
              {[
                'Mumbai',
                'Delhi',
                'Bangalore',
                'Hyderabad',
                'Pune',
              ].map((city) => (
                <li key={city}>
                  <Link 
                    href={`/${city.toLowerCase()}`} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                  >
                    <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {city}
                  </Link>
                </li>
              ))}
              <li>
                <select className="mt-2 bg-background text-sm text-muted-foreground border border-border rounded-md p-1 hover:border-primary/20 transition-colors">
                  <option>685 cities</option>
                </select>
              </li>
            </ul>
          </div>

          {/* Download Section */}
          <div>
            <h3 className="font-semibold mb-4">Download App</h3>
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl bg-black p-4 group hover:bg-black/90 transition-all duration-300">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,2,2,0.1),transparent_100%)] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 blur-lg" />
                    <div className="relative w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                      <div className="w-20 h-20 bg-black rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs">QR Code</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white text-sm">Scan to download</p>
                    <p className="text-white/60 text-xs">Available on the App Store and Play Store</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <a 
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 relative group overflow-hidden rounded-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative h-[40px] bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">Google Play</span>
                  </div>
                </a>
                <a 
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 relative group overflow-hidden rounded-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative h-[40px] bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Flashoot. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {[
                ['Instagram', 'https://instagram.com/flashoot'],
                ['Twitter', 'https://twitter.com/flashoot'],
                ['Facebook', 'https://facebook.com/flashoot']
              ].map(([platform, href]) => (
                <a 
                  key={platform}
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}