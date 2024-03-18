import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeConnection,
  establishConnection,
  subscribeChatMessage,
  subscribeUserConnection,
} from "src/socket/Socket";
import { addActiveChatMessage } from "src/store/engagement/engagement-actions";
// selectors
import { selectUserId } from "src/store/user/user-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
const useEngagementSocket = () => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const userId: string = useSelector(selectUserId);

  // effects
  useEffect(() => {
    if (!userId) return;
    establishConnection(userId);

    return () => {
      closeConnection();
    };
  }, [userId]);

  useEffect(() => {
    subscribeChatMessage((addedMessage: any) => {
      dispatch(addActiveChatMessage(addedMessage));
    });
    subscribeUserConnection();
  }, [dispatch]);
};

export default useEngagementSocket;
