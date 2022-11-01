import React, { useState } from "react";

const Formulario = () => {
  const [descripcion, setDescripcion] = useState("");
  const showAlert=(e)=>{
    e.preventDefault()
    alert(descripcion)
  }
  return (
    <div>
      {descripcion === "" ? null : <h1>{descripcion}</h1>}
      <form onSubmit={showAlert}>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        >
        </textarea>
          <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Formulario;
