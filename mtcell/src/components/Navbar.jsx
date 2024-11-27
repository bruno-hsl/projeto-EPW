import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; //npm intall react-icons
import WhatsAppNavbar from '../img/WhatsAppNavbar.png';
import CelularDropdown from '../img/CelularDropdown.png';
import TabletDropdown from '../img/TabletDropdown.png';
import RelogioDropdown from '../img/RelogioDropdown.png';
import CaixaSomDropdown from '../img/CaixaSomDropdown.png';


function Navbar() {
  const [isVisible, setIsVisible] = useState(true); //Visibilidade da Navbar
  const [lastScrollPosition, setLastScrollPosition] = useState(0); // Salva a última posição do scroll
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); //Dropdown 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Menu mobile

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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <nav class={`Navbar ${isVisible ? 'show' : 'hide'}`}>

      <div class="Navbar_logo">
        <a href="/">
          <span>MT</span>
          <span class="logo_cell">cell</span>
        </a>
      </div>

      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`Navbar_links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <li><a href="/">Início</a></li>
        <li class="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
              Produtos
              {isDropdownOpen ? <FaChevronUp class="icon-arrow" /> : <FaChevronDown class="icon-arrow" />}
            </button>
          {isDropdownOpen && (
          <ul class="dropdown-menu">
          <li><Link to="/celulares" onClick={() => setIsMobileMenuOpen(false)}>Celulares</Link></li>
            <img src={CelularDropdown} alt="Celulares" class="dropdown-item-image"/>
            <li><Link to="/tablets" onClick={() => setIsMobileMenuOpen(false)}>Tablets</Link></li>
            <img src={TabletDropdown} alt="Tablets" class="dropdown-item-image"/>
            <li><Link to="/relogios" onClick={() => setIsMobileMenuOpen(false)}>Relógios</Link></li>
            <img src={RelogioDropdown} alt="Relogios" class="dropdown-item-image"/>
            <li><Link to="/produtos/caixa_de_som" onClick={() => setIsMobileMenuOpen(false)}>Caixas de Som</Link></li>
            <img src={CaixaSomDropdown} alt="Relogios" class="dropdown-item-image"/>
           
          </ul>
          )}
        </li>
        <li><Link to="/sobre-nos" onClick={() => setIsMobileMenuOpen(false)}>Sobre Nós</Link></li>
      </ul>
      <li class="Navbar-contato">
        <a href="https://wa.me/556185490894" target="_blank" rel="noopener noreferrer">
          <img src={WhatsAppNavbar} alt="whatsapp" class="Navbar-contato-icon" />
          <span>Contato</span>
        </a>
      </li>
    </nav>
    {isDropdownOpen && <div className="overlay" onClick={closeDropdown}></div>}
    </>
  );
}

export default Navbar;