import { useState, useEffect } from "react"
import { getMeUserServices } from "../services/userServices"
import { useAuthContext } from "../hooks/useAuth"
import { Link } from "react-router-dom"

const Profile = () => {
    const [userData, setUserData] = useState([])
    const token = localStorage.getItem('token')
    const {userPayload} = useAuthContext()

    useEffect(() => {
        const getMeUser = async () => {
          const response = await getMeUserServices(token)
          if (response.status === 200) {
            setUserData(response.data)
          }
        }
        getMeUser()
      }, [token])
  return (
    <>
    <h1>User Info</h1>
    {userData?.name && <p>Nombre: {userData.name}</p>}
    {userData?.last_name && <p>Apellido: {userData.last_name}</p>}
    {userData?.role && <p>Rol: {userData.role}</p>}
    {userPayload?.role === 'ADMIN'
      ? <Link to='/secret' className='btn btn-primary'>Ir a menú de productos</Link>
      : <h2>Hola Customer</h2>}
  </>
  )
}

export default Profile