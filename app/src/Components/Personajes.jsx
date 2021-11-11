import React from "react";
import "./Estilo.css";

export const Personajes = ({ personajesARepresentar = [] }) => {
  return (
    <div className="row">
      {personajesARepresentar.map((item, idx) => (
        <div key={idx} className="col-md-4 mb-4">
          <div className="card shadow p-4 mb-4 bg-white rounded border-secondary ">
            <img src={item.image} className = "anchoMinimo" href ="/"/>
            <div className="card-body">
              <h5 className="card-title tipoLetra text-truncate text-uppercase negrita">{item.name}</h5>
              <hr />
              <p className="tipoLetra">Especie: {item.species}</p>
              <p className="tipoLetra text-truncate">Lugar: {item.location.name}</p>
              <p className="tipoLetra text-truncate">Estado: {item.status}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

//export default Personajes;
