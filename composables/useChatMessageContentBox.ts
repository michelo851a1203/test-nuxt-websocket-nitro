import { v4 as uuid } from 'uuid';
export const useChatMessageContentBox = () => {
  const {
    informationMessageArray,
  } = storeToRefs(useChatRoomCoreStore());

  const filterDateInformationMessageArray = computed(() => {
    const filterNewInformationArray = informationMessageArray.value.map((informationMessage) => {
      const { isSender, name, message, messageDate } = informationMessage;

      let month = `${messageDate.getMonth() + 1}`;
      month = month.length === 1 ? `0${month}` : month;

      let day = `${messageDate.getDate() + 1}`;
      day = day.length === 1 ? `0${day}` : day;
      const newMessageDate = `${messageDate.getFullYear()}-${month}-${day}`;

      return {
        id: uuid(),
        isSender,
        name,
        message,
        messageDate: newMessageDate,
      }
    })

    return filterNewInformationArray;
  })


  return {
    filterDateInformationMessageArray,
  }
}
