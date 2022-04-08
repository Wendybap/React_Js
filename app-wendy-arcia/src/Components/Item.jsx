import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "../Components/ItemCount";

export default function Item({ id, nombre, precio, imagen }) {
  return (
    <>
      <Card key={id} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>$ {precio}</Card.Text>
          <ItemCount stock={5} />
        </Card.Body>
      </Card>
    </>
  );
}
