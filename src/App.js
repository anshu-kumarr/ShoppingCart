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

  const [{ items, count, cart, initialItems }, dispatch] = useReducer(reducer, { initialItems: [], items: [], count: 0, withoutSort: [], cart: { cartItems: [], cartCount: 0, totalAmount: 0 } });
  console.log(initialItems)
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
        <CartSideBar dispatch={dispatch} cart={cart} toggle={toggle} setToggle={setToggle} />
      </MainContainer>

    </>
  )
}

const MainContainer = styled.div`
display:flex;
width:90%;
margin:0 auto;
`
const Container = styled.div`
width:100%;
display:flex;
flex-flow:wrap;
justify-content:space-evenly;
margin-top:20px;
@media (max-width:800px){
  flex-direction:column;
}
`
const FilterSize = styled.div`
width : 20%;
`
const DisplayContainer = styled.div`
width:80%;
background-color:#eee;
`
const FilterComponent = styled.div`
display:flex;
align-items:center;
margin-top:30px;
justify-content:space-evenly;
@media (max-width:800px){
  flex-direction:column;
}
`;
const ItemCount = styled.div`
padding-left:20px;
`;
const DropDown = styled.div`
width:350px;
@media (max-width:800px){
  flex-direction:column;
  width:80%;
  margin-top:10px;
}
/* margin:0 auto;  */
`;
const CartComponent = styled.div`
position:absolute;
top:0;
right:0;
cursor: pointer;
`
export default App;