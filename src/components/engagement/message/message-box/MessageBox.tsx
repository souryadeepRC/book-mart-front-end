// styles
import SendIcon from '@mui/icons-material/Send';
import { InputAdornment } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { TextField } from "src/components/common/CommonComponents";
import styles from "./MessageBox.module.scss";

const MessageBox = (): JSX.Element => {
  const displayName = "Dipak";
  const messagesDummy = [
    {
      _id: "1234",
      text: `Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello 
      Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello 
      Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
      o Hello Hello Hello Hello Hello Hello Hello 
      Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello `,
      userId: "1456",
    },
    {
      _id: "1234",
      text: "Good Morning!",
      userId: "1456",
    },
    {
      _id: "1234",
      text: "Hi",
      userId: "4567",
    },
    {
      _id: "1234",
      text: "What's up?",
      userId: "1456",
    },
    {
      _id: "1234",
      text: "Eating",
      userId: "4567",
    },
  ];

  const [messages, setMessages] = useState(messagesDummy);
  const [userMessage, setUserMessage] = useState("");
  const receiveMessage = () => {
    setMessages((messages) => {
      return [
        ...messages,
        {
          _id: "1234",
          text: `Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello 
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello 
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        o Hello Hello Hello Hello Hello Hello Hello 
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello `,
          userId: "1456",
        },
      ];
    });
  };
  const sendMessage = () => {
    setMessages((messages) => {
      return [
        ...messages,
        {
          _id: "1234",
          text: userMessage,
          userId: "4567",
        },
      ];
    });
    setUserMessage("");
  };
  const profileUserId = "4567";
  const messagesEndRef = useRef<any>(null);

  useEffect(() => {
      scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
      if (messagesEndRef.current) {
          messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
  };
  return (
    <section className={styles["message-box__container"]}>
      <div className={styles["message__recipient"]} onClick={receiveMessage}>
        {displayName}
      </div>
      <section className={styles["message__box"]}>
        <section className={styles["message__list"]}>
          {messages?.map(({ text, userId }, index) => {
            const isSent: boolean = profileUserId === userId;
            return (
              <div
                key={index}
                className={`${styles["message"]} ${isSent && styles["sender"]}`}
              >
                {text}
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </section>
        <TextField
          value={userMessage}
          InputProps={{
            placeholder: "Search",
            endAdornment: (
              <InputAdornment position="end" onClick={sendMessage}>
                <SendIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setUserMessage(e.target.value)}
        />
      </section>
    </section>
  );
};
export { MessageBox };

