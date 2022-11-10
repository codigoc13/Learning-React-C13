import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
        <ul>
            <Link to="/Personajes">Personajes</Link>
            <Link to="/">Formulario</Link>
            <Link to="/Slide">Slide</Link>
            <Link to='/News'>News</Link>
        </ul>
    </nav>
  )
}

export default Menu