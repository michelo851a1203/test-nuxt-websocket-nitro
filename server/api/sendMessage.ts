export enum SendMessageResponseStatus {
  NO_SENDER_CONNECTION_ID = -1,
  NOT_GET_ANY_CLIENT_ARRAY = -2,
  NOT_GET_USER_NAME = -3,
  SUCCESS = 0,
}

export default defineEventHandler(async (event) => {
  const { message = '', senderConnectionID = '', userName = '' } = await readBody(event);
  if (senderConnectionID === '') return { status: SendMessageResponseStatus.NO_SENDER_CONNECTION_ID };
  if (userName === '') return { status: SendMessageResponseStatus.NOT_GET_USER_NAME };
  if (!global.clients || global.clients.length === 0) return { status: SendMessageResponseStatus.NOT_GET_ANY_CLIENT_ARRAY };

  global.clients.forEach((client) => {
    if (client.id === senderConnectionID || client.readyState !== WebSocket.OPEN) return;
    const sendMessageInformation = {
      name: userName,
      message,
    }
    client.send(JSON.stringify(sendMessageInformation));
  });

  return {
    status: SendMessageResponseStatus.SUCCESS,
  }
})
