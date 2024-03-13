import { useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
// common components
import { Button, Loader } from "src/components/common/CommonComponents";
// components
import { MessageBox } from "./message-box/MessageBox";
import { MessageBuddyList } from "./message-buddy-list/MessageBuddyList";
// selectors
import {
  selectEngagementIsLoading,
  selectIsMessageBuddyPresent,
} from "src/store/engagement/engagement-selectors";
// styles
import styles from "./MessagePage.module.scss";

const MessagePage = (): JSX.Element => {
  // store
  const isLoading = useSelector(selectEngagementIsLoading);
  const isBuddyPresent: boolean = useSelector(selectIsMessageBuddyPresent);
  // hooks
  const navigate: NavigateFunction = useNavigate();

  if (isLoading) {
    <Loader loading={isLoading} />;
  }
  if (!isBuddyPresent) {
    return (
      <section className={styles["empty-record-msg"]}>
        <span>You haven't send any message to your buddy</span>
        <Button variant="contained" onClick={() => navigate("/engagement/buddy")}>
          Message your Buddy
        </Button>
      </section>
    );
  }

  return (
    <>
      <section className={styles["message-page__container"]}>
        <MessageBuddyList />
        <MessageBox />
      </section>
    </>
  );
};
export { MessagePage };

