import React from "react";
import { Row, Col } from "react-bootstrap";

export default function ItemDetail({ productos }) {
  let producto = [];

  if (productos.length > 0) {
    producto = productos.filter((p) => p.id === 1)[0];
  }

  return (
    <>
      <section className="estiloDetalleProduc mt-5">
        <Row>
          <Col>
            <img src={producto.imagen} alt={producto.nombre} width="400" />
          </Col>
          <Col>
            <h2>{producto.descripcion}</h2>
            <h3>{producto.precio}</h3>
          </Col>
        </Row>
      </section>
    </>
  );
}
