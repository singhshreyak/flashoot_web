import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import type { Photographer } from "@shared/schema";

interface PhotographerCardProps {
  photographer: Photographer;
}

export default function PhotographerCard({ photographer }: PhotographerCardProps) {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-background/10 to-background/30 backdrop-blur-xl border border-white/10 group hover:border-primary/20 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,2,2,0.1),transparent_100%)] group-hover:animate-pulse" />
      <CardHeader className="relative flex flex-row items-center gap-4 p-6">
        <Avatar className="h-16 w-16 ring-2 ring-white/5 shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:ring-primary/20">
          <AvatarImage src={photographer.profilePicture} />
          <AvatarFallback>{photographer.name[0]}</AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <CardTitle className="text-lg flex items-center gap-2">
            {photographer.name}
            <span className="text-primary text-2xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">⚡</span>
          </CardTitle>
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 transition-all duration-300 ${
                    i < photographer.rating 
                      ? 'fill-primary text-primary group-hover:scale-110 group-hover:rotate-12' 
                      : 'text-muted-foreground/20'
                  }`} 
                />
              ))}
            </div>
            <span className="text-sm ml-2 text-muted-foreground">{photographer.rating}/5</span>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}