import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// library
import { InputAdornment } from "@mui/material";
// icons
import SendIcon from "@mui/icons-material/Send";
// common components
import { TextField } from "src/components/common/CommonComponents";
// actions
import { sendMessage } from "src/store/engagement/engagement-actions";
import { selectUserId } from "src/store/user/user-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
// styles
import styles from "./ChatInput.module.scss";

const ChatInput = ({ buddyId }: { buddyId: string }): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const profileUserId: string = useSelector(selectUserId);
  // router
  const { roomId = "" } = useParams();
  // state
  const [message, setMessage] = useState<string>("");
  // callbacks
  const handleMessageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setMessage(event.target.value);
  };
  const sendChatMessage = (): void => {
    if (!message) return;
    setMessage("");
    dispatch(
      sendMessage({
        roomId: roomId,
        sender: profileUserId,
        receiver: buddyId,
        message: message,
      })
    );
  };
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      sendChatMessage();
    }
  };
  return (
    <div className={styles["chat-input__message"]}>
      <TextField
        value={message}
        InputProps={{
          placeholder: "Type your message",
          endAdornment: (
            <InputAdornment
              position="end"
              onClick={sendChatMessage}
              disablePointerEvents={message === ""}
            >
              <SendIcon />
            </InputAdornment>
          ),
        }}
        onChange={handleMessageChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
export { ChatInput };

