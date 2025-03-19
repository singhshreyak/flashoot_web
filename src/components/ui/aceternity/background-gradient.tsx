"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/50 to-primary/30 [mask-image:linear-gradient(black,black)]",
          animate && "group-hover:opacity-100 animate-gradient",
          className
        )}
      />
      <div className="relative flex h-full w-full items-center justify-center bg-black rounded-[calc(1.5rem-4px)]">
        {children}
      </div>
    </div>
  );
};