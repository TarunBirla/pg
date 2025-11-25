// Header.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 👇 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 
      ${isScrolled ? "bg-black shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src="/img/Logo.png"
              alt="PG Logo"
              className="h-[80px] w-[150px]"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-white font-medium">
          <Link to="/" className="hover:text-[#40BD02]">
            Home
          </Link>
          <Link to="/abouts" className="hover:text-[#40BD02]">
            About
          </Link>
          <Link to="/besiness" className="hover:text-[#40BD02]">
            Businesses
          </Link>
          <Link to="/news" className="hover:text-[#40BD02]">
            News & Updates
          </Link>
          <Link to="/contact" className="hover:text-[#40BD02]">
            Contact Us
          </Link>

          {/* Gradient Button */}
          <Link
            to="/admin/login"
            className="px-5 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-[#40BD02] to-[#37B8E1] hover:scale-105 transition"
          >
            Businesses
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white px-6 py-6 space-y-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/abouts" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/besiness" onClick={() => setMenuOpen(false)}>
            Businesses
          </Link>
          <Link to="/news" onClick={() => setMenuOpen(false)}>
            News & Updates
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>

          <Link
            to="/admin/login"
            className="block text-center py-2 rounded-md bg-gradient-to-r from-[#40BD02] to-[#37B8E1]"
            onClick={() => setMenuOpen(false)}
          >
            Businesses
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
