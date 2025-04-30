'use client';

import React from 'react';
import { motion } from 'framer-motion';

type useScrollRevealProps = {
  children: React.ReactNode;
  delay: number;
  initialY?: number;
  animateY?: number;
  initialX?: number;
  animateX?: number;
  duration: number;
  className?: string;
  forceAnimate?: boolean;
};

export const useScrollReveal = ({
  children,
  delay,
  initialY,
  animateY,
  duration,
  className,
  forceAnimate = false,
}: useScrollRevealProps) => {
  if (forceAnimate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: initialY ? initialY : 0 }}
        animate={{ opacity: 1, y: animateY ? animateY : 0 }}
        transition={{
          duration: duration,
          delay: delay,
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: initialY ? initialY : 0 }}
      whileInView={{ opacity: 1, y: animateY ? animateY : 0 }}
      viewport={{ once: true }}
      transition={{
        duration: duration,
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
