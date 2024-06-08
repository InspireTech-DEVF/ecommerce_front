import { useState, useEffect } from "react"
import { getMeUserServices } from "../services/userServices"
import { useAuthContext } from "../hooks/useAuth"
import { Link } from "react-router-dom"
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBBreadcrumb,
  MDBBreadcrumbItem,

} from 'mdb-react-ui-kit';

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
{/*     <h1>User Info</h1>
    {userData?.name && <p>Nombre: {userData.name}</p>}
    {userData?.last_name && <p>Apellido: {userData.last_name}</p>}
    {userData?.role && <p>Rol: {userData.role}</p>}
    {userPayload?.role === 'ADMIN'
      ? <Link to='/secret' className='btn btn-primary'>Ir a menú de productos</Link>
      : <h2>Hola Customer</h2>} */}
      <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <Link to='/'>Home</Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <Link href="/profile">User</Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
 
          <MDBCol lg="12">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Nombre</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData.name} {userData.last_name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Correo electrónico</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                {userPayload?.role === 'ADMIN'
                ?
                <MDBRow>
                <MDBCol sm="3">
                  <Link to="/secret" className="btn btn-secondary mt-2">Menú de productos</Link>
                </MDBCol>
              </MDBRow>
              :
              <MDBRow>
              <MDBCol sm="3">
                <Link to="/" className="btn btn-secondary mt-2">Regresar</Link>
              </MDBCol>
            </MDBRow>
              }
                <hr />
              </MDBCardBody>
            </MDBCard>

            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  </>
  )
}

export default Profile