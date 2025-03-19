import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
} from "framer-motion";
import { Link, useLocation } from "wouter";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute left-full ml-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  key={item.title}
                >
                  <motion.div
                    className={cn(
                      "h-10 w-10 rounded-xl backdrop-blur-xl border flex items-center justify-center transition-all duration-300",
                      location === item.href
                        ? "bg-primary/20 border-primary/30"
                        : "bg-black/40 border-white/10 hover:bg-white/10"
                    )}
                  >
                    <div className={cn(
                      "h-4 w-4",
                      location === item.href ? "text-primary" : "text-white"
                    )}>{item.icon}</div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-white" />
      </motion.button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  const [location] = useLocation();

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex flex-col gap-4 items-center rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 py-3 px-4",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer 
          key={item.title} 
          {...item} 
          isActive={location === item.href}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  title,
  icon,
  href,
  isActive,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
  isActive: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "w-10 h-10 rounded-xl backdrop-blur-xl border flex items-center justify-center relative transition-colors duration-300 group",
          isActive
            ? "bg-primary/20 border-primary/30"
            : "bg-black/40 border-white/10 hover:bg-white/10"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 5 }}
              className="absolute left-full ml-2 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-xl border border-white/10 text-white text-xs whitespace-nowrap"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={cn(
            "w-5 h-5 flex items-center justify-center transition-colors duration-300",
            isActive ? "text-primary" : "text-white/70 group-hover:text-white"
          )}
        >
          {icon}
        </div>
      </motion.div>
    </Link>
  );
}