require('dotenv').config()
const WebSocket = require ('ws');
const express = require('express');
const cors = require('cors');
const http = require('http');
const { start } = require('repl');
const app = express();
let forex = []
// app.use((req,res,next)=>{
//   res.header('Access-Control-Allow-Origin', '*')
//   next()
// })
const APIKEY = "cQpKYm_3bmhUUG0ckzaqkMVi6DGyOZWj"
app.use(cors());
var reconnectInterval = 1000 * 10
  var connect = function(){
    const ws = new WebSocket('wss://socket.polygon.io/forex')
    ws.on('open', () => {
      console.log('Connected!')
      ws.send(`{"action":"auth","params":"${APIKEY}"}`)
      ws.send(`{"action":"subscribe","params":"GBPUSD,EURUSD,BTCUSD,BTCEUR,USDJPY"}`)
    })


  ws.on('close', function() {
    console.log('socket close : will reconnect in ' + reconnectInterval );
    setTimeout(connect, reconnectInterval)
  });

  ws.on('message', ( data ) => {
    data = JSON.parse( data )
    forex.push(data)
  })
  ws.on('message', function incoming(data) {
    if(data != "Connected"){
      data = JSON.parse(data)
      forex.push(data)

    }
  });

  };

const port =  process.env.PORT || 5000
const server = http.createServer(app);

app.get('/',(req,res)=>{
  res.status(200).send(forex.slice(-7))
})

server.listen(port, ()=>{
  console.log(`Server is listening on port ${port}.......`);
 connect()
})


