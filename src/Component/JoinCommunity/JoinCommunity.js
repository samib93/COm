import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const JoinCommunity = () => {
  return (
    <section className="relative py-12 bg-lime-100 flex justify-center items-center">
     <div className="absolute left-0 top-1/2 hidden md:flex transform rotate-90 -translate-y-1/2 bg-black text-white py-2 px-4 rounded-full flex items-center">
        <div className="flex flex-col items-center transform origin-bottom-left">
          <FontAwesomeIcon icon={faEnvelope} className="mb-2" />
          <span className="text-sm">Newsletter</span>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-3xl mb-4">Rejoins la communauté !</h1>
        <p className="mb-6">Conseils, opportunités et collaboration directement dans votre boîte mail.</p>
        <div className="flex justify-center bg-black rounded-full px-2 py-2 items-center">
          <input 
            type="email" 
            placeholder="ton adresse mail ici." 
            className="bg-black text-white items-center focus:outline-none"
          />
          <button className="p-2 bg-white text-black rounded-full h-10 w-10 hover:bg-gray-800">✓</button>
          {/* <button className="text-white flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="ml-1" />
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
