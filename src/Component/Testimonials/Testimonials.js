import React from 'react';
import Slider from 'react-slick';
import Profil from '../../assets/img/profils.png';

const testimonials = [
  {
    company: 'B2B Solutions',
    feedback:'Un grand merci à cette plateforme qui nous a permis de trouver des producteurs locaux de qualité. Les produits sont excellents et nos employés sont ravis.',
    image: Profil,
    name: 'Jean Dupont',
    bgColor: 'bg-customPaleGreenYellow',
  },
  {
    name: 'Angela Martinez',
    company: 'B2B Solutions',
    feedback:
      'En tant qu\'agricultrice locale, cette plateforme m\'a permis d\'atteindre de nouveaux marchés et de faire connaître mes produits. Une expérience unique!',
    image: Profil,
    bgColor: 'bg-black text-white',
  },
  {
    name: 'Javier Escobar',
    company: 'B2B Solutions',
    feedback:
      'Être en contact avec des clients directement et fournir des produits frais est un vrai plaisir. Merci pour cette opportunité!',
    image: Profil,
    bgColor: 'bg-customPaleGreenYellow',
  },
];

const Testimonials = () => {
  // Réglages pour le carrousel
  const settingsMobile = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Correspond à une largeur d'écran de 768px et moins
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16">
      <h2 className="text-3xl font-raleway text-center mb-8">Ils parlent de nous.</h2>
      <div className="flex justify-center space-x-8  sm:ml-32 lg:ml-64 w-2/3">
        {/* Condition pour afficher le carrousel seulement sur les écrans jusqu'à lg */}
        <div className="lg:hidden w-full">  
          <Slider {...settingsMobile} className="w-2/3 mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-md p-6 ${testimonial.bgColor}`}
              >
                <div className="mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-16 h-16 object-cover mx-auto"
                  />
                </div>
                <h3 className="text-xl  font-raleway text-center">
                  {testimonial.name}
                </h3>
                <p className="text-sm font-raleway text-center mb-4">{testimonial.company}</p>
                <p className="text-sm font-raleway text-center">{testimonial.feedback}</p>
              </div>
            ))}
          </Slider>
        </div>
        {/* Affichage statique en grille pour lg et au-delà */}
        <div className="hidden lg:flex flex-wrap justify-center w-full ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md p-6 w-1/3 ${testimonial.bgColor}`}
            >
              <div className="mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-16 h-16 object-cover mx-auto"
                />
              </div>
              <h3 className="text-xl font-raleway text-center">{testimonial.name}</h3>
              <p className="text-sm font-raleway text-center mb-4">{testimonial.company}</p>
              <p className="text-sm font-raleway text-center">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;