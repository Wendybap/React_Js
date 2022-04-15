import producto from "./producto";

let respuestaPositiva = true;
export default function promesas(tiempo, tarea) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (respuestaPositiva) {
        resolve(tarea);
      } else {
        reject("err");
      }
    }, tiempo);
  });
}

export const productoCategorias = (categoryId) => {
  return new Promise((resolve, reject) => {
    const productosFiltradosCategorias = producto.filter(
      (producto) => producto.categoria === categoryId
    );
    setTimeout(() => {
      categoryId ? resolve(productosFiltradosCategorias) : resolve(producto);
    }, 2000);
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
