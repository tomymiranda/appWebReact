import React from "react";
import "./Estilo.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
  <footer class=" text-center text-lg-start FondoFooter">
  <div class="container p-4 FondoFooter">
    
    <div class="row FondoFooter">
     
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Información</h5>

        <p>
          Esta app web cumple con la función de mostrar datos de los personajes de la serie
          Rick y Morty, en forma de tarjetas.
        </p>
      </div>
      
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0 FondoFooter">
        <h5 class="text-uppercase">Redes Sociales</h5>

        <p>
        <i class="bi bi-twitter">Twitter:</i> @TheRickAndMortyApp
        </p>
        <p>
        <i class="bi bi-facebook">Facebook:</i> The Rick And Morty App
        </p>
        <p>
        <i class="bi bi-instagram">Instagram:</i> The Rick And Morty App
        </p>
      </div>
     
    </div>
    
  </div>
  

  
  <div class="text-center p-3 FondoFooter">
    Trabajo Final CUI 2021
  </div>
  
</footer>
  );
};

export default Footer;
