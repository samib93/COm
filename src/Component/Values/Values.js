import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Values = () => {
  const values = [
    { title: 'Qualité', icon: faStar, description: 'Nous nous engageons à fournir des produits de haute qualité.' },
    { title: 'Durabilité', icon: faStar, description: 'Nous adoptons des pratiques respectueuses de l\'environnement.' },
    { title: 'Transparence', icon: faStar, description: 'Assurer la traçabilité et la transparence des produits pour les consommateurs ' },
    { title: 'Transmission', icon: faStar, description: 'Sensibiliser les consommateurs, y compris les enfants, à l\'alimentation locale et durable' },
    { title: 'Proximité', icon: faStar, description: 'Sensibiliser les consommateurs, y compris les enfants, à l\'alimentation locale et durable' },
    { title: 'Communauté', icon: faStar, description: 'Renforcer les liens entre producteurs, entreprises et consommateurs pour créer un réseau solidaire' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="py-12 place-items-center bg-white">
      <div className="container items-center mx-auto px-4">
        <h1 className="text-3xl text-center mb-8">Les Valeurs</h1>

        {/* Affichage du Slider uniquement sur mobile */}
        <div className="w-full md:hidden">
          <Slider {...settings} className="mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-lime-100 p-6 rounded-lg shadow-lg mb-4">
                <div className="flex items-center mb-4 gap-5">
                  <h3 className="text-xl bg-white px-4 py-1 w-full rounded-full font-bold">{value.title}</h3>
                  <span className="bg-white text-black rounded-full px-3 py-1 text-sm font-semibold mr-2">
                    <FontAwesomeIcon icon={value.icon} />
                  </span>
                </div>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </Slider>
        </div>

        {/* Affichage en grille 3x3 sur écrans larges (PC) avec Flexbox */}
        <div className="hidden md:flex md:flex-wrap justify-center">
          {values.map((value, index) => (
            <div key={index} className="bg-lime-100 p-6 rounded-lg shadow-lg w-1/3 md:w-72 mx-4 my-4 text-center">
              <div className="flex items-center mb-4 justify-center">
                <span className="bg-white text-black rounded-full p-2 mr-3">
                  <FontAwesomeIcon icon={value.icon} />
                </span>
                <h3 className="text-xl  font-raleway bg-white px-4 py-1 w-full rounded-full ">{value.title}</h3>
              </div>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
          
          {/* Ajouter des éléments vides pour remplir la dernière ligne si nécessaire */}
          {values.length % 3 !== 0 && (
            <div className="w-1/3 md:w-72 mx-4 my-4"></div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Values;