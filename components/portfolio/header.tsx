"use client";

import Link from "next/link";
import { Card } from "../ui/card";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { HeaderLink } from "@/types/types";

const links: HeaderLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleToggleMenu();
    }
  };

  return (
    <Card className="w-full h-16 bg-[#ecf0f3] relative shadow-sm border-white">
      <div className="w-full h-full flex items-center justify-between px-6">
        <Link href="/">
          <h1 className="text-2xl font-semibold text-[#ff4848]">ZERN CODES</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center justify-center gap-4 text-gray-700 font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[#ff4848] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={handleToggleMenu}
          onKeyDown={handleKeyDown}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <nav
          id="mobile-menu"
          className={`absolute top-full left-0 z-50 w-full bg-[#ecf0f3] shadow-lg md:hidden transition-all duration-300 rounded-lg ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="flex flex-col py-4 text-gray-700 font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="w-full block px-6 py-2 hover:bg-gray-100 hover:text-[#ff4848] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Card>
  );
}
