export type MessageType = {
  isSender: boolean;
  name: string;
  message: string;
  messageDate: Date;
}

export interface useChatRoomCoreStoreType {
  userLock: boolean;
  userName: string;
  readyToSendMessage: string;
  informationMessageArray: MessageType[];
}

export const useChatRoomCoreStore = defineStore('useChatRoomCoreStore', {
  state: (): useChatRoomCoreStoreType => {
    return {
      userLock: false,
      userName: '',
      readyToSendMessage: '',
      informationMessageArray: [],
    }
  },
  actions: {
    setUserLock(isLock: boolean) {
      if (this.userName.trim() === '') return;
      this.userLock = isLock;
    },
    appendInformationMessageObject(messageObject: MessageType) {
      this.informationMessageArray.push(messageObject);
    }
  }
})
