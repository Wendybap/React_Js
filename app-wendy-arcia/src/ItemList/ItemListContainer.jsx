import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [tiempoEsperaItem, setTiempoEsperaItem] = useState(true);
  const [categoria, setCategoria] = useState([]);
  const db = getFirestore();

  const { categoryId } = useParams();

  async function obtenerCategoria() {
    const categoriaRef = collection(db, "categoria");
    const respuesta = await getDocs(categoriaRef);
    let category = [...respuesta.docs];
    return category.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
  }

  const obtenerProductos = (categoryId) => {
    const productosRef = collection(db, "productos");

    return getDocs(productosRef).then((respuesta) => {
      let productos = [...respuesta.docs];
      productos = productos.map((item) => ({ id: item.id, ...item.data() }));
      if (categoryId !== undefined) {
        let filter = categoria.find((cat) => cat.nombre === categoryId);
        console.log(categoria);
        return productos.filter(
          (producto) => producto.categoriaId === filter.id
        );
      }
      return productos;
    });
  };

  // console.log(categoryId);

  useEffect(() => {
    setTiempoEsperaItem(false);
    obtenerCategoria()
      .then((resultados) => setCategoria(resultados))
      .catch((err) => console.log(err))
      .finally(() => setTiempoEsperaItem(false));
  }, []);

  useEffect(() => {
    setTiempoEsperaItem(true);
    obtenerProductos(categoryId)
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
