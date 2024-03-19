import { memo, useCallback, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
// components
import { ChatInput } from "./ChatInput";
// actions
import {
  fetchMessages,
  resetActiveChat,
  sendMessage,
} from "src/store/engagement/engagement-actions";
// selectors
import {
  selectActiveChat,
  selectActiveChatMessage
} from "src/store/engagement/engagement-selectors";
import { selectUserId } from "src/store/user/user-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
import {
  ActiveChatMessageType,
  ActiveChatType,
  ChatMessageType,
} from "src/types/engagement-types";
// styles
import styles from "./ChatBox.module.scss";

const ChatBox = memo((): JSX.Element => {
  console.log("ChatBox Rendered");

  // store
  const dispatch: AppDispatch = useDispatch();
  const { roomId, buddy }: ActiveChatType = useSelector(selectActiveChat); 
  const { page, pageSize, isLastPage, messages }: ActiveChatMessageType =
    useSelector(selectActiveChatMessage);
  const profileUserId: string = useSelector(selectUserId);
  // state

  const sendChatMessage = (message: string) => {
    if (!message) return;
    dispatch(
      sendMessage({
        roomId: roomId,
        sender: profileUserId,
        receiver: buddy?._id || "",
        message: message,
      })
    );
  };
 
  const initialMessageLoadRef = useRef<boolean>(false);

  const loadMessages = useCallback(
    (roomId: string, page: number, pageSize: number) => {
      dispatch(
        fetchMessages({
          roomId,
          page,
          pageSize,
        })
      );
    },
    [dispatch]
  );
  const fetchNextRecords = () => {
    console.log("fetchNextRecords");
    loadMessages(roomId, page + 1, pageSize);
  };
  useEffect(() => {
    console.log({ ref: initialMessageLoadRef.current });

    loadMessages(roomId, 1, pageSize);
  }, [roomId]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!initialMessageLoadRef.current) {
      loadMessages(roomId, 1, pageSize);
      initialMessageLoadRef.current = true;
    }
    return () => {
      console.log("Clean-up function executed");
      dispatch(resetActiveChat());
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const containerRef = useRef<any>(null);

  return (
    <section className={styles["message-box__container"]}>
      <div className={styles["message__recipient"]}>
        <img
          alt={buddy?.username}
          className={styles["buddy__image"]}
          src={buddy?.imageUrl}
        />
        <span>{buddy?.username}</span>
      </div>
      <section ref={containerRef} className={styles["message__box"]}>
        <InfiniteScroll
          dataLength={messages?.length || 0}
          next={fetchNextRecords}
          hasMore={!isLastPage}
          loader={<h4>Loading...</h4>}
          scrollThreshold={0.9}
          height={"100%"}
          className={styles["message__list"]}
          inverse={true}
        >
          {messages?.map(
            ({ _id, message, sender }: ChatMessageType, index: number) => {
              const isSent: boolean = profileUserId === sender;
              return (
                <div
                  key={index}
                  className={`${styles["message"]} ${
                    isSent && styles["sender"]
                  }`}
                >
                  {message}
                </div>
              );
            }
          )}
        </InfiniteScroll>
        <ChatInput sendPropsMessage={sendChatMessage} />
      </section>
    </section>
  );
});
ChatBox.displayName = "ChatBox";
export { ChatBox };

