import React from 'react'

export const Error = ({ error }) => {
  const errorMessage = error.message
  return <div>{errorMessage}</div>
}
