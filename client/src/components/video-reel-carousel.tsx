import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const reels = [
  {
    id: 1,
    url: "https://flashoot.com/wp-content/uploads/2024/07/564E0528-19AB-4F79-8F7E-6086F68CEB18.gif",
    title: "Wedding Highlights"
  },
  {
    id: 2,
    url: "https://flashoot.com/wp-content/uploads/2024/07/copy_D0B8D3C1-D47F-48D5-85B0-C5E27B3FEDC1_1.gif",
    title: "Corporate Event"
  },
  {
    id: 3,
    url: "https://flashoot.com/wp-content/uploads/2024/07/copy_D0B8D3C1-D47F-48D5-85B0-C5E27B3FEDC1_2.gif",
    title: "Product Shoot"
  },
  {
    id: 4,
    url: "https://flashoot.com/wp-content/uploads/2024/07/copy_D0B8D3C1-D47F-48D5-85B0-C5E27B3FEDC1_3.gif",
    title: "Fashion Photography"
  },
];

export default function VideoReelCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Width of one reel + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative">
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {reels.map((reel) => (
          <div 
            key={reel.id}
            className="flex-none w-[280px] aspect-[9/16] rounded-xl overflow-hidden snap-center relative group"
          >
            <img
              src={reel.url}
              alt={reel.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-medium">{reel.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-background"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-background"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}
