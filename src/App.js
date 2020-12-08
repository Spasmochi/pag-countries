import React, { useState, createContext } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Constrained from './layouts/Constrained'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Countries } from './pages/Countries'
import { Country } from './pages/Country'

export const AppContext = createContext(null)

function App() {
  const [country, setCountry] = useState([])
  const { status, error, data } = useQuery('countries', () =>
    axios.get('https://restcountries.eu/rest/v2/all').then(res => res.data)
  )
  const AppStore = {
    data: data,
    status: status,
    error: error,
    country: country,
    setCountry: setCountry,
  }
  return (
    <AppContext.Provider value={AppStore}>
      <Router>
        <Constrained>
          <Route exact path='/'>
            <Countries />
          </Route>
          <Route exact path='/Country'>
            <Country />
          </Route>
        </Constrained>
      </Router>
    </AppContext.Provider>
  )
}

export default App
