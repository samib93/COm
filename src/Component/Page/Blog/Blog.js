import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../assets/img/logohead.png'
import BgBlog from '../../../assets/img/BgBlog.png';
import Famer from '../../../assets/img/propose1.png';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import facebook from "../../../assets/img/logo_facebook.png"
import Instagram from '../../../assets/img/logo_instagram.png'
import linkedin from '../../../assets/img/logo_likendin.png'
import Twitter from '../../../assets/img/logo_Twitter.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesCollection = collection(db, 'articles');
      const articlesSnapshot = await getDocs(articlesCollection);
      const articlesList = articlesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setArticles(articlesList);
    };

    fetchArticles();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await setDoc(doc(db, 'newsletter'), {
        email,
      });
      alert("abonnement réussi avec succès !!!")

      navigate('/'); // Redirigez vers la page d'accueil ou la page de connexion après l'inscription
    } catch (error) {
      console.error("Erreur lors de lors: ", error);
    }
  };


  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="relative bg-cover bg-center h-screen rounded-b-2xl overflow-hidden" style={{ backgroundImage: `url(${BgBlog})` }}>
      <div className="absolute inset-0 bg-black opacity-0"></div>
      <div className="relative container mx-auto px-4 py-6 h-full flex flex-col justify-between">
        {/* Top Navigation */}
        <div className="hidden md:flex space-x-4 flex justify-between items-center">
          <a href='/'>
           <img src={Logo} alt="Fresh Logo" className="h-5" />
          </a>
          <nav className="flex space-x-4">
            <a href="#about-us" className="text-black hover:text-lime-500 transition">À Propos</a>
            <a href="/products" className="text-black hover:text-lime-500 transition font-Raleway">Elevateur</a>
            <a href="/nos-producteurs" className="text-black hover:text-lime-500 transition">Nos Producteurs</a>
            <a href="/compte" className="text-black hover:text-lime-500 transition">Compte</a>
            <a href="/blog" className="text-lime-500 hover:text-lime-500 transition">Blog</a>
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
        {/* Main Content */}
        <div className="flex flex-col mb-20 items-start inline-block text-white mt-20 md:mt-0 mx-auto md:ml-0 md:mt-32">
          <h1 className="text-4xl md:text-6xl flex font-bold mb-4">BIENVENUE SUR FRESH</h1>
          <p className="text-lg md:text-xl mb-6">
            La solution pour accéder à des produits locaux en entreprise. Savourez la qualité. Vivez la fraîcheur.
          </p>
          <a href="/signup" className="bg-black text-white px-4 py-2 rounded-full shadow hover:bg-black-500 transition">Inscrivez-vous</a>
        </div>
        {/* <a href="#scroll-down" className="absolute bottom-10 right-10">
            <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a> */}
      </div>
    </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Intro Section */}
        <section className="bg-[#F6F6F6] rounded-lg shadow-lg p-6 mb-8">
          <div className="md:flex items-center">
            <div className="md:w-2/3">
            <div className="flex items-center mb-4">
                <span className="bg-black text-white rounded-full px-3 py-1 text-sm font-semibold mr-2">Le blog</span>
                <span className="text-black bg-black rounded-full h-10 w-10 px-3 py-1 text-sm font-semibold"></span>
            </div>
              <h2 className="text-2xl font-bold mb-4">LE BLOG FRESH.</h2>
              <p className="text-gray-700 mb-4">
                Bienvenue sur notre blog culinaire dédié à la découverte et à la valorisation des produits locaux ! Notre mission est de vous inspirer à cuisiner de manière durable tout en soutenant l’économie locale. Plongez dans un univers gastronomique où chaque plat raconte une histoire de terroir et de tradition, et où chaque bouchée est un pas vers un mode de vie plus respectueux de l’environnement. Rejoignez-nous pour célébrer la richesse et la diversité des saveurs locales !
              </p>
              <a href="#" className="absolute text-black underline right-9_">voir plus</a>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0">
              <img src={Famer} alt="Blog Intro" className="rounded-lg shadow-lg"/>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="mb-8">
          <h2 className="text-2xl text-center font-Raleway-bold mb-4">Nos articles.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Article Cards */}
            {articles.map(article => (
              <Link to={`/details-article/${article.id}`}>
              <div key={article.id} className="bg-black break-words text-wrap text-white p-6 rounded-lg shadow-lg">
                <span className="bg-[#D0E608] text-black px-2 py-1 rounded-full">L'article</span>
                <h3 className="text-xl font-Florensa Regular-bold mt-4">{article.title}</h3>
                <p className="grid grid-cols-2 gap-4 text-gray-300 mt-2">
                  <div className="col-start-1 col-end-3">
                  {article.description}
                  </div>
                  {/* <div className="md:flex md:1/3 mt-4 col-end-7 col-span-2">
                     <img className="text-2xl h-56 rounded-lg text-gray-600" src={article.imageUrl}/>
                  </div> */}
                </p>
                
              </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="px-4 py-2 bg-gray-50 border-2 border-black text-black rounded-full hover:bg-white">voir les articles</button>
          </div>
        </section>
        </main>

         {/* text section */}
        <section className="bg-black text-white p-8">
          <div className="container text-center mx-auto">
          <p className="text-gray-400 ">
          Ensemble, continuons à célébrer la richesse de notre terroir, à soutenir nos producteurs locaux, et à déguster des plats savoureux qui respectent notre planète. 
          À vos fourneaux et à bientôt pour de nouvelles découvertes gourmandes !
          </p>
          </div>
        </section>

        {/* Join Community Section */}
        <section className="relative py-12 bg-lime-100 flex justify-center items-center">
     <div className="absolute left-0 top-1/2 hidden md:flex transform rotate-90 -translate-y-1/2 bg-black text-white py-2 px-4 rounded-full flex items-center">
        <div className="flex flex-col items-center transform origin-bottom-left">
          <FontAwesomeIcon icon={faEnvelope} className="mb-2" />
          <span className="text-sm">Newsletter</span>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-3xl mb-4">Rejoins la communauté !</h1>
        <p className="mb-6">Conseils, opportunités et collaboration directement dans votre boîte mail.</p>
        <form onSubmit={handleSubmit} className="flex justify-center bg-black rounded-full px-2 py-2 items-center">
          <input 
            type="email" 
            placeholder="ton adresse mail ici." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black text-white items-center focus:outline-none"
          />
          <button className="p-2 bg-white text-black rounded-full h-10 w-10 hover:bg-[#D0E608]">✓</button>
          {/* <button className="text-white flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="ml-1" />
          </button> */}
        </form>
      </div>
    </section>

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

export default Blog;
