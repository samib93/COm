import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';

const JoinCommunity = () => {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await setDoc(doc(db, 'newsletter'), {
        email,
      });
      alert("abonnement réussi avec succès !!!")

      navigate('/'); // Redirigez vers la page d'accueil ou la page de connexion après l'inscription
    } catch (error) {
      console.error("Erreur lors de lors: ", error);
    }
  };
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
        <form onSubmit={handleSubmit} className="flex justify-center bg-black rounded-full px-2 py-2 items-center">
          <input 
            type="email" 
            placeholder="ton adresse mail ici." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black text-white items-center focus:outline-none"
          />
          <button className="p-2 bg-white text-black rounded-full h-10 w-10 hover:bg-[#D0E608]">✓</button>
          {/* <button className="text-white flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="ml-1" />
          </button> */}
        </form>
      </div>
    </section>
  );
};

export default JoinCommunity;
