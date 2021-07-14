import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Comoponents/Footer';
import Header from './Comoponents/Header';
import Produtos from './Comoponents/Produtos';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
