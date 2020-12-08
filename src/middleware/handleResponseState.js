import React, { useContext } from 'react'
import { AppContext } from '../App'
import { Loading } from '../components/Loading'
import { Error } from '../components/Error'

export const handleResponseState = Success => {
  const { error, status } = useContext(AppContext)
  switch (status) {
    case 'loading':
      return <Loading />
    case 'error':
      return <Error error={error} />
    default:
      return <Success />
  }
}
