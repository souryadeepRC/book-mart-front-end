import { memo, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
// components
// actions
// selectors
import { selectUserId } from "src/store/user/user-selectors";
// types
import { BuddyType, ChatMessageType } from "src/types/engagement-types";
// styles
import { AutoScrollRecords } from "src/components/common/CommonComponents";
import { useChatMessages } from "src/hooks/engagement/useChatMessages";
import styles from "./ChatBox.module.scss";
import { ChatInput } from "./chat-input/ChatInput";

const ChatBox = memo((): JSX.Element => {
  // store
  const profileUserId: string = useSelector(selectUserId);
  // router
  const { roomId = "" } = useParams();
  // ref
  const contentRefs = {
    childRef: useRef<HTMLDivElement>(null),
    parentRef: useRef<HTMLDivElement>(null),
  };
  // hooks
  const navigate: NavigateFunction = useNavigate();
  const {
    fetchPrevMessages,
    messages,
    members,
    isLastPage,
    isInitialRendered,
  } = useChatMessages(contentRefs);

  // effects
  useEffect(() => {
    return () => {
      console.log("reset activeChat Details");
    };
  }, []);
  const onBack = () => {
    navigate(-1);
  };

  if (!isInitialRendered) {
    return <span>Select Chat</span>;
  }
  const EmptyMessagePage = (): JSX.Element => {
    return <span>No Message</span>;
  };

  const {
    username = "",
    imageUrl = "",
    _id: buddyId = "",
  }: BuddyType = members[0];
  return (
    <section className={styles["message-box__container"]}>
      <div className={styles["message__recipient"]}>
        <span onClick={onBack}>Back</span>
        <img alt={username} className={styles["buddy__image"]} src={imageUrl} />
        <span>{username}</span>
      </div>
      <AutoScrollRecords
        refs={contentRefs}
        className={styles["message__list"]}
        records={messages}
        fetchNextRecords={fetchPrevMessages}
        hasMore={!isLastPage}
        emptyRecordPage={EmptyMessagePage}
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

