import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Ecommerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/category/Zapatillas">
                  Zapatillas
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/Carteras">
                  Carteras
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/category/Remeras">
                  Remeras
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action5">Crea tu cuenta</Nav.Link>
              <Nav.Link href="#action6">Iniciar Sesión</Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <CartWidget />
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
