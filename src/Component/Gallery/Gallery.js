import React from 'react';
import Milieu from '../../assets/img/image17.png'
import Haut from '../../assets/img/image18.png'
import Bas from '../../assets/img/image19.png'

const Gallery = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Galerie</h2>
      <div className="grid grid-cols-3 gap-4">
        <img src={Bas} alt="Image 1" className="rounded" />
        <img src={Milieu} alt="Image 2" className="rounded" />
        <img src={Haut} alt="Image 3" className="rounded" />
      </div>
    </section>
  );
}

export default Gallery;
