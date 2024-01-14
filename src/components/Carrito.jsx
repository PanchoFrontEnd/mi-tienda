import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  
    const handleVaciar = () => {
      vaciarCarrito();
    };
  
    return (
      <div className="container">
        <h1 className="main-title">Carrito</h1>
  
        {carrito.map((prod, index) => (
            <div key={`${prod.id}-${index}`}>
                <h3>{prod.titulo}</h3>
                <p>Precio unit: ${prod.precio}</p>
                <p>Precio total: ${prod.precio * prod.cantidad}</p>
                <p>Cant: {prod.cantidad}</p>
            </div>
    ))}
  
        {carrito.length > 0 ? (
          <>
            <h2>Precio total: ${precioTotal()} </h2>
            <button onClick={handleVaciar}>Vaciar</button>
          </>
        ) : (
          <h2>El carrito está vacío :(</h2>
        )}
      </div>
    );
  };

  
export default Carrito