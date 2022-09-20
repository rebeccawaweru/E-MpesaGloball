const WebSocket = require ('ws');
const express = require('express');
const cors = require('cors');
const http = require('http');
const { start } = require('repl');
const app = express();

// app.use((req,res,next)=>{
//   res.header('Access-Control-Allow-Origin', '*')
//   next()
// })
app.use(cors());
var reconnectInterval = 1000 * 10
  var connect = function(){
  const ws = new WebSocket ('wss://marketdata.tradermade.com/feedadv');
  ws.on('open', function open() {
      ws.send("{\"userKey\":\"wszBInchimt9Kdu7Cp1A\", \"symbol\":\"GBPUSD,EURUSD,BTCUSD,BTCEUR,USDJPY\"}");
  });
  ws.on('close', function() {
    console.log('socket close : will reconnect in ' + reconnectInterval );
    setTimeout(connect, reconnectInterval)
  });
  ws.on('message', function incoming(data) {
    if(data != "Connected"){
            data = JSON.parse(data)
            console.log(data)
          
    }
  });
  };



const port = 5000
const server = http.createServer(app);

const get = (req,res)=>{
  const ws = new WebSocket ('wss://marketdata.tradermade.com/feedadv');
  ws.on('open', function open() {
      ws.send("{\"userKey\":\"wszBInchimt9Kdu7Cp1A\", \"symbol\":\"GBPUSD,EURUSD,BTCUSD,BTCEUR,USDJPY\"}");
  });
  ws.on('close', function() {
    console.log('socket close : will reconnect in ' + reconnectInterval );
    setTimeout(connect, reconnectInterval)
  });
  ws.on('message', function incoming(data) {
    if(data != "Connected"){
            data = JSON.parse(data)
            console.log(data)
          
    }
  });
}
server.listen(port, ()=>{
  console.log(`Server is listening on port ${port}.......`);
  get()
})


