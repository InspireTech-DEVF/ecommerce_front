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
                  <Nav.Link href='#action2'>Carrito</Nav.Link>
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
