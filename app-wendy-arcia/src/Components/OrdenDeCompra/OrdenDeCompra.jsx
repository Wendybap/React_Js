import React, { useState, useContext } from "react";
import {
  Form,
  Button,
  Table,
  InputGroup,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { CartContext } from "../Cart/CartContext";
import { ventas, total } from "../../Utiles/funciones";
import { serverTimestamp } from "firebase/firestore";
import { Formik } from "formik";
import styles from "../OrdenDeCompra/OrdenDeCompra.module.css";
import Swal from "sweetalert2";

export default function OrdenDeCompra() {
  const { cart, clear, sumatoria } = useContext(CartContext);

  const [ordenEnviada, setOrdenEnviada] = useState(false);

  function terminarCompra(valores) {
    const fecha = serverTimestamp();

    // Crear el objeto:
    let comprar = {
      comprador: {
        nombre: valores.nombres,
        apellido: valores.apellidos,
        email: valores.email,
        telefono: valores.telefono,
      },
      //  carrito [{ id, nombre, precio, fecha }]
      item: cart,
      total: sumatoria(),
      date: fecha,
    };
    console.log(comprar);

    ventas(comprar).then(({ id }) => {
      Swal.fire(
        "Tu compra fue realizada con Exito!",
        "Orden N° " + id,
        "success"
      );
    });
  }

  function mostrarItem() {
    return cart.map((item) => (
      <tr>
        <th>{item.producto.nombre}</th>
        <th>{item.cantidad}</th>
        <th>{item.producto.precio}</th>
        <th>$ {total(item.producto.precio, item.cantidad)}</th>
      </tr>
    ));
  }

  // VALIDACION formulario

  return (
    <>
      <Container>
        <Row>
          <Col className="mt-4">
            <h1 className={styles.titulo}>Orden de Compra</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover responsive="md">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>{mostrarItem()}</tbody>
              <tfoot>
                <tr>
                  <th colSpan="3">Total a pagar</th>
                  <th>$ {sumatoria()}</th>
                </tr>
              </tfoot>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <Formik
              initialValues={{
                nombres: "",
                apellidos: "",
                email: "",
                telefono: "",
              }}
              validate={(valores) => {
                let errores = {};
                // Validacion de nombre para que no contenga numeros no guion bajo
                if (!valores.nombres) {
                  errores.nombres = "Por favor introduzca sus nombres";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombres)) {
                  errores.nombres =
                    "El nombre solo puede contener letras y espacios";
                }

                // validacion Apellido
                if (!valores.apellidos) {
                  errores.apellidos = "Por favor introduzca sus apellidos";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellidos)) {
                  errores.apellidos =
                    "El nombre solo puede contener letras y espacios";
                }

                // validacion correo
                if (!valores.email) {
                  errores.email = "Por favor introduzca su correo electrónico";
                } else if (
                  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    valores.email
                  )
                ) {
                  errores.email =
                    "El correo solo puede contener letras, numero, puntos, guiones y guión bajo";
                }

                // validacion del telefono

                if (!valores.telefono) {
                  errores.telefono =
                    "Por favor introduzca su número de telefono";
                } else if (
                  !/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(
                    valores.telefono
                  )
                ) {
                  errores.telefono =
                    "Debe colocar el número de telefono de acuerdo al ejemplo +54 9 1140588749";
                }
                return errores;
              }}
              onSubmit={(valores, { resetForm }) => {
                resetForm();
                clear();
                terminarCompra(valores);
                setOrdenEnviada(true);
                setTimeout(() => setOrdenEnviada(false), 5000);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleSubmit,
                handleBlur,
                handleChange,
              }) => (
                <Form className={styles.formulario} onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col">
                      <Form.Label className="mb-3">
                        Por favor ingrese sus datos para finalizar la compra
                      </Form.Label>
                      <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <InputGroup>
                          <Form.Control
                            name="nombres"
                            required
                            type="text"
                            placeholder="Escriba sus nombres"
                            value={values.nombres}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </InputGroup>
                        {touched.nombres && errors.nombres && (
                          <div className={styles.error}>{errors.nombres}</div>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Apellidos</Form.Label>
                        <InputGroup>
                          <Form.Control
                            name="apellidos"
                            required
                            type="text"
                            placeholder="Escriba sus apellidos"
                            value={values.apellidos}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </InputGroup>
                        {touched.apellidos && errors.apellidos && (
                          <div className={styles.error}>{errors.apellidos}</div>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            name="email"
                            required
                            type="email"
                            placeholder="ejemplo@ejemplo.com"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </InputGroup>
                        {touched.email && errors.email && (
                          <div className={styles.error}>{errors.email}</div>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Telefono</Form.Label>
                        <InputGroup>
                          <Form.Control
                            name="telefono"
                            required
                            type="text"
                            placeholder="+54 9 1140588749"
                            value={values.telefono}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </InputGroup>
                        {touched.telefono && errors.telefono && (
                          <div className={styles.error}>{errors.telefono}</div>
                        )}
                      </Form.Group>
                      <Button
                        className="mt-2 mb-2"
                        variant="primary"
                        type="submit"
                      >
                        Comprar
                      </Button>
                      {ordenEnviada && (
                        <p className={styles.exito}>
                          ¡Orden de compra enviada con exito!
                        </p>
                      )}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  );
}
