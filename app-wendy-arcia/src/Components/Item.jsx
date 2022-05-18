import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Item({
  id,
  nombre,
  precio,
  categoria,
  imagen,
  leyenda,
}) {
  return (
    <>
      <Card key={id} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Text className="textoPrecio">$ {precio}</Card.Text>
          <Card.Title className="textoNombre">{nombre}</Card.Title>
          <Card.Text className="textoLeyenda py-2">{leyenda}</Card.Text>
          <Card.Text> #{categoria}</Card.Text>
          <Link
            className="btn btn-primary d-grid gap-2"
            size="lg"
            to={`/Item/${id}`}
          >
            Ver detalle
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}
