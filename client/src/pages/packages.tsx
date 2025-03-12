import { useQuery } from "@tanstack/react-query";
import { type Package } from "@shared/schema";
import PackageCard from "@/components/package-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Packages() {
  const { data: packages } = useQuery<Package[]>({
    queryKey: ["/api/packages"],
  });

  const weddingPackages = packages?.filter(p => p.type === "wedding") || [];
  const corporatePackages = packages?.filter(p => p.type === "corporate") || [];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Packages</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose from our range of photography packages designed for weddings, corporate events,
          and instant bookings.
        </p>
      </div>

      <Tabs defaultValue="wedding" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="wedding">Wedding Packages</TabsTrigger>
          <TabsTrigger value="corporate">Corporate Packages</TabsTrigger>
        </TabsList>

        <TabsContent value="wedding" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weddingPackages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="corporate" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporatePackages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
