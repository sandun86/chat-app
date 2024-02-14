var socket = new WebSocket("ws://localhost:8080/ws");

const connect = (chatHistory, userName) => {
  console.log("Attempting Connection...");

  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = (msg) => {
    chatHistory(msg);
  };

  socket.onclose = (event) => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = (error) => {
    console.log("Socket Error: ", error);
  };
};

let sendMsg = (msg, userName, msgType) => {
  console.log('SEND MESSAGE')
  const payload = {
    user_id: userName,
    type: msgType,
    body: msg,
  };
  socket.send(JSON.stringify(payload));
};

export { connect, sendMsg };
