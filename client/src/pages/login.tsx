import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/lib/auth";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [otp, setOtp] = useState("");
  const { toast } = useToast();
  const { login } = useAuth();
  const [, navigate] = useLocation();

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone === '9999999999') {
      toast({
        title: "OTP Sent",
        description: "For demo, use OTP: 123456",
      });
      setStep('otp');
    } else {
      toast({
        title: "Invalid Number",
        description: "For demo, use: 9999999999",
        variant: "destructive"
      });
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(phone, otp);
    if (success) {
      toast({
        title: "Login Successful",
        description: "Welcome back!",
      });
      navigate('/dashboard');
    } else {
      toast({
        title: "Invalid OTP",
        description: "For demo, use: 123456",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32">
      {/* Background gradients and patterns */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.05]" />

          {/* Radial gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,2,2,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,2,2,0.1),transparent_30%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,2,2,0.1),transparent_30%)]" />

          {/* Animated orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      <div className="container px-4 mx-auto">
        <div className="max-w-md mx-auto relative">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-background/10 to-background/30 backdrop-blur-xl border border-white/10 p-8">
            {/* Glassmorphism effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,2,2,0.1),transparent_100%)] opacity-0 group-hover:opacity-100 transition-all duration-500" />

            <div className="relative space-y-8">
              {/* Header Section */}
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {step === 'phone' ? "System Login" : "Verify Identity"}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {step === 'phone' 
                    ? "Access your dashboard using mobile verification" 
                    : "Enter the verification code sent to your device"}
                </p>
              </div>

              {step === 'phone' ? (
                <form onSubmit={handleSendOTP} className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="phone" className="text-sm font-medium">Mobile Authentication</Label>
                      <span className="text-xs text-muted-foreground">IND +91</span>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 blur-xl"></div>
                      <div className="relative flex gap-2">
                        <div className="bg-background/50 rounded-md px-3 flex items-center text-sm text-muted-foreground border border-white/10 backdrop-blur-xl">
                          +91
                        </div>
                        <Input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="bg-background/50 h-12 transition-all duration-300 hover:bg-background/70 focus:bg-background/70 flex-1 border-white/10 backdrop-blur-xl"
                          required
                          placeholder="Enter mobile number"
                          pattern="[0-9]{10}"
                          maxLength={10}
                        />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full relative group overflow-hidden h-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-100 group-hover:opacity-90 transition-opacity" />
                    <span className="relative text-white font-medium group-hover:scale-105 transition-transform">
                      Initialize Verification
                    </span>
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOTP} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="otp" className="text-sm font-medium">Security Code</Label>
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 blur-xl"></div>
                        <Input
                          id="otp"
                          type="text"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className="bg-background/50 h-12 transition-all duration-300 hover:bg-background/70 focus:bg-background/70 text-center tracking-[1em] font-mono text-lg border-white/10 backdrop-blur-xl relative"
                          required
                          placeholder="• • • • • •"
                          pattern="[0-9]{6}"
                          maxLength={6}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <button 
                        type="button" 
                        onClick={() => setStep('phone')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Reset Number
                      </button>
                      <button 
                        type="button" 
                        className="text-primary hover:text-primary/80 transition-colors"
                        onClick={handleSendOTP}
                      >
                        Resend Code
                      </button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full relative group overflow-hidden h-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-100 group-hover:opacity-90 transition-opacity" />
                    <span className="relative text-white font-medium group-hover:scale-105 transition-transform">
                      Authenticate
                    </span>
                  </Button>
                </form>
              )}

              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-center text-muted-foreground">
                  New to platform?{" "}
                  <Link href="/signup" className="text-primary hover:text-primary/80 transition-colors font-medium">
                    Initialize Registration
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}