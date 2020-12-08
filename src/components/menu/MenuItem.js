import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from '../../App'

export const MenuItem = ({ Label }) => {
  const { setCountry, data } = useContext(AppContext)
  const history = useHistory()
  const handleClick = () => {
    setCountry(data.filter(o => o.name === Label))
    history.push('/Country')
  }

  return (
    <Item onClick={handleClick}>
      <p>{Label}</p>
    </Item>
  )
}

const Item = styled.li`
  background-color: white;
  cursor: pointer;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`
