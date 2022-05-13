import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
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
      <section className="estiloDetalleProduc mt-5">
        <Row>
          <Col>
            <img src={producto.imagen} alt={producto.nombre} width="400" />
          </Col>
          <Col>
            <h2>{producto.descripcion}</h2>
            <h3>${producto.precio}</h3>
            <h4>Cantidad disponible {producto.stock}</h4>
            {numero === 0 ? (
              <ItemCount
                producto={producto}
                stock={producto.stock}
                onAdd={onAdd}
              />
            ) : (
              <Button>
                <Link to="/cart" className="btn">
                  Terminar compra
                </Link>
              </Button>
            )}
          </Col>
        </Row>
      </section>
    </>
  );
}
