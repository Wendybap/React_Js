import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Item({ id, nombre, precio, categoria, imagen }) {
  return (
    <>
      <Card key={id} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>$ {precio}</Card.Text>
          <Card.Text> #{categoria}</Card.Text>
          <Button>
            <Link className="btn" to={`/Item/${id}`}>
              Ver detalle
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
