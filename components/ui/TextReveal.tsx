"use client";

import { motion } from "framer-motion";
import { textRevealContainer, textRevealWord } from "@/lib/animations";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({
  children,
  className,
  as: Tag = "h1",
}: TextRevealProps) {
  // Wenn children JSX-Elemente enthalten (z.B. GradientText), ohne Wort-Split rendern
  if (typeof children !== "string") {
    return (
      <motion.div
        variants={textRevealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Tag className={className}>{children}</Tag>
      </motion.div>
    );
  }

  const words = children.split(" ");

  return (
    <motion.div
      variants={textRevealContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-wrap"
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            variants={textRevealWord}
            className={`inline-block ${className ?? ""}`}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
