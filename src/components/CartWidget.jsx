import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  console.log("Cantidad en carrito:", cantidadEnCarrito());

  return (
    <div>
      <Link className="menu-link" to="/carrito">
        carrito
        <span className="numerito">{cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
 