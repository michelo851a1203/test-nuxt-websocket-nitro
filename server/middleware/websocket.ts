import WebSocket ,{ WebSocketServer } from 'ws'

type Client = {
  id: string;
  send: (message: string) => void;
  readyState: number;
}

declare global {
  var webSocketService: WebSocketServer;
  var clients: Client[];
}

export default defineEventHandler((event) => {
  if (global.webSocketService) return;
  const socketService = new WebSocketServer({ port: 8080 });

  socketService.on('connection', (socket) => {
    console.log('trigger connection');
    socket.send('connection here');

    socket.on('message', (receiveConnectionUUID) => {
      console.log('trigger message');
      console.log('receive uuid : ', receiveConnectionUUID);
      socketService.clients.forEach((client) => {
        if (client !== socket || client.readyState !== WebSocket.OPEN) return;
        const currentClient: Client = {
          id: receiveConnectionUUID.toString(),
          send: (message: string) => client.send(message),
          readyState: client.readyState,
        }
        global.clients.push(currentClient);
      })
    })
  });
  global.webSocketService = socketService;
});
