import React from 'react'
import ReactDOM from 'react-dom'
import { ReactQueryDevtools } from 'react-query-devtools'
import './index.css'
import './normalise.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <>
    <App />
    <ReactQueryDevtools />
  </>,
  document.getElementById('root')
)

serviceWorker.unregister()
