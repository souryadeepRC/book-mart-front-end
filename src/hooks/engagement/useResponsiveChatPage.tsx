import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// selectors
import { selectIsMobile } from "src/store/screen/screen-selectors";

type useResponsiveChatPageReturnType = {
  isMobileChatRoom: boolean;
  isMobileChat: boolean;
  onChatRoomClick: (() => void) | undefined;
  onChatBoxBack: (() => void) | undefined;
};
export const useResponsiveChatPage = (): useResponsiveChatPageReturnType => {
  // store
  const isMobile: boolean = useSelector(selectIsMobile);
  // state
  const [isChatRoomView, setIsChatRoomView] = useState<boolean>(true);

  // effects
  useEffect(() => {
    if (isMobile) {
      setIsChatRoomView(true);
    }
  }, [isMobile]);

  // callbacks
  const onChatRoomClick = isMobile
    ? () => {
        setIsChatRoomView(false);
      }
    : undefined;
  const onChatBoxBack = isMobile
    ? () => {
        setIsChatRoomView(true);
      }
    : undefined;

  const isMobileChatRoom: boolean = isMobile && isChatRoomView;
  const isMobileChat: boolean = isMobile && !isChatRoomView;
  return {
    isMobileChatRoom,
    isMobileChat,
    onChatRoomClick,
    onChatBoxBack,
  };
};
