import React from 'react';
import escorpiao from "../assets/escorpiao.jpg";
import joaninha from "../assets/joaninha.jpg";
import panda from "../assets/panda.jpg";
import arcoIris from "../assets/rosto-arco-iris.jpg";
import planeta from "../assets/rosto-pintura.jpg";
import tubarao from "../assets/tubarao.jpg";

export default function CatalogoContent() {
  return <div className="container-catalogo">
    {/* <h2>Mural</h2> */}
    <div className="grid responsive-margin">
      <img src={tubarao} alt="Tubarão" />
      <img src={escorpiao} alt="Escorpião" />
      <img src={arcoIris} alt="Rosto com arco iris" />
      <img src={joaninha} alt="Joaninha" />
      <img src={planeta} alt="Rosto com planeta" />
      <img src={panda} alt="Panda" />
    </div>
  </div>;
}