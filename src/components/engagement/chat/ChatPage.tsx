// components
import { ChatBox } from "./chat-box/ChatBox";
import { ChatBuddy } from "./chat-buddy/ChatBuddy";
// hooks
import { useResponsiveChatPage } from "src/hooks/engagement/useResponsiveChatPage";
// styles
import styles from "./ChatPage.module.scss";

const ChatPage = (): JSX.Element => {
  // hooks
  const { isMobileChatRoom, isMobileChat, onChatRoomClick, onChatBoxBack } =
    useResponsiveChatPage();
  return (
    <section className={styles["chat-page__container"]}>
      <ChatBuddy
        onChatRoomClick={onChatRoomClick}
        className={isMobileChat ? styles["chat-page-mobile"] : ""}
      />
      <ChatBox
        onChatBoxBack={onChatBoxBack}
        className={isMobileChatRoom ? styles["chat-page-mobile"] : ""}
      />
    </section>
  );
};
export { ChatPage };

