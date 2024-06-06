import { Nav, Container, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import "../Header/header.css";
import NavbarCategory from "../Navbar/NavbarCategory";
import SearchItem from "../SearchItem/SearchItem.jsx";
import { useAuthContext } from "../../hooks/useAuth.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";

function Header({ onCategorySelect }) {
  const { logout, isAuth } = useAuthContext();
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
                  <Nav.Link href="/cart" className="me-2">
                    <CartWidget/>
                  </Nav.Link>
                  {!isAuth ? (
                    <NavDropdown
                      title="¿Tienes cuenta?"
                      id="navbarScrollingDropdown"
                      className="ms-auto"
                    >
                      <NavDropdown.Item href="/login">
                        Iniciar sesión
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/signup">
                        Registrarte
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                    </NavDropdown>
                  ) : (
                    <NavDropdown.Item href="/" onClick={logout}>
                      Cerrar sesión
                    </NavDropdown.Item>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Navbar bg="light">
        <Container>
          <NavbarCategory className="mt-5" onCategorySelect={onCategorySelect} />
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
