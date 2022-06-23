import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Spinner from "react-bootstrap/Spinner";
import ItemDetailHeader from "../Header/ItemDetailHeader";
import {
  Container,
  Wrapper,
} from "../../ItemDetail/ItemDetailContainer/ItemDetailContainerStyle";

export default function ItemDetailContainer(categorias) {
  const [productos, setProductos] = useState([]);

  const [tiempoEsperaItem, setTiempoEsperaItem] = useState(true);
  const { id } = useParams();
  const db = getFirestore();

  const productoDetail = (id) => {
    const productosRef = collection(db, "productos");

    return getDocs(productosRef).then((respuesta) => {
      let productos = [...respuesta.docs];
      productos = productos.map((item) => ({ id: item.id, ...item.data() }));
      return productos.find((producto) => producto.id === id);
    });
  };

  useEffect(() => {
    productoDetail(id)
      .then((resultados) => setProductos(resultados))
      .catch((err) => console.log(err))

      .finally(() => setTiempoEsperaItem(false));
  }, [id]);

  return (
    <>
      {tiempoEsperaItem ? (
        <div className="mt-5 text-center">
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="warning" />
        </div>
      ) : (
        <Container>
          <Wrapper>
            <ItemDetailHeader />
            <ItemDetail producto={productos} />
          </Wrapper>
        </Container>
      )}
    </>
  );
}
