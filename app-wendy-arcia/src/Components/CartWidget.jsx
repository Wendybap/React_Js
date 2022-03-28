import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function CartWidget() {
  return (
    <>
      <FontAwesomeIcon icon={solid("cart-arrow-down")} />
    </>
  );
}
