import React, { useState } from "react";
import Tarjeta from "../components/Tarjeta";
import { Grid } from "@mui/material";

const Productos = () => {

  const ArrayProductos = [
    {
      img: "/src/recursos/imagen/airforce1.png",
      tipo: "zapatillas",
      marca: "Nike",
      modelo: "Air Jordan 1",
      descripcion: "Zapatillas icónicas de edición limitada",
      precio: 399.99,
    },
    {
      img: "/src/recursos/imagen/guccibuzo.png",
      tipo: "ropa",
      marca: "Gucci",
      modelo: "Sudadera con capucha",
      descripcion: "Sudadera de algodón con el logo de Gucci",
      precio: 799.99,
    },
    {
      img: "/src/recursos/imagen/yeezy350.png",
      tipo: "zapatillas",
      marca: "Adidas",
      modelo: "Yeezy Boost 350",
      descripcion: "Zapatillas diseñadas por Kanye West",
      precio: 499.99,
    },
    {
      img: "/src/recursos/imagen/remeraversace.png",
      tipo: "ropa",
      marca: "Versace",
      modelo: "Camiseta Medusa",
      descripcion: "Camiseta con estampado de la icónica Medusa de Versace",
      precio: 299.99,
    },
    {
      img: "/src/recursos/imagen/balenciagazapas.png",
      tipo: "zapatillas",
      marca: "Balenciaga",
      modelo: "Triple S",
      descripcion: "Zapatillas de diseño futurista y suela robusta",
      precio: 899.99,
    },
    {
      img: "/src/recursos/imagen/monogramaLV.png",
      tipo: "ropa",
      marca: "Louis Vuitton",
      modelo: "Chaqueta Monogram",
      descripcion:
        "Chaqueta con el distintivo patrón Monogram de Louis Vuitton",
      precio: 1499.99,
    },
    {
      img: "/src/recursos/imagen/zapastachas.png",
      tipo: "zapatillas",
      marca: "Christian Louboutin",
      modelo: "Sneakers de Tachuelas",
      descripcion: "Zapatillas de cuero con emblemáticas tachuelas",
      precio: 1299.99,
    },
    {
      img: "/src/recursos/imagen/pantalonpradaa.png",
      tipo: "ropa",
      marca: "Prada",
      modelo: "Pantalones de Nylon",
      descripcion: "Pantalones deportivos de nylon de alta calidad",
      precio: 699.99,
    },
    {
      img: "/src/recursos/imagen/offwhite.png",
      tipo: "zapatillas",
      marca: "Off-White",
      modelo: "Off-Court 3.0",
      descripcion: "Zapatillas de estilo urbano con detalles de marca",
      precio: 549.99,
    },
    {
      img: "/src/recursos/imagen/vestido.png",
      tipo: "ropa",
      marca: "Dolce & Gabbana",
      modelo: "Vestido de Seda",
      descripcion: "Vestido elegante de seda con estampados florales",
      precio: 1999.99,
    },
  ];

  return (
    <>
    {/* llenar grilla de tarjetas y tarjetas de info */}
      <Grid container spacing={10}>
        {ArrayProductos.map((item, indice) => {
          return (
            <Grid item key={indice} xs={12} sm={6} md={4}>
              {" "}
              <Tarjeta producto={item}/>{" "}
            </Grid>
          );
        })}
      </Grid>

    </>
  );
};

export default Productos;
