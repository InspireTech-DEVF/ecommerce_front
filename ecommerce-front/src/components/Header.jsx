/* eslint-disable react/jsx-closing-tag-location */
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'

function Header () {
  return (
    <>
      <Navbar fixed='top' />
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className='bg-body-tertiary mb-3'>
          <Container fluid>
            <Navbar.Brand href='#'>FullStack Fushion | ecommerece</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <Nav.Link href='#action1'>Home</Nav.Link>
                  <Nav.Link href='#action2'><svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={18}
                    height={18}
                    fill='currentColor'
                    className='bi bi-cart3'
                    viewBox='0 0 16 16'
                                            >
                    <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2' />
                  </svg>
                  </Nav.Link>
                </Nav>
                <Form className='d-flex'>
                  <Form.Control
                    type='search'
                    placeholder='Introduce un articulo'
                    className='me-2'
                    aria-label='Search'
                  />
                  <Button variant='outline-success'>Buscar</Button>
                </Form>
                <NavDropdown
                  title='¿Tienes cuenta?'
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href='#action3'>Iniciar sesion</NavDropdown.Item>
                  <NavDropdown.Item href='#action4'>
                    Registrarte
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action5'>
                    Cerrar sesion
                  </NavDropdown.Item>
                </NavDropdown>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Header
