import { memo, useRef } from "react";
import { useSelector } from "react-redux";
// icons
import ChatIcon from "@mui/icons-material/Chat";
// Common Components
import { AutoScrollRecords } from "src/components/common/CommonComponents";
// components
import { ChatInput } from "./chat-input/ChatInput";
// hooks
import { useChatMessages } from "src/hooks/engagement/useChatMessages";
// selectors
import { selectUserId } from "src/store/user/user-selectors";
// types
import { BuddyType, ChatMessageType } from "src/types/engagement-types";
// styles
import styles from "./ChatBox.module.scss";

const ChatBox = memo((): JSX.Element => {
  // store
  const profileUserId: string = useSelector(selectUserId);
  // ref
  const contentRefs = {
    childRef: useRef<HTMLDivElement>(null),
    parentRef: useRef<HTMLDivElement>(null),
  };
  // hooks
  const {
    fetchPrevMessages,
    messages,
    members,
    isLastPage,
    isInitialRendered,
  } = useChatMessages(contentRefs);

  if (!isInitialRendered) {
    return (
      <section className={styles["empty-chat-box"]}>
        <ChatIcon />
        <span>Chat with your buddy</span>
      </section>
    );
  }
  const EmptyMessagePage = (): JSX.Element => {
    return <></>;
  };

  const {
    username = "",
    imageUrl = "",
    _id: buddyId = "",
  }: BuddyType = members?.[0];
  return (
    <section className={styles["message-box__container"]}>
      <div className={styles["message__recipient"]}>
        <img alt={username} src={imageUrl} />
        <span>{username}</span>
      </div>
      <AutoScrollRecords
        refs={contentRefs}
        className={styles["message__list"]}
        records={messages}
        fetchNextRecords={fetchPrevMessages}
        hasMore={!isLastPage}
        emptyRecordPage={EmptyMessagePage}
        inverse={true}
      >
        {messages?.map(
          ({ _id, message, sender }: ChatMessageType, index: number) => {
            const isSent: boolean = profileUserId === sender;
            return (
              <div
                key={index}
                className={`${styles["message"]} ${isSent && styles["sender"]}`}
              >
                {message}
              </div>
            );
          }
        )}
      </AutoScrollRecords>
      <ChatInput buddyId={buddyId} />
    </section>
  );
});
ChatBox.displayName = "ChatBox";
export { ChatBox };

