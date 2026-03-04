"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  variant?:
    | "fadeInUp"
    | "blurIn"
    | "scaleIn"
    | "slideInLeft"
    | "slideInRight"
    | "springIn";
}

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  duration = 0.5,
  distance = 20,
  once = true,
  variant = "fadeInUp",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });

  const variants: Record<string, Variants> = {
    fadeInUp: {
      hidden: { opacity: 0, y: distance },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
      },
    },
    blurIn: {
      hidden: { opacity: 0, filter: "blur(8px)", scale: 0.96 },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
      },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.94 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
      },
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -distance },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
      },
    },
    slideInRight: {
      hidden: { opacity: 0, x: distance },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
      },
    },
    springIn: {
      hidden: { opacity: 0, scale: 0.9, y: 20 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 400, damping: 35, delay },
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
}
