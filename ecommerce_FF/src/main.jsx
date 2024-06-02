import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Header from './components/Header/Header.jsx'
import NavbarCategory from './components/Navbar/NavbarCategory.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <NavbarCategory />
    <App />
  </React.StrictMode>
)
