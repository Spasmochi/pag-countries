import React, { useState, createContext, useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../../App'

export const MenuContext = createContext(null)

export const Menu = () => {
  const { data } = useContext(AppContext)
  const [items, setItems] = useState(10)
  const [index, setIndex] = useState(1)
  const menuStore = {
    data: data,
    items: items,
    setItems: setItems,
    index: index,
    setIndex: setIndex,
  }

  return (
    <MenuContext.Provider value={menuStore}>
      <Wrapper></Wrapper>
    </MenuContext.Provider>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
`
