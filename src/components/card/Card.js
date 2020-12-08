import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from '../../App'
import { Loading } from '../Loading'

export const Card = () => {
  const { country } = useContext(AppContext)
  const [isLoading, setIsLoading] = useState(true)
  const history = useHistory()
  const handleClick = () => {
    history.push('/')
  }
  useEffect(() => {
    if (country.length < 1) {
      history.push('/')
    }
  }, [])
  if (country.length < 1) {
    return <Loading />
  } else {
    return (
      <>
        {isLoading ? <Loading /> : null}
        <Wrapper loading={isLoading}>
          <button onClick={handleClick}>Go back</button>
          <Img>
            <img
              src={country[0].flag}
              alt={country[0].name}
              onLoad={() => setIsLoading(false)}
            />
          </Img>
          <h1>{country[0].name}</h1>
          <p>
            <strong>Demonym:</strong>{' '}
            {country[0].demonym ? country[0].demonym : 'none'}
          </p>
          <p>
            <strong>Population:</strong>{' '}
            {country[0].population ? country[0].population : 'none'}
          </p>
        </Wrapper>
      </>
    )
  }
}

const Wrapper = styled.div`
  display: ${props => (props.loading ? 'none' : 'block')};
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

const Img = styled.div`
  margin-top: 0.75rem;
  & img {
    max-width: 28rem;
    width: 100%;
    object-fit: cover;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`
