import React, { useState } from 'react';
import '../styles/Celular.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Charge5 from '../img/Charge5.png';
import Pulse5 from '../img/Pulse5.png';
import PartyBox from '../img/PartyBox.png';
import Clip5 from '../img/Clip5.png';
import Go3 from '../img/Go3.png';
import CaseGo3 from '../img/CaseGo3.png';
import  GoEssential from '../img/GoEssential.png';
import JblLogo from '../img/JblLogo.png';
import CasePartyBox from '../img/CasePartyBox.png';
import CapaCharge5 from '../img/CapaCharge5.png';
import CapaGo3 from '../img/CapaGo3.png';

function Celulares() {
  const appleItems = [
    {
      id: 1,
      image: Charge5,
      name: 'JBL Charge 5',
      description: 'Resistente a Água e Poeira',
      price: 'R$899,90',
    },
    {
      id: 2,
      image: Pulse5,
      name: 'Pulse 5',
      description: 'Portátil com Show de Luzes',
      price: 'R$1499,00',
    },
    {
      id: 3,
      image: PartyBox,
      name: 'PartyBox Encore',
      description: 'Possui Microfone com Fio',
      price: 'R$1479,00',
    },
    {
      id: 4,
      image: Clip5,
      name: 'JBL Clip 5',
      description: 'Altifalante sem Fios Portátil',
      price: 'R$330,00',
    },
    {
      id: 5,
      image: Go3,
      name: 'JBL Go3',
      description: 'Ultraportátil',
      price: 'R$299,00',
    },
    {
      id: 6,
      image: GoEssential,
      name: 'JBL Go Essential',
      description: 'Resistente a Água',
      price: 'R$199,99',
    },
  ];
  const samsungItems = [
    {
      id: 1,
      image: CaseGo3,
      name: 'Bolsa Protetora JBL Go 3',
      description: 'Bolsa Protetora Rígida',
      price: 'R$79,99',
    },
    {
      id: 2,
      image: CasePartyBox,
      name: 'Bolsa Protetora PartyBox',
      description: 'Nylon Impermeável',
      price: 'R$165,00',
    },
    {
      id: 3,
      image: CapaCharge5,
      name: 'Capa de Silicone Charge 5',
      description: 'Bolsa de Borracha Resistente',
      price: 'R$140,00',
    },
    {
      id: 4,
      image: CapaGo3,
      name: 'Capa Silicone JBL Go 3',
      description: 'Capa Protetora',
      price: 'R$160,00',
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
        <h1 className="verde">Caixa de som</h1>
      </center>

      {/* Carrossel JBL */}
      <div className="Titdiv">
        <h1 className="tit">JBL</h1>
        <img src={JblLogo} alt="JBL" class="JBLIcon" />
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

      {/* Carrossel JBL Acessorios */}
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