import React from "react";
import { Secction } from "./GarantiaStyle";
import { Link } from "react-router-dom";

export default function Garantia() {
  return (
    <>
      <Secction>
        <h1>Garantia</h1>
        <div>
          <span>
            <p className="titulo">Compra Protegida con Mercado Pago</p>
            <p className="descripcion">
              Recibí el producto que esperabas o te devolvemos tu dinero
            </p>
          </span>
          <span>
            <p className="titulo">Garantía del vendedor</p>
            <p className="descripcion">Garantía de fábrica: 5 días</p>
          </span>
          <Link to="#"> Conocer más sobre garantía </Link>
        </div>
      </Secction>
    </>
  );
}
