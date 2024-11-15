import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


function Navbar() {
  return (
    <nav class="Navbar">

      <div class="Navbar_logo">
        <span>MT</span>
        <span class="logo_cell">cell</span>
      </div>
      <ul class="Navbar_links">
        <li><a href="/">Início</a></li>
        <li class="dropdown">
          <a href="#">Produtos</a>
          <ul class="dropdown-menu">
            <li><a href="/produtos/celulares">Celulares</a></li>
            <li><a href="/produtos/tablets">Tablets</a></li>
            <li><a href="/produtos/relogios">Relógios</a></li>
            <li><a href="/produtos/videogames">Video games</a></li>
            <li><a href="/produtos/caixa_de_som">Caixa de som</a></li>
          </ul>
        </li>
        <li><a href="/sobre">Sobre Nós</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;