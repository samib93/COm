import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from '../../Header/Header';
import Values from '../../Values/Values';
import Producers from '../../Producers/Producers';
import Testimonials from '../../Testimonials/Testimonials';
import Gallery from '../../Gallery/Gallery';
import Footer from '../../Footer/Footer';
import WhatWeOffer from '../../WhatWeOffer/WhatWeOffer';
import SeedSection from '../../SeedSection/SeedSection';
import Trust from '../../Trust/Trust';
import FAQ from '../../Faq/Faq';
import JoinCommunity from '../../JoinCommunity/JoinCommunity';

const Home = () => {
  return (
    <div className="container-fluid mx-auto">
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

export default Home;
