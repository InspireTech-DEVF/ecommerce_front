import Nav from 'react-bootstrap/Nav'

function NavbarCategory () {
  return (
    <Nav fill variant='tabs' defaultActiveKey='/home'>
      <Nav.Item>
        <Nav.Link eventKey='link-1'>Electrónica</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-2'>Moda y Accesorios</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-3'>Belleza y Cuidado Personal</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-4'>Hogar y Cocina</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-5'>Deportes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-6'>Salud y Bienestar</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-7'>Automotriz</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-8'>Mascotas</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-9'>Alimentos y Bebidas</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-10'>Libros y Papelería</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default NavbarCategory
