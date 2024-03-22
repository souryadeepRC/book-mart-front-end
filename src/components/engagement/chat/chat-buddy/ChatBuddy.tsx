// icons
import ChatIcon from "@mui/icons-material/Chat";
// components
import { Button, SearchBox } from "src/components/common/CommonComponents";
import { ChatBuddyList } from "../chat-buddy-list/ChatBuddyList";
// styles
import styles from "./ChatBuddy.module.scss";

const ChatBuddy = () => {
  return (
    <section className={styles["buddies__container"]}>
      <Button variant="contained">
        <ChatIcon /> New Chat
      </Button>
      <SearchBox placeholder="search buddy"/>
      <ChatBuddyList />
    </section>
  );
};
export { ChatBuddy };

