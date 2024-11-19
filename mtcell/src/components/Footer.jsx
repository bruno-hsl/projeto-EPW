import React from 'react';
import '../styles/Footer.css';
import instagramIcon from '../img/instagram.png';
import whatsappIcon from '../img/whatsapp.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="redesSociais">
        <a href="https://www.instagram.com/stories/mtcellbrasilia/3504172713279654812/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram"  />
        </a>
        <a href="https://wa.me/556185490894" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="whatsapp"  />
        </a>
      </div>
      <p>&copy; Desenvolvido por estudantes da Universidade Católica de Brasília</p>
    </footer>
  );
}

export default Footer;
