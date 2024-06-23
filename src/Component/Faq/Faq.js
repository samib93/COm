import React from 'react';
import fleche from '../../assets/img/double_arrow.png';


const FAQ = () => {
  return (
<section className="py-16 bg-white-100 shadow-md">
  <div className="text-center">
    <h2 className="text-3xl font-raleway mb-4">Des questions ?</h2>
    <a href="/faq" className="inline-block bg-gray-100 text-black py-2 px-4 rounded-full shadow text-lg font-raleway transition-colors duration-300 hover:bg-green-600 flex items-center justify-center w-56 mx-auto">
  J'accède à la FAQ
  <div className="bg-black w-8 h-8 ml-2 rounded-full flex items-center justify-center">
    <img src={fleche} alt="doublearrow" className="w-4 h-4 filter brightness-0 invert" />
  </div>
</a>
  </div>
</section>
  );
};

export default FAQ;
