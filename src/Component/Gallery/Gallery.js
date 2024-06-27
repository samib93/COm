import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Milieu from '../../assets/img/image17.png'
import Haut from '../../assets/img/image18.png'
import Bas from '../../assets/img/image19.png'

const Gallery = () => {
  const images = [
    { src: Milieu, alt: 'Main Image' },
    { src: Haut, alt: 'Top Right Image' },
    { src: Bas, alt: 'Bottom Left Image' },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-raleway text-center mb-4">Galerie</h2>
        <div className="flex justify-center items-center mb-8">
  <button className="bg-gray-100 font-raleway text-black border-solid-black border border-black w-56 py-2 px-4 rounded-full shadow-lg hover:bg-white flex items-center space-x-4">
    <span>Nos Réseaux</span>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
      <FontAwesomeIcon icon={faInstagram} className="text-gray-800 hover:text-gray-600" />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
      <FontAwesomeIcon icon={faFacebook} className="text-gray-800 hover:text-gray-600" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
      <FontAwesomeIcon icon={faTwitter} className="text-gray-800 hover:text-gray-600" />
    </a>
  </button>
</div>
        <div className="relative flex justify-center items-center">
          <div className="relative w-full  h-full flex justify-center items-center">
            <div className="relative">
              <img src={images[0].src} alt={images[0].alt} className="rounded-lg shadow-lg" />
              <img src={images[1].src} alt={images[1].alt} className="hidden md:block absolute top-0 right-0 w-1/4 rounded-lg shadow-lg transform translate-x-1/4 -translate-y-1/4" />
              <img src={images[2].src} alt={images[2].alt} className="hidden md:block absolute bottom-0 left-0 w-1/4 rounded-lg shadow-lg transform -translate-x-1/4 translate-y-1/4" />
            </div>
          </div>
        </div>
        <div className="text-center mt-20">
          <h2 className="font-bold  font-raleway text-4xl flex justify-center items-center space-x-2">
            LES ACTIONS EN IMAGES
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
