import React from "react";
import { Container } from "@mui/material";
import { Navbar } from "./components/navbar/Navbar";
import Carrito from "./pages/Carrito";
import { Routes, Route } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import Productos from "./pages/Productos";
import HomeIcon from "@mui/icons-material/Home";
import Home from "./pages/Home";
import CarritoProvider from "./context/CarritoContext";

const navArrayLinks = [
  {
    title: "Home",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    title: "Productos",
    icon: <InventoryIcon />,
    path: "/productos",
  },
  {
    title: "Carrito",
    icon: <ShoppingCartIcon />,
    path: "/carrito",
  },
];

function App() {
  return (
    <>
      <CarritoProvider>
        <Navbar navArrayLinks={navArrayLinks} />

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/productos" element={<Productos />} />
          </Routes>
        </Container>
      </CarritoProvider>
    </>
  );
}

export default App;
