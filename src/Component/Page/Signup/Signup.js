// Signup.js
import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full flex justify-between items-center p-6 bg-white shadow-md">
        <img src="path-to-logo.png" alt="Fresh Logo" className="w-32" />
        <nav className="flex space-x-4">
          <a href="/producers" className="text-gray-700 hover:text-gray-900">nos producteurs</a>
          <a href="/account" className="text-gray-700 hover:text-gray-900">compte</a>
          <a href="/partnership" className="px-4 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500">FAIRE UN PARTENARIAT</a>
        </nav>
      </header>

      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden mt-8 mx-4 md:mx-0 md:max-w-4xl">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">Créez votre compte</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Profession</label>
              <select className="w-full border rounded-lg px-3 py-2">
                <option value="">Sélectionnez votre profession</option>
                {/* Autres options */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Nom</label>
              <input type="text" className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Prénom</label>
              <input type="text" className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Pays</label>
              <select className="w-full border rounded-lg px-3 py-2">
                <option value="">France métropolitaine</option>
                {/* Autres options */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Téléphone portable</label>
              <div className="flex">
                <select className="border rounded-l-lg px-3 py-2">
                  <option value="+33">+33</option>
                  {/* Autres options */}
                </select>
                <input type="tel" className="w-full border-t border-r border-b rounded-r-lg px-3 py-2" />
              </div>
            </div>
            <button type="submit" className="w-full bg-yellow-400 text-black rounded-lg py-2 hover:bg-yellow-500">Continuer</button>
          </form>
        </div>
        <div className="hidden md:block w-1/2 bg-cover" style={{ backgroundImage: "url('path-to-your-image.jpg')" }}></div>
      </div>
    </div>
  );
};

export default Signup;
