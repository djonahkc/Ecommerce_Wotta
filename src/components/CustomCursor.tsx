import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-4 h-4 rounded-full bg-cyan-500 mix-blend-difference pointer-events-none z-50"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
      <motion.div
        className="fixed w-8 h-8 rounded-full border border-purple-500 mix-blend-difference pointer-events-none z-50"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", damping: 40, stiffness: 150 }}
      />
    </>
  );
};

export default CustomCursor;