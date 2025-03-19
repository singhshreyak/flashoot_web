"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      {items.map((item) => (
        <TooltipComponent key={item.id} {...item} />
      ))}
    </div>
  );
};

const TooltipComponent = ({
  name,
  designation,
  image,
}: {
  name: string;
  designation: string;
  image: string;
}) => {
  return (
    <div className="relative group">
      <motion.div
        className="absolute -inset-2 rounded-lg bg-gradient-to-r from-primary/50 to-primary/30 opacity-0 group-hover:opacity-100 transition duration-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      <div className="relative flex items-center gap-2 rounded-lg p-2 leading-none">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="hidden group-hover:block">
          <p className="font-medium text-white">{name}</p>
          <p className="text-sm text-white/60">{designation}</p>
        </div>
      </div>
    </div>
  );
};