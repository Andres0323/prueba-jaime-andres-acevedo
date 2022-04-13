import React from 'react';
import banner from './styles/assets/bcq.jpg'
import './styles/Variables.scss';
import { HeaderPage } from "./components/header/HeaderPage";
import {FooterPage} from "./components/footer/FooterPage";

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <img src={banner} className="App-banner" alt="banner" />
        <div> Hola mundo</div>
        <div> Hola mundo</div>
        <div> Hola mundo</div>
      <FooterPage />
    </div>
  );
}

export default App;
