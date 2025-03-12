import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { UserNav } from "@/components/user-nav";
import { useQuery } from "@tanstack/react-query";
import { type User } from "@shared/schema";

export default function NavHeader() {
  const { isAuthenticated } = useAuth();
  const { data: user } = useQuery<User>({
    queryKey: ["/api/users/1"],
    enabled: isAuthenticated,
  });

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <img 
              src="https://flashoot.com/wp-content/uploads/2024/02/LOGO_png-01.png" 
              alt="Flashoot" 
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex items-center gap-4">
            {/* Get the App Button - Different style */}
            <Link href="/download">
              <Button 
                variant="outline"
                size="lg"
                className="relative group overflow-hidden bg-background/50 backdrop-blur-sm border-white/20"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,2,2,0.1),transparent_100%)] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <span className="relative flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
                  <Download className="h-4 w-4" />
                  Get the App
                </span>
              </Button>
            </Link>

            {/* Conditional rendering based on auth status */}
            {isAuthenticated ? (
              <UserNav user={user} />
            ) : (
              <Link href="/login">
                <Button 
                  size="lg"
                  className="relative group overflow-hidden font-bold"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-100 group-hover:opacity-90 transition-opacity" />
                  <span className="relative text-white">
                    Login
                  </span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}