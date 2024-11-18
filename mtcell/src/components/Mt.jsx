import React from 'react';
import '../styles/Mt.css';
import desconto from '../img/desconto.png';
import cartao from '../img/cartao.png';
import qualidade from '../img/qualidade.png';

function Mt() {
    return ( 
        <section id="SECmotivos">
            <div class="titulo">  
                <h1>Motivos para comprar seu celular na MT<span class="verde">cell</span>.</h1>
            </div> 

            <div class="boxes">
                <img class="iconsP" src={desconto} alt="Desconto" />
                <h1 class="TitBox">Promoções e preços imperdíveis.</h1>
                <h1 class="TxtBox">Os melhores preços e descontos da cidade você encontra aqui.</h1>
            </div>
            
            <div class="boxes">
                <img class="iconsP" src={cartao} alt="Cartão" />
                <h1 class="TitBox">Várias opções de pagamento.</h1>
                <h1 class="TxtBox">Aqui aceitamos diversos tipos de pagamento: Pix, cartão de crédito e dinheiro.</h1>
            </div>

            <div class="boxes">
                <img class="iconsP" src={qualidade} alt="Qualidade" />
                <h1 class="TitBox">Produtos de alta qualidade.</h1>
                <h1 class="TxtBox">A maior qualidade de produtos do mercado está aqui!</h1>
            </div>

            <div class="TitBox1">
                <h1>Localização</h1>
                <h1 class="TxtBox1">📍 Shopping Popular de Ceilândia - Box 417 </h1>
            </div>

            <div class="sec">
                <div>
                    <iframe class="mapa"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.704442327803!2d-48.10456098819339!3d-15.819530923513472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bcd81e92df16f%3A0xc79d2261af60e91!2sShopping%20Popular%20de%20Ceil%C3%A2ndia!5e0!3m2!1spt-BR!2sbr!4v1731950173545!5m2!1spt-BR!2sbr" 
                        width="700" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    );
}

export default Mt;