import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
// icons
import ChatIcon from "@mui/icons-material/Chat";
// actions
import { setActiveChat } from "src/store/engagement/engagement-actions";
// selectors
import { selectChatBuddies } from "src/store/engagement/engagement-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
import {
  ActiveChatType,
  BuddyType,
  ChatBuddyType,
} from "src/types/engagement-types";
// styles
import styles from "./ChatBuddyList.module.scss";

const ChatBuddyList = (): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const chatBuddies: ChatBuddyType[] | [] = useSelector(selectChatBuddies);

  const handleBuddyClick =
    (activeChat: ActiveChatType): (() => void) =>
    (): void => {
      dispatch(setActiveChat(activeChat));
    };

  type BuddyProps = {
    roomId: string;
    buddy: BuddyType;
    latestMessage: string;
  };
  const Buddy = memo(({ buddy, latestMessage, roomId }: BuddyProps) => {
    const { username, imageUrl } = buddy;
    return (
      <section
        className={styles["buddy"]}
        onClick={handleBuddyClick({ buddy, roomId })}
      >
        <img alt={username} className={styles["buddy__image"]} src={imageUrl} />
        <section className={styles["buddy__details"]}>
          <div className={styles["buddy__title"]}>{username}</div>
          <span className={styles["last__message"]}>
            <ChatIcon />
            {latestMessage}
          </span>
        </section>
      </section>
    );
  });

  return (
    <section className={styles["buddy-list"]}>
      {chatBuddies?.map((chatBuddy: ChatBuddyType, index: number) => {
        const { buddy, chatRoom, _id } = chatBuddy;
        return (
          <Buddy
            roomId={chatRoom._id}
            key={_id}
            buddy={buddy}
            latestMessage={chatRoom?.latestMessage}
          />
        );
      })}
    </section>
  );
};
export { ChatBuddyList };

