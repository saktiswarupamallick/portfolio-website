"use client";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa"; // Importing icon from react-icons

const Navbar: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-slate-950 text-white z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Image
            src="/logo.jpeg" // Replace with your logo path
            alt="Logo"
            width={80}
            height={20}
          />
        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center px-2 py-1 border border-gray-600 rounded transition-colors duration-300 hover:bg-gray-700"
          aria-label="Toggle menu"
        >
          <FaBars className="w-6 h-6" />
        </button>

        {/* Navigation Items for Larger Screens */}
        <div className="hidden md:flex space-x-6">
          <a href="#projects" className="text-md transition-colors font-poppins duration-300 hover:text-indigo-500">
            Projects
          </a>
          <a href="#about" className="text-md transition-colors font-poppins duration-300 hover:text-indigo-500">
            About Me
          </a>
          <a href="#contact" className="text-md transition-colors font-poppins duration-300 hover:text-indigo-500">
            Contact Me
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center bg-slate-950 absolute top-16 left-0 w-full transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ zIndex: isOpen ? 79 : -1 }} // Adjust zIndex to ensure it is shown above or below appropriately
      >
        <a href="#projects" className="py-2 text-lg transition-colors text-gray-200 duration-300 hover:text-indigo-600">
          Projects
        </a>
        <a href="#about" className="py-2 text-lg transition-colors duration-300 hover:text-indigo-600">
          About Me
        </a>
        <a href="#contact" className="py-2 text-lg transition-colors duration-300 hover:text-indigo-600">
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
