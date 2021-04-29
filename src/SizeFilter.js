import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const initialState = [{
  value: "S", active: false
}, {
  value: "XS", active: false
}, {
  value: "M", active: false
}, {
  value: "L", active: false
}, {
  value: "XL", active: false
}, {
  value: "XXL", active: false
}, {
  value: "ML", active: false
}]



function SizeFilter({ filter }) {
  const [state, setState] = useState(initialState)
  function handleClick(e) {
    const idx = +e.target.name;
    setState((ps) => {
      let obj = ps[idx];
      obj = { ...obj, active: !obj.active }
      ps[idx] = obj;
      return [...ps]
    })
  }
  useEffect(() => {
    filter(state);
  }, [state])

  return (
    <SizeContainer>
      <SizeFilterTitle>Sizes:</SizeFilterTitle>
      <SizeButtonContainer>
        {state.map((e, idx) => e.active ? <SizeButton key={idx} name={idx} onClick={handleClick} style={{ background: "black", color: "white" }}>{e.value}</SizeButton> : <SizeButton key={idx} name={idx}
          onClick={handleClick}>{e.value}</SizeButton>)}
      </SizeButtonContainer>
    </SizeContainer>
  )
}

export default SizeFilter
const SizeButton = styled.button`
border:none;
display:flex;
width: 50px;
height: 50px;
border-radius: 50%;
background-color:lightgray;
justify-content:center;
align-items:center;
margin:2px;
outline:none;
:hover{
  border:1px solid black;
}
`
const SizeContainer = styled.div`

`
const SizeFilterTitle = styled.div`
font-size:1.5rem;
font-weight:600;
margin:10px;
@media (max-width:800px){
font-size:1rem;
}
`
const SizeButtonContainer = styled.div`
display:flex;
flex-flow:wrap;
`

