import { memo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Location,
  NavigateFunction,
  useLocation,
  useNavigate,
} from "react-router-dom";
// icons
import ChatIcon from "@mui/icons-material/Chat";
// Common Components
import {
  AutoScrollRecords,
  Button,
  Loader
} from "src/components/common/CommonComponents";
// hooks
import { useChatBuddies } from "src/hooks/engagement/useChatBuddies";
// selectors
import { selectEngagementIsLoading } from "src/store/engagement/engagement-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
import { ChatBuddyType } from "src/types/engagement-types";
// utils
import { formatStringToDate } from "src/utils/date-utils";
// styles
import styles from "./ChatBuddyList.module.scss";

const ChatBuddyList = memo((): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  // router
  const location: Location = useLocation();
  // ref
  const contentRefs = {
    childRef: useRef<HTMLDivElement>(null),
    parentRef: useRef<HTMLDivElement>(null),
  };
  // hooks
  const navigate: NavigateFunction = useNavigate();
  const { fetchNextBuddies, buddies, isLastPage, isInitialRendered } =
    useChatBuddies(contentRefs);

  const setActiveChatRoom = (roomId: string) => () => {
    dispatch(setActiveChatRoom(roomId));
  };

  const Buddy = memo(
    ({ chatBuddy }: { chatBuddy: ChatBuddyType }): JSX.Element => {
      const { _id: roomId, updated_ts, members, latestMessage } = chatBuddy;
      const { username = "", imageUrl = "" } = members?.[0];
      const lastMessageDate: string = formatStringToDate(updated_ts);
      return (
        <section
          className={styles["buddy"]}
          onClick={setActiveChatRoom(roomId)}
        >
          <img alt={username} src={imageUrl} />
          <article>
            <header>
              <span className={styles["title"]}>{username}</span>
              {/* <span className={styles["msg-date"]}>{lastMessageDate}</span> */}
            </header>
            <div className={styles["last__message"]}>
              <ChatIcon />
              <span>{latestMessage}</span>
            </div>
          </article>
        </section>
      );
    }
  );
  const EmptyBuddyPage = (): JSX.Element => {
    const isLoading: boolean = useSelector(selectEngagementIsLoading);
    return (
      <>
        <Loader loading={isLoading} />
        {!isLoading && (
          <section className={styles["empty-record-msg"]}>
            <span>You haven't send any message to your buddy</span>
            <Button
              variant="contained"
              onClick={() => navigate("/engagement/buddy")}
            >
              Message your Buddy
            </Button>
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
      className={styles["buddy__list"]}
      records={buddies}
      fetchNextRecords={fetchNextBuddies}
      hasMore={!isLastPage}
      emptyRecordPage={EmptyBuddyPage}
    >
      {buddies?.map((chatBuddy: ChatBuddyType, index: number) => {
        return <Buddy key={index} chatBuddy={chatBuddy} />;
      })}
    </AutoScrollRecords>
  );
});
ChatBuddyList.displayName = "ChatBuddyList";
export { ChatBuddyList };

