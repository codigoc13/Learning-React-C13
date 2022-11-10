import axios from "axios";
import React, { useEffect, useState } from "react";
import './Personajes.css'

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const fetchPersonaje = async () => {
   const response= await axios.get("https://rickandmortyapi.com/api/character")
   setPersonajes(response.data.results)
  };
  useEffect(() => {
    fetchPersonaje();
  }, []);

  return (
    <div className="contenedor-personajes">
      <h1>Rick And Morty</h1>
      <table id="personajes">
        <thead>
          <th>Nombre</th>
          <th>Imagen</th>
        </thead>
        
        <tbody>
          {personajes.map((personaje) => (
            <tr  key={personaje.id}>
              <td>{personaje.name}</td>
              <td>
                <img src={personaje.image} style={{ width: "100px" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Personajes;
