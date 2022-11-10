import React, { useState } from "react";
import axios from "axios";

const FormularioNoticias = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const addNew = async (e) => {
    e.preventDefault();
    const newData = {
      image: image,
      title: title,
      date: date,
      description: description,
      author: author,
    };

    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify(newData);

    let reqOptions = {
      url: "https://crudcrud.com/api/bde8d55ac8a049a69894410641a9fd93/news",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    let response = await axios.request(reqOptions);
    console.log(response.data);

    setTitle("");
    setAuthor("");
    setDate("");
    setImage("");
    setDescription("");
  };

  return (
    <form onSubmit={addNew}>
      <input
        type="text"
        value={title}
        placeholder="Ingrese titulo"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        value={date}
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />
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
