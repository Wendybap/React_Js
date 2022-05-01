// import producto from "./producto";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const obtenerCollection = (id) => {
  const db = getFirestore();
  if (!id) {
    return collection(db, "productos");
  }
  return query(collection(db, "productos"), where("categoria", "==", id));
};

export const obtenerProductos = (id) => {
  return getDocs(obtenerCollection(id)).then((resultados) => {
    let productos = [...resultados.docs];
    return productos.map((item) => ({ id: item.id, ...item.data() }));
  });
};
