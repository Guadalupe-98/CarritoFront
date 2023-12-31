import React, { useState } from 'react'
import NavListDrawer from './NavListDrawer'
import Button from "@mui/material/Button";
import { AppBar, Drawer, IconButton, Toolbar } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";


export const Navbar = ({navArrayLinks}) => {
  const [open, setOpen]=useState(false)
  
  
  return (
    <>
    {/* conf navbar e icon*/}
    <AppBar position="static">
      <Toolbar>

        <IconButton onClick={()=> setOpen(true)}>
          <MenuIcon/>
        </IconButton>


      </Toolbar>
    </AppBar>


    
    {/* accion barra drawer */}
    <Drawer
      open={open}
      anchor="left"
      onClose={()=>setOpen(false)}
      >
      <NavListDrawer navArrayLinks={navArrayLinks} />
    </Drawer>
    
    </>
  )
}
