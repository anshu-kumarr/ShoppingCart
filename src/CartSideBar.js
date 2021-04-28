import React from 'react'
import styled from 'styled-components'
import CartIcon from './CartIcon'
import CartItems from './CartItems'
function CartSideBar({ toggle, setToggle, cart }) {
  return (
    <CartSideBarDisplay className={toggle ? 'expand' : 'shrink'}>
      <CartComponent>
        <CartIcon toggle={setToggle} size={cart.cartCount} />
      </CartComponent>
      <CartItemDisplay>
        <CartItemHead>Cart</CartItemHead>
        {cart.cartItems.length ? cart.cartItems.map((item, idx) => <CartItems key={idx} data={item} />) : <div style={{ textAlign: 'center' }}>Cart Is Empty!!</div>}
      </CartItemDisplay>

      <CartFooter>
        <CartTotal> Subtotal : {cart.totalAmount}</CartTotal>
        <CartCheckOut>CheckOut</CartCheckOut>
      </CartFooter>


    </CartSideBarDisplay>

  )
}

export default CartSideBar
const CartSideBarDisplay = styled.div`
  color:white;
  width: 350px;
  background: #000;
  top: 0;
  right: 0;
  padding: 25px;
  position: fixed;
  overflow: auto;
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
margin-top:20px;
width:100%;
`
const CartTotal = styled.div`
font-size:1.5rem;
font-weight:800;
padding:20px;
`
const CartCheckOut = styled.div`
text-align:center;
background-color:#e6bd08;
opacity:0.8;
padding:20px;
font-size:1.2rem;
font-weight:800;
`