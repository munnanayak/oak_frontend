import React, { useState, useEffect } from "react";
import LogoOak from "../assets/img/oak-logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

Modal.setAppElement('#root'); // Set the root element for the modal

const HomeHeader = () => {
  const navigate = useNavigate();
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [promoCode, setPromoCode] = useState('');

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
    closeMenu(); // Close the menu after navigation
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleBooking = () => {
    // Handle the booking logic here
    console.log({
      startDate,
      endDate,
      rooms,
      adults,
      children,
      promoCode,
    });
    closeModal();
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
            <FaTimes className="text-3xl text-black-700 cursor-pointer" />
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
            onClick={() => handleNavigation("/homeheader")}
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
            onClick={openModal}
            className="mt-4 lg:mt-0 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors"
          >
            Book Now
          </button>
        </nav>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Booking Modal"
        className="modal-content relative bg-cover bg-center p-4 rounded-lg shadow-lg max-w-md mx-auto"
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      >
        <div className="relative w-full max-h-[80vh] overflow-y-auto bg-white bg-opacity-90 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Book Your Stay In Our Hotel</h2>

          <div className="mb-4 px-4">
            <label className="block font-bold mb-1">Location</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option>Hyderabad</option>
              <option>shamshabad</option>
              
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 px-4">
            <div>
              <label className="block font-bold mb-1">Check-in Date</label>
              <DatePicker 
                selected={startDate} 
                onChange={(date) => setStartDate(date)} 
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block font-bold mb-1">Check-out Date</label>
              <DatePicker 
                selected={endDate} 
                onChange={(date) => setEndDate(date)} 
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 px-4">
            <div>
              <label className="block font-bold mb-1"> Rooms</label>
              <input 
                type="number" 
                value={rooms} 
                onChange={(e) => setRooms(e.target.value)} 
                className="w-full p-2 border border-gray-300 rounded" 
                min="1"
              />
            </div>
            <div>
              <label className="block font-bold mb-1">Adults</label>
              <input 
                type="number" 
                value={adults} 
                onChange={(e) => setAdults(e.target.value)} 
                className="w-full p-2 border border-gray-300 rounded" 
                min="1"
              />
            </div>
            <div>
              <label className="block font-bold mb-1">Children</label>
              <input 
                type="number" 
                value={children} 
                onChange={(e) => setChildren(e.target.value)} 
                className="w-full p-2 border border-gray-300 rounded" 
                min="0"
              />
            </div>
          </div>

          <div className="mb-4 px-4">
            <label className="block font-bold mb-1">Promo Code</label>
            <input 
              type="text" 
              value={promoCode} 
              onChange={(e) => setPromoCode(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex justify-center space-x-4 px-4">
            <button 
              onClick={closeModal} 
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
            >
              Cancel/Modify
            </button>
            <button 
              onClick={handleBooking} 
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Book Now
            </button>
          </div>
        </div>
      </Modal>
    </header>
  );
};

const NavItem = ({ text, onClick, headerScrolled }) => (
  <div
    className={`block lg:inline-block py-4 lg:py-0 hover:text-yellow-400 transition cursor-pointer text-xl font-bold ${
      headerScrolled ? "text-white lg:text-white" : "text-white lg:text-white"
    }`}
    onClick={onClick}
  >
    {text}
  </div>
);

export default HomeHeader;
