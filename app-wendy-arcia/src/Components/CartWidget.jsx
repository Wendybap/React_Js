import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { CartContext } from "./Cart/CartContext";

export default function CartWidget() {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart.length > 0 && (
        <div>
          <FontAwesomeIcon icon={solid("cart-arrow-down")} />
          {cart.length}
        </div>
      )}
    </>
  );
}
