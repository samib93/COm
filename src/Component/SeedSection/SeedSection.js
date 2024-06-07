import React from 'react';
import BgHeader from '../../assets/img/headerbg.png'
import Ellispe1 from '../../assets/img/ellipse13.png'
import Ellispe2 from '../../assets/img/ellipse14.png'
import Ellispe3 from '../../assets/img/ellipse16.png'
import Premier from '../../assets/img/propose1.png'
import Play from '../../assets/img/play.png'

const SeedSection = () => {
  return (
    <section className="text-center py-16 bg-white">
      <h2 className="text-3xl font-bold mb-8">Prenez en de la graine.</h2>
      <div className="relative flex justify-center items-center">
        <div className="relative">
          <img src={BgHeader} alt="Field" className="rounded-full w-96 h-96 object-cover" />
          <button className="absolute inset-0 flex justify-center items-center">
            <img src={Play} alt="Play Button" className="rounded h-full w-10 h-10" />
          </button>
        </div>
        <div className="absolute top-0 left-10 w-20 h-20 transform -translate-x-10 -translate-y-10">
          <img src={Ellispe1} alt="Left Image" className="rounded-full object-cover w-full h-full" />
        </div>
        <div className="absolute bottom-0 left-10 w-20 h-20 transform -translate-x-10 translate-y-10">
          <img src={Ellispe2} alt="Bottom Left Image" className="rounded-full object-cover w-full h-full" />
        </div>
        <div className="absolute top-0 right-10 w-20 h-20 transform translate-x-10 -translate-y-10">
          <img src={Ellispe3} alt="Right Image" className="rounded-full object-cover w-full h-full" />
        </div>
        <div className="absolute bottom-0 right-10 w-20 h-20 transform translate-x-10 translate-y-10">
          <img src={Premier} alt="Bottom Right Image" className="rounded-full object-cover w-full h-full" />
        </div>
      </div>
      <div className="mt-8">
        <button className="bg-gray-200 text-black py-2 px-4 rounded-full">en savoir plus</button>
      </div>
    </section>
  );
}

export default SeedSection;
