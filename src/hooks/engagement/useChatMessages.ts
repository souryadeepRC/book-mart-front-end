import { RefObject, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchMessages } from "src/store/engagement/engagement-actions";
// selectors
import { selectActiveChatroom } from "src/store/engagement/engagement-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
import {
  ActiveChatRoomType,
  BuddyType,
  ChatMessageType,
} from "src/types/engagement-types";
// utils
import { isSpaceAvailable } from "src/utils/common-utils";

type useChatMessagesReturnType = {
  fetchPrevMessages: () => void;
  messages: ChatMessageType[] | [];
  members: BuddyType[] | [];
  isLastPage: boolean;
  isInitialRendered: boolean;
};
type contentRefsType = {
  childRef: RefObject<HTMLDivElement>;
  parentRef?: RefObject<HTMLDivElement>;
};
export const useChatMessages = (
  contentRefs: contentRefsType
): useChatMessagesReturnType => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const {
    roomId,
    messages,
    members,
    isLastPage,
    page,
    pageSize,
  }: ActiveChatRoomType = useSelector(selectActiveChatroom);
  // ref
  const initialRenderRef = useRef<boolean>(false);

  // callbacks
  const loadMessages = useCallback(
    (roomId: string, page: number, pageSize: number): void => {
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

  const fetchPrevMessages = useCallback((): void => {
    loadMessages(roomId, page + 1, pageSize);
  }, [loadMessages, roomId, page, pageSize]);

  // effects
  useEffect(() => {
    if (!initialRenderRef.current && roomId) {
      loadMessages(roomId, 1, pageSize);
      initialRenderRef.current = true;
    }
    return () => {
      initialRenderRef.current = false;
    }
  }, [roomId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (
      !isLastPage &&
      isSpaceAvailable(contentRefs.childRef, contentRefs.parentRef)
    ) {
      fetchPrevMessages();
    }
  }, [
    messages,
    isLastPage,
    contentRefs.childRef,
    contentRefs.parentRef,
    fetchPrevMessages,
  ]);

  const isInitialRendered: boolean = page !== 0;

  return {
    fetchPrevMessages,
    messages,
    members,
    isLastPage,
    isInitialRendered,
  };
};
