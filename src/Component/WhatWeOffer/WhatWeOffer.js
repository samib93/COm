import React from 'react';
import Premier from '../../assets/img/propose1.png'
import Deuxieme from '../../assets/img/propose2.png'

const WhatWeOffer = () => {
  return (
    <section className="flex justify-center py-16">
      <div className="flex space-x-8">
        {/* Concept Section */}
        <div className="flex flex-col bg-white rounded-lg shadow-md p-6 w-1/2">
          <div className="flex items-center mb-4">
            <span className="bg-black text-white rounded-full px-2 py-1 mr-2 text-sm">Concept</span>
            <span className="bg-green-500 text-white rounded-full px-2 py-1 text-sm">🌱</span>
          </div>
          <h3 className="text-xl font-bold mb-5">CE QU'ON PROPOSE.</h3>
          <p className="text-gray-700">Nous mettons en relation les producteurs locaux et entreprises. Cette initiative permet aux salariés d’accéder facilement à des produits locaux de qualité.</p>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center bg-white rounded-lg shadow-md p-6 w-1/2">
          <img src={Premier} alt="Farmer" className="rounded-lg" />
        </div>

        {/* Processus Section */}
        <div className="flex flex-col bg-black rounded-lg shadow-md p-6 w-1/2">
          <div className="flex items-center mb-4">
            <span className="bg-green-500 text-white rounded-full px-2 py-1 mr-2 text-sm">Processus</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">CHOISISSEZ.</h3>
          <p className="text-gray-300">Les entreprises peuvent soutenir l'économie locale tout en offrant des avantages à leurs employés.</p>
        </div>
        {/* <img src={Deuxieme} alt="Farmer" className="float-right rounded-sm" /> */}
      </div>
    </section>
  );
}

export default WhatWeOffer;
