import React from 'react'
import styled from 'styled-components'

function DisplayCard({ data, dispatch }) {
  const imgData = require(`./data/products/${data.sku}_1.jpg`).default;
  function handleClick(event) {
    dispatch({ type: 'ADD_TO_CART', payload: data })
  }
  return (
    <ItemCard>
      <ItemShippingDetail>{data.isFreeShipping ? <p >Free Shipping</p> : <></>}</ItemShippingDetail>
      <ItemImage src={imgData} alt={data.title} />
      <ItemTitle>{data.title}</ItemTitle>
      <hr style={{
        width: '30px',
        height: '2px',
        background: '#eabf00',
        border: 'none'
      }} />
      <ItemPrice>${data.price}</ItemPrice>
      <ItemButton onClick={handleClick}>Add to Cart</ItemButton>
    </ItemCard>
  )
}

export default DisplayCard

const ItemCard = styled.div`
position:relative;
width:22%;
background-color:#fff;
text-align:center;
margin:10px;
border:1px solid transparent;
:hover{
  border:solid 1px black;
}
@media (max-width:800px){
  width:100%;
  margin:0;
  overflow:hidden;
  margin-top:10px;
}
`
const ItemImage = styled.img`
margin:18px 0;
width:95%;
`
const ItemPrice = styled.div`
font-size:1.6rem;
font-weight:800;
font-family: Tahoma, Geneva, Verdana, sans-serif;
padding:5px;
margin-bottom:3px;
`
const ItemButton = styled.button`
display:block;
width:90%;
text-align:center;
padding:.85em;
font-size:1rem;
margin: 0 auto 1.5em;
border:none;
background-color:black;
color:white;
:hover{
  background-color:#DAB43E;
}
`
const ItemTitle = styled.p`
height: 40px;
max-width:175px;
font-weight: 600;
text-align: center;
padding: 0;
margin: 0 auto;
}
`
const ItemShippingDetail = styled.div`
position:absolute;
right:0;
background-color:black;
color:#DAB43E;
width:40%;
font-size:10px;
font-weight:800;
`