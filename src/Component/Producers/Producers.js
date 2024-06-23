import React from 'react';
import Premier from '../../assets/img/image9.png';
import Deuxieme from '../../assets/img/image10.png';
import Troisieme from '../../assets/img/image11.png';
import fleche from '../../assets/img/double_arrow.png';
const Producers = () => {
  return (
    <section className="place-items-center text-center py-16  lg:ml-12 lg:w-full lg:h-auto sm:w-96 sm:ml-40 ">
    <h2 className="text-5xl font-raleway mb-8">Les producteurs</h2>
    <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-16">
      <div className="p-4 bg-lime-100 rounded-lg shadow-md flex flex-col items-center justify-center text-center w-96">
        <img src={Premier} alt="Éleveurs" className="rounded mb-4" />
        <div className="flex items-center ">
          <h3 className="bg-black text-white font-raleway rounded-full px-4 py-1 mr-2 ">Éleveurs</h3>
          <div className="bg-customPaleGreenYellow w-8 h-8 rounded-full flex items-center justify-center border border-black ml-52">
            <img src={fleche} alt="doublearrow" className="w-4 h-4 filter brightness-0" />
          </div>
        </div>
      </div>
      <div className="p-4 bg-lime-100 rounded-lg shadow-md flex flex-col items-center justify-center text-center w-96">
        <img src={Deuxieme} alt="Fromagers" className="rounded mb-4" />
        <div className="flex items-center">
          <h3 className="bg-black text-white font-raleway rounded-full px-4 py-1  mr-2">Fromagers</h3>
          <div className="customPaleGreenYellow w-8 h-8 rounded-full flex items-center justify-center border border-black ml-52">
            <img src={fleche} alt="doublearrow" className="w-4 h-4 filter brightness-0" />
          </div>
        </div>
      </div>
      <div className="p-4 bg-lime-100 rounded-lg shadow-md flex flex-col items-center justify-center text-center w-96">
        <img src={Troisieme} alt="Maraîchers" className="rounded mb-4" />
        <div className="flex items-center">
          <h3 className="bg-black text-white font-raleway rounded-full px-4 py-1  mr-2">Maraîchers</h3>
          <div className="customPaleGreenYellow w-8 h-8 rounded-full flex items-center justify-center border border-black ml-52">
            <img src={fleche} alt="doublearrow" className="w-4 h-4 filter brightness-0" />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Producers;
