import { useQuery } from "@tanstack/react-query";
import { type User } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Share2 } from "lucide-react";

export default function Profile() {
  // For demo, using user ID 1
  const { data: user } = useQuery<User>({
    queryKey: ["/api/users/1"],
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">My Profile</h1>
        <p className="text-muted-foreground">
          Manage your profile and referral information
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="https://images.unsplash.com/photo-1602661287394-ccf02e1a0893" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <Button variant="outline">Change Photo</Button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={user?.name} readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={user?.email} readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" value={user?.phone} readOnly />
              </div>
            </div>

            <Button className="w-full">Update Profile</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Refer & Earn</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm text-muted-foreground">
              Share your referral code with friends and earn ₹500 when they make their first booking!
            </p>

            <div className="space-y-2">
              <Label>Your Referral Code</Label>
              <div className="flex gap-2">
                <Input value={user?.referralCode} readOnly />
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-muted p-4">
              <h3 className="font-semibold mb-2">How it works</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Share your referral code with friends</li>
                <li>They sign up using your code</li>
                <li>They make their first booking</li>
                <li>You earn ₹500 in your wallet!</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
