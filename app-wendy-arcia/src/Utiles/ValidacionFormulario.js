import { useState } from "react";

// Funciones para validad el formulario de la orden de compra
export const ValidacionFormulario = (valorInicial, validarFormulario) => {
  // ESTAS SON LAS VARIABLES DE ESTADO PARA CONTROLAR EL FORMULARIO
  const [formulario, setFormulario] = useState(valorInicial);

  // inicio el estado de error con un obj. vacio porque si en la validación el objeto vacio
  // no tine ningun atributo significa que todo paso bien y podemos enviar el formulario
  // por eso es muy importante que se inicialice como un objeto vacio
  const [error, setError] = useState({});

  // creo otra estado CARGANDO inicializado en False
  //   porque va a ver un proceso lo loading(cargando)
  const [cargando, setCargando] = useState(false);

  // como es un formulario de envio voy a crear un stado que me indica la respuesta del envio
  // y la inicio como nula
  const [respuesta, setRespuesta] = useState(null);

  // Variables que voy a usar en el componente Orden de Compra para ejecutar los EVENTOS
  // como el handleChange, etc.. PORQUE LA VALIDACIÓN SE VA A DAR CUANDO SE CAPTUREN LOS EVENTOS,
  //   estas vienen siendo las funciones ACTUALIZADORAS de los estados

  //  Esta detecta cuando estamos escribiendo y hace el cambio de los valores
  const handleChange = (evento) => {};

  // Aquí se van hacer las validaciones como tal
  const handleBlur = (evento) => {};

  //
  const handleSubmit = (evento) => {};

  return {
    //   Aquí me va a retornar los objetos (estados)
    formulario,
    error,
    cargando,
    respuesta,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
