import React, { useState } from "react";

const FormularioNoticias = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
const showAlert=(e)=>{
    e.preventDefault()
    alert(`${title} ${author}`)
    setTitle("")
    setAuthor("")
    setDate("")
    setImage("")
    setDescription("")
}

  return (
    <form onSubmit={showAlert}>
      <input
        type="text"
        value={title}
        placeholder="Ingrese titulo"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input 
        value={date}
      type="date" onChange={(e) => setDate(e.target.value)} />
      <textarea
        type="text"
        value={description}
        placeholder="Ingrese la descripcion"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        value={author}
        placeholder="Ingrese el autor de la noticia"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        value={image}
        placeholder="Ingrese la imagen"
        onChange={(e) => setImage(e.target.value)}
      />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default FormularioNoticias;
