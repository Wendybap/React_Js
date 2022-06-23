import React from "react";
import NavBar from "./Components/NavBar/NavBar.jsx";
import ItemListContainer from "./ItemList/ItemListContainer";
import "./App.css";
// import GlobalStyles from "./styles/GlobalStyles";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./Components/Cart/CartContext";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrdenDeCompra from "./Components/OrdenDeCompra/OrdenDeCompra";

export default function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/category/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route exact path="/Item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route
            exact
            path="/ordenDeCompra"
            element={<OrdenDeCompra />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}
