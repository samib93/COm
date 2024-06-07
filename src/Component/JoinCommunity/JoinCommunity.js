import React from 'react';

const JoinCommunity = () => {
  return (
    <section className="py-16 bg-green-100">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Rejoignez la communauté !</h2>
        <p className="text-lg mb-6">Conseils, opportunités et collaborations à recevoir dans votre boîte mail.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center">
          <input 
            type="email" 
            placeholder="Entrez votre adresse mail ici" 
            className="p-2 w-full sm:w-auto border border-gray-300 rounded-l-lg sm:rounded-r-none sm:flex-1 mb-4 sm:mb-0" 
          />
          <button 
            type="submit" 
            className="bg-green-500 text-white py-2 px-6 rounded-r-lg sm:rounded-l-none transition-colors duration-300 hover:bg-green-600"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinCommunity;
