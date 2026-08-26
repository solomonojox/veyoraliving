"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiChevronDown,
  FiPhone,
  FiTruck,
  FiMenu,
  FiX,
} from "react-icons/fi";

const NAV_LINKS = [
  { label: "Shop", hasDropdown: true },
  { label: "Rooms", hasDropdown: true },
  { label: "Inspiration", hasDropdown: true },
  { label: "Design Services", hasDropdown: true },
  { label: "Sale", hasDropdown: false, accent: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      {/* Top utility bar */}
      <div className="bg-[#2B3222] text-white text-xs">
        <div className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10 py-2.5 flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-2">
            <FiTruck className="text-sm" />
            <span>Free Delivery on Orders Over $999</span>
          </div>
          <div className="flex-1 sm:flex-none text-center tracking-wide">
            Design Your Perfect Space. Delivered to Your Door.
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <FiPhone className="text-sm" />
            <span>Need Help? 1-800-VEYORA</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto max-w-384 px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center leading-none shrink-0">
            <span className="font-serif text-2xl md:text-[28px] tracking-[0.12em] text-[#2B3222]">
              VEYORA
            </span>
            <span className="text-[10px] tracking-[0.45em] text-[#2B3222]/80 mt-1">
              LIVING
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                className={`flex items-center gap-1 text-[15px] transition-colors ${link.accent
                    ? "text-[#B5502F]"
                    : "text-[#2B3222] hover:text-[#B5502F]"
                  }`}
              >
                {link.label}
                {link.hasDropdown && <FiChevronDown className="text-xs mt-0.5" />}
              </button>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-5 md:gap-6 text-[#2B3222]">
            <button aria-label="Search" className="hover:text-[#B5502F] transition-colors">
              <FiSearch className="text-[19px]" />
            </button>
            <button
              aria-label="Account"
              className="hidden sm:inline-flex hover:text-[#B5502F] transition-colors"
            >
              <FiUser className="text-[19px]" />
            </button>
            <button
              aria-label="Wishlist"
              className="relative hidden sm:inline-flex hover:text-[#B5502F] transition-colors"
            >
              <FiHeart className="text-[19px]" />
              <span className="absolute -top-2 -right-2 bg-[#2B3222] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button
              aria-label="Cart"
              className="relative hover:text-[#B5502F] transition-colors"
            >
              <FiShoppingCart className="text-[19px]" />
              <span className="absolute -top-2 -right-2 bg-[#2B3222] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button
              aria-label="Menu"
              className="lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#2B3222]/10 bg-white">
          <nav className="flex flex-col px-4 sm:px-6 py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                className={`flex items-center justify-between text-[15px] text-left ${link.accent ? "text-[#B5502F]" : "text-[#2B3222]"
                  }`}
              >
                {link.label}
                {link.hasDropdown && <FiChevronDown className="text-xs" />}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
