import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import BgBlog from '../../../assets/img/BgBlog.png';
import Logo from '../../../assets/img/logohead.png'

const Inscription = () => {
  const [profession, setProfession] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('France métropolitaine');
  const [phone, setPhone] = useState('');
  const [indicatif, setIndicatif] = useState('+33');
  const [password, setPassword] = useState('');
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
        profession,
        nom,
        prenom,
        email,
        password,
        country,
        phone: `${indicatif} ${phone}`
      });
      alert("inscription réussi avec succès !!!")

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

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between py-12 px-8 bg-white">
        {/* Form */}
        <div className="w-full md:w-1/2 max-w-lg bg-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Créez votre compte</h2>
          <p className="mb-6 text-gray-600">Mettez-vous en relation rapidement !</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="profession" className="block text-sm font-medium text-gray-700">Profession</label>
              <select
                id="profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Sélectionnez votre profession</option>
                <option value="Chef happiness officier">Chef happiness officier</option>
                <option value="Feel good manager">Feel good manager</option>
                <option value="Directeur général RH">Directeur général RH</option>
                <option value="Responsable Marketing">Responsable Marketing</option>
                <option value="Financier">Financier</option>
                <option value="Autres">Autres</option>
              </select>
            </div>
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom</label>
              <input
                id="nom"
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">Prénom</label>
              <input
                id="prenom"
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
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
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Pays</label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              >
                <option value="France métropolitaine">France métropolitaine</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Martinique">Martinique</option>
                <option value="Guyane">Guyane</option>
                <option value="La Réunion">La Réunion</option>
                <option value="Mayotte">Mayotte</option>
              </select>
            </div>
            <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone portable</label>
            <div className="flex space-x-2">
              <input
                id="indicatif"
                type="text"
                value={indicatif}
                onChange={(e) => setIndicatif(e.target.value)}
                className="mt-1 w-1/4 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
              <input
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-3/4 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            </div>
            <button type="submit" className="w-full bg-lime-500 text-black py-2 px-4 rounded-md shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500">Continuer</button>
          </form>
        </div>

        {/* Image */}
        <div className="hidden md:block md:w-1/2">
          <img src={BgBlog} alt="Plantation" className="object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Inscription;
