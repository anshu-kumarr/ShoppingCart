import React, { useReducer, useEffect, useState } from 'react'
import './style.css'
import styled from 'styled-components'
import DisplayCard from './DisplayCard'
import initialState from './initialState'
import SizeFilter from './SizeFilter'
import DropDownComponent from './DropDownComponent'
import CartIcon from './CartIcon'
import CartSideBar from './CartSideBar'
import reducer from './reducer'

function App() {

  const [{ items, count, cart }, dispatch] = useReducer(reducer, { initialItems: [], items: [], count: 0, cart: { cartItems: [], cartCount: 0, totalAmount: 0 } });
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    dispatch({ type: 'display', payload: initialState().items })
  }, [])

  function handleSizeFilter(ps) {
    dispatch({ type: 'SIZE_FILTER', payload: ps })
  }

  function handleOrderBy(type) {
    dispatch({ type })
  }
  return (
    <>
      <MainContainer>
        <CartComponent >
          <CartIcon toggle={setToggle} size={cart.cartCount} />
        </CartComponent>
        <FilterSize>
          <SizeFilter filter={handleSizeFilter} />
        </FilterSize>
        <DisplayContainer>
          <FilterComponent>
            <ItemCount>{count} Products Found</ItemCount>
            <DropDown>
              <DropDownComponent orderBy={handleOrderBy} />
            </DropDown>
          </FilterComponent>
          <Container>
            {items.map((item) => <DisplayCard dispatch={dispatch} data={item} key={item.id} />)}
          </Container>
        </DisplayContainer>
        <CartSideBar cart={cart} toggle={toggle} setToggle={setToggle} />
      </MainContainer>

    </>
  )
}

const MainContainer = styled.div`
display:flex;
width:80%;
margin:0 auto;
`
const Container = styled.div`
width:100%;
display:flex;
flex-flow:wrap;
justify-content:center;
margin-top:20px;
`
const FilterSize = styled.div`
width : 25%;
`
const DisplayContainer = styled.div`
width:75%;
background-color:#eee;
`
const FilterComponent = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
margin-top:30px;
`;
const ItemCount = styled.div`
padding-left:20px;
width:50%;
`;
const DropDown = styled.div`
width:50%;
align-self:flex-end;
`;
const CartComponent = styled.div`
position:absolute;
top:0;
right:0;
cursor: pointer;
`
export default App;