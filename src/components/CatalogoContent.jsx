import React from 'react';
import escorpiao from "../assets/escorpiao.jpeg";
import joaninha from "../assets/joaninha.jpeg";
import panda from "../assets/panda.jpeg";
import arcoIris from "../assets/notas-musicais.jpeg";
import planeta from "../assets/planetas.jpeg";
import tubarao from "../assets/tubarao.jpeg";

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