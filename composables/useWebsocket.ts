import { v4 as uuid } from 'uuid'

type ReceiveFromOtherUserType = {
  name: string;
  message: string;
}

export const useWebsocket = () => {
  const { $socket } = useNuxtApp();
  const socketService = $socket as WebSocket;
  const {
    appendInformationMessageObject,
  } = useChatRoomCoreStore();

  const {
    userName,
    readyToSendMessage,
  } = storeToRefs(useChatRoomCoreStore());

  onMounted(() => {
    socketService.onopen = () => {
      console.log('socket open ');
      // const connectionID = `connection-id-${uuid()}`;
      // socketService.send(connectionID);
      // localStorage.setItem('chat-connection-id', connectionID);
      // console.log('connected....');
    }

    socketService.onmessage = (event: MessageEvent<string>) => {
      console.log('trigger on message');
      const receiveFromOtherUserInformation = event.data;
      const { name, message } = JSON.parse(receiveFromOtherUserInformation) as ReceiveFromOtherUserType;

      appendInformationMessageObject({
        name,
        isSender: false,
        message,
        messageDate: new Date(),
      });
    }

    socketService.onclose = () => {
      console.log('close connection');
    }

    socketService.onerror = () => {
      console.log('connect to websocket server error : ', socketService.url)
    }
  });

  const sendMessage = async () => {
    const senderConnectionID = localStorage.getItem('chat-connection-id');
    if (senderConnectionID === null || senderConnectionID.trim() === '') return;

    const body = {
      senderConnectionID,
      message: readyToSendMessage.value,
      userName,
    }

    const { data } = await useFetch('/api/sendMessage', {
      method: 'POST',
      redirect: 'follow',
      body,
    })

    const statusObject = data.value;
    if (statusObject === null) return;
    const { status } = statusObject;
    if (status !== 0) return;

    appendInformationMessageObject({
      name: userName.value,
      isSender: true,
      message: readyToSendMessage.value,
      messageDate: new Date(),
    });
  }

  const testSend = () => {
    socketService.send('connection id testing');
  }

  return {
    readyToSendMessage,
    sendMessage,
    testSend,
  }
}
