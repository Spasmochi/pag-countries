import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import getSearchResults from '../../utils/getSearchResults'
import getResSlice from '../../utils/getResSlice'
import { MenuContext } from './Menu'

export const Search = () => {
  const { data, items, index, setDataSlice } = useContext(MenuContext)
  const [searchTearm, setSearchTerm] = useState('')
  const handleSearch = e => {
    e.preventDefault()
    setDataSlice(getResSlice(getSearchResults(searchTearm, data), items, index))
  }
  return (
    <Form onSubmit={handleSearch}>
      <label htmlFor='search'>Search Content</label>
      <input
        id='search'
        name='search'
        onChange={e => setSearchTerm(e.target.value)}
        type='search'
        placeholder='Find a country..'
      />
      <div>
        <button type='submit'>Search</button>
      </div>
    </Form>
  )
}

const Form = styled.form`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    & div {
      margin-top: 0;
      margin-left: 0.75rem;
    }
  }
  width: 100%;
  margin-bottom: 2rem;
  & label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  & input {
    grid-column-start: 2;
    width: 100%;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    border: none;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    &:focus {
      box-shadow: 0 0 0 3px hsla(207, 73%, 57%, 0.5);
      outline: none;
    }
  }
  & div {
    margin-top: 0.75rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    & button {
      cursor: pointer;
      background-color: hsl(213, 94%, 68%);
      width: 100%;
      display: flex;
      color: white;
      align-items: center;
      justify-content: center;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      border: 1px solid transparent;
      &:focus {
        box-shadow: 0 0 0 3px hsla(207, 73%, 57%, 0.5);
        outline: none;
      }
    }
  }
`
