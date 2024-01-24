import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header/Header.jsx'
import Banner from './Components/Banner/Banner.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Banner />
  </React.StrictMode>,
)
