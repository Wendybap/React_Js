import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Spinner from "react-bootstrap/Spinner";

export default function ItemDetailContainer(categorias) {
  const [productos, setProductos] = useState([]);
  //Estableciendo Ternario (condiciones), para indicar al usuario lapso de espera en el renderizado del producto
  //Para ello primero creo un estado inicializando en true (dependiendo de lo que quiera hacer utilizo Booleanos)
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
      // Acá hago un Finally para indicar que al final de la Promesa el estado [tiempoEspera] pasa a false
      //  y asi se ejecuta la linea del esle del return y asi controlo la carga del producto
      .finally(() => setTiempoEsperaItem(false));
  }, [id]);

  return (
    <>
      {/* Aquí coloco el Ternario */}
      {tiempoEsperaItem ? (
        <div className="mt-5 text-center">
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="warning" />
        </div>
      ) : (
        <ItemDetail producto={productos} />
      )}
    </>
  );
}
