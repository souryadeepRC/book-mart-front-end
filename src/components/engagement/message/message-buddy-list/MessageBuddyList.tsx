import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// icons
import ChatIcon from "@mui/icons-material/Chat";
// actions
import {
  fetchMessageBuddies,
  setActiveBuddy,
} from "src/store/engagement/engagement-actions";
// selectors
import { selectMessageBuddies } from "src/store/engagement/engagement-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
// styles
import styles from "./MessageBuddyList.module.scss";

const MessageBuddyList = (): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const messageBuddies: any = useSelector(selectMessageBuddies);

  useEffect(() => {
    dispatch(fetchMessageBuddies());
  }, [dispatch]);

  const handleBuddyClick = (buddyDetails: any) => () => {
    dispatch(setActiveBuddy(buddyDetails));
  };

  type BuddyProps = {
    buddy: { _id: string; name: string; imageUrl: string; lastMessage: string };
  };
  const Buddy = memo(({ buddy }: BuddyProps) => {
    const { name, imageUrl, lastMessage } = buddy;
    return (
      <section className={styles["buddy"]} onClick={handleBuddyClick(buddy)}>
        <img alt={name} className={styles["buddy__image"]} src={imageUrl} />
        <section className={styles["buddy__details"]}>
          <div className={styles["buddy__title"]}>{name}</div>
          <span className={styles["last__message"]}>
            <ChatIcon />
            {lastMessage}
          </span>
        </section>
      </section>
    );
  });

  return (
    <section className={styles["buddy-list"]}>
      {messageBuddies?.length === 0 ? (
        <span className={styles["empty-record-msg"]}>Add your buddy</span>
      ) : (
        messageBuddies?.map((buddy: any, index: number) => {
          return <Buddy key={index} buddy={buddy} />;
        })
      )}
    </section>
  );
};
export { MessageBuddyList };

