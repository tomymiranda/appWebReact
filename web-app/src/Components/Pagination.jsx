import React from "react";

export const Pagination = ({ hayPrevio, haySiguiente, previo, siguiente }) => {
  const paginaAnterior = () => {
    previo();
  };

  const paginaSiguiente = () => {
    siguiente();
  };

  return (
    <nav>
      <ul className="pagination justify-content-end my-4 rounded">
        <li className="page-item">
          {hayPrevio ? (
            <button className="page-link" onClick={paginaAnterior}>
              Previo
            </button>
          ) : null}
        </li>
        <li className="page-item">
          {haySiguiente ? (
            <button className="page-link" onClick={paginaSiguiente}>
              Siguiente
            </button>
          ) : null}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
