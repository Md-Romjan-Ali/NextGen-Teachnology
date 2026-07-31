"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  // Only render on non-touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-blue-500/60"
        animate={{
          x: pos.x - (isHovering ? 24 : 20),
          y: pos.y - (isHovering ? 24 : 20),
          width: isHovering ? 48 : 40,
          height: isHovering ? 48 : 40,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-2 h-2 rounded-full bg-blue-500"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
    </>
  );
}
