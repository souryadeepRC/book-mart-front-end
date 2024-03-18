import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import { ChatInput } from "./ChatInput";
// actions
import { sendMessage } from "src/store/engagement/engagement-actions";
// selectors
import {
  selectActiveChat,
  selectActiveChatMessages,
} from "src/store/engagement/engagement-selectors";
import { selectUserId } from "src/store/user/user-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
import { ActiveChatType, ChatMessageType } from "src/types/engagement-types";
// styles
import styles from "./ChatBox.module.scss";

const ChatBox = (): JSX.Element => {
  // store
  const dispatch:AppDispatch = useDispatch();
  const activeChat: ActiveChatType = useSelector(selectActiveChat);
  const messages: ChatMessageType[] | [] = useSelector(
    selectActiveChatMessages
  );
  const profileUserId: string = useSelector(selectUserId);

  const sendChatMessage = (message: string) => {
    if (!message) return;
    dispatch(
      sendMessage({
        roomId: activeChat.roomId,
        sender: profileUserId,
        receiver: activeChat?.buddy?._id || "",
        message: message,
      })
    );
  };

  const messagesEndRef = useRef<any>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  if (!activeChat.roomId) {
    <section className={styles["message-box__container"]}>
      <span></span>
    </section>;
  }
  const { buddy: activeBuddy } = activeChat;
  return (
    <section className={styles["message-box__container"]}>
      <div className={styles["message__recipient"]}>
        <img
          alt={activeBuddy?.username}
          className={styles["buddy__image"]}
          src={activeBuddy?.imageUrl}
        />
        <span>{activeBuddy?.username}</span>
      </div>
      <section className={styles["message__box"]}>
        <section className={styles["message__list"]}>
          {messages?.map(
            ({ _id, message, sender }: ChatMessageType, index: number) => {
              const isSent: boolean = profileUserId === sender;
              return (
                <div
                  key={_id}
                  className={`${styles["message"]} ${
                    isSent && styles["sender"]
                  }`}
                >
                  {message}
                </div>
              );
            }
          )}
          <div ref={messagesEndRef} />
        </section>
        <ChatInput sendPropsMessage={sendChatMessage} />
      </section>
    </section>
  );
};
export { ChatBox };

