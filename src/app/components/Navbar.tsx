'use client'

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#FFF5DD] border-b border-dark h-[40px] md:h-[60px] font-[family-name:var(--font-ibm-plex-mono-semi-bold)] sticky top-0 z-50 mx-[25px] md:mx-[50px]">
      <div className="h-full flex items-center justify-end uppercase">
        {/* Desktop Navigation - Right Aligned */}
        <div className="hidden md:flex items-center gap-16 ">
          <Link href="/shop" className="text-[#1F1818] hover:text-[#DC9A4F] transition-all duration-150 ease-out">
            Shop
          </Link>
          <Link href="/about" className="text-[#1F1818] hover:text-[#DC9A4F] transition-all duration-150 ease-out">
            About
          </Link>
          <Link href="/contact" className="text-[#1F1818] hover:text-[#DC9A4F] transition-all duration-150 ease-out">
            Contact
          </Link>
          <Link href="/menu" className="text-[#1F1818] hover:text-[#DC9A4F] transition-all duration-150 ease-out">
            Menu
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#1F1818] hover:text-[#DC9A4F] focus:outline-none"
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
        className={`md:hidden bg-[#FFF5DD] px-4 overflow-hidden transition-all ease-out duration-300 border-b border-[#1F1818] ${
          isMenuOpen ? 'max-h-[200px] pt-2 pb-4 border-opacity-100' : 'max-h-[0px] py-0 border-opacity-0'
        }`}
      >
        <div className="space-y-3">
          <Link href="/shop" className="block text-[#1F1818] hover:text-[#DC9A4F] transition-all duration-150">
            Shop
          </Link>
          <Link href="/about" className="block text-[#1F1818] hover:text-[#DC9A4F] transition-all duration-150">
            About
          </Link>
          <Link href="/contact" className="block text-[#1F1818] hover:text-[#DC9A4F] transition-all duration-150">
            Contact
          </Link>
          <Link href="/menu" className="block text-[#1F1818] hover:text-[#DC9A4F] transition-all duration-150">
            Menu
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
