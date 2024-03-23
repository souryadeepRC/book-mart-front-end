import { useDispatch } from "react-redux";
// icons
import ChatIcon from "@mui/icons-material/Chat";
// common components
import { Button, SearchBox } from "src/components/common/CommonComponents";
// components
import { ChatRooms } from "../chat-rooms/ChatRooms";
// actions
import { setChatRoomSearchText } from "src/store/engagement/engagement-actions";
// types
import { AppDispatch } from "src/store/reducer-types";
// styles
import styles from "./ChatBuddy.module.scss";

const ChatBuddy = () => {
  // store
  const dispatch: AppDispatch = useDispatch();
  // callbacks
  const onSearch = (searchText: string) => {
    dispatch(setChatRoomSearchText(searchText));
  };
  return (
    <section className={styles["buddies__container"]}>
      <Button variant="contained">
        <ChatIcon />
        &nbsp;New Chat
      </Button>
      <SearchBox placeholder="search buddy" onSearch={onSearch} />
      <ChatRooms />
    </section>
  );
};
export { ChatBuddy };

