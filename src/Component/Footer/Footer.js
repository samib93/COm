import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Assistance</h2>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contactez-nous</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Support technique</a></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">À propos de</h2>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">À propos de nous</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Politique en matière de cookies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Règlement général sur la protection des données</a></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Conditions</h2>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Conditions générales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Conditions de facturation</a></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/path/to/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/path/to/twitter-icon.svg" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/path/to/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/path/to/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-8">
          &copy; 2024 FRESH. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
