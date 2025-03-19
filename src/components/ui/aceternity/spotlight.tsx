"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const Spotlight = ({
  children,
  className = "",
  fill = "white"
}: {
  children: React.ReactNode;
  className?: string;
  fill?: string;
}) => {
  const mousePosition = React.useRef({ x: 0, y: 0 });
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef<HTMLDivElement>(null);

  const updateMousePosition = (ev: MouseEvent) => {
    if (!divRef.current) return;
    
    const { clientX, clientY } = ev;
    const { height, width, left, top } = divRef.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    mousePosition.current = { x, y };
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPosition(mousePosition.current);
    }, 100);

    window.addEventListener("mousemove", updateMousePosition, false);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={cn("relative overflow-hidden", className)}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${fill}, transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};