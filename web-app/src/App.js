import React, {useState,useEffect} from 'react';
import { Navbar } from "./Components/Navbar";
import  { Personajes } from "./Components/Personajes";
import { Pagination } from "./Components/Pagination";


function App() {
  
  const urlDeApi = "https://rickandmortyapi.com/api/character"

  
  const [personajesState,setStatePersonajes] = useState ([])
  const [info,setStateInfo] = useState([])
  
  
  const personajesObtenidosDeApi = (url) => fetch(url)
                                    .then(response => response.json())
                                    .then(data => {
                                      setStatePersonajes(data.results);
                                      setStateInfo(data.info);
                                    })
                                    .catch(error => console.log(error))

  
  useEffect(() => {
    personajesObtenidosDeApi(urlDeApi)
  },[])

  const mostrarPrevio = () => {
    personajesObtenidosDeApi(info.prev)
  }

  const mostrarSiguiente = () => {
    personajesObtenidosDeApi(info.next)
  }
  
return (
    <>
    <Navbar titlePage = {"Rick y Morty App"}/>
    <div className ="container mt-5" >
      <Pagination hayPrevio = {info.prev}  haySiguiente = {info.next} previo = {mostrarPrevio} siguiente = {mostrarSiguiente} />
      <Personajes personajesARepresentar = {personajesState} />
      <Pagination hayPrevio = {info.prev}  haySiguiente = {info.next} previo = {mostrarPrevio} siguiente = {mostrarSiguiente}/>
    </div>
    </>
  );
}

export default App;
