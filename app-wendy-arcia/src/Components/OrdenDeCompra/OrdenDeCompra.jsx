import React, { useState, useEffect, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { CartContext } from "../Cart/CartContext";
import { ventas } from "../../Utiles/funciones";

export default function OrdenDeCompra() {
  const { cart, sumatoria } = useContext(CartContext);
  // Creamos los estados para iniciar el formulario (orden de compra)
  // Los cuales inician con un string vacio
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  useEffect(() => {
    console.log(nombre, email, telefono);
  }, [nombre, email, telefono]);

  function terminarCompra(evento) {
    evento.preventDefault();
    // Crear el objeto:
    let comprar = {
      comprar: { nombre, email, telefono },
      // aqui tengo que meter el carrito [{ id, nombre, precio }]
      item: cart,
      total: sumatoria(),
    };
    console.log(comprar);

    ventas(comprar).then(({ id }) => {
      alert("Gracias por su compra, su numero de orden es " + id);
      console.log(id);
    });
  }

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            onChange={(evento) => {
              setNombre(evento.currentTarget.value);
            }}
            placeholder="Escriba su nombre"
            required
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(evento) => {
              setEmail(evento.currentTarget.value);
            }}
            placeholder="ejemplo@ejemplo.com"
            required
          />
          <Form.Text className="text-muted">
            Nunca compartiremos su correo electrónico con nadie más.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="number"
            value={telefono}
            onChange={(evento) => {
              setTelefono(evento.currentTarget.value);
            }}
            placeholder="+54 9 1140588749"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(evento) => {
            terminarCompra(evento);
          }}
        >
          Comprar
        </Button>
      </Form>
    </>
  );
}
