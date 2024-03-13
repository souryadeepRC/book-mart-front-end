import { useEffect, useRef } from "react";
// components
import { MessageInput } from "./MessageInput";
// styles
import { useDispatch, useSelector } from "react-redux";
import { setActiveBuddyMessage } from "src/store/engagement/engagement-actions";
import {
  selectActiveBuddy,
  selectActiveBuddyMessages,
} from "src/store/engagement/engagement-selectors";
import styles from "./MessageBox.module.scss";

const MessageBox = (): JSX.Element => {
  // store
  const dispatch = useDispatch();
  const activeBuddy = useSelector(selectActiveBuddy);
  const messages = useSelector(selectActiveBuddyMessages);

  const profileUserId = "4567";

  /* const [messages, setMessages] = useState(messagesDummy); */
  const receiveMessage = () => {
    dispatch(
      setActiveBuddyMessage({
        _id: "12",
        userId: activeBuddy._id,
        message: Array(12).fill("Welcome ").join(""),
      })
    );
  };
  const sendMessage = (message: string) => {
    if (!message) return;
    dispatch(
      setActiveBuddyMessage({
        _id: "12",
        userId: profileUserId,
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
  if (!activeBuddy._id) {
    <section className={styles["message-box__container"]}>
      <span></span>
    </section>;
  }
  return (
    <section className={styles["message-box__container"]}>
      <div className={styles["message__recipient"]} onClick={receiveMessage}>
        <img
          alt={activeBuddy.name}
          className={styles["buddy__image"]}
          src={activeBuddy.imageUrl}
        />
        <span>{activeBuddy.name}</span>
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
        <MessageInput sendPropsMessage={sendMessage} />
      </section>
    </section>
  );
};
export { MessageBox };

