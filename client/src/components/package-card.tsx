import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import type { Package } from "@shared/schema";
import { Link } from "wouter";

interface PackageCardProps {
  package: Package;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{pkg.name}</CardTitle>
        <CardDescription>₹{pkg.price + " + GST"}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href={`/book?package=${pkg.id}`} className="w-full">
          <Button className="w-full">Book Now</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
