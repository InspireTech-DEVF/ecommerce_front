import {Routes, Route, Navigate} from 'react-router-dom'
import  Signup  from '../pages/Signup.jsx'
import Login from '../pages/Login.jsx'
import Profile from '../pages/Profile.jsx'
import ItemDetail from '../pages/ItemDetail.jsx'
import Cart from '../pages/Cart.jsx'

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/items/:id' element={<ItemDetail />} />
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default RoutesIndex