import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
// common components
import { Button, Loader } from "src/components/common/CommonComponents";
// components
import { ChatBox } from "./chat-box/ChatBox";
import { ChatBuddyList } from "./chat-buddy-list/ChatBuddyList";
// actions
import { fetchChatBuddies } from "src/store/engagement/engagement-actions";
// selectors
import {
  selectEngagementIsLoading,
  selectIsChatBuddyPresent,
} from "src/store/engagement/engagement-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
// styles
import styles from "./ChatPage.module.scss";

const ChatPage = (): JSX.Element => { 
  
  // store
  const dispatch: AppDispatch = useDispatch();
  const isLoading: boolean = useSelector(selectEngagementIsLoading);
  const isBuddyPresent: boolean = useSelector(selectIsChatBuddyPresent);
  // hooks
  const navigate: NavigateFunction = useNavigate();
  // ref
  const initialRenderRef = useRef<boolean>(false);
  // effects
  useEffect(() => {
    if (!initialRenderRef.current) {
      dispatch(fetchChatBuddies());
      initialRenderRef.current = true;
    }
  }, [dispatch]);

  if (isLoading) {
    return <Loader loading={isLoading} />;
  }
  if (!isBuddyPresent) {
    return (
      <section className={styles["empty-record-msg"]}>
        <span>You haven't send any message to your buddy</span>
        <Button
          variant="contained"
          onClick={() => navigate("/engagement/buddy")}
        >
          Message your Buddy
        </Button>
      </section>
    );
  }

  return (
    <>
      <section className={styles["chat-page__container"]}>
        <ChatBuddyList />
        <ChatBox />
      </section>
    </>
  );
};
export { ChatPage };

