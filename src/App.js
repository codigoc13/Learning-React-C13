import React from "react";
import Carreras from "./components/Carreras/Carreras";
import Formulario from "./components/Formulario/Formulario";
import FormularioNoticias from "./components/FormularioNoticias/FormularioNoticias";
import News from "./components/News/News";
import Personajes from "./components/Personajes/Personajes";
import Slideshow from "./components/Slide/Slide.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import NewDetail from "./components/News/NewDetail/NewDetail";

const App = () => {
  return (
  <div>

      <Menu/>
      

      <Routes>
        <Route path="/" element={<FormularioNoticias />} />
        <Route path="/Personajes" element={<Personajes/>}/>
        <Route path="/Slide" element={<Slideshow/>}/>
        <Route path="/News" element={<News/>}/>
        <Route path="/News/:id" element={<NewDetail/>} >
         
        </Route>
      </Routes>
  </div>
   
  );
};

export default App;
