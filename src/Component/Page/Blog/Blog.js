import React, { useState } from 'react';
import BgBlog from '../../../assets/img/BgBlog.png';
import Logo from '../../../assets/img/logohead.png';
import Famer from '../../../assets/img/propose1.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
    <header className="relative bg-cover bg-center h-screen rounded-b-2xl overflow-hidden" style={{ backgroundImage: `url(${BgBlog})` }}>
      <div className="absolute inset-0 bg-black opacity-0"></div>
      <div className="relative container mx-auto px-4 py-6 h-full flex flex-col justify-between">
        {/* Top Navigation */}
        <div className="hidden md:flex space-x-4 flex justify-between items-center">
          <img src={Logo} alt="Fresh Logo" className="h-5" />
          <nav className="flex space-x-6 flex-start-end px-4">
            <a href="#our-products" className="text-black hover:text-lime-500 transition">Nos Producteurs</a>
            <a href="#about-us" className="text-black hover:text-lime-500 transition">Compte</a>
          </nav>
          <a href="#sign-up" className="bg-lime-500 text-black px-4 py-2 rounded-full shadow hover:bg-lime-500 transition">Faire un Partenariat</a>
        </div>
        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
        </div>
        {isOpen && (
        <div className="md:hidden h-full bg-white">
          <nav className="grid grid-rows-4">
            <a href="#our-products" className="px-4 text-black hover:text-lime-500 transition">Nos Producteurs</a>
            <a href="#about-us" className="px-4 text-black hover:text-lime-500 transition">Compte</a>
            <a href="#sign-up" className="bg-lime-500 text-black px-4 py-2 rounded-full w-64 shadow hover:bg-lime-500 transition">Faire un Partenariat</a>
          </nav>
        </div>
      )}
        {/* Main Content */}
        <div className="flex flex-col mb-20 items-start inline-block text-white mt-20 md:mt-0 mx-auto md:ml-0 md:mt-32">
          <h2 className="text-4xl md:text-6xl flex font-bold mb-4">BIENVENUE SUR NOTRE BLOG !</h2>
          <a href="#sign-up" className="bg-black text-white px-4 py-2 rounded-full shadow hover:bg-black-500 transition">Inscrivez-vous</a>
        </div>
        <a href="#scroll-down" className="absolute bottom-10 right-10">
            <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
      </div>
    </header>

      <section id="blog" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="flex-grow">
              <div className="flex items-center mb-4">
                <span className="bg-black text-white rounded-full px-3 py-1 text-sm font-semibold mr-2">Concept</span>
                <span className="text-black rounded-full px-3 py-1 text-sm font-semibold">&#127811;</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">CE QU'ON PROPOSE.</h2>
              <p className="text-gray-700 mb-4">
                Nous mettons en relation les producteurs locaux et entreprises. Cette initiative permet aux salariés d'accéder facilement à des produits locaux de qualité.
              </p>
            </div>
            <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-4">
              <img src={Famer} alt="Image Description" className="rounded-lg w-full md:w-48 h-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">SALADE DE QUINOA AUX LEGUMES DE SAISON.</h3>
              <p className="mb-4">200g de quinoa, 1 concombre, 2 tomates...</p>
              <a href="#" className="text-green-700">en savoir plus</a>
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">TARTE AUX LEGUMES DU JARDIN</h3>
              <p className="mb-4">1 pâte brisée, 2 courgettes, 2 carottes...</p>
              <a href="#" className="text-green-500">en savoir plus</a>
            </div>

            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">SOUPE DE POTIRON ET CAROTTES</h3>
              <p className="mb-4">1 petit potiron, 4 carottes, 1 oignon...</p>
              <a href="#" className="text-green-700">en savoir plus</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">NOS ATELIERS EN IMAGE</h2>
          <div className="flex justify-center space-x-4">
            <img src="path-to-your-image1.jpg" alt="Atelier 1" className="w-1/3 h-64 object-cover rounded-lg" />
            <img src="path-to-your-image2.jpg" alt="Atelier 2" className="w-1/3 h-64 object-cover rounded-lg" />
            <img src="path-to-your-image3.jpg" alt="Atelier 3" className="w-1/3 h-64 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      <footer className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold">ASSISTANCE</h3>
              <ul>
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Contactez-nous</a></li>
                <li><a href="#" className="hover:underline">Conseils pour votre sécurité</a></li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold">À PROPOS DE</h3>
              <ul>
                <li><a href="#" className="hover:underline">À propos de nous</a></li>
                <li><a href="#" className="hover:underline">Politique d'utilisation des cookies</a></li>
                <li><a href="#" className="hover:underline">Politique de confidentialité</a></li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold">CONDITIONS GÉNÉRALES</h3>
              <ul>
                <li><a href="#" className="hover:underline">Conditions générales</a></li>
                <li><a href="#" className="hover:underline">Condition de renouvellement automatique</a></li>
                <li><a href="#" className="hover:underline">Politique de remboursement</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
