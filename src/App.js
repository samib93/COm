import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './Component/Page/Blog/Blog';
import Home from './Component/Page/Home/Home';
import Signup from './Component/Page/Signup/Signup';
import ArticleDetails from './Component/Page/ArticleDetails/ArticleDetails';
import Login from './Component/Page/Connexion/Connexion';
import Compte from './Component/Page/Compte/Compte';
import Inscription from './Component/Page/Inscription/Inscription';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/login" element={<Login />} />
        <Route path="/compte" element={<Compte />} />
        <Route path="/details-article/:id" element={<ArticleDetails />} />
      </Routes>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MGQ64M6B"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    </Router>
          
  );
}

export default App;
