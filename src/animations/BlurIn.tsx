"use client";

import { motion } from "framer-motion";
import React from "react";

interface BlurInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const BlurIn = ({
  children,
  className,
  delay = 0,
  duration = 1,
}: BlurInProps) => {
  return (
    <motion.div
      initial={{ filter: "blur(20px)", opacity: 0, y: 20 }}
      whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Premium ease-out
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
