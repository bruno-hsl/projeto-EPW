import React, { useState } from 'react';
import '../styles/Celular.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import watch from '../img/watch.png';
import watch2 from '../img/watch2.png';
import watch3 from '../img/watch3.png';
import watch4 from '../img/watch4.png';
import watch5 from '../img/watch5.png';
import watch6 from '../img/watch6.png';
import appleicon from '../img/AppleLogo.png';

import smart from '../img/smart.png';
import smart2 from '../img/smart2.png';
import smart3 from '../img/smart3.png';
import smart4 from '../img/smart4.png';
import smart5 from '../img/smart5.png';
import smart6 from '../img/smart6.png';
import samicon from '../img/samsungLogo.png';

function Celulares() {
  const navigate = useNavigate();

  const appleItems = [
    {
      id: 1,
      image: watch,
      name: 'Apple Watch Ultra 2',
      description: 'GPS • Celular • Caixa de titânio',
      price: 'R$6744,05',
    },
    {
      id: 2,
      image: watch2,
      name: 'Apple Watch SE',
      description: 'GPS • Caixa de alumínio',
      price: 'R$2654,10',
    },
    {
      id: 3,
      image: watch3,
      name: 'Apple Watch Ultra 2',
      description: 'GPS • Cellular • Caixa de titânio',
      price: 'R$7874,10',
    },
    {
      id: 4,
      image: watch4,
      name: 'Apple Watch SE',
      description: 'GPS • Caixa de alumínio',
      price: 'R$2287,12',
    },
    {
      id: 5,
      image: watch5,
      name: 'Apple Watch Series 9',
      description: 'GPS • Caixa de alumínio',
      price: 'R$3239,11',
    },
    {
      id: 6,
      image: watch6,
      name: 'Apple Watch Series 10',
      description: 'GPS • Caixa de alumínio',
      price: 'R$3998,99',
    },
  ];

  const samsungItems = [
    {
      id: 1,
      image: smart,
      name: 'Smartwatch Samsung Galaxy Fit3',
      description: 'Grafite',
      price: 'R$279,90',
    },
    {
      id: 2,
      image: smart2,
      name: 'Samsung Smartwatch Galaxy Watch6',
      description: 'Grafite',
      price: 'R$1699,90',
    },
    {
      id: 3,
      image: smart3,
      name: 'Samsung Galaxy Watch7 Smartwatch',
      description: 'Creme',
      price: 'R$1599,00',
    },
    {
      id: 4,
      image: smart4,
      name: 'Samsung Galaxy Watch5 Pro BT',
      description: 'Preto',
      price: 'R$1469,24',
    },
    {
      id: 5,
      image: smart5,
      name: 'Samsung Smartwatch Galaxy Watch6 BT',
      description: 'Prata',
      price: 'R$1899,00',
    },
    {
      id: 6,
      image: smart6,
      name: 'Smartwatch Samsung Galaxy Fit3',
      description: 'Prata',
      price: 'R$309,90',
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
        <h1 className="verde">Relógios</h1>
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