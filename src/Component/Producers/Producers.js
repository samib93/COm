import React from 'react';
import Premier from '../../assets/img/image9.png';
import Deuxieme from '../../assets/img/image10.png';
import Troisieme from '../../assets/img/image11.png';
import fleche from '../../assets/img/double_arrow.png';

const Producers = () => {
  return (
    <section className="text-center py-16 mb-16 mt-16">
      <h2 className="text-3xl font-raleway font-normal mb-8">Les producteurs</h2>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="p-4 rounded-lg shadow-md bg-customPaleGreenYellow mb-8 md:mb-0">
          <img src={Premier} alt="Éleveurs" className="rounded mb-4 hidden md:block" />
          <div className="flex items-center justify-center md:justify-between">
            <h3 className="font-normal font-raleway text-white bg-black rounded-full w-44 p-1">Éleveurs</h3>
            <div className="bg-customPaleGreenYellow w-8 h-8 rounded-full flex items-center justify-center border border-black hidden md:flex">
              <img src={fleche} alt="double flèche" className="w-4 h-4 filter brightness-0" />
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg shadow-md bg-customPaleGreenYellow mb-8 md:mb-0">
          <img src={Deuxieme} alt="Fromagers" className="rounded mb-4 hidden md:block" />
          <div className="flex items-center justify-center md:justify-between">
            <h3 className="font-raleway font-normal text-white bg-black rounded-full w-44 p-1">Fromagers</h3>
            <div className="bg-customPaleGreenYellow w-8 h-8 rounded-full flex items-center justify-center border border-black hidden md:flex">
              <img src={fleche} alt="double flèche" className="w-4 h-4 filter brightness-0" />
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg shadow-md bg-customPaleGreenYellow">
          <img src={Troisieme} alt="Maraîchers" className="rounded mb-4 hidden md:block" />
          <div className="flex items-center justify-center md:justify-between">
            <h3 className="font-normal font-raleway text-white bg-black rounded-full w-44 p-1">Maraîchers</h3>
            <div className="bg-customPaleGreenYellow w-8 h-8 rounded-full flex items-center justify-center border border-black hidden md:flex">
              <img src={fleche} alt="double flèche" className="w-4 h-4 filter brightness-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Producers;