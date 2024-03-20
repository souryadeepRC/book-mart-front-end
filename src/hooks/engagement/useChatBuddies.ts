import { RefObject, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchChatBuddies } from "src/store/engagement/engagement-actions";
// selectors
import { selectChatBuddies } from "src/store/engagement/engagement-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
import { ChatBuddiesType, ChatBuddyType } from "src/types/engagement-types";
// utils
import { isSpaceAvailable } from "src/utils/common-utils";

type useChatBuddiesReturnType = {
  fetchNextBuddies: () => void;
  buddies: ChatBuddyType[] | [];
  isLastPage: boolean;
  isInitialRendered: boolean;
};
type contentRefsType = {
  childRef: RefObject<HTMLDivElement>;
  parentRef?: RefObject<HTMLDivElement>;
};
export const useChatBuddies = (contentRefs: contentRefsType): useChatBuddiesReturnType => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const { buddies, isLastPage, page, pageSize }: ChatBuddiesType =
    useSelector(selectChatBuddies);
  // ref
  const initialRenderRef = useRef<boolean>(false);

  // callbacks
  const loadChatBuddies = useCallback(
    (page: number, pageSize: number): void => {
      dispatch(
        fetchChatBuddies({
          page,
          pageSize,
        })
      );
    },
    [dispatch]
  );

  const fetchNextBuddies = useCallback((): void => {
    loadChatBuddies(page + 1, pageSize);
  }, [loadChatBuddies, page, pageSize]);

  // effects
  useEffect(() => {
    if (!initialRenderRef.current) {
      loadChatBuddies(1, pageSize);
      initialRenderRef.current = true;
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (
      !isLastPage &&
      isSpaceAvailable(contentRefs.childRef, contentRefs.parentRef)
    ) {
      fetchNextBuddies();
    }
  }, [
    buddies,
    isLastPage,
    contentRefs.childRef,
    contentRefs.parentRef,
    fetchNextBuddies,
  ]);

  const isInitialRendered: boolean = page !== 0;
  return { fetchNextBuddies, buddies, isLastPage, isInitialRendered };
};
