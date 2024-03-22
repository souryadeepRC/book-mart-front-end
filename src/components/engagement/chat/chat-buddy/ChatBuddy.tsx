// icons
import ChatIcon from "@mui/icons-material/Chat";
// common components
import { Button, SearchBox } from "src/components/common/CommonComponents";
// components
import { ChatRooms } from "../chat-rooms/ChatRooms";
// styles
import styles from "./ChatBuddy.module.scss";

const ChatBuddy = () => {
  return (
    <section className={styles["buddies__container"]}>
      <Button variant="contained">
        <ChatIcon />
        &nbsp;New Chat
      </Button>
      <SearchBox placeholder="search buddy" />
      <ChatRooms />
    </section>
  );
};
export { ChatBuddy };

