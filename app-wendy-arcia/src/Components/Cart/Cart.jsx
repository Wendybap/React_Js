import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cart() {
  const { removeItem, clear, cart } = useContext(CartContext);

  function total(precio, cantidad) {
    return precio * cantidad;
  }

  function sumatoria() {
    let total = 0;
    cart.map((item) => (total += item.producto.precio * item.cantidad));
    return total;
  }

  function llenarCarrito() {
    return cart.map((item, index) => (
      <tr key={index}>
        <th>
          <img
            src={item.producto.imagen}
            alt={item.producto.nombre}
            width="100"
          />
        </th>
        <th>{item.producto.descripcion}</th>
        <th>{item.cantidad}</th>
        <th>{item.producto.precio}</th>
        <th>{total(item.producto.precio, item.cantidad)}</th>
        <th>
          <Button
            className="btn"
            onClick={() => {
              removeItem(index);
            }}
          >
            Borrar
          </Button>
        </th>
      </tr>
    ));
  }

  return (
    <>
      {cart.length > 0 ? (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
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
                <th colSpan="4">Total</th>
                <th>{sumatoria()}</th>
              </tr>
            </tfoot>
          </Table>
          <Button className="btn"> Comprar </Button>
          <Button
            className="btn"
            onClick={() => {
              clear();
            }}
          >
            Vaciar Carrito
          </Button>
        </div>
      ) : (
        <div>
          <Modal.Dialog>
            <Modal.Body>
              <p>Tu carrito está vacío</p>
            </Modal.Body>

            <Modal.Footer>
              <Button>
                <Link to="/" className="btn">
                  Volver al inicio
                </Link>
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
    </>
  );
}
