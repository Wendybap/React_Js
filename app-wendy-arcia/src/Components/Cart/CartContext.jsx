import React, { createContext, useState } from "react";

// Aquí estoy Creando el Contexto "Variable Global"
export const CartContext = createContext();

// Creo al Componente Proveedor de data o info a los hijos (lo que van a consumir los hijos)
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
      } else {
        //Aqui va un mensaje cuando la cantidad total sea mayor al stock
      }
    } else {
      let producto = {
        producto: item,
        cantidad,
      };
      setCart([...cart, producto]);
    }
  };
  // Este useEfect lo uso para evitar la asincronia de React y que cuando seleccione
  // el producto por primera vez no me aparezca vacio
  // es una forma de debuggear, es decir, encontrat y eliminar errores
  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  const removeItem = (id) => {
    setCart((prevState) => prevState.filter((cart, index) => index !== id));
  };
  // setCart(cart.filter((item) => item.producto.id !== id));

  // Aquí setea como vacio
  const clear = () => {
    setCart([]);
  };
  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  const sumatoria = () => {
    let total = 0;
    cart.map((item) => (total += item.producto.precio * item.cantidad));
    return total;
  };

  return (
    <>
      {/* value me permite colocar lo que quiero que reciban los children en este caso es el estado (cart), y las funciones que coloque dentro del provider */}
      <CartContext.Provider
        value={{ cart, addItem, removeItem, clear, sumatoria }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}
