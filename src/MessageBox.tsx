import { Card, CardContent, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import openSocket from "socket.io-client";
import { Button } from "./components/common/CommonComponents";
import { AppDispatch } from "./store/reducer-types";
import { sendMessage, storeMessage } from "./store/user/user-actions";
import { selectMessages, selectUserName } from "./store/user/user-selectors";
const MessageBox = (): JSX.Element => {
  const [message, setMessage] = useState("");
  // store
  const dispatch: AppDispatch = useDispatch();
  const username = useSelector(selectUserName);
  const messages = useSelector(selectMessages);

  useEffect(() => {
    const socket = openSocket(`${process.env.REACT_APP_API_BASE_URL}`);
    socket.on("connect", () => {
      console.log("Connected to server");
    });
    socket.on("message", ({ data }) => {
      console.log(data);
      dispatch(storeMessage(data));
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    // Clean up function to disconnect the socket when component unmounts
    return () => {
      socket.disconnect();
    };
  }, [dispatch]);
  const onSendMessage = (e: any) => {
    e.preventDefault();
    dispatch(sendMessage({ message, username }));
  };
  console.log(messages);

  return (
    <>
      <TextField
        label="Message"
        value={message}
        onChange={(e: any) => setMessage(e.target.value)}
      />
      <Button onClick={onSendMessage}>Send Message</Button>
      <Card>
        {messages?.map(({ message, username }, index) => {
          return (
            <CardContent key={index}>
              <strong>{username} : </strong>
              <span>{message}</span>
            </CardContent>
          );
        })}
      </Card>
    </>
  );
};
export { MessageBox };

