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
