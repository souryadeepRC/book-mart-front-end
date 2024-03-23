import {
  ActiveChatRoomType,
  ChatMessageType,
  ChatRoomStoreType,
  PrevMessagePayloadType,
} from "src/types/engagement-types";

export const mapChatRooms = (
  existingChatRooms: ChatRoomStoreType,
  activeChatRoom: ActiveChatRoomType,
  payload: ChatRoomStoreType
) => {
  const { page, pageSize, isLastPage, rooms: nextRooms, searchText } = payload;

  let modifiedChatRoom = undefined;
  if (page === 1 && nextRooms?.length > 0) {
    modifiedChatRoom = {
      ...activeChatRoom,
      roomId: nextRooms[0]._id,
    };
  }
  const rooms =
    page === 1 ? [...nextRooms] : [...existingChatRooms.rooms, ...nextRooms];
  return {
    chatRooms: {
      searchText,
      page,
      pageSize,
      isLastPage,
      rooms,
    },
    ...(modifiedChatRoom ? { activeChatRoom: modifiedChatRoom } : {}),
  };
};

export const mapNewChatMessage = (
  activeChatRoom: ActiveChatRoomType,
  newChatMessage: ChatMessageType
) => {
  const activeMessages = [...activeChatRoom.messages];
  return {
    activeChatRoom: {
      ...activeChatRoom,
      messages: [newChatMessage, ...activeMessages],
    },
  };
};

export const mapPrevChatMessage = (
  activeChatRoom: ActiveChatRoomType,
  payload: PrevMessagePayloadType
) => {
  const {
    messages: fetchedMessages,
    isLastPage,
    page,
    pageSize,
    roomDetails,
  } = payload;

  return {
    activeChatRoom: {
      ...activeChatRoom,
      isLastPage,
      page,
      pageSize,
      messages: [...activeChatRoom.messages, ...fetchedMessages],
      ...{ ...roomDetails },
    },
  };
};
