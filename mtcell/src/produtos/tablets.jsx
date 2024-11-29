import React, { useState } from 'react';
import '../styles/Celular.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import ipad from '../img/ipad.png';
import ipad2 from '../img/ipad2.png';
import ipad3 from '../img/ipad3.png';
import ipad4 from '../img/ipad4.png';
import ipad5 from '../img/ipad5.png';
import ipad6 from '../img/ipad6.png';
import appleicon from '../img/AppleLogo.png';

import tab from '../img/tab.png';
import tab2 from '../img/tab2.png';
import tab3 from '../img/tab3.png';
import tab4 from '../img/tab4.png';
import tab5 from '../img/tab5.png';
import tab6 from '../img/tab6.png';
import samicon from '../img/samsungLogo.png';

function Celulares() {
  const navigate = useNavigate();

  const appleItems = [
    {
      id: 1,
      image: ipad,
      name: 'iPad (10ª geração)',
      description: '64 GB',
      price: 'R$3590,00',
    },
    {
      id: 2,
      image: ipad2,
      name: 'iPad Pro 2018',
      description: '64 GB',
      price: 'R$2311,25',
    },
    {
      id: 3,
      image: ipad3,
      name: 'iPad (7ª geração)',
      description: '32 GB',
      price: 'R$839,93',
    },
    {
      id: 4,
      image: ipad4,
      name: 'iPad (6ª geração)',
      description: '32 GB',
      price: 'R$666,15',
    },
    {
      id: 5,
      image: ipad5,
      name: 'iPad (9ª geração)',
      description: '64 GB',
      price: 'R$1185,98',
    },
    {
      id: 6,
      image: ipad6,
      name: 'iPad (5ª Geração)',
      description: '32 GB',
      price: 'R$631,39',
    },
  ];

  const samsungItems = [
    {
      id: 1,
      image: tab,
      name: 'GALAXY TAB A9',
      description: '64 GB',
      price: 'R$979,90',
    },
    {
      id: 2,
      image: tab2,
      name: 'Galaxy Tab A7 Lite',
      description: '32 GB',
      price: 'R$1842,00',
    },
    {
      id: 3,
      image: tab3,
      name: 'Galaxy Tab A9+ Plus',
      description: '128 GB',
      price: 'R$1.807,95',
    },
    {
      id: 4,
      image: tab4,
      name: 'Galaxy Tab S6 Lite',
      description: '128 GB',
      price: 'R$2290,00',
    },
    {
      id: 5,
      image: tab5,
      name: 'Galaxy Tab A9',
      description: '256 GB',
      price: 'R$1384,28',
    },
    {
      id: 6,
      image: tab6,
      name: 'Galaxy Tab S6 Lite',
      description: '64 GB',
      price: 'R$1852,00',
    },
  ];

  const [appleIndex, setAppleIndex] = useState(0);
  const [samsungIndex, setSamsungIndex] = useState(0);

  const handleNextApple = () => {
    if (appleIndex < appleItems.length - 4) {
      setAppleIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevApple = () => {
    if (appleIndex > 0) {
      setAppleIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextSamsung = () => {
    if (samsungIndex < samsungItems.length - 4) {
      setSamsungIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevSamsung = () => {
    if (samsungIndex > 0) {
      setSamsungIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleClick = () => {
    navigate('/pagamentoUM');
  };

  return (
    <div>
      <Navbar />

      <center>
        <h1 className="verde">Tablets</h1>
      </center>

      {/* Carrossel Apple */}
      <div className="Titdiv">
        <h1 className="tit">Apple</h1>
        <img className="cell-icons" src={appleicon} alt="AppleIcon" />
      </div>

      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={handlePrevApple}>
          {"<"}
        </button>

        <div className="carousel">
          {appleItems.slice(appleIndex, appleIndex + 4).map((item) => (
            <div key={item.id} className="carousel-item">
              <img src={item.image} alt={item.name} className="carousel-image" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
              <button className="buy-btn" onClick={handleClick}>
                Reservar
              </button>
            </div>
          ))}
        </div>

        <button className="carousel-btn next" onClick={handleNextApple}>
          {">"}
        </button>
      </div>

      {/* Carrossel Samsung */}
      <div className="Titdiv2">
        <h1 className="tit"> Samsung </h1>
        <img className="cell-icons" src={samicon} alt="SaumsungIcon" />
      </div>

      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={handlePrevSamsung}>
          {"<"}
        </button>

        <div className="carousel">
          {samsungItems.slice(samsungIndex, samsungIndex + 4).map((item) => (
            <div key={item.id} className="carousel-item">
              <img src={item.image} alt={item.name} className="carousel-image" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
              <button className="buy-btn" onClick={handleClick}>
                Reservar
              </button>
            </div>
          ))}
        </div>

        <button className="carousel-btn next" onClick={handleNextSamsung}>
          {">"}
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Celulares;