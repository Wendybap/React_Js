import React, { useEffect, useState } from "react";
import promesas from "../Utiles/promesas";
import producto from "../Utiles/producto";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    promesas(2000, producto)
      .then((resultados) => setProductos(resultados))
      .catch((err) => console.log(err));
  }, [productos]);

  return (
    <>
      <div className="styleProducto">
        <ItemList productos={productos} />
      </div>
    </>
  );
}
