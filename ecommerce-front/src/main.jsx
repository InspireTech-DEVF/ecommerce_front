import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header.jsx'
import NavbarCategory from './components/NavbarCategory.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <NavbarCategory />
  </React.StrictMode>
)
