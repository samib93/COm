import React from 'react';
import Famer from '../../assets/img/propose1.png'
import Process from '../../assets/img/propose2.png'
import mangue from '../../assets/img/mangue_blanche.png'

const WhatWeOffer = () => {
  return (
    <section className="py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
        {/* Première carte */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col md:flex-row md:w-1/2 sm:w-4/5 sm:ml-16 h-96">
          <div className="flex-grow">
            <div className="flex items-center mb-4">
              <span className="bg-black text-white rounded-full px-3 py-1 text-base font-raleway mr-2">Concept</span>
              <span class="bg-black text-white rounded-full px-2 py-1 text-sm inline-flex items-center justify-center">
              <img src={mangue} alt="Image alternative" class="h-6 w-5 mt-1 rounded-full" />
            </span>
            </div>
            <h2 className="text-3xl font-florensa font-normal text-black mb-2 mt-28">CE QU'ON PROPOSE.</h2>
            <p className="text-gray-700 font-raleway mb-4">
              Nous mettons en relation les producteurs locaux et entreprises. Cette initiative permet aux salariés d'accéder facilement à des produits locaux de qualité.
            </p>
          </div>
          <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-4">
            <img src={Famer} alt="Image Description" className="rounded-lg w-full md:w-64 h-auto md:block hidden" />
          </div>
        </div>
  
        {/* Deuxième carte */}
        <div className="bg-black text-white p-6 rounded-lg shadow-lg  flex flex-col md:flex-row md:w-2/6 sm:w-4/5 sm:ml-16">
          <div className="flex-grow">
            <div className="flex items-center mb-4">
              <span className="bg-customGreen text-black rounded-full px-3 py-1 text-base font-raleway mr-2 mb-20">Processus</span>
            </div>
            <h2 className="text-3xl font-florensa font-normal text-white mb-2">CHOISISSEZ.</h2>
            <p className="mb-4 font-raleway">
              Les entreprises peuvent soutenir l'économie locale tout en offrant des avantages à leurs employés.
            </p>
          </div>
          <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-4">
            <img src={Process} alt="Image Description" className="rounded-lg   md:w-36 h-auto md:block hidden"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default WhatWeOffer;
