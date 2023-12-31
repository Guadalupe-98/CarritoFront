import React, { createContext, useContext, useState } from 'react'

const CarritoContext= createContext();


const CarritoProvider = ({children}) => {
    const [carrito, setCarrito]=useState([])

    const agregarAlCarrito=(producto)=>{
        setCarrito([...carrito,producto])
        
    }

    const removerDelCarrito =(indice)=>{
        const nuevoCarrito=[...carrito]
        nuevoCarrito.splice(indice,1)
        setCarrito(nuevoCarrito)
    }



  return (
    <CarritoContext.Provider value={{carrito, agregarAlCarrito, removerDelCarrito }} >
    {children}
    </CarritoContext.Provider>
  )
}

export default CarritoProvider
export const useCarrito=()=>{
    return useContext(CarritoContext)
}