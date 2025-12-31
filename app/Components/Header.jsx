"use client";

import { useState } from "react";
import { FiSearch, FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileBuyOpen, setMobileBuyOpen] = useState(false);
  const [mobileRentOpen, setMobileRentOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">Vinayaka Estate</div>

        <nav className="hidden md:flex gap-8 text-gray-700 relative">
          <a href="#" className="hover:text-black">
            Home
          </a>

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-black">
              Buy <FiChevronDown />
            </button>
            <div className="absolute top-full left-0 mt-2 w-180 bg-white shadow-lg rounded-lg p-4 grid grid-cols-3 gap-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
              <div>
                <h4 className="font-semibold mb-2">Popular Choices</h4>
                <ul className="space-y-1 text-sm">
                  <li>Ready to Move</li>
                  <li>Owner Properties</li>
                  <li>Budget Homes</li>
                  <li>New Projects</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Property Types</h4>
                <ul className="space-y-1 text-sm">
                  <li>Flats in Indore</li>
                  <li>House for sale in Indore</li>
                  <li>Villa in Indore</li>
                  <li>Plot in Indore</li>
                  <li>Office Space</li>
                  <li>Commercial Space</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Budget</h4>
                <ul className="space-y-1 text-sm">
                  <li>Under ₹50 Lac</li>
                  <li>₹50 Lac - ₹1 Cr</li>
                  <li>₹1 Cr - ₹1.5 Cr</li>
                  <li>Above ₹1.5 Cr</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop Rent Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-black">
              Rent <FiChevronDown />
            </button>
            <div className="absolute top-full left-0 mt-2 w-180 bg-white shadow-lg rounded-lg p-4 grid grid-cols-3 gap-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
              <div>
                <h4 className="font-semibold mb-2">Popular Choices</h4>
                <ul className="space-y-1 text-sm">
                  <li>Ready to Move</li>
                  <li>Owner Properties</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Property Types</h4>
                <ul className="space-y-1 text-sm">
                  <li>Flats in Indore</li>
                  <li>Commercial Space</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Budget</h4>
                <ul className="space-y-1 text-sm">
                  <li>Under ₹50 Lac</li>
                  <li>₹50 Lac - ₹1 Cr</li>
                  <li>Above ₹1.5 Cr</li>
                </ul>
              </div>
            </div>
          </div>

          <a href="#" className="hover:text-black">
            Sell
          </a>
          <a href="#" className="hover:text-black">
            Help
          </a>
          <a href="#" className="hover:text-black">
            Contact
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <FiSearch className="text-xl cursor-pointer" />
          <button className="btn-primary hidden md:inline">Sign in</button>
          <button className="btn-primary hidden md:inline">Sign up</button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Home
          </a>

          <div>
            <button
              className="w-full flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileBuyOpen(!mobileBuyOpen)}
            >
              Buy <FiChevronDown />
            </button>
            {mobileBuyOpen && (
              <div className="pl-4 py-2 space-y-2 border-l border-gray-300">
                <div>
                  <h4 className="font-semibold">Popular Choices</h4>
                  <ul className="pl-2 space-y-1 text-sm">
                    <li>Ready to Move</li>
                    <li>Owner Properties</li>
                    <li>Budget Homes</li>
                    <li>New Projects</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Property Types</h4>
                  <ul className="pl-2 space-y-1 text-sm">
                    <li>Flats in Indore</li>
                    <li>House for sale in Indore</li>
                    <li>Villa in Indore</li>
                    <li>Plot in Indore</li>
                    <li>Office Space</li>
                    <li>Commercial Space</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Budget</h4>
                  <ul className="pl-2 space-y-1 text-sm">
                    <li>Under ₹50 Lac</li>
                    <li>₹50 Lac - ₹1 Cr</li>
                    <li>₹1 Cr - ₹1.5 Cr</li>
                    <li>Above ₹1.5 Cr</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Rent */}
          <div>
            <button
              className="w-full flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileRentOpen(!mobileRentOpen)}
            >
              Rent <FiChevronDown />
            </button>
            {mobileRentOpen && (
              <div className="pl-4 py-2 space-y-2 border-l border-gray-300">
                <div>
                  <h4 className="font-semibold">Popular Choices</h4>
                  <ul className="pl-2 space-y-1 text-sm">
                    <li>Ready to Move</li>
                    <li>Owner Properties</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Property Types</h4>
                  <ul className="pl-2 space-y-1 text-sm">
                    <li>Flats in Indore</li>
                    <li>Commercial Space</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Budget</h4>
                  <ul className="pl-2 space-y-1 text-sm">
                    <li>Under ₹50 Lac</li>
                    <li>₹50 Lac - ₹1 Cr</li>
                    <li>Above ₹1.5 Cr</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Sell
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Help
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Contact
          </a>

          <div className="flex flex-col px-4 py-2 gap-2">
            <button className="btn-primary w-full">Sign in</button>
            <button className="btn-primary w-full">Sign up</button>
          </div>
        </nav>
      )}
    </header>
  );
}
