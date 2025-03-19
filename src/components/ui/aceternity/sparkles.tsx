"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  particleDensity,
  particleColor,
  particleClass,
  ...props
}: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  particleClass?: string;
  [key: string]: any;
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [canvasSize, setCanvasSize] = React.useState({ width: 0, height: 0 });
  const density = particleDensity || 100;
  const lower = minSize || 0.1;
  const upper = maxSize || 2;

  const particles = React.useMemo(() => {
    if (typeof window === "undefined") return [];
    return Array.from({ length: density }, () => ({
      x: Math.random() * canvasSize.width,
      y: Math.random() * canvasSize.height,
      size: Math.random() * (upper - lower) + lower,
      speed: Math.random() * 0.2 + 0.1,
    }));
  }, [canvasSize, density, lower, upper]);

  React.useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      const observer = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (entry) {
          setCanvasSize({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          });
          if (canvasRef.current) {
            canvasRef.current.width = entry.contentRect.width;
            canvasRef.current.height = entry.contentRect.height;
          }
        }
      });

      observer.observe(canvasRef.current);
      let animationFrame: number;
      const render = () => {
        if (ctx && canvasRef.current) {
          ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
          particles.forEach((particle) => {
            particle.y -= particle.speed;
            if (particle.y < -particle.size) {
              particle.y = canvasSize.height + particle.size;
            }
            ctx.fillStyle = particleColor || "#ffffff";
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
          });
          animationFrame = requestAnimationFrame(render);
        }
      };
      render();
      return () => {
        observer.disconnect();
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [particles, canvasSize, particleColor]);

  return (
    <div className={cn("h-full w-full", className)} {...props}>
      <canvas
        ref={canvasRef}
        style={{
          background: background || "transparent",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};