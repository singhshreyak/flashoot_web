import { useQuery } from "@tanstack/react-query";
import { type Package, type Photographer } from "@shared/schema";
import PackageCard from "@/components/package-card";
import PhotographerCard from "@/components/photographer-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import VideoReelCarousel from "@/components/video-reel-carousel";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  const { data: packages } = useQuery<Package[]>({
    queryKey: ["/api/packages"],
  });

  const { data: photographers } = useQuery<Photographer[]>({
    queryKey: ["/api/photographers/featured"],
  });

  const [email, setEmail] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your subscription logic here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,2,2,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,2,2,0.1),transparent_30%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,2,2,0.1),transparent_30%)]" />
        </div>
      </div>

      <div className="relative space-y-24">
        {/* Hero Section */}
        <section className="relative pt-32 pb-32">
          <div className="text-center space-y-8">
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
                <Button size="lg" className="gap-2">
                  Book Now <ArrowUpRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/packages">
                <Button variant="outline" size="lg">View Packages</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Creation Steps */}
        <section className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Boost your{" "}
              <span className="bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
                content-creation
              </span>{" "}
              game
            </h2>
          </div>

          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-background/10 to-background/30 backdrop-blur-xl border border-white/10 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-primary font-semibold">STEP 1</div>
                <h3 className="text-xl font-semibold">Book a Reel-Maker™</h3>
                <p className="text-muted-foreground">
                  Effortlessly book a reel-maker to create captivating reels anytime, anywhere.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-primary font-semibold">STEP 2</div>
                <h3 className="text-xl font-semibold">Shoot your Content</h3>
                <p className="text-muted-foreground">
                  Meet your reel-maker to capture high-quality footage tailored to your vision.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-primary font-semibold">STEP 3</div>
                <h3 className="text-xl font-semibold">Edit & Finalize</h3>
                <p className="text-muted-foreground">
                  Collaborate for post-shoot editing, ensuring polished, platform-ready reels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Instant Discounts */}
        <section className="container px-4">
          <SectionHeading title="Instant Rewards for Instant Bookings" subtitle="Exclusive discounts and offers for our valued customers"/>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { amount: "125", spend: "2000", code: "FLASH125" },
              { amount: "250", spend: "4000", code: "FLASH250" },
              { amount: "30%", spend: "", code: "FLASH30", special: "ON YOUR FIRST HOURLY BOOKING" }
            ].map((discount, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl backdrop-blur-xl border border-white/10 p-8 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-background/30" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,2,2,0.1),transparent_100%)] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                <div className="relative space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                      ₹{discount.amount} {discount.spend ? "OFF" : ""}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {discount.special || `ON SPENDS ABOVE RS.${discount.spend}`}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Use Code</span>
                      <code className="text-sm font-mono font-medium text-primary">
                        {discount.code}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partner's of the Week */}
        {photographers && photographers.length > 0 && (
          <section className="container px-4">
            <SectionHeading title="Meet Our Featured Partners" subtitle="Connect with the best photographers in your city"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  id: 1,
                  name: "Sarah Williams",
                  city: "Mumbai",
                  specialty: "Wedding Photography",
                  rating: 4.9,
                  bookings: 150,
                  image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d"
                },
                {
                  id: 2,
                  name: "Alex Rodriguez",
                  city: "Delhi",
                  specialty: "Fashion & Portfolio",
                  rating: 4.8,
                  bookings: 120,
                  image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                }
              ].map((photographer) => (
                <div
                  key={photographer.id}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-background/10 to-background/30 backdrop-blur-xl border border-white/10 p-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,2,2,0.1),transparent_100%)] opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="relative flex gap-6">
                    <div className="shrink-0">
                      <img
                        src={photographer.image}
                        alt={photographer.name}
                        className="h-24 w-24 rounded-xl object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold">{photographer.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{photographer.city}</span>
                          <span className="h-1 w-1 rounded-full bg-primary" />
                          <span>{photographer.specialty}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="text-lg font-semibold">{photographer.rating}</div>
                          <div className="text-primary">★★★★★</div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {photographer.bookings}+ bookings
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">Starting from</div>
                        <div className="text-2xl font-bold">₹1,999</div>
                      </div>
                      <Button size="sm" className="gap-2">
                        Book Now <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}


        {/* Editing Services */}
        <section className="container px-4">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-background/10 to-background/30 backdrop-blur-xl border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-8 space-y-4">
                <h2 className="text-3xl font-bold">Editing Services</h2>
                <p className="text-lg text-muted-foreground">
                  Looking for some professional video editing help?
                </p>
                <Button size="lg" className="mt-4">Try It Now!</Button>
              </div>
              <div className="relative h-[400px] overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1535016120720-40c646be5580"
                  alt="Video editing"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work / Discover with Vibe Section */}
        <section className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
              <span className="bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
                Discover with Vibe
              </span>
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
            </h2>
          </div>

          <VideoReelCarousel />
        </section>


        {/* Popular Packages Section */}
        {packages && packages.length > 0 && (
          <section className="container px-4">
            <SectionHeading title="Choose Your Perfect Package" subtitle="Tailored photography packages for every occasion"/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.slice(0, 3).map((pkg) => (
                <div
                  key={pkg.id}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-background/10 to-background/30 backdrop-blur-xl border border-white/10 p-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,2,2,0.1),transparent_100%)] opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="relative space-y-6">
                    <div>
                      <div className="text-sm text-primary font-medium mb-2">{pkg.type}</div>
                      <h3 className="text-2xl font-bold">{pkg.name}</h3>
                      <div className="mt-2 text-3xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                        ₹{pkg.price}
                      </div>
                    </div>

                    <div className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1 w-1 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full" size="lg">
                      Choose Plan
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter Section - Updated for interactivity */}
        <section className="container px-4 mb-16">
          <SectionHeading title="Stay in the Loop!" subtitle="Get exclusive photography tips, special offers, and creative inspiration delivered to your inbox"/>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-black/10" />
            </div>
            <div className="relative">
              <div className="max-w-2xl mx-auto text-center space-y-4">
                <p className="text-muted-foreground">
                  Get exclusive photography tips, special offers, and creative inspiration delivered to your inbox.
                </p>
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/80"
                    required
                  />
                  <Button type="submit" className="relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-100" />
                    <span className="relative text-white">Subscribe</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}