import React from "react";
import "./Tarjeta.css";

export const Personajes = ({ personajesARepresentar = [] }) => {
  return (
    <div className="row">
      {personajesARepresentar.map((item, idx) => (
        <div key={idx} className="col-md-4 mb-4">
          <div className="card">
            <img src={item.image} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <hr />
              <p>Especie: {item.species}</p>
              <p>Lugar: {item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

//export default Personajes;
