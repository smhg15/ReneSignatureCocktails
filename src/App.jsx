import React from 'react'
import './App.css'
import reñe from './assets/logoReñeSF.png'
import Cocktails from './CocktailsNew'
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton, Link, Typography } from '@mui/material';

function App() {
  return (
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
        <Link underline='none' href="https://www.linkedin.com/in/smhg15/" sx={{color: 'background.paper'}}>
          <p className='p'>Alessandro®</p>
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
          <p className='p'>#FreePlayerCodify</p>
        </Link>
      </footer>
    </div>

  )
}
export default App

