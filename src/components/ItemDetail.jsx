import React from 'react'
import { toCapital } from '../helpers/toCaptilal'
import ItemCount from './ItemCount'

const ItemDetail = ( {item} ) => {
  return (
    <div className="container">
        <div className="producto-detalle">
            <img src={item.imagen} alt={item.titulo} />
            <div>
                <h3 className="titulo"> {item.titulo} </h3>
                <p className="descripcion"> {item.descripcion} </p>
                <p className="categoria">Categoría: {toCapital(item.categoria)}</p>
                <p className="precio"> ${item.precio} </p>
                < ItemCount item={item} />


            </div>

        </div>
      
    </div>
  )
}

export default ItemDetail
