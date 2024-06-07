import React from 'react';
import Premier from '../../assets/img/image9.png';
import Deuxieme from '../../assets/img/image10.png';
import Troisieme from '../../assets/img/image11.png'
const Producers = () => {
  return (
    <section className="text-center py-16">
      <h2 className="text-3xl font-bold mb-8">Les producteurs</h2>
      <div className="flex justify-around">
        <div className="p-4 rounded-lg shadow-md">
          <img src={Premier} alt="Éleveurs" className="rounded mb-4" />
          <h3 className="font-bold">Éleveurs</h3>
        </div>
        <div className="p-4 rounded-lg shadow-md">
          <img src={Deuxieme} alt="Fromagers" className="rounded mb-4" />
          <h3 className="font-bold">Fromagers</h3>
        </div>
        <div className="p-4 rounded-lg shadow-md">
          <img src={Troisieme} alt="Maraîchers" className="rounded mb-4" />
          <h3 className="font-bold">Maraîchers</h3>
        </div>
      </div>
    </section>
  );
}

export default Producers;
