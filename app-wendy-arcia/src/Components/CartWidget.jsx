import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { CartContext } from "./Cart/CartContext";

export default function CartWidget() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="contCarrito">
        <FontAwesomeIcon icon={solid("cart-arrow-down")} />

        {cart.length === 0 ? (
          " "
        ) : (
          <span className="carrito">
            {cart.reduce((prev, next) => prev + next.cantidad, 0)}
          </span>
        )}
      </div>
    </>
  );
}
