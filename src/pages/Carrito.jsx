import React from "react";
import { useCarrito } from "../context/CarritoContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DeleteForever } from "@mui/icons-material";
import { Button } from "@mui/material";

const Carrito = () => {
  const { carrito, removerDelCarrito } = useCarrito();

  let cuenta = 0;
  const cuentaTotal = () => {
    carrito.forEach((element) => {
      cuenta += element.precio * element.cantidad;
    });
  };
  cuentaTotal();

  const handlerRemover=(indice)=>{
    removerDelCarrito(indice)
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Articulo</TableCell>
              <TableCell align="right">Marca</TableCell>
              <TableCell align="right">Modelo</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">Precio</TableCell>

              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {carrito.map((row, indice) => (
              <TableRow
                key={row.modelo}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.tipo}
                </TableCell>
                <TableCell align="right">{row.marca}</TableCell>
                <TableCell align="right">{row.modelo}</TableCell>
                <TableCell align="right">{row.cantidad}</TableCell>
                <TableCell align="right">{row.precio}</TableCell>
                <TableCell align="right"><Button startIcon= {<DeleteForever/>} onClick={()=>removerDelCarrito(indice)} ></Button></TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{cuenta}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Carrito;
