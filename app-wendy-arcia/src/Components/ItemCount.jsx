import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function ItemCount({ stock, onAdd }) {
  // Estoy creando el estado para el contador
  const [contador, setContador] = useState(0);

  function adding() {
    if (contador < stock) {
      setContador(contador + 1);
    }
  }

  function subs() {
    if (contador > 0) {
      setContador(contador - 1);
    }
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
        <Button onClick={() => onAdd(contador)} variant="primary" size="lg">
          Comprar
        </Button>
      </Col>
    </>
  );
}
