import React from "react";
import { Descripcion } from "./DescripcionProductoStyle";

export default function DescripcionProducto(producto) {
  return (
    <>
      <Descripcion>
        <h2>
          <span>{producto.tituloDescripcion}</span>
        </h2>
        <p>{producto.parrafo1}</p>
        <p>{producto.parrafo2}</p>
        <p>{producto.parrafo3}</p>
        <p>{producto.parrafo4}</p>
        <p>{producto.parrafo5}</p>
        <p>{producto.caracteristicas}</p>
        <p>{producto.caracteristica1}</p>
        <p>{producto.caracteristica2}</p>
        <p>{producto.caracteristica3}</p>
        <p>{producto.caracteristica4}</p>
        <p>{producto.caracteristica5}</p>
        <p>{producto.caracteristica6}</p>
        <p>{producto.medidas}</p>
        <p>{producto.hombre}</p>
        <p>{producto.hombreS}</p>
        <p>{producto.hombreM}</p>
        <p>{producto.hombreL}</p>
        <p>{producto.hombreXL}</p>
        <p>{producto.hombreXXL}</p>
        <p>{producto.parrafo6}</p>
        <p>{producto.mujer}</p>
        <p>{producto.mujerS}</p>
        <p>{producto.mujerM}</p>
        <p>{producto.mujerL}</p>
        <p>{producto.parrafo7}</p>
        <p>{producto.parrafo8}</p>
        <p>{producto.parrafo9}</p>
        <p>{producto.parrafo10}</p>
        <p>{producto.parrafo11}</p>
        <p>{producto.parrafo12}</p>
      </Descripcion>
    </>
  );
}
