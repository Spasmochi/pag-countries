import React from 'react'
import styled from 'styled-components'

const Constrained = ({ children }) => {
  return (
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media (min-width: 1280px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
  }
`

export default Constrained
