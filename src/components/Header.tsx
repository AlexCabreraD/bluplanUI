"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { label: "Home", left: "left-0", href: "/" },
  { label: "Services", left: "left-16", href: "/services" },
  { label: "Floor Plans", left: "left-[146px]", href: "/floor-plans" },
  { label: "Projects", left: "left-[243px]", href: "/projects" },
  { label: "About Us", left: "left-[322px]", href: "#" },
  { label: "Resources", left: "left-[406px]", href: "#" },
  { label: "Contact Us", left: "left-[501px]", href: "#" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full h-20 z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(15, 20, 37, 0.9)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="cursor-pointer" onClick={closeMobileMenu}>
            <Image
              className="w-[120px] h-[26px] sm:w-[159px] sm:h-[35px]"
              alt="Blueplan logo"
              src="/images/logos/BlueplanLogo.svg"
              width={159}
              height={35}
            />
          </Link>

          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-8">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-white text-sm font-medium hover:opacity-80 transition-opacity cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button className="bg-[#003b55] hover:bg-[#004a66] text-white px-3 sm:px-4 lg:px-6 py-2 rounded-[20px] text-xs sm:text-sm font-bold transition-colors whitespace-nowrap cursor-pointer">
              Get a Quote
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white hover:opacity-80 transition-opacity p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 backdrop-blur-md" style={{ backgroundColor: 'rgba(15, 20, 37, 0.95)' }}>
            <nav className="px-4 py-6 space-y-4">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block text-white text-base font-medium hover:opacity-80 transition-opacity cursor-pointer py-2 border-b border-gray-600/30 last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}