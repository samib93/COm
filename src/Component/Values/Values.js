import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Values = () => {
  const values = [
    { title: 'Qualité', icon: faStar, description: 'Nous nous engageons à fournir des produits de haute qualité.' },
    { title: 'Local', icon: faStar, description: 'Nous soutenons les producteurs locaux et l\'économie locale.' },
    { title: 'Durabilité', icon: faStar, description: 'Nous adoptons des pratiques respectueuses de l\'environnement.' },
    { title: 'Innovation', icon: faStar, description: 'Nous cherchons constamment à innover pour le mieux.' },
    { title: 'Confiance', icon: faStar, description: 'Nous construisons des relations basées sur la confiance.' },
    { title: 'Engagement', icon: faStar, description: 'Nous sommes engagés à répondre aux besoins de nos clients.' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1 ,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="py-12 place-items-center bg-white">
      <div className="container items-center mx-auto px-4">
        <h1 className="text-3xl text-center mb-8 font-Raleway">Les Valeurs</h1>
        <div className="flex hidden md:grid text-center grid grid-cols-1 items-center md:grid-cols-3 gap-16 sm:grid-cols-1">
          {values.map((value, index) => (
            <div key={index} className="bg-lime-100 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4 gap-5">
                <h3 className="text-xl bg-white px-4 py-1 w-full rounded-full font-bold">{value.title}</h3>
                <span className="bg-white text-black rounded-full px-3 py-1 text-sm font-semibold mr-2">
                <FontAwesomeIcon icon={value.icon} />
                </span>
              </div>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
        {/* Deuxième Slides */}
        <div className="flex md:hidden text-center grid grid-cols-1 items-center md:grid-cols-3 gap-16 sm:grid-cols-1">
        <Slider {...settings} className="w-2/3 mx-auto items-center">
          {values.map((value, index) => (
            <div key={index} className="bg-lime-100 p-6 rounded-lg shadow-lg">
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
      </div>
    </section>
  );
}

export default Values;
