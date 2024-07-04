import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../assets/img/logohead.png'
import ImgLogin from '../../../assets/img/signin.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch user data from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log('Logged in user:', userData);
        alert("Vous êtes connecté avec succès !!!")
        // Redirect or perform any action you want after successful login
      } else {
        throw new Error('No user data found');
      }
    } catch (error) {
      setError('Erreur lors de la connexion: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen">
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
            <a href="/products" className="text-black hover:text-lime-500 transition font-Raleway">Elevateur</a>
            <a href="/nos-producteurs" className="text-black hover:text-lime-500 transition font-Raleway">Nos producteurs</a>
            <a href="#contact" className="text-black hover:text-lime-500 transition font-Raleway">Contact</a>
            <a href="/blog" className="text-black hover:text-lime-500 transition">Blog</a>
            <a href="/login" className="text-lime-500 hover:text-lime-500 transition font-Raleway">Compte</a>
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

      {/* Main Content */}
      {/* <main className="flex-grow flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 flex"> */}
         <div className="flex flex-col md:flex-row items-center justify-between py-12 px-8 bg-white">
          {/* Form */}
          <div className="w-full md:w-1/2 max-w-lg bg-white p-8 rounded-lg ">
            <h2 className="text-3xl font-bold text-gray-900">Connexion</h2>
            <p className="mt-2 text-sm text-gray-600">
              Mettez vous en relation rapidement !
            </p>
            {error && <div className="mt-4 text-red-500">{error}</div>}
            <form onSubmit={handleLogin} className="mt-8 space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <a href='/compte'>
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                  Laisser la session ouverte
                </label>
                </a>
              </div>
              <a href="/compte" className="ml-2 block text-sm text-blue-900">
                  S'inscrire
              </a>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-lime-500 text-black text-bold rounded-md shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                >
                  Connexion
                </button>
              </div>
              <div className="text-center">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Vous avez oublié votre mot de passe ?
                </a>
              </div>
            </form>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src={ImgLogin}
              alt="Description de l'image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      {/* </main> */}
    </div>
  );
};

export default Login;
