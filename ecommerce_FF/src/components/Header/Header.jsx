import { Nav, Container, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import "../Header/header.css";
import NavbarCategory from "../Navbar/NavbarCategory";
import SearchItem from "../SearchItem/SearchItem.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";

function Header({ onCategorySelect }) {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Row className="w-100 align-items-center">
            <Col
              xs={12}
              lg={3}
              className="d-flex justify-content-between align-items-center"
            >
              <Navbar.Brand href="/">
                FullStack Fushion | ecommerce
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarResponsive" />
            </Col>
            <Col xs={12} lg={9}>
              <Navbar.Collapse id="navbarResponsive">
                <Nav className="me-auto align-items-center w-100">
                  <SearchItem />
                  <Nav.Link href="#cart" className="me-2">
                    <CartWidget/>
                  </Nav.Link>
                  <NavDropdown
                    title="¿Tienes cuenta?"
                    id="navbarScrollingDropdown"
                    className="ms-auto"
                  >
                    <NavDropdown.Item href="#login">
                      Iniciar sesión
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#register">
                      Registrarte
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#logout">
                      Cerrar sesión
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Navbar bg="light">
        <Container>
          <NavbarCategory onCategorySelect={onCategorySelect} />
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
