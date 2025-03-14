'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, ReactNode } from 'react';

interface SlideUpProps {
  children: ReactNode;
  className?: string;
}

export default function SlideUp({ children, className = "" }: SlideUpProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <motion.div 
      className={className}
      initial={{ y: 100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
} 