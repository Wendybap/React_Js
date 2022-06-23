import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import { Contenedor, Wrapper } from "../NavBar/NavBarStyle";

export default function NavBar() {
  return (
    <>
      <Contenedor>
        <Wrapper>
          <Navbar expand="lg">
            <Container fluid>
              <Navbar.Brand as={Link} to="/">
                <img
                  src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png"
                  alt="logo"
                />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0 "
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link
                    className="fuente"
                    as={Link}
                    to="/category/Zapatillas"
                  >
                    Zapatillas
                  </Nav.Link>
                  <Nav.Link
                    className="fuente"
                    as={Link}
                    to="/category/Carteras"
                  >
                    Carteras
                  </Nav.Link>
                  <Nav.Link className="fuente" as={Link} to="/category/Remeras">
                    Remeras
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Brand as={Link} to="/cart" className="pull-xs-right">
                <CartWidget />
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Wrapper>
      </Contenedor>
    </>
  );
}
