import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import promesas from "../../Utiles/promesas";
import producto from "../../Utiles/producto";

export default function ItemDetailContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    promesas(2500, producto)
      .then((resultados) => setProductos(resultados))
      .catch((err) => console.log(err));
  }, [productos]);

  return (
    <>
      <ItemDetail productos={productos} />
    </>
  );
}
