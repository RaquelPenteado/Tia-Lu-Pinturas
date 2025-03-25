import React from 'react';
import perfil from "../assets/LuPerfil.png";

export default function About() {
  return <div className="container-about" id='about'>
    <img src={perfil} alt='Perfil' />
    <div className="content">
      <h2>Sobre Mim</h2>
      <p>Meu nome é Luiza, mas podem me chamar de Tia Lu, tenho 22 anos e sou pedagoga. Apaixonada por todo tipo de arte. E acredito que com ela podemos transformar e criar novas perspectivas nas crianças.</p>
      <p>Meu maior sonho é impactar positivamente na vida delas, ajudando a construir um futuro mais criativo e cheio de possibilidades. Pois os pequenos são o nosso futuro. Por isso sempre me dedico a proporcionar carinho, alegria e empatia. 💜</p>
    </div>
  </div>;
}