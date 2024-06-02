import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Carrito, Login, Signup } from './pages'
import { useAuthContext } from './hooks/useAuth'

const RoutesIndex = () => {
  const { isAuth } = useAuthContext()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/Carrito'
        element={isAuth ? <Carrito /> : <Navigate to='/login' />} // Tienes que Logearte para ver el carrito
      />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default RoutesIndex
