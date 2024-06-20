import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './Component/Page/Blog/Blog';
import Home from './Component/Page/Home/Home';
import Signup from './Component/Page/Signup/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
