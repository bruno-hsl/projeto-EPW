import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import WhatsAppNavbar from '../img/WhatsAppNavbar.png';
import CelularDropdown from '../img/CelularDropdown.png';
import TabletDropdown from '../img/TabletDropdown.png';
import RelogioDropdown from '../img/RelogioDropdown.png';
import CaixaSomDropdown from '../img/CaixaSomDropdown.png';


function Navbar() {
  const [isVisible, setIsVisible] = useState(true); //Visibilidade da Navbar
  const [lastScrollPosition, setLastScrollPosition] = useState(0); // Salva a última posição do scroll

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
        // Esconder a navbar ao rolar para baixo
        setIsVisible(false);
      } else {
        // Mostrar a navbar ao rolar para cima
        setIsVisible(true);
      }

      // Atualizar a última posição do scroll
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  return (
    <nav class={`Navbar ${isVisible ? 'show' : 'hide'}`}>

      <div class="Navbar_logo">
        <span>MT</span>
        <span class="logo_cell">cell</span>
      </div>
      <ul class="Navbar_links">
        <li><a href="/">Início</a></li>
        <li class="dropdown">
          <a href="#">Produtos</a>
          <ul class="dropdown-menu">
          <li><Link to="/celulares">
            <img src={CelularDropdown} alt="Celulares" class="dropdown-item-image"/>
            Celulares</Link></li>
            <li><Link to="/tablets">
            <img src={TabletDropdown} alt="Tablets" class="dropdown-item-image"/>
            Tablets</Link></li>
            <li><Link to="/relogios">
            <img src={RelogioDropdown} alt="Relogios" class="dropdown-item-image"/>
            Relógios</Link></li>
            <li><Link to="/produtos/caixa_de_som">
            <img src={CaixaSomDropdown} alt="Relogios" class="dropdown-item-image"/>
            Caixa de som</Link></li>
          </ul>
        </li>
        <li><Link to="/sobre-nos">Sobre Nós</Link></li>
      </ul>
      <li class="Navbar-contato">
        <a href="https://wa.me/556185490894" target="_blank" rel="noopener noreferrer">
          <img src={WhatsAppNavbar} alt="whatsapp" class="Navbar-contato-icon" />
          <span>Contato</span>
        </a>
      </li>
    </nav>
  );
}

export default Navbar;