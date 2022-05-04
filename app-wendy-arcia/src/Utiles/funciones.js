// import producto from "./producto";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  addDoc,
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

export const total = (precio, cantidad) => {
  return precio * cantidad;
};

export const ventas = (item) => {
  const db = getFirestore();
  const ordenDeVentas = collection(db, "ventas");
  return addDoc(ordenDeVentas, item);
};
