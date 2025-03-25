import React from 'react';
import map from '../assets/Map.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return <div className="container-contact" id='contact'>
    <h2>Contato</h2>
    <img src={map} alt="Mapa de Campinas" />
    <p className='responsive-margin'>Quer saber mais informações? Entre em contato via WhatsApp ou Instagram para saber mais sobre preços, disponibilidade e como podemos personalizar a experiência para seu evento. Terei o maior prazer em tirar todas as dúvidas. 😁</p>
    <div className="icons-contact">
      <a className='button' target='_blank' rel='noreferrer' href='https://wa.me/5519997929518'>
        <FontAwesomeIcon icon={faWhatsapp} />
        WhatsApp
      </a>
      <a className='button light' target="_blank" rel="noreferrer" href="https://www.instagram.com/tialu.pinturas/">
        <FontAwesomeIcon icon={faInstagram} />
        Instagram
      </a>
    </div>
  </div>;
}