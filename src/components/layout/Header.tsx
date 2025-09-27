"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Floor Plans", href: "/floor-plans" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about-us" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full h-20 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl border-b border-white/30 shadow-lg shadow-black/5"
          : "backdrop-blur-none border-b border-transparent"
      }`}
      style={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.8)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link
            href="/"
            className="cursor-pointer transition-opacity hover:opacity-80"
            onClick={closeMobileMenu}
          >
            <Image
              className="w-[120px] h-[26px] sm:w-[159px] sm:h-[35px]"
              alt="Blueplan logo"
              src="/images/logos/BlueplanLogo.svg"
              width={159}
              height={35}
            />
          </Link>

          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-8">
            <nav className="hidden lg:flex items-center gap-8">
              {navigationItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap relative py-2 px-1 ${
                    isScrolled
                      ? "text-gray-700 hover:text-gray-900"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link href="/contact-us">
              <button className="bg-[#009ce0] hover:bg-[#0088cc] text-white px-3 sm:px-4 lg:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl hover:scale-105">
                Get a Quote
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden hover:opacity-80 transition-all duration-300 p-2 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden absolute top-20 left-0 right-0 backdrop-blur-md transition-all duration-300 ${
              isScrolled ? "bg-white shadow-lg" : ""
            }`}
            style={{
              backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(15, 20, 37, 0.95)",
            }}
          >
            <nav className="px-4 py-6 space-y-4">
              {navigationItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`block text-base font-medium hover:opacity-80 transition-all duration-300 cursor-pointer py-2 border-b last:border-b-0 ${
                    isScrolled ? "text-gray-800 border-gray-200" : "text-white border-gray-600/30"
                  }`}
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
