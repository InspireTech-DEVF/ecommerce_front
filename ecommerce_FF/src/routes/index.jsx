import {Routes, Route, Navigate} from 'react-router-dom'
import  Signup  from '../pages/Signup.jsx'
import Login from '../pages/Login.jsx'
import Profile from '../pages/Profile.jsx'
import ItemDetail from '../pages/ItemDetail.jsx'
import Cart from '../pages/Cart.jsx'
import Secret from '../pages/Secret.jsx'
import { useAuthContext } from '../hooks/useAuth.jsx'

const RoutesIndex = () => {
  const {isAuth} = useAuthContext()
  return (
    <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/items/:id' element={<ItemDetail />} />
        <Route path='/cart' element={<Cart/>}/>
         <Route
        path='/secret'
        element={isAuth ? <Secret /> : <Navigate to='/login' />}
        /> 
    </Routes>
  )
}

export default RoutesIndex