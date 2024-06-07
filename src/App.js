import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from './Component/Header/Header';
import Values from './Component/Values/Values';
import Producers from './Component/Producers/Producers';
import Testimonials from './Component/Testimonials/Testimonials';
import Gallery from './Component/Gallery/Gallery';
import Footer from './Component/Footer/Footer';
import WhatWeOffer from './Component/WhatWeOffer/WhatWeOffer';
import SeedSection from './Component/SeedSection/SeedSection';
import Trust from './Component/Trust/Trust';
import FAQ from './Component/Faq/Faq';
import JoinCommunity from './Component/JoinCommunity/JoinCommunity';

function App() {
  return (
    <div>
      <Header />
      <WhatWeOffer />
      <Values />
      <SeedSection />
      <Producers />
      <Trust />
      <Testimonials />
      <Gallery />
      <FAQ />
      <JoinCommunity />
      <Footer />
    </div>
  );
}

export default App;
