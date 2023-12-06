import { faCar, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CartWidget from './CartWidget'



const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="#" className="logo"><h1>LudiFood</h1></a>
        <ul className="menu">
            <li><a className="menu-link" href="/">inicio</a></li>
            <li><a className="menu-link" href="/nosotros">Nosotros</a></li>
            <li><a className="menu-link" href="#">Productos</a></li>
            <li><a className="menu-link" href="#">Contacto</a></li>
            <li><a className="menu-link" href="#"><CartWidget /></a></li>
          
        </ul>

    </nav> 

  )
}

export default Navbar
