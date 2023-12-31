import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCarrito } from "../context/CarritoContext";
import Swal from 'sweetalert2'

const Tarjeta = ({producto}) => {
  {/*contador*/}
  const [count, setCount] = useState(0);

  const handlerAdd = () => {
    setCount(count + 1);
  };

  const handlerSubstract = () => {
    if (count <= 0) {
      return null;
    } else setCount(count - 1);
  };

  {/*contador*/}

  const{agregarAlCarrito}=useCarrito();

  const handlerAddProducts= ()=>{
    producto.cantidad=count
    agregarAlCarrito(producto)

    Swal.fire({
      title: 'Agregado al Carrito!',
      icon: "success",
      confirmButtonText: 'Aceptar'
    })

  }


  

  return (
    <Card
     sx={{ 
      transition:"0,2s","&:hover":{
      transform:"scale(1.02)",
      display: "grid"
      } 
      }}>
      <CardActionArea>
        <CardMedia
          sx={{
            height: 300,
            maxWidth:300,
            margin:"auto"
          }}
          image={producto.img}
          title={producto.modelo}
        />

        <CardContent>
          <Typography variant="h6" component="div">{producto.modelo}</Typography>
          <Typography variant="body2" color="text.primary">{producto.marca}</Typography>
          <Typography variant="body2" color="text.secondary">{producto.descripcion}</Typography>
          <Typography variant="body2" color="text.primary">{producto.precio.toLocaleString("es-ES", {
              style: "currency",
              currency: "USD",})}</Typography>
          

        </CardContent>
      </CardActionArea>

      <CardActions style={{justifyContent:"center"}}>
        <Button size="small" variant="contained" onClick={handlerSubstract}>
          -
        </Button>
        <Box sx={{ border: 1, width: 45, height: 28 }}>
          <Typography>{count}</Typography>
        </Box>
        <Button size="small" variant="contained" onClick={handlerAdd}>
          +
        </Button>
        <Button
          startIcon={<AddShoppingCartIcon />}
          size="small"
          variant="contained"
          onClick={handlerAddProducts}
          >
          Agregar
        </Button>
      </CardActions>
    </Card>
  );
};

export default Tarjeta;
