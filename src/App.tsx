import React from 'react';
import { Routes, Route } from "react-router-dom";
import banner from './styles/assets/bcq.jpg';
import './styles/Variables.scss';
import { HeaderPage } from "./components/header/HeaderPage";
import { FooterPage } from "./components/footer/FooterPage";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <img src={banner} className="App-banner" alt="banner" />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      <FooterPage />
    </div>
  );
}

export default App;
