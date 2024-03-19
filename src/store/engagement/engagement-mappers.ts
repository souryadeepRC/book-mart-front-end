import {
  ActiveChatMessageType,
  ActiveChatType,
  ChatBuddyType,
  ChatMessageType,
} from "src/types/engagement-types";

export const mapChatBuddies = (chatBuddies: ChatBuddyType[] | []) => {
  let activeChat: ActiveChatType = {
    buddy: undefined,
    roomId: "",
  };

  if (chatBuddies?.length > 0) {
    const latestChatBuddy: ChatBuddyType = chatBuddies[0];
    activeChat = {
      buddy: latestChatBuddy?.buddy || undefined,
      roomId: latestChatBuddy?.chatRoom?._id || "",
    };
  }
  return {
    chatBuddies,
    activeChat,
  };
};

export const mapNewChatMessage = (
  activeChatMessage: ActiveChatMessageType,
  newChatMessage: ChatMessageType
) => {
  const activeMessages = [...activeChatMessage.messages];
  const modifiedActiveChatMessage = {
    ...activeChatMessage,
    messages: [newChatMessage, ...activeMessages],
  };

  return {
    activeChatMessage: modifiedActiveChatMessage,
  };
};
