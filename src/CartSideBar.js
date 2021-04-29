import React from 'react'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'
import CartIcon from './CartIcon'
import CartItems from './CartItems'
function CartSideBar({ toggle, setToggle, cart, dispatch }) {
  return (
    <CartSideBarDisplay className={toggle ? 'expand' : 'shrink'}>
      {/* <CartClose onClick={(e) => console.log('clicked')}>
        <FontAwesome name="times" size="2x" />
      </CartClose> */}
      <CartHeader>
        <CartComponent>
          <CartIcon toggle={setToggle} size={cart.cartCount} />
        </CartComponent>
        <CartItemDisplay>
          <CartItemHead>CART</CartItemHead>
          {cart.cartItems.length ? cart.cartItems.map((item, idx) => <CartItems dispatch={dispatch} key={idx} data={item} />) : <div style={{ textAlign: 'center' }}>Cart Is Empty!!</div>}
        </CartItemDisplay>
      </CartHeader>

      <CartFooter>
        <CartTotal> Subtotal : $ {(cart.totalAmount).toFixed(2)}</CartTotal>
        <CartCheckOut>CHECKOUT</CartCheckOut>
      </CartFooter>


    </CartSideBarDisplay>

  )
}

export default CartSideBar
const CartSideBarDisplay = styled.div`
  display:flex;
  flex-direction:column;
  color:white;
  width: 350px;
  background-color: #1b1a1f;;
  top: 0;
  right: 0;
  padding: 25px;
  position: fixed;
  overflow:visible;
  height: 100%;
  transition: all ease-in-out 0.3s;
  &.expand {
    transition: all ease-in-out 0.2s;
    right: 0;
  }
  &.shrink {
    transition: all ease-in-out 0.2s;
    right: -400px;
  }
  @media (max-width:800px){
    width:fit-content;
}
`

const CartComponent = styled.div`
position:absolute;
top:0;
right:0;
cursor: pointer;
`
const CartItemDisplay = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
`
const CartItemHead = styled.p`
text-align:center;
font-size:1.5rem;
color: #e6bd08;
`

const CartFooter = styled.div`
height:20vh;
font-family: Tahoma, Geneva, Verdana, sans-serif;
margin:20px 0;
/* position:absolute;
bottom:0; */
`
const CartTotal = styled.div`
text-align:center;
font-size:1.2rem;
font-weight:600;
padding:20px;
`
const CartCheckOut = styled.div`
display: block;
background-color: #0c0b10;
width: 80%;
text-align: center;
padding: .85em;
border: none;
margin: 0 auto 1.5em;
color: #e6e6e6;
font-size: 1.2rem;
transition: background-color .3s ease-in-out;
`

const CartClose = styled.div`
color:red;
position:absolute;
top : 0;
left: -10%;
`

const CartHeader = styled.div`
overflow:auto;
height:80vh;
`