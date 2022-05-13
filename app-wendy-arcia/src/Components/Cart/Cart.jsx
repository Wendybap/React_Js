import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
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
        <th>$ {item.producto.precio}</th>
        <th>$ {total(item.producto.precio, item.cantidad)}</th>
        <th>
          <Button
            onClick={() => {
              removeItem(index);
            }}
          >
            <FontAwesomeIcon icon={solid("trash")} />
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
                <th>$ {sumatoria()}</th>
              </tr>
            </tfoot>
          </Table>
          <Button>
            <Link to="/ordenDeCompra" className="btn">
              Comprar
            </Link>
          </Button>
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
