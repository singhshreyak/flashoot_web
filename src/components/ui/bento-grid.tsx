import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:auto-rows-[20rem] md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className={cn(
        "row-span-1 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 group/bento hover:border-white/20 transition-colors duration-700",
        className
      )}
    >
      <div className="relative h-full p-6 flex flex-col justify-between">
        {header}
        <div>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-primary/20 backdrop-blur-sm border border-primary/20">
              {icon}
            </div>
            <div className="font-semibold text-xl text-white">
              {title}
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-300">
            {description}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-black/0 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};