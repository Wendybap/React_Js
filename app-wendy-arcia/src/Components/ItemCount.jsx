import React, { useState, useContext } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CartContext } from "./Cart/CartContext";

export default function ItemCount({ stock, onAdd, producto }) {
  const { addItem } = useContext(CartContext);
  // Estoy creando el estado para el contador
  const [contador, setContador] = useState(0);
  const [activar, setActivar] = useState(true);

  function adding() {
    if (contador >= 0) {
      setActivar(false);
    }
    if (contador < stock) {
      setContador(contador + 1);
    }
  }

  function subs() {
    if (contador === 1) {
      setActivar(true);
    }
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  function handleClick() {
    addItem(producto, contador);
    onAdd(contador);
  }

  return (
    <>
      <Button className="btn" onClick={subs} variant="danger">
        -
      </Button>
      <p className="btn">{contador}</p>
      <Button className="btn" onClick={adding} variant="warning">
        +
      </Button>
      <Col>
        <Button
          onClick={handleClick}
          variant="primary"
          size="lg"
          disabled={activar}
        >
          Agregar al carrito
        </Button>
      </Col>
    </>
  );
}
