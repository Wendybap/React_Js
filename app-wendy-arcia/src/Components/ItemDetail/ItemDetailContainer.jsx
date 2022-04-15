import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { productoDetail } from "../../Utiles/promesas";
import producto from "../../Utiles/producto";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [productos, setProductos] = useState([]);
  //Estableciendo Ternario (condiciones), para indicar al usuario lapso de espera en el renderizado del producto
  //Para ello primero creo un estado inicializando en true (dependiendo de lo que quiera hacer utilizo Booleanos)
  const [tiempoEsperaItem, setTiempoEsperaItem] = useState(true);
  const { id } = useParams();

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
        <h3>Cargando...</h3>
      ) : (
        <ItemDetail producto={productos} />
      )}
    </>
  );
}
