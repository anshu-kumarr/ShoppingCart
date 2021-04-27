import React, { useReducer, useEffect, useState } from 'react'
import './style.css'
import styled from 'styled-components'
import DisplayCard from './DisplayCard'
import initialState from './initialState'
import SizeFilter from './SizeFilter'
import DropDownComponent from './DropDownComponent'
import Cart from './Cart'
function reducer(state, { type, payload }) {
  switch (type) {
    case 'display':
      return {
        initialItems: payload,
        items: payload,
        count: payload.length
      }
    case 'SIZE_FILTER':
      let selectedSizes = payload.filter((e) => e.active === true).map((e) => e.value)
      let newItems = state.initialItems.filter((item) => {
        let as = item.availableSizes.filter((size) => selectedSizes.includes(size))
        if (as.length) return true;
        return false;
      })
      if (selectedSizes.length === 0) newItems = state.initialItems
      return {
        initialItems: state.initialItems,
        items: newItems,
        count: newItems.length
      }
    case 'lowestPrice':
      return { ...state, items: state.items.sort((a, b) => a.price < b.price ? -1 : 1) }
    case 'highestPrice':

      return { ...state, items: state.items.sort((a, b) => a.price < b.price ? 1 : -1) }
    default:
      return state
  }
}

function App() {

  const [{ items, count }, dispatch] = useReducer(reducer, { initialItems: [], items: [], count: 0 });

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
        <CartIcon>
          <Cart />
        </CartIcon>
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
            {items.map((item) => <DisplayCard data={item} key={item.id} />)}
          </Container>
        </DisplayContainer>

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
const CartIcon = styled.div`
position:absolute;
top:0;
right:0;
cursor: pointer;
`
export default App;