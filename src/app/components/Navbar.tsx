'use client'

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07, // 2ms stagger effect
        delayChildren: 0.1
      }
    }
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <nav className="bg-[#FFF5DD] border-b border-dark h-[40px] md:h-[60px] font-[family-name:var(--font-ibm-plex-mono-semi-bold)] sticky top-0 z-50 mx-[25px] md:mx-[50px]">
      <div className="h-full flex items-center justify-end uppercase">
        {/* Desktop Navigation - Right Aligned */}
        <motion.div 
          className="hidden md:flex items-center gap-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={linkVariants}>
            <Link href="/menu" className="text-dark hover:text-[#DC9A4F] transition-all duration-150 ease-out">
              Menu
            </Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            <Link href="/shop" className="text-dark hover:text-[#DC9A4F] transition-all duration-150 ease-out">
              Shop
            </Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            <Link href="/about" className="text-dark hover:text-[#DC9A4F] transition-all duration-150 ease-out">
              About
            </Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            <Link href="/contact" className="text-dark hover:text-[#DC9A4F] transition-all duration-150 ease-out">
              Contact
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-dark hover:text-[#DC9A4F] focus:outline-none"
          >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-[#FFF5DD] px-4 overflow-hidden transition-all ease-out duration-300 border-b border-dark ${
          isMenuOpen ? 'max-h-[200px] pt-2 pb-4 border-opacity-100' : 'max-h-[0px] py-0 border-opacity-0'
        }`}
      >
        <div className="space-y-3">
          <Link href="/shop" className="block text-dark hover:text-[#DC9A4F] transition-all duration-150">
            Shop
          </Link>
          <Link href="/about" className="block text-dark hover:text-[#DC9A4F] transition-all duration-150">
            About
          </Link>
          <Link href="/contact" className="block text-dark hover:text-[#DC9A4F] transition-all duration-150">
            Contact
          </Link>
          <Link href="/menu" className="block text-dark hover:text-[#DC9A4F] transition-all duration-150">
            Menu
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
