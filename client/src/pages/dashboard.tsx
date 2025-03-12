import { useQuery } from "@tanstack/react-query";
import { type User } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Search, Camera, Video, Users, Calendar } from "lucide-react";
import { UserNav } from "@/components/user-nav";
import { useAuth } from "@/lib/auth";

export default function Dashboard() {
  const { isAuthenticated } = useAuth();
  const { data: user, isLoading } = useQuery<User>({
    queryKey: ["/api/users/1"],
    enabled: isAuthenticated,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.03]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,2,2,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,2,2,0.1),transparent_30%)]" />
        </div>
      </div>

      <main className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Hero Section with Welcome Message */}
          <div className="relative pt-32 pb-12 mb-12">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/5 via-primary/2 to-transparent rounded-full animate-spin-slow" />
            </div>

            <div className="relative">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="space-y-4 max-w-2xl">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Welcome back,{" "}
                    <span className="bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
                      {user?.name?.split(" ")[0]}! 👋
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Book your next photoshoot instantly. Choose from our curated selection of professional photographers.
                  </p>
                </div>
                <div className="md:self-start">
                  <UserNav user={user} />
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Location & Search Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Location Card */}
            <Card className="relative overflow-hidden bg-background/50 backdrop-blur-xl border-white/10 group hover:border-primary/20 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,2,2,0.2),transparent_70%)] opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative p-6 flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground/90">Current Location</p>
                  <p className="text-sm text-muted-foreground truncate">
                    AR Enclave, sanjay gandhi nagar, srinagar colony
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary transition-colors shrink-0 group-hover:bg-primary/10"
                >
                  Change
                </Button>
              </div>
            </Card>

            {/* Search Card */}
            <Card className="relative overflow-hidden bg-background/50 backdrop-blur-xl border-white/10 group hover:border-primary/20 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,2,2,0.2),transparent_70%)] opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative p-6 flex items-center gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <Input
                      placeholder="Search photographers, services, locations..."
                      className="pl-10 bg-background/50 border-white/10 transition-all duration-300 hover:bg-background/70 focus:bg-background/70 group-hover:border-primary/20"
                    />
                  </div>
                </div>
                <Button className="relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-100 group-hover:opacity-90 transition-opacity" />
                  <span className="relative text-white font-medium group-hover:scale-105 transition-transform">
                    Search
                  </span>
                </Button>
              </div>
            </Card>
          </div>

          {/* Service Categories */}
          <div className="space-y-6 mb-12">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Popular Services</h2>
              <Button variant="ghost" className="text-primary hover:bg-primary/10">View All</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Instant Reels",
                  description: "Professional reel makers at your service",
                  icon: Video,
                },
                {
                  title: "Event Coverage",
                  description: "Capture your special moments",
                  icon: Camera,
                },
                {
                  title: "Wedding Shoots",
                  description: "Premium wedding photography packages",
                  icon: Users,
                },
                {
                  title: "Business Portfolio",
                  description: "Professional business photoshoots",
                  icon: Calendar,
                },
              ].map((service, index) => (
                <Card key={index} className="relative overflow-hidden group cursor-pointer backdrop-blur-xl border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60" />
                  <div className="relative p-6 space-y-4">
                    <service.icon className="h-8 w-8 text-white" />
                    <div>
                      <h3 className="font-semibold text-white">{service.title}</h3>
                      <p className="text-sm text-white/80">{service.description}</p>
                    </div>
                    <Button
                      variant="secondary"
                      className="w-full justify-between bg-white text-primary hover:bg-white/90"
                    >
                      Book Now
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Recent Bookings</h2>
              <Button variant="ghost" className="text-primary hover:bg-primary/10">View All</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(2)].map((_, index) => (
                <Card key={index} className="backdrop-blur-xl border-white/10 group hover:border-primary/20 transition-all duration-300">
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Hourly Package</h3>
                        <p className="text-sm text-muted-foreground">Scheduled for tomorrow, 3:00 PM</p>
                      </div>
                      <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white">
                        View Details
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Hyderabad, Telangana</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}