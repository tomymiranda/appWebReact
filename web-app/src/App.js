import React, {useState,useEffect} from 'react';
import { Navbar } from "./Components/Navbar";
import  { Personajes } from "./Components/Personajes";


function App() {
  
  const urlDeApi = "https://rickandmortyapi.com/api/character"

  
  const [personajesState,setStatePersonajes] = useState ([])
  
  
  const personajesObtenidosDeApi = (url) => fetch(url)
                                    .then(response => response.json())
                                    .then(data => setStatePersonajes(data.results))
                                    .catch(error => console.log(error))

  
  useEffect(() => {
    personajesObtenidosDeApi(urlDeApi)
  },[])
  
return (
    <>
    <Navbar titlePage = {"Rick y Morty App"}/>
    <div className ="container" >
      <Personajes personajesARepresentar = {personajesState} />
    </div>
    </>
  );
}

export default App;
