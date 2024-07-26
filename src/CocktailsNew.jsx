import React, { Fragment, useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import CocktailPath from './cocktails/CocktailPath'
import cocktailData from './cocktails/CocktailData';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const cocktails=['elixir','iceberg','maisgarden','orangebreeze','reñesjewel','sicilia']//queda por añadir 'aroha'


const formatTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <Fragment key={index}>
      {line}
      <br />
    </Fragment>
  ));
};

function Cocktails() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobileLandscape = useMediaQuery('(orientation: landscape)');

  const baseStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    height: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
  };

  const mobileLandscapeStyle = {
      ...baseStyle,
      display: 'flex',
      maxHeight: '100vh',
      alignItems: 'center ',
  }
  const textProfile = {
    maxHeight:'65vh', 
    overflow:'scroll',
    '&::-webkit-scrollbar': {
        width: '7px',
        backgroundColor: '#fafafa',
        borderRadius: '10px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#2ca7b5',
        borderRadius: '10px',
        border: 'solid 1px #fafafa'
      },
      overflowX: 'hidden',
    }


  function handleOpen(cocktail) {
    return setOpen(cocktail);
  }
  const handleClose = () => setOpen(false);
  return (
    <div className='container-cocktails'>
      {cocktails.map((cocktail)=>{
      return(<div className='cocktail'>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox={cocktailData(cocktail).viewBox}
            className={cocktail}
            onClick={()=>handleOpen(cocktail)}
        >
        <CocktailPath cocktail={cocktail}/>
        </svg>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open==cocktail?true:false}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open==cocktail?true:false}>
            <Card sx={isMobileLandscape ? mobileLandscapeStyle : baseStyle}>
                    <CardMedia
                    component="img"
                    height={isMobileLandscape ? '400' : '240'}
                    image={`/static/${cocktailData(cocktail).profileInfo.header}`}
                    alt={cocktail}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {cocktailData(cocktail).profileInfo.title}
                    </Typography>
                    <Typography variant="body2" sx={textProfile}>
                        {formatTextWithLineBreaks(cocktailData(cocktail).profileInfo.body)}
                    </Typography>
                    <IconButton onClick={handleClose}>
                    <KeyboardReturnIcon />
                    </IconButton>
                    </CardContent>
            </Card>
        </Fade>
      </Modal>
      </div>)}
      
    )
      
     }
    </div>
  )
}

export default Cocktails
