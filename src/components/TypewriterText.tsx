import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TypewriterText({ text, className = "", delay = 0 }: TypewriterTextProps) {
  const controls = useAnimationControls();
  const letters = Array.from(text);

  useEffect(() => {
    const sequence = async () => {
      await controls.start(i => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.05 + delay }
      }));
    };
    sequence();
  }, [controls, delay]);

  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          animate={controls}
          initial={{ opacity: 0, y: 20 }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}