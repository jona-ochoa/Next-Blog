import { Paper, Button, Snackbar, Skeleton } from "@mui/material";
import React, { useState} from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Image from "next/dist/client/image";


    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

function Cabo() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Paper>
        <h2>
 
        </h2>
        <p>asdasd</p>
      </Paper>
        <Button variant="contained" color="success" >Check it out!</Button>
        
      <Button onClick={handleToggle} color="error">Show backdrop</Button>
      <Backdrop
        sx={{ color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="error" />
      </Backdrop>
    </>
  );
}

export default Cabo