import React, { createContext, useState } from "react";

// Aquí estoy Creando el Contexto "Variable Global"
export const CartContext = createContext();

// Creo al Componente Proveedor de data o info a los hijos (lo que van a consumir los hijos)
export default function CartContextProvider({ children }) {
  // Creo el estado
  const [cart, setCart] = useState([]);

  // Creo las funciones que se van a ejecutar: Añadir al carrito, remover un item, comprar todo

  const addItem = (item, cantidad) => {
    console.log(cantidad);
    const newCart = [...cart];
    const cartIndex = cart.findIndex(
      (cartItem) => cartItem.producto_id === item.id
    );
    if (cartIndex !== -1) {
      let cantidadTotal = newCart[cartIndex].cantidad + cantidad;
      if (cantidadTotal <= item.stock) {
        newCart[cartIndex].cantidad = cantidadTotal;
        setCart(newCart);
      } else {
        //Aqui va un mensaje cuando la cantidad total sea mayor al stock
      }
    } else {
      let producto = {
        producto_id: item.id,
        cantidad,
      };
      setCart([...cart, producto]);
    }
    console.log(cart);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.producto_id !== id));
    console.log(cart);
  };

  // Aquí setea como vacio
  const clear = () => {
    setCart([]);
  };

  return (
    <>
      {/* value me permite colocar lo que quiero que reciban los children en este caso es el estado (cart), y las funciones que coloque dentro del provider */}
      <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
        {children}
      </CartContext.Provider>
    </>
  );
}

// onClick={() => addItem({ ...producto, onAdd })}
