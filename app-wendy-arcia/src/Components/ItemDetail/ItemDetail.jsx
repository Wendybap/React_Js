import React, { useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

export default function ItemDetail({ producto }) {
  // Creo un Estado para guardar el numero que itera
  // que va a utilizar el contador dentro de la funcion onAdd que inicializa en 0
  const [numero, setNumero] = useState(0);
  function onAdd(contador) {
    setNumero(contador);
  }

  return (
    <>
      <Container>
        <section className="estiloDetalleProduc mt-5">
          <Row>
            <Col className="mb-3">
              <img src={producto.imagen} alt={producto.nombre} width="400" />
            </Col>
            <Col>
              <h2 className="mb-3">{producto.descripcion}</h2>
              <h3 className="mb-3">${producto.precio}</h3>
              <h4 className="mb-3">Cantidad disponible {producto.stock}</h4>
              {numero === 0 ? (
                <ItemCount
                  producto={producto}
                  stock={producto.stock}
                  onAdd={onAdd}
                  className="mb-3"
                />
              ) : (
                <Link to="/cart" className="btn btn-primary">
                  Terminar compra
                </Link>
              )}
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
}
