import React from 'react';
import logo from './logo.svg';
import banner from './styles/assets/bcq.jpg'
import './styles/Variables.scss';
import { HeaderPage } from "./components/header/HeaderPage";

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <img src={banner} className="App-banner" alt="banner" />
    </div>
  );
}

export default App;
