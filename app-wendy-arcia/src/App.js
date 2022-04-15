import React from "react";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./ItemList/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/category/:categoryId"
            element={<ItemListContainer />}
          />
          <Route exact path="/Item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
