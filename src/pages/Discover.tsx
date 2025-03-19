import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Play, Loader2 } from 'lucide-react';
import NavHeader from '../components/NavHeader';
import { FloatingNav } from '@/components/FloatingNav';
import { Footer } from '@/components/Footer';

const categories = [
  "All",
  "Weddings",
  "Car Delivery",
  "Restaurants",
  "Fashion",
  "Lifestyle",
  "Events"
];

const reels = [
  {
    id: 1,
    category: "Weddings",
    video: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-having-their-first-dance-at-their-wedding-23269-large.mp4",
    title: "First Dance Magic",
    views: "12.5K"
  },
  {
    id: 2,
    category: "Car Delivery",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-turning-on-the-lights-of-a-car-43659-large.mp4",
    title: "Luxury Car Reveal",
    views: "8.2K"
  },
  {
    id: 3,
    category: "Restaurants",
    video: "https://assets.mixkit.co/videos/preview/mixkit-serving-a-delicious-plate-of-food-in-a-restaurant-34753-large.mp4",
    title: "Culinary Excellence",
    views: "15.3K"
  },
  {
    id: 4,
    category: "Fashion",
    video: "https://assets.mixkit.co/videos/preview/mixkit-woman-modeling-in-the-street-710-large.mp4",
    title: "Street Style",
    views: "20.1K"
  },
  {
    id: 5,
    category: "Lifestyle",
    video: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-working-out-at-home-1235-large.mp4",
    title: "Morning Workout",
    views: "18.7K"
  },
  {
    id: 6,
    category: "Events",
    video: "https://assets.mixkit.co/videos/preview/mixkit-people-dancing-at-a-party-11082-large.mp4",
    title: "Event Highlights",
    views: "10.9K"
  },
  {
    id: 7,
    category: "Weddings",
    video: "https://assets.mixkit.co/videos/preview/mixkit-bride-getting-ready-for-her-wedding-day-34783-large.mp4",
    title: "Bridal Preparations",
    views: "14.2K"
  },
  {
    id: 8,
    category: "Fashion",
    video: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-on-a-catwalk-14271-large.mp4",
    title: "Runway Moments",
    views: "22.8K"
  },
  {
    id: 9,
    category: "Lifestyle",
    video: "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-yoga-at-sunset-1232-large.mp4",
    title: "Sunset Yoga",
    views: "16.4K"
  }
];

const VideoCard = ({ reel }: { reel: typeof reels[0] }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const togglePlay = (video: HTMLVideoElement) => {
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative h-full rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 group">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      )}
      
      <video
        src={reel.video}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={handleVideoLoad}
        onClick={(e) => togglePlay(e.currentTarget)}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            const video = e.currentTarget.closest('.group')?.querySelector('video');
            if (video) togglePlay(video);
          }}
        >
          <Play className="w-8 h-8 text-white" />
        </motion.button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-3">
          <h3 className="text-lg font-semibold mb-1">{reel.title}</h3>
          <p className="text-sm text-gray-400">{reel.views} views</p>
        </div>
      </div>
    </div>
  );
};

export default function Discover() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);

  const filteredReels = activeCategory === "All" 
    ? reels 
    : reels.filter(reel => reel.category === activeCategory);

  const totalPages = Math.ceil(filteredReels.length / 3);
  const currentReels = filteredReels.slice(currentPage * 3, (currentPage + 1) * 3);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <NavHeader />
      
      <main className="flex-1 relative">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ff000022,#00000000)]" />
          <motion.div
            className="absolute -right-64 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative pt-20 pb-24">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-3"
              >
                Discover with <span className="gradient-text">Vibe</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-lg"
              >
                Explore trending reels from our creators
              </motion.p>
            </div>

            {/* Category Tabs */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide max-w-full">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setCurrentPage(0);
                    }}
                    className={`px-6 py-2.5 rounded-full whitespace-nowrap transition-colors ${
                      activeCategory === category
                        ? "bg-primary text-white"
                        : "bg-white/5 hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Reels Section with Navigation */}
            <div className="flex items-center gap-8 mb-8">
              {/* Left Arrow - Hidden on Mobile */}
              {totalPages > 1 && (
                <motion.button
                  onClick={prevPage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="hidden md:block p-4 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <ArrowLeft className="w-6 h-6" />
                </motion.button>
              )}

              {/* Reels Container */}
              <div className="flex-1 h-[600px]">
                <div className="relative h-full overflow-hidden">
                  <motion.div
                    className="h-full flex gap-6 transition-all duration-500 ease-out"
                    style={{
                      transform: `translateX(-${currentPage * 100}%)`,
                    }}
                  >
                    {currentReels.map((reel) => (
                      <div
                        key={reel.id}
                        className="h-full w-full md:w-[calc(33.333%-1rem)] flex-shrink-0"
                      >
                        <VideoCard reel={reel} />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Right Arrow - Hidden on Mobile */}
              {totalPages > 1 && (
                <motion.button
                  onClick={nextPage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="hidden md:block p-4 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              )}
            </div>

            {/* Page Dots */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mb-8">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentPage ? 'bg-primary' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Navigation */}
      <FloatingNav />
    </div>
  );
}