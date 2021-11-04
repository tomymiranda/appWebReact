import React from "react";

export const Navbar = ({titlePage}) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand text-uppercase tipoLetra" href="/">
           {titlePage}
          </a>
          <a className ="text-uppercase navbar-brand tipoLetra" href = "https://rickymortylatino.com/">
              Ver capitulos online
          </a>
        </div>
      </nav>
    </div>
  );
};
//export default Navbar;
