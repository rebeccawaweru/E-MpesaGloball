import React,{useState,useEffect} from 'react';
import {Box, Typography} from '@mui/material'
import axios from 'axios'

function Forex() {
  const [loading, setLoading] = useState(true);
  const [forex,setForex] = useState([]);
  const [final,setFinal] = useState([]);
   
  useEffect(()=>{
    setLoading(true)
    function trade(){
      axios.get('https://e-mpesa.herokuapp.com/').then(response=>{
        setForex(response.data)
        setLoading(false);
       })
    }
    setInterval(trade,2500)
  },[])
  return (
    <Box sx={{width:"100%", height:"10vh", backgroundColor:"black",position:"absolute",color:"white",display:"flex", marginTop:{
      lg:"5%",
      md:"5%",
      xs:"30%",
      sm:"5%"
    },justifyContent:"center",alignItems:"center",textAlign:"center",pt:2}}>
      {!loading && forex.map((data,i)=>{
       return <Box key={i}
        sx={{mx:5,mb:3}}><Typography sx={{mx:2}}>{data.symbol}</Typography>
          <Typography>{data.ts}</Typography>
        </Box>
     })}
    
    </Box>
  );
}

export default Forex;