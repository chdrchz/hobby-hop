import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyComponent from './spring.jsx'
import Deck from './cards.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MyComponent />
    <Deck />
  </React.StrictMode>,
)
