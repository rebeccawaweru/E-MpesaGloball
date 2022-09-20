import React from 'react';
import {Toolbar,Box,IconButton,AppBar,Button,Typography,Alert} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import {mpesalogo} from '../../assets';
import {HomeScreenPrompt} from '../../Components'
function CustomAppBar({src,handleHome}) {
  const [prompt, promptToInstall] = HomeScreenPrompt();
  const [isVisible, setVisibleState] = React.useState(false);
  const hide = () => setVisibleState(false);
  const [open, setOpen] = React.useState(true);

  React.useEffect(
    () => {
      if (prompt) {
        setVisibleState(true);
      }
    },
    [prompt]
);
    return (
      <AppBar position="sticky" elevation={1} sx={{backgroundColor:"white"}}>
        <Toolbar>
       
          {/* <Box onClick={hide} sx={{backgroundColor:"white",width:"10%",height:"10vh",display:"flex"}}>
    <Button onClick={hide}>Close</Button>
    <Button onClick={promptToInstall}>Add to Homescreen</Button>
        </Box> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display:{
            lg:"block",
            md:"block",
            xs:"none",
            sm:"block"
          }}}>
          <Box component="img" src={mpesalogo} sx={{width:90,height:70, mx:2}}/>
            <Box component="img" src={src} alt='' sx={{width:50,height:50, }} onClick={()=>window.location.reload()}/>
       
          </Typography>

          {open && 
        <Alert
        icon={false}
        sx={{ flexGrow:1,mr:{
          lg:20,
          md:20,
          xs:2,
          sm:2
        }, pl:{
          lg:25,
          md:1,
          xs:1,
          sm:1
        }}}
        action={
          <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={()=>{
            setOpen(false)
          }}
        >
        <CloseIcon fontSize="inherit" />
        </IconButton>
        }
      >
       <Button variant='outlined' onClick={promptToInstall}>Add to Homescreen</Button>
      </Alert>
     }

       <IconButton
            onClick={handleHome}
            size="larger"
            color="primary"
            aria-label="home"
            sx={{ mr: 2}}
          >
            <HomeIcon />
          </IconButton>
          <Button sx={{border:"1px solid blue"}}>
            <a href="https://track.deriv.com/_N2RDUKptcu0KqFKZ7JdnQ2Nd7ZgqdRLk/1/" style={{color:"blue",textDecoration:"none"}}>Get Started</a>

          </Button>
        </Toolbar>
      </AppBar>
 
    );
}

export default CustomAppBar;