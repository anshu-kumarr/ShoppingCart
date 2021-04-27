import React from 'react'
import styled from 'styled-components'

function DisplayCard({ data }) {
  const imgData = require(`./data/products/${data.sku}_1.jpg`).default;
  return (
    <ItemCard>
      <ItemImage src={imgData} alt={data.title} />
      <ItemTitle>{data.title}</ItemTitle>
      <ItemPrice>${data.price}</ItemPrice>
      <ItemButton>Add to Cart</ItemButton>
    </ItemCard>
  )
}

export default DisplayCard

const ItemCard = styled.div`
width:30%;
background-color:#fff;
text-align:center;
margin:10px;
:hover{
  border:solid 1px black;
}
`
const ItemImage = styled.img`
width:95%;
`
const ItemPrice = styled.div`
font-size:1.5rem;
font-weight:800;
font-family: Tahoma, Geneva, Verdana, sans-serif;
padding:5px;
margin-bottom:3px;
`
const ItemButton = styled.button`
width:90%;
font-size:2rem;
margin-bottom:10px ;
border:none;
background-color:black;
color:white;
padding:5px;
:hover{
  background-color:#DAB43E;
}
`
const ItemTitle = styled.p`
font-weight:bolder;
`