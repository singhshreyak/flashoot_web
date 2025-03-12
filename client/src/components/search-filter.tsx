import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { 
  Search,
  Image as ImageIcon,
  Calendar,
  MapPin,
  Camera,
  Tags,
  Grid3X3,
  List
} from "lucide-react";

type ViewMode = "grid" | "list";

export default function SearchFilter() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [priceRange, setPriceRange] = useState([1000, 5000]);

  // Placeholder data for mood board
  const moodBoardImages = [
    "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
    "https://images.unsplash.com/photo-1551434678-e076c223a692",
    "https://images.unsplash.com/photo-1535016120720-40c646be5580",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  ];

  return (
    <div className="space-y-6">
      {/* Search and Filters Header */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search by style, location, or photographer name..." 
            className="pl-9 pr-4"
          />
        </div>
        
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="h-4 w-4" />
            Date
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <MapPin className="h-4 w-4" />
            Location
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Camera className="h-4 w-4" />
            Photographer
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Tags className="h-4 w-4" />
            Style
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
          </Button>
        </div>

        {/* Price Range Slider */}
        <div className="px-2">
          <Slider
            defaultValue={[1000, 5000]}
            max={10000}
            min={0}
            step={100}
            value={priceRange}
            onValueChange={setPriceRange}
            className="w-full"
          />
        </div>
      </div>

      {/* Mood Board Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Visual Mood Board</h2>
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className={`grid ${viewMode === "grid" ? "grid-cols-3" : "grid-cols-1"} gap-4`}>
          {moodBoardImages.map((image, index) => (
            <div 
              key={index}
              className={`
                group relative overflow-hidden rounded-lg bg-muted 
                ${viewMode === "grid" ? "aspect-square" : "aspect-video"}
              `}
            >
              <img
                src={image}
                alt={`Mood board image ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 flex items-center gap-2">
                  <Button size="icon" variant="ghost" className="h-8 w-8 text-white">
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
