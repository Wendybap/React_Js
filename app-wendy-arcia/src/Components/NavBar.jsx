import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Navbar className="fondoNav" sticky="top" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src="logo1.png" alt="logo" width="120px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/category/Zapatillas">
                Zapatillas
              </Nav.Link>
              <Nav.Link as={Link} to="/category/Carteras">
                Carteras
              </Nav.Link>
              <Nav.Link as={Link} to="/category/Remeras">
                Remeras
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <CartWidget />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
