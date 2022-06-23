import React, { createContext, useState } from "react";

// Aquí estoy Creando el Contexto "Variable Global"
export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  // Creo el estado
  const [cart, setCart] = useState([]);

  // Creo las funciones que se van a ejecutar: Añadir al carrito, remover un item, comprar todo

  const addItem = (item, cantidad) => {
    const newCart = [...cart];
    const cartIndex = cart.findIndex(
      (cartItem) => cartItem.producto.id === item.id
    );
    if (cartIndex !== -1) {
      let cantidadTotal = newCart[cartIndex].cantidad + cantidad;
      if (cantidadTotal <= item.stock) {
        newCart[cartIndex].cantidad = cantidadTotal;
        setCart(newCart);
      }
    } else {
      let producto = {
        producto: item,
        cantidad,
      };
      setCart([...cart, producto]);
    }
  };

  const removeItem = (id) => {
    setCart((prevState) => prevState.filter((cart, index) => index !== id));
  };

  // Aquí setea como vacio
  const clear = () => {
    setCart([]);
  };

  const sumatoria = () => {
    let total = 0;
    cart.map((item) => (total += item.producto.precio * item.cantidad));
    return total;
  };

  return (
    <>
      <CartContext.Provider
        value={{ cart, addItem, removeItem, clear, sumatoria }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}
