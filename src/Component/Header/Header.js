import React from 'react';
import BgHeader from '../../assets/img/headerbg.png'

const Header = () => {
  return (
    <header className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${BgHeader})` }}>
      <nav className="flex justify-between items-center p-5 bg-opacity-50 bg-black">
        <div className="text-white text-xl font-bold">FRESH</div>
        <div>
          <a href="#" className="text-white px-4">Nos Produits</a>
          <a href="#" className="text-white px-4">Contact</a>
          <a href="#" className="text-white bg-green-500 px-4 py-2 rounded">Faire un Partenariat</a>
        </div>
      </nav>
      <div className="flex items-center  justify-center h-full">
        <h1 className="text-6xl text-white font-bold">BIENVENUE SUR FRESH</h1>
        {/* <p className='place-items-start text-white'>La plateforme pour collaborer avec les entreprises et agriculteurs de votre choix !</p> */}
      </div>
    </header>
  );
}

export default Header;
