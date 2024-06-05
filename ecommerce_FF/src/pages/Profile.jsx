import { useState, useEffect } from "react"
import { getMeUserServices } from "../services/userServices"


const Profile = () => {
    const [userData, setUserData] = useState([])
    const token = localStorage.getItem('token')

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
  </>
  )
}

export default Profile