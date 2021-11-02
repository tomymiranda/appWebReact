import React from "react";
import "./Tarjeta.css";

export const Personajes = ({ personajesARepresentar }) => {
  return (
    <div className="row">
      {personajesARepresentar.map((per, idx) => (
        <div key={idx} className="col">
          <div className="card anchoMinimo" >
            <img src={per.image} class="card-img-top" />
          </div>
        </div>
      ))}
    </div>
  );
};

//export default Personajes;
