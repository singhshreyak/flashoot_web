import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NavHeader from "@/components/nav-header";
import Footer from "@/components/footer";

// Page imports
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Press from "@/pages/press";
import Blog from "@/pages/blog";
import Contact from "@/pages/contact";
import FAQ from "@/pages/faq";
import Partner from "@/pages/partner";
import Packages from "@/pages/packages";
import Book from "@/pages/book";
import Wallet from "@/pages/wallet";
import Profile from "@/pages/profile";
import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import { AuthProvider, ProtectedRoute } from "./lib/auth";

function Router() {
  return (
    <Switch>
      {/* Public Routes */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/press" component={Press} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/partner" component={Partner} />
      <Route path="/packages" component={Packages} />
      <Route path="/login" component={Login} />

      {/* Protected Routes */}
      <Route path="/book">
        {() => (
          <ProtectedRoute>
            <Book />
          </ProtectedRoute>
        )}
      </Route>
      <Route path="/wallet">
        {() => (
          <ProtectedRoute>
            <Wallet />
          </ProtectedRoute>
        )}
      </Route>
      <Route path="/profile">
        {() => (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        )}
      </Route>
      <Route path="/dashboard">
        {() => (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )}
      </Route>

      {/* 404 Route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="min-h-screen flex flex-col bg-background text-foreground antialiased dark">
          <NavHeader />
          <main className="flex-1 container mx-auto px-4 py-8">
            <Router />
          </main>
          <Footer />
          <Toaster />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;