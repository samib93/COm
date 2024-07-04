import React from 'react';
import Famer from '../../assets/img/propose1.png'
import Process from '../../assets/img/propose2.png'

const WhatWeOffer = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          {/* Première carte */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col md:flex-row md:w-1/2">
            <div className="flex-grow">
              <div className="flex items-center mb-4">
                <span className="bg-black text-white rounded-full px-3 py-1 text-sm font-semibold mr-2">Concept</span>
                <span className="text-black rounded-full px-3 py-1 text-sm font-semibold">&#127811;</span>
              </div>
              <h2 className="text-2xl  font-bold mb-4">CE QU'ON PROPOSE.</h2>
              <p className="text-gray-700 mb-4 font-Raleway">
                Nous mettons en relation les producteurs locaux et entreprises. Cette initiative permet aux salariés d'accéder facilement à des produits locaux de qualité.
              </p>
            </div>
            <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-4">
              <img src={Famer} alt="Image Description" className="rounded-lg w-full md:w-48 h-auto" />
            </div>
          </div>

          {/* Deuxième carte */}
          <div className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row md:w-1/2">
            <div className="flex-grow">
              <div className="flex items-center mb-4">
                <span className="bg-[#D0E608] text-black rounded-full px-3 py-1 text-sm font-semibold mr-2">Processus</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">CHOISISSEZ.</h2>
              <p className="mb-4">
                Les entreprises peuvent soutenir l'économie locale tout en offrant des avantages à leurs employés.
              </p>
            </div>
            <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-4">
              <img src={Process} alt="Image Description" className="rounded-lg w-full md:w-48 h-auto" style={{ height: '200px' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
