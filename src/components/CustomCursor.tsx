"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export const CustomCursor = () => {
  // useMotionValue actualiza el DOM directamente y se salta el ciclo de renderizado de React
  // esto elimina cualquier tipo de delay.
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
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

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
        animate={{ scale: isHovering ? 1.5 : 1 }}
        transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-secondary pointer-events-none z-[10000]"
        style={{ x: dotX, y: dotY }}
      />
    </>
  );
};
