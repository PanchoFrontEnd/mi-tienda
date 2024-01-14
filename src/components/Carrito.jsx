import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  
    const handleVaciar = () => {
      vaciarCarrito();
    };
  
    return (
      <div className="container">
        <h1 className="main-title">Carrito</h1>
  
        {carrito.map((prod, index) => (
    <div key={`${prod.id}-${index}`} className="producto">
        <h3>{prod.titulo}</h3>
        <p className="precio">Precio unit: ${prod.precio}</p>
        <p className="precio">Precio total: ${prod.precio * prod.cantidad}</p>
        <p className="cantidad">Cant: {prod.cantidad}</p>
    </div>
))}

{carrito.length > 0 ? (
    <>
        <h2 className="precio-total">Precio total: ${precioTotal()} </h2>
        <button className="vaciar-btn" onClick={handleVaciar}>Vaciar</button>
        <Link to="/checkout" className="finalizar-compra-link">Finalizar compra</Link>
    </>
) : (
    <h2 className="carrito-vacio">El carrito está vacío :(</h2>
)}
  
      </div>
    );
  };

  
export default Carrito
