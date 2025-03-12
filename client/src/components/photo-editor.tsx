import { useState, useCallback } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { 
  SunMedium, 
  Contrast, 
  ImageDown,
  Droplets,
  Palette,
  RefreshCw
} from "lucide-react";

interface FilterSettings {
  brightness: number;
  contrast: number;
  saturation: number;
  blur: number;
}

export default function PhotoEditor() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterSettings>({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    blur: 0
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getFilterStyle = useCallback(() => {
    return {
      filter: `brightness(${filters.brightness}%) contrast(${filters.contrast}%) saturate(${filters.saturation}%) blur(${filters.blur}px)`
    };
  }, [filters]);

  const resetFilters = () => {
    setFilters({
      brightness: 100,
      contrast: 100,
      saturation: 100,
      blur: 0
    });
  };

  return (
    <div className="rounded-xl overflow-hidden bg-gradient-to-br from-background/10 to-background/30 backdrop-blur-xl border border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Preview Area */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-background/50">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-full object-cover transition-all duration-300"
                style={getFilterStyle()}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                <ImageDown className="h-12 w-12 mb-2" />
                <p>Upload an image to start editing</p>
              </div>
            )}
          </div>
          <div className="flex justify-between">
            <Button variant="outline" className="relative overflow-hidden">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              Upload Image
            </Button>
            <Button variant="outline" onClick={resetFilters}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset Filters
            </Button>
          </div>
        </div>

        {/* Controls Area */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Adjust Filters</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <SunMedium className="h-4 w-4 text-primary" />
                    <span>Brightness</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{filters.brightness}%</span>
                </div>
                <Slider
                  value={[filters.brightness]}
                  min={0}
                  max={200}
                  step={1}
                  onValueChange={([value]) => setFilters(prev => ({ ...prev, brightness: value }))}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Contrast className="h-4 w-4 text-primary" />
                    <span>Contrast</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{filters.contrast}%</span>
                </div>
                <Slider
                  value={[filters.contrast]}
                  min={0}
                  max={200}
                  step={1}
                  onValueChange={([value]) => setFilters(prev => ({ ...prev, contrast: value }))}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Palette className="h-4 w-4 text-primary" />
                    <span>Saturation</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{filters.saturation}%</span>
                </div>
                <Slider
                  value={[filters.saturation]}
                  min={0}
                  max={200}
                  step={1}
                  onValueChange={([value]) => setFilters(prev => ({ ...prev, saturation: value }))}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-primary" />
                    <span>Blur</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{filters.blur}px</span>
                </div>
                <Slider
                  value={[filters.blur]}
                  min={0}
                  max={10}
                  step={0.1}
                  onValueChange={([value]) => setFilters(prev => ({ ...prev, blur: value }))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
