import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { removeItem, clear } = useContext(CartContext);
  return (
    <>
      <Button className="btn"> Ir al Carrito </Button>
      <Button
        className="btn"
        onClick={() => {
          removeItem(1);
        }}
      >
        {" "}
        Borrar{" "}
      </Button>
      <Button
        className="btn"
        onClick={() => {
          clear();
        }}
      >
        {" "}
        Vaciar Carrito{" "}
      </Button>
    </>
  );
}
