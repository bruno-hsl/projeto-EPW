import React from 'react';
import '../styles/Footer.css';
import instagramIcon from '../img/instagram.png';
import whatsappIcon from '../img/whatsapp.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="redesSociais">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram"  />
        </a>
        <a href="htt  ps://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="whatsapp"  />
        </a>
      </div>
      <p>&copy; Desenvolvido por estudantes da Universidade Católica de Brasília</p>
    </footer>
  );
}

export default Footer;
