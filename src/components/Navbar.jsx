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
            <li><Link className="menu-link" to="/productos/Entrada">Entrada</Link></li>
            <li><Link className="menu-link" to="/productos/Platos">Platos</Link></li>
            <li><Link className="menu-link" to="/productos/Dulces">Dulces</Link></li>
            <li><Link className="menu-link" to="/productos/Pan">Pan</Link></li>
            <li><Link className="menu-link" to="/productos/Vinos">Vinos</Link></li>
            <li><Link className="menu-link" to="/carrito"><CartWidget /></Link></li>
          
        </ul>

    </nav> 

  )
}

export default Navbar
