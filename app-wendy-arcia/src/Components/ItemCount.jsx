import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function ItemCount({ stock }) {
  // Estoy creando el estado
  const [contador, setcontador] = useState(0);

  function adding() {
    if (contador < stock) {
      setcontador(contador + 1);
    }
  }

  function subs() {
    if (contador > 0) {
      setcontador(contador - 1);
    }
  }

  function onAdd() {
    alert("Compraste " + contador + " productos");
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
        <Button onClick={onAdd} variant="primary" size="lg">
          Comprar
        </Button>
      </Col>
    </>
  );
}
