import producto from "./producto";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const productoCategorias = (categoryId) => {
  const db = getFirestore();
  const productosRef = collection(db, "productos");
  const categoriaRef = collection(db, "categoria");

  let categoria = {};
  getDocs(categoriaRef).then((respuesta) => {
    let categorias = [...respuesta.docs];
    localStorage.setItem(
      "categoria",
      categorias.find((cat) => cat.nombre === categoryId)
    );
  });
  console.log(localStorage.getItem("categoria"));

  return getDocs(productosRef).then((respuesta) => {
    let productos = [...respuesta.docs];
    productos = productos.map((item) => ({ id: item.id, ...item.data() }));
    return productos;
    // const productosFiltradosCategorias = productos.filter(
    //   (producto) => producto.categoria === categoryId
    // );
  });
};

export const productoDetail = (id) => {
  return new Promise((resolve, reject) => {
    const productoDetail = producto.find((prod) => prod.id === parseInt(id));

    setTimeout(() => {
      if (productoDetail === undefined) {
        window.location.href = "/";
      }
      id ? resolve(productoDetail) : reject(producto);
    }, 2000);
  });
};
