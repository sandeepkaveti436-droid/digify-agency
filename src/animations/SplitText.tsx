"use client";

import { motion, Variants } from "framer-motion";

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
}

export const SplitText = ({
  text = "",
  className,
  delay = 0,
}: SplitTextProps) => {
  const words = (text || "").split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay + 0.04 * i,
      },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9] as const,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(12px)",
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <span
          key={index}
          className="overflow-hidden inline-block mr-[0.25em] py-1"
        >
          <motion.span variants={child} className="inline-block">
            {word === "" ? "\u00A0" : word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};
