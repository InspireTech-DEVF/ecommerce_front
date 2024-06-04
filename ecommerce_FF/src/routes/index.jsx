import {Routes, Route,Navigate} from 'react-router-dom'
import { Signup } from '../pages/Signup.jsx'

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default RoutesIndex