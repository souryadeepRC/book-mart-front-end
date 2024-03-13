import { useState } from "react";
// library
import { InputAdornment } from "@mui/material";
// icons
import SendIcon from "@mui/icons-material/Send";
// common components
import { TextField } from "src/components/common/CommonComponents";

const ChatInput = ({ sendPropsMessage }: any): JSX.Element => {
  // state
  const [message, setMessage] = useState<string>("");
  // callbacks
  const handleMessageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setMessage(event.target.value);
  };
  const sendMessage = (): void => {
    setMessage("");
    sendPropsMessage(message);
  };
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };
  return (
    <TextField
      value={message}
      InputProps={{
        placeholder: "Type your message",
        endAdornment: (
          <InputAdornment
            position="end"
            onClick={sendMessage}
            disablePointerEvents={message === ""}
          >
            <SendIcon />
          </InputAdornment>
        ),
      }}
      onChange={handleMessageChange}
      onKeyDown={handleKeyDown}
    />
  );
};
export { ChatInput };

