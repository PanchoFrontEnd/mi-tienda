import { faCar, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="#" className="logo"><h1>Cafe Ludico</h1></a>
        <ul className="menu">
            <li><a className="menu-link" href="#">Inicio</a></li>
            <li><a className="menu-link" href="#">Nosotros</a></li>
            <li><a className="menu-link" href="#">Productos</a></li>
            <li><a className="menu-link" href="#">Contacto</a></li>
           <li><a className="menu-link" href="#">Carrito<FontAwesomeIcon icon={faCartShopping} /> (0)</a></li> 
        </ul>

    </nav> 

  )
}

export default Navbar
