import { useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { type Package } from "@shared/schema";
import BookingWizard from "@/components/booking-wizard";

export default function Book() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(location.split("?")[1]);
  const selectedPackageId = searchParams.get("package");

  const { data: packages } = useQuery<Package[]>({
    queryKey: ["/api/packages"],
  });

  const selectedPackage = selectedPackageId 
    ? packages?.find(p => p.id === parseInt(selectedPackageId))
    : undefined;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Book a Photographer</h1>
        <p className="text-muted-foreground">
          Follow the steps below to book your photography session
        </p>
      </div>

      <BookingWizard initialPackage={selectedPackage} />
    </div>
  );
}
