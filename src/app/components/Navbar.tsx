'use client'

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-light border-b border-dark h-[40px] md:h-[60px] sticky top-0 z-50 mx-[25px] md:mx-[50px]">
      <div className=" h-full flex items-center justify-end font-[family-name:var(--font-ibm-plex-mono-semi-bold)] uppercase">
        {/* Desktop Navigation - Right Aligned */}
        <div className="hidden md:flex items-center gap-16">
          <Link href="/shop" className="text-gray-700 hover:text-gray-900">
            Shop
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
          <Link href="/menu" className="text-gray-700 hover:text-gray-900">
            Menu
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-3">
          <Link href="/shop" className="block text-gray-700 hover:text-gray-900">
            Shop
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-gray-900">
            Contact
          </Link>
          <Link href="/menu" className="block text-gray-700 hover:text-gray-900">
            Menu
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
