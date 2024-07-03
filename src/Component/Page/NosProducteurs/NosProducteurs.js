import React, { useState } from 'react';
import img1 from '../../../assets/img/partanariat.png';
import img2 from '../../../assets/img/partanariat2.png';
import img3 from '../../../assets/img/partanariat3.png';
import img4 from '../../../assets/img/imgProduct.png';
import img5 from '../../../assets/img/profils.png';
import logo1 from '../../../assets/img/samsung.png';
import logo2 from '../../../assets/img/microsoft-6.png';
import logo3 from '../../../assets/img/galileo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../assets/img/logohead.png'

const NosProducteurs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const producer = {
    name: "Jean Dupont",
    membershipInfo: "membre depuis 2023 / 20 ans d'expérience",
    description: "La Ferme de la Vallée Verte, dirigée par Jean Dupont, est un havre de paix...",
    images: [
      `${img1}`,
      `${img2}`,
      `${img3}`,
      `${img4}`,
    ],
    engagements: ["Élevage en plein air", "Élevage en plein air", "Élevage en plein air"],
    products: [
      "Viande de Bœuf : Pièces de bœuf tendre et savoureuses...",
      "Volaille Fermière : Poulets, dindes et canards...",
      "Œufs Frais : Œufs de poules élevées en liberté..."
    ],
    productImage: `${img4}`,
    testimonials: [
      {
        name: "Marie Luc",
        date: "Il y a 1 semaine",
        text: "Les produits de la Ferme de la Vallée Verte sont d'une qualité exceptionnelle...",
        image: `${img5}`
      },
      {
        name: "Pierre Hug",
        date: "Il y a 1 semaine",
        text: "J'apprécie particulièrement l'engagement de Jean pour le bien-être animal...",
        image: `${img5}`
      }
    ],
    partners: [
      { name: "GALILEO INTERNATIONAL", logo: `${logo3}` },
      { name: "Microsoft", logo: `${logo2}` },
      { name: "Samsung", logo: `${logo1}` }
    ]
  };

  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-8 bg-white shadow">
        <div className="text-2xl font-bold text-green-600">
          <a href="/" className="hover:text-green-600">
          <img src={Logo} alt="Fresh Logo" className="h-5" />
          </a>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#a-propos" className="text-gray-800 hover:text-green-600">à propos</a>
          <a href="nos-producteurs" className="text-gray-800 hover:text-green-600">nos producteurs</a>
          <a href="/login" className="text-gray-800 hover:text-green-600">compte</a>
          <a href="/partanariat" className="bg-lime-400 text-black px-4 py-2 rounded-full hover:bg-lime-600">FAIRE UN PARTENARIAT</a>
        </nav>
        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
        </div>
        {isOpen && (
        <nav className="md:hidden h-full bg-white grid grid-rows-4">
          <a href="#a-propos" className="text-gray-800 hover:text-green-600">à propos</a>
          <a href="nos-producteurs" className="text-gray-800 hover:text-green-600">nos producteurs</a>
          <a href="/login" className="text-gray-800 hover:text-green-600">compte</a>
          <a href="/partanariat" className="bg-lime-400 text-black px-4 py-2 rounded-full hover:bg-lime-600">FAIRE UN PARTENARIAT</a>
        </nav>
           )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Producer Info */}
        <section className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold">{producer.name}</h2>
            <p className="text-gray-600">{producer.membershipInfo}</p>
            <p className="mt-4">{producer.description}</p>
            <a href="/partanariat" className="mt-4 inline-block bg-lime-400 text-black px-6 py-3 rounded-full">Faire un partenariat</a>
            <p className="mt-4">{producer.description}</p>
          </div>
          <div className="md:w-1/2 grid grid-rows-3 grid-flow-col gap-4">
            <img src={producer.images[0]} alt="Main" className="w-full h-80 object-cover row-span-3 rounded-lg" />
            <img src={producer.images[1]} alt="Sub 1" className="w-full h-40 object-cover col-span-2 rounded-lg" />
            <img src={producer.images[2]} alt="Sub 2" className="w-full h-40 object-cover row-span-2 rounded-lg" />
          </div>
        </section>

        {/* Engagements */}
        <section className="mt-0">
          <h3 className="text-2xl">Engagements et Pratiques</h3>
          <div className="flex flex-wrap gap-4 mt-4">
            {producer.engagements.map((engagement, index) => (
              <span key={index} className="bg-gray-800 text-white px-4 py-2 rounded-full">{engagement}</span>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="mb-5 flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <h3 className="text-2xl">Produits Disponibles</h3>
            <ul className="mt-4">
              {producer.products.map((product, index) => (
                <li key={index} className="mt-2">{product}</li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/4">
            <img src={producer.productImage} alt="Product" className="w-full h-80 object-cover rounded-lg" />
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-10">
          <h3 className="text-2xl">Ils témoignent</h3>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {producer.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-yellow-100 p-6 rounded-lg shadow-lg w-full md:w-2/2 flex flex-col justify-envenly">
                <p className="mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="ml-4 flex-grow">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.date}</p>
                  </div>
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section className="mt-10">
          <h3 className="text-2xl">En partenariat avec :</h3>
          <div className="flex flex-wrap gap-4 mt-4">
            {producer.partners.map((partner, index) => (
              <img key={index} src={partner.logo} alt={partner.name} className="w-32 h-32 object-contain" />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold">ASSISTANCE</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/faq" className="text-gray-400">FAQ</a></li>
              <li><a href="/contact" className="text-gray-400">Contactez-nous</a></li>
              <li><a href="/safety" className="text-gray-400">Conseils pour votre sécurité</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">À PROPOS DE</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/about" className="text-gray-400">À propos de nous</a></li>
              <li><a href="/cookies" className="text-gray-400">Politique d'utilisation des cookies</a></li>
              <li><a href="/privacy" className="text-gray-400">Politique de confidentialité</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">CONDITIONS</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/terms" className="text-gray-400">Conditions générales</a></li>
              <li><a href="/renewal" className="text-gray-400">Condition de renouvellement automatique</a></li>
              <li><a href="/refund" className="text-gray-400">Politique de remboursement</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NosProducteurs;
