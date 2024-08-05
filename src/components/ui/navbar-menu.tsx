"use client";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

const Navbar: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-slate-950 text-white">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.jpeg" // Replace with your logo path
            alt="Logo"
            width={80}
            height={20}
          />
        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Navigation Items */}
        <div className="hidden md:flex space-x-6">
          <a href="#projects" className="text-lg transition-colors duration-300 hover:text-indigo-500">
            Projects
          </a>
          <a href="#about" className="text-lg transition-colors duration-300 hover:text-indigo-500">
            About Me
          </a>
          <a href="#contact" className="text-lg transition-colors duration-300 hover:text-indigo-500">
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center px-2 py-1 border border-gray-600 rounded transition-colors duration-300 hover:bg-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center bg-gray-900 absolute top-16 left-0 w-full transition-transform duration-300 ease-in-out ${isOpen ? "transform translate-y-0" : "transform -translate-y-full"}`}
      >
        <a href="#projects" className="py-2 text-lg transition-colors duration-300 hover:text-indigo-500">
          Projects
        </a>
        <a href="#about" className="py-2 text-lg transition-colors duration-300 hover:text-indigo-500">
          About Me
        </a>
        <a href="#contact" className="py-2 text-lg transition-colors duration-300 hover:text-indigo-500">
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
