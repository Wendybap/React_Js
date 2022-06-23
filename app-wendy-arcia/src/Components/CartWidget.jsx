import React, { useContext } from "react";
// import { CartContext } from "./Cart/CartContext";
import { CartContext } from "./Cart/CartContext";
import { Carro, CardIcon } from "./CartWidgetStyle";

export default function CartWidget() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Carro className="contCarrito">
        <CardIcon />

        {cart.length === 0 ? (
          " "
        ) : (
          <span className="carrito">
            {cart.reduce((prev, next) => prev + next.cantidad, 0)}
          </span>
        )}
      </Carro>
      {/* <Card>
        <CardIcon /> */}
      {/* <FontAwesomeIcon icon={solid("cart-arrow-down")} /> */}

      {/* {cart.length === 0 ? (
          " "
        ) : (
          <span>{cart.reduce((prev, next) => prev + next.cantidad, 0)}</span>
        )}
      </Card> */}
    </>
  );
}
