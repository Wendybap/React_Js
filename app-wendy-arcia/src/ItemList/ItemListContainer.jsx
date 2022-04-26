import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { productoCategorias } from "../Utiles/promesas";
import { Row } from "react-bootstrap";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [tiempoEsperaItem, setTiempoEsperaItem] = useState(true);

  const { categoryId } = useParams();
  // console.log(categoryId);

  useEffect(() => {
    setTiempoEsperaItem(true);
    productoCategorias(categoryId)
      .then((resultados) => setProductos(resultados))
      .catch((err) => console.log(err))
      .finally(() => setTiempoEsperaItem(false));
  }, [categoryId]);

  return (
    <>
      {/* Aquí coloco el Ternario */}
      {tiempoEsperaItem ? (
        <h3>Cargando...</h3>
      ) : (
        <Row className="styleProducto">
          <ItemList productos={productos} />
        </Row>
      )}
    </>
  );
}
