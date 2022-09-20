import React,{useState,useRef,useEffect} from 'react';
import {Box,Typography,Button, TextField,Grid} from "@mui/material"
import {CustomAppBar,CustomModal,Forex,HomeScreenPrompt,Prompt,ForexApi} from '../../Components'
import {visa,master,ghalogo1,ghalogo2,tzlogo1,tzlogo2,tzlogo3,tzlogo4,uglogo1,uglogo2,uglogo3,salogo1,salogo2,nigerialogo1,nigerialogo2,whatsapp,image1,image2,image3,equity,absa,nationalbank,kcb,standard, kenyaflag,tanzaniaflag,ugandaflag, ghanaflag, saflag,nigeria,airtelmoney,tkash,deriv,binary,lipampesa,instant,secure,hidden,web,android,huawei,tradingrobot} from '../../assets'

import AppleIcon from '@mui/icons-material/Apple';

import axios from 'axios'
function LandingPage() {
    const [prompt, promptToInstall] = HomeScreenPrompt();
    const { deferredEvt, hidePrompt } = Prompt();
    const [isVisible, setVisibleState] = React.useState(false);
    const hide = () => setVisibleState(false);
    const [usd,setUsd] = useState(0)
    const [deposit,setDeposit] = useState(0)
    const [withdraw,setWithdraw] = useState(0)
    const [image,setImage] = useState(null)
    const [classname,setClassname]= useState('box')
    const [classname2,setClassname2] = useState('boxI')
    const [currency,setCurrency] = useState(0)
    const [sign,setSign] = useState("")
    const [kenya,setKenya] = useState(true)
    const [open, setOpen] = React.useState(true);
    const currentYear = new Date().getFullYear();

    const convertNumber=(event)=>{
        var amount = event.target.value;
        const options = {method: 'GET', headers: {Accept: 'application/json'}};
        fetch(`https://api.fastforex.io/convert?from=${sign}&to=USD&amount=${event.target.value}&api_key=41952e2375-eef8670fae-rghqcw`, options)
        .then(response => response.json())
        .then(response => {
          console.log(response.result.USD)
          setDeposit(response.result.USD*98/100)
         
        })
        .catch(err => console.error(err));
    }

    const convertNumber2=(event)=>{
        var amount = event.target.value;
        const options = {method: 'GET', headers: {Accept: 'application/json'}};
        fetch(`https://api.fastforex.io/convert?from=USD&to=${sign}&amount=${event.target.value}&api_key=41952e2375-eef8670fae-rghqcw`, options)
        .then(response => response.json())
        .then(response=> {
          console.log(response.result.rate)
          setWithdraw(response.result.rate*event.target.value*95.5/100)
        })
        .catch(error => console.log('error', error));
      
     }
     const home = useRef(null);
     const executeScroll1 = () => {
        home.current.scrollIntoView() 
        window.location.reload()
     } 


     React.useEffect(
        () => {
          if (prompt) {
            setVisibleState(true);
          }
        },
        [prompt]
    ); 

    const handle1 =()=>{
        setClassname("box")
        setClassname2("boxI")
        setSign("KES")
        setCurrency("1,000,000")
        setOpen(false)
    }
    const handle2 =()=>{
       setClassname("box1")
        setClassname2("boxII")
        setSign("UGX")
        setCurrency("33,000,000")
        setOpen(false)
    }
    const handle3 =()=>{
        setClassname("box2")
         setClassname2("boxIII")
         setSign("TZS")
         setCurrency("20,000,000")
         setOpen(false)
     }
     const handle4 =()=>{
        setClassname("box3")
         setClassname2("boxIV")
         setSign("GHS")
         setCurrency("72,000")
         setOpen(false)
     }
     const handle5 =()=>{
        setClassname("box4")
         setClassname2("boxV")
         setSign("ZAR")
         setCurrency("140,000")
         setOpen(false)
     }
     const handle6 =()=>{
        setClassname("box5")
         setClassname2("boxVI")
         setSign("NGN")
         setCurrency("4,000,000")
         setOpen(false)
     }
     function googleTranslateElementInit() {
        new window.google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
      }
    return (
    <Box sx={{width:"100%",height:"100%",padding:0,margin:0,position:"relative",overflow:"hidden"}}>

     
        <ForexApi/>
      
        <div id="google_translate_element" style={{display:"flex",height:"3.5vh",float:"right"}}>
             <Button  onClick={googleTranslateElementInit}>Translate</Button>
        </div>
        <CustomAppBar src={image} handleHome={executeScroll1} />
        <Box className={classname} sx={{width:"100%",height:"65vh",position:"relative"}} alt="">
        <CustomModal open={open}  className1={handle1} className2={handle2} className3={handle3} className4={handle4} className5={handle5} className6={handle6}  handleKenya={()=>setImage(kenyaflag)} handleTz={()=>setImage(tanzaniaflag)} handleUganda={()=>setImage(ugandaflag)} handleGhana={()=>setImage(ghanaflag)} handleSa={()=>setImage(saflag)} handleNigeria={()=>setImage(nigeria)} /> 
        <div ref={home} className="home" id='home'>
        <Box sx={{position:"absolute", top:{
            lg:50,
            md:60,
            sx:60,
            xs:40
        },left:70}}>
        <Typography component="h1" variant="h4" color="white">Global Payment Agent</Typography>
        <Typography component="h1" variant="h4" color="primary">YOU TRUST</Typography>
        <br></br>
        <Typography component="p" variant="p" color="white">E-Mpesa Global is for everyone who Deposit or Withdraw.<br></br> The smart choice for your daily trading, instant deposit or <br></br>withdraw of any amount to a maximum of {sign} {currency}<br></br> per one transaction. <br></br> <br></br> We are reliable, safer and fast to deal with 24/7</Typography>
        </Box>
        </div>
         </Box>
         <Box sx={{width:"100%",height:{
            lg:"55vh",
            md:"64vh",
            xs:"75vh",
            sm:"45vh"
         },position:"relative",justifyContent:"center",alignItems:"center",textAlign:"center", pt:3}}  >
     <Typography variant="h6" component="h4">DEPOSIT AND WITHDRAW FROM BINARY.COM & DERIV.COM </Typography>
     <Typography variant="h6" component="h4"> WITH E-MPESA GLOBAL NOW FULLY AUTOMATED 24/7</Typography>
    <Typography variant="h6" component="h4" sx={{mb:2}}><Box component="img" src={web} sx={{width:"30px",height:"30px"}}/>Web App,<Button variant='contained' sx={{mx:2}}><a href="https://e-mpesaglobalexchange.com/" style={{color:"black",textDecoration:"none"}}>Click here</a></Button> </Typography>
   <Typography variant="h6" component="h4" sx={{mb:2}}> <Box component="img" src={android} sx={{width:"30px",height:"30px"}}/>Android Users Download App, <Button variant='contained' sx={{mx:2}}><a href="https://e-mpesaglobalexchange.com/" style={{color:"black",textDecoration:"none"}}>Click here</a></Button></Typography>
    <Typography variant="h6" component="h4" sx={{mb:2}}><AppleIcon/>Apple iOS Users Download App,<Button variant='contained' sx={{mx:2}}><a href="https://e-mpesaglobalexchange.com/" style={{color:"black",textDecoration:"none"}}>Click here</a></Button></Typography>
    <Typography variant="h6" component="h4"><Box component="img" src={huawei} sx={{width:"30px",height:"30px"}}/>Huawei HarmonyOS Users Download App,<Button variant='contained' sx={{mx:2}}><a href="https://e-mpesaglobalexchange.com/" style={{color:"black",textDecoration:"none"}}>Click here</a></Button></Typography>
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",mt:2}}>
    <Box component="img" src={whatsapp} sx={{width:40,height:40}}/>
     <b><a href="https://api.whatsapp.com/send?phone=0789333444" style={{textDecoration:"none"}}>WhatsApp Us</a></b>
     </Box>
    </Box>
    
    <Grid container sx={{width:"100%",height:{
        lg:"95vh",
        md:"95vh",
        xs:"160vh",
       sm:"55vh"
    },position:"relative",display:"flex",justifyContent:"center",alignItems:"center", backgroundColor:"#54addd"}}>
     <Box>
     <Box component="img" src={image1} sx={{mx:2,width:200,height:200,borderRadius:15}}/>
     <Box sx={{mx:6,mt:1}}>
     <Button  sx={{color:"black"}} variant="contained">
            <a href="https://forextradingacademy.co.ke" style={{color:"black",textDecoration:"none"}}>Binary Bots</a>
          </Button>
     </Box>
     </Box>

     <Box>
     <Box component="img" src={tradingrobot} sx={{mx:2,width:200,height:200,borderRadius:15}}/>
     <Box sx={{mx:8,mt:1}}>
     <Button sx={{color:"black"}} variant="contained">
    <a href="https://forextradingacademy.co.ke" style={{color:"black",textDecoration:"none"}}>Forex Robots</a>
    </Button>
     </Box>
     </Box>

     <Box>
     <Box component="img" src={image3} sx={{mx:2,width:200,height:200,borderRadius:15}}/>
     <Box sx={{mx:6,mt:1}}>
     <Button sx={{color:"black"}} variant="contained">
    <a href="https://forextradingacademy.co.ke" style={{color:"black",textDecoration:"none"}}>Forex Signals</a>
    </Button>
     </Box>
     </Box>

     
     <Box>
     <Box component="img" src={image2} sx={{mx:2,width:200,height:200,borderRadius:15}}/>
     <Box sx={{mx:6,mt:1}}>
     <Button sx={{color:"black"}} variant="contained">
    <a href="https://forextradingacademy.co.ke" style={{color:"black",textDecoration:"none"}}>Forex Strategies</a>
    </Button>
     </Box>
     </Box>


    </Grid>
    <Box className={classname2} sx={{width:"100%",height:"30vh",position:"relative",display:"flex",pl:{
        lg:20,
        md:20,
        xs:1,
        sm:1
    },pt:10,color:"white"}}>
        <Box sx={{width:"25%",display:{
            lg:"block",
            md:"block",
            xs:"none",
            sm:"block"
            
        }}}>
        <Typography variant="h4" component="h4">e-mpesa<br></br> calculator</Typography>
        </Box>
        <Box sx={{mx:{
            lg:5,
            md:5,
            xs:1,
            sm:1
        }}}>
        <Typography variant="p" component="h5">Enter Amount in {sign} to Deposit</Typography>
        <TextField sx={{backgroundColor:"white", borderRadius:3,mb:1,mt:1}} 
        type="number" placeholder={sign}
         onKeyPress={event=>event.key === 'Enter' ? convertNumber(event) : null}/>
        <Typography variant="p" component="h5">Deposit USD:{deposit.toFixed(2)} </Typography>
        <Typography variant="p" component="h5">Commission Rates on Deposits-2.0%</Typography>
        </Box>

        <Box>
        <Typography variant="p" component="h5">Enter Amount in USD to Withdraw</Typography>
        <TextField sx={{backgroundColor:"white", borderRadius:3,mb:1,mt:1}} 
        type="number" placeholder="Enter Amount in USD"  onKeyPress={event=>event.key === 'Enter' ? convertNumber2(event) : null}/>
        <Typography variant="p" component="h5">You will Receive:{sign}{" "}{withdraw.toFixed(2)} </Typography>
        <Typography variant="p" component="h5">Commission Rates on Withdraws-4.5%</Typography>
        </Box>
    </Box>


       <Box sx={{textAlign:"center",mt:2}}>
        <Typography component="h4" variant="p">Why Us?</Typography>
        </Box>

    <Grid container sx={{width:"100%",height:{
        lg:"62vh",
        md:"62vh",
        xs:"100vh",
        sm:"60vh"
    },position:"relative",pt:2,color:"black",justifyContent:"center",alignItems:"center",textAlign:"center",display:"flex",mb:3}}>
        <Box sx={{width:"15%", height:{
            lg:"35vh",
            md:"35vh",
            xs:"40vh",
            sm:"40vh"
        }, backgroundColor:"#fff1e0",mx:2,p:5}}>
            <Box component="img" src={instant} sx={{width:"50px",height:"50px",mt:2}}/>
            <Typography component="p" variant="p"> Instant Exchange of E-Currency with our Fully Payment Agent Automation System</Typography>
        </Box>
        <Box sx={{width:"15%", height:{
            lg:"35vh",
            md:"35vh",
            xs:"40vh",
            sm:"40vh"
        }, backgroundColor:"#fff1e0",mx:2,p:5}}>
            <Box component="img" src={secure} sx={{width:"50px",height:"50px",mt:2}}/>
            <Typography component="p" variant="p">Very Secure Payment Agent System that is Faster, Convenient and Safer</Typography>
        </Box>
        <Box sx={{width:"15%", height:{
            lg:"35vh",
            md:"35vh",
            xs:"40vh",
            sm:"40vh"
        }, backgroundColor:"#fff1e0",mx:2,p:5}}>
            <Box component="img" src={hidden} sx={{width:"50px",height:"50px",mt:2}}/>
            <Typography component="p" variant="p">  No Hidden Fees, Lowest Rates Ever, Maximum Reliability 24/7 Customer Support </Typography>
        </Box>
    </Grid>

    <Box sx={{justifyContent:'center',alignItems:'center',textAlign:"center",height:"5vh",mt:5}}>
    <Typography component="h4" variant="p">Our Patners</Typography>
    </Box>


  <Grid container sx={{width:"100%",height:{
    lg:"30vh",
    md:"30vh",
    xs:"60vh",
    sm:"30vh"
  },justifyContent:'center',alignItems:'center',textAlign:"center"}}>
    
  <Box component="img" src={binary} sx={{width:80,height:80,mx:1}} />
  <Box component="img" src={deriv} sx={{width:80,height:80,mx:1}} />
     {sign === "KES" && 
     <>
      <Box component="img" src={lipampesa} sx={{width:80,height:80,mx:1}} />
    <Box component="img" src={airtelmoney} sx={{width:80,height:80}} />
    <Box component="img" src={tkash} sx={{width:80,height:80}} />
    <Box component="img" src={kcb} sx={{width:80,height:80,mx:2}} />
    <Box component="img" src={absa} sx={{width:80,height:80,mx:2}} />
    <Box component="img" src={standard} sx={{width:80,height:80,mx:2}} />
    <Box component="img" src={equity} sx={{width:80,height:80,mx:2}} />
    <Box component="img" src={nationalbank} sx={{width:80,height:80}} /> 
    </>
    }
     {sign === "UGX" && 
     <>
      <Box component="img" src={uglogo1} sx={{width:85,height:80,mx:1}} />
    <Box component="img" src={uglogo2} sx={{width:95,height:80}} />
    <Box component="img" src={uglogo3} sx={{width:95,height:80}} />
    </>
    }

   {sign === "TZS" && 
     <>
      <Box component="img" src={tzlogo1} sx={{width:100,height:80,mx:1}} />
    <Box component="img" src={tzlogo2} sx={{width:85,height:80,mx:1}} />
    <Box component="img" src={tzlogo3} sx={{width:128,height:80,mx:1}} />
    <Box component="img" src={tzlogo4} sx={{width:85,height:80}} />
    </>
    }

    {sign === "GHS" && 
     <>
    <Box component="img" src={ghalogo1} sx={{width:95,height:80,mx:1}} />
    <Box component="img" src={ghalogo2} sx={{width:80,height:80}} />
    </>
    }

     {sign === "ZAR" && 
     <>
    <Box component="img" src={salogo1} sx={{width:88,height:80,mx:1}} />
    <Box component="img" src={salogo2} sx={{width:95,height:80}} />
    </>
    }

    {sign === "NGN" && 
     <>
    <Box component="img" src={nigerialogo1} sx={{width:88,height:80,mx:1}} />
    <Box component="img" src={nigerialogo2} sx={{width:95,height:80}} />
    </>
    }
   <Box component="img" src={master} sx={{width:95,height:80,mx:1}} /> 
   <Box component="img" src={visa} sx={{width:95,height:80}} /> 


  </Grid>
    <Box sx={{width:"100%",height:{
        lg:"30vh",
        md:"30vh",
        xs:"40vh",
        sm:"40vh"
    },backgroundColor:"black",color:"white",textAlign:"left",justifyContent:"center",alignItems:"center",pt:5,position:"relative",mb:3}}>
     <hr style={{width:"80%"}}></hr>
     <Box sx={{left:"10%",position:"absolute"}}>
     <Typography>Disclaimer</Typography>
     <Typography>Trading binary options may not be suitable for everyone. Before trading in the complex financial products offered at Binary.com & Deriv.com.<br></br> Before trading in the complex products offered, please be sure to understand the risks involved and learn about Secure and Responsible Trading.</Typography>
     </Box>
    
    </Box>
       
        <Box sx={{position:"absolute",bottom:0,color:"white",textAlign:"center",justifyContent:"center",alignItems:"center",left:{
            lg:"0%",
            md:"0%",
            xs:"0%",
            sm:"0%"
        },backgroundColor:"black",width:"100%"}}>
            <Typography sx={{textAlign:"center"}}>Copyright © {currentYear} E-Mpesa Global</Typography>
        </Box>  
    </Box>
    );
}

export default LandingPage;