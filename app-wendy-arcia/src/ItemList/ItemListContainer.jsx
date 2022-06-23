import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { obtenerProductos } from "../Utiles/funciones";
import { ItemListBanner } from "./ItemListBanner";

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
      {tiempoEsperaItem ? (
        <div className="mt-5 text-center">
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="warning" />
        </div>
      ) : (
        <>
          {categoriaId === undefined && <ItemListBanner />}
          <Container className="mt-4 d-flex justify-content-center aling-items-center h-100">
            <Row>
              <ItemList productos={productos} />
            </Row>
          </Container>
        </>
      )}
    </>
  );
}
