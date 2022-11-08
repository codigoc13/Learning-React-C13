import React from 'react'
import Carreras from './components/Carreras/Carreras'
import Formulario from './components/Formulario/Formulario'
import FormularioNoticias from './components/FormularioNoticias/FormularioNoticias'
import News from './components/News/News'
import Personajes from './components/Personajes/Personajes'
import Slideshow from './components/Slide/Slide.jsx'

const App = () => {
  return (
    <div>
      <h1>Rick And Morty</h1>
            {/* <Personajes/> */}
            <FormularioNoticias/>
    </div>
  )
}

export default App