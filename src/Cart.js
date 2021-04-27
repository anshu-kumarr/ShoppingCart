import React, { useState } from 'react'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'

function Cart() {

  const [{ count }, setCart] = useState({ cartItems: [], count: 0, total: 0 });
  return (
    <CartIconDisplay>
      <FontAwesome
        name="shopping-cart"
        size="3x"
      />
      <CartItemCount>
        <CartCountDisplay>{count}</CartCountDisplay>
      </CartItemCount>
    </CartIconDisplay>
  )
}

export default Cart

const CartIconDisplay = styled.div`
padding:10px;
background-color:black;
color:white;
`
const CartItemCount = styled.div``

const CartCountDisplay = styled.span`
    position: absolute;
    bottom: 12px;
    right: 10px;
    display: inline-block;
    padding: 2px 4px .2px;
    background-color: #e6bd08;
    border-radius: 10px;
    font-weight: 600;
    font-size: .9rem;
    color:black;
`