import { io } from "socket.io-client";

let socket: any = undefined;

const establishConnection = (userId: string) => {
  socket = io(`${process.env.REACT_APP_SOCKET_API_BASE_URL}`);
  socket.emit("setup", userId);
  console.log('establishConnection');
  
  return socket;
};
const closeConnection = () => {
  if (!socket) return;
  socket.disconnect();
};

const subscribeChatMessage = (callback: any) => {
  if (!socket) return;
  socket.on("/user/engagement/chatMessage", (response: any) => {
    console.log(response);
    if (response.action === "add-message") {
      callback(response.data);
    }
  });
};
const subscribeUserConnection = () => {
  if (!socket) return;
  socket.on("/user/engagement/join", (response: any) => {
    console.log(response);
  });
};
export {
  closeConnection,
  establishConnection,
  socket,
  subscribeChatMessage,
  subscribeUserConnection
};

