import React,{useState,useEffect} from 'react';
import {Box,Grid,Button,Typography,Modal, bottomNavigationClasses, getTouchRippleUtilityClass} from '@mui/material';
import { kenyaflag,ghanaflag,ugandaflag,tanzaniaflag,saflag,nigeria } from '../../assets';
const style = {
  position: 'absolute',
  textAlign:"center",
  top: '50%',
  left: '55%',
  transform: 'translate(-50%, -50%)',
  width: {
    lg:500,
    md:500,
    sx:200,
    xs:200
  },
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 5,

};

export default function CustomModal({view,open,handleClose,className1,className2,className3,className4,className5,className6,handleKenya,handleUganda,handleTz,handleGhana,handleSa,handleNigeria}) {

   const [display,setDisplay] = useState("block")
  
   const [className,setClassName] = useState("")

  return (
    <div style={{display:{display}}}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{mb:1}} id="modal-modal-title" variant="h6" component="h2">
            Choose a Country
          </Typography>
          <Grid container sx={{display:"flex",pl:{
            lg:12,
            md:12,
            xs:6,
            sm:6
          }}}>
             
             <Box onClick={className1}>
             <Box component="img" src={kenyaflag} onClick={handleKenya} sx={{width:{
              lg:"80%",
              md:"80%",
              xs:"60%",
              sm:"60%"
             },height:{
              lg:"15vh",
              md:"15vh",
              xs:"12vh",
              sm:"12vh"
             }}}/>
            <Typography>Kenya</Typography>
             </Box>
           
             <Box onClick={className3}>
             <Box component="img" src={tanzaniaflag}  onClick={handleTz} sx={{width:{
              lg:"80%",
              md:"80%",
              xs:"60%",
              sm:"60%"
             },height:{
              lg:"15vh",
              md:"15vh",
              xs:"11vh",
              sm:"11vh"
             }}}/>
             <Typography>Tanzania</Typography>
             </Box>
         
             <Box onClick={className2}>
             <Box component="img" src={ugandaflag}  onClick={handleUganda} sx={{width:{
              lg:"80%",
              md:"80%",
              xs:"60%",
              sm:"60%"
             },height:{
              lg:"15vh",
              md:"15vh",
              xs:"11vh",
              sm:"11vh"
             }}}/>
             <Typography>Uganda</Typography>
             </Box>
         
             <Box onClick={className4}>
             <Box component="img" src={ghanaflag} onClick={handleGhana} sx={{width:{
              lg:"80%",
              md:"80%",
              xs:"60%",
              sm:"60%"
             },height:{
              lg:"14vh",
              md:"14vh",
              sm:"11vh",
              xs:"11vh"
            },mt:1}}/>
             <Typography>Ghana</Typography>
             </Box>
          
            <Box onClick={className5}>
            <Box component="img" src={saflag} onClick={handleSa} sx={{width:{
              lg:"80%",
              md:"80%",
              xs:"60%",
              sm:"60%"
            },height:{
              lg:"14vh",
              md:"14vh",
              sm:"10vh",
              xs:"10vh"
            },mx:1,mt:1}}/>
            <Typography>South Africa</Typography>
            </Box>
        
            <Box onClick={className6}>
            <Box component="img" src={nigeria} onClick={handleNigeria} sx={{width:{
              lg:"80%",
              md:"80%",
              xs:"60%",
              sm:"60%"
            },height:{
              lg:"14vh",
              md:"14vh",
              sm:"11vh",
              xs:"11vh"
            },mt:1}}/>
            <Typography>Nigeria</Typography>
            </Box>
          

            {/* <Box component="img" src={kenyaflag} sx={{width:"30%",height:"20vh"}}/> */}
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
