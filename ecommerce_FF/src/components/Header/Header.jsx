import { Nav, Container, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import "../Header/header.css";
import NavbarCategory from "../Navbar/NavbarCategory";
import SearchItem from "../SearchItem/SearchItem.jsx";

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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      fill="currentColor"
                      className="bi bi-cart3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
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
