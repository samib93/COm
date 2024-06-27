import React from 'react';
import BgHeader from '../../assets/img/headerbg.png'
import Ellispe1 from '../../assets/img/ellipse13.png'
import Ellispe2 from '../../assets/img/ellipse14.png'
import Ellispe3 from '../../assets/img/ellipse16.png'
import Premier from '../../assets/img/propose1.png'
import Play from '../../assets/img/play.png'

const SeedSection = () => {
  const images = [
    { src: BgHeader, alt: 'Image 1' },
    { src: Ellispe1, alt: 'Image 2' },
    { src: Ellispe2, alt: 'Image 3' },
    { src: Ellispe3, alt: 'Image 4' },
    { src: Premier, alt: 'Image 5' },
  ];

  return (
    <section className="text-center py-16 bg-grey-500">
        <h2 className="text-3xl mb-8">Prenez-en de la graine</h2>
        <div className="flex justify-center items-center flex-wrap relative">
          <div className="relative w-full h-full flex justify-center items-center">
          <div className="relative">
           <img src={BgHeader} alt="Field" className="rounded-lg shadow-lg w-96 h-96 object-cover" />
           <button className="absolute inset-0 flex justify-center items-center">
             <img src={Play} alt="Play Button" className="rounded w-10 h-10" />
           </button>
          </div>
            <div className="absolute w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-cover bg-center rounded-full shadow-lg" style={{ backgroundImage: `url(${images[1].src})`, top: '0%', left: '10%' }} alt={images[1].alt}></div>
            <div className="absolute w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-cover bg-center rounded-full shadow-lg" style={{ backgroundImage: `url(${images[2].src})`, top: '0%', right: '10%' }} alt={images[2].alt}></div>
            <div className="absolute w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-cover bg-center rounded-full shadow-lg" style={{ backgroundImage: `url(${images[3].src})`, bottom: '0%', left: '10%' }} alt={images[3].alt}></div>
            <div className="absolute w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-cover bg-center rounded-full shadow-lg" style={{ backgroundImage: `url(${images[4].src})`, bottom: '0%', right: '10%' }} alt={images[4].alt}></div>
          </div>
        </div>
        <div className="absolute justify-content-end right-10 text-right mt-8">
          <button className="bg-gray-100 border-2 border-black tex-center text-black text-start py-2 px-4 rounded-full w-72 shadow-lg hover:bg-lime-100">Voir les vidéos</button>
        </div>
    </section>
  );
};

export default SeedSection;


// import React from 'react';
// import BgHeader from '../../assets/img/headerbg.png'
// import Ellispe1 from '../../assets/img/ellipse13.png'
// import Ellispe2 from '../../assets/img/ellipse14.png'
// import Ellispe3 from '../../assets/img/ellipse16.png'
// import Premier from '../../assets/img/propose1.png'
// import Play from '../../assets/img/play.png'

// const SeedSection = () => {
//   return (
//     <section className="text-center py-16 bg-white">
//       <h2 className="text-3xl font-bold mb-8">Prenez en de la graine.</h2>
//       <div className="relative flex justify-center items-center">
//         <div className="relative">
//           <img src={BgHeader} alt="Field" className="rounded-full w-96 h-96 object-cover" />
//           <button className="absolute inset-0 flex justify-center items-center">
//             <img src={Play} alt="Play Button" className="rounded w-10 h-10" />
//           </button>
//         </div>
//         <div className="absolute top-0 left-10 w-20 h-20 transform -translate-x-10 -translate-y-10">
//           <img src={Ellispe1} alt="Left Image" className="rounded-full object-cover w-full h-full" />
//         </div>
//         <div className="absolute bottom-0 left-10 w-20 h-20 transform -translate-x-10 translate-y-10">
//           <img src={Ellispe2} alt="Bottom Left Image" className="rounded-full object-cover w-full h-full" />
//         </div>
//         <div className="absolute top-0 right-10 w-20 h-20 transform translate-x-10 -translate-y-10">
//           <img src={Ellispe3} alt="Right Image" className="rounded-full object-cover w-full h-full" />
//         </div>
//         <div className="absolute bottom-0 right-10 w-20 h-20 transform translate-x-10 translate-y-10">
//           <img src={Premier} alt="Bottom Right Image" className="rounded-full object-cover w-full h-full" />
//         </div>
//       </div>
//       <div className="mt-8">
//         <button className="bg-gray-200 text-black py-2 px-4 rounded-full">en savoir plus</button>
//       </div>
//     </section>
//   );
// }

// export default SeedSection;
