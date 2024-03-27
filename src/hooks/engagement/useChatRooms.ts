import { RefObject, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchChatRooms } from "src/store/engagement/engagement-actions";
// selectors
import { selectChatRooms } from "src/store/engagement/engagement-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
import { ChatRoomStoreType, ChatRoomType } from "src/types/engagement-types";
// utils
import { isSpaceAvailable } from "src/utils/common-utils";

type useChatBuddiesReturnType = {
  fetchNexRooms: () => void;
  rooms: ChatRoomType[] | [];
  isLastPage: boolean;
  isInitialRendered: boolean;
};
type contentRefsType = {
  childRef: RefObject<HTMLDivElement>;
  parentRef?: RefObject<HTMLDivElement>;
};
export const useChatRooms = (
  contentRefs: contentRefsType
): useChatBuddiesReturnType => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const { rooms, isLastPage, page, pageSize, searchText }: ChatRoomStoreType =
    useSelector(selectChatRooms);
  // ref
  const initialRenderRef = useRef<boolean>(false);

  // callbacks
  const loadChatRooms = useCallback(
    (page: number, pageSize: number, searchText: string): void => {
      dispatch(
        fetchChatRooms({
          page,
          pageSize,
          searchText,
        })
      );
    },
    [dispatch]
  );

  const fetchNexRooms = useCallback((): void => {
    loadChatRooms(page + 1, pageSize, searchText);
  }, [loadChatRooms, page, pageSize, searchText]);

  // effects
  // when search text change or initial load
  useEffect(() => {
    if (!initialRenderRef.current) {
      loadChatRooms(1, pageSize, searchText);
      initialRenderRef.current = true;
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (page === 0) return;
    loadChatRooms(1, pageSize, searchText);
  }, [searchText]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (
      !isLastPage &&
      isSpaceAvailable(contentRefs.childRef, contentRefs.parentRef)
    ) {
      fetchNexRooms();
    }
  }, [
    rooms,
    isLastPage,
    contentRefs.childRef,
    contentRefs.parentRef,
    fetchNexRooms,
  ]);

  const isInitialRendered: boolean = page !== 0;
  return { fetchNexRooms, rooms, isLastPage, isInitialRendered };
};
