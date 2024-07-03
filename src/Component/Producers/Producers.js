import React from 'react';
import Premier from '../../assets/img/image9.png';
import Deuxieme from '../../assets/img/image10.png';
import Troisieme from '../../assets/img/image11.png'
const Producers = () => {
  return (
    <section className="place-items-center text-center py-16">
      <h2 className="text-3xl mb-8">Les producteurs.</h2>
      <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-16 ">
        <div className="p-4 bg-lime-100 rounded-lg shadow-md">
          <img src={Premier} alt="Éleveurs" className="rounded mb-4" />
          <h3 className="flex justify-content-start bg-black rounded-full px-4 w-24 text-white">Éleveurs</h3>
        </div>
        <div className="p-4 bg-lime-100 rounded-lg shadow-md">
          <img src={Deuxieme} alt="Fromagers" className="rounded mb-4" />
          <h3 className="flex justify-content-start bg-black rounded-full px-4 w-32 text-white">Fromagers</h3>
        </div>
        <div className="p-4 bg-lime-100 rounded-lg shadow-md">
          <img src={Troisieme} alt="Maraîchers" className="rounded mb-4" />
          <h3 className="flex justify-content-start bg-black rounded-full px-4 w-32 text-white">Maraîchers</h3>
        </div>
      </div>
    </section>
  );
}

export default Producers;
