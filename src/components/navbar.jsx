import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";

import GsmileFLogo from '/logo/gsmile_logo_white.png'
import { div } from "framer-motion/client";
import AffilliatedLink from "./affiliated-link";

export default function Navbar({activeClass}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'team', path: '/team' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-black/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,200,83,0.2)]"
        : "bg-transparent"
    }`}>
          {/* this when banner is not there "bg-black/80 backdrop-blur-md py-2 shadow-[0_0_20px_rgba(0,200,83,0.2)]" : "bg-transparent py-4" */}

      <div className="flex flex-col items-center justify-between">
        <AffilliatedLink />
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className="relative h-10 w-32">
              <img
                src={GsmileFLogo}
                alt="GsmileFX Logo"
                style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </div>
          </Link>

          <nav
            className={`fixed md:relative top-0 left-0 right-0 bottom-0 flex flex-col md:flex-row items-center justify-center md:justify-end gap-8 md:gap-6 transition-all duration-500 ${
              isMenuOpen
                ? "bg-black/95 backdrop-blur-md opacity-100 visible"
                : "opacity-0 invisible md:opacity-100 md:visible"
            }`}
          >
            <Link
              to="/"
              className="text-lg md:text-sm font-medium text-white hover:text-green-400 transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about-us"
              className="text-lg md:text-sm font-medium text-white hover:text-green-400 transition-colors relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/team"
              className="text-lg md:text-sm font-medium text-white hover:text-green-400 transition-colors relative group"
            >
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            {/* <Link
              to="/#training"
              className="text-lg md:text-sm font-medium text-white hover:text-green-400 transition-colors relative group"
            >
              Training
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/#mentorship"
              className="text-lg md:text-sm font-medium text-white hover:text-green-400 transition-colors relative group"
            >
              Mentorship
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/#accountManagement"
              className="text-lg md:text-sm font-medium text-white hover:text-green-400 transition-colors relative group"
            >
              Account Management
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/#pricing"
              className="text-lg md:text-sm font-medium text-white hover:text-green-400 transition-colors relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link> */}
            <Button
              className="mt-8 md:mt-0 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white border-0 rounded-full"
              size="sm"
            >
              Get Started
            </Button>
          </nav>

          <button
            className="z-50 block md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}