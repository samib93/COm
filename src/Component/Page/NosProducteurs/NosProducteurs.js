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
import facebook from "../../../assets/img/logo_facebook.png"
import Instagram from '../../../assets/img/logo_instagram.png'
import linkedin from '../../../assets/img/logo_likendin.png'
import Twitter from '../../../assets/img/logo_Twitter.png'


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
        <div className="hidden md:flex space-x-4 flex justify-between items-center">
          <nav className="flex space-x-4">
          <a href="#about-us" className="text-black hover:text-lime-500 transition font-Raleway">À Propos</a>
            <a href="/products" className="text-black hover:text-lime-500 transition font-Raleway">Eleveurs</a>
            <a href="/nos-producteurs" className="text-lime-500 hover:text-lime-500 transition font-Raleway">Nos producteurs</a>
            <a href="#contact" className="text-black hover:text-lime-500 transition font-Raleway">Contact</a>
            <a href="/blog" className="text-black hover:text-lime-500 transition">Blog</a>
            <a href="/login" className="text-black hover:text-lime-500 transition font-Raleway">Compte</a>
          </nav>
          <a href="/partanariat" className="bg-[#D0E608] text-black px-4 py-2 rounded-full shadow hover:bg-lime-500 transition">Faire un Partenariat</a>
        </div>
        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
        </div>
        {isOpen && (
        <div className="md:hidden h-full bg-[#020F14]">
        <nav className="grid grid-rows-4">
        <a href="#about-us" className="px-4 text-white hover:text-lime-500 transition">À Propos</a>
        <a href="/products" className="px-4 text-white hover:text-lime-500 transition font-Raleway">Eleveurs</a>
        <a href="/nos-producteurs" className="px-4 text-white hover:text-lime-500 transition font-Raleway">Nos producteurs</a>
        <a href="#contact" className="px-4 text-white hover:text-lime-500 transition">Contact</a>
        <a href="/blog" className="px-4 text-white hover:text-lime-500 transition">Blog</a>
          <a href="/login" className="px-4 text-white hover:text-lime-500 transition">Compte</a>
          <a href="/partanariat" className="bg-[#D0E608] text-black px-4 py-2 rounded-full w-64 shadow hover:bg-lime-500 transition">Faire un Partenariat</a>
        </nav>
      </div>
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
            <a href="/partanariat" className="mt-4 inline-block bg-[#D0E608] text-black px-6 py-3 rounded-full">Faire un partenariat</a>
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
              <span key={index} className="bg-black text-white px-4 py-2 rounded-full">{engagement}</span>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="mb-5 flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <h3 className="text-2xl mt-8">Produits Disponibles</h3>
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
          <h3 className="text-2xl font-raleway">Ils témoignent</h3>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {producer.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#F4FBD2] p-6 rounded-lg shadow-lg w-full md:w-2/2 flex flex-col justify-envenly">
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

export default NosProducteurs;
