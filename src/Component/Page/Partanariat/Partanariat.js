import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import ImgSignup from '../../../assets/img/partanariat.png'
import Logo from '../../../assets/img/logohead.png'

const Partanariat = () => {
  const [producteur, setProducteur] = useState('');
  const [type_produit, setType_produit] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [volume, setVolume] = useState('');
  const [frequence_livraison, setFrequence_livraison] = useState('');
  const [commentaire, setCommentaire] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        producteur,
        type_produit,
        email,
        password,
        volume,
        frequence_livraison,
        commentaire,
      });
      alert("votre demande de partenariat à bien été enregistrer !!!")

      navigate('/'); // Redirigez vers la page d'accueil ou la page de connexion après l'inscription
    } catch (error) {
      console.error("Erreur lors de l'inscription: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-8 bg-white shadow">
        <div className="text-2xl font-bold text-green-600">
          <a href="/" className="hover:text-green-600">
          <img src={Logo} alt="Fresh Logo" className="h-5" />
          </a>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#a-propos" className="text-gray-800 hover:text-green-600">à propos</a>
          <a href="#nos-producteurs" className="text-gray-800 hover:text-green-600">nos producteurs</a>
          <a href="/login" className="text-gray-800 hover:text-green-600">compte</a>
          <a href="/partanariat" className="bg-lime-500 text-black px-4 py-2 rounded-full hover:bg-lime-600">FAIRE UN PARTENARIAT</a>
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
          <a href="/partanariat" className="bg-lime-500 text-black px-4 py-2 rounded-full hover:bg-lime-600">FAIRE UN PARTENARIAT</a>
        </nav>
           )}
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between py-12 px-8 bg-white">
        {/* Form */}
        <div className="w-full md:w-1/2 max-w-lg bg-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Faire un Partenariat</h2>
          <p className="mb-6 text-gray-600">Mettez-vous en relation rapidement !</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              {/* <label htmlFor="producteur" className="block text-sm font-medium text-gray-700">Profession</label> */}
              <select
                id="producteur"
                value={producteur}
                onChange={(e) => setProducteur(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Sélectionnez le Producteur</option>
                <option value="Eleveur">Eleveurs</option>
                <option value="Maraichers">Maraichers</option>
                <option value="Fromagers">Fromagers</option>
              </select>
              {/* <label htmlFor="type de produit" className="block text-sm font-medium text-gray-700">Type de produit</label> */}
              <select
                id="type de produit"
                value={type_produit}
                onChange={(e) => setType_produit(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Sélectionnez le type de produit</option>
                <option value="Eleveur">Fromages</option>
                <option value="Maraichers">Legumes</option>
                <option value="Fromagers">Fruits</option>
              </select>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="volume" className="block text-sm font-medium text-gray-700">Volume</label>
              <input
                id="volume"
                type="text"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="frequence_livraison" className="block text-sm font-medium text-gray-700">Fréquence de livraisons</label>
              <input
                id="frequence_livraison"
                type="text"
                value={frequence_livraison}
                onChange={(e) => setFrequence_livraison(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="commentaire" className="block text-sm font-medium text-gray-700">Laissez un commentaire pour plus de détails.</label>
              <input
                id="commentaire"
                type="textarea"
                value={commentaire}
                onChange={(e) => setCommentaire(e.target.value)}
                className="mt-1 block w-full h-32 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <button type="submit" className="w-full bg-lime-500 text-black py-2 px-4 rounded-md shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500">Envoyer</button>
          </form>
        </div>

        {/* Image */}
        <div className="hidden md:block md:w-1/2">
          <img src={ImgSignup} alt="Plantation" className="object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Partanariat;