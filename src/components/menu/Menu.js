import React, { useState, createContext, useContext } from 'react'
import styled from 'styled-components'
import getResSlice from '../../utils/getResSlice'
import { AppContext } from '../../App'
import { Navigation } from './Navigation'
import { Search } from './Search'
import { List } from './List'

export const MenuContext = createContext(null)

export const Menu = () => {
  const { data } = useContext(AppContext)
  const [items, setItems] = useState(10)
  const [index, setIndex] = useState(1)
  const initialData = getResSlice(data, items, index)
  const [dataSlice, setDataSlice] = useState(initialData)
  const menuStore = {
    data: data,
    items: items,
    setItems: setItems,
    index: index,
    setIndex: setIndex,
    initialData: initialData,
    dataSlice: dataSlice,
    setDataSlice: setDataSlice,
    max: data.length / items,
  }

  return (
    <MenuContext.Provider value={menuStore}>
      <Wrapper>
        <Search />
        <Navigation />
        <List />
      </Wrapper>
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
