const WebSocket = require('ws');

let HOST = 'ws://localhost:8080';
console.log(HOST);
let ws = new WebSocket(HOST);

ws.onmessage = (event) => {
  console.log(event.data + ' fuck');
};