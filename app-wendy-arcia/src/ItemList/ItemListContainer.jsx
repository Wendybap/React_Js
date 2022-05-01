import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import { obtenerProductos } from "../Utiles/funciones";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  const [tiempoEsperaItem, setTiempoEsperaItem] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    setTiempoEsperaItem(false);
    obtenerProductos(categoriaId)
      .then((productosRef) => {
        setProductos(productosRef);
      })
      .catch((err) => console.log(err))
      .finally(() => setTiempoEsperaItem(false));
  }, [categoriaId]);

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
