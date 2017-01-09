var W3CWebSocket = require('websocket').w3cwebsocket;

//her finder klienten serverens port og der bliver lavet en socket.
var client = new W3CWebSocket('ws://localhost:3000/', 'echo-protocol');
var number = 0;

client.onerror = function() {
  console.log('Connection Error');
};

client.onopen = function() {
  console.log('WebSocket Client Connected');

  function sendNumber() {
    if (client.readyState === client.OPEN) {
        //Hvis tallet når op på 5 så lukker vi connection.
        if (number === 5){
            console.log("vi lukker og slukker")
            client.close()
        } else {
            ++number;
            client.send(number.toString());
            setTimeout(sendNumber, 2000);
        }
    }
  }
  sendNumber();
};

client.onclose = function() {
  console.log('echo-protocol Client Closed');
};

client.onmessage = function(e) {
  if (typeof e.data === 'string') {
    console.log("Received: '" + e.data + "'");
  }
};