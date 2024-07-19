import React, { useState, useEffect } from "react";
import LogoOak from "../assets/img/oak-logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeMenu(); 
  };

  return (
    <header
      className={`${
        headerScrolled ? "py-4 shadow-lg" : "py-6 lg:py-5"
      } fixed z-50 w-full transition-all duration-500`}
      style={{ backgroundColor: "transparent" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-left gap-2 cursor-pointer ">
          <img
            src={LogoOak}
            className="w-22 md:w-22 lg:w-26" 
            alt="Logo Oak"
            onClick={() => handleNavigation("/")}
          />
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden absolute right-4" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="text-3xl text-red-700 cursor-pointer" />
          ) : (
            <FaBars className="text-3xl text-red-700 cursor-pointer" />
          )}
        </div>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "top-[120px] right-0 bg-transparent" : "top-0 -left-full bg-transparent"
          } fixed w-[110px] h-auto lg:w-auto lg:static lg:flex lg:items-center lg:gap-8 transition-all duration-300 z-40`}
          style={{ maxHeight: menuOpen ? "fit-content" : "0" }}
        >
          <NavItem
            text="Home"
            onClick={() => handleNavigation("/")}
            headerScrolled={headerScrolled}
          />
          <NavItem
            text="About"
            onClick={() => handleNavigation("/about")}
            headerScrolled={headerScrolled}
          />
          <NavItem
            text="Rooms"
            onClick={() => handleNavigation("/rooms")}
            headerScrolled={headerScrolled}
          />
          <NavItem
            text="Restaurant"
            onClick={() => handleNavigation("/restaurant")}
            headerScrolled={headerScrolled}
          />
          <NavItem
            text="Gallery"
            onClick={() => handleNavigation("/gallery")}
            headerScrolled={headerScrolled}
          />
          <NavItem
            text="Contact"
            onClick={() => handleNavigation("/contact")}
            headerScrolled={headerScrolled}
          />
          <button
            onClick={() => handleNavigation("/rooms")}
            className="mt-4 lg:mt-0 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
          >
            Book Now
          </button>
        </nav>
      </div>
    </header>
  );
};

const NavItem = ({ text, onClick, headerScrolled }) => (
  <div
    className={`block lg:inline-block py-4 lg:py-0 hover:text-red-400 transition cursor-pointer text-xl font-bold ${
      headerScrolled ? "text-red-700 lg:blue-red-700" : "text-red-700 lg:text-red-700"
    }`}
    onClick={onClick}
  >
    {text}
  </div>
);

export default Header;
