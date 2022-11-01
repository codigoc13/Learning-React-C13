import React, { useEffect, useState } from "react";
import { getAllItems } from "../../actions/action";

const Carreras = () => {
  const [carreras, setCarreras] = useState([]);
  
  useEffect(() => {
    (async()=>{
        const result=await getAllItems("careers")
        result.statusResponse&&setCarreras(result.data)
    })()
  }, []);

  return (
    <div>
      {
      carreras.length===0?
      <h1>No hay carreras</h1>:
      carreras.map((carrera) => (
        
          <div key={carrera._id}>
            {carrera.name}
            <img src={carrera.imgCareer} />
          </div>
          
      ))}
    </div>
  );
};

export default Carreras;
