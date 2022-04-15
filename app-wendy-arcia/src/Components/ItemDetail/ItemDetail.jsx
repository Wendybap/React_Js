import React from "react";
import { Row, Col } from "react-bootstrap";
import ItemCount from "../ItemCount";

export default function ItemDetail({ producto }) {
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
            <ItemCount stock={5} />
          </Col>
        </Row>
      </section>
    </>
  );
}
