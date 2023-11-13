import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CartWidget = () => {
  return (
    <div>
     <FontAwesomeIcon icon= {faCartShopping } /> 0
    </div>
  )
}

export default CartWidget
