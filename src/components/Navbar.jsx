import { faCar, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>LudiFood</h1></Link>
        <ul className="menu">
        <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/entradas">Entrada</Link></li>
            <li><Link className="menu-link" to="/productos/platos">Platos</Link></li>
            <li><Link className="menu-link" to="/productos/Dulces">Dulces</Link></li>
            <li><Link className="menu-link" to="/productos/pan">Pan</Link></li>
            <li><Link className="menu-link" to="#"><CartWidget /></Link></li>
          
        </ul>

    </nav> 

  )
}

export default Navbar
