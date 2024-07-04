import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import BgImg from '../../../assets/img/headerbg.png';
import Logo from '../../../assets/img/logohead.png';

const MapHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white relative">
      <div className="absolute inset-0 bg-black opacity-0"></div>
      <div className="relative container mx-auto px-4 py-6 h-full flex flex-col justify-between">
        {/* Top Navigation */}
        <div className="flex justify-between items-center">
          <img src={Logo} alt="Fresh Logo" className="h-5" />
          <div className="hidden md:flex space-x-4 flex justify-between items-center">
          <nav className="flex space-x-4">
          <a href="#about-us" className="text-black hover:text-lime-500 transition font-Raleway">À Propos</a>
            <a href="/products" className="text-lime-500 hover:text-lime-500 transition font-Raleway">Eleveurs</a>
            <a href="/nos-producteurs" className="text-black hover:text-lime-500 transition font-Raleway">Nos producteurs</a>
            <a href="#contact" className="text-black hover:text-lime-500 transition font-Raleway">Contact</a>
            <a href="/blog" className="text-black hover:text-lime-500 transition font-Raleway">Blog</a>
            <a href="/login" className="text-black hover:text-lime-500 transition font-Raleway">Compte</a>
          </nav>
          <a href="/partanariat" className="bg-[#D0E608] text-black px-4 py-2 rounded-full shadow hover:bg-lime-500 transition">Faire un Partenariat</a>
        </div>
          
          {/* Burger Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
         <div className="md:hidden h-full bg-[#020F14]">
         <nav className="grid grid-rows-4">
         <a href="#about-us" className="px-4 text-white hover:text-lime-500 transition">À Propos</a>
         <a href="/products" className="px-4 text-white hover:text-lime-500 transition font-Raleway">Eleveurs</a>
         <a href="/nos-producteurs" className="px-4 text-white hover:text-lime-500 transition font-Raleway">Nos producteurs</a>
         <a href="#contact" className="px-4 text-white hover:text-lime-500 transition">Contact</a>
         <a href="/blog" className="px-4 text-white hover:text-lime-500 transition">Blog</a>
           <a href="/login" className="px-4 text-white hover:text-lime-500 transition">Compte</a>
           <a href="/partanariat" className="bg-[#D0E608] text-black px-4 py-2 rounded-full w-64 shadow hover:bg-lime-500 transition">Faire un Partenariat</a>
         </nav>
       </div>
        )}
      </div>
    </header>
  );
};

export default MapHeader;