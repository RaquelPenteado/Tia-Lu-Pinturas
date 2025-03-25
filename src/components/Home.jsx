import React from 'react';
import logo from "../assets/logo.png";

export default function Home() {
  return <div className="container-home responsive-margin" id='home'>
    <div className="content">
      <h2>Transformo seu Evento</h2>
      <h3>Com cores e alegria!</h3>
      <p>Sabemos que a fantasia é uma das grandes fontes de alegria na infância e por isso quero oferecer uma experiência inesquecível com personagens, cores e muito glitter 🎨</p>
      <p>Se você está organizando uma festa infantil e quer tornar esse momento ainda mais especial, a Tia Lu Pinturas está pronta para criar sorrisos e tornar sua celebração mais colorida. Vamos transformar a festa de seus pequenos em um evento cheio de magia. ✨</p>
      <a href='#about' className='button'>Informações</a>
    </div>
    <img className="logo" src={logo} alt='logo' />
  </div>;
}