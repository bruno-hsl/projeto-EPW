import React, { useState } from 'react';
import '../styles/Celular.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import iphone15r from '../img/iphone.png';
import iphone16r from '../img/iphone2.png';
import iphone15a from '../img/iphone3.png';
import iphone13b from '../img/iphone4.png';
import iphone11v from '../img/iphone5.png';
import iphone13p from '../img/iphone6.png';
import appleicon from '../img/AppleLogo.png';
import xiaomi from '../img/xiaomi.png';
import xiaomi2 from '../img/xiaomi2.png';
import xiaomi3 from '../img/xiaomi3.png';
import xiaomi4 from '../img/xiaomi4.png';
import xiaomi5 from '../img/xiaomi5.png';
import xiaomi6 from '../img/xiaomi6.png';
import redicon from '../img/RedmiLogo.png';

function Celulares() {
  const appleItems = [
    {
      id: 1,
      image: iphone16r,
      name: 'iPhone 16',
      description: '128 GB',
      price: 'R$5590,00',
    },
    {
      id: 2,
      image: iphone15r,
      name: 'iPhone 15',
      description: '128 GB',
      price: 'R$3590,00',
    },
    {
      id: 3,
      image: iphone15a,
      name: 'iPhone 15',
      description: '128 GB',
      price: 'R$3590,00',
    },
    {
      id: 4,
      image: iphone13b,
      name: 'iPhone 13',
      description: '128 GB',
      price: 'R$2850,00',
    },
    {
      id: 5,
      image: iphone13p,
      name: 'iPhone 13',
      description: '64 GB',
      price: 'R$1590,00',
    },
    {
      id: 6,
      image: iphone11v,
      name: 'iPhone 11',
      description: '128 GB',
      price: 'R$980,00',
    },
  ];

  const samsungItems = [
    {
      id: 1,
      image: xiaomi,
      name: 'Redmi Note 13',
      description: '256 GB',
      price: 'R$1190,74',
    },
    {
      id: 2,
      image: xiaomi2,
      name: 'Redmi 14c',
      description: '256 GB',
      price: 'R$1299,00',
    },
    {
      id: 3,
      image: xiaomi3,
      name: 'Redmi 13c',
      description: '256 GB',
      price: '1349,90',
    },
    {
      id: 4,
      image: xiaomi4,
      name: 'Redmi Note 13',
      description: '256 GB',
      price: 'R$1169,10',
    },
    {
      id: 5,
      image: xiaomi5,
      name: 'Redmi Note 13 Pro',
      description: '256 GB',
      price: 'R$1599,00',
    },
    {
      id: 6,
      image: xiaomi6,
      name: 'Redmi 13c',
      description: '256 GB',
      price: 'R$1125,00',
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

  return (
    <div>
      <Navbar />

      <center>
        <h1 className="verde">Celulares</h1>
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
              <button className="buy-btn">Comprar</button>
              <button className="details-btn">Saiba mais →</button>
            </div>
          ))}
        </div>

        <button className="carousel-btn next" onClick={handleNextApple}>
          {">"}
        </button>
      </div>

      {/* Carrossel Xiaomi */}
      <div className="Titdiv">
        <h1 className="tit"> Xiaomi </h1>
        <img className="cell-icons" src={redicon} alt="RedmiIcon" />
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
              <button className="buy-btn">Comprar</button>
              <button className="details-btn">Saiba mais →</button>
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