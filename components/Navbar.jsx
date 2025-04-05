"use client"
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react"; // Using Lucide icons (Tailwind-friendly)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "EAP", url: "/eap-offerings" },
    { title: "Employers", url: "/employers" },
    { title: "Brokers", url: "/brokers" },
    { title: "Other organizations", url: "/other-organizations" },
    { title: "Partner login", url: "/partner-login" },
  ];

  return (
    <nav className="paddings py-3 bg-white">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Logo</div>

        {/* Hamburger for small screens */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-4">
          {navLinks.map((navLink) => (
            <li key={navLink.url}>
              <Link
                href={navLink.url}
                className="text-md font-semibold text-gray-700 hover:text-dark-purple transition"
              >
                {navLink.title}
              </Link>
            </li>
          ))}
          <Link href="/demo">
            <Button className="rounded-full" size="lg">
              Request a demo
            </Button>
          </Link>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden mt-3 space-y-3">
          {navLinks.map((navLink) => (
            <li key={navLink.url}>
              <Link
                href={navLink.url}
                className="block px-2 py-1 text-md font-semibold text-gray-700 hover:text-dark-purple transition"
              >
                {navLink.title}
              </Link>
            </li>
          ))}
          <Link href="/demo">
            <Button className="rounded-full" size="lg">
              Request a demo
            </Button>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
