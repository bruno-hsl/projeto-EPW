import React from 'react';
import '../styles/Qs.css';
import FotoDaLoja from '../img/quemSomos_foto.jpeg'
import Instagram from '../img/instagramBlack.png'

function Qs() {
  return (
    <div className="quemSomos">
      <div className="quemSomos_texto">
        <h1>Quem nós somos?</h1>
        <p>
         A MT Cell é uma loja de telefones e acessórios em Brasília. Aqui, você encontrará serviço de assistência técnica, além de diversos itens essenciais para o dia a dia moderno, como carregadores, fones de ouvido e relógios inteligentes, Iphone novos e Seminovos e toda linha de Xiaomi.
        </p>
          <a target={'_blank'} href="https://www.instagram.com/mtcellbrasilia/">
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
