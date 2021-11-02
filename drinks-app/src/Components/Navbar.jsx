import React from "react";

export const Navbar = ({titlePage}) => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand text-uppercase" href="/">
           {titlePage}
          </a>
        </div>
      </nav>
    </div>
  );
};
//export default Navbar;
