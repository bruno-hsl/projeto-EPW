import React from 'react';
import '../styles/Card.css';

function Card() {
    return ( 
        <div class="card_geral">
            <div class="card_parte1">
                <h3>
                    A <span class="cor_letras">melhor</span> escolha para quem entende de <span class="cor_letras">qualidade</span>
                </h3>
                <button className="botao_desconto">
                    Ganhar desconto 
                <img src="src/img/DescontoIcon.png" alt="Ícone de desconto" className="icon_desconto"/>
                </button>


                <div className="redes_sociais_TelaInicial">
                    <a href="https://www.instagram.com/mtcellbrasilia/" target="_blank" rel="noopener noreferrer" className="link_rede_social">
                        <img src="src/img/InstagramPreto.png" alt="Instagram" className="icon_rede_social"/>
                    </a>

                    <a href="https://wa.me/556185490894" target="_blank" rel="noopener noreferrer" className="link_rede_social">
                        <img src="src/img/WhatsAppPreto.png" alt="WhatsApp" className="icon_rede_social"/>
                    </a>
                </div>

            </div>

            <div class="card_images">
                <img src="src/img/FotoInicio1.png" alt="Celular_destaque"/>
            </div>

            <div class="card_logos">
                <img src="src/img/AppleLogo.png" alt="Apple"/>
                <img src="src/img/RedmiLogo.png" alt="Redmi"/>
                <img src="src/img/JblLogo.png" alt="JBL"/>
                <img src="src/img/RealmeLogo.png" alt="Realme"/>
            </div>
        </div>
    );
}

export default Card;