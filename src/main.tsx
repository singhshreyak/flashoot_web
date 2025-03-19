import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router, Route } from 'wouter';
import App from './App';
import Features from './pages/Features';
import Press from './pages/Press';
import AppShowcase from './pages/App';
import Patent from './pages/Patent';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';
import Discover from './pages/Discover';
import Journey from './pages/Journey';
import './index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Route path="/" component={App} />
        <Route path="/coming-soon" component={ComingSoon} />
        <Route path="/discover" component={Discover} />
        <Route path="/features" component={Features} />
        <Route path="/press" component={Press} />
        <Route path="/app" component={AppShowcase} />
        <Route path="/patent" component={Patent} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/contact" component={Contact} />
        <Route path="/journey" component={Journey} />
      </Router>
    </QueryClientProvider>
  </StrictMode>
);