import React from 'react'
import styled from 'styled-components';

function CartItems({ data }) {
  const imgData = require(`./data/products/${data.item.sku}_1.jpg`).default;
  return (
    <CartItemBody>
      <CartItemImage src={imgData} />
      <CartItemInfo>
        <CartItemTitle>{data.item.title}</CartItemTitle>
        <CartItemDesc>
          <CartItemStyle>{data.item.style}</CartItemStyle>
          <CartItemQuantity>Quantity : {data.quantity}</CartItemQuantity>
        </CartItemDesc>
      </CartItemInfo>
      <CartItemPrice>${data.item.price}</CartItemPrice>
    </CartItemBody>
  )
}

export default CartItems
const CartItemInfo = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`
const CartItemTitle = styled.p`
margin:0;
padding:0;
font-size: 1.2rem;
letter-spacing: -.5px;
font-weight: 500;
`
const CartItemDesc = styled.div`
margin:0;
padding:0;
font-size: .9rem;
color: #5b5a5e;
`
const CartItemQuantity = styled.p`
font-size:1.2rem;
font-weight:800;
margin:0;
padding:0;
`
const CartItemStyle = styled.p`
margin:0;
padding:0;
`
const CartItemPrice = styled.p`
font-family: Tahoma, Geneva, Verdana, sans-serif;
font-size:1.2rem;
color: #e6bd08;
align-items: center;
margin: 30px;
`
const CartItemImage = styled.img`
margin: 10px;
width: 60px;
height: 86px;
`
const CartItemBody = styled.div`
display:flex;
`