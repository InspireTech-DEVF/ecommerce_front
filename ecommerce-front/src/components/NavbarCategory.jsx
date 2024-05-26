import Nav from 'react-bootstrap/Nav'

function NavbarCategory () {
  return (
    <Nav fill variant='tabs' defaultActiveKey='/home'>
      <Nav.Item>
        <Nav.Link eventKey='link-1'>Electrodomesticos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-2'>Hogar</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-3'>Bebés</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-4'>Ropa</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-5'>Libros</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-6'>Alimentos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-7'>Bebidas</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default NavbarCategory
