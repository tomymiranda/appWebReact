import React from "react";
import logo from "../img/logo.png";
import "./logo.css";

export const Navbar = ({}) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a href="/">
            <img src={logo} className="tamanioLogo" />
          </a>

          <a
            className="text-uppercase navbar-brand tipoLetra"
            target ="_blank"
            href="https://rickymortylatino.com/"
          >
            Ver capitulos online
          </a>
        </div>
      </nav>
    </div>
  );
};
//export default Navbar;
