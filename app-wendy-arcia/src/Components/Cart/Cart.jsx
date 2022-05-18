import React, { useContext } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { total } from "../../Utiles/funciones";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Cart() {
  const { removeItem, clear, cart, sumatoria } = useContext(CartContext);

  function llenarCarrito() {
    return cart.map((item, index) => (
      <tr key={index} className="text-center">
        <th>
          <img
            src={item.producto.imagen}
            alt={item.producto.nombre}
            width="100"
          />
        </th>

        <th>{item.producto.descripcion}</th>
        <th>{item.cantidad}</th>
        <th>$ {item.producto.precio}</th>
        <th>$ {total(item.producto.precio, item.cantidad)}</th>
        <th>
          <div
            onClick={() => {
              removeItem(index);
            }}
          >
            <FontAwesomeIcon icon={solid("trash")} />
          </div>
        </th>
      </tr>
    ));
  }

  return (
    <>
      <Container className="mt-4">
        {cart.length > 0 ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr className="text-center">
                  <th>Imagen</th>
                  <th>Descripcion</th>
                  <th>Cantidad</th>
                  <th>Precio Unt</th>
                  <th>Total</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>{llenarCarrito()}</tbody>
              <tfoot>
                <tr>
                  <th colSpan="4">Total a pagar</th>
                  <th className="text-center">$ {sumatoria()}</th>
                </tr>
              </tfoot>
            </Table>

            <Link
              to="/ordenDeCompra"
              className="btn btn-primary mx-2"
              variant="light"
            >
              Comprar
            </Link>

            <Button
              className="btn btn-primary mx-2"
              onClick={() => {
                clear();
              }}
            >
              Vaciar Carrito
            </Button>
          </div>
        ) : (
          <div>
            <Card className="mt-5">
              <Card.Header className="fondoTexto">Carrito (0)</Card.Header>
              <Card.Body className="text-center">
                <Card.Text className="texto">Tu carrito está vacío</Card.Text>
                <Card.Text className="texto2">
                  ¿No sabés qué comprar? ¡Miles de productos te esperan!
                </Card.Text>
                <Link to="/" className="btn btn-primary mx-2">
                  Volver al inicio
                </Link>
              </Card.Body>
            </Card>
          </div>
        )}
      </Container>
    </>
  );
}
