import React from 'react'
import styled from 'styled-components'
function DropDown({ orderBy }) {

  function handleChange(e) {
    orderBy(e.target.value)
  }
  return (
    <>
      <DropDownTitle>Order By :</DropDownTitle>
      <DropSelect onChange={handleChange}>
        <DropOption value="SELECT">Select</DropOption>
        <DropOption value='LOWEST_TO_HIGHEST'>Lowest To Highest</DropOption>
        <DropOption value='HIGHEST_TO_LOWEST'>Highest To Lowest</DropOption>
      </DropSelect>
    </>
  )
}

const DropDownTitle = styled.span`
padding:5px;
`
const DropSelect = styled.select`
padding:8px;
width:50%;
:focus{
  outline:none;
}
`
const DropOption = styled.option``

export default DropDown
