import React from "react";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./ItemList/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  );
}
