import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-32">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
          {/* Advanced grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.05]" />

          {/* Enhanced radial gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,2,2,0.25),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,2,2,0.15),transparent_30%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,2,2,0.15),transparent_30%)]" />

          {/* Animated background elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/5 via-primary/2 to-transparent rounded-full animate-spin-slow" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="text-center space-y-8 relative z-10">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
          Book{" "}
          <span className="bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
            Reel-Makers™
          </span>
          <br />
          Instantly, Effortlessly.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Connect with professional video creators to book, shoot, and edit reels on-the-spot.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/book">
            <Button size="lg" className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-100 group-hover:opacity-90 transition-opacity" />
              <span className="relative text-white font-medium group-hover:scale-105 transition-transform flex items-center gap-2">
                Book Now <ArrowUpRight className="h-5 w-5" />
              </span>
            </Button>
          </Link>
          <Link href="/packages">
            <Button variant="outline" size="lg" className="hover:bg-primary/5">
              View Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}