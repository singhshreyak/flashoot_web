"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [glowOpacity, setGlowOpacity] = React.useState(0.5);

  return (
    <div
      className={cn(
        "relative min-h-[300px] w-full bg-black/40 backdrop-blur-xl rounded-3xl p-8 overflow-hidden border border-white/10",
        className
      )}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const distance = Math.sqrt(
          Math.pow(mouseX - rect.width / 2, 2) + Math.pow(mouseY - rect.height / 2, 2)
        );
        const maxDistance = Math.sqrt(
          Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2)
        );
        setGlowOpacity(1 - distance / maxDistance);
      }}
      onMouseLeave={() => setGlowOpacity(0.5)}
    >
      <div className="absolute inset-0">
        <div className="absolute h-full w-full">
          {[...Array(140)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.5, glowOpacity, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="absolute h-0.5 w-0.5 bg-primary rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: `blur(${Math.random() * 2}px)`,
              }}
            />
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};