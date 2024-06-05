import {Routes, Route, Navigate} from 'react-router-dom'
import  Signup  from '../pages/Signup.jsx'
import Login from '../pages/Login.jsx'
import Profile from '../pages/Profile.jsx'

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default RoutesIndex