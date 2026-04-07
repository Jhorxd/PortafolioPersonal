"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-primary pointer-events-none z-[9999] bg-transparent"
        style={{ 
          x: cursorX, 
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{ 
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "var(--color-secondary, #06b6d4)" : "var(--color-primary, #8b5cf6)"
        }}
        transition={{ duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-secondary pointer-events-none z-[10000]"
        style={{ 
          x: cursorX, 
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
    </>
  );
};
