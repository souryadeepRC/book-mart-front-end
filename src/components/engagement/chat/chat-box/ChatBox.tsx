import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import { ChatInput } from "./ChatInput";
// actions
import {
  sendMessage,
  setActiveBuddyMessage,
} from "src/store/engagement/engagement-actions";
// selectors
import {
  selectActiveBuddyMessages,
  selectActiveChat,
} from "src/store/engagement/engagement-selectors";
import { selectUserId } from "src/store/user/user-selectors";
// types
import { ActiveChatType } from "src/types/engagement-types";
// styles
import styles from "./ChatBox.module.scss";

const ChatBox = (): JSX.Element => {
  // store
  const dispatch = useDispatch();
  const activeChat: ActiveChatType = useSelector(selectActiveChat);
  const messages = useSelector(selectActiveBuddyMessages);
  const profileUserId: string = useSelector(selectUserId);

  /* const [messages, setMessages] = useState(messagesDummy); */
  const receiveMessage = () => {
    dispatch(
      setActiveBuddyMessage({
        userId: activeChat.buddy?._id,
        message: Array(12).fill("Welcome ").join(""),
      })
    );
  };
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
      <div className={styles["message__recipient"]} onClick={receiveMessage}>
        <img
          alt={activeBuddy?.username}
          className={styles["buddy__image"]}
          src={activeBuddy?.imageUrl}
        />
        <span>{activeBuddy?.username}</span>
      </div>
      <section className={styles["message__box"]}>
        <section className={styles["message__list"]}>
          {messages?.map(({ message, userId }, index) => {
            const isSent: boolean = profileUserId === userId;
            return (
              <div
                key={index}
                className={`${styles["message"]} ${isSent && styles["sender"]}`}
              >
                {message}
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </section>
        <ChatInput sendPropsMessage={sendChatMessage} />
      </section>
    </section>
  );
};
export { ChatBox };

