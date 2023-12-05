import React from 'react';

const Item = ({ producto }) => {
  return (
    <div className="producto">
      {producto.imagen && (
        <img src={producto.imagen} alt={`Imagen de ${producto.titulo}`} />
      )}

      <div>
        <h4>{producto.titulo}</h4>
        <p>Precio: ${producto.precio}</p>
        <p>Categoria: {producto.categoria} </p>
        <a className="ver-mas">Ver mas</a>

      </div>
    </div>
  );
};

export default Item;
