import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../../assets/img/logohead.png';

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
          <img src={Logo} alt="Fresh Logo" className="h-5" />
          </a>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#a-propos" className="text-gray-800 hover:text-green-600">à propos</a>
          <a href="#nos-producteurs" className="text-gray-800 hover:text-green-600">nos producteurs</a>
          <a href="/login" className="text-gray-800 hover:text-green-600">compte</a>
          <a href="#partenariat" className="bg-lime-500 text-black px-4 py-2 rounded-full hover:bg-lime-600">FAIRE UN PARTENARIAT</a>
        </nav>
        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
        </div>
        {isOpen && (
        <nav className="md:hidden h-full bg-white grid grid-rows-4">
          <a href="#a-propos" className="text-gray-800 hover:text-green-600">à propos</a>
          <a href="#nos-producteurs" className="text-gray-800 hover:text-green-600">nos producteurs</a>
          <a href="/login" className="text-gray-800 hover:text-green-600">compte</a>
          <a href="#partenariat" className="bg-lime-500 text-black px-4 py-2 rounded-full hover:bg-lime-600">FAIRE UN PARTENARIAT</a>
        </nav>
           )}
      </header>

      {/* First Section */}
      <section className="flex justify-between items-start mb-12">
        <div className="w-2/3 pr-6">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          {/* <img className="text-2xl text-gray-600" src={article.imageUrl}/> */}
          <p className="mt-6">{article.description}</p>
        </div>
        <div className="w-1/3 grid grid-cols-1 gap-4">
        C'est pour les images !!!
        <img className="text-2xl text-gray-600" src={article.imageUrl}/>
          {/* {article.images.slice(0, 3).map((image, index) => (
            <img key={index} src={image} alt={`Article ${index + 1}`} className="w-full h-40 object-cover rounded-lg" />
          ))} */}
        </div>
      </section>

      {/* Second Section */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-2">Santé et qualité</h3>
        <p>{article.healthQuality}</p>
      </section>

      {/* Third Section */}
      <section className="flex justify-between items-start mb-12">
        <div className="w-2/3 pr-6">
          <h3 className="text-xl font-semibold mb-2">Nature et durabilité</h3>
          <p>{article.natureDurability}</p>
        </div>
        <div className="w-1/3">
          <img src={article.imageDurability} alt="Durability" className="w-full h-40 object-cover rounded-lg" />
        </div>
      </section>

      {/* Fourth Section */}
      <section className="mb-12">
        <div className="flex space-x-4">
          C'est pour les trois boutons noirs tags
          {/* {article.tags.map((tag, index) => (
            <button key={index} className="bg-black text-white py-2 px-4 rounded-full">{tag}</button>
          ))} */}
        </div>
      </section>

        {/* Footer */}
        <footer className="bg-black text-white p-8">
          <div className="container-fluid mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold mb-2">ASSISTANCE</h3>
              <ul>
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Contactez-nous</a></li>
                <li><a href="#" className="hover:underline">Conseils pour votre sécurité</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">À PROPOS DE</h3>
              <ul>
                <li><a href="#" className="hover:underline">À propos de nous</a></li>
                <li><a href="#" className="hover:underline">Politique d'utilisation des cookies</a></li>
                <li><a href="#" className="hover:underline">Politique de confidentialité</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">CONDITIONS</h3>
              <ul>
                <li><a href="#" className="hover:underline">Conditions générales</a></li>
                <li><a href="#" className="hover:underline">Condition de renouvellement automatique</a></li>
                <li><a href="#" className="hover:underline">Politique de remboursement</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href="#" className="mx-2 hover:underline"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="mx-2 hover:underline"><i className="fab fa-instagram"></i></a>
            <a href="#" className="mx-2 hover:underline"><i className="fab fa-twitter"></i></a>
            <a href="#" className="mx-2 hover:underline"><i className="fab fa-linkedin"></i></a>
          </div>
        </footer>
    </div>
  );
};

export default ArticleDetails;
