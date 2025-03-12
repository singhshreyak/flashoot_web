import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery, useMutation } from "@tanstack/react-query";
import { type Package, type InsertBooking } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";

interface BookingWizardProps {
  initialPackage?: Package;
}

type BookingFormData = {
  location: string;
  packageId: number;
  addOns: {
    noWatermark: boolean;
    mobilePhotography: boolean;
    extraReel: boolean;
  };
};

export default function BookingWizard({ initialPackage }: BookingWizardProps) {
  const [selectedPackage, setSelectedPackage] = useState(initialPackage);
  const { toast } = useToast();
  const form = useForm<BookingFormData>({
    defaultValues: {
      packageId: initialPackage?.id,
      addOns: {
        noWatermark: false,
        mobilePhotography: false,
        extraReel: false
      }
    },
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      const res = await apiRequest("POST", "/api/bookings", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking Confirmed",
        description: "Your booking has been successfully created.",
      });
    },
  });

  const { data: packages } = useQuery<Package[]>({
    queryKey: ["/api/packages"],
  });

  const addOns = [
    { id: "noWatermark", label: "No Watermark", price: 499, description: "Without Flashoot Branding" },
    { id: "mobilePhotography", label: "Mobile Photography", price: 799, description: "Upto 50 Pics, Min 2 rs Booking" },
    { id: "extraReel", label: "Extra Reel", price: 499, description: "For One Additional Reel" }
  ];

  const calculateTotal = () => {
    let total = selectedPackage?.price || 0;
    const addOnValues = form.watch("addOns");

    if (addOnValues.noWatermark) total += 499;
    if (addOnValues.mobilePhotography) total += 799;
    if (addOnValues.extraReel) total += 499;

    return total;
  };

  return (
    <div className="bg-gradient-to-br from-background/10 to-background/30 backdrop-blur-xl border border-white/10 rounded-xl p-6">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
        <ChevronLeft className="h-4 w-4" />
        Back
      </Link>

      <div className="text-xl font-semibold mb-6">Booking Summery</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Package Details */}
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold">₹{selectedPackage?.price}</h3>
              <h4 className="text-lg font-medium">{selectedPackage?.name}</h4>
            </div>
            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              + GST
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Experience the best with our Hourly Plan, offering top-tier services and advanced features for professional-grade reels.</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                <span>60-second Reel creation.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                <span>Expert reel-maker assigned.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                <span>Up to 1 hour of shoot time.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                <span>1 Reel delivered.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                <span>Live stories coverage.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                <span>RAW content provided.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                <span>Instant reel and delivery.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                <span>Mobile portrait photos unavailable</span>
              </div>
            </div>
          </div>

          <div className="pt-4 space-y-2 text-sm">
            <h5 className="font-medium">Cancellation Policy</h5>
            <p className="text-muted-foreground">Free cancellation if it's more than an hour before your appointment or before a photographer is assigned. You may incur a fee for late cancellations on your next booking.</p>
          </div>
        </div>

        {/* Right Column - Shoot Details & Add-ons */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">Shoot Details</h3>

            <div className="space-y-2">
              <Label>Send booking details to</Label>
              <Input
                placeholder="+91 9640 156773"
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <Label>Shoot Location</Label>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">
                  AR Enclave, sanjay gandhi nagar, srinagar colony main road, ammerpet,...
                </div>
                <Button variant="outline" size="sm">
                  Edit Address
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Price Details</Label>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Hourly Package</span>
                  <span className="text-sm">₹ 1,999</span>
                </div>
                <div className="text-xs text-muted-foreground">Only for one hour shoot</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Add On's</h3>
            <div className="space-y-4">
              {addOns.map((addon) => (
                <div key={addon.id} className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id={addon.id}
                      onCheckedChange={(checked) => {
                        form.setValue(`addOns.${addon.id as keyof BookingFormData['addOns']}`, checked as boolean);
                      }}
                    />
                    <div>
                      <Label
                        htmlFor={addon.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {addon.label}
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        {addon.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm font-medium">+ ₹{addon.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <Button className="w-full" size="lg">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}