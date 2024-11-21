import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


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
            <li><Link to="/celulares">Celulares</Link></li>
            <li><a href="/produtos/tablets">Tablets</a></li>
            <li><a href="/produtos/relogios">Relógios</a></li>
            <li><a href="/produtos/videogames">Video games</a></li>
            <li><a href="/produtos/caixa_de_som">Caixa de som</a></li>
          </ul>
        </li>
        <li><Link to="/sobre-nos">Sobre Nós</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;