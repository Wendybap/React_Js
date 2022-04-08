import React from "react";
import Item from "../Components/Item";

export default function ItemList({ productos }) {
  return productos.map((producto) => (
    <Item
      key={producto.id}
      id={producto.id}
      nombre={producto.nombre}
      precio={producto.precio}
      imagen={producto.imagen}
    />
  ));
}
