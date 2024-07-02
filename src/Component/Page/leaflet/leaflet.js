import React, { useState } from 'react';
import MapHeader from '../leaflet/MapHeader';
import MapComponent from './MapComponent';
import lieu1 from '../../../assets/img/lieux1.png';
import lieu2 from '../../../assets/img/lieux2.png';
import lieu3 from '../../../assets/img/lieux3.png';
import facebook from '../../../assets/img/logo_facebook.png';
import Instagram from '../../../assets/img/logo_instagram.png';
import linkedin from '../../../assets/img/logo_likendin.png';
import Twitter from '../../../assets/img/logo_Twitter.png';

const Leaflet = () => {
  const [view, setView] = useState('lieux');

  return (
    <div className='flex flex-col min-h-screen'>
      <MapHeader />
      <div className='flex items-center relative flex-1'>
        <div className="absolute left-10 top-10 ">
          <button className="bg-gray-100 border-2 border-black text-black py-2 px-4 rounded-full w-72 shadow-lg hover:bg-lime-100 ">Rechercher un lieu</button>
        </div>
        
        {/* Lieux et Carte en desktop */}
        <div className="hidden md:flex flex-1 ">
          <div className="w-1/4 pr-4 ml-5 mt-10">
            <div className="bg-customPaleGreenYellow rounded-lg p-4 mb-4 mt-20">
              <img src={lieu1} alt="Lieu 1" className="rounded-lg mb-2" />
              <p className="text-black font-raleway font-semibold text-center">Jean Dupont - Ferme de la Vallée Verte - 78080 </p>
              <p className="text-black font-raleway text-center">Élevage de bovins et volailles </p>
            </div>
            
            <div className="bg-black rounded-lg p-4 mb-4">
              <img src={lieu2} alt="Lieu 2" className="rounded-lg mb-2" />
              <p className="text-white font-raleway font-semibold text-center">Jean Dupont - Ferme de la Vallée Verte - 78080 </p>
              <p className="text-white font-raleway text-center">Élevage de bovins et volailles </p>
            </div>
            
            <div className="bg-black rounded-lg p-4 mb-4">
              <img src={lieu3} alt="Lieu 3" className="rounded-lg mb-2" />
              <p className="text-white font-raleway font-semibold text-center">Jean Dupont - Ferme de la Vallée Verte - 78080 </p>
              <p className="text-white font-raleway text-semicenter">Élevage de bovins et volailles </p>
            </div>
          </div>
          <div className="w-4/5 pl-4 mt-12">
            <MapComponent />
          </div>
        </div>

        {/* Affichage mobile avec toggle entre Lieux et Carte */}
        <div className="md:hidden absolute top-20 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <a 
            href="#"
            onClick={() => setView('lieux')}
            className={`text-black hover:text-lime-500 transition ${view === 'lieux' ? 'font-bold' : ''}`}
          >
            Lieux
          </a>
          <a 
            href="#"
            onClick={() => setView('carte')}
            className={`text-black hover:text-lime-500 transition ${view === 'carte' ? 'font-bold' : ''}`}
          >
            Carte
          </a>
        </div>

        {/* Affichage conditionnel pour Lieux ou Carte en mobile */}
        <div className="flex flex-col items-center mt-32 mb-5 w-full md:hidden">
          {view === 'lieux' && (
            <>
              <div className="bg-customPaleGreenYellow rounded-lg p-4 mb-4">
                <img src={lieu1} alt="Lieu 1" className="rounded-lg mb-2" />
                <p className="text-black font-raleway font-semibold text-center">Jean Dupont - Ferme de la Vallée Verte - 78080 </p>
                <p className="text-black font-raleway text-center">Élevage de bovins et volailles </p>
              </div>
              
              <div className="bg-black rounded-lg p-4 mb-4">
                <img src={lieu2} alt="Lieu 2" className="rounded-lg mb-2" />
                <p className="text-white font-raleway font-semibold text-center">Jean Dupont - Ferme de la Vallée Verte - 78080 </p>
                <p className="text-white font-raleway text-center">Élevage de bovins et volailles </p>
              </div>
              
              <div className="bg-black rounded-lg p-4 mb-4">
                <img src={lieu3} alt="Lieu 3" className="rounded-lg mb-2" />
                <p className="text-white font-raleway font-semibold text-center">Jean Dupont - Ferme de la Vallée Verte - 78080 </p>
                <p className="text-white font-raleway text-semicenter">Élevage de bovins et volailles </p>
              </div>
            </>
          )}
          {view === 'carte' && (
            <div className="w-full pl-4 mt-12 mr-10">
            <MapComponent />
          </div>
          )}
        </div>
      </div>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="font-florensa text-3xl font-normal mb-4">Assistance</h2>
              <ul>
                <li><a href="#" className="font-raleway text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="font-raleway text-gray-400 hover:text-white">Contactez-nous</a></li>
                <li><a href="#" className="font-raleway text-gray-400 hover:text-white">Support technique</a></li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h2 className="font-florensa text-3xl font-normal mb-4">À propos de</h2>
              <ul>
                <li><a href="#" className="font-raleway text-gray-400 hover:text-white">À propos de nous</a></li>
                <li><a href="#" className="font-raleway text-gray-400 hover:text-white">Politique de confidentialité</a></li>
                <li><a href="#" className="font-raleway text-gray-400 hover:text-white">Politique en matière de cookies</a></li>
                <li><a href="#" className="font-raleway text-gray-400 hover:text-white">Règlement général sur la protection des données</a></li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h2 className="font-florensa text-3xl font-normal mb-4">Conditions</h2>
              <ul>
                <li><a href="#" className="font-raleway text-gray-400 hover:text-white">Conditions générales</a></li>
                <li><a href="#" className="font-raleway text-gray-400 hover:text-white">Conditions de facturation</a></li>
                <li><a href="#" className="font-raleway text-gray-400 hover:text-white">Politique de remboursement</a></li>
              </ul>
            </div>
            <div className="flex space-x-4 w-32 h-32">
              <a href="#" className="mt-2 text-gray-400 hover:text-white">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="#" className="mt-2 text-gray-400 hover:text-white">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="#" className="mt-2 text-gray-400 hover:text-white">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="#" className="mt-2 text-gray-400 hover:text-white">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className="text-center text-gray-400 mt-8">
            &copy; 2024 FRESH. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Leaflet;
