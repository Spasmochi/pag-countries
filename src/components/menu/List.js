import React, { useContext } from 'react'
import styled from 'styled-components'
import { MenuItem } from './MenuItem'
import { MenuContext } from './Menu'

export const List = () => {
  const { dataSlice } = useContext(MenuContext)
  return (
    <Ul>
      {dataSlice.length > 0
        ? dataSlice.map(item => <MenuItem key={item.name} Label={item.name} />)
        : 'No results found 😢'}
    </Ul>
  )
}

const Ul = styled.ul`
  display: grid;
  grid-gap: 1rem;
  width: 100%;
  max-width: 32rem;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  list-style-type: none;
`
