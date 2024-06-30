import React from 'react';
import { Link } from 'react-router-dom';
import BgImg from '../../../assets/img/headerbg.png';
import Logo from '../../../assets/img/logohead.png';

const MapHeader = () => {
  return (
    <header className="bg-white">
      <div className="absolute inset-0 bg-black opacity-0"></div>
      <div className="relative container mx-auto px-4 py-6 h-full flex flex-col justify-between">
        {/* Top Navigation */}
        <div className="hidden md:flex space-x-4 flex justify-between items-center">
          <img src={Logo} alt="Fresh Logo" className="h-5" />
          <nav className="flex space-x-4">
            <Link to="/products" className="text-black hover:text-lime-500 transition">Nos Produits</Link>
            <a href="#about-us" className="text-black hover:text-lime-500 transition">À Propos</a>
            <a href="#contact" className="text-black hover:text-lime-500 transition">Contact</a>
            <a href="/login" className="text-black hover:text-lime-500 transition">Compte</a>
            <a href="/blog" className="text-black hover:text-lime-500 transition">Blog</a>
          </nav>
          <a href="#sign-up" className="bg-customGreen text-black px-4 py-2 rounded-full shadow hover:bg-lime-500 transition">Faire un Partenariat</a>
        </div>
        
        {/* Mobile Navigation Menu (hidden by default) */}
        <div className="md:hidden">
          <nav className="grid grid-rows-4">
            <a href="#our-products" className="px-4 text-white hover:text-lime-500 transition">Nos Produits</a>
            <a href="#about-us" className="px-4 text-white hover:text-lime-500 transition">À Propos</a>
            <a href="#contact" className="px-4 text-white hover:text-lime-500 transition">Contact</a>
            <a href="/login" className="px-4 text-white hover:text-lime-500 transition">Compte</a>
            <a href="/blog" className="px-4 text-white hover:text-lime-500 transition">Blog</a>
            <a href="#sign-up" className="bg-customGreen text-black px-4 py-2 rounded-full w-64 shadow hover:bg-lime-500 transition">Faire un Partenariat</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MapHeader;