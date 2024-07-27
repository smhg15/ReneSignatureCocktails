import React, { useEffect, useState } from 'react'
import reñe from '/static/logoReñeSF.png'
import Cocktails from './CocktailsNew'
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, IconButton, Link, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  bgcolor: '#000000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fafafa',
};
function App() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      handleClose()
    }, 2000);
  }, []);

  return (
    <div>
    <div className="container-blackboard">
      <IconButton
        size='small'
        href="https://renebyld.com/"
        disableRipple
      >
      <img src={reñe} alt="reñe" className='reñe'/>
      </IconButton>
      <h1>Coctelería de Autor</h1>
      <Cocktails/>
      <footer>
        <Link underline='none' href="mailto:alesfacamo@gmail.com" sx={{color: 'background.paper'}}>
          <p className='p'>Todos los cócteles son propiedad de Alessandro®</p>
        </Link>
        <IconButton
          size='small'
          href="https://www.instagram.com/rene1910.bcn/"
          disableRipple 
          sx={{color: 'background.paper'}}
        >
          <InstagramIcon fontSize='large'/>
          <Typography>rene1910.bcn</Typography>
        </IconButton>
        <Link underline='none' href="https://www.linkedin.com/in/smhg15/" sx={{color: 'background.paper'}}>
          <p className='p'>Desarrollado por #FreePlayerCodify</p>
        </Link>
      </footer>
    </div>
    <Modal
      open={open}
    >
      <Box sx={style}>
        <h2>Loading...</h2>
      </Box>
    </Modal>
  </div>

  )
}
export default App

