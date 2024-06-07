import React from 'react';
import Slider from 'react-slick';
import Profil from '../../assets/img/profils.png'

const testimonials = [
  {
    name: 'Jean Dupont',
    company: 'B2B Solutions',
    feedback: 'Un grand merci à cette plateforme qui nous a permis de trouver des producteurs locaux de qualité. Les produits sont excellents et nos employés sont ravis.',
    image: `${Profil}`,
    bgColor: 'bg-green-100',
  },
  {
    name: 'Angela Martinez',
    company: 'B2B Solutions',
    feedback: 'En tant qu\'agricultrice locale, cette plateforme m\'a permis d\'atteindre de nouveaux marchés et de faire connaître mes produits. Une expérience unique!',
    image: `${Profil}`,
    bgColor: 'bg-black text-white',
  },
  {
    name: 'Javier Escobar',
    company: 'B2B Solutions',
    feedback: 'Être en contact avec des clients directement et fournir des produits frais est un vrai plaisir. Merci pour cette opportunité!',
    image: `${Profil}`,
    bgColor: 'bg-green-100',
  }
];


const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Ils parlent de nous.</h2>
      <div className="flex justify-center space-x-8">
      <Slider {...settings} className="w-2/3 mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`rounded-lg shadow-md p-6 w-1/3 ${testimonial.bgColor}`}>
            <div className="mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-16 h-16 object-cover mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-center">{testimonial.name}</h3>
            <p className="text-sm text-center mb-4">{testimonial.company}</p>
            <p className="text-sm text-center">{testimonial.feedback}</p>
          </div>
        ))}
              </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
