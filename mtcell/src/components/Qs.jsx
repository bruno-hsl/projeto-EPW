import React from 'react';
import '../styles/Qs.css';
import FotoDaLoja from '../img/fotoTemporaria.jpg'
import Instagram from '../img/instagramBlack.png'

function Qs() {
  return (
    <div className="quemSomos">
      <div className="quemSomos_texto">
        <h1>Quem nós somos?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum temporibus minus eligendi? Reprehenderit tenetur sed
          obcaecati a ut sit amet sint adipisci fuga. Eaque, iste deserunt numquam pariatur animi ut? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Nesciunt iste reiciendis at ipsam iusto, blanditiis doloremque molestias
          aspernatur, placeat ea laborum nihil quasi rerum? Consectetur fuga deserunt dolores excepturi nihil.
        </p>
          <a href="https://www.instagram.com/stories/mtcellbrasilia/3504172713279654812/">
        <div className='instagram'>
          <p>Instagram</p>
          <img className='instagramFoto' src={Instagram} alt="" />
        </div>
          </a>
      </div>
      <div className="quemSomos_imagem">
        <img className="quemSomos_foto" src={FotoDaLoja} alt="Imagem do lugar" />
      </div>
    </div>
  );
}

export default Qs;
