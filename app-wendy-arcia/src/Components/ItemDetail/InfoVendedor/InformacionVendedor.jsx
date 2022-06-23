import React from "react";
// import { Link } from "react-router-dom";
import {
  Container,
  Card,
  UbicacionIcon,
  ApoyoIcon,
  MedallaIcon,
  Reputacion,
  Cajas,
  RelojIcon,
  Row,
  StyledLink,
} from "./InfoVendedorStyle";

export default function InformacionVendedor(producto) {
  return (
    <>
      <Container>
        <h1>Información del Vendedor</h1>

        <Card>
          <UbicacionIcon />
          <div>
            <p>Ubicación</p>
            <span>{producto.ubicacion}</span>
          </div>
        </Card>
        <Card>
          <MedallaIcon />
          <div>
            <p className="colorSubtitulo">MercadoLibre Gold</p>
            <span>¡Es uno de los mejores del sitio!</span>
          </div>
        </Card>
        <Reputacion>
          <Cajas>
            <li />
            <li />
            <li />
            <li />
            <li className="activa" />
          </Cajas>
        </Reputacion>
        <Row>
          <div>
            <strong>{producto.numeroVentas}</strong>
            <span>Ventas en los últimos 60 días</span>
          </div>
          <div>
            <strong>
              <ApoyoIcon />
            </strong>
            <span>Brinda buena atención</span>
          </div>
          <div>
            <strong>
              <RelojIcon />
            </strong>
            <span>Despacha sus productos a tiempo</span>
          </div>
        </Row>
        <StyledLink to="#">Ver más datos de este vendedor</StyledLink>
      </Container>
    </>
  );
}
