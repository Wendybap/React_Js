import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { BotonCard, Container, Wrapper } from "./ItemStyle";

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
      <Container>
        <Wrapper>
          <Card key={id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
              <Card.Text className="textoPrecio">$ {precio}</Card.Text>
              <Card.Title className="textoNombre">{nombre}</Card.Title>
              <Card.Text className="textoLeyenda py-2">{leyenda}</Card.Text>
              <Card.Text>
                <strong> #{categoria}</strong>
              </Card.Text>
              <BotonCard>
                <Link to={`/Item/${id}`}> Ver detalle</Link>
              </BotonCard>
            </Card.Body>
          </Card>
        </Wrapper>
      </Container>
    </>
  );
}
