import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../assets/img/logohead.png'
import ImgCompte from '../../../assets/img/pageCompte.png'

const Compte = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-8 bg-white shadow">
        <div className="text-2xl font-bold text-green-600">
          <a href="/" className="hover:text-green-600">
          <img src={Logo} alt="Fresh Logo" className="h-5" />
          </a>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#a-propos" className="text-gray-800 hover:text-green-600">à propos</a>
          <a href="/nos-producteurs" className="text-gray-800 hover:text-green-600">nos producteurs</a>
          <a href="/login" className="text-gray-800 hover:text-green-600">compte</a>
          <a href="/partanariat" className="bg-lime-500 text-black px-4 py-2 rounded-full hover:bg-lime-600">FAIRE UN PARTENARIAT</a>
        </nav>
        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
        </div>
        {isOpen && (
        <nav className="md:hidden h-full bg-white grid grid-rows-4">
          <a href="#a-propos" className="text-gray-800 hover:text-green-600">à propos</a>
          <a href="/nos-producteurs" className="text-gray-800 hover:text-green-600">nos producteurs</a>
          <a href="/login" className="text-gray-800 hover:text-green-600">compte</a>
          <a href="/partanariat" className="bg-lime-500 text-black px-4 py-2 rounded-full hover:bg-lime-600">FAIRE UN PARTENARIAT</a>
        </nav>
           )}
      </header>

      {/* Main Content */}
      {/* <main className="flex-grow flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 flex"> */}
         <div className="flex flex-col md:flex-row items-center justify-between py-0 px-4 bg-white">
          {/* Form */}
          <div className="w-full md:w-1/2 max-w-lg bg-white p-8 rounded-lg ">
            <h2 className="text-3xl font-bold text-gray-900">Créez-vous un Compte ?</h2>
            <p className="mt-2 text-sm text-gray-600">
              Qui êtes vous ?
            </p>
            <form className="mt-8 space-y-6">
              <div>
              <Link to="/signup">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-black text-white text-bold rounded-md shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                >
                  Producteur
                </button>
              </Link>
              </div>
              <div>
              <Link to="/inscription">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-black text-white text-bold rounded-md shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                >
                  Entreprise
                </button>
                </Link>
              </div>
            </form>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src={ImgCompte}
              alt="Description de l'image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      {/* </main> */}
    </div>
  );
};

export default Compte;
