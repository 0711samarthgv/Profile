import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return;

    setEnabled(true);
    const move = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-40 h-52 w-52 rounded-full bg-primary/20 blur-3xl"
      animate={{ x: position.x - 104, y: position.y - 104 }}
      transition={{ type: "spring", stiffness: 140, damping: 18, mass: 0.35 }}
    />
  );
}
