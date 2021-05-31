import React from 'react'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'

function Cart(props) {
  function handleClick() {
    props.toggle((ps) => !ps);
  }
  return (
    <>
      <CartIconDisplay onClick={handleClick}>
        <FontAwesome
          name="shopping-cart"
          size="3x"
        />
        <CartItemCount>
          <CartCountDisplay>{props.size}</CartCountDisplay>
        </CartItemCount>
      </CartIconDisplay>

    </>
  )
}

export default Cart

const CartIconDisplay = styled.div`
padding:10px;
background-color:black;
color:white;
position:fixed;
top:0;
right:0;
`
const CartItemCount = styled.div``

const CartCountDisplay = styled.span`
    position: absolute;
    bottom: 12px;
    right: 10px;
    display: inline-block;
    padding: 2px 4px .4px;
    background-color: #e6bd08;
    border-radius: 10px;
    font-weight: 600;
    font-size: .9rem;
    color:black;
`
