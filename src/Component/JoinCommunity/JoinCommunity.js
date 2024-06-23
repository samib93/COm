import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const JoinCommunity = () => {
  return (
    <section className="relative py-12 bg-lime-100 flex justify-center items-center">
    <div className="absolute left-0 top-1/2 hidden md:flex transform -rotate-90 -translate-y-1/2 bg-black text-white py-2 px-4 rounded-xl flex items-center w-40 h-12 -left-12">
  <div className="flex items-center">
    <span className="font-raleway text-sm">Newsletter</span>
    <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
  </div>
</div>
      <div className="text-center">
        <h1 className=" font-raleway text-3xl mb-4">Rejoins la communauté !</h1>
        <p className="mb-6 font-raleway">Conseils, opportunités et collaboration directement dans votre boîte mail.</p>
        <div className="flex justify-center bg-black rounded-full px-2 py-2 items-center">
          <input 
            type="email" 
            placeholder="ton adresse mail ici." 
            className=" font-raleway bg-black text-white items-center focus:outline-none"
          />
          <button className="text-white flex items-center ">
            <FontAwesomeIcon icon={faCheckCircle} className="ml-72 w-11 h-11" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
