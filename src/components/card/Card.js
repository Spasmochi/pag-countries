import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from '../../App'
import { Loading } from '../Loading'

export const Card = () => {
  const { country } = useContext(AppContext)
  const history = useHistory()
  useEffect(() => {
    if (country.length < 1) {
      history.push('/')
    }
  }, [])
  if (country.length < 1) {
    return <Loading />
  } else {
    return (
      <Wrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  & p {
    font-size: 1.5rem;
  }
  & h1 {
    text-align: center;
  }
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
`
