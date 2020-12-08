import React, { useContext } from 'react'
import styled from 'styled-components'
import { MenuContext } from './Menu'
import getResSlice from '../../utils/getResSlice'

export const Navigation = () => {
  const { data, index, setIndex, items, max, setDataSlice } = useContext(
    MenuContext
  )

  const handleIndexRange = incOrDec => {
    if (incOrDec === 'dec') {
      setDataSlice(getResSlice(data, items, Math.max(index - 1, 1)))
      setIndex(Math.max(index - 1, 1))
    } else {
      setDataSlice(getResSlice(data, items, Math.min(index + 1, max)))
      setIndex(Math.min(index + 1, max))
    }
  }

  return (
    <Wrapper>
      <Previous index={index} onClick={() => handleIndexRange('dec')}>
        Previous
      </Previous>
      <Indexes>{index}</Indexes>
      <Next index={index} max={max} onClick={() => handleIndexRange('inc')}>
        Next
      </Next>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 2rem;
  width: 100%;
`

const Indexes = styled.div`
  grid-column: span 1 / span 1;
  grid-column-start: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
`

const Button = styled.button`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  grid-column: span 1 / span 1;
  cursor: pointer;
  border: none;
  background-color: white;
  transition-duration: 2sec;
  transition-property: box-shadow;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  &:focus {
    box-shadow: 0 0 0 3px hsla(207, 73%, 57%, 0.5);
    outline: none;
  }
`
const Previous = styled(Button)`
  display: ${props => (props.index === 1 ? 'none' : 'block')};
`

const Next = styled(Button)`
  display: ${props => (props.index === props.max ? 'none' : 'block')};
  grid-column-start: 3;
`
