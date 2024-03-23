import { memo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// icons
import ChatIcon from "@mui/icons-material/Chat";
// Common Components
import {
  AutoScrollRecords,
  Loader,
} from "src/components/common/CommonComponents";
// hooks
import { useChatRooms } from "src/hooks/engagement/useChatRooms";
// actions
import { setActiveChatRoom } from "src/store/engagement/engagement-actions";
// selectors
import { selectEngagementIsLoading } from "src/store/engagement/engagement-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
import { ChatRoomType } from "src/types/engagement-types";
// styles
import styles from "./ChatRooms.module.scss";

const ChatRooms = memo((): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  // ref
  const contentRefs = {
    childRef: useRef<HTMLDivElement>(null),
    parentRef: useRef<HTMLDivElement>(null),
  };
  // hooks
  const { fetchNexRooms, rooms, isLastPage, isInitialRendered } =
    useChatRooms(contentRefs);

  const handleChatRoomClick = (roomId: string) => () => {
    dispatch(setActiveChatRoom(roomId));
  };

  const Room = memo(({ room }: { room: ChatRoomType }): JSX.Element => {
    const { _id: roomId, members, latestMessage } = room;
    const { username = "", imageUrl = "" } = members;
    return (
      <section
        className={styles["chat-room"]}
        onClick={handleChatRoomClick(roomId)}
      >
        <img alt={username} src={imageUrl} />
        <article>
          <header>
            <span className={styles["title"]}>{username}</span>
          </header>
          <div className={styles["last__message"]}>
            <ChatIcon />
            <span>{latestMessage}</span>
          </div>
        </article>
      </section>
    );
  });
  const EmptyRoomPage = (): JSX.Element => {
    const isLoading: boolean = useSelector(selectEngagementIsLoading);
    return (
      <>
        <Loader loading={isLoading} />
        {!isLoading && (
          <section className={styles["empty-record-msg"]}>
            <span>
              Click <strong>New Chat</strong>
            </span>
            <span>Send a message to your buddy</span>
          </section>
        )}
      </>
    );
  };

  if (!isInitialRendered) {
    return <Loader />;
  }

  return (
    <AutoScrollRecords
      refs={contentRefs}
      className={styles["chat-room__list"]}
      records={rooms}
      fetchNextRecords={fetchNexRooms}
      hasMore={!isLastPage}
      emptyRecordPage={EmptyRoomPage}
    >
      {rooms?.map((chatRoom: ChatRoomType, index: number) => {
        return <Room key={index} room={chatRoom} />;
      })}
    </AutoScrollRecords>
  );
});
ChatRooms.displayName = "ChatRooms";
export { ChatRooms };

