import {
  ActiveChatRoomType,
  ChatBuddiesType,
  ChatBuddyType,
  ChatMessageType,
  PrevMessagePayloadType,
} from "src/types/engagement-types";

export const mapChatBuddies = (
  existingBuddies: ChatBuddyType[] | [],
  chatBuddies: ChatBuddiesType
) => {
  const { page, pageSize, isLastPage, buddies: nextBuddies } = chatBuddies;

  return {
    chatBuddies: {
      page,
      pageSize,
      isLastPage,
      buddies: [...existingBuddies, ...nextBuddies],
    },
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
