import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import img1 from "../../../assets/img/img-article1.png"
import img2 from "../../../assets/img/image-article2.png"
import img3 from "../../../assets/img/propose1.png"
import facebook from "../../../assets/img/logo_facebook.png"
import Instagram from '../../../assets/img/logo_instagram.png'
import linkedin from '../../../assets/img/logo_likendin.png'
import Twitter from '../../../assets/img/logo_Twitter.png'



import Logo from '../../../assets/img/logohead.png';

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const image = {
    images: [
      `${img1}`,
      `${img2}`,
      `${img3}`,
      
    ],
  }


  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, 'articles', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setArticle(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching article: ", error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid mx-auto">
      {/* Header Section */}
      <header className="flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-green-600">
          <a href="/" className="hover:text-green-600">
          <img src={Logo} alt="Fresh Logo" className="h-5 ml-10" />
          </a>
        </div>
        <div className="hidden md:flex space-x-4 flex justify-between items-center">
          <nav className="flex space-x-4">
          <a href="#about-us" className="text-black hover:text-lime-500 transition font-Raleway">À Propos</a>
            <a href="/products" className="text-black hover:text-lime-500 transition font-Raleway">Elevateur</a>
            <a href="/nos-producteurs" className="text-black hover:text-lime-500 transition font-Raleway">Nos producteurs</a>
            <a href="#contact" className="text-black hover:text-lime-500 transition font-Raleway">Contact</a>
            <a href="/blog" className="text-lime-500 hover:text-lime-500 transition">Blog</a>
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
        <a href="/products" className="px-4 text-white hover:text-lime-500 transition font-Raleway">Elevateur</a>
        <a href="/nos-producteurs" className="px-4 text-white hover:text-lime-500 transition font-Raleway">Nos producteurs</a>
        <a href="#contact" className="px-4 text-white hover:text-lime-500 transition">Contact</a>
        <a href="/blog" className="px-4 text-white hover:text-lime-500 transition">Blog</a>
          <a href="/login" className="px-4 text-white hover:text-lime-500 transition">Compte</a>
          <a href="/partanariat" className="bg-[#D0E608] text-black px-4 py-2 rounded-full w-64 shadow hover:bg-lime-500 transition">Faire un Partenariat</a>
        </nav>
      </div>
           )}
      </header>

      {/* First Section */}
      <section className="flex justify-between items-start mb-12 mt-[90px] ml-10">
        <div className="w-2/3 break-words pr-6">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          {/* <img className="text-2xl text-gray-600" src={article.imageUrl}/> */}
          <p className="mt-6 text-xl">{article.description}</p>
          <p className="mt-6 text-xl font-Raleway">Le locavorisme, ou la consommation de produits locaux, gagne en popularité et devient un véritable mode de vie. 
              Les consommateurs réalisent les nombreux avantages de cette pratique, notamment le soutien aux producteurs locaux.
              Adopter le locavorisme signifie choisir la qualité et la fraîcheur. Les produits locaux sont souvent récoltés à maturité, offrant ainsi une saveur incomparable et une meilleure valeur nutritionnelle. 
              Contrairement aux aliments importés, qui peuvent passer des jours ou des semaines en transport, les produits locaux arrivent rapidement sur nos tables, préservant leur goût et leurs nutriments essentiels.
           </p>

        </div>
        <div className="md:w-1/2 grid grid-rows-2 grid-flow-col gap-4">
        
        <img className="w-full h-80 object-cover row-span-3 rounded-lg" src={image.images[1]} />
        <img className="w-full h-40 object-cover col-span-2 rounded-lg" src={image.images[2]}/>
        <img className="w-full h-40 object-cover row-span-2 rounded-lg" src={image.images[0]}/>


          {/* {article.images.slice(0, 3).map((image, index) => (
            <img key={index} src={image} alt={`Article ${index + 1}`} className="w-full h-40 object-cover rounded-lg" />
          ))} */}
        </div>
      </section>

      {/* Second Section */}
      <section className="flex flex-col ml-10 md:flex-row gap-6 mb-12">
        <div className='md:1/2'>
          <h3 className="text-xl font-semibold mb-2">Santé et qualité</h3>
          <p className='break-words text-xl font-Raleway'>{article.quality}</p>
        </div>
        <div className='md:1/2 col-end-7'>
          <img src={article.imageUrl} />
          
        </div>
        
      </section>

      {/* Third Section */}
      <section className="flex flex-col ml-10 md:flex-row gap-6 mb-12">
        <div className="md:1/2">
          <h3 className="text-xl font-semibold mb-2">Nature et durabilité</h3>
          <p className='break-words text-xl'>{article.nature}</p>
        </div>
        <div className="md:1/2">
          {/* <img src={article.imageUrl} alt="Durability" className="w-96 h-40 object-cover rounded-lg" /> */}
        </div>
      </section>

      {/* Fourth Section */}
      {/* <section className="mb-12">
        <div className="flex space-x-4">
          C'est pour les trois boutons noirs tags
          {/* {article.tags.map((tag, index) => (
            <button key={index} className="bg-black text-white py-2 px-4 rounded-full">{tag}</button>
          ))} */}
        {/* </div>
      </section> */} 

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

export default ArticleDetails;
