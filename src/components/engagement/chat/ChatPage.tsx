// components
import { ChatBox } from "./chat-box/ChatBox";
import { ChatBuddy } from "./chat-buddy/ChatBuddy";
// styles
import styles from "./ChatPage.module.scss";

const ChatPage = (): JSX.Element => {
  return (
    <section className={styles["chat-page__container"]}>
      <ChatBuddy />
      <ChatBox />
    </section>
  );
};
export { ChatPage };

